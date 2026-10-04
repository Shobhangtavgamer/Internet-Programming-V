import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let tasks: string[] = [];
function showMenu(): void {
    console.log("\n===== TO-DO LIST =====");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Delete Task");
    console.log("4. Exit");
    console.log("======================");
}
function menu(): void {
    showMenu();
    rl.question("Enter your choice: ", (choice: string) => {
        switch (choice) {
            case "1":
                rl.question("Enter task: ", (task: string) => {
                    tasks.push(task);
                    console.log("Task added successfully!");
                    menu();
                });
                break;
            case "2":
                console.log("\n===== YOUR TASKS =====");
                if (tasks.length === 0) {
                    console.log("No tasks available.");
                } else {
                    tasks.forEach((task, index) => {
                        console.log(`${index + 1}. ${task}`);
                    });
                }
                menu();
                break;
            case "3":
                if (tasks.length === 0) {
                    console.log("No tasks to delete.");
                    menu();
                } else {
                    tasks.forEach((task, index) => {
                        console.log(`${index + 1}. ${task}`);
                    });
                    rl.question("Enter task number to delete: ", (number: string) => {
                        const index = Number(number) - 1;
                        if (index >= 0 && index < tasks.length) {
                            tasks.splice(index, 1);
                            console.log("Task deleted successfully!");
                        } else {
                            console.log("Invalid task number.");
                        }
                        menu();
                    });
                }
                break;
            case "4":
                console.log("Thank you for using To-Do List!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                menu();
        }
    });
}
menu();