function getstatfndone() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/gender/tests')
        .then(response => response.json())
        .then(res_json => {
            generatestatfndone(res_json);
        })
}
getstatfndone()

function getstatfnreg() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/gender/testers')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatfnreg(res_data);
        })
}
function getstatbystudiesdone() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/studies/tests')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatbystudiesdone(res_data);
        })
}
function getstatbystudiesreg() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/studies/testers')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatbystudiesreg(res_data);
        })
}
function getstatbyages() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/ages')
        .then(response => response.json())
        .then(res_json => {
            console.log(res_json)
            generatestatbyages(res_json);
        })
}
getstatbyages()

function getstattop5() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/topDev')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestattop5(res_data);
        })
}
function getstattop10() {
    fetch('https://mn15t-by-hum4n5.onrender.com/stat/topStreak')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestattop10(res_data);
        })
}

function generatestatfndone(givenData) {
    const ctx = document.getElementById('gender-dev');

    let genderLabel = ['Male', 'Female'];
    let chartValues = [givenData['0']['TestCount'], givenData['1']['TestCount']];

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: genderLabel,
            datasets: [{
                backgroundColor: ['blue', 'red'],
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
                label: 'Number of testers in Age Ranges',
                data: chartValues
            }]
        },
        options: {
            title: {
                display: false,
                text: "TODO"
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}