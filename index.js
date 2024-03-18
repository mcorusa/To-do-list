let btnEl = document.getElementById("push");
  let inputEl = document.getElementById("newinput");
  let taskList = document.querySelector(".tasks");

  function addTask() {
    if (inputEl.value === ""){
      alert("Please Enter a Task");
    } 
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML = `<div class="task">
                              <span id="task-name">${inputEl.value}</span>
                              <button class="btn-delete"> <i class="far fa-trash-alt"></i> </button>
                          </div>`;
        taskList.appendChild(newTask);
        inputEl.value = ""; 

        let btnDelete = newTask.querySelectorAll(".btn-delete");
             btnDelete.forEach(btn => {
             btn.addEventListener('click', () => {
             newTask.remove(); 
             });
        });

        /////////////////////////////////////////////////////////
        ////dodavanje line strike

        let tasks = document.querySelectorAll(".task");
            for (let i=0; i<tasks.length;i++){
                tasks[i].onclick = function(){
                    this.classList.toggle('completed')
                }
            }

        if(tasks.length%3==0){
            let quote = document.createElement("p");
            quote.classList.add("quote");
            let quoteContainer = document.getElementById("quote-container");
            quote.classList.add("quote");
            quote.innerText ="Work for it! Never give up"
            quoteContainer.appendChild(quote)
        }
    }
  }

  btnEl.addEventListener('click', addTask);

  inputEl.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });



