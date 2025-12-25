import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";
dotenv.config();

const port = process.env.PORT || 5000;

app.get('/' , (req, res) => {
  res.send("mohsin can you here me")
})

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server running for at port:${port}`);
    });
  })
  .catch((err) => {
    console.log(`mongodb connection failed!!!!!:`, err);
  });
