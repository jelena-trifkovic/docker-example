const { Client } = require('pg');

(async () => {try {

    const client = new Client({
        user: 'admin',
        host: 'localhost',
        database: 'docker-example-db',
        password: 'password',
        port: 5432,
    });

    await client.connect();
    console.log("Success");
    client.end();
} catch (e) {
    console.log(e);
}})();
