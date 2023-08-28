document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", sendMessage);

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") return;

        const messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messageElement.classList.add("message", "sent");
        chatBox.appendChild(messageElement);

        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
    }
});
