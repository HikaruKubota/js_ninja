(function(){
  let test = "しんぶんし";

  function isPalindrome(word){
    if(word.length <= 1){
      return true;
    }
    if(word.charAt(0) != word.charAt(word.length-1)){
      return false;
    }
    return isPalindrome(word.substr(1,word.length-2));
  }
  console.log(isPalindrome(test));
})();
