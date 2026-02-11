function loadUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("User loaded")
      resolve("User")
    }, 1000)
  })
}

function loadPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Posts loaded")
      resolve("Posts")
    }, 1000)
  })
}

function loadComments() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Comments loaded")
      resolve("Comments")
    }, 1000)
  })
}

//Sequntiall
async function dashboardSequential() {
  let user = await loadUser()
  let posts = await loadPosts()
  let comments = await loadComments()
  
  console.log("User:", user)
  console.log("Posts:", posts)
  console.log("Comments:", comments)
  console.log("Dashboard ready")
}

//Parrelell
async function dashboardParrellel() {
  let user = await loadUser();
  
  // posts and comments load in parallel
  let [posts, comments] = await Promise.all([loadPosts(), loadComments()]);
  
  console.log("User:", user);
  console.log("Posts:", posts);
  console.log("Comments:", comments);
  console.log("Dashboard1 ready");
}



async function runDashboards() {
  console.log("Starting sequential dashboard...");
  await dashboardSequential();   // wait for sequential to finish

  console.log("\nStarting parallel dashboard...");
  await dashboardParrellel();  // run parallel version after
}

runDashboards();

