//Deine UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListners();

//Load all evnt listners
function  loadEventListners(){
    //Add task event
    form.addEventListener('submit', addTask);
}

// Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
//Create li element
const li = document.createElement('li');
//Add class
li.className = 'collection-item';

//Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));

//Cretae new Link element
const Link = document.createTextNode('a');

//add class
Link.className = 'delete-item secondary-content';

//Add icon html
Link.innerHTML = '<i class ="fa fa-remove"></a>';

//Append the Link to li
li.appendChild (Link);

//AQppend li to ul
taskList.appendChild (li);

//Clear input
taskInput.value = '';


e.preventDefault();
} 