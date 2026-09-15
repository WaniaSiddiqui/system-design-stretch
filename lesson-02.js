"use strict";

// Lesson 2: Asynchronous JavaScript and the Event Loop.
// Standalone programs and observations go in this file as code and comments.

// ===== Provided program (task step 2): predict before you run =====
// Write your predicted output order as a comment BELOW, before running this
// file with node. Then run it, mark each line of your prediction right or
// wrong, and correct the wrong ones with one sentence each explaining why.

console.log("doors open");
setTimeout(() => console.log("encore"), 1000);
setTimeout(() => console.log("soundcheck"), 0);
console.log("main act");
setTimeout(() => console.log("intermission"), 500);
console.log("lights down");

// Your prediction:
// 1. doors open
// 2. main act
// 3. lights down
// 4. soundcheck
// 5. intermission
// 6. encore

// ===== Provided program (task step 4): trace the call stack =====
// Trace this as a written call stack diagram in comments, listing every push
// and pop in order. Then cause an error inside the innermost function and
// confirm the stack trace in the console matches your diagram, innermost
// first. Keep it commented out while you work on step 2.

/*console.log(prepare(...))
        ↓
prepare()
        ↓
format()
        ↓
artist.name.toUpperCase()*/

//Push console.log(prepare(...)) onto the stack
//Push prepare() onto the stack
//Push format() onto the stack
//Push artist.name.toUpperCase() onto the stack

//Pop artist.name.toUpperCase() off the stack
//Pop format() off the stack
//Pop prepare() off the stack
//Pop console.log(prepare(...)) off the stack

function prepare(artist) {
  return "Now playing " + format(artist);
}
function format(artist) {
  return artist.name.toupperCase();
}
console.log(prepare({ name: "Asake" }));

/* TypeError: artist.name.toupperCase is not a function
    at format (C:\Users\home\Desktop\System design\system-design-stretch\lesson-02.js:55:23)
    at prepare (C:\Users\home\Desktop\System design\system-design-stretch\lesson-02.js:52:28)
    at Object.<anonymous> (C:\Users\home\Desktop\System design\system-design-stretch\lesson-02.js:57:14)
    at Module._compile (node:internal/modules/cjs/loader:1871:14)
    at Object..js (node:internal/modules/cjs/loader:2002:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47*/
