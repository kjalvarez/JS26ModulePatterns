var Repeater = {
	repeatString: function (string, count) {
		var newArray=[]; //Defined outside of for loop!  
		for (i=0; i<count; i++) {
			newArray.push(string);
		}
		return newArray.join(''); //returned outside of for loop!
	}

}

console.log(Repeater.repeatString('cat', 10));