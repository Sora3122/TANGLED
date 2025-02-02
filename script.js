// Scene Management
const scenes = {
    storybook: document.getElementById('storybook'),
    towerScene: document.getElementById('towerScene'),
    lanternScene: document.getElementById('lanternScene')
};
const messageElement = document.getElementById('message');
const lanternContainer = document.getElementById('lanternContainer');
const numLanterns = 30; // Number of lanterns

// Function to switch scenes
function showScene(sceneId, message = "") {
    Object.values(scenes).forEach(scene => scene.classList.add('hidden'));
    scenes[sceneId].classList.remove('hidden');
    if (message) messageElement.textContent = message;
}

// Function to create lanterns
function createLanterns() {
    lanternContainer.innerHTML = ''; // Clear existing lanterns

    for (let i = 0; i < numLanterns; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'lantern';

        // Random properties
        const startX = Math.random() * 100; // Random horizontal position (0% to 100%)
        const driftStart = (Math.random() - 0.5) * 40; // Random horizontal drift (-50px to +50px)
        const driftEnd = driftStart + (Math.random() - 0.5) * 40; // Additional drift for curved motion

        lantern.style.cssText = `
            left: ${startX}%;
            --drift-start: ${driftStart}px;
            --drift-end: ${driftEnd}px;
            animation-delay: ${Math.random() * 8}s; // Random delay (0s to 8s)
        `;

        lanternContainer.appendChild(lantern);
    }
}

// Event Listeners
document.getElementById('startBtn').addEventListener('click', () => {
    showScene('towerScene');
});

document.getElementById('yesBtn').addEventListener('click', () => {
    showScene('lanternScene', "I can't wait to watch Tangled with you, my love! 💖");
});

document.getElementById('noBtn').addEventListener('click', () => {
    showScene('lanternScene', "The lanterns will wait for you... 🌠");
});

// Generate lanterns as soon as the page loads
window.addEventListener('load', () => {
    createLanterns(); // Generate lanterns immediately
    showScene('storybook'); // Show the storybook scene
});
