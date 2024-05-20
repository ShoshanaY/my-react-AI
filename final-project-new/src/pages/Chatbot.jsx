import { useState } from 'react';
import './Chatbot.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageInput, TypingIndicator, MessageList, Message } from "@chatscope/chat-ui-kit-react";

const API_KEY =  "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" // process.env.REACT_APP_CHATGPT_API_KEY;  // Uncomment this line

function Chatbot() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello I'm Trolly! <br/> How can I assist you with your travel plans today?",
      sender: "ChatGPT"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === "ChatGPT" ? "assistant" : "user",
      content: messageObject.message
    }));

    const systemMessage = {
      role: "system",
      content: "Speak like a travel agent and be very clear about everything the user needs to know about traveling. speak with a service language"
    }

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();
      console.log(data);

      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        setMessages([
          ...chatMessages, 
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }
        ]);
      } else {
        throw new Error('No valid choices found.');
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setMessages([
        ...chatMessages,
        {
          message: 'An error occurred while trying to communicate with ChatGPT.',
          sender: "ChatGPT"
        }
      ]);
    } finally {
      setTyping(false);
    }
  }

  return (
    <div className="chatbot-container">
      <div style={{ position: "center", height: "600px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList 
            scrollBehavior='smooth'
            typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing..." /> : null}>
              {messages.map((message, i) => (
                <Message key={i} model={message}
                className={message.sender === "user" ? "user-message" : "assistant-message"} />
                
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Chatbot;