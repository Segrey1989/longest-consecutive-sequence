module.exports = function longestConsecutiveLength(array) {
  var max = 0,
      count = 0;
  if(array.length === 0) return 0;
  array.sort(function(a,b){
    return a-b;
  });

    for(var i = 0; i < array.length; i++){
      if(array[i] +1 === array[i+1])
      count++;

      else if(array[i +1] - array[i] > 1) {
        if(count > max)
        max = count;
        count = 0;
      }
    }
  return max +1;
}
