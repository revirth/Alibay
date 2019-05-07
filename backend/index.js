require("dotenv-expand")(require("dotenv").config());
const MongoClient = require("mongodb").MongoClient;
let DB, USERS;
MongoClient.connect(process.env.MLAB_URI, { useNewUrlParser: true }).then(
  client => {
    DB = client.db("alibay");
    USERS = DB.collection("users");

    USERS.find({})
      .toArray()
      .then(res => {
        console.log(res);
      });
  }
);

let express = require("express");
let app = express();
let upload = require("multer")({ dest: __dirname + "/uploads/" });
app.use("/images", express.static("uploads"));

let cookieParser = require("cookie-parser");
app.use(cookieParser());

// let bodyParser = require("body-parser");
// app.use(bodyParser.raw({ type: "*/*" }));

let sha256 = require("sha256");
resmsg = (st, msg) => {
  return {
    status: st,
    message: msg
  };
};
let SESSIONS = {};

app.post("/login", upload.none(), async (req, res) => {
  console.log("TCL: /login", req.body);

  let query = { ...req.body, password: sha256(req.body.password) };

  let doc = await USERS.findOne(query);
  console.log("TCL: /login -> users.findOne", doc);

  if (doc === null) {
    res.clearCookie("sid");
    res.send(resmsg(false, "Username or password is invalid"));
    return;
  }

  let sid = "" + Math.floor(Math.random() * 1000000000000);
  SESSIONS[sid] = req.body.username;
  res.cookie("sid", sid);
  res.send(resmsg(true, "login success"));
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
