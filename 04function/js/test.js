(function(){
  let values = [213, 16, 2058, 54, 10, 1965, 57, 9];
  //ソートについてというか関数について理解が浅い。。。
  //aにはどのタイミングで何が入るのかーとか
  //リターンしているのは分かるがなぜそれでソートされるのかーとかが分からない。
  values.sort(function(a, b){
    return a - b;
  });
})();
