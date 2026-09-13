import axios from 'axios';

export interface GstnData {
  gstin: string;
  legalName: string;
  tradeName: string;
  status: 'Active' | 'Cancelled' | 'Suspended';
  registrationDate: string;
  taxpayerType: string;
  recentFilings: {
    returnType: string;
    taxPeriod: string;
    status: 'Filed' | 'Pending';
    dateOfFiling: string;
  }[];
}

export const verifyGstn = async (gstin: string): Promise<GstnData | null> => {
  const apiUrl = process.env.VERIFICATION_API_URL || 'https://sandbox.apisetu.gov.in/api/v1';
  const apiKey = process.env.VERIFICATION_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn('⚠️ No VERIFICATION_API_KEY provided. Simulating GSTN API response.');
    
    if (gstin.length === 15) {
      return {
        gstin,
        legalName: 'Simulated Enterprise Pvt Ltd',
        tradeName: 'Simulated Enterprise',
        status: 'Active',
        registrationDate: '2018-07-01',
        taxpayerType: 'Regular',
        recentFilings: [
          { returnType: 'GSTR-3B', taxPeriod: '072026', status: 'Filed', dateOfFiling: '2026-08-20' },
          { returnType: 'GSTR-1', taxPeriod: '072026', status: 'Filed', dateOfFiling: '2026-08-11' },
        ],
      };
    }
    return null;
  }

  // Real API implementation
  const response = await axios.post(
    `${apiUrl}/gstn/verify`,
    { gstin },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
      timeout: 10000,
    }
  );

  const data = response.data;
  
  if (!data || !data.legalName) {
    return null;
  }

  return {
    gstin: data.gstin || gstin,
    legalName: data.legalName,
    tradeName: data.tradeName || data.legalName,
    status: data.status === 'Active' ? 'Active' : data.status === 'Suspended' ? 'Suspended' : 'Cancelled',
    registrationDate: data.registrationDate || 'Unknown',
    taxpayerType: data.taxpayerType || 'Regular',
    recentFilings: data.recentFilings?.map((f: any) => ({
      returnType: f.returnType,
      taxPeriod: f.taxPeriod,
      status: f.status === 'Filed' ? 'Filed' : 'Pending',
      dateOfFiling: f.dateOfFiling,
    })) || [],
  };
};
