var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  // Checking if chrome tried to prompt the user for the choice to add to home screen, only possible if chrome
  // tried to prompt
  if (defferedPrompt) {
    defferedPrompt.prompt();

    // We can check what the user selected when the prompt was shown
    defferedPrompt.userChoice.then(function (choice) {
      if (choice.outcome === 'dismissed') {
        // user dismissed the prompt to add to home screen, now they need to add manually if they want
      } else {  // choice.outcome === 'accepted'
        // user accepted the option to add the app to home screen
      }
    });
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
