const read = require("readline-sync");
const fs = require("fs");

let social;

if (fs.existsSync("social.json")) {
    // Load existing data
    social = JSON.parse(
        fs.readFileSync("social.json", "utf8")
    );
} else {
    // Create initial data only for the first run
    social = {
        Username: "Iush Sub",
        mail: "xyz@gmail.com",
        likes: 100,
        Comments: [],
        friends: []
    };
  }










function welcome() {
    console.log(`
*** Welcome to Profile of Iush The Great. ***

Name: ${social.Username}
Mail: ${social.mail}
Likes: ${social.likes}
Comments: ${social.Comments}
Friends: ${social.friends}
`);

    update();
}

function update() {
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
            social.Username=newName;
            welcome()
        }
        else if(field==="mail")
        {
            const newMail = read.question("New mail: ");
            social.mail=newMail;
            welcome()
        }
        else if(field==="+1"){
          social.likes++;
          welcome()
        }
        else if(field==="comments")
        {
          const newComment=read.question("New comment: ");
          social.Comments.push(newComment);
          welcome();
        }
        else if(field==="frnds")
        {
          const newFrnds=read.question("New friend: ");
          social.friends.push(newFrnds);
          welcome();
        }
        else{
          console.log("Error")
          welcome()
        }
    }
    else{
      process.exit();
    }
}


welcome();


fs.writeFileSync(
    "social.json",
    JSON.stringify(social, null, 2)
);
