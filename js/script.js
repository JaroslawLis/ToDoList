var taskList = document.querySelector('#task-list');
var form = document.querySelector('form');
var item = document.querySelector('#item');


// listener, if submit is clicked or entered

form.addEventListener('submit', function (event) {
    console.log("hi");

    event.preventDefault();
   // check is value in form
    if (item.value) {
        taskList.innerHTML += '<li>' + item.value +
            '<button class="remove-task"' +
            'type="submit">Remove</button></li>';
        writeTask();
        console.log(item);
        item.value = "";
    }
}, false)

// delete current task, listener if remove button click

taskList.addEventListener('click', function (event2) {
    event2.preventDefault();
    var t = event2.target;
    var com = t.parentNode.firstChild.textContent;

    if (t.className == "remove-task") {
        if (confirm("Czy na pewno usunąć " + com + "?")) {
         
            var del = t.closest('li');
            del.remove();

            writeTask();
        }
    }
}, false);
//function => check task stored in localStorage
function getValues() {
    var storedValues = window.localStorage.mytask;
    if (!storedValues) {
        taskList.innerHTML = '<li>Sample Task 1' +
            '<button class="remove-task">Remove</button>' +
            '</li>';
    } else {
        taskList.innerHTML = storedValues;
    }
};
//function => write task to localStorage
function writeTask() {
    window.localStorage.mytask = taskList.innerHTML;
};
getValues();
