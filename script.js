window.onload = function() {
    const storybook = document.getElementById('storybook');
    const towerScene = document.getElementById('towerScene');
    const lanternScene = document.getElementById('lanternScene');
    const startBtn = document.getElementById('startBtn');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const lanternSound = document.getElementById('lanternSound');

    startBtn.addEventListener('click', function() {
        storybook.style.display = 'none';
        towerScene.style.display = 'block';
        setTimeout(() => {
            towerScene.style.opacity = 1;
        }, 100);
        backgroundMusic.play();
    });

    yesBtn.addEventListener('click', function() {
        towerScene.style.display = 'none';
        lanternScene.style.display = 'block';
        setTimeout(() => {
            lanternScene.style.opacity = 1;
        }, 100);
        lanternSound.play();
        // Zoom out and show the lanterns
        document.body.style.transition = "background-color 2s ease";
        document.body.style.backgroundColor = "#1f2b6c";
    });

    noBtn.addEventListener('click', function() {
        towerScene.style.display = 'none';
        alert("Maybe another time...");
    });
};
