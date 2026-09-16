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

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@pragati.gov.in' },
    update: {},
    create: {
      email: 'admin@pragati.gov.in',
      name: 'System Admin',
      password_hash: passwordHash,
      role: 'ADMIN',
    },
  });

  const auditorUser = await prisma.user.upsert({
    where: { email: 'auditor@pragati.gov.in' },
    update: {},
    create: {
      email: 'auditor@pragati.gov.in',
      name: 'Vigilance Auditor',
      password_hash: passwordHash,
      role: 'AUDITOR',
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

  // Create Vigilance Flags
  const flag1 = await prisma.vigilanceFlag.create({
    data: {
      bid_id: bid1.id,
      flag_type: 'IP_SPOOFING',
      severity: 'HIGH',
      description: 'Multiple bids submitted from same IP address across different registered entities.'
    }
  });

  const flag2 = await prisma.vigilanceFlag.create({
    data: {
      bid_id: bid1.id, // using bid1 since we only have bid1
      flag_type: 'TAX_EVASION',
      severity: 'MEDIUM',
      description: 'GST mismatch with declared turnover.'
    }
  });

  const flag3 = await prisma.vigilanceFlag.create({
    data: {
      bid_id: bid1.id, // using bid1
      flag_type: 'CARTEL_RISK',
      severity: 'HIGH',
      description: 'Bid pricing matches historical cartel patterns for this category.'
    }
  });

  // Create Clarifications
  await prisma.clarification.create({
    data: {
      bid_id: bid1.id,
      subject: 'Clarification on ISO requirement',
      message: 'Does our ISO 9001:2015 certificate from an international body meet the local criteria?',
      status: 'RESPONDED'
    }
  });
  
  await prisma.clarification.create({
    data: {
      bid_id: bid1.id,
      subject: 'Financial Turnover Extension',
      message: 'We request an extension for submitting our Q4 audited financials due to a delay by our chartered accountant.',
      status: 'PENDING'
    }
  });

  // Create Grievances
  await prisma.grievance.create({
    data: {
      bid_id: bid1.id,
      subject: 'Unfair Evaluation of Experience',
      description: 'Our previous project experience was unfairly rejected because the client was a semi-government entity rather than a fully state-owned enterprise.',
      status: 'INVESTIGATING'
    }
  });

  // Create Audit Logs
  await prisma.auditLog.createMany({
    data: [
      {
        action: 'USER_LOGIN',
        user_email: 'po@pragati.gov.in',
        target: 'System',
        status: 'SUCCESS',
        ip_address: '192.168.1.10',
      },
      {
        action: 'TENDER_CREATED',
        user_email: 'admin@pragati.gov.in',
        target: 'Tender: GEM/2023/B/1234567',
        status: 'SUCCESS',
        ip_address: '192.168.1.5',
      },
      {
        action: 'BID_VERIFIED',
        user_email: 'SYSTEM',
        target: 'Bid: TechCorp India Pvt Ltd',
        status: 'SUCCESS',
        details: { checksPassed: 2, riskLevel: 'LOW' },
        ip_address: '127.0.0.1',
      },
      {
        action: 'FAILED_LOGIN',
        user_email: 'unknown@example.com',
        target: 'System',
        status: 'FAILURE',
        details: { reason: 'Invalid credentials' },
        ip_address: '203.0.113.45',
      },
    ]
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
