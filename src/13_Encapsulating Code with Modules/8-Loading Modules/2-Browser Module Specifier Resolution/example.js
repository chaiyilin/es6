//• Begin with / to resolve from the root directory
//• Begin with ./ to resolve from the current directory
//• Begin with ../ to resolve from the parent directory
//• URL format

// at https://www.example.com/modules/module.js
// imports from https://www.example.com/modules/example1.js
import {first} from "./example1.js";
// imports from https://www.example.com/example2.js
import {second} from "../example2.js";
// imports from https://www.example.com/example3.js
import {third} from "/example3.js";
// imports from https://www2.example.com/example4.js
import {fourth} from "https://www2.example.com/example4.js";

// invalid - doesn't begin with /, ./, or ../
import {first} from "example.js";
// invalid - doesn't begin with /, ./, or ../
import {second} from "example/index.js";