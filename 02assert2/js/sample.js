(function(){
  let queue = [] , paused = false, results;

  this.test = function (name, fn){
    queue.push(function(){
      results = document.getElementById("results");
      results = assert(true, name).appendChild(
          document.createElement("ul"));
      fn();
    });
    runTest();
  };

  this.pause = function(){
    paused = true;
  };

  this.resume = function(){
    paused = false;
    setTimeout(runTest, 1);
  };

  this.runTest = function(){
    if(!paused && queue.length){
      (queue.shift())();
      if(!paused){
        resume();
      }
    }
  }


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

})();

window.onload = function(){
  test("非同期テスト１", function(){
    pause();
    setTimeout(function(){
      assert(false, "第1のアサート");
      resume();
    },1000);
  });
  test("非同期テスト２", function(){
    pause();
    setTimeout(function(){
      assert(true, "第2のアサート");
      resume();
    },1000);
  });
}
