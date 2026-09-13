export interface UdyamData {
  udyamNumber: string;
  enterpriseName: string;
  organizationType: string;
  majorActivity: string;
  enterpriseType: string; // Micro, Small, Medium
  dateOfRegistration: string;
  status: 'Active' | 'Inactive';
}

export const mockUdyamVerify = async (udyamNumber: string): Promise<UdyamData | null> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock valid response
  if (udyamNumber.startsWith('UDYAM-')) {
    return {
      udyamNumber,
      enterpriseName: 'Mock Enterprise Pvt Ltd',
      organizationType: 'Private Limited Company',
      majorActivity: 'Manufacturing',
      enterpriseType: 'Small',
      dateOfRegistration: '2020-05-10',
      status: 'Active',
    };
  }

  // Mock invalid
  return null;
};
