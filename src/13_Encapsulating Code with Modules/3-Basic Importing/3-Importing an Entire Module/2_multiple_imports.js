//no matter how many times you use a module in import statements, the module will execute only once.
// After the code to import the module executes, the instantiated module is kept in memory and
// reused whenever another import statement references it
import {sum} from "./example.js";
import {multiply} from "./example.js";
import {magicNumber} from "./example.js";