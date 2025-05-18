function createExecutorCommands(InitialArray = []) {
    let struct = [...InitialArray];

    const commands = {
        push: (x) => struct.push(x),
        pop: () => struct.pop(),
        shift: () => struct.shift(),
        unshift: (x) => struct.unshift(x),
        reverse: () => struct.reverse(),
        remove: (x) => {
            const index = struct.indexOf(x);
            if (index !== -1) {
                struct.splice(index, 1);
                return true;
            }
            return false;
        },
        print: () => {
            console.log(struct.join(","));
        }
    };

    return {
        execute: (commandStr) => {
            const [op, argRaw] = commandStr.split(" ");
            const arg = Number(argRaw);
            const fn = commands[op];
            if (!fn) throw new Error(`invalid command: ${op}`);
            fn.length === 0 ? fn() : fn(arg);
        },
        getArray: () => [...struct]
    };
}
