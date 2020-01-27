
// 7 kyu Kata excercises:
// 1.27.2020
function getCount(str) {
    var vowelsCount = 0;
    
     vowelsCount = (str.match(/a/g) || []).length + (str.match(/e/g) || []).length + (str.match(/i/g) || []).length + (str.match(/o/g) || []).length + (str.match(/u/g) || []).length
    return vowelsCount;
  }

//   passes str through function. Var vowelsCount adds a match search.length of each vowel (with an empty array returning 0 if not found), and prints addition total. 