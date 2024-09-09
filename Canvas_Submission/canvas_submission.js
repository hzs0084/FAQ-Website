document.addEventListener('DOMContentLoaded', function() {
  // All your JavaScript code from above goes here
  const macVideoSection = document.querySelector('.mac-users');
  const windowsVideoSection = document.querySelector('.windows-users');
  
  function isMacOS() {
    return /Macintosh/i.test(navigator.userAgent); // Case-insensitive check
  }
  
  function isWindows() {
    return /Windows/i.test(navigator.userAgent); // Case-insensitive check
  }
  
  if (isMacOS()) {
    macVideoSection.style.display = 'block';
    windowsVideoSection.style.display = 'none'; // Hide Windows video
  } else if (isWindows()) {
    windowsVideoSection.style.display = 'block';
    macVideoSection.style.display = 'none';     // Hide Mac video
  } else {
    // Default: Decide whether to show one or both
    windowsVideoSection.style.display = 'block'; 
    macVideoSection.style.display = 'none';     // Or show both
  }

});
