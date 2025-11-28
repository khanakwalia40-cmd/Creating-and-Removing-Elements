// Get references to buttons and container div
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const paraContainer = document.getElementById("paraContainer");

// Handle Add Paragraph
addBtn.addEventListener("click", function () {
  // Create a new paragraph element
  const p = document.createElement("p");

  // Set its text
  p.innerText = "This is a new paragraph.";

  // Append it to the container div
  paraContainer.appendChild(p);
});

// Handle Remove Last Paragraph
removeBtn.addEventListener("click", function () {
  // Get the last child paragraph of the container
  const lastPara = paraContainer.lastElementChild;

  // If there is a paragraph, remove it
  if (lastPara) {
    paraContainer.removeChild(lastPara);
  }
});
