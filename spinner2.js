const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\' , '|']
let timer = 100;

for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, timer);

  timer += 200;
}

// write new line for next terminal prompt
setTimeout(() => {
  process.stdout.write('\n');
}, timer);