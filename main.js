class Exercise {
  constructor() {
    this.btn = document.querySelector("#btn");
    this.btn.addEventListener("click", this.toggleDarkMode);
  }

  toggleDarkMode() {
    let app = document.querySelector("body");

    app.classList.toggle("dark");
  }
}
let exercise = new Exercise();

const inputElement = document.getElementById("title");
const inputEl = document.getElementById("number");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value + " " + inputEl.value,
    completed: false,
  };

  notes.push(newNote);
  render();

  inputElement.value = "";
  inputEl.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === "tuggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
    render();
  }
};
function getNotTemplate(note, index) {
  return `
  <li class="list-item flex justify-between items-center">
  <span class="${note.completed ? "line-through" : ""}">${
    note.title
  } минут</span>
  <span>
  <button data-index="${index}" data-type="tuggle">&#9989;</button>
  <button data-index="${index}" data-type="remove">&#10062;</button>
  </span>
</li>
`;
}

const notes = [];

function render() {
  listElement.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNotTemplate(notes[i], i));
  }
}
render();
