// Function to toggle content visibility
function toggleContent(contentId) {
    const content = document.getElementById(contentId);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

// Get a reference to the iframe
const chatbotIframe = document.getElementById('chatbot-iframe');

// Function to adjust iframe height based on its content
function adjustIframeHeight() {
    const contentHeight = chatbotIframe.contentWindow.document.body.scrollHeight;
    chatbotIframe.style.height = contentHeight + 'px';
}

// Call the function whenever the content inside the iframe changes
chatbotIframe.addEventListener('load', adjustIframeHeight);

const chatbotIcon = document.getElementById("chatbot-icon");
const chatWindow = document.getElementById("chat-window");

chatbotIcon.addEventListener("click", function () {
    chatWindow.classList.toggle("hidden");
});

// Your JavaScript functions and logic here
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Get a reference to the logout icon
const logoutIcon = document.getElementById("contact-icon");
const thankYouMessage = document.createElement("div");
thankYouMessage.innerHTML = "Thank you for visiting!";
thankYouMessage.style.color = "white";
thankYouMessage.style.position = "fixed";
thankYouMessage.style.bottom = "50px";
thankYouMessage.style.right = "50px";
thankYouMessage.style.fontSize = "24px";
thankYouMessage.style.display = "none";

// Add the thank you message to the body
document.body.appendChild(thankYouMessage);

// Function to handle logout
// Get a reference to the logout icon


// Function to handle logout
function handleLogout() {
    // Hide the chatbot iframe (if it's visible)
    chatbotIframe.style.display = "none";
    
    // Navigate to the thankyou.html page
    window.location.href = "thank.html";
    
    // You can also add other logout-related logic here if needed
}

// Attach the handleLogout function to the logout icon's click event
logoutIcon.addEventListener("click", handleLogout);
// Get a reference to the chat window element


// Function to toggle the visibility of the chat console
function toggleChatConsole() {
    chatWindow.classList.toggle("hidden");
}

// Attach the toggleChatConsole function to the chatbot icon's click event
chatbotIcon.addEventListener("click", toggleChatConsole);

// Initially hide the chat console
chatWindow.classList.add("hidden");
