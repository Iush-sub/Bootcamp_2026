const read = require("readline-sync");
const fs = require("fs");

let socialMedia;
//A function which was used to overcome the constant initilization of social object even after the update.
if (fs.existsSync("socialMedia.json")) {
    // Load existing data
    socialMedia = JSON.parse(
        fs.readFileSync("socialMedia.json", "utf8")
    );
} else {
    // Create initial data only for the first run
    socialMedia = {
        Username: "Iush Sub",
        mail: "xyz@gmail.com",
        likes: 100,
        Comments: [],
        friends: []
    };
  }









// `` is used so that we can write in by pressing enter. unlike python we use `` instead of normal ""

function displayProfile() {
    console.log(`
*** Welcome to Profile of Iush The Great. ***

Name: ${socialMedia.Username}
Mail: ${socialMedia.mail}
Likes: ${socialMedia.likes}
Comments: ${socialMedia.Comments}
Friends: ${socialMedia.friends}
`);

    updateProfile();
}

function updateProfile() {
    const action = read.question(`
@@@ Press 1 to update @@@
@@@ Press 0 to exit @@@

Your action: `);

    if (action === "1") {
        const field = read.question(`
Update Name type "name"
Update Mail type "mail"
Add Likes type "+1"
Add Comments type "comments"
Add Friends type "frnds"

Your choice: `);

        if (field === "name") {
            const newName = read.question("New name: ");
            socialMedia.Username=newName;
            displayProfile()
        }
        else if(field==="mail")
        {
            const newMail = read.question("New mail: ");
            socialMedia.mail=newMail;
            displayProfile()
        }
        else if(field==="+1"){
          socialMedia.likes++;
          displayProfile()
        }
        else if(field==="comments")
        {
          const newComment=read.question("New comment: ");
          socialMedia.Comments.push(newComment);
          displayProfile();
        }
        else if(field==="frnds")
        {
          const newFrnds=read.question("New friend: ");
          socialMedia.friends.push(newFrnds);
          displayProfile();
        }
        else{
          console.log("Error")
          displayProfile()
        }
    }
    else{
      process.exit();
    }
}


displayProfile();


fs.writeFileSync(
    "socialMedia.json",
    JSON.stringify(social, null, 2)
);
