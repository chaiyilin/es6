//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('buildin iterator', () => {
    it('Collection Iterators', () => {
        let values = [1, 2, 3];
        //This for-of loop first calls the Symbol.iterator method on the values array to retrieve an iterator
        for (let num of values) {
            console.log(num);
        }
    });

    it('The entries() Iterator', () => {
        let colors = ["red", "green", "blue"];
        let tracking = new Set([1234, 5678, 9012]);
        let data = new Map();
        data.set("title", "Understanding ECMAScript 6");
        data.set("format", "ebook");
        for (let entry of colors.entries()) {
            //For arrays, the first item is the numeric index
            console.log(entry);
        }
        for (let entry of tracking.entries()) {
            //for sets, the first item is also the value
            console.log(entry);
        }
        for (let entry of data.entries()) {
            //for maps, the first item is the key
            console.log(entry);
        }
    });

    it('The values() Iterator', () => {
        let colors = ["red", "green", "blue"];
        let tracking = new Set([1234, 5678, 9012]);
        let data = new Map();
        data.set("title", "Understanding ECMAScript 6");
        data.set("format", "ebook");
        /*        for (let value of colors.values()) {
         console.log(value);
         }*/
        for (let value of tracking.values()) {
            console.log(value);
        }
        for (let value of data.values()) {
            console.log(value);
        }
    });

    it('The keys() Iterator', () => {
        let colors = ["red", "green", "blue"];
        let tracking = new Set([1234, 5678, 9012]);
        let data = new Map();
        data.set("title", "Understanding ECMAScript 6");
        data.set("format", "ebook");
        for (let key of colors.keys()) {
            console.log(key);
        }
        for (let key of tracking.keys()) {
            console.log(key);
        }
        for (let key of data.keys()) {
            console.log(key);
        }
    });

    it('Default Iterators for Collection Types', () => {
        let colors = ["red", "green", "blue"];
        let tracking = new Set([1234, 5678, 9012]);
        let data = new Map();
        data.set("title", "Understanding ECMAScript 6");
        data.set("format", "print");
// same as using colors.values()
        for (let value of colors) {
            console.log(value);
        }
// same as using tracking.values()
        for (let num of tracking) {
            console.log(num);
        }
// same as using data.entries()
        for (let entry of data) {
            console.log(entry);
        }
    });

    it('Destructuring and for-of Loops', () => {
        let data = new Map();
        data.set("title", "Understanding ECMAScript 6");
        data.set("format", "ebook");
// same as using data.entries()

        // it is array, not object
        for (let [key, value] of data) {
            console.log(key + "=" + value);
        }

        for (let entry of data) {
            console.log(entry);
        }
    });

    it('String Iterators', () => {

        var message = "A 𠮷 B";
        //But bracket notation works on code units rather than characters
        for (let i = 0; i < message.length; i++) {
            console.log(message[i]);
        }

        // the default iterator for strings works on characters rather than code units
        for (let c of message) {
            console.log(c);
        }
    });

    it('NodeList Iterators', () => {
        var divs = document.getElementsByTagName("div");
        for (let div of divs) {
            console.log(div.id);
        }
    });

    it('The Spread Operator and Nonarray Iterables', () => {
        //The spread operator works on all iterables and uses the default iterator to determine which values to include.
        //All values are read from the iterator and inserted into the array in the order in which values where returned from the iterator
        let map = new Map([["name", "Nicholas"], ["age", 25]]),
            array = [...map];
        console.log(array); // [["name", "Nicholas"], ["age", 25]]

        //You can use the spread operator in an array literal as many times as you want
        let smallNumbers = [1, 2, 3],
            bigNumbers = [100, 101, 102],
            allNumbers = [0, ...smallNumbers, ...bigNumbers];
        console.log(allNumbers.length); // 7
        console.log(allNumbers); // [0, 1, 2, 3, 100, 101, 102]
    });
});

