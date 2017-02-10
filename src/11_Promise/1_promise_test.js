//jest.unmock('./sum'); // unmock to use the actual implementation of sum

//todo
describe('promise', () => {
        it('Both arguments to then() are optional', () => {
            let promise = readFile("example.txt");
            promise.then(function (contents) {
// fulfillment
                console.log(contents);
            }, function (err) {
// rejection
                console.error(err.message);
            });
            promise.then(function (contents) {
// fulfillment
                console.log(contents);
            });
            promise.then(null, function (err) {
// rejection
                console.error(err.message);
            });

            promise.catch(function (err) {
// rejection
                console.error(err.message);
            });
// is the same as:
            promise.then(null, function (err) {
// rejection
                console.error(err.message);
            });

        });

        it('Creating Unsettled Promises', () => {
// Node.js example
            let fs = require("fs");

            function readFile(filename) {
                return new Promise(function (resolve, reject) {

                    // trigger the asynchronous operation
                    fs.readFile(filename, {encoding: "utf8"}, function (err, contents) {
// check for errors
                        if (err) {
                            reject(err);
                            return;
                        }
// the read succeeded
                        resolve(contents);
                    });
                });
            }

            let promise = readFile("example.txt");
// listen for both fulfillment and rejection
            promise.then(function (contents) {
// fulfillment
                console.log(contents);
            }, function (err) {
// rejection
                console.error(err.message);
            });
        });

        it('Creating Settled Promises - Using Promise.resolve()', () => {
            let promise = Promise.resolve(42);
            promise.then(function (value) {
                console.log(value); // 42
            });
        });

        it('Creating Settled Promises - Using Promise.reject()', () => {
            let promise = Promise.reject(42);
            promise.catch(function (value) {
                console.log(value); // 42
            });
        });

        it('Non-Promise Thenables', () => {
            let thenable = {
                then: function (resolve, reject) {
                    resolve(42);
                }
            };
        });
    }
);

