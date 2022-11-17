import question from "./question"


const name = await question("What is your name?");

const answer = await question("Are you sure? (y/N) ")
    .then(answer => answer.toLowerCase() == 'y')