// Popup functionality
const popup = document.getElementById('popup');
const showPopupBtn = document.getElementById('showPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');

showPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close popup when clicking outside
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Privacy Policy Popup functionality
const privacyPopup = document.getElementById('privacyPopup');
const privacyBtn = document.getElementById('privacyBtn');
const closePrivacyPopupBtn = document.getElementById('closePrivacyPopupBtn');

privacyBtn.addEventListener('click', () => {
    privacyPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closePrivacyPopupBtn.addEventListener('click', () => {
    privacyPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close privacy popup when clicking outside
privacyPopup.addEventListener('click', (e) => {
    if (e.target === privacyPopup) {
        privacyPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});