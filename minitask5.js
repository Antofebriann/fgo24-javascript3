// membuat program antrian(queue) dengan memanfaatkan promise dan setTimeout
// tampilkan nama "john" setelah 1500ms
// tampilkan nama "Ed" setelah 2000ms
// tampilkan nama "jane" setelah 500ms

function queue(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, delay);
    });
}
async function runQueue() {
    await queue("John", 1500);
    await queue("Ed", 2000);
    await queue("Jane", 500);
}

runQueue();
