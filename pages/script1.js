let draggedItem = null;

function allowDrop(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.target.classList.add("drag-over");
}

function dragLeave(event) {
    event.target.classList.remove("drag-over");
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.dataset.job);
    draggedItem = event.target;
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("drag-over");
    const data = event.dataTransfer.getData("text");
    if (event.target.dataset.description === data) {
        event.target.textContent = "______ " + data.replace(/-/g, ' ');
        draggedItem.style.display = "none"; // Cachez le métier glissé pour éviter de le réutiliser
    }
    draggedItem = null;
}

const checkButton = document.getElementById("check1");
const message = document.getElementById("message1");

checkButton.addEventListener("click", () => {
    const descriptionListItems = document.querySelectorAll("#description-list li");
    let correct = true;

    descriptionListItems.forEach((descriptionItem) => {
        const jobName = descriptionItem.dataset.description;
        if (!descriptionItem.textContent.includes(jobName.replace(/-/g, ' '))) {
            correct = false;
        }
    });

    if (correct) {
        message.textContent = "Bravo, vous avez associé correctement les métiers aux descriptions !";
        message.style.color = "green";
    } else {
        message.textContent = "Désolé, essayez encore.";
        message.style.color = "red";
    }
});
