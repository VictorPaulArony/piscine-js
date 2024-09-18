import fs from "fs";
let dir = process.argv[2];
if (typeof dir === "undefined") {
  dir = process.cwd();
}
let lastFirst = [];
let i = 0;
try {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err.message);
    }
    for (let file of files) {
      file = file.replace(".json", "");
      let x = file.split("_");
      let lf = x[1] + " " + x[0];
      lastFirst.push(lf);
    }
    lastFirst.sort();
    lastFirst.forEach((element, idx) => {
      console.log(`${idx + 1}. ${element}`);
    });
  });
} catch (err) {
  console.error(err);
}
