document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chatWindow = document.getElementById('chat-window');

    const responses = {
        'hello': 'Hi there! How can i assist you today?',
        'how are you': 'I,m here and ready to help you! How can I assist you?',
        'help': 'Of course! What kind of assistance do you need?',
        'how to center a div in css': 'To center a div using CSS, you can use the following code: display: flex; justify-content: center; align-items: center',
        'thanks': 'You,re welcome! I,m glad I could help.'
    };
    function getResponse(message) {
        message = message.toLowerCase();
        for(let keyword in responses) {
            if(message.includes(keyword)) {
                return responses[keyword];
            }
        }
        return "I,m not sure how to respond to that.";
    }
    function sendMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if(messageText) {
            sendMessage(messageText, 'send');
            messageInput.value = '';
            receiveMessage(getResponse(messageText));
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            sendButton.click();
        }
    });
    function receiveMessage(message) {
        setTimeout(() => {
            sendMessage(message, 'received');
        }, 800)
    }
})