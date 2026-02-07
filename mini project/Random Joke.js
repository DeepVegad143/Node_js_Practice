
import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url, (respone) => {
        let data = "";

        respone.on("data", (chunk) => {
            data += chunk;
        })

        respone.on("end", () => {
            const joke = JSON.parse(data);
            console.log(chalk.red(`Here is a random ${joke.type} joke: `))
            console.log(chalk.blue(`${joke.setup}`))
            console.log(chalk.yellow(`${joke.punchline}`));
        })
    
        respone.on("error", (err) => {
            console.log(`Error :, ${err.message} `)
        })
    })

}
 
getJoke();

