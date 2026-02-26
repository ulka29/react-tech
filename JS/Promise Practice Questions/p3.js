// Level 3 — Promise chaining

// Write: step1() -> step2() -> step3()
// Each returns a promise with 1s delay.

// Output:

// Step 1
// Step 2
// Step 3

function createStep(message) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), 1000);
  });
}

createStep("Step 1")
  .then((data) => {
    console.log(data);
    return createStep("Step 2");
  })
  .then((data) => {
    console.log(data);
    return createStep("Step 3");
  })
  .then((data) => {
    console.log(data);
  });