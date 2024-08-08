}

function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatMessages.appendChild(messageElement);
}messageForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // ... rest of your code ...
});
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const fileInput = document.getElementById('file-input');
const apiSelect = document.getElementById('api-select');
const chatMessages = document.getElementById('chat-messages');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = messageInput.value;
  const file = fileInput.files[0];
  const selectedApi = apiSelect.value;

  sendMessage(selectedApi, message, file);
  displayMessage('User', message);
  messageInput.value = '';
  fileInput.value = '';
});

async function sendMessage(api, message, file) {
  let apiKey;

  switch (api) {
    case 'replicate':
      apiKey = 'r8_0NQlBfD3fQ7nzeUf2t8e4bauZjYe4P24A4jiY'; // Your Replicate API key
      // ... (Replicate API logic) ...
      break;
    case 'openai':
      apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key
      // ... (OpenAI API logic) ...
      break;
    case 'huggingface':
      apiKey = 'YOUR_HUGGINGFACE_API_KEY'; // Replace with your HuggingFace API key
      // ... (HuggingFace API logic) ...
      break;
    default:
      console.error('Invalid API selected.');
      return;
  }

  // ... (API request logic based on selected API) ...
}

function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatMessages.appendChild(messageElement);
}
