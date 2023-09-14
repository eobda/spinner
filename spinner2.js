const spinner = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ' , '|   ', '\n']
let timer = 100;

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}`);
  }, timer);

  timer += 200;
}