#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "addTodo",
            type: "input",
            message: "Waht you want to add in your Todos",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Todos",
            default: "true"
        },
    ]);
    todos.push(addTask.addTodo);
    condition = addTask.addMore;
    console.log(todos);
}
