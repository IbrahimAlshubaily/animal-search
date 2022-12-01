import express from "express";
import cors from "cors";
import Chance from "chance";

const app = express();
app.use(cors());

const chance = new Chance();

const animals = [...Array(100).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

app.get("/animals", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const result = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );
  res.send(result);
});

app.listen("8080", () => console.log("8080, I hear you dawg"));
