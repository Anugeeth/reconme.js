const readline = require('readline');

const { whois } = require('./src/whois');
const { zonetransfer } = require('./src/zonetransfer');
const { revip } = require('./src/revip');
const { portscan } = require('./src/portscan');
const { dnslookup } = require('./src/dnslookup');
const { headers } = require('./src/headers');
const { forwardns } = require('./src/forwardns');
const { iplocation } = require('./src/iplocation');

function choices(option,url) {
    switch (option) {
        case 1: whois(url);
            break;
        case 2: dnslookup(url);
            break;
        case 3: iplocation(url);
            break;
        case 4: portscan(url);
            break;
        case 5: revip(url);
            break;
        case 6: forwardns(url);
            break;
        case 7: headers(url);
            break;
        case 8: zonetransfer(url);
            break;
        default: console.log("Incorrect option");
    }
    return;
}

(function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let url = '';
    var option = 0;
    console.log("1  - Whois Lookup")
    console.log("2  - NameServer Lookup")
    console.log("3  - Find IP address location")
    console.log("4  - TCP Port Scan")
    console.log("5  - Reverse IP Lookup")
    console.log("6  - Forward DNS search")
    console.log("7  - HTTP Headers Check")
    console.log("8  - Zone Transfer")



    rl.question(`Select an option?\t`, (value) => {
        option = Number(value);
        rl.question(`Enter URL ?\t`, (value) => {
            url = value;
            choices(option,url)
            rl.close();
        });
    });

    return;
}());


