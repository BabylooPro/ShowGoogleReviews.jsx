const readline = require("readline");
const { spawn } = require("child_process");

// CREATE A READLINE INTERFACE TO HANDLE THE CONSOLE INPUT AND OUTPUT
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// ASK THE USER WHICH COMPONENT THEY WOULD LIKE TO USE
rl.question(
	"\x1b[31mCHOOSE COMPONENT FOR DEV ENVIRONMENT: \x1b[0m 1 FOR \x1b[32m'<GoogleReviews />'\x1b[0m OR 2 FOR \x1b[34m'<AdvancedGoogleReviews />'\x1b[0m : ",
	(answer) => {
		let componentEnv; // VARIABLE TO STORE THE ENVIRONMENT SETTING

		// CHECK THE USER'S ANSWER AND SET THE ENVIRONMENT VARIABLE ACCORDINGLY
		if (answer.trim() === "1") {
			componentEnv = "GoogleReviews";
		} else if (answer.trim() === "2") {
			componentEnv = "AdvancedGoogleReviews";
		} else {
			// IF THE SELECTION IS NOT VALID, INFORM THE USER AND EXIT
			console.log("INVALID SELECTION, PLEASE TYPE 1 OR 2.");
			rl.close();
			return;
		}

		rl.close();

		// CHECK OS TYPE AND CONFIGURE NPM COMMAND, ARGUMENTS, AND ENVIRONMENT VARIABLES FOR SPAWNING PROCESS
		const isWindows = process.platform === "win32";
		const viteCommand = isWindows ? "npm.cmd" : "npm";
		const viteArgs = ["run", "vite-dev"];
		const envVars = {
			...process.env,
			VITE_REACT_APP_COMPONENT_CHOICE: componentEnv,
		};

		// LAUNCH VITE SERVER WITH ENVIRONMENT VARIABLES AND OS-SPECIFIC SHELL SETTINGS
		const vite = spawn(viteCommand, viteArgs, {
			env: envVars,
			stdio: "inherit",
			shell: isWindows ? "cmd.exe" : "sh",
		});

		// HANDLE ANY ERRORS THAT OCCUR WHEN RUNNING THE VITE SERVER
		vite.on("error", (err) => {
			console.error(`ERROR OCCURRED WHILE RUNNING VITE: ${err}`);
		});
	}
);
