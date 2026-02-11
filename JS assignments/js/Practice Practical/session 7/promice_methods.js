function login() {
  return new Promise(function loginExecutor(resolve) {
    setTimeout(function loginTimer() {
      console.log("Logged in");
      resolve({ userId: 101, token: "abc123token" });
    }, 1500);
  });
}

function getProfile() {
  return new Promise(function profileExecutor(resolve) {
    setTimeout(function profileTimer() {
      console.log("Profile loaded");
      resolve({ name: "John Doe", email: "john@example.com" });
    }, 1200);
  });
}

function getPosts() {
  return new Promise(function postsExecutor(resolve, reject) {
    setTimeout(function postsTimer() {
      console.log("Posts loaded");
      resolve([
        { id: 1, title: "Hello World" },
        { id: 2, title: "Learning Promises" }
      ]);
    }, 2000);
  });
}

function getNotifications() {
  return new Promise(function notificationsExecutor(resolve, reject) {
    setTimeout(function notificationsTimer() {
      console.log("Notifications loaded");
      resolve(["msg1", "msg2"]);
    }, 2000);
  });
}



// (parallel, fails if any fails)
// result in array and promise resolver first is first in result.
Promise.all([getProfile(), getPosts(), getNotifications()])
  .then(function(results) {
    console.log("All results (all succeed):", results);
  })
  .catch(function(err) {
    console.error("One failed:", err);
  });


//Using Promise.allSettled (parallel, never fails)
// Returns objects {status: "fulfilled", value: ...} or {status: "rejected", reason: ...}
Promise.allSettled([getProfile(), getPosts(), getNotifications()])
  .then(function(results) {
    console.log("AllSettled results:", results);
  });




// Using Promise.race (first finished)
// Resolves/rejects as soon as first promise finishes
// Total time = fastest timer (1200ms getProfile in this example)

Promise.race([getProfile(), getPosts(), getNotifications()])
  .then(function(first) {
    console.log("Race winner:", first);
  })
  .catch(function(err) {
    console.error("Race failed:", err);
  });





//   Using Promise.any (first success)
// Resolves with first successful result
// Ignores failed promises unless all fail
Promise.any([getProfile(), getPosts(), getNotifications()])
  .then(function(firstSuccess) {
    console.log("Any first success:", firstSuccess);
  })
  .catch(function(err) {
    console.error("All failed:", err);
  });
