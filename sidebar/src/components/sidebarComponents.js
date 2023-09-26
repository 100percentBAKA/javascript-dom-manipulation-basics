var sidebar = document.createElement('div');
sidebar.className = 'sidebar';

var sidebarToggle = document.createElement('button');
sidebarToggle.className = 'sidebar-toggle';
sidebarToggle.textContent = 'Toggle Sidebar';

sidebar.appendChild(sidebarToggle);
document.body.appendChild(sidebar);