/* Demonstrating execution order: */
function printHello(){
    console.log('Hello');
}
// console.log("Hello");

setTimeout(() => {
	printHello();
}, 1000);

/* Output:
   Hello
   Foo
   [... 2 seconds pass ...]
   World!
*/

