(function () {
    function currentTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    function setToggleIcon(theme) {
        var btn = document.querySelector('.theme-toggle');
        if (btn) {
            var icon = btn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-moon', theme !== 'dark');
                icon.classList.toggle('fa-sun', theme === 'dark');
            }
            btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        setToggleIcon(currentTheme());

        var btn = document.querySelector('.theme-toggle');
        if (!btn) return;

        btn.addEventListener('click', function () {
            var next = currentTheme() === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            try {
                localStorage.setItem('theme', next);
            } catch (e) {}
            setToggleIcon(next);
        });
    });
})();