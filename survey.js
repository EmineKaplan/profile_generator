const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name?  Nicknames are also acceptable :) ', (name) => {
  l.question('Where are you from?', (bornPlace) => {
    l.question('Do ylou like to live trave?) ', (boolean) => {
      l.question('Do you like to play with kids ?) ', (boolean) => {
        l.question('How old are you?) ', (number) => {
          l.question('Which enstrument do you play ?) ', (enstrumentName) => {
            l.question('Which pet like more?) ', (name) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});