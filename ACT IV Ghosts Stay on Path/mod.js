// monstats.txt
const monstatsFilename = 'global\\excel\\monstats.txt';
const monstats = D2RMM.readTsv(monstatsFilename);

monstats.rows.forEach((row) => {
  if (row["Id"] === "fingermage1") {
    row["flying"] = "";
  }
});monstats.rows.forEach((row) => {
  if (row["Id"] === "fingermage2") {
    row["flying"] = "";
  }
});monstats.rows.forEach((row) => {
  if (row["Id"] === "fingermage3") {
    row["flying"] = "";
  }
});
D2RMM.writeTsv(monstatsFilename, monstats);
