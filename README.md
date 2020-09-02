# One-Word-Story-Bot
A simple discord bot coded in discord.js to make a one-word-story channel

## Setup
- Edit `configexample.json` to be called `config.json`
- Fill out the required fields in `config.json`
- Run
```
$ git clone https://github.com/KingOKarma/One-Word-Story-Bot
$ npm install discord.js
$ node .
```

## If you're using a server
- If you have PM2 
```
$ pm2 start index.js --name OneWordBot
$ pm2 logs OnwWordBot
For logs
```

Make sure to also take a look at [KFC Bucket Boy](https://github.com/KingOKarma/KFCBoy)