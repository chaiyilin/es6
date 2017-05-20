//https://techshard.com/2017/04/16/freezing-javascript-objects-with-object-freeze/
var employee = {

    name: "John Doe",

    role: "Developer"

};

Object.freeze(employee);

(function() {

    "use strict";

// TypeError: Can't modify property role

    employee.role = "Tester";

})();

if (Object.isFrozen(employee)) {

    alert("employee is frozen!");

}