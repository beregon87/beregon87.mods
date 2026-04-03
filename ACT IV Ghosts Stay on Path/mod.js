const act5FlyingMonsters = [
    "willowisp5",   // Gloam
    "willowisp6",   // Black Soul
    "willowisp7",   // Burning Soul
    "willowisp8",   // Burning Soul

    "succubus6",    // Hell Temptress
    "succubus7",    // Blood Temptress
    "succubus8",    // Siren

    "succubuswitch6",
    "succubuswitch7",
    "succubuswitch8",
    "succubuswitch9"
];

// monstats.txt
const monstatsFilenames = ['global\\excel\\monstats.txt', 'global\\excel\\base\\monstats.txt']

monstatsFilenames.forEach(
    (monstatsFilename) => {

        const monstats = D2RMM.readTsv(monstatsFilename);

        monstats.rows.forEach((row) => {
            if (row["Id"].startsWith("fingermage")) {
                row["flying"] = "";
            } else if (row["Id"].startsWith("wraith")) {
                row["BaseId"] = "flyingscimitar";
                row["flying"] = "";
            } else if (act5FlyingMonsters.includes(row["Id"])) {
                row["flying"] = "";
            }
        });

        D2RMM.writeTsv(monstatsFilename, monstats);
    });
