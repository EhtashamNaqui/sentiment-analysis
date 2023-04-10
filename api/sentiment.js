const Sentiment = require("sentiment");

const sentiment = new Sentiment();

module.exports = async (req, res) => {
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
};