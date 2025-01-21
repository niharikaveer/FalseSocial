const sendButton = document.getElementById('sendButton');
const inputField = document.getElementById('chatInput');
const chatArea = document.getElementById('chatContainer');

function addChat() {
    const message = inputField.value.trim();
    if (message !== "") {

        const chatBubble = document.createElement('div');
        chatBubble.classList.add('flex', 'justify-end', 'mt-5', 'mr-5', 'relative');  // Add relative positioning

        const userImage = document.createElement('img');
        userImage.src = 'Profile image.jpg';
        userImage.classList.add('rounded-full', 'h-10', 'w-10', 'mr-3', 'ml-4');

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-blue-500', 'text-white', 'rounded-xl', 'w-1/3', 'p-2', 'flex', 'items-center', 'relative');

        const messageText = document.createElement('span');
        messageText.innerText = message;
        messageDiv.appendChild(messageText);

        const dropdown = document.createElement('div');
        dropdown.classList.add('absolute', 'top-0', 'right-0', 'text-white', 'text-xs', 'p-1', 'focus:outline-none', 'relative');

        const dropdownButton = document.createElement('button');
        dropdownButton.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        dropdownButton.classList.add('text-white', 'text-m', 'px-2', 'py-1', 'invisible'); // Make the button invisible initially

        const dropdownContent = document.createElement('div');
        dropdownContent.classList.add('hidden', 'absolute', 'right-0', 'mt-1', 'w-24', 'bg-gray-800', 'text-white', 'rounded', 'shadow-md', 'z-100', 'overflow-auto', 'top-[-100%]'); // Open upward

        const deleteOption = document.createElement('div');
        deleteOption.innerText = 'Delete';
        deleteOption.classList.add('px-3', 'py-2', 'hover:bg-gray-600', 'cursor-pointer');
        deleteOption.addEventListener('click', () => {
            chatBubble.remove();
        });

        const copyOption = document.createElement('div');
        copyOption.innerText = 'Copy';
        copyOption.classList.add('px-3', 'py-2', 'hover:bg-gray-600', 'cursor-pointer');
        copyOption.addEventListener('click', () => {
            navigator.clipboard.writeText(message).then(() => {
                alert("Message copied");
            });
        });

        dropdownContent.appendChild(deleteOption);
        dropdownContent.appendChild(copyOption);
        dropdown.appendChild(dropdownButton);
        dropdown.appendChild(dropdownContent);

        // Show dropdown button when hovering over the message
        messageDiv.addEventListener('mouseenter', () => {
            dropdownButton.classList.remove('invisible');
        });

        messageDiv.addEventListener('mouseleave', () => {
            dropdownButton.classList.add('invisible');
        });

        dropdownButton.addEventListener('click', () => {
            dropdownContent.classList.toggle('hidden');
        });

        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                dropdownContent.classList.add('hidden');
            }
        });

        messageDiv.appendChild(dropdown);
        chatBubble.appendChild(userImage);
        chatBubble.appendChild(messageDiv);

        chatArea.appendChild(chatBubble);
        inputField.value = '';
    }
}

sendButton.addEventListener('click', addChat);

// Add event listener for Enter key
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the default action (like a new line in a textarea)
        addChat();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById('chatContainer');

    // Hide scrollbar for Webkit browsers (Chrome, Safari, etc.)
    chatContainer.style.overflow = 'auto';
    chatContainer.style.scrollbarWidth = 'none';  // Firefox

    const style = document.createElement('style');
    style.innerHTML = `
        #chatContainer::-webkit-scrollbar {
            display: none;
        }
    `;
    document.head.appendChild(style);
});
