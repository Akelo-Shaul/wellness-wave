const fs = require("fs");
// const filePath = "comments.json";

// read from json
// const comments = JSON.parse(fs.readFileSync(filePath).toString());
// console.log(comments[0].name);

function loadJSON(filename = "") {
  return JSON.parse(
    fs.existsSync(filename) ? fs.readFileSync(filename).toString() : "null"
  );
}

function saveJSON(filename = "", json = '""') {
  return fs.writeFileSync(filename, JSON.stringify(json, null, 2));
}

// const comments = loadJSON("comments.json");

// if (typeof theComment !== "undefined") {
//   comments.push(theComment);
//   saveJSON("comments.json", comments);
// }

export { loadJSON, saveJSON };
