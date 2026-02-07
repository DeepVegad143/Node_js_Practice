const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todo = [];

const showMenu = () => {
    console.log("\n1: Add a task to your list.");
    console.log("2: View your task list.");
    console.log("3: Exit the list,");

    rl.question("Choose an option: ", handleInput)
}

const handleInput = (option) => {
    if(option === "1"){
        rl.question("Enter your task: ", (task) => {
            todo.push(task);
            console.log("Task added: ", task)
            showMenu();
        })
    }

    else if(option === "2"){
        console.log("\n Your todo list: ")
        todo.forEach((task, index) => {
            console.log(`${index+1}, ${task}`)
        })
        showMenu();
    }

    else if(option === "3"){
        console.log("\n You exited the list.")
        rl.close();
    }

    else{
        console.log("Invalid option. Please choose a valid option.")
        showMenu();
    }

}

showMenu();
