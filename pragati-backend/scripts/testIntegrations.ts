import { PortalIntegrationService } from '../src/services/PortalIntegrationService';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const testIntegrations = async () => {
  console.log('Testing Portal Integrations...');
  console.log(`API URL Configured: ${process.env.VERIFICATION_API_URL}`);
  console.log(`API Key Provided: ${process.env.VERIFICATION_API_KEY === 'your_api_key_here' ? 'No (Using fallback)' : 'Yes'}`);
  console.log('-------------------------------------------');

  const portalService = new PortalIntegrationService();

  try {
    console.log('1. Testing Udyam Verification (Expected: Success or Simulated Success)');
    const udyamResult = await portalService.verifyUdyam('UDYAM-TN-02-0001234');
    console.log('Udyam Result:', udyamResult);
  } catch (error: any) {
    console.error('Udyam Test Failed:', error.message);
  }

  console.log('-------------------------------------------');

  try {
    console.log('2. Testing GSTN Verification (Expected: Success or Simulated Success)');
    const gstnResult = await portalService.verifyGstn('22AAAAA0000A1Z5');
    console.log('GSTN Result:', gstnResult);
  } catch (error: any) {
    console.error('GSTN Test Failed:', error.message);
  }
};

testIntegrations();
