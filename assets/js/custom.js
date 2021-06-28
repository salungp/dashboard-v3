// Activated tooltip function from bootstrap
var TooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var TooltipList = TooltipTriggerList.map(function (TooltipTriggerEl) {
  return new bootstrap.Tooltip(TooltipTriggerEl)
});

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
});

// Custom Accordion
var AccordionButton = document.getElementsByClassName('accordion-custom');

// Event
for (i = 0; i < AccordionButton.length; i++) {
  AccordionButton[i].addEventListener("click", function() {
    this.classList.toggle("accordion-active");
  });
}

// $(function() {

//   $(".progress-circle-box").each(function() {

//     var value = $(this).attr('data-value');
//     var circle = $(this).find(".small-circle circle:nth-child(2)");
//     $(circle).css('stroke-dashoffset', "calc(122 - (122 * "+value+") / 100)" );

//   })
// });
