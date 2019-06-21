function isNimble(){return true};
let canFly = function(){ return true};
window.isDeadly = function(){return true};

window.onload = function(){
  assert(typeof window.isNimble === "function",
  "isNimble()は定義されている");
  assert(isNimble.name === "isNimble",
  "isNimble()には名前がある");

  assert(typeof window.canFly === "function",
  "canFly()は定義されている");
  assert(canFly.name === "canFly",
  "canFly()には名前がある");

  assert(typeof window.isDeadly === "function",
  "isDeadly()は定義されている");
  assert(isDeadly.name === "isDeadly",
  "isDeadly()には名前がある");

  function outer(){
    assert(typeof innery === "function",
    "inner()は定義されている");
    function inner(){}
    assert(typeof innery === "function",
    "inner()は定義されている");
    assert(window.innery === "function",
    "inner()は定義されている");
  }

  outer();
  assert(typeof window.innery === "function",
  "inner()は定義されている");

  window.wieldsSword = function swingsSword(){ return true;};
  assert(typeof window.wieldsSword === "swingsSword",
  "wieldsSword()は実はswingsSword");

}
