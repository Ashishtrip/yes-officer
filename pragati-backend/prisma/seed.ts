import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create test user (PO)
  const passwordHash = await bcrypt.hash('password123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'po@pragati.gov.in' },
    update: {},
    create: {
      email: 'po@pragati.gov.in',
      name: 'Ashish Tripathi',
      password_hash: passwordHash,
      role: 'PROCUREMENT_OFFICER',
    },
  });

  // Create Tender 1
  const tender1 = await prisma.tender.upsert({
    where: { gem_tender_id: 'GEM/2023/B/1234567' },
    update: {},
    create: {
      gem_tender_id: 'GEM/2023/B/1234567',
      title: 'Road Construction - Highway 45',
      category: 'Infrastructure',
      bid_end_date: new Date('2024-12-31'),
      compliance_rules: { min_turnover: 5000000 },
      status: 'ACTIVE',
    },
  });

  // Create Tender 2
  const tender2 = await prisma.tender.upsert({
    where: { gem_tender_id: 'GEM/2023/B/9876543' },
    update: {},
    create: {
      gem_tender_id: 'GEM/2023/B/9876543',
      title: 'Supply of Medical Equipment',
      category: 'Healthcare',
      bid_end_date: new Date('2023-10-30'),
      compliance_rules: { iso_required: true },
      status: 'CLOSED',
    },
  });

  // Create a Bidder
  const bidder1 = await prisma.bidder.create({
    data: {
      entity_name: 'TechCorp India Pvt Ltd',
      pan: 'ABCDE1234F',
      gstin: '22AAAAA0000A1Z5',
      udyam_number: 'UDYAM-TN-02-0001234',
      gem_seller_id: 'SELLER_9876',
      entity_type: 'Private Limited',
    },
  });

  // Create a Bid
  const bid1 = await prisma.bid.create({
    data: {
      tender_id: tender1.id,
      bidder_id: bidder1.id,
      status: 'PROCESSED',
      compliance_score: 85.5,
      risk_level: 'LOW',
      ai_recommendation: 'All compliance checks passed. Recommended for further evaluation.',
      verificationChecks: {
        create: [
          {
            check_type: 'GST_FILING',
            portal_source: 'GSTN',
            status: 'VERIFIED',
            match_result: 'MATCH',
            discrepancy_detail: 'No discrepancies found.',
          },
          {
            check_type: 'UDYAM_REGISTRATION',
            portal_source: 'UDYAM',
            status: 'VERIFIED',
            match_result: 'MATCH',
            discrepancy_detail: 'No discrepancies found.',
          },
        ]
      }
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
