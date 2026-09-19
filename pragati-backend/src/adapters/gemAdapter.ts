import axios from 'axios';

export interface GemData {
  seller_id: string;
  status: string;
  rating?: number;
  assessment_status?: string;
}

export async function verifyGem(sellerId: string): Promise<GemData> {
  const apiKey = process.env.GEM_API_KEY;
  const apiUrl = process.env.GEM_API_URL || 'https://sandbox.api.gem.gov.in/verify';

  if (!apiKey) {
    console.warn("[GEM] Missing API Key. Using mock response.");
    return {
      seller_id: sellerId,
      status: "Active",
      rating: 4.5,
      assessment_status: "Verified"
    };
  }

  const response = await axios.post(apiUrl, { seller_id: sellerId }, {
    headers: { 'Authorization': `Bearer ${apiKey}` }
  });

  return response.data;
}
