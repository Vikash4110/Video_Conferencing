const localVideo = document.getElementById('localVideoStream');
const remoteVideo = document.getElementById('remoteVideoStream');
const startButton = document.getElementById('startButton');
const endButton = document.getElementById('endButton');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatBox = document.getElementById('chat-box');

startButton.addEventListener('click', startConference);
endButton.addEventListener('click', endConference);
sendButton.addEventListener('click', sendMessage);

function startConference() {1
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            localVideo.srcObject = stream;
            // You would usually handle the streaming logic here using WebRTC.
        })
        .catch(error => {
            console.error('Error accessing media devices:', error);
        });
}

function endConference() {
    const localStream = localVideo.srcObject;
    if (localStream) {
        const tracks = localStream.getTracks();
        tracks.forEach(track => track.stop());
        localVideo.srcObject = null;
    }
}

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