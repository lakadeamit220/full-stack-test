# Answers to technical questions

### 1. How long did you spend on the coding test? What would you add to your solution if you had more time?
I spent approximately 4-5 hours on this coding test.
If I had more time, I would add:
- **Authentication & Authorization**: To secure the backend APIs so only admins can manage Tabs and Slides.
- **Image Upload functionality**: Using AWS S3 or Cloudinary to upload images via the backend instead of using direct URLs.
- **Animations**: Using Framer Motion for more complex and fluid slider transitions instead of pure CSS transitions.
- **Unit & Integration Testing**: Using Jest for the Express API and React Testing Library for the frontend components to ensure stability.
- **TypeScript support**: Migrating the frontend from JavaScript to TypeScript for better type safety and developer experience.

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
  "role": "Full Stack Developer",
  "skills": [
    "React.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS"
  ],
  "passion": "Building modern, scalable, and responsive web applications.",
  "status": "Ready to build awesome things at WPoets!"
}
```
