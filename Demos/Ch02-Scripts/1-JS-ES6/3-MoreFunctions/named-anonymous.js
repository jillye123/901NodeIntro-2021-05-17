
            function namedFunction(name) {
                console.log('namedFunction was passed:  '  + name );
            }

            namedFunction('Alice')
            
            const anotherReferenceToFunction = namedFunction;
            anotherReferenceToFunction('Clarice');

            const anonFunction = function() {
                console.log('John Doe');
            }

            anonFunction();
        