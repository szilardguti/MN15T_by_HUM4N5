function inputValue(value) {
    const field = document.getElementById("chosen-value")
    if (field.innerHTML === ""){
        field.innerHTML = value;
    }
}

function deleteValue() {
    document.getElementById("chosen-value").innerHTML = ""
}