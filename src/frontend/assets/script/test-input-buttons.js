import { id } from "./randomPic.js"

var isActive = false;

export function submitVote() {

    let votok = '';
    const field = document.getElementById("chosen-value")
    field.value = field.innerHTML
    let vote = 0;

    fetch('http://localhost:3030/images/' + id + "/vote/" + field.value, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    /*  .then(response => response.json())
     .then(res_json => {
         let res_data = res_json['0'];
     }); */


   .then (fetch('http://localhost:3030/images/'+id)
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generateGraph(res_data);
        }))
}

function generateGraph(img_data) {
    const field = document.getElementById("chosen-value")

    if (field.innerHTML === "" || isActive == true) {
        alert("He");
    }
    else {
        const buttonBox = document.getElementById("next-button");
        let next = document.createElement("button");
        next.className = "kovetkezo-gomb btn btn-dark";
        next.innerHTML = "Következő";
        next.type = "button";

        buttonBox.appendChild(next);

        const ctx = document.getElementById('myChart');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',],
                datasets: [{
                    label: 'Szavazatok száma a válaszokra lebontva',
                    data: [img_data.Vote_0,img_data.Vote_1, img_data.Vote_2,
                    img_data.Vote_3, img_data.Vote_4, img_data.Vote_5,
                    img_data.Vote_6, img_data.Vote_7, img_data.Vote_8, img_data.Vote_9,],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ]
                }]
            },
            options: {
                indexAxis: 'y',
                padding: 30,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14,
                                weight: 5
                            }
                        }
                    }
                }
            }
        });

        isActive = true;
    }
}

function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}
