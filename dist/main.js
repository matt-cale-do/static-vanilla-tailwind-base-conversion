(() => {
  // src/js/index.js
  var BIN_REGEX = new RegExp(/^[0-1]+$/);
  var OCT_REGEX = new RegExp(/^[0-7]+$/);
  var DEC_REGEX = new RegExp(/^[0-9]+$/);
  var HEX_REGEX = new RegExp(/^[0-9a-fA-F]+$/);
  var toBaseTwo = (n) => n.toString(2).toUpperCase();
  var toBaseEight = (n) => n.toString(8).toUpperCase();
  var toBaseTen = (n) => n.toString(10).toUpperCase();
  var toBaseSixteen = (n) => n.toString(16).toUpperCase();
  var baseTwoInput = document.getElementById("base-two");
  var baseEightInput = document.getElementById("base-eight");
  var baseTenInput = document.getElementById("base-ten");
  var baseSixteenInput = document.getElementById("base-sixteen");
  var handleBlank = (n) => {
    baseTwoInput.value = "";
    baseEightInput.value = "";
    baseTenInput.value = "";
    baseSixteenInput.value = "";
  };
  var fromBaseTwo = (e) => {
    const n = e.target.value;
    if (n === "") {
      return handleBlank(n);
    }
    if (!BIN_REGEX.test(n)) {
      alert("You make me sad");
      baseTwoInput.value = n.slice(0, -1);
      return;
    }
    const dec = parseInt(n, 2);
    baseEightInput.value = toBaseEight(dec);
    baseTenInput.value = toBaseTen(dec);
    baseSixteenInput.value = toBaseSixteen(dec);
  };
  var fromBaseEight = (e) => {
    const n = e.target.value;
    if (n === "") {
      return handleBlank(n);
    }
    if (!OCT_REGEX.test(n)) {
      alert("You make me sad");
      baseEightInput.value = n.slice(0, -1);
      return;
    }
    const dec = parseInt(n, 8);
    baseTwoInput.value = toBaseTwo(dec);
    baseTenInput.value = toBaseTen(dec);
    baseSixteenInput.value = toBaseSixteen(dec);
  };
  var fromBaseTen = (e) => {
    const n = e.target.value;
    if (n === "") {
      return handleBlank(n);
    }
    if (!DEC_REGEX.test(n)) {
      alert("You make me sad");
      baseTenInput.value = n.slice(0, -1);
      return;
    }
    const dec = parseInt(n, 10);
    baseTwoInput.value = toBaseTwo(dec);
    baseEightInput.value = toBaseEight(dec);
    baseSixteenInput.value = toBaseSixteen(dec);
  };
  var fromBaseSixteen = (e) => {
    const n = e.target.value;
    if (n === "") {
      return handleBlank(n);
    }
    if (!HEX_REGEX.test(n)) {
      alert("You make me sad");
      baseSixteenInput.value = n.slice(0, -1);
      return;
    }
    const dec = parseInt(n, 16);
    baseTwoInput.value = toBaseTwo(dec);
    baseEightInput.value = toBaseEight(dec);
    baseTenInput.value = toBaseTen(dec);
  };
  baseTwoInput.addEventListener("input", fromBaseTwo);
  baseEightInput.addEventListener("input", fromBaseEight);
  baseTenInput.addEventListener("input", fromBaseTen);
  baseSixteenInput.addEventListener("input", fromBaseSixteen);
})();
