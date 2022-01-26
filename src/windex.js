const DEBUG = false
const debugLog = (s) => DEBUG ? console.log(`DEBUG: ${s}`) : null 

const toBaseTwo = (n) => {
    const original = n

    const pad = (s) => {
        const zero = "0"
        const req = 8 - s.length
        return `${zero.repeat(req)}${s}`
    }

    const getOctets = (str) => {
        const octets = []
        let currOctet = []

        for (let char in str) {
            const currChar = str[char]
            if (currOctet.length == 8) {
                octets.push([...currOctet])
                currOctet = []
                continue
            }
            currOctet.push(currChar)
            console.log(currOctet);
        }

        if (currOctet.length) {
            octets.push(currOctet)
        }

        console.log(octets)
    }

    if (typeof n != "number") {
        console.log("no thank you")
        return
    }

    debugLog(`n starts as: ${n}`);
    let bin = (n % 2).toString() 
    debugLog(bin)

    while (n > 1) {
        n = parseInt(n/2)
        debugLog(`n is now: ${n}`)
        const nextBin = (n % 2).toString()
        debugLog(`The next binary digit is: ${nextBin}`)
        bin = `${nextBin}${bin}`
        debugLog(`Now the binary number is: ${bin}`)
    }

    getOctets(bin)

    // console.log(`The binary representation of ${original} is ${pad(bin)}`)
    // return pad(bin)
}

toBaseTwo("5")
console.log("======");
toBaseTwo(3)
console.log("======");
toBaseTwo(2)
console.log("======");
toBaseTwo(5)
console.log("======");
toBaseTwo(8)

console.log("======");
toBaseTwo(2900)
