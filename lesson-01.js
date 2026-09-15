"use strict";

// Lesson 1: The Client and Server Model.
// Your standalone code and written observations for this lesson live here,
// as code and comments. The site work happens in the stretch-records folder.
//

// Step 4: how many requests did the single page load make? List three by name.
//This file made 70 requests on single reload. Three of the requests were for the following files: index.html, style.css, and script.js.

// Step 6: which files changed when you added the sixth artist, which did not,
// and why is that separation the point?
/* For the sixth artist, only artists.json changed.
script.js did not change because the artist data is separated from the code that displays it.
This makes it possible to change the data without changing the JavaScript logic. */

// Step 7: paste the console error the broken artists.json produced.
/* Uncaught (in promise) SyntaxError: Unexpected token ',', ..."jpg"
  },,
]
" is not valid JSON */

// Step 8: build one artist object, JSON.stringify() it, log the text,
// JSON.parse() it back, and log one property of the result.
const artist = {
  name: "Test Artist",
  genre: "Rock",
  total: "04:20",
};

const artistText = JSON.stringify(artist);

console.log(artistText);

const parsedArtist = JSON.parse(artistText);

console.log(parsedArtist.name);
/*PS C:\Users\home\Desktop\System design\system-design-stretch> node lesson-01.js
{"name":"Test Artist","genre":"Rock","total":"04:20"}
Test Artist*/

// STRETCH, step 9: describe your page as a system. Name the client, name the
// server, and state what the request asked for and what the response carried.
/* System description:
The client is the user's web browser. The server is the web server running through Live Server.
The browser requests artists.json. The server responds with the artist data in JSON format. */
