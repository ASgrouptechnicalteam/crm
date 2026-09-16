const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const img = await prisma.propertyImage.findFirst({ select: { image_url: true } });
  console.log('Sample image URL:', img?.image_url);
}
run().finally(() => prisma.$disconnect());
