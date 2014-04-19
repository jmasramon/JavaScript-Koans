module("About Control Structures (topics/about_control_structures.js)");

test("if", function() {
	var isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	equal(true, isPositive,  'what is the value of isPositive?');
});

test("for", function() {
	var counter = 10;
	for (var i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equal(16, counter, 'what is the value of counter?');
});

test("for in", function() {
	// this syntax will be explained in about objects
	var person = {
		name: "Amory Blaine",
		age: 102
	};
	var result = "";
	var memberValues = [];
	// for in enumerates the property names of an object
	for (var property_name in person) {
  		result = result + property_name;
  		memberValues.push(person[property_name]);
	};
	equal("nameage", result, 'what is the value of result?');
	equal("Amory Blaine",memberValues[0], 'what are the members values?');
	equal(102,memberValues[1], 'what are the members values?');

// TODO: understand why these keep failing	
// 	var provaArrary = [1, 2, 3, 4, 5];

// 	var indexSum = 0;
// 	var elementSum = '';
//     for (var ind in provaArrary) {
//         indexSum = indexSum + ind;
//         //elementSum += provaArray[ind];
//     };	
//     equal(4,indexSum, 'what is the sum of the index');
//     equal('12345',elementSum, 'what is the sum of the elements');

// 	indexSum = 0;
// 	for (ind in memberValues) {
// 	    indexSum += ind;
// 	}
// 	equal('001',indexSum, 'what is the sum of the index');
	
});

test("ternary operator", function() {
	var fruit = true ? "apple" : "orange";
	equal('apple', fruit, 'what is the value of fruit?');

	fruit = false ? "apple" : "orange";
	equal('orange', fruit, 'now what is the value of fruit?');
});

test("switch", function() {
	var result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equal(2, result, 'what is the value of result?');
});

test("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    equal("Merry", result, 'what is the value of result?');
});

test("null coalescing", function() {
    var result = null || "a value";
    equal("a value", result, 'what is the value of result?');
});
