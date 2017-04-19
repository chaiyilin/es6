https://techshard.com/2017/04/16/sealing-javascript-objects-using-object-seal/

    var employee = {

        name: "John Doe",

        role: "Developer"

    };

Object.seal(employee);

(function() {

    "use strict";

    employee.role = "Tester"

// TypeError: Can't define property department, object is not extensible

    employee.department = "IT";

})();

if (Object.isSealed(employee)) {

    alert("Employee is sealed!");

}