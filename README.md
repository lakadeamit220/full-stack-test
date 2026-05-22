# WPoets Full Stack Developer Test

Welcome to my submission for the WPoets Full Stack Developer coding assessment. This project demonstrates a complete full-stack application built from scratch to exactly match the provided design mockups and requirements.

## Project Overview

The application features a dynamic, responsive user interface backed by a robust REST API and a relational database.

- **Desktop View**: A 3-column layout where the left column contains clickable tabs, the middle column features a slider with controls, and the right column displays a dynamic 1:1 image synchronized with the active slide.
- **Mobile View**: Transforms into a sleek accordion layout where the selected tab expands to show the slider, and the image acts as a blended background for the content.

The design has been crafted to match the provided `web-view.png` and `mobile-view.png` pixel-for-pixel.

## Tech Stack

This project was built using modern, scalable technologies:

**Frontend**
- **React.js (Vite)**: For building the dynamic user interface.
- **Tailwind CSS v4**: For responsive styling, grid layouts, and smooth animations.
- **Axios**: For handling API requests.

**Backend**
- **Node.js & Express.js**: For building the RESTful API using ES Modules.
- **PostgreSQL**: As the relational database.
- **Prisma ORM (v5)**: For database modeling, migrations, and type-safe queries.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/download/)

---

## Installation & Setup Guide

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/lakadeamit220/full-stack-test.git
cd full-stack-test
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

**Configure the Database:**
1. Open PostgreSQL and create a new database named `wpoets_test` (or whatever you prefer).
2. Rename `.env.example` to `.env` (or create a new `.env` file in the `backend` folder) and add your connection string:
```env
DATABASE_URL="postgresql://postgres:root@localhost:5432/wpoets_test?schema=public"
```
*(Update `postgres` and `root` to match your local PostgreSQL username and password).*

**Initialize the Database:**
Run the following commands to push the schema and seed the database with the mockup data and images:
```bash
npx prisma generate
npx prisma db push
node seed.js
```

**Start the Backend Server:**
```bash
npm run dev
```
*The backend will now be running at `http://localhost:5000`.*

---

### 3. Frontend Setup
Open a **new terminal window**, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

**Start the Frontend Server:**
```bash
npm run dev
```
*The frontend will now be running at `http://localhost:5173`.*

---

## Viewing the Application
- **Desktop**: Open your browser to `http://localhost:5173` and view the application in full screen.
- **Mobile**: Use Chrome DevTools (F12 -> Toggle Device Toolbar) to resize the window and interact with the responsive Accordion layout.

## Technical Answers
Please review the `Answers to technical questions.md` file in the root directory for my responses to the technical assessment questions.

---

## Database Relationships

To understand how the data flows between tables, here is our core structure:

### 1. The Tab Table
Represents the categories/tabs shown in the first column.
| id (UUID) | title | orderIndex |
| :--- | :--- | :--- |
| `tab-101` | Features | 1 |
| `tab-102` | Testimonials | 2 |

### 2. The Slide Table (One-to-Many with Tab)
Each tab has multiple slides. The `tabId` links exactly to its parent Tab.
| id (UUID) | tabId | title | content | imageUrl | orderIndex |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `slide-001` | `tab-101` | Fast Performance | Loads in under 1s | `/assets/img1.jpg` | 1 |
| `slide-002` | `tab-101` | Secure | Encrypted data | `/assets/img2.jpg` | 2 |
| `slide-003` | `tab-102` | Great Product | "I love it" - John | `/assets/img3.jpg` | 1 |

---

## Development Roadmap
Here is the step-by-step roadmap that was followed to build this application:

### Phase 1: Environment Setup
- Initialized Node.js backend & React + Vite frontend.
- Installed and configured Tailwind CSS v4.
- Cleaned up root directory and added `.gitignore`.
- Installed Express, dotenv, cors, and Prisma.

### Phase 2: Database Setup & Prisma
- Configured PostgreSQL database connection.
- Created `Tab` and `Slide` schemas using Prisma.
- Generated Prisma Client.

### Phase 3: Express Backend APIs (CRUD)
- Built main Express entry point with CORS and JSON parsing.
- Implemented full CRUD REST APIs for Tabs and Slides.
- Created `seed.js` script to populate database with exact mockups.

### Phase 4: Frontend State & API Integration
- Configured Axios for API requests.
- Fetched active Tabs and Slides data into React state.

### Phase 5: Desktop UI Implementation (3 Columns)
- **Left Column (Tabs):** Mapped dynamic tabs with SVG icons.
- **Middle Column (Custom Slider):** Displayed active slide data and pagination dots.
- **Right Column (Image Display):** Rendered 1:1 image mapped to the active slide.

### Phase 6: Mobile Responsiveness
- Implemented Tailwind `md:` media queries for mobile-first design.
- Transformed left column tabs into an interactive accordion.
- Merged the slider content with a background image overlay for mobile view.

### Phase 7: Final Polish
- Refined UI to exactly match `web-view.png` and `mobile-view.png` mockups.
- Answered technical questions truthfully based on actual project stack.

Thank you for reviewing my code!