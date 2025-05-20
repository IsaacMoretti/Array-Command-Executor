### 🧰 Array Command Executor

A simple JavaScript function factory that creates an executor for common array operations based on string commands.  
This lets you manipulate an internal array by passing textual commands like "push 10" or "pop" dynamically.

### 🚀 Features

- ⚙️ Supports fundamental array methods: `push`, `pop`, `shift`, `unshift`, `reverse`, and a custom `remove` by value.  
- 📝 Parses command strings and executes corresponding array operations.  
- 🔒 Maintains internal state encapsulated within the factory.  
- 🖨️ Prints the current array state as a comma-separated string.  
- 📋 Returns a copy of the internal array on request.

### 💻 Usage

```js
const executor = createExecutorCommands([1, 2, 3]);
executor.execute("push 10");   // Adds 10 to the array
executor.execute("pop");       // Removes last element
executor.execute("print");     // Logs the array: "1,2,10"