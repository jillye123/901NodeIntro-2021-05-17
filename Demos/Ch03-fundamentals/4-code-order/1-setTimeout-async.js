/* Demonstrating execution order: */

console.log("Hello");

setInterval(() => {
	console.log("World!");
}, 2000);

console.log("Foo");

/* Output:
   Hello
   Foo
   [... 2 seconds pass ...]
   World!
*/

