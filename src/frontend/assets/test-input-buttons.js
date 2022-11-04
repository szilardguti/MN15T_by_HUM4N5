function inputValue(value) {
    const field = document.getElementById("chosen-value")
    if (field.innerHTML === ""){
        field.innerHTML = value;
    }
}

function deleteValue() {
    document.getElementById("chosen-value").innerHTML = ""
}

function submitVote() {
    const field = document.getElementById("chosen-value")
    let rightside = document.getElementById("right-side")
    if(field.innerHTML === "")
    {
        alert("He");
    }
    else{
        graph = document.createElement("div")
        graph.className = "graphs"

        div = document.createElement("div")

        canvas = document.createElement("canvas")
        canvas.id = "myChart"
        canvas.width="400" 
        canvas.height="400"

        next = document.createElement("button")
        next.className="next btn btn-dark"
        next.innerHTML="Tovább"
        next.type="button"

        rightside.appendChild(graph)
        rightside.appendChild(div)
        div.appendChild(next)
        graph.appendChild(canvas)

        const ctx = document.getElementById('myChart');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                datasets: [{
                    label: 'Szavazatok eloszlása',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ]
                }]
            },
            options:{
                indexAxis: 'y',
            }
        });

    }
}
