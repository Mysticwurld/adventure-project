const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Initialize theme from storage or system preference
const currentTheme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

htmlElement.setAttribute('data-theme', currentTheme);
toggleBtn.setAttribute('aria-pressed', currentTheme === 'dark');

toggleBtn.addEventListener('click', () => {
  const isDark = htmlElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  
  // Update UI and storage
  htmlElement.setAttribute('data-theme', newTheme);
  toggleBtn.setAttribute('aria-pressed', !isDark);
  localStorage.setItem('theme', newTheme);
});
