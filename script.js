document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Student",
        "Progamer",
        "Designer",
        "Solder"
    ];

    let index = 0;  // Menyimpan indeks teks saat ini
    const textElement = document.getElementById("changingText");

    function changeText() {
        textElement.textContent = texts[index];
        textElement.style.width = '0';  // Reset lebar untuk animasi
        // Force reflow to restart animation
        textElement.offsetWidth; 
        textElement.style.width = `${textElement.scrollWidth}px`;
        
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 1500);
});

