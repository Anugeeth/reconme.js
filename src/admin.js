const https = require('https');


const admin = (url) => {

    // add your own routes here
    let paths = ['/admin', '/administrator', '/admincp', '/apanel', '/admin/login.php'];
    for (let i = 0; i < paths.length; i++) {

        https.get(`https://${url + paths[i]}`, (res) => {

            if (res.statusCode == 200) console.log(`Found at ${url + paths[i]}`);
            else console.log(`Not found at ${url + paths[i]}`);

        }).on('error', (e) => console.log(e.message));

    }
}

module.exports = admin;
