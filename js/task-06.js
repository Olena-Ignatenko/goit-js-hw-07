function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
  boxesContainer.innerHTML = "";

  const boxes = [];
  let boxSizeInPx = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSizeInPx}px`;
    box.style.height = `${boxSizeInPx}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);

    boxSizeInPx += 10;
  }
  boxesContainer.append(...boxes);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
