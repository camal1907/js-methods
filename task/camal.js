function reverseString(str) {
    
    var strArray = str.split('');
  
   
    var reversedArray = strArray.reverse();
  
    
    var reversedString = reversedArray.join('');
  
   
    return reversedString;
  }
  
  
  var originalString = "Salam Dünya!";
  var reversed = reverseString(originalString);
  console.log(reversed);


  function findLetterInString(str, targetLetter) {
    return str.includes(targetLetter) ? "tapildi!" : "tapilmadi!";
  }
  
  
  var myString = "Salam Dünya!";
  var target = "a";
  var result = findLetterInString(myString, target);
  console.log(result);
  
  