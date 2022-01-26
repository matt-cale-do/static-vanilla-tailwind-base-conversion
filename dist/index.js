const BIN_REGEX = new RegExp(/^[0-1]+$/)
const OCT_REGEX = new RegExp(/^[0-7]+$/)
const DEC_REGEX = new RegExp(/^[0-9]+$/)
const HEX_REGEX = new RegExp(/^[0-9a-fA-F]+$/)

const toBaseTwo = (n) => n.toString(2).toUpperCase()
const toBaseEight = (n) => n.toString(8).toUpperCase()
const toBaseTen = (n) => n.toString(10).toUpperCase()
const toBaseSixteen = (n) => n.toString(16).toUpperCase()

const baseTwoInput = document.getElementById("base-two")
const baseEightInput = document.getElementById("base-eight")
const baseTenInput = document.getElementById("base-ten")
const baseSixteenInput = document.getElementById("base-sixteen")

const handleBlank = (n) => {
    baseTwoInput.value = ""
    baseEightInput.value = ""
    baseTenInput.value = ""
    baseSixteenInput.value = ""
}

const fromBaseTwo = (e) => {
    const n = e.target.value
    if (n === "") {
        return handleBlank(n)
    }
    if (!BIN_REGEX.test(n)) {
        alert("You make me sad")
        baseTwoInput.value = n.slice(0, -1)
        return
    }
    const dec = parseInt(n, 2)
    baseEightInput.value = toBaseEight(dec)
    baseTenInput.value = toBaseTen(dec)
    baseSixteenInput.value = toBaseSixteen(dec)
}

const fromBaseEight = (e) => {
    const n = e.target.value
    if (n === "") {
        return handleBlank(n)
    }
    if (!OCT_REGEX.test(n)) {
        alert("You make me sad")
        baseEightInput.value = n.slice(0, -1)
        return
    }
    const dec = parseInt(n, 8)
    baseTwoInput.value = toBaseTwo(dec)
    baseTenInput.value = toBaseTen(dec)
    baseSixteenInput.value = toBaseSixteen(dec)
}

const fromBaseTen = (e) => {
    const n = e.target.value
    if (n === "") {
        return handleBlank(n)
    }
    if (!DEC_REGEX.test(n)) {
        alert("You make me sad")
        baseTenInput.value = n.slice(0, -1)
        return
    }
    const dec = parseInt(n, 10)
    baseTwoInput.value = toBaseTwo(dec)
    baseEightInput.value = toBaseEight(dec)
    baseSixteenInput.value = toBaseSixteen(dec)
}

const fromBaseSixteen = (e) => {
    const n = e.target.value
    if (n === "") {
        return handleBlank(n)
    }
    if (!HEX_REGEX.test(n)) {
        alert("You make me sad")
        toBaseSixteen.value = n.slice(0, -1)
        return
    }
    const dec = parseInt(n, 16)
    baseTwoInput.value = toBaseTwo(dec)
    baseEightInput.value = toBaseEight(dec)
    baseTenInput.value = toBaseTen(dec)
}

baseTwoInput.addEventListener('input', fromBaseTwo)
baseEightInput.addEventListener('input', fromBaseEight)
baseTenInput.addEventListener('input', fromBaseTen)
baseSixteenInput.addEventListener('input', fromBaseSixteen)

// debugIt is used to assist in debugging
const debugIt = () => {
    // Binary
    console.log("BINARY")
    let bin = toBaseTwo(3)
    console.log("======", bin)
    bin = toBaseTwo(2)
    console.log("======", bin)
    bin = toBaseTwo(5)
    console.log("======", bin)
    bin = toBaseTwo(8)
    console.log("======", bin)

    // Octal
    console.log("OCTAL")
    let oct = toBaseEight(3)
    console.log("======", oct)
    oct = toBaseEight(2)
    console.log("======", oct)
    oct = toBaseEight(5)
    console.log("======", oct)
    oct = toBaseEight(8)
    console.log("======", oct)

    // Decimal
    console.log("DECIMAL")
    let dec = toBaseTen(3)
    console.log("======", dec)
    dec = toBaseTen(2)
    console.log("======", dec)
    dec = toBaseTen(5)
    console.log("======", dec)
    dec = toBaseTen(8)
    console.log("======", dec)

    // Hexadecimal
    console.log("HEXIDECIMAL")
    let hex = toBaseSixteen(3)
    console.log("======", hex)
    hex = toBaseSixteen(2)
    console.log("======", hex)
    hex = toBaseSixteen(5)
    console.log("======", hex)
    hex = toBaseSixteen(15)
    console.log("======", hex)
}

