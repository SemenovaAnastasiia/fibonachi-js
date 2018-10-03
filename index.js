const userNumber = parseInt (prompt('Input number'));

// function fibonachi(n){
//   let arr = [1, 1];
//   var i;
//   for (i = 2; i < n + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1])
//   }
//  return arr[n]
// }


function fibonachi(n) {
  var x1 = 1, x2 = 1;
  for (var i = 3; i <= n; i++) {
    var x = x1 + x2;
    x1 = x2;
    x2 = x;
  }
  return x2;
}

alert( fibonachi(userNumber) );


function fibonacci(n) {
    var arr = [1, 1];
	for (var i = 2; i < n; i++) {
		arr[i] = arr[i-1]+ arr[i-2];
	}

	return arr[n-1];
}

alert( fibonacci(userNumber) );



