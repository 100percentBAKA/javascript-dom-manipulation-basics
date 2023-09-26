document.addEventListener('DOMContentLoaded', function () {
  var sidebarToggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('.sidebar');

  sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
  });
});