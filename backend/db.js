const { Pool } = require("pg");

// Create a new Pool instance with your PostgreSQL connection details

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
console.log(process.env.POSTGRES_URL);
pool.connect((err) => {
  if (err) throw err;
  console.log("connection successful");
});
// CREATE operation
async function createCandidate(
  name,
  email,
  phone,
  skills,
  status,
  salary,
  score,
  nodeExperience,
  reactExperience
) {
  try {
    const queryText =
      "INSERT INTO candidates (name,email,phone,skills,current_status,expected_salary,score, nodeexperience, reactexperience) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9) RETURNING *";
    const values = [
      name,
      email,
      phone,
      skills,
      status,
      salary,
      score,
      nodeExperience,
      reactExperience,
    ];
    const result = await pool.query(queryText, values);
    return result.rows[0];
  } catch (error) {
    console.log("dberror", error);
  }
}

// READ operation
async function getCandidate(id) {
  const queryText = "SELECT * FROM candidates WHERE id = $1";
  const values = [id];
  const result = await pool.query(queryText, values);
  return result.rows[0];
}

// UPDATE operation
async function updateCandidate(
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
) {
  try {
    const queryText =
      "UPDATE candidates SET name = $1, email = $2, phone = $3, skills = $4, current_status = $5,expected_salary = $6,score = $7,nodeexperience = $8, reactexperience = $9 WHERE id = $10 RETURNING *";
    const values = [
      name,
      email,
      mobile,
      skills,
      status,
      salary,
      totalScore,
      nodeExperience,
      reactExperience,
      id,
    ];
    const result = await pool.query(queryText, values);
    return result.rows[0];
  } catch (error) {
    console.log("putError", error);
  }
}

// DELETE operation
async function deleteCandidate(id) {
  const queryText = "DELETE FROM candidates WHERE id = $1 RETURNING *";
  const values = [id];
  const result = await pool.query(queryText, values);
  return result.rows[0];
}

async function getAllCandidates() {
  const queryText = "SELECT * FROM candidates";
  const result = await pool.query(queryText);
  return result.rows;
}

module.exports = {
  createCandidate,
  getCandidate,
  updateCandidate,
  deleteCandidate,
  getAllCandidates,
  pool,
};
