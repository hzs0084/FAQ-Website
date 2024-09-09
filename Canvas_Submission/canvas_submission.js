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
} else if (isWindows()) {
  windowsVideoSection.style.display = 'block';
} else {
  // Default: Show one of the sections (consider showing both)
  windowsVideoSection.style.display = 'block'; // Or show both sections
}
