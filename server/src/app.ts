import express, { Request, Response } from 'express';
import { ParseServer } from 'parse-server';

export default async () => {
    const app = express();
    const server = new ParseServer({
        databaseURI: 'mongodb://localhost:27017/parse', // Connection string for your MongoDB database
        // cloud: './cloud/main.js', // Path to your Cloud Code
        appId: 'parse-app',
        masterKey: 'test', // Keep this key secret!
        serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
    });
    // Start server
    await server.start();
    // Serve the Parse API on the /parse URL prefix
    app.use('/parse', server.app);

    app.listen(1337, function() {
        console.log('parse-server-example running on port 1337.');
    });
}

