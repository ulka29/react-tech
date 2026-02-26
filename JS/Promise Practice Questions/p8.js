// Level 8 — Sequential delays
// Print:
// 1 sec
// 2 sec
// 3 sec
// each after 1 second using async/await.
// (No nested setTimeout)

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
} 

async function delay(num) {
  for (let i = 1; i <= num; i++) {
    await wait(1000);
    console.log(`${i} sec`);
  }
}
delay(5)