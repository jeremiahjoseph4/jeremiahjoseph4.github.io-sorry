// script.js
// Send message functionality
document.querySelector('.send-button').addEventListener('click', sendMessage);

// Allow sending message with Enter key
document.querySelector('.chat-input input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.querySelector('.chat-input input');
    const message = input.value.trim();
    
    if (message) {
        // Create new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        
        // Get current time
        const now = new Date();
        const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        // Set message content
        messageElement.innerHTML = `
            ${message}
            <div class="message-time">${timeString}</div>
        `;
        
        // Add message to chat
        document.querySelector('.chat-messages').appendChild(messageElement);
        
        // Clear input
        input.value = '';
        
        // Scroll to bottom
        document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
    }
}

// Auto-scroll to bottom of chat
window.onload = function() {
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
};