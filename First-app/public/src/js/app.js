
// Variable to store the "Add to Home screen" popup which chrome displays by default when criteria is met
// Refer to doc for criteria. We are trying to defer when the prompt is shown and show it at a later stage.
// The thing to note is, we can only show it after chrome has tried to prompt it to user, in case we do not
// meet the criteria for chrome to show it, we will not be able to defer it or show it ourselves
var defferedPrompt; 

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../../sw.js")
  .then(function () {
    console.log("Service worker registered.");
  }).catch(err => console.log(err));
}

// Event fired when chrome prompts the user to add the web app to home screen
window.addEventListener("beforeinstallprompt", function(event) {
  event.preventDefault();
  defferedPrompt = event;
  return false;   // So as to not do anything when this event is fired
  // We intend to sho the prompt on user clicking the "+" on the home screen. Refer "feed.js" for remaining logic.
});

