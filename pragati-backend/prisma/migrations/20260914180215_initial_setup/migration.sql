-- CreateTable
CREATE TABLE "Tender" (
    "id" TEXT NOT NULL,
    "gem_tender_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "bid_end_date" TIMESTAMP(3) NOT NULL,
    "compliance_rules" JSONB NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bidder" (
    "id" TEXT NOT NULL,
    "entity_name" TEXT NOT NULL,
    "pan" TEXT NOT NULL,
    "gstin" TEXT NOT NULL,
    "udyam_number" TEXT,
    "gem_seller_id" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bidder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bid" (
    "id" TEXT NOT NULL,
    "tender_id" TEXT NOT NULL,
    "bidder_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "compliance_score" DOUBLE PRECISION,
    "risk_level" TEXT,
    "ai_recommendation" TEXT,
    "po_decision" TEXT,
    "po_comments" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "bid_id" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "extracted_fields" JSONB,
    "classification_label" TEXT,
    "classification_confidence" DOUBLE PRECISION,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationCheck" (
    "id" TEXT NOT NULL,
    "bid_id" TEXT NOT NULL,
    "check_type" TEXT NOT NULL,
    "portal_source" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "submitted_value" JSONB,
    "verified_value" JSONB,
    "match_result" TEXT,
    "discrepancy_detail" TEXT,
    "verified_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationCheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'PROCUREMENT_OFFICER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tender_gem_tender_id_key" ON "Tender"("gem_tender_id");

-- CreateIndex
CREATE UNIQUE INDEX "Bid_bidder_id_key" ON "Bid"("bidder_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_tender_id_fkey" FOREIGN KEY ("tender_id") REFERENCES "Tender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_bidder_id_fkey" FOREIGN KEY ("bidder_id") REFERENCES "Bidder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_bid_id_fkey" FOREIGN KEY ("bid_id") REFERENCES "Bid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationCheck" ADD CONSTRAINT "VerificationCheck_bid_id_fkey" FOREIGN KEY ("bid_id") REFERENCES "Bid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
