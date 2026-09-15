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
// 1. doors open - RIGHT
// 2. main act - RIGHT
// 3. lights down - RIGHT
// 4. soundcheck - RIGHT
// 5. intermission - RIGHT
// 6. encore - RIGHT

// The blocking loop occupied the JavaScript call stack/main thread.
// While it was running, the browser could not process other JavaScript
// tasks or update the page normally.

// ===== Provided program (task step 4): trace the call stack =====
// Trace this as a written call stack diagram in comments, listing every push
// and pop in order. Then cause an error inside the innermost function and
// confirm the stack trace in the console matches your diagram, innermost
// first. Keep it commented out while you work on step 2.

function prepare(artist) {
  return "Now playing " + format(artist);
}
function format(artist) {
  return artist.name.toUpperCase();
}
console.log(prepare({ name: "Asake" }));

// Call stack:
//
// 1. push console.log()
// 2. push prepare()
// 3. push format()
// 4. push toUpperCase()
// 5. pop toUpperCase()
// 6. pop format()
// 7. pop prepare()
// 8. pop console.log()

let count = 10;

const countdown = setInterval(() => {
  console.log(count);

  if (count === 0) {
    clearInterval(countdown);
    console.log("Countdown stopped");
  }

  count--;
}, 1000);

// JavaScript can handle many waiting tasks because the call stack only
// handles one piece of JavaScript at a time. Browser facilities such as
// timers handle waiting work, callbacks wait in task queues, and Promise
// reactions use the microtask queue. The event loop moves ready work to
// the call stack when it is free.
