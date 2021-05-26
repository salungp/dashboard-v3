// Activated tooltip function from bootstrap
var TooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var TooltipList = TooltipTriggerList.map(function (TooltipTriggerEl) {
  return new bootstrap.Tooltip(TooltipTriggerEl)
})

// Define all component to make sidebar effect
var ButtonToggle = document.querySelector('.button-toggle');
var ContentClass = document.querySelector('.content');
var SidebarClass = document.querySelector('.sidebar');
var ContentHeaderClass = document.querySelector('.content-header');

// Event to make sidebar effect
ButtonToggle.addEventListener('click', function() {
	ContentClass.classList.toggle('content-active');
	SidebarClass.classList.toggle('sidebar-active');
	ContentHeaderClass.classList.toggle('content-header-active');
})