const readline = require("readline-sync");

// Object created
const social = {
  Username: "Iush Sub",
  mail: "xyz@gmail.com",
  likes: 100,
  Comments: [],
  friends: []
};

// Function to display the profile
function displayProfile() {
  console.log("\n==========================================");
  console.log(" *** Welcome to Profile of Iush The Great *** ");
  console.log("==========================================");
  console.log("Name:     " + social.Username);
  console.log("Mail:     " + social.mail);
  console.log("Likes:    " + social.likes);
  console.log("Comments: " + (social.Comments.length ? social.Comments.join(", ") : "No comments yet"));
  console.log("Friends:  " + (social.friends.length ? social.friends.join(", ") : "No friends yet"));
  console.log("==========================================\n");

  update();
}

// Main Interactive Loop
function update() {
    // 1. A simple hello message to prove the function started
    console.log("\n👋 HELLO! The update function is working!");

    // 2. A simple prompt to test if the terminal takes your input
    const testInput = readline.question("Type a test word and press Enter: ");
    
    // 3. Confirm what you typed
    console.log("You typed: " + testInput);

    // 4. Return false so the program safely exits instead of looping forever
    console.log("Testing complete. Exiting program...");
    return false; 
}
 displayProfile()