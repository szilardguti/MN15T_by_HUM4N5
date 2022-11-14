import { randomPic } from "./randomPic.js";

export function nexTest() {
    randomPic(0, 1, [], (res) => {
        res = res.slice(1, -1);
        fetch('http://localhost:3030/' + res)
            .then(fetch_result => fetch_result.text())
            .then(imgb64 => {
                document.getElementById("mnist-img").src = "data:image/jpg;base64," + imgb64;
            })
    });

    const graphDiv = document.getElementById("graph");
    graphDiv.removeChild(document.getElementById("myChart"));
    document.getElementById("next-button").removeChild(document.getElementById("kovetkezo-gomb"));
    const newCanvas = document.createElement("canvas");
    newCanvas.id = "myChart";
    newCanvas.width = "400";
    newCanvas.height = "400";
    graphDiv.appendChild(newCanvas);
    document.getElementById("submit-button").disabled = false;
    document.getElementById("delete-button").disabled = false;
    document.getElementById("chosen-value").innerHTML = "";
}
