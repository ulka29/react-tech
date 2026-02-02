//https://www.jsv9000.app/
function login() {
  return new Promise(function loginExecutor(resolve) {
    setTimeout(function loginTimer() {
      console.log("Logged in");

      resolve({
        userId: 101,
        token: "abc123token"
      });
    }, 1000);
  });
}

function getProfile(auth) {
  return new Promise(function profileExecutor(resolve) {
    setTimeout(function profileTimer() {
      console.log("Profile loaded");

      resolve(
        Object.assign({}, auth, {
          name: "John Doe",
          email: "john@example.com"
        })
      );
    }, 1000);
  });
}

function getPosts(user) {
  return new Promise(function postsExecutor(resolve) {
    setTimeout(function postsTimer() {
      console.log("Posts loaded");

      resolve(
        Object.assign({}, user, {
          posts: [
            { id: 1, title: "Hello World" },
            { id: 2, title: "Learning Promises" }
          ]
        })
      );
    }, 1000);
  });
}

function finish(data) {
  console.log("All done");
  console.log("Final Data:", data);
}

/* Promise chain */
login()
  .then(getProfile)
  .then(getPosts)
  .then(finish)
  .catch(function handleError(error) {
    console.error("Error:", error);
  });
