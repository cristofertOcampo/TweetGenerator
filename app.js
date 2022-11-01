const txtName = document.getElementById("txt-name");
const txtComment = document.getElementById("txt-comment");
const btnSend = document.getElementById("btn-send");
const resultComment = document.getElementById("result-comment");
const paragraphName = document.getElementById("paragraph-name");
const paragraphInitial = document.getElementById("paragraph-initial");

function sendTweet(){
    let userName = txtName.value;
    let userComment = txtComment.value;
    paragraphName.textContent = userName;
    resultComment.textContent = userComment;
}


btnSend.addEventListener('click', sendTweet);