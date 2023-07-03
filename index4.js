const container = document.querySelector(".container");
const dropdownMenu = document.createElement("select");
dropdownMenu.className = "dropdown";
const label = document.createElement("label");
label.textContent = "Change Circle Color";
label.className = "label";
container.appendChild(label);
container.appendChild(dropdownMenu);
const divCircle = document.createElement("div");
container.appendChild(divCircle);
divCircle.className = "circle";

const colors = [
  {
    text: "choose color...",
  },
  {
    text: "Turn Circle Red",
    color: "Red",
  },
  {
    text: "Turn Circle Blue",
    color: "Blue",
  },
  {
    text: "Turn Circle Green",
    color: "Green",
  },
  {
    text: "Turn Circle Yellow",
    color: "Yellow",
  },
];

const addMenuOptions = () => {
  colors.map((colorOption, idx) => {
    const color = document.createElement("option");
    dropdownMenu.appendChild(color);
    color.innerHTML = colorOption.text;
  });
};

addMenuOptions();
dropdownMenu.addEventListener("change", () => {
  const selectedColor = dropdownMenu.value;

  const colorObject = colors.find((color) => color.text === selectedColor);
  if (colorObject) {
    divCircle.style.backgroundColor = colorObject.color;
  }
});

//dropdown 2
const container2 = document.querySelector(".container2")

