// monstats.txt
const monstatsFilename = 'global\\excel\\monstats.txt';
const monstats = D2RMM.readTsv(monstatsFilename);

monstats.rows.forEach((row) => {
  if (row["Id"] === "wraith3") {
    row["BaseId"] = "flyingscimitar";
    row["flying"] = "";
  }
});

D2RMM.writeTsv(monstatsFilename, monstats);
