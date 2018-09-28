console.log("Subsets!");

// Function takes in one parameter:
// data: an array containing a set.
// No return value, just prints to std output.
const subsets = (data) => {
	// Call helper function passing in given data, empty array that
	// will hold subsets, and 0 to start at 0th index 
	// as arguments.
	helper(data, [], 0);
}

// Helper Function that will take in data array, subset array, and current index
// Only prints to std output.
const helper = (data, subset, i) => {
	
}