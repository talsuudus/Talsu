// Page-specific JS for constitution.html
// File: js/constitution.js
document.addEventListener('DOMContentLoaded', function(){
  // If the page requires the CONSTITUTION data array and accordion wiring,
  // move that logic here. For now, this file is a placeholder where the
  // original inline script can be placed on request.

  // Example: simple accordion delegator (works if markup uses .accordion-trigger)
  document.querySelectorAll('.accordion-trigger').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.accordion-item');
      if(!item) return;
      item.classList.toggle('open');
      var body = item.querySelector('.accordion-body');
      if(item.classList.contains('open')){
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        body.style.maxHeight = null;
      }
    });
  });
});
