const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
    const inputTextContent = e.target.value.trim();
    if (inputTextContent === "") {
        spanText.textContent = "Anonymous";
    } else {
        spanText.textContent = inputTextContent;

    }

})
