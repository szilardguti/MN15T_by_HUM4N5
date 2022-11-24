function getstatfndone()
{
    fetch('http://localhost:3030/stat/gender/tests')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatfndone(res_data);
        })
}
function getstatfnreg()
{
    fetch('http://localhost:3030/stat/gender/testers')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatfnreg(res_data);
        })
}
function getstatbystudiesdone()
{
    fetch('http://localhost:3030/stat/studies/tests')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatbystudiesdone(res_data);
        })
}
function getstatbystudiesreg()
{
    fetch('http://localhost:3030/stat/studies/testers')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatbystudiesreg(res_data);
        })
}
function getstatbyages()
{
    fetch('http://localhost:3030/stat/ages')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestatbyages(res_data);
        })
}
function getstattop5()
{
    fetch('http://localhost:3030/stat/topDev')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestattop5(res_data);
        })
}
function getstattop10()
{
    fetch('http://localhost:3030/stat/topStreak')
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            generatestattop10(res_data);
        })
}

function generatestatfndone()
{
    new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "World Wide Wine Production"
          }
        }
      });
}