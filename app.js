console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let img = document.getElementById("img");
    let userInput = document.getElementById("input").value;
    let myKey = "CivfDtn8UhbDvhXRpa8tLUPJXCWTfKwd"
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${userInput}`, {
        mode: "cors",
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        const dataLength = response.data;
        const randDataNum = Math.floor(Math.random() * dataLength.length);
        const randIndexNum = dataLength[randDataNum];
        img.src = randIndexNum.images.original.url;
    })
    .catch((error) => {
        console.log(error);
    });
})