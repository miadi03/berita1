const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

function openPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the popup is open
    setTimeout(() => {
        overlay.style.opacity = 1;
        popup.style.opacity = 1;
        popup.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
}

function closePopup() {
    overlay.style.opacity = 0;
    popup.style.opacity = 0;
    popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling again
    }, 500);
}

// Open the popup after a delay (e.g., 5 seconds)
setTimeout(openPopup, 2000);

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
