require("dotenv-expand")(require("dotenv").config());
const MongoClient = require("mongodb").MongoClient;
let DB, USERS;
MongoClient.connect(process.env.MLAB_URI, { useNewUrlParser: true }).then(
  client => {
    DB = client.db("alibay");
    USERS = DB.collection("users");

    // in dev environment, select all users
    process.env.NODE_ENV === "development" &&
      USERS.find({})
        .toArray()
        .then(res => console.log(res));
  }
);

let express = require("express");
let app = express();
let upload = require("multer")({ dest: __dirname + "/uploads/" });
app.use("/images", express.static("uploads"));

let cookieParser = require("cookie-parser");
app.use(cookieParser());

let shajs = require("sha.js");
sha256 = str =>
  shajs("sha256")
    .update(str)
    .digest("hex");

resmsg = (st, msg) => ({ status: st, message: msg });

let SESSIONS = {};

app.post("/login", upload.none(), async (req, res) => {
  console.log("TCL: /login", req.body);

  let query = { ...req.body, password: sha256(req.body.password) };

  // find a user in Mongo
  let doc = await USERS.findOne(query);
  console.log("TCL: /login -> USERS.findOne", doc);

  if (doc === null) {
    res.clearCookie("sid");
    res.send(resmsg(false, "Username or password is invalid"));
    return;
  }

  // login
  let sid = "" + Math.floor(Math.random() * 1000000000000);
  SESSIONS[sid] = req.body.username;
  res.cookie("sid", sid);
  res.send(resmsg(true, "login success"));
});

app.post("/signup", upload.none(), async (req, res) => {
  console.log("TCL: /signup", req.body);

  // check the username
  let doc = await USERS.findOne({ username: req.body.username });
  console.log("TCL: /signup -> USERS.findOne", doc);

  if (doc !== null) {
    res.send(resmsg(false, "Username is already used"));
    return;
  }

  // store userinfo in Mongo
  let query = { ...req.body, password: sha256(req.body.password), usertype: 1 };
  await USERS.insertOne(query);
  res.send(resmsg(true, "signup success"));
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
