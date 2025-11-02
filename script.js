// script.js
// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

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
