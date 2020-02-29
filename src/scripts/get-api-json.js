const { exec } = require("child_process");

exec("wget " + process.env.API_PATH_GHIBLI + " -O src/json/ghibli.json", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

const gp2020 = "sr:stage:555063";

exec("wget " + process.env.API_PATH_GP + "sport_events/" + gp2020 + "/schedule.json?api_key=" + process.env.GP_KEY + " -O src/json/stages.json", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
