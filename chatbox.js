function toggleChatbox() {
    var chatContent = document.getElementById("chat-content");
    var toggleButton = document.getElementById("chat-toggle");

    // Check if the chat content is currently displayed
    if (chatContent.style.display === "none" || chatContent.style.display === "") {
        chatContent.style.display = "block"; // Show the chat content
        toggleButton.textContent = "Close";
    } else {
        chatContent.style.display = "none"; // Hide the chat content
        toggleButton.textContent = "Open";
    }
}


function postMessage() {
    var messageInput = document.getElementById("messageInput");
    var newMessage = messageInput.value.trim();
    var messagesContainer = document.getElementById("messages");

    if (newMessage !== "") {
        // Display user's message
        var userMsgElement = document.createElement("div");
        userMsgElement.textContent = "You: " + newMessage;
        userMsgElement.style.textAlign = "right"; // Align user messages to the right
        messagesContainer.appendChild(userMsgElement);
        messageInput.value = ""; // Clear input field
        scrollToBottom();

        // Simulate a response with a delay
        setTimeout(function () {
            var responseMsgElement = document.createElement("div");
            var responseText = getResponse(newMessage);
            responseMsgElement.textContent = "Support: " + responseText;
            messagesContainer.appendChild(responseMsgElement);
            scrollToBottom();
        }, 1500); // Adjust delay as needed
    }
}

function getResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes("shipping")) {
        return "Shipping usually takes 2-5 business days. Do you have a specific question about your order?";
    } else if (userMessage.includes("return")) {
        return "You can return products within 30 days of delivery. Would you like to start a return process?";
    } else if (userMessage.includes("thank you")) {
        return "You're welcome! If you have any more questions, feel free to ask.";
    } else {
        return "I'm not quite sure how to answer that. Could you provide more details or ask about something else?";
    }
}

function scrollToBottom() {
    var messagesContainer = document.getElementById("messages");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


// Initial setup to hide the chat content initially
document.getElementById("chat-content").style.display = "none";

