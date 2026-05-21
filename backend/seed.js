import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with exact design data...');

  await prisma.slide.deleteMany();
  await prisma.tab.deleteMany();

  // Tab 1: Learning
  const tab1 = await prisma.tab.create({
    data: {
      title: 'Learning',
      orderIndex: 1
    }
  });

  // Tab 2: Technology
  const tab2 = await prisma.tab.create({
    data: {
      title: 'Technology',
      orderIndex: 2
    }
  });

  // Tab 3: Communication
  const tab3 = await prisma.tab.create({
    data: {
      title: 'Communication',
      orderIndex: 3
    }
  });

  // Slides for Learning
  await prisma.slide.create({
    data: {
      title: 'Usability enhancement and Training for Transaction Portal for Customers',
      content: 'Learn More',
      imageUrl: '/assets/DL-Learning-1.jpg',
      orderIndex: 1,
      tabId: tab1.id
    }
  });
  await prisma.slide.create({
    data: {
      title: 'Digital Learning Infrastructure 2',
      content: 'Learn More',
      imageUrl: '/assets/DL-Learning-1.jpg',
      orderIndex: 2,
      tabId: tab1.id
    }
  });
  await prisma.slide.create({
    data: {
      title: 'Digital Learning Infrastructure 3',
      content: 'Learn More',
      imageUrl: '/assets/DL-Learning-1.jpg',
      orderIndex: 3,
      tabId: tab1.id
    }
  });

  // Slides for Technology
  await prisma.slide.create({
    data: {
      title: 'Technology Solutions for Enterprise',
      content: 'Learn More',
      imageUrl: '/assets/DL-Technology.jpg',
      orderIndex: 1,
      tabId: tab2.id
    }
  });

  // Slides for Communication
  await prisma.slide.create({
    data: {
      title: 'Streamlined Corporate Communication',
      content: 'Learn More',
      imageUrl: '/assets/DL-Communication.jpg',
      orderIndex: 1,
      tabId: tab3.id
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
