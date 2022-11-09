import { randomPic } from "./randomPic.js"
import { deleteValue, submitVote } from './test-input-buttons.js'

// Initialize random picture when page is loaded
randomPic(100,1,[],(res)=>{console.log(res)})

// Bind imports
window.inputValue = inputValue;
window.deleteValue = deleteValue;
window.submitVote = submitVote;