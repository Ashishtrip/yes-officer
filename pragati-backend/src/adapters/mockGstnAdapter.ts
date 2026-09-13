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

export const mockGstnVerify = async (gstin: string): Promise<GstnData | null> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (gstin.length === 15) {
    return {
      gstin,
      legalName: 'Mock Enterprise Pvt Ltd',
      tradeName: 'Mock Enterprise',
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
};
