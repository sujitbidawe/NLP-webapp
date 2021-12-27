function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (!formText.length) {
        return;
    }
    
    fetch('http://localhost:8081/generateformdata')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        data["txt"] = formText;
        data["lang"] = "en";
        Client.analyzeDataFn(data)
    })
}

export { handleSubmit }
