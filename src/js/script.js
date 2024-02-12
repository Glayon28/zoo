document.addEventListener("DOMContentLoaded", function () {
  function toggleSidebar() {
    document
      .querySelector(".Header_responsive_wrapper_burger")
      .classList.toggle("open");
    document
      .querySelector(".Header_responsive_sidebar")
      .classList.toggle("open");
  }

  document
    .querySelector(".Header_responsive_wrapper_burger")
    .addEventListener("click", toggleSidebar);
});
