/* ===============================
   LIGHT / DARK MODE TOGGLE
   =============================== */

// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check if user has a saved preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = 'light theme☀️'; // Sun icon
}

// Add click event to toggle theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change button icon
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'dark theme☀️'; // Sun icon
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        themeToggle.textContent = 'dark theme🌙'; // Moon icon
        localStorage.setItem('theme', 'light'); // Save preference
    }
});
