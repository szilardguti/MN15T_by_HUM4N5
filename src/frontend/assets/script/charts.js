function getstatfndone() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/gender/tests')
        .then(response => response.json())
        .then(res_json => {
            generatestatfndone(res_json);
        })
}
getstatfndone();

function getstatfnreg() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/gender/testers')
        .then(response => response.json())
        .then(res_json => {
            generatestatfnreg(res_json);
        })
}
getstatfnreg();

function getstatbystudiesdone() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/studies/tests')
        .then(response => response.json())
        .then(res_json => {
            generatestatbystudiesdone(res_json);
        })
}
getstatbystudiesdone();

function getstatbystudiesreg() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/studies/testers')
        .then(response => response.json())
        .then(res_json => {
            generatestatbystudiesreg(res_json);
        })
}
getstatbystudiesreg();

function getstatbyages() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/ages')
        .then(response => response.json())
        .then(res_json => {
            generatestatbyages(res_json);
        })
}
getstatbyages();

function getstattop5() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/topDev')
        .then(response => response.json())
        .then(res_json => {
            generatestattop5(res_json);
        })
}
function getstattop10() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/topStreak')
        .then(response => response.json())
        .then(res_json => {
            generatestattop10(res_json);
        })
}
getstattop10();


function generatestatfndone(givenData) {
    const ctx = document.getElementById('gender-dev');

    let genderLabel = ['Nő', 'Férfi'];
    let chartValues = [givenData['1']['TestCount'], givenData['0']['TestCount']];

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: genderLabel,
            datasets: [{
                backgroundColor: ['green', 'purple','red', 'white','blue','yellow'],
                data: chartValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "TODO"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function generatestatbyages(givenData) {
    const ctx = document.getElementById('by-age');

    let ageLabel = [];
    let chartValues = [];

    givenData.forEach(element => {
        ageLabel.push(element['Range'])
        chartValues.push(element['AgeCount'])
    });

    ageLabel.pop(); chartValues.pop();

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ageLabel,
            datasets: [{
                backgroundColor: ['green', 'purple','red', 'white','blue','yellow'],
                data: chartValues
            }]
        },
        options: {
            plugins: {
                legend: {
                  display: false
                }
              },
            title: {
                display: false,
                text: "TODO"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
function generatestatfnreg(givenData) {
    const ctx = document.getElementById('gender-sum');

    let genderLabel = ['Nő', 'Férfi'];
    let chartValues = [givenData['0']['TesterCount'], givenData['1']['TesterCount']];

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: genderLabel,
            datasets: [{
                backgroundColor: ['pink', 'lightblue'],
                data: chartValues
            }]
        },
        options: {
            
            title: {
                display: true,
                text: "TODO"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function generatestatbystudiesdone(givenData) {
    const ctx = document.getElementById('studies');

    let studiesLabel = [];
    let chartValues = [];

    givenData.forEach(element => {
        studiesLabel.push(element['Studies'])
        chartValues.push(element['TestCount'])
    });


    new Chart(ctx, {
        type: "bar",
        data: {
            labels: studiesLabel,
            datasets: [{
                backgroundColor: ['green', 'purple','red', 'white','blue','yellow'],
                data: chartValues
            }]
        },
        options: {
            plugins: {
                legend: {
                  display: false
                }
              },
            title: {
                display: false,
                text: "TODO"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function generatestatbystudiesreg(givenData) {
    const ctx = document.getElementById('studies2');

    let studiesLabel = [];
    let chartValues = [];

    givenData.forEach(element => {
        studiesLabel.push(element['Studies'])
        chartValues.push(element['TesterCount'])
    });


    new Chart(ctx, {
        type: "bar",
        data: {
            labels: studiesLabel,
            datasets: [{
                backgroundColor: ['green', 'purple','red', 'white','blue','yellow'],
                data: chartValues
            }]
        },
        options: {
            plugins: {
                legend: {
                  display: false
                }
              },
            title: {
                display: false,
                text: "TODO"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function generatestattop10(givenData) {
    var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var yValues = [];

    const ctx = document.getElementById('top-ten-streak');

    givenData.forEach(element => {
        yValues.push(element['testCount'])
    });

    new Chart(ctx, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "rgba(0,0,0,1.0)",
                borderColor: "rgba(0,0,0,0.1)",
                data: yValues,
                label: 'Top 10 helyezett',
            }]
        },
        options: {
            plugins: {
                legend: {
                  display: false
                }
              },
            title: {
                display: false,
                text: "TODO"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}