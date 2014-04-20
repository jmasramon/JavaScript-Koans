module("About Data Types (topics/about_data_types.js)");

test("using typeof to identify data types", function() {
    var aString = '';
    var aNumber = 1;
    var anotherNumber = 1.0;
    var anHex = 0xff;
    var aBool = true;
    var aFunction = function(){};
    var anObject = {a:'a'};
    var anotherObject ={b:'b'};

    var anArray = ["1","2"];
    var anUndefVar;
    var aNull = null;
    
    equal(typeof(aString), 'string', 'what is the type of a string?');    
    equal(typeof(aNumber), 'number', 'what is the type of an int?');    
    equal(typeof(anotherNumber), 'number', 'what is the type of a float?');    
    equal(typeof(anHex), 'number', 'what is the type of a float?');    
    equal(typeof(aBool), 'boolean', 'what is the type of a boolean?');    
    equal(typeof(aFunction), 'function', 'what is the type of a function?');    
    equal(typeof(anObject), 'object', 'what is the type of an object?');    
    equal(typeof(anObject), typeof(anotherObject), 'how to differentiate between objects?');    

    equal(typeof(anArray), 'object', 'what is the type of an array?');    
    equal(typeof(anUndefVar), 'undefined', 'what is the type of an unassigned var?');    
    equal(typeof(aNull), 'object', 'what is the type of a null?');    
});

test("using instanceof to identify  objects", function() {
    var aString = '';
    var aNumber = 1;
    var anotherNumber = 1.0;
    var anHex = 0xff;
    var aBool = true;
    var aFunction = function(){};
    var anObject = {a:'a'};
    
    function anotherObject(){b:'b'};

    var anArray = ["1","2"];
    var anUndefVar;
    var aNull = null;
    
    equal(aString instanceof String, false, 'what is the type of a string?');    
    equal(aNumber instanceof Number, false, 'what is the type of an int?');    
    equal(anotherNumber instanceof Number, false, 'what is the type of a float?');    
    equal(anHex instanceof Number, false, 'what is the type of a float?');    
    equal(aBool instanceof Boolean, false, 'what is the type of a boolean?');    
    equal(aFunction instanceof Function, true, 'what is the type of a function?');    
    equal(anObject instanceof Object, true, 'what is the type of an object?');    
    equal(anObject instanceof Object, true, 'what is the type of an object?');    
    equal((new anotherObject()) instanceof Object, true, 'how to differentiate between objects?');    
    equal((new anotherObject()) instanceof anotherObject, true, 'how to differentiate between objects?');    

    equal(anArray instanceof Object, true, 'what is the type of an array?');    
    equal(anArray instanceof Array, true, 'what is the type of an array?');    
    equal(anUndefVar instanceof Object, false, 'what is the type of an unassigned var?');    
    equal(aNull instanceof Object, false, 'what is the type of a null?');    
});

test("using constructor name to identify objects", function() {
    
    function anotherObject(){this.b='b'};
    var anObject = new anotherObject();
    var aSecondObject = {a:'a'};
    var aThirdObject = {};

    // Constructor property points to the objects constructor function. Own or inherited
    // Own
    equal(typeof(anObject.constructor), 'function', 'what is the name of an object constructor?');    
    equal(anObject.constructor.name, 'anotherObject', 'what is the name of an object constructor?');    
    equal(anObject.constructor, anotherObject, 'what is the object constructor?');    
    equal(anObject.constructor, anotherObject.prototype.constructor, 'what is the name of an object constructor?');    
    equal(anotherObject, anotherObject.prototype.constructor, 'what is the name of an object constructor?');    
    
    // Inherited
    equal(typeof(aSecondObject.constructor), 'function', 'what is the name of an object constructor?');    
    equal(aSecondObject.constructor.name, 'Object', 'what is the name of an object constructor?');    
    equal(aSecondObject.constructor, Object, 'what is the object constructor?');    
    // equal(aSecondObject.constructor, aSecondObject.prototype.constructor, 'what is the name of an object constructor?');    
    equal(aSecondObject.constructor, aThirdObject.constructor, 'all objects of same type share constructor?');    
    


});

test("using prototype name to identify objects", function() {
    var aFunction = function(){ return 'hola';}
    function anotherObject(){b:'b'};
    var anObject = new anotherObject();
    var aSecondObject = {a:'a'};

    // Every function has a prototype property that points to the ...
    equal(typeof(aFunction.prototype), "object", 'what is the prototype of a function?');    
    // equal(aFunction.prototype, new Object(), 'what is the prototype of a function?');    

    equal(typeof(anotherObject.prototype), "object", 'what is the prototype of an object constructor?');    

    // Prototype is a property of the function not the object
    equal(aSecondObject.prototype, null, 'what is the prototype of an object constructor?');    
    equal('prototype' in aSecondObject, false, 'objects have no prototypes')
});

