//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Asynchronous Task Running', () => {
    it('traditional way', () => {
        /*        let fs = require("fs");
         fs.readFile("config.json", function (err, contents) {
         if (err) {
         throw err;
         }
         doSomethingWith(contents);
         console.log("Done");
         });*/
    });

    //implement asynchronous calls without managing callbacks
    it('A Simple Task Runner', () => {
            function run(taskDef) {
// create the iterator, make available elsewhere
                let task = taskDef();
                // start the task
                let result = task.next();
// recursive function to keep calling next()
                function step() {
// if there's more to do
                    if (!result.done) {
                        result = task.next();
                        step();
                    }
                }

// start the process
                step();
            }

            run(function*() {
                console.log(1);
                yield;
                console.log(2);
                yield;
                console.log(3);
            });
        }
    );

    it('Task Running with Data', () => {
            function run(taskDef) {
// create the iterator, make available elsewhere
                let task = taskDef();
                // start the task
                let result = task.next();
// recursive function to keep calling next()
                function step() {
// if there's more to do
                    if (!result.done) {
                        result = task.next(result.value);
                        step();
                    }
                }

// start the process
                step();
            }

            run(function*() {
                let value = yield 1;
                console.log(value); // 1
                value = yield value + 3;
                console.log(value); // 4
            });
        }
    );

    it('An Asynchronous Task Runner', () => {
    });

});

