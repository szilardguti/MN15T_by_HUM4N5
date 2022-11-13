import { randomPic } from "./randomPic.js";

export function nexTest() {
    randomPic(100, 1, [], (res) => {
        res = res.slice(1, -1);
        fetch('http://localhost:3030/' + res)
            .then(fetch_result => fetch_result.text())
            .then(imgb64 => {
                document.getElementById("mnist-img").src = "data:image/jpg;base64," + imgb64;
            })
    });
}
