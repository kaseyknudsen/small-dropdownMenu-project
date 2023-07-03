const container = document.querySelector(".container");
const dropdownMenu = document.createElement("select");
dropdownMenu.className = "dropdown";
const label = document.createElement("label");
label.textContent = "Change Square Color";
label.className = "label";
container.appendChild(label);
container.appendChild(dropdownMenu);
const divSquare = document.createElement("div");
container.appendChild(divSquare);
divSquare.className = "square";

const randomColor = ["#A9CCE3", "#138D75", "#AF601A", "#78281F", "#A6ACAF"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * (randomColor.length + 1));
  return randomColor[randomIndex];
};

const colors = [
  {
    text: "choose color...",
  },
  {
    text: "Turn Square Red",
    color: "Red",
  },
  {
    text: "Turn Square Blue",
    color: "Blue",
  },
  {
    text: "Turn Square Green",
    color: "Green",
  },
  {
    text: "Turn Square Yellow",
    color: "Yellow",
  },
  {
    text: "Turn Square Random Color",
    color: getRandomColor(),
  },
];

const addMenuOptions = colors.map((color, idx) => {
  const newColor = document.createElement("option");
  dropdownMenu.appendChild(newColor);
  newColor.innerHTML = color.text;
});

dropdownMenu.addEventListener("change", () => {
  const selectedOption = dropdownMenu.value;

  const colorObject = colors.find((color) => selectedOption === color.text);

  if (colorObject) {
    divSquare.style.backgroundColor = colorObject.color;
  }
});
