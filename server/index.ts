import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Production-ready logging middleware
app.use((req, res, next) => {
  if (app.get("env") === "production") {
    // Only log API calls in production
    const start = Date.now();
    const path = req.path;

    res.on("finish", () => {
      if (path.startsWith("/api")) {
        const duration = Date.now() - start;
        log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
      }
    });
  }
  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Production error handler - no stack traces
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = app.get("env") === "production" 
      ? "Internal Server Error"  // Generic message in production
      : err.message || "Internal Server Error";

    res.status(status).json({ message });
    if (app.get("env") !== "production") {
      throw err; // Only throw in development
    }
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`Server running in ${app.get("env")} mode on port ${port}`);
  });
})();