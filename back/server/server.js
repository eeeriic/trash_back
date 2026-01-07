const express = require("express")
const data = require("../pricesData/merged.json")

const app = express()
const PORT = 3001

app.use(express.json())

app.get("/prices", (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});