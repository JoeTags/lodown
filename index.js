'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: This is a function that takes any datatype and returns that 
 * datatype unchanged.
 * 
 * @param {datatype} value: The input and return value of the function.
 * @return {datatype} value: unchanged value returned from the function input.
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to take a value(datatype) and return(string) the datatype
 * of that value.
 * 
 * @param {datatype} value: array, null, date, number, string, boolean, object, undefined, function
 * @return {datatype} value: result of truthy/falsy evaluation of datatype.(string) 
 */
 function typeOf (value) {
       if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date) {
        return 'date';
    } else if (typeof value === 'number') {
        return "number";
    } else if (typeof value === 'string') {
        return "string";
    } else if (typeof value === 'boolean') {
        return "boolean";
    } else if (typeof value === 'object') {
        return "object";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "function") {
        return "function";
    }
}
module.exports.typeOf = typeOf;

/**
 * first: returns the first element of an array but can return any number
 *  of first n elements in that array.
 * 
 * @param: {array} array: the array that the function iterates over.
 * @param: {number} element: the number of elements to be returned(optional).
 * @return: {value} value of array index: the first element in the array or 
 * first n elements of the array if a second argument is passed.
 */
 
 function first(array, number) {   
  
    
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number >= 0) {
       return array.slice(0, number);
    }  else  {
       return array[0];
        
    }
}
module.exports.first = first;

/**
 * last: returns the last element of an array but can return any number
 * of last n elements in that array.
 * 
 * @param: {array} array: the array that the function iterates over.
 * @param: {number} element: the number of elements to be returned(optional).
 * @return: {value} value of array index: the last element in the array or 
 * last n elements of the array if a second argument is passed.
 */
 
 function last(array, number) {
       if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    }    else if (number >= 0) {
        return array.slice(array.length - number);
    } else {
        return array[array.length - 1];
    }
    
}
module.exports.last = last;

/**
 * indexOf: Designed to return the first occurence of an element in 
 * an array's index. If element is not there, returns - 1.
 * 
 * @param: {array} array: the array that is iterated over.
 * @param: {datatype} value: the value that is searched for within the array index.
 * @return: {datatype} value: the value that is searched for if found. Else, the index - 1 
 * is returned which signifies it does not exist in the array index.
 * 
 */
 
 function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } 
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: This function returns a true or false evaluation based
 * whether or not a value exists within its array.
 * 
 * @param: {array} array: the array iterated over for which a value will 
 * be compared for equality with each index.
 * @param: {value} datatype: the value that is compared for equality with
 * each index in the passed array.
 * @return: {boolean} true/false: returns true or false based on an equality comparison
 * between a value and an array's indices.
 */
 
function contains(array, value) {
   
    //for (let i = 0; i < array.length; i++) {
       return  array.includes(value) ? true : false;
    //}
    
}
module.exports.contains = contains;

/**
 * each: This is a function that iterates through either the indices of an array 
 * or the key/value pairs of an object.
 * 
 * @param: {collection}: Either an array or an object that the function iterates over.
 * @param: {action}: the function that is passed into the each function and acts on
 * each element in the collection that is passed.
 * @return: 
 * 
 */
 
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
            for (let key in collection) {
               action(collection[key], key, collection);
            }
        
    }
}
module.exports.each = each;

/**
 * unique: This function removes all the duplicate elements of an array.
 * 
 * @param: {array}: The array that is passed into the function to have
 * duplicate elements removed.
 * @return: {array}: a new array is returned with one of each element 
 * from the original array. 
 * 
 */
 function unique(array) {
    let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (newArray.indexOf(array[i]) === -1) {
                newArray.push(array[i]);
            }
        }
        return newArray;
}
module.exports.unique = unique;

/**
 * filter: uses the each function to iterate over an object or an array and the
 * action function to test the boolean value of the elements in the array. if they
 * evaluate to true the elements are returned to a new array.
 * 
 * @param{array} array: the array that is iterated over to be filtered.
 * @param{function} action/test: the function that evaluates each element as they iterated over.
 *
 * @return{array} newArray: returns a new array with the elements that evaluate to true.
 * 
 */
 
 function filter(array, action) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (action(array[i], i, array)) {
            newArray.push(array[i]);
         }   
    }
     return newArray;
}
module.exports.filter = filter;

/**
 * reject: This is a function that tests the elements in an array
 * and if those elements evaluate to false. The elements are returned
 * to a new array.
 * 
 * @param: {array}: the array that provides the elements to be tested
 * @param: {function}: the filter function tests elements for truthiness
 * In this case, we use the bang operator so it will evaluate elements for falsiness
 * @return: {array}: A new array with values that evaluated to false.
 */ 
 function reject(array, filter) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!filter(array[i],i, array)) {
            newArray.push(array[i]);
         }   
    }
     return newArray;
}
module.exports.reject = reject;

/**
 * partition: This is a function that iterates over every element in an array.
 * It passes three arguments: element, key and array. It returns an array of 2 sub arrays.
 * 
 * @param:{array}: The array that is iterated over. A function will evaluate its elements
 * @param:{function}: The function that evaluates truthyness/ falsyness of element
 * 
 * @return:{array}: An array of sub arrays split based on whether elements were truthy or falsy.
 */
 
 function partition(array, action) {            //loop through array. if the function passed to array returns true, push
    let arrayOfArrays = [];                         // those values into an array. if false, push them into a different array
    let firstArray = [];
    let secondArray = [];
    for (let i = 0; i < array.length; i++) {
        if (action(array[i], i, array)) {
            firstArray.push(array[i]);
        } else if (!action(array[i], i, array)) {
            secondArray.push(array[i]);
        }
        
    }
        arrayOfArrays.push(firstArray);
        arrayOfArrays.push(secondArray);
        
    return arrayOfArrays;
}
module.exports.partition = partition;

/**
 * map: a function that iterates over a collection(array/object) 
 * performs an action and returns a new array with the transformed values.
 * 
 * @param:{array/object}: the collection that is iterated over. 
 * 
 * @param:{function}: the action that is performed on or used to transform
 * the values in an array. arguments passed are element, index, collection(array)
 * or value, key, collection(object)
 * 
 * @return:{array}: an array returned with the new values.
 * 
 * 
 */
 
 function map(collection, action) {
    let mappedArray = [];
    if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
           mappedArray.push(action(collection[i], i, collection));
        } 
    } else {
        for (let key in collection) {
          mappedArray.push(action(collection[key], key, collection));
        }    
        }
        return mappedArray;
}

module.exports.map = map;

/**
 * pluck: This function takes an array of objects and a property and returns 
 *  a new array with the values of all the object's properties.
 * 
 * 
 * @param:{array}: An array of objects that is iterated over.
 * 
 * 
 * @return:{array}: An array that contains all the values of the elements(object[property])
 * in the passed array.
 * 
 * 
 */
 
 function pluck(array, property) {
    return array.map(element => element[property]);
}

module.exports.pluck = pluck;

/**
 * every: This function iterates over a collection(object/array) and it passes a function to evaluate the truthy/ falsy
 * values of the collections elements. If all evaluate true, it returns true. If even one returns false,
 * it returns false. If no function is passed, the elements will still be evaluated for truthy / falsy under the same
 * conditions.
 * 
 * @param:{array/object}: the collection of elements that is iterated over. Array: element, index, array
 * Object: value, key, object
 * 
 * 
 * 
 * @return:{boolean}: Function returns a value of true or false.
 * 
 * 
 */
 
 function every(collection, action) {
   if (typeof action !== 'function') {
       action = identity;
   }
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if(!action(collection[i], i, collection)) {
                return false;
            }
        }
     return true;
        
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if(!action(collection[key], key, collection)) {
                
                return false;
            } 
        }
       return true;
    } 
} 

module.exports.every = every;

/**
 * some: This is a function that iterates over an object or an array and returns true if at least one element within the 
 * collection evaluates to true as the result of a function being called on it.
 * 
 * @param:{array or object}: the collection that is iterated over
 * @param:{function}: the function that is called on the collection 
 * 
 * @return:{boolean}: returns true if at least one element from the function called on it evaluates to true. If none of the 
 * elements evaluate to true, it returns false.
 * 
 * Edge Case: if no function is passed into the some function, it will still return true if one element evaluates to true.
 * 
 */
 
 function some(collection, action) {
    if (typeof action !== 'function') {
       action = identity;
   }
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if(action(collection[i], i, collection)) {
                return true;
            }
        }
     return false;
        
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if(action(collection[key], key, collection)) {
                
                return true;
            } 
            
        }
       return false;
    } 
}

module.exports.some = some;

/**
 * reduce: the reduce function is designed to boil down a list of values into a single value. It takes a collection, function, and
 * a seed or accumulator. the return value of the seed is then accumulated into the next element. If no seed is passed into the function
 * instead the first element acts as the seed and the first iteration occurs on the subsequent element.
 * 
 * @param:{array/object}: the collection that is iterated over.
 * @param:{function}: the return value of the called function is applied to the next iteration.
 * @param:{accumulator}: the seed or starting point which accumulates the values of elements in the collection.
 * 
 * @return:{value}: a single value: number,array, object
 * @edgecases: if no seed is given the first iteration of the element acts as the seed.
 */
 
 function reduce(array, action, seed) {
    var result;
   if (seed === undefined) {
       result = array[0];
       each(array, function(element,index, collection) {
           if (index > 0) {
            result = action(result, element, index);}
       });
   } else {
       result = seed;
       each(array, function(element,index,collection) {
           result = action(result,element,index);
       })
   }
    return result;
}

module.exports.reduce = reduce;

/**
 * extend: this function copies the properties of one object into another. it can take multiple objects as arguments and
 * will pass them into the first object in the order they are passed into the function.
 * 
 * @param:{object}: any number of objects passed into the function.
 * 
 * @return:{object}: an object updated with all of the properties of the passed objects.
 * 
 * 
 * 
 * 
 * 
 */
 
 function extend(...object) {
    return Object.assign(...object);
}


module.exports.reduce = reduce;