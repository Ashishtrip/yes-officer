import axios from 'axios';

export interface PanData {
  pan: string;
  status: string;
  name_match?: boolean;
  name?: string;
}

export async function verifyPan(pan: string): Promise<PanData> {
  const apiKey = process.env.PAN_API_KEY;
  const apiUrl = process.env.PAN_API_URL || 'https://sandbox.api.incometax.gov.in/verify';

  if (!apiKey) {
    console.warn("[PAN] Missing API Key. Using mock response.");
    return {
      pan,
      status: "Active",
      name_match: true,
      name: "Mock Enterprise"
    };
  }

  const response = await axios.post(apiUrl, { pan }, {
    headers: { 'Authorization': `Bearer ${apiKey}` }
  });

  return response.data;
}
