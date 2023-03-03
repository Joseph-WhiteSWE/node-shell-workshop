const fs = require('fs');

fs.readdir('./', 'utf8', (err, files) =>
 {
  process.stdin.on("data", (data) =>
  {
    const cmd = data.toString().trim();
    if (cmd === "ls")

    if (err)
    {
      throw err;
    } else
    {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  })
})
