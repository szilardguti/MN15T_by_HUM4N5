import { randomPic } from "./randomPic.js"
import { submitVote } from "./submit-vote.js"
import { nexTest } from "./nextbutton.js"

export let testerId = sessionStorage.getItem("UserID")
if( testerId == null || testerId == undefined){
    window.location.href = "./login.html";
}

export var listofdone = [];

// Initialize random picture when page is loaded
randomPic(listofdone.length, testerId, listofdone, (res) => {
    res = res.slice(1, -1);
    fetch('https://mn15t-by-hum4n5.onrender.com/' + res)
        .then(fetch_result => fetch_result.text())
        .then(imgb64 => {
            document.getElementById("mnist-img").src = "data:image/jpg;base64," + imgb64;
        })
});



// Bind imports
window.submitVote = submitVote;
