const { GoogleGenerativeAI } = require("@google/generative-ai");
const { StreamingTextResponse, GoogleGenerativeAIStream } = require("ai")
export async function POST(req, res) {
    const reqBody = await req.json()
    // console.log(reqBody, "<<<<")
    const prompt = reqBody.data.prompt

    const genAI = new GoogleGenerativeAI("AIzaSyBwcIalIc8FzpjnCg4XTvMqfJqMCaavU3s")
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    const chatResponse = await model.generateContentStream(prompt)

    return new StreamingTextResponse(GoogleGenerativeAIStream(chatResponse))
}