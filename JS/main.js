const button = document.querySelector(".btn");
const noteDiv = document.querySelector(".note-content");
const deleteIcon = document.querySelector(".trash-btn");

function showNotes() {
  noteDiv.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", noteDiv.innerHTML);
}

button.addEventListener("click", () => {
  let cont = document.createElement("div");
  let input = document.createElement("p");
  let icon = document.createElement("img");
  cont.classList.add("content");
  input.classList.add("input-box");
  input.setAttribute("contenteditable", "true");
  icon.src = "webfonts/trash-can.svg";
  cont.appendChild(input);
  cont.appendChild(icon);
  noteDiv.appendChild(cont);
});

noteDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    allNotes = document.querySelectorAll(".input-box");
    allNotes.forEach((write) => {
      write.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
