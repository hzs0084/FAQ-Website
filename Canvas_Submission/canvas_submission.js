// In canvas_submission.js
const video = document.getElementById('instructional-video');
const userAgent = navigator.userAgent;

if (userAgent.indexOf('Mac OS X') !== -1) { 
  video.src = 'How to Compress files for Mac.mp4'; 
} else if (userAgent.indexOf('Windows') !== -1) {
  video.src = 'How to compress for Windows Users.mp4';
} else {
  // Default video or message if platform isn't detected
  video.src = 'How to compress for Windows Users.mp4'; 
}