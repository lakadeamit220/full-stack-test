import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clean existing data
  await prisma.slide.deleteMany();
  await prisma.tab.deleteMany();

  // Create Tabs
  const tab1 = await prisma.tab.create({
    data: {
      title: 'Our Mission',
      orderIndex: 1
    }
  });

  const tab2 = await prisma.tab.create({
    data: {
      title: 'Our Vision',
      orderIndex: 2
    }
  });

  const tab3 = await prisma.tab.create({
    data: {
      title: 'Core Values',
      orderIndex: 3
    }
  });

  // Create Slides for Tab 1
  await prisma.slide.create({
    data: {
      title: 'Empowering Developers',
      content: 'We build tools that make developers more productive and happier.',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=600',
      orderIndex: 1,
      tabId: tab1.id
    }
  });
  
  await prisma.slide.create({
    data: {
      title: 'Open Source First',
      content: 'We believe in giving back to the community that made us possible.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=600',
      orderIndex: 2,
      tabId: tab1.id
    }
  });

  // Create Slides for Tab 2
  await prisma.slide.create({
    data: {
      title: 'Future of Tech',
      content: 'Anticipating the next wave of technological evolution.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=600',
      orderIndex: 1,
      tabId: tab2.id
    }
  });

  // Create Slides for Tab 3
  await prisma.slide.create({
    data: {
      title: 'Integrity',
      content: 'Doing the right thing, always.',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=600',
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
