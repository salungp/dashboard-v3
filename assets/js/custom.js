// Activated tooltip function from bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Define all component to make sidebar effect
var buttonToggle = document.querySelector('.button-toggle');
var contentClass = document.querySelector('.content');
var sidebarClass = document.querySelector('.sidebar');
var contentHeaderClass = document.querySelector('.content-header');

// Event to make sidebar effect
buttonToggle.addEventListener('click', function() {
	contentClass.classList.toggle('content-active');
	sidebarClass.classList.toggle('sidebar-active');
	contentHeaderClass.classList.toggle('content-header-active');
})