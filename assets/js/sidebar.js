(function () {
  const sidebar = document.querySelector("#sidebar");
  const toggle = document.querySelector("#sidebar-toggle");
  const scrim = document.querySelector("#sidebar-scrim");
  const themeToggle = document.querySelector("#theme-toggle");

  if (!sidebar || !toggle || !scrim) return;

  function setOpen(open) {
    sidebar.classList.toggle("open", open);
    scrim.classList.toggle("open", open);
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "关闭信息栏" : "打开信息栏"
    );
  }

  toggle.addEventListener("click", function () {
    setOpen(!sidebar.classList.contains("open"));
  });

  scrim.addEventListener("click", function () {
    setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  /* collapse toggle (large screens), state persisted */
  const collapseBtn = document.querySelector("#sidebar-collapse");

  if (collapseBtn) {
    try {
      if (localStorage.getItem("sidebar-collapsed") === "1") {
        document.body.classList.add("sidebar-collapsed");
        collapseBtn.setAttribute("aria-label", "展开信息栏");
      }
    } catch (e) {}

    collapseBtn.addEventListener("click", function () {
      const collapsed = document.body.classList.toggle("sidebar-collapsed");
      collapseBtn.setAttribute(
        "aria-label",
        collapsed ? "展开信息栏" : "收起信息栏"
      );
      try {
        localStorage.setItem("sidebar-collapsed", collapsed ? "1" : "0");
      } catch (e) {}
    });
  }

  /* theme toggle functionality */
  if (themeToggle) {
    // Initialize theme from localStorage or system preference
    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme(systemPrefersDark ? 'dark' : 'light');
      }
    }

    // Set theme class and update icon
    function setTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
        themeToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      } else {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
        themeToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      }
      
      localStorage.setItem('theme', theme);
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', function () {
      const currentTheme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });

    // Initialize theme on page load
    initTheme();
  }
})();