import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Tenders...');
  
  const tender1 = await prisma.tender.upsert({
    where: { gem_tender_id: 'GEM/2026/B/489201' },
    update: {
      department: 'MoHFW (Procurement Wing-IV)',
      estimated_value: 48.50,
      awarded_value: 41.20,
    },
    create: {
      gem_tender_id: 'GEM/2026/B/489201',
      title: 'High-Precision Biomedical Diagnostic Imaging Suite (64-Slice PET-CT)',
      department: 'MoHFW (Procurement Wing-IV)',
      category: 'Medical Equipment',
      bid_end_date: new Date('2026-04-15T00:00:00Z'),
      estimated_value: 48.50,
      awarded_value: 41.20,
      compliance_rules: { "rule_1": "NABL", "rule_2": "MII" },
      status: 'AWARDED',
    },
  });

  const bidder1 = await prisma.bidder.create({
    data: {
      entity_name: 'Apex Heavy Diagnostic Systems',
      pan: 'ABCDE1234F',
      gstin: '07AAACA4918Q1Z4',
      gem_seller_id: 'GEM-SEL-1',
      entity_type: 'CORPORATE'
    }
  });

  const bidder2 = await prisma.bidder.create({
    data: {
      entity_name: 'ABC Industries Ltd',
      pan: 'XYZAB1234F',
      gstin: '07AAACA4918Q1Z4',
      gem_seller_id: 'GEM-SEL-2',
      entity_type: 'CORPORATE'
    }
  });


  const bid1 = await prisma.bid.create({
    data: {
      tender_id: tender1.id,
      bidder_id: bidder1.id,
      status: 'ACCEPTED',
      compliance_score: 95.0,
      risk_level: 'LOW',
      local_content_pct: 68.4,
      is_mse: false
    }
  });
  
  const bid2 = await prisma.bid.create({
    data: {
      tender_id: tender1.id,
      bidder_id: bidder2.id,
      status: 'ACCEPTED',
      compliance_score: 90.0,
      risk_level: 'LOW',
      local_content_pct: 50.0,
      is_mse: false
    }
  });

  const tender2 = await prisma.tender.upsert({
    where: { gem_tender_id: 'GEM/2026/B/481902' },
    update: {
      department: 'Ministry of Defence (AFMS)',
      estimated_value: 18.20,
      awarded_value: 15.85,
    },
    create: {
      gem_tender_id: 'GEM/2026/B/481902',
      title: 'Automated External Defibrillators & ICU Ventilator Modules',
      department: 'Ministry of Defence (AFMS)',
      category: 'Medical Equipment',
      bid_end_date: new Date('2026-04-10T00:00:00Z'),
      estimated_value: 18.20,
      awarded_value: 15.85,
      compliance_rules: { "rule_1": "MII" },
      status: 'AWARDED',
    },
  });
  
  const bidder3 = await prisma.bidder.create({
    data: {
      entity_name: 'MedTech Bharat Innovations LLP',
      pan: 'QWERT1234F',
      gstin: '27AABCM8210P1ZK',
      gem_seller_id: 'GEM-SEL-3',
      entity_type: 'LLP'
    }
  });
  
  const bid3 = await prisma.bid.create({
    data: {
      tender_id: tender2.id,
      bidder_id: bidder3.id,
      status: 'ACCEPTED',
      compliance_score: 92.0,
      risk_level: 'LOW',
      local_content_pct: 82.1,
      is_mse: true
    }
  });


  const tender3 = await prisma.tender.upsert({
    where: { gem_tender_id: 'GEM/2026/B/479100' },
    update: {
      department: 'Ministry of Heavy Industries',
      estimated_value: 32.00,
      awarded_value: 29.10,
    },
    create: {
      gem_tender_id: 'GEM/2026/B/479100',
      title: 'Heavy Mobile Medical Vans with On-board Sterilization Units',
      department: 'Ministry of Heavy Industries',
      category: 'Vehicles',
      bid_end_date: new Date('2026-04-05T00:00:00Z'),
      estimated_value: 32.00,
      awarded_value: 29.10,
      compliance_rules: { "rule_1": "MII" },
      status: 'AWARDED',
    },
  });
  
  const bidder4 = await prisma.bidder.create({
    data: {
      entity_name: 'Tata Motors Special Vehicles Div.',
      pan: 'ASDFG1234F',
      gstin: '27AAACT2727Q1ZW',
      gem_seller_id: 'GEM-SEL-4',
      entity_type: 'CORPORATE'
    }
  });
  
  const bid4 = await prisma.bid.create({
    data: {
      tender_id: tender3.id,
      bidder_id: bidder4.id,
      status: 'ACCEPTED',
      compliance_score: 98.0,
      risk_level: 'LOW',
      local_content_pct: 91.5,
      is_mse: false
    }
  });

  // Seed Vigilance Flags
  await prisma.vigilanceFlag.create({
    data: {
      bid_id: bid2.id,
      flag_type: 'CARTEL_RISK',
      severity: 'HIGH',
      description: 'Shared IP Subnet detected across multiple bids for identical items.'
    }
  });
  
  await prisma.vigilanceFlag.create({
    data: {
      bid_id: bid3.id,
      flag_type: 'TAX_EVASION',
      severity: 'MEDIUM',
      description: 'Discrepancy in reported turnover between GeM and GSTN portal.'
    }
  });

  // Seed Clarifications
  await prisma.clarification.create({
    data: {
      bid_id: bid1.id,
      subject: 'Discrepancy in Udyam Certificate',
      message: 'Please provide an updated Udyam Registration Certificate as the current one appears expired.',
      status: 'PENDING'
    }
  });

  // Seed Grievances
  await prisma.grievance.create({
    data: {
      bid_id: bid2.id,
      subject: 'Unfair rejection of technical bid',
      description: 'Our technical bid was rejected despite meeting all criteria listed in the tender document.',
      status: 'OPEN'
    }
  });

  // Seed Compliance Rules
  await prisma.complianceRule.create({
    data: {
      rule_id: 'RULE-GFR-144',
      name: 'GFR 144(xi) Land Border Compliance',
      description: 'Verifies if bidder from sharing land border is registered with DPIIT.',
      verification_source: 'MCA21 + DPIIT',
      gate_type: 'HARD_STOP',
      tolerance: '0%',
      weight: 'Mandatory',
      status: true
    }
  });
  
  await prisma.complianceRule.create({
    data: {
      rule_id: 'RULE-MII-50',
      name: 'Make In India (MII) Class-1',
      description: 'Verifies minimum 50% local content requirement.',
      verification_source: 'CA_UDIN_VALIDATOR',
      gate_type: 'SCORING',
      tolerance: '0%',
      weight: '20% Premium',
      status: true
    }
  });

  // Seed Portal Connectors
  await prisma.portalConnector.create({
    data: {
      name: 'GSTN Master API',
      type: 'REST_JSON',
      department: 'Ministry of Finance',
      status: 'HEALTHY',
      latency_ms: 142,
      quota_usage: 45000,
      quota_limit: 100000,
      resilience: 'Multi-AZ Active',
      verification_protocol: 'OAuth2 + X.509'
    }
  });

  await prisma.portalConnector.create({
    data: {
      name: 'MCA21 Company Graph',
      type: 'GRAPHQL',
      department: 'Ministry of Corporate Affairs',
      status: 'DEGRADED',
      latency_ms: 840,
      quota_usage: 12500,
      quota_limit: 50000,
      resilience: 'Single-AZ',
      verification_protocol: 'API Key + IP Whitelist'
    }
  });

  // Seed Audit Logs
  await prisma.auditLog.create({
    data: {
      action: 'PO_DECISION_APPROVED',
      user_email: 'officer@gov.in',
      target: `Bid: ${bid1.id}`,
      status: 'SUCCESS',
      details: { "decision": "APPROVED", "comments": "All checks passed" },
      ip_address: '10.0.0.5'
    }
  });

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
