document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const emojiContainer = document.querySelector(".emoji-container");

    // Show popup with animation on YES click
    yesBtn.addEventListener("click", () => {
        document.body.classList.add("shake"); // Shake effect
        playSound('boing.mp3'); // Play sound
        emojiExplosion(); // Burst of emojis

        setTimeout(() => {
            document.body.classList.remove("shake"); // Stop shake after animation
            popup.style.display = "flex";
            popup.classList.add("bounce-in"); // Bounce effect for popup
        }, 500);
    });

    // Close popup
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
        popup.classList.remove("bounce-in"); // Reset animation
    });

    // NO Button Runs Away
    noBtn.addEventListener("mouseover", () => {

				playSound('boing1.mp3'); 
    let newX, newY;
    const minMove = 100; // Minimum distance to move (pixels)
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    do {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
    } while (
        Math.abs(newX - noBtn.offsetLeft) < minMove || 
        Math.abs(newY - noBtn.offsetTop) < minMove
    );

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    playSound('whoosh.mp3');
});

    // Function to play sound
    function playSound(file) {
        let audio = new Audio(file);
        audio.play();
    }

    // Emoji Explosion on YES click
    function emojiExplosion() {
        const emojis = ["😂", "🤣", "😜", "🤓", "🤪", "🥳", "😆", "🐵", "🌝"];
        
        for (let i = 0; i < 15; i++) { // Generate 15 random emojis
            const emoji = document.createElement("div");
            emoji.classList.add("explosion-emoji");
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.top = `${Math.random() * 100}vh`;
            emoji.style.animationDuration = (Math.random() * 2 + 1) + "s"; // Random animation speed
            
            emojiContainer.appendChild(emoji);

            setTimeout(() => emoji.remove(), 2000); // Remove after animation
        }
    }
});


function changeBackgroundColor() {
    const colors = ["#ffeb3b", "#ffcc00", "#ffb300", "#ffda44", "#f4a261", "#ff7eb3", "#8ecae6", "#ff6f61", "#90ee90"];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
        noBtn.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
		closePopup.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
}

// Change background color every 3 seconds
setInterval(changeBackgroundColor, 2000);
