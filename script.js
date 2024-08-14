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
        // Create a new list item and add it to the 'ul' container
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        // Create an 'x' for deletion of a task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // Add it to the list item element
        li.append(span);
        // Save the state
        saveData();
    }
}

// Event listener
listContainer.addEventListener("click", function(e)
{
    // If the task item is clicked...
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked"); // ...add/remove the 'checked' class to the list item
        // Save the state
        saveData();
    }
    // If the 'x' is clicked...
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove(); // ...remove the parent element --> the task itself
        // Save the state
        saveData();
    }
}, false);

// Function to save the state of the ToDo List
function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
// Function to show the saved state
function showData()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
// Call the showData function
showData();