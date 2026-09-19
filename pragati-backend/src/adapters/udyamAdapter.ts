import axios from 'axios';

export interface UdyamData {
  udyamNumber: string;
  enterpriseName: string;
  organizationType: string;
  majorActivity: string;
  enterpriseType: string; // Micro, Small, Medium
  dateOfRegistration: string;
  status: 'Active' | 'Inactive';
}

export const verifyUdyam = async (udyamNumber: string): Promise<UdyamData | null> => {
  const apiUrl = process.env.VERIFICATION_API_URL || 'https://sandbox.apisetu.gov.in/api/v1';
  const apiKey = process.env.VERIFICATION_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn('⚠️ No VERIFICATION_API_KEY provided. Simulating Udyam API response.');
    
    // Fallback simulation if no API key is provided
    if (udyamNumber.endsWith('FAIL')) {
      return {
        udyamNumber,
        enterpriseName: 'Simulated Inactive Enterprise Pvt Ltd',
        organizationType: 'Private Limited Company',
        majorActivity: 'Manufacturing',
        enterpriseType: 'Small',
        dateOfRegistration: '2020-05-10',
        status: 'Inactive',
      };
    }
    if (udyamNumber.startsWith('UDYAM-')) {
      return {
        udyamNumber,
        enterpriseName: 'Simulated Enterprise Pvt Ltd',
        organizationType: 'Private Limited Company',
        majorActivity: 'Manufacturing',
        enterpriseType: 'Small',
        dateOfRegistration: '2020-05-10',
        status: 'Active',
      };
    }
    return null;
  }

  // Real API implementation
  const response = await axios.post(
    `${apiUrl}/udyam/verify`,
    { udyamRegistrationNumber: udyamNumber },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
      timeout: 10000, // 10 second timeout per PRD
    }
  );

  const data = response.data;
  
  if (!data || !data.enterpriseName) {
    return null;
  }

  return {
    udyamNumber: data.udyamRegistrationNumber || udyamNumber,
    enterpriseName: data.enterpriseName,
    organizationType: data.organizationType || 'Unknown',
    majorActivity: data.majorActivity || 'Unknown',
    enterpriseType: data.enterpriseType || 'Micro',
    dateOfRegistration: data.dateOfRegistration || new Date().toISOString().split('T')[0],
    status: data.status === 'ACTIVE' ? 'Active' : 'Inactive',
  };
};
