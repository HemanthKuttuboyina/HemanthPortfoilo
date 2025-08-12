import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import personalData from "../assets/personalData.json"; // store your info here

export default function ChatbotOverlay() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const GEMINI_API_KEY = #; // ⚠️ This will be visible to everyone

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    // 1️⃣ Check if it's about you
    const keywords = ["you", "your", "portfolio", "project", "skill"];
    if (keywords.some(k => input.toLowerCase().includes(k))) {
      setMessages(prev => [...prev, { sender: "bot", text: `Here’s info about me: ${JSON.stringify(personalData)}` }]);
      setLoading(false);
      return;
    }

    // 2️⃣ Fetch latest info from Gemini
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ role: "user", parts: [{ text: input }] }]
        }
      );
      const reply = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't find info.";
      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
    } catch {
      setMessages(prev => [...prev, { sender: "bot", text: "Error fetching latest info." }]);
    }
    setLoading(false);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full cursor-pointer shadow-lg"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 w-80 bg-white shadow-lg rounded-lg flex flex-col"
        >
          <div className="p-3 bg-blue-600 text-white rounded-t-lg">Chat with me</div>
          <div className="flex-1 p-3 overflow-y-auto max-h-80">
            {messages.map((msg, i) => (
              <div key={i} className={`my-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <div className="text-gray-500 text-sm">Thinking...</div>}
          </div>
          <div className="flex border-t">
            <input
              className="flex-1 p-2 outline-none bg-green-600"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="px-4 bg-blue-600 text-white">Send</button>
          </div>
        </motion.div>
      )}
    </>
  );
}
