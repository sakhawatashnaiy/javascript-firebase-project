import { db, collection, addDoc } from './firebase-config.js';

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

 window.sendMessage = async function () {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("user", message);
  userInput.value = "";

  await addDoc(collection(db, "messages"), {
    sender: "user",
    text: message,
    timestamp: new Date()
  });
  // Bot Typing...
   addMessage("bot", "Typing...", true);

  setTimeout(async () => {
    removeTyping();
    const reply = getBotReply(message);
    addMessage("bot", reply);

    await addDoc(collection(db, "messages"), {
      sender: "bot",
      text: reply,
      timestamp: new Date()
    });
  }, 1000);
};

function addMessage(sender, text, isTyping = false) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  if (isTyping) msg.id = "typing";
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}

 function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("login") || msg.includes("log in") || msg.includes("sign in")) 
    return "Please make sure you have entered the correct username and password.";

  if (msg.includes("payment") || msg.includes("pay")) 
    return "Payments can be made via credit card, Easypaisa, or JazzCash.";

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("salam")) 
    return "Hi! 👋 How can I help you today?";

  if (
    msg.includes("web development") ||
    msg.includes("html") ||
    msg.includes("css") ||
    msg.includes("javascript") ||
    msg.includes("react") ||
    msg.includes("frontend") ||
    msg.includes("backend") ||
    msg.includes("mujay web development") || 
    msg.includes("web ka kam") ||
    msg.includes("website banani hai")
  )
    return "Sure! I can help with web development. Are you working on frontend or backend?";

  if (msg.includes("firebase") || msg.includes("database") || msg.includes("auth"))
    return "Firebase supports Firestore (DB), Authentication, and Hosting. What part do you need help with?";

  if (msg.includes("form") || msg.includes("registration")) 
    return "Need help creating a form? I can guide you on HTML, validation, and saving data to Firebase.";

  return "I'm not sure how to help with that. Please ask a clear question or contact our support.";
}
