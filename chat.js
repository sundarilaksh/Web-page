const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Simple chatbot responses
const responses = {
    "hello": "Hello! How can I help you?",
    "hi":"Hiiii!!!!Glad to have you.....",
    "how are you": "I'm just a chatbot, but I'm here to assist you.",
    "what's your name": "I'm just a simple chatbot, so I don't have a name.",
    "goodbye": "Goodbye! Feel free to come back if you have more questions.",
    "how's your day??":"It's fun , how about you??"
};

// Function to add user and bot messages to the chat
function addMessage(message, isUser) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    if (isUser) {
        messageElement.style.textAlign = 'right';
        messageElement.style.fontWeight = 'bold';
    }
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage === "") return;
    addMessage(userMessage, true);
    userInput.value = "";

    if (responses[userMessage]) {
        setTimeout(() => {
            addMessage(responses[userMessage], false);
        }, 500);
    } else {
        setTimeout(() => {
            addMessage("I'm sorry, I don't understand that.", false);
        }, 500);
    }
}

userInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
