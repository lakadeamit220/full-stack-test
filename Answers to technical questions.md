# Answers to technical questions

### 1. How long did you spend on the coding test? What would you add to your solution if you had more time?
I spent approximately 4-5 hours on this coding test.
If I had more time, I would add:
- **Authentication**: Securing the Express backend APIs using JWT so only authorized users can modify the database.
- **Local Image Uploads**: Implementing a file upload middleware (like Multer) on the backend so users can upload images directly, rather than using static file paths.
- **Testing**: Writing basic unit tests for the Express API endpoints and React components to ensure long-term stability.
- **Advanced Tailwind Animations**: Expanding on the current Tailwind CSS transitions to create more complex and fluid visual effects for the slider.

### 2. How would you track down a performance issue in production? Have you ever had to do this?
To track down a performance issue in production, I would:
1. **Identify the bottleneck**: Use APM tools (like New Relic, Datadog, or Sentry) to check if the issue is in the frontend, backend, or database.
2. **Database profiling**: If it's the database, I would look for slow queries, missing indexes, or N+1 query problems (e.g., using Prisma Studio or PostgreSQL `EXPLAIN ANALYZE`).
3. **Backend profiling**: Check for memory leaks, unoptimized loops, or blocking synchronous operations in Node.js.
4. **Frontend profiling**: Use Chrome DevTools (Performance tab, React Profiler) to find unnecessary re-renders, large bundle sizes, or slow LCP (Largest Contentful Paint).

Yes, I have done this before by analyzing slow API endpoints and adding Redis caching to significantly reduce response times.

### 3. Please describe yourself using JSON.
```json
{
  "name": "Amit Lakade",
  "contact": {
    "email": "lakadeamit220@gmail.com",
    "phone": "+91 9168830229",
    "linkedin": "https://www.linkedin.com/in/amit-lakade-771843217/",
    "github": "https://github.com/lakadeamit220"
  },
  "role": "Full Stack Developer",
  "experience_years": "2+",
  "summary": "Full Stack Developer with 2+ years of experience designing and developing real-time IoT dashboards and enterprise applications using the MERN stack and PostgreSQL.",
  "what_i_do_best": [
    "Develop scalable backend architectures using Node.js and Express.js",
    "Build real-time data pipelines, IoT dashboards, and analytics platforms",
    "Design secure REST APIs with authentication and RBAC",
    "Optimize performance using Redis caching and efficient database queries",
    "Create responsive UI applications with geospatial and live data visualization",
    "Deploy and manage production applications using Docker and AWS EC2"
  ],
  "technical_skills": {
    "frontend": ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Responsive Design", "Framer Motion", "Three.js"],
    "backend": ["Node.js", "Express.js", "REST APIs", "Middleware Architecture"],
    "databases": ["MongoDB", "PostgreSQL", "Schema Design", "Query Optimization"],
    "real_time": ["MQTT", "Socket.io", "WebSockets"],
    "caching_performance": ["Redis", "API Optimization"],
    "deployment_devops": ["Docker", "AWS EC2"],
    "data_visualization": ["Recharts", "React-Leaflet (Geospatial Mapping)"],
    "security": ["JWT Authentication", "RBAC", "Authorization", "Input Validation"],
    "state_management": ["Zustand", "React Hooks"],
    "tools": ["Vite", "Git", "GitHub"],
    "integrations": ["Web3Forms", "OpenStreetMap Nominatim", "Ambee IoT Platform"],
    "ai_tools": ["GitHub Copilot", "Cursor", "Antigravity"]
  },
  "mindset": "I continuously improve development speed and code quality by incorporating modern AI-assisted tools."
}
```
