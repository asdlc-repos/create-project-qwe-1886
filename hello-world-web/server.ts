import express from "express";
import path from "path";

const app = express();
const PORT = parseInt(process.env.PORT ?? "8080", 10);
const DIST_DIR = path.join(__dirname, "..", "dist");

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use(express.static(DIST_DIR));

app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
