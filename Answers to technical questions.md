# Answers to technical questions

### 1. How long did you spend on the coding test? What would you add to your solution if you had more time?
I spent approximately 4-5 hours on this coding test.
If I had more time, I would add:
- **Error Handling & Validation**: Adding more robust error handling and input validation in the Node.js/Express backend.
- **Frontend Error Boundaries**: Implementing React Error Boundaries to gracefully handle any unexpected UI crashes.
- **Loading Skeletons**: Adding UI skeleton loaders while the tabs and slides data are being fetched from the backend, rather than a simple loading text.

### 2. How would you track down a performance issue in production? Have you ever had to do this?
To track down a performance issue in production, I would:
1. **Frontend**: Use Chrome DevTools (Performance tab and React Profiler) to identify slow component renders or large bundle sizes causing slow initial loads.
2. **Backend**: Check Node.js logs for blocking synchronous operations and monitor API response times.
3. **Database**: Look for slow queries in PostgreSQL using `EXPLAIN ANALYZE` or check for missing indexes.

Yes, in my experience building real-time IoT dashboards, I have had to profile and optimize slow database queries and API endpoints to handle high-frequency data streams efficiently.

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
