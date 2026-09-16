"use strict";

// Lesson 3: Promises, async, and await.
// Standalone programs and observations go in this file as code and comments.
// The loader work happens in stretch-records/script.js.
//
// Step 3, the ordering puzzle: write a program mixing plain logs, a zero
// delay timer, and a settled Promise reaction. Predict the full output order
// in comments before running, then explain in one sentence why the Promise
// beat the timer.
console.log("first");

setTimeout(() => console.log("timer"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("last");
// Prediction:
//
// 1. first
// 2. last
// 3. promise
// 4. timer
// Step 6: paste the final rethrown message that reached the top.
class MissingArtistDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingArtistDataError";
  }
}

function checkArtist(artist) {
  if (!artist.name) {
    throw new MissingArtistDataError(
      "Artist data is missing a name. Please add the artist name.",
    );
  }

  return artist;
}

try {
  const artist = {
    genre: "Pop",
    total: "03:30",
  };

  checkArtist(artist);
} catch (error) {
  console.error(error.message);
}

function loadArtistPage() {
  try {
    throw new Error("Artist data could not be read.");
  } catch (error) {
    throw new Error(
      `Artist page: loading artist data failed. Details: ${error.message}`,
    );
  }
}

try {
  loadArtistPage();
} catch (error) {
  console.error(error.message);
}

function delayedTask(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} failed`));
      } else {
        resolve(name);
      }
    }, delay);
  });
}
// Final rethrown message:
// Artist page: loading artist data failed. Details: Artist data could not be read.

async function runTasks() {
  try {
    const results = await Promise.all([
      delayedTask("Task 1", 1000),
      delayedTask("Task 2", 1500, true),
      delayedTask("Task 3", 500),
    ]);

    console.log(results);
  } catch (error) {
    console.error("Promise.all failed:", error.message);
  }
}

runTasks();
