// My role in the group is: Release 2: Person 3

// Here is the psuedocode passed on to me:


// - we are given a list of elements and we want to find the sum, so 
// we should create a variable sum that equals zero before anything, and then we iterate through
// every element in the list/array, adding that element to the sum in each iteration. important to make sure
// the sum = 0 is declared BEFORE iterating, so we dont reset the sum to 0 every time we iterate through the array

// - to find the mean in a list of elements, we simply repeat what we did in the first step 
// (set sum to 0, then iterate through the array, adding each element to the sum in each iteration)
// , then divide our sum by the number/count of elements in that array to find the mean

// - to find the median in a list/array, we first need to find hte count of elements
// in the array. if the count is odd:
// 	ODD: take the count of elements, divide the count by 2, take the floor of that result (if its 7, 7/2 = 3.5 so take 3, if its 9 then 9/2=4.5, take 4)
// 	and the median is the value at that index (since its the middle index in the array)

// 	EVEN: take the count of elements, divide the count by 2, and our median is 
// 	the average of the value at that index and the value at that index-1. 
// 	EX: if we have 6 elements, the median will be the average of the values at index 3 and index 2


//here is my part of the challenge


//*** find the sum
//create var sum that equals zero
var sum = 0;

//iterate through every element in the list/array, adding that element to the sum in each iteration
for (var i = 0; i < array.length; i++) {
	sum += array[i];
}

//*** find the mean in a list of elements
//repeat first step for sum
for (var i = 0; i < array.length; i++) {
	sum += array[i];
}
//divide sum by number/count of elements in that array to find the mean
var mean = sum/array.length


//*** find the median in a list of elements
//first find the count of the elements in the array
array.length;
//find if the count is even or odd
var even = function (array.length) {return (array.length % 2) == 0; };
var odd = function (array.length) {return !even(array.length)};
//if odd, take the count of elements, divide the count by 2, take the floor of that result and the median is the value at that index
if (odd) {
	var median = array.length/2; 
	Math.floor(median);
}	else {
//take the count of elements, divide the count by 2, and our median is the average of the value at that index and the value at that index-1.
	var median = array.length/2;
	median = median + (indexOf(median) - 1);
}	



//
for (var i = 0; i < evenLengthArray.length; i++) {
	sum += evenLengthArray[i];
}