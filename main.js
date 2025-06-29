const messagesDiv = document.getElementById('messages');
function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (message) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    messagesDiv.appendChild(msgDiv);
    input.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}