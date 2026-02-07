
import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World! Subscribe to get a MOMMY!!");
})


app.get("/about", (req, res) => {
    res.send("<h1> MAKIMA!! </h1>");
})

app.use((req, res) => {
    res.status(404).send(" Error 404!! The page you are looking for does not exist");
})
 
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Welcome to my server port: ${PORT}`);
})
  
