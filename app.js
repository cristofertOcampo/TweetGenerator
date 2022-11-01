const txtName = document.getElementById("txt-name");
const txtComment = document.getElementById("txt-comment");
const btnSend = document.getElementById("btn-send");
const resultComment = document.getElementById("result-comment");
const paragraphName = document.getElementById("paragraph-name");
const paragraphInitial = document.getElementById("paragraph-initial");
const counter = document.getElementById("span-counter");
const convert = document.getElementById("btn-convert");

btnSend.addEventListener('click', sendTweet);

function sendTweet(){
  let userName = txtName.value;
  let userComment = txtComment.value;
  paragraphInitial.textContent = txtName.value.trim().charAt(0).toUpperCase();
  paragraphName.textContent = userName;
  resultComment.textContent = userComment;
}
