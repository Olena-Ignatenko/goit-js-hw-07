const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
    const inputTextContent = e.target.value.trim();
    if (inputTextContent === "") {
        spanText.textContent = "Anonymous";
        console.log(inputTextContent);
    } else {
        spanText.textContent = inputTextContent;
        
        console.log(inputText);

    }

})
