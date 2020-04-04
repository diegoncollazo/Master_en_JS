"use strict";

var array = new Array("Renault", "Mercedes", "Ferrari");
// for(var i=0; i<array.length; i++){
//     console.log(array[i]);
// }
// console.log(array);

array.forEach((elemento, index) => {
	console.log(elemento, index);
});
