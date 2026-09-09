// ============================================================
//   ТЁМНАЯ ТЕМА
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
    themeToggle.classList.toggle('rotated');
    localStorage.setItem('pltrs_main_theme', isDark ? 'dark' : 'light');
}

function loadTheme() {
    const theme = localStorage.getItem('pltrs_main_theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
        themeIcon.textContent = 'light_mode';
        themeToggle.classList.add('rotated');
    } else {
        document.body.classList.remove('dark');
        themeIcon.textContent = 'dark_mode';
        themeToggle.classList.remove('rotated');
    }
}

// ============================================================
//   ЗАПУСК
// ============================================================
themeToggle.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', loadTheme);
