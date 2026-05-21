# WPoets Full Stack Developer Test

This project is a full-stack application built for the WPoets Full Stack Developer Test. It implements a dynamic 3-column design with connected sliders, powered by a CRUD backend to manage the tabs and slide content.

## Tech Stack
- **Backend**: Node.js, Express, Prisma ORM, PostgreSQL
- **Frontend**: React (JavaScript), Tailwind CSS

## Getting Started

To run this project locally on your machine:

1. **Setup Database:**
   Ensure you have PostgreSQL running. You will need to configure a `.env` file in the `backend` folder with your database connection string.

2. **Start the Backend:**
   ```bash
   cd backend
   npm install
   npx prisma db push
   # (Optional) Seed the database if a seed script is provided
   npm run dev
   ```

3. **Start the Frontend:**
   Open a new terminal window:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) (or the port Vite provides) in your browser.

---

## Development Roadmap

### Phase 1: Project & Database Setup
- Initialize the `frontend` (React + Vite) and `backend` (Node.js) directories.
- Connect to local PostgreSQL via Prisma environment variables.
- Define the `Tab` and `Slide` Models.
- Push the Schema to the database.

### Phase 2: Backend APIs (CRUD)
- Setup Express server.
- Implement full CRUD endpoints for `Tabs` and `Slides`.
- Create a database seed script to populate initial dummy data.

### Phase 3: Frontend Foundation
- Configure Tailwind CSS for styling.
- Implement a custom React slider component for the slider functionality.

### Phase 4: Main UI Implementation
- Build the 3-column desktop layout using Tailwind CSS:
  - **Left Column**: Tabs to switch between different sliders.
  - **Middle Column**: The main slider (with controls).
  - **Right Column**: A 1:1 square image that dynamically changes based on the active slide in the middle column.

### Phase 5: API Integration
- Connect the React frontend to the Express backend.
- Fetch Tabs and Slides data dynamically instead of using hardcoded state.

### Phase 6: Mobile Responsiveness
- Transform the Left Column tabs into an accordion for mobile devices.
- Update the Middle Column slider to display the Right Column's images as background images on mobile screens.

---

## Database Relationships Example

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