import express from "express";
import cors from "cors";
import triviaData from "./routes/trivia.js";
import multiple_choice_data from "./routes/multiplechoice.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/trivia", (req, res) => {
  res.json(triviaData);
});

app.get("/multiple-choice", (req, res) => {
  res.json(multiple_choice_data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
