
            function printStars() {
                    console.log('**************');
            }

            printStars();

            function printDoctor(localFirstName, localLastName) {
                    localFirstName = "Dr. " + localFirstName;
                    console.log(localFirstName + ' ' + localLastName);
            }

            let firstName = 'Bob';
            let lastName = 'Williams';
            printDoctor(firstName, lastName);
            console.log('after function call, name is ' + firstName);

            let someGuy = {firstName: "Jack",
                            lastName: "smith"};
            function makeDoctor(person) {
                person.firstName = "Dr. " + person.firstName;
            }
            makeDoctor(someGuy);
            console.log('is he a dr?', someGuy.firstName)

            function returnFullName(firstName, lastName) {
                    return (firstName + ' ' + lastName);
            }

            const fullName = returnFullName('Jackie', 'Chan');

            console.log(fullName);

            let car = {
                    make: 'Toyota',
                    license: '1X3hg7'
            }

            function getVanityPlate (car) {
                console.log(`car is  ${car.make} ${car.license}` )
                var carCopy = {
                        copyMake : 'someRandom make',
                        copyLicense : 'some other thing'
                }
                carCopy.copyMake = car.make;
                carCopy.copyLicense =car.license;


                console.log(`carCopy after copying   ${carCopy.copyMake} ${carCopy.copyLicense}` );
            car.license = '1111';
            console.log(`car is after altering license   ${car.make} ${car.license}` )

   
            }

            getVanityPlate(car);

            console.log(car);
          