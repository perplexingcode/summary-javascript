//Change type to module in package.json if the code is not nested within an async function

const sleep = async (ms = 3000) => new Promise((r) => setTimeout(r, ms));
await sleep();

console.log('BOOM!!!');
