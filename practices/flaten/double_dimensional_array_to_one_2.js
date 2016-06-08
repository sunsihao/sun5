'use strict';


var arr = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
function double_to_one(collection) {

	var hash = {};
	var arr = [];

	for(var i = 0; i < collection.length; i++){
		//元素是非数组
		if (!( collection[i] instanceof Array)) {
			var item = arr[i];
			var param = typeof(item) + item;
			if (hash[param] !== 1) {
				arr.push(item);
				hash[param] = 1;
			}
		}
		for(var j = 0; j < collection[i].length; j++){
			var item = collection[i][j];
			var param = typeof(item) + item;
			if (hash[param] !== 1){
				arr.push(item);
				hash[param] = 1;
			}
		}
	}
	return arr;
}

module.exports = double_to_one;

