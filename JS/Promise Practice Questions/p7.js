// Level 7 — Try/Catch
// Create: fetchUser()
// that sometimes fails. Use try/catch.
// Print: User loaded OR Error loading user

async function fetchUser() {
  try {
    const val = Math.random();

    if (val > 0.5) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("User loaded");
    } else {
      throw new Error("Failed to load user");
    }

  } catch (err) {
    console.log("Error loading user");
  }
}

fetchUser();
fetchUser();
fetchUser();