// Page-specific JS for studyvault.html
// File: js/studyvault.js
document.addEventListener('DOMContentLoaded', function(){
  // StudyVault page scripts (loader hide, search, lazy load) can be placed here.
  var loader = document.getElementById('pageLoader');
  if(loader){ setTimeout(function(){ loader.classList.add('hidden'); }, 800); }
});
