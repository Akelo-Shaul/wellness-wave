const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const commentBtn = document.querySelector(".comment-btn");
const message = document.querySelector(".message");

import { loadJSON, saveJSON } from "./populateComments";

commentBtn.addEventListener("click", (e) => {
  const nameRegex = /^[a-zA-Z\s']+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !nameRegex.test(nameInput.value) ||
    !emailRegex.test(emailInput.value) ||
    emailInput.value == "" ||
    nameInput.value == ""
  ) {
    e.preventDefault();
    if (!emailRegex.test(emailInput.value)) {
      alert("Enter a valid email");
    } else if (!nameRegex.test(nameInput.value)) {
      alert("Enter a valid name");
    }
    return;
  }

  let theComment = {
    name: nameInput.value,
    email: emailInput.value,
    message: message.value,
  };

  // Send the new comment data to the server
  fetch('file:///C:/Users/asus/Desktop/wellness-wave/comments_blog.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(theComment),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Update the comments array with the new comment data
    let comments = loadJSON("comments.json");
    comments.push(data);
    saveJSON("comments.json", comments);

    // Optionally, clear the form inputs after successful submission
    nameInput.value = "";
    emailInput.value = "";
    message.value = "";

    // Update the UI to display the new comment (if needed)
    // This step depends on how you want to update your UI
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to submit comment. Please try again.');
  });
});
