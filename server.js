const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Sentiment = require("sentiment");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

const sentiment = new Sentiment();

app.post("/sentiment", async (req, res) => {
  const { userInput } = req.body;

  try {
    const result = sentiment.analyze(userInput);

    let sentimentLabel = "neutral";
    if (result.score > 0) {
      sentimentLabel = "positive";
    } else if (result.score < 0) {
      sentimentLabel = "negative";
    }

    return res.json({
      sentiment: sentimentLabel,
      confidence: Math.abs(result.comparative),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));