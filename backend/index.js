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

require("dotenv-expand")(require("dotenv").config());
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
let DB, USERS, CONFIG, ITEMS, REVIEWS;
MongoClient.connect(process.env.MLAB_URI, { useNewUrlParser: true }).then(
  client => {
    DB = client.db("alibay");
    USERS = DB.collection("users"); // [{username:'a', password:'sha256...', usertype:1}]
    CONFIG = DB.collection("config"); // usertypes: [type1, type2, type3 ...],
    ITEMS = DB.collection("items");
    REVIEWS = DB.collection("reviews");

    // in dev environment, check MongoDB documents
    let p1 = USERS.find({}).toArray();
    let p2 = CONFIG.find({}).toArray();
    let p3 = ITEMS.find({}).toArray();
    let p4 = REVIEWS.find({}).toArray();

    process.env.NODE_ENV === "development" &&
      Promise.all([p1, p2, p3, p4]).then(arr =>
        arr.map(res => console.log(res))
      );

    // start express server
    app.listen(4000, () => console.log("listening on port 4000"));
  }
);

app.get("/users", async (req, res) => {
  process.env.NODE_ENV === "development" &&
    res.send(await USERS.find({}).toArray());
});

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

app.get("/logout", upload.none(), (req, res) => {
  console.log("TCL: /logout", req.body);

  const sid = req.cookies.sid;
  delete SESSIONS[sid];
  res.clearCookie("sid");
  res.send(resmsg(true, "logout success"));
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

app.get("/items", upload.none(), async (req, res) => {
  console.log("TCL: /items", req.body);

  let docs = await ITEMS.find({}).toArray();

  res.send(docs);
});

app.get("/items/:itemId", upload.none(), async (req, res) => {
  console.log("TCL: /items/:itemId", req.params);

  let _id = ObjectId(req.params.itemId);
  let doc = await ITEMS.findOne(_id);

  res.send(doc);
});

app.get("/items/:itemId/reviews", upload.none(), async (req, res) => {
  console.log("TCL: /items/:itemId/reviews", req.params);

  let query = { itemId: req.params.itemId };
  let docs = await REVIEWS.find(query).toArray();

  res.send(docs);
});

app.post("/items", upload.none(), async (req, res) => {
  console.log("TCL: /items", req.body);

  let object = {
    ...req.body,
    price: parseFloat(req.body.price),
    quantity: parseInt(req.body.quantity)
  };

  await ITEMS.insertOne(object);
  res.send(resmsg(true, "item inserted"));
});

app.put("/items/:itemId", upload.none(), async (req, res) => {
  console.log("TCL: /items/:itemId", req.params, req.body);

  let object = {
    ...req.body,
    price: parseFloat(req.body.price),
    quantity: parseInt(req.body.quantity)
  };

  let doc = await ITEMS.findOneAndUpdate(
    { _id: ObjectId(req.params.itemId) },
    { $set: object },
    { returnNewDocument: true }
  );

  console.log(doc);

  doc["ok"] && res.send(resmsg(true, "item updated"));
});

app.get("/reviews", upload.none(), async (req, res) => {
  console.log("TCL: /reviews", req.body);

  let docs = await REVIEWS.find({}).toArray();

  res.send(docs);
});

app.get("/reviews/:reviewId", upload.none(), async (req, res) => {
  console.log("TCL: /items/:reviewId", req.params);

  let _id = ObjectId(req.params.reviewId);
  let doc = await REVIEWS.findOne(_id);

  res.send(doc);
});

app.post("/reviews", upload.none(), async (req, res) => {
  console.log("TCL: /reviews", req.body);

  let object = {
    ...req.body,
    rating: parseInt(req.body.rating)
  };

  await REVIEWS.insertOne(object);
  res.send(resmsg(true, "review inserted"));
});

app.put("/reviews/:reviewId", upload.none(), async (req, res) => {
  console.log("TCL: /review/:reviewId", req.params, req.body);

  let object = {
    ...req.body,
    rating: parseInt(req.body.rating)
  };

  let doc = await REVIEWS.findOneAndUpdate(
    { _id: ObjectId(req.params.reviewId) },
    { $set: object },
    { returnNewDocument: true }
  );

  console.log(doc);

  doc["ok"] && res.send(resmsg(true, "review updated"));
});
