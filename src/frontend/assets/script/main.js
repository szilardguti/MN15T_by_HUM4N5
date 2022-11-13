import { randomPic } from "./randomPic.js"
import { submitVote } from "./test-input-buttons.js"
import { nexTest } from "./nextbutton.js"

let asd = sessionStorage.getItem("UserID")
console.log(asd)
// Initialize random picture when page is loaded
randomPic(100, 1, [], (res) => {
    res = res.slice(1, -1);
    fetch('http://localhost:3030/' + res)
        .then(fetch_result => fetch_result.text())
        .then(imgb64 => {
            document.getElementById("mnist-img").src = "data:image/jpg;base64," + imgb64;
        })
});


// Bind imports
window.submitVote = submitVote;
//window.nextbutton = nexTest;
