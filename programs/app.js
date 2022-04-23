 import { firstname as fname} from "./utils/fname.js";
 import {age} from "./utils/age.js";
 import {p} from "./utils/person.js";

 console.log(fname,age);

 const person = new p("JOhn", "doe", 22);
 person.info();
 console.log(person);