const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const commentBtn = document.querySelector(".comment-btn");
const message = document.querySelector(".message");

import { loadJSON, saveJSON } from "./populateComments";

// let comments = [];

commentBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  const nameRegex = /^[a-zA-Z/s']+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   console.log(nameRegex.test(nameInput.value));
  //   console.log(emailRegex.test(emailInput.value));

  if (
    nameRegex.test(nameInput.value) ||
    emailRegex.test(emailInput.value) ||
    emailInput.value == "" ||
    nameInput.value == ""
  ) {
    e.preventDefault();
    if (!emailRegex.test(emailInput.value)) {
      alert("enter valid email");
    } else if (!nameRegex.test(nameInput.value)) {
      alert("enter valid name");
    }
  }

  // adding the comments to an array
  let theComment = {
    name: nameInput.value,
    email: emailInput.value,
    comment: message.value,
  };

  const comments = loadJSON("comments.json");

  comments.push(theComment);

  saveJSON("comments.json", comments);

  // comments.unshift(theComment);
  // console.log(comments[0].name);
});
