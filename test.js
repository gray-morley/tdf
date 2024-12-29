// Define the function
function logMessage() {
  console.log("testing 123");
}

// Expose the function to the global `window` object for external access
window.logMessage = logMessage;
