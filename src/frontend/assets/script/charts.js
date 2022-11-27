function getstatfndone()
{
    fetch('http://localhost:3030/stat/gender/tests')
        .then(response => response.json())
        .then(res_json => {
            generatestatfndone(res_json);
        })
}
getstatfndone()

function getstatfnreg()
{
    fetch('http://localhost:3030/stat/gender/testers')
        .then(response => response.json())
        .then(res_json => {
            generatestatfnreg(res_json);
        })
}
getstatfnreg()

function getstatbystudiesdone()
{
    fetch('http://localhost:3030/stat/studies/tests')
        .then(response => response.json())
        .then(res_json => {
            generatestatbystudiesdone(res_json);
        })
}
getstatbystudiesdone()

function getstatbystudiesreg()
{
    fetch('http://localhost:3030/stat/studies/testers')
        .then(response => response.json())
        .then(res_json => {
            generatestatbystudiesreg(res_json);
        })
}
getstatbystudiesreg()

function getstatbyages()
{
    fetch('http://localhost:3030/stat/ages')
        .then(response => response.json())
        .then(res_json => {
            generatestatbyages(res_json);
        })
}
getstatbyages()

function getstattop5()
{
    fetch('http://localhost:3030/stat/topDev')
        .then(response => response.json())
        .then(res_json => {
            generatestattop5(res_json);
        })
}
function getstattop10()
{
    fetch('http://localhost:3030/stat/topStreak')
        .then(response => response.json())
        .then(res_json => {
            generatestattop10(res_json);
        })
}
getstattop10()


function generatestatfndone(givenData)
{
    const ctx = document.getElementById('gender-dev');

    let genderLabel = ['Male', 'Female'];
    let chartValues = [givenData['0']['TestCount'], givenData['1']['TestCount']];

    new Chart(ctx, {
        type: "pie",
        data: {
          labels: genderLabel,
          datasets: [{
            backgroundColor: ['green', 'purple'],
            data: chartValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "TODO"
          },
           responsive:true,
           maintainAspectRatio: false
        }
      });
}

function generatestatbyages(givenData)
{
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
           responsive:true,
           maintainAspectRatio: false
        }
      });
}
function generatestatfnreg(givenData)
{
    const ctx = document.getElementById('gender-sum');

    let genderLabel = ['Female', 'Male'];
    let chartValues = [givenData['0']['TesterCount'], givenData['1']['TesterCount']];

    new Chart(ctx, {
        type: "pie",
        data: {
          labels: genderLabel,
          datasets: [{
            backgroundColor: ['green', 'purple'],
            data: chartValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "TODO"
          },
           responsive:true,
           maintainAspectRatio: false
        }
      });
}

function generatestatbystudiesdone(givenData)
{
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
            label: 'Number of tests done by different study levels',
            data: chartValues
          }]
        },
        options: {
          title: {
            display: false,
            text: "TODO"
          },
           responsive:true,
           maintainAspectRatio: false
        }
      });
}

function generatestatbystudiesreg(givenData)
{
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
            label: 'Number of testers by different study levels',
            data: chartValues
          }]
        },
        options: {
          title: {
            display: false,
            text: "TODO"
          },
           responsive:true,
           maintainAspectRatio: false
        }
      });
}

function generatestattop10(givenData)
{
    var xValues = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10 ];
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
            title: {
              display: false,
              text: "TODO"
            },
             responsive:true,
             maintainAspectRatio: false
          }
        });
}