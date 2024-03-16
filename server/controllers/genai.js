const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);

module.exports.generateText = async (req, res) => {
  try {
    const { prompt } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContentStream(prompt);
    let text = '';
    for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        text += chunkText;
      }
    
  } catch (error) {
    console.error("Error generating text:", error);
    res.status(500).json({ error: "Error generating text" });
  }
};