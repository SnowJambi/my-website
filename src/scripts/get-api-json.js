const { exec } = require("child_process");

exec("wget " + process.env.API_PATH_GHIBLI + " -O /json/ghibli.json", (error, stdout, stderr) => {
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