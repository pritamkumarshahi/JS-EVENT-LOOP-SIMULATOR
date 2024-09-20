# JavaScript Event Loop Simulator

## Overview
The JavaScript Event Loop Simulator is a tool designed to help users understand how the JavaScript event loop processes synchronous and asynchronous code. It visualizes the call stack, task queue, and microtask queue, providing insights into the execution flow of JavaScript.

## Features
- Visual representation of the call stack, task queue, and microtask queue.
- Real-time tracking of synchronous operations and asynchronous tasks.
- Ability to run custom JavaScript code and see how it behaves in the event loop.

## Installation
To use the simulator, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install

## Usage
Input Your Code: In the provided code editor, write or paste your JavaScript code. The simulator supports both synchronous and asynchronous code, Console.log is madotry see the graphical repersentation of code execution.

Example Code:

javascript
Copy code
console.log('Sync log 1');
setTimeout(() => console.log('Async Timeout'), 0);
Promise.resolve().then(() => console.log('Async Promise'));
console.log('Sync log 2');
Run the Code: Click the "Run Code" button to execute your JavaScript code. The simulator will process the code and display the execution order in the call stack, task queue, and microtask queue.

View the Execution Flow: After running the code, observe the changes in the visual representation of the call stack and queues. The simulator will show:

Call Stack: Displays the current synchronous operations.
Task Queue: Shows tasks scheduled by setTimeout and similar functions.
Microtask Queue: Displays tasks scheduled by Promises and MutationObserver.
Reset and Rerun: After the execution is complete, the simulator resets automatically. You can input new code and run it again without refreshing the page.

Example Use Cases
Understanding the order of execution for synchronous and asynchronous code.
Observing how microtasks and tasks are handled differently by the event loop.
Debugging JavaScript code by visualizing the execution flow.
Contribution
If you would like to contribute to the project, feel free to fork the repository and submit a pull request with your enhancements or bug fixes.

License
This project is licensed under the MIT License.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**