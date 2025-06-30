function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (message === '') return;

  const box = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message';
  msgDiv.textContent = 'You: ' + message;
  msgDiv.style.opacity = 0;
  msgDiv.style.transform = 'translateY(10px)';
  box.appendChild(msgDiv);

  // Animate
  setTimeout(() => {
    msgDiv.style.transition = 'all 0.3s ease';
    msgDiv.style.opacity = 1;
    msgDiv.style.transform = 'translateY(0)';
  }, 10);

  input.value = '';
  box.scrollTop = box.scrollHeight;
}
