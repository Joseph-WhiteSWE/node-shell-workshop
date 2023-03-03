//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  //
  //.  YOUR CODE WOULD GO HERE INSIDE THE (data) =>{ } function.  It gets run whenever someone enters new values into the terminal
  if (cmd === "pwd") {
    process.stdout.write(process.cwd());
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
