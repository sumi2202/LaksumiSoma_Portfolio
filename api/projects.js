import { getDb } from "../lib/mongodb.js";

export default async function handler(req, res) {
  try {
    const db = await getDb();
    const projects = await db
      .collection("projects")
      .find({})
      .sort({ order: 1 })
      .toArray();

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}