(function(){
  let results;
  this.assert = function assert(value, desc) {
    let li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    results.appendChild(li);
    if(!value){
      li.parentNode.parentNode.className = "fail";
    }
    return li;
  };
  this.test = function test(name, fn){
    results = document.getElementById("results");
    results = assert(true, name).appendChild(
      document.createElement("ul")
    );
    fn();
  };
})();

window.onload = function(){
  test("testA", function(){
    assert(true, "第1のアサート");
    assert(true, "第2のアサート");
    assert(true, "第3のアサート");
  });
  test("testB", function(){
    assert(true, "第1のアサート");
    assert(false, "第2のアサート");
    assert(true, "第3のアサート");
  });
  test("testC", function(){
    assert(null, "第1のアサート");
    assert(5, "第2のアサート");
  });
}
