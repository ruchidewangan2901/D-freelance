const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const supabase = require("./supabase");



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔧 Debug log
console.log("🔧 Starting backend server...");

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ Backend working!");
});

// ✅ Fetch jobs
app.get("/api/jobs", async (req, res) => {
  const { data, error } = await supabase.from("jobs").select("*");
  if (error) {
    console.error("❌ Error fetching jobs:", error);
    return res.status(500).send("Server error");
  }
  res.json(data);
});

// ✅ Post job
app.post('/api/jobs', async (req, res) => {
  const { title, description, budget } = req.body;

  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([{ title, description, budget }])
      .select(); // ensures inserted data is returned

    if (error) {
      console.error("Insert error:", error);
      return res.status(500).json({ error: "Failed to insert job" });
    }

    if (!data || data.length === 0) {
      return res.status(500).json({ error: "No data returned from Supabase" });
    }

    res.status(200).json(data[0]); // ✅ now it's safe
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Unexpected server error" });
  }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
