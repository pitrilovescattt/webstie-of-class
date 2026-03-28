function showSection(sectionId) {
    document.getElementById('materi').style.display = 'none';
    document.getElementById('tugas').style.display = 'none';

    document.getElementById(sectionId).style.display = 'block';
}

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
