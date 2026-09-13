import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
});

export interface AuditLogPayload {
  bid_id?: string;
  tender_id?: string;
  user_id?: string; // Optional if performed by system
  action: string;
  details: any;
  ip_address?: string;
}

export class AuditService {
  private indexName = 'yes-officer-audit-logs';

  constructor() {
    this.init();
  }

  private async init() {
    try {
      const exists = await client.indices.exists({ index: this.indexName });
      if (!exists) {
        await client.indices.create({ index: this.indexName });
        console.log(`Created Elasticsearch index: ${this.indexName}`);
      }
    } catch (error) {
      console.error('Error initializing Elasticsearch:', error);
    }
  }

  public async logAction(payload: AuditLogPayload): Promise<void> {
    try {
      await client.index({
        index: this.indexName,
        document: {
          ...payload,
          timestamp: new Date().toISOString(),
        },
      });
      console.log(`Audit log created: ${payload.action}`);
    } catch (error) {
      console.error('Error writing audit log to Elasticsearch:', error);
    }
  }

  public async searchLogs(query: string) {
    try {
      const result = await client.search({
        index: this.indexName,
        query: {
          multi_match: {
            query,
            fields: ['action', 'details.*'],
          },
        },
      });
      return result.hits.hits.map((hit: any) => hit._source);
    } catch (error) {
      console.error('Error searching audit logs:', error);
      return [];
    }
  }
}

export const auditService = new AuditService();
