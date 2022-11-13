function register()
{
    let age = document.getElementById("age")
    let bender = document.getElementById("choose-gender")
    let school = document.getElementById("suli")
    let gender = getData(bender) 

    fetch('http://localhost:3030/tester',{
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            "Age":age.value,
            "Gender":gender,
            "Studies":school.value
        })


    })
    .then(res => res.json())
    .then(res => {
        setUser(res);
        console.log(res)})
}

function getData(form) {
    var formData = new FormData(form);

    for (var pair of formData.entries()) {
      return pair[1]
    }
  }

  function setUser(userID)
  {
    sessionStorage.setItem("UserID", userID)
    window.location.href = "/src/frontend/test.html";
  }
        