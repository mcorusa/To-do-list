let btnEl = document.getElementById("push");
let inputEl = document.getElementById("newinput");
let taskList = document.querySelector(".tasks");

function addTask() {
    if (inputEl.value === ""){
        alert("Please Enter a Task");
    } else {
        // Kreiranje novog zadatka i dodavanje u listu
        let newTask = document.createElement("li");
        newTask.innerHTML = `<div class="task">
                                <div class="container-left"> 
                                    <span class="task-name">${(inputEl.value).trim()}</span>
                                </div>
                                <div class="container-right">
                                    <button class="btn-delete"> <i class="far fa-trash-alt"></i> </button>
                                    <button class="btn-edit"> <i class="far fa-edit"></i> </button>
                                </div>
                            </div>`;
        taskList.appendChild(newTask);

        inputEl.value = ""; 

        // Funkcionalnost brisanja zadatka
        let btnDelete = newTask.querySelector(".btn-delete");
        btnDelete.addEventListener('click', () => {
            newTask.remove(); 
        });

        // Funkcionalnost prekrižavanja zadatka (obavljen)
        let taskName = newTask.querySelector(".task-name");
        taskName.addEventListener('click', () => {
            taskName.classList.toggle('completed');
        });

        // Funkcionalnosti uređivanja zadatka
        let btnEdit = newTask.querySelector(".btn-edit");
        btnEdit.addEventListener('click', () => {
            let taskText = taskName.innerText.trim();
            inputEl.value = taskText; 
            inputEl.focus(); 
            newTask.remove(); 
        });
    }
}

btnEl.addEventListener('click', addTask);

// dodavanje zadatka na pritisak tipke Enter
inputEl.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
