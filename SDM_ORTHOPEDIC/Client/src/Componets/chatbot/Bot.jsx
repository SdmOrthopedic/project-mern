// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { text: "We would be pleased to answer any questions you may have.", sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const intervalRef = useRef(null);
//   const messagesEndRef = useRef(null);

//   const handleSend = async () => {
//     if (input.trim() === "") return;

//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }

//     const userMessage = { text: input, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);

//     try {
//       const response = await axios.post("https://e0807461-36ee-49b7-83a1-7394ecf4f1d2-00-2eszivwvczdbm.pike.replit.dev/get-response", {
//         user_input: input,
//       });

//       const botMessage = response.data.response;
//       setIsTyping(true);
//       displayBotMessage(botMessage);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }

//     setInput("");
//   };

//   const displayBotMessage = (text) => {
//     let index = 0;
//     const botMessage = { text: "", sender: "bot" };
//     setMessages((prev) => [...prev, botMessage]);

//     intervalRef.current = setInterval(() => {
//       if (index < text.length) {
//         setMessages((prev) => {
//           const lastMessage = prev[prev.length - 1];
//           const updatedMessage = { ...lastMessage, text: lastMessage.text + text[index] };
//           return [...prev.slice(0, -1), updatedMessage];
//         });
//         index++;
//       } else {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//         setIsTyping(false);
//       }
//     }, 50);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="max-w-sm mx-auto mt-10">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="p-4">
//           <div className="flex items-center mb-4">
//             <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
//               <i className="fas fa-user"></i>
//             </div>
//             <div className="ml-3">
//               <p className="text-sm font-medium text-gray-900">SDM Orthopaedic AI assistant</p>
//             </div>
//           </div>

//           <div className="h-64 overflow-y-auto border-t border-b mb-4">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
//                 <div
//                   className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             {isTyping && (
//               <div className="flex justify-start mb-2">
//                 <div className="p-2 rounded-lg max-w-xs bg-gray-200 text-gray-800">
//                   Typing...
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef}></div>
//           </div>
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Type a message..."
//             className="w-full px-4 py-2 border rounded-lg"
//           />
//           <button
//             onClick={handleSend}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "We would be pleased to answer any questions you may have.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() === "") return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("https://e0807461-36ee-49b7-83a1-7394ecf4f1d2-00-2eszivwvczdbm.pike.replit.dev/get-response", {
        user_input: input,
      });

      const botMessage = response.data.response;
      setIsTyping(true);
      displayBotMessage(botMessage);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  const displayBotMessage = (text) => {
    let index = 0;
    const botMessage = { text: "", sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);

    intervalRef.current = setInterval(() => {
      if (index < text.length) {
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          const updatedMessage = { ...lastMessage, text: lastMessage.text + text[index] };
          return [...prev.slice(0, -1), updatedMessage];
        });
        index++;
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsTyping(false);
      }
    }, 50);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 border-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-white">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <i className="fas fa-user"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">SDM Orthopaedic AI Assistant</p>
            </div>
          </div>

          <div className="h-80 overflow-y-auto border-t border-b mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
                <div
                  className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-2">
                <div className="p-2 rounded-lg max-w-xs bg-gray-200 text-gray-800">
                
                </div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            onClick={handleSend}
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;