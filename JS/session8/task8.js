// ### Exercise 3: setTimeout with Clear
// Task: Create a countdown timer that counts from 10 to 0, then stops.
// TODO: Implement countdown function

function countdown(start) {
    for (let i = 10; i >=0; i--) {
        let t=start-i
        setTimeout(function() {
            console.log(i); 
        }, t*1000);
    }
}
countdown(10);

