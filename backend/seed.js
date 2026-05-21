import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with actual design data...');

  await prisma.slide.deleteMany();
  await prisma.tab.deleteMany();

  // Create Tabs
  const tabLearning = await prisma.tab.create({
    data: { title: 'Learning', orderIndex: 1 }
  });
  const tabTechnology = await prisma.tab.create({
    data: { title: 'Technology', orderIndex: 2 }
  });
  const tabCommunication = await prisma.tab.create({
    data: { title: 'Communication', orderIndex: 3 }
  });

  // Create Slides for Learning
  await prisma.slide.create({
    data: {
      title: 'Usability enhancement and Training for Transaction Portal for Customers',
      content: 'DIGITAL LEARNING INFRASTRUCTURE', // We can use content to store the badge text to keep schema simple
      imageUrl: '/DL-Learning-1.jpg',
      orderIndex: 1,
      tabId: tabLearning.id
    }
  });
  await prisma.slide.create({
    data: {
      title: 'Advanced Analytics and Data Science Fundamentals',
      content: 'DIGITAL LEARNING INFRASTRUCTURE',
      imageUrl: '/DL-Learning-1.jpg',
      orderIndex: 2,
      tabId: tabLearning.id
    }
  });

  // Create Slides for Technology
  await prisma.slide.create({
    data: {
      title: 'Secure and Scalable Cloud Infrastructure Solutions',
      content: 'TECHNOLOGY INFRASTRUCTURE',
      imageUrl: '/DL-Technology.jpg',
      orderIndex: 1,
      tabId: tabTechnology.id
    }
  });

  // Create Slides for Communication
  await prisma.slide.create({
    data: {
      title: 'Effective Corporate Communication Strategies',
      content: 'COMMUNICATION SYSTEMS',
      imageUrl: '/DL-Communication.jpg',
      orderIndex: 1,
      tabId: tabCommunication.id
    }
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
