// Function to switch scenes
function showScene(sceneId) {
    // Hide all scenes
    document.querySelectorAll(".scene").forEach(scene => {
        scene.classList.add("hidden");
    });
    // Show the selected scene
    document.getElementById(sceneId).classList.remove("hidden");
}

// Start button to go from Storybook to Tower Scene
document.getElementById("startBtn").addEventListener("click", function() {
    showScene("towerScene");
});

// Yes button to go to Lantern Scene
document.getElementById("yesBtn").addEventListener("click", function() {
    showScene("lanternScene");
});

// No button (optional: can also show the lanterns but with a sad message)
document.getElementById("noBtn").addEventListener("click", function() {
    showScene("lanternScene");
    document.getElementById("message").textContent = "Maybe next time...";
});

document.getElementById("yesBtn").addEventListener("click", function() {
    showScene("lanternScene");
    
    // Start background music
    document.getElementById("bgMusic").play();
});
