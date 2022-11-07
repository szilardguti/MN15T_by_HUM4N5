const { Tooltip } = require("chart.js");

var isActive = false;

const inputValue = (value) => {
    const field = document.getElementById("chosen-value")
    if (field.innerHTML === ""){
        field.innerHTML = value;
    }
}

function deleteValue() {
    document.getElementById("chosen-value").innerHTML = ""
}

function submitVote() {
    fetch('http://localhost:3030/images/1')
        .then(response => response.json())
        .then(res_json => {
            res_data = res_json['0'];
            generateGraph(res_data);
        });
}

function generateGraph(img_data) {
    const field = document.getElementById("chosen-value")
    let rightside = document.getElementById("right-side")

    if(field.innerHTML === "" || isActive == true)
    {
        alert("He");
    }
    else{
        graph = document.c/* reateElement("div")
        graph.className = "graphs" */

        div = document.getElementById("div")

      /*   canvas = document.createElement("canvas")
        canvas.id = "myChart"
        canvas.width="400" 
        canvas.height="400" */

        next = document.createElement("button")
        next.className="next btn btn-dark"
        next.innerHTML="Tovább"
        next.type="button"

        /* rightside.appendChild(graph) */
        /* rightside.appendChild(div) */
        div.appendChild(next)
       /*  graph.appendChild(canvas) */

        const ctx = document.getElementById('myChart');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',],
                datasets: [{
                    label: 'Szavazatok eloszlása',
                    data: [img_data.Vote_0, img_data.Vote_1, img_data.Vote_2,
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
            options:{
                indexAxis: 'y',
                padding:30,
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
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
function getStandardDeviation (array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  } 
  