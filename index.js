fetch('https://127.0.0.1:3000/', {method: "GET"})
.then(data => data.text())
.then(response => {
    console.log(response);
})