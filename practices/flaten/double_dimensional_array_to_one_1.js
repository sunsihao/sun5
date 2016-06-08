'use strict';

function double_to_one(collection) {
	var arr = [];
	for(var i = 0; i < collection.length; i++){
		//元素是非数组
		if (!( collection[i] instanceof Array)) {
			arr.push(collection[i]);
			continue;
		}
		//元素是数组
		for(var j = 0; j < collection[i].length; j++){
			arr.push(collection[i][j]);
		}
	}
	return arr;
}
module.exports = double_to_one;
