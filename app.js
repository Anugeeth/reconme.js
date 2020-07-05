const readline = require('readline');

const common = require('./src/common');

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


function choices(option,url) {
    switch (option) {
        case 1: common(url);
            break;
        case 2: common('dnslookup',url);
            break;
        case 3: common('geoip',url);
            break;
        case 4: common('nmap',url);
            break;
        case 5: common('reverseiplookup',url);
            break;
        case 6: common('hostsearch',url);
            break;
        case 7: common('httpheaders',url);
            break;
        case 8: common('zonetransfer',url);
            break;
        default: console.log("Incorrect option");
    }
    return;
}