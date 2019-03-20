/*

Global arrays. There ought to be a 1:1 relationship of each index of your todos
and each index of your isDone.

For example, isDone[3] would hold the "done-ness" information for todos[3].

*/

let todos = [];
let isDone = [];

// When the html finishes loading, launch `init`.
window.onload = init;

// Set up all event listeners.
function init() {
    // When they click the add todo button, run `addTodo`.
    document.querySelector('#add-todo')
        .addEventListener('click', addTodo);
        
    // When they click the clear done todos button, run `clearDoneTodos`.
    document.querySelector('#clear-done-todos')
    .addEventListener('click', clearDoneTodos);
    
    // When they click the clear all todos button, run `clearAllTodos`.
    document.querySelector('#clear-all-todos')
    .addEventListener('click', clearAllTodos);

}

function addTodo(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    // Get new todo from the new todo input field.
    let todo = document.querySelector('#new-todo').value;

    // Clear the input field of all text.
    // "resetAllInputs" function

        // Find all input fields.
        const input = document.querySelector('input');
    
        // For each one, set its current value to an empty string.
        
        input.value = '';

    // Put the todo and its "done-ness" in their respective arrays.
    if (todo !==''){
        todos.push(todo);
        isDone.push(false);}

    console.log(todos);
    console.log(isDone);
    
    // Create a new html element and put our new todo's text in there.
    const ol = document.querySelector('#todo-list');
    
    let newLi = document.createElement('li');
    newLi.innerText = todo;
    
        // console.log(newLi);
    // Add an event listener on the newly created html element to launch
    // `toggleDone` when it's clicked.

    // console.log (newLi);
    newLi.addEventListener('click', toggleDone);
    
    // Functions addItemstoOL and addItemtoOL
    ol.appendChild(newLi);

    // console.log(ol);
    }


function clearAllTodos(event) {
    // Stop page from reloading on button click.
    event.preventDefault();
    
    // Remove all todos from BOTH arrays.
        todos = [];
        isDone = [];

        console.log(todos);
        console.log(isDone);

    // Remove all todos from the html.
    // You'll have to write that function too, but we'll call it here:
    removeAllChildrenOfOl();
}

function clearDoneTodos(event) {
    // Stop page from reloading on button click.
    event.preventDefault();
    /*
        Find which todos need to be removed and remove them from BOTH arrays.
        If you did it right when making them, you should be able to check the
        `isDone` array to figure out which ones are, in fact, done. Remember
        that there is a 1:1 relationship between `todos` indices and `isDone`
        indices!

        One way to do this is to build up a new array. Give that a try first!

    */



    /*
        Now remove the done todos from the html.

        Although it's not technically efficient as there is a slight time cost
        to rendering new elements on a web page, you might think not of removing
        certain todos but making a new set of lis to replace what we have. You
        may even already have some code to clear the whole list!

        You could do it the harder but more html efficient way instead, though.

        Your call.
    */


}

function toggleDone(event) {
    // No need to run `event.preventDefault` here; that default behavior only
    // applies to buttons.
    
    // Grab the HTML element that was clicked.
    // If you don't know, the event parameter has what you need... somewhere.

    let toggle = event.target.innerText;
        // console.log(toggle);

    // Find the index of the array that this todo resides in. There are a couple
    // ways to do this, and I'm sure you'll figure one out!


    for (let i = 0; i < todos.length; i++){
        if (toggle === todos[i] && isDone[i] === false) {
            isDone[i] = true;

            console.log(todos[i]);
            console.log(isDone);
        }
        else if (toggle === todos[i] && isDone[i] === true) {
            isDone[i] = false;

            console.log(todos[i]);
            console.log(isDone);
        }
        }

    // *IF* it's not done yet, apply strikethrough. Otherwise, take that
    // strikethrough away!


    // Toggle the "done-ness" of the same todo, using the isDone array.

}

function removeAllChildrenOfOl() {
    // Grab the ol.
    let olist = document.querySelector('#todo-list');

    while(olist.hasChildNodes()) {
        olist.removeChild(olist.firstChild);
    

    // Remove all its children.
    // The way I like to do that is to continue to remove children as long as
    // there are some to remove.
    // Look at the methods `.hasChildNodes` and `removeChild`.
    // There are other ways too, though. Feel free to poke around.
}
}