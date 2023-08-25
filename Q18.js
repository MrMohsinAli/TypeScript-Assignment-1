var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of locations
var locations = ["Miami", "New York", "Berlin", "Singapore", "Sydney", "Dubai"];
// Print the array in its original order
console.log("Original order:", locations, "\n");
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], locations, true).sort(), "\n");
// Show that the array is still in its original order by printing it
console.log("Original order:", locations, "\n");
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", __spreadArray([], locations, true).sort().reverse(), "\n");
// Show that the array is still in its original order by printing it again
console.log("Original order:", locations, "\n");
// Reverse the order of the list
locations.reverse();
// Print the array to show that its order has changed
console.log("Reversed order:", locations, "\n");
// Reverse the order of the list again
locations.reverse();
// Print the list to show it’s back to its original order
console.log("Original order:", locations, "\n");
// Sort the array so it’s stored in alphabetical order
locations.sort();
// Print the array to show that its order has been changed
console.log("Alphabetical order:", locations, "\n");
// Sort the array to change it so it’s stored in reverse alphabetical order
locations.sort(function (a, b) { return b.localeCompare(a); });
// Print the list to show that its order has changed
console.log("Reverse alphabetical order:", locations);
