// Define variables
const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");

// Define the addTask function
function addTask()
{
    if(inputBox.value === '')
    {
        alert("You must enter a task.");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
    }
}