// import { PrismaClient } from '@prisma/client'
 
// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }
 
// export const prisma = globalForPrisma.prisma ?? new PrismaClient()
 
// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma
// }
 
import { PrismaClient } from '@prisma/client'
import { PrismaMssql } from '@prisma/adapter-mssql'
 
const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter: new PrismaMssql({
      url: process.env.DATABASE_URL,
    }),
  })
}
 
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
 
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
 
export default prisma
 
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma