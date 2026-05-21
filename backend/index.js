import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- TABS API ---

// Create Tab
app.post('/api/tabs', async (req, res) => {
  try {
    const { title, orderIndex } = req.body;
    const newTab = await prisma.tab.create({
      data: { title, orderIndex }
    });
    res.status(201).json(newTab);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tab' });
  }
});

// Read Tabs (with slides)
app.get('/api/tabs', async (req, res) => {
  try {
    const tabs = await prisma.tab.findMany({
      include: {
        slides: {
          orderBy: { orderIndex: 'asc' }
        }
      },
      orderBy: { orderIndex: 'asc' }
    });
    res.json(tabs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tabs' });
  }
});

// Update Tab
app.put('/api/tabs/:id', async (req, res) => {
  try {
    const { title, orderIndex } = req.body;
    const updatedTab = await prisma.tab.update({
      where: { id: req.params.id },
      data: { title, orderIndex }
    });
    res.json(updatedTab);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update tab' });
  }
});

// Delete Tab
app.delete('/api/tabs/:id', async (req, res) => {
  try {
    await prisma.tab.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete tab' });
  }
});


// --- SLIDES API ---

// Create Slide
app.post('/api/slides', async (req, res) => {
  try {
    const { title, content, imageUrl, orderIndex, tabId } = req.body;
    const newSlide = await prisma.slide.create({
      data: { title, content, imageUrl, orderIndex, tabId }
    });
    res.status(201).json(newSlide);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create slide' });
  }
});

// Read Slides
app.get('/api/slides', async (req, res) => {
  try {
    const slides = await prisma.slide.findMany({
      orderBy: { orderIndex: 'asc' }
    });
    res.json(slides);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch slides' });
  }
});

// Update Slide
app.put('/api/slides/:id', async (req, res) => {
  try {
    const { title, content, imageUrl, orderIndex, tabId } = req.body;
    const updatedSlide = await prisma.slide.update({
      where: { id: req.params.id },
      data: { title, content, imageUrl, orderIndex, tabId }
    });
    res.json(updatedSlide);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update slide' });
  }
});

// Delete Slide
app.delete('/api/slides/:id', async (req, res) => {
  try {
    await prisma.slide.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete slide' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
