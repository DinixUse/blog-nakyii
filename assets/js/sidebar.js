(function () {
  const sidebar = document.querySelector("#sidebar");
  const toggle = document.querySelector("#sidebar-toggle");
  const scrim = document.querySelector("#sidebar-scrim");

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
})();
