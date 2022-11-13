function randomNumber1() {
  document.getElementById('one').readOnly = true;
    document.getElementById('one').value = Random();

}

  function Random() {
    return Math.floor(Math.random()*900 + 100);
  }


function randomNumber2() {
    document.getElementById('two').value = Random2();
    document.getElementById('two').readOnly = true;
}

  function Random2() {
    return Math.floor(Math.random()*8999999 + 1000000);
  }

