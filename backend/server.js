import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 4000;
const DB_PATH = "./db.json";

app.use(cors());
app.use(express.json());

function readDB() {
  return JSON.parse(fs.readFileSync(DB_PATH));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

app.post("/api/login", (req, res) => {
  const body = req.body;
  const db = readDB();
  const user = db.users.find(
    (u) =>
      u.name === body.name &&
      u.email === body.email &&
      u.password === body.password
  );
  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
  } else {
    res.json({ role: user.role, name: user.name, email: user.email });
  }
});

app.post("/api/testimonials", (req, res) => {
  const body = req.body;
  if (
    !body.fullName ||
    !body.email ||
    !body.title ||
    !body.feedback ||
    !body.consent
  ) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const db = readDB();
  const newItem = {
    id: Date.now().toString(),
    fullName: body.fullName,
    email: body.email,
    designation: body.designation,
    company: body.company,
    profilePic: body.profilePic,
    rating: body.rating,
    title: body.title,
    feedback: body.feedback,
    consent: body.consent,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.testimonials.push(newItem);
  writeDB(db);
  res.json(newItem);
});

app.get("/api/testimonials", (req, res) => {
  const db = readDB();
  const items = db.testimonials.filter((t) => t.status === "approved");
  res.json(items);
});

app.get("/api/testimonials/:id", (req, res) => {
  const db = readDB();
  const item = db.testimonials.find((t) => t.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  if (item.status !== "approved")
    return res.status(403).json({ error: "Not approved" });
  res.json(item);
});

app.get("/api/admin/testimonials", (req, res) => {
  const db = readDB();
  res.json(db.testimonials);
});

app.patch("/api/admin/testimonials/:id", (req, res) => {
  const db = readDB();
  const item = db.testimonials.find((t) => t.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  item.status = req.body.status;
  item.updatedAt = new Date().toISOString();
  writeDB(db);
  res.json(item);
});

app.delete("/api/admin/testimonials/:id", (req, res) => {
  const db = readDB();
  const index = db.testimonials.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });
  db.testimonials.splice(index, 1);
  writeDB(db);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
