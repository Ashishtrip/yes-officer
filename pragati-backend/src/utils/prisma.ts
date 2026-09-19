import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

// Add the Audit Log Extension
export const prisma = prismaClient.$extends({
  query: {
    $allModels: {
      async $allOperations({ operation, model, args, query }) {
        const result = await query(args);

        // We only want to log mutations (creates, updates, deletes) on specific models
        const auditableModels = ['VerificationCheck', 'Bid', 'Document', 'Tender'];
        const auditableOperations = ['create', 'update', 'delete', 'createMany', 'updateMany', 'deleteMany'];

        if (auditableModels.includes(model as string) && auditableOperations.includes(operation)) {
          // Extract user email if provided in the context, otherwise default to SYSTEM
          // In a real scenario with ALS (AsyncLocalStorage), you'd pull the user context here.
          // For now, we will default to 'SYSTEM' unless explicitly passed (which is tricky with standard Prisma args without context passing)
          const user_email = 'SYSTEM'; // Placeholder until ALS or context passing is implemented

          const untypedArgs = args as any;
          // Fire and forget the audit log creation
          prismaClient.auditLog.create({
            data: {
              action: `${model}_${operation.toUpperCase()}`,
              user_email: user_email,
              target: model as string,
              status: 'SUCCESS',
              details: JSON.parse(JSON.stringify(untypedArgs.data || untypedArgs.where || {})),
            }
          }).catch(err => console.error("Failed to write audit log:", err));
        }

        return result;
      }
    }
  }
});

export default prisma;
