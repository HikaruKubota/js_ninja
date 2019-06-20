(function(){
  this.useless = function(callback){
    return callback();
  }
})();

window.onload = function(){
  let text = 'かたじけない！';
  test("uselessテスト", function(){
    assert(useless(function(){
      return text;
    }) === text, "このuseless関数は使える！" + text);
  });
}
