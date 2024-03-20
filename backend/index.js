const express = require("express");
const bodyParser = require("body-parser");
const {
  createCandidate,
  getCandidate,
  updateCandidate,
  deleteCandidate,
  getAllCandidates,
} = require("./db");

const app = express();
const cors = require("cors");
const { calculateTotalScore } = require("./helper");

app.use(bodyParser.json());
app.use(cors());

app.post("/addCandidate", async (req, res) => {
  const {
    name,
    email,
    mobile,
    skills,
    status,
    nodeExperience,
    reactExperience,
    salary,
  } = req.body;
  const totalScore = calculateTotalScore(nodeExperience, reactExperience);
  try {
    const newCandidate = await createCandidate(
      name,
      email,
      mobile,
      skills,
      status,
      salary,
      totalScore,
      nodeExperience,
      reactExperience
    );
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/candidates/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const candidate = await getCandidate(id);
    if (candidate) {
      res.json(candidate);
    } else {
      res.status(404).json({ error: "Candidate not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/candidates/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    mobile,
    skills,
    status,
    nodeExperience,
    reactExperience,
    salary,
  } = req.body;
  try {
    const totalScore = calculateTotalScore(nodeExperience, reactExperience);
    const updatedCandidate = await updateCandidate(
      name,
      email,
      mobile,
      skills,
      status,
      salary,
      totalScore,
      nodeExperience,
      reactExperience,
      id
    );
    res.json(updatedCandidate);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/candidates/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCandidate = await deleteCandidate(id);
    if (deletedCandidate) {
      res.json(deletedCandidate);
    } else {
      res.status(404).json({ error: "Candidate not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/candidates", async (req, res) => {
  try {
    const candidates = await getAllCandidates();
    res.json(candidates);
  } catch (error) {
    console.error("Error fetching candidates:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
