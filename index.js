const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(bodyParser.json());
app.use(express.static('public'));


app.post('/login', (req, res) => {
  const { username, password } = req.body
  fs.readFile("DataBase.json", "utf8", ((err, data) => {
    if (err) { err }


    const users = JSON.parse(data)
    console.log(password)
    const user = users.find((info) => {
      return info.name === username //&& info.password === password

    })
    if (user) {
      if (user.password == password) {
        res.status(200).send("წარმატებით შეხვედით ✅");

      }
      else {
        res.status(401).send("არასწორი პაროლი ❌");

      }
    } else {
      res.status(401).send("არასწორი სახელი ან პაროლი ❌");
    }
  }))

  console.log(username)
})


app.post("/register", (req, res) => {
  const { RegUsername, RegPassword } = req.body;

  const jsonF = {
    name: RegUsername,
    password: RegPassword,
    ROLE: "member",
  };

  console.log(jsonF);

  fs.readFile("DataBase.json", "utf8", (err, data) => {
    const users = JSON.parse(data || "[]");
    const user = users.find((info) => {
      return info.name === RegUsername

    })
    if (!user) {


      console.log("success");
      users.push(jsonF);

      fs.writeFile("DataBase.json", JSON.stringify(users, null, 2), (writeErr) => {


        console.log("success");
        res.send("დარეგისტრირდა ✅");
      });


    }
    else {
      res.send("უკვე არსებოსბ მზგავსი აქაუნთი ❌");

    }

  });
});





app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
