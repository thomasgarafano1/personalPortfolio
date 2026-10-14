/*
Copyright 2026 Thomas Garafano. Content and code are separately licensed. Content is licensed under CC BY-NC-ND 4.0 license. HTML, CSS, and JS Code are licensed under the GNU AGPL Version 3 or any later version.

Content SPDX-License-Identifier: CC-BY-NC-ND-4.0
HTML, CSS, and JS Code SPDX-License-Identifier: AGPL-3.0-or-later
*/

function resume() {
  var resume = document.getElementById("resume");
  var resumeButton = document.getElementById("resumeButton");
  var aboutMe = document.getElementById("aboutMe");
  var aboutMeButton = document.getElementById("aboutMeButton");
  if (resume.style.display === "none") {
    resume.style.display = "block";
    resumeButton.style.backgroundColor = "#7A2626";
    resumeButton.style.borderColor = "#e23933";

    aboutMe.style.display = "none";
    aboutMeButton.style.backgroundColor = "#090c15";
    aboutMeButton.style.borderColor = "#51191b";
  }
  else {
    resume.style.display = "none";
    resumeButton.style.backgroundColor = "#090c15";
    resumeButton.style.borderColor = "#51191b";

  }
}

function aboutMe() {
  var aboutMe = document.getElementById("aboutMe");
  var aboutMeButton = document.getElementById("aboutMeButton");
  var resume = document.getElementById("resume");
  var resumeButton = document.getElementById("resumeButton");
  if (aboutMe.style.display === "none") {
    aboutMe.style.display = "block";
    aboutMeButton.style.backgroundColor = "#7A2626";
    aboutMeButton.style.borderColor = "#e23933";

    resume.style.display = "none";
    resumeButton.style.backgroundColor = "#090c15";
    resumeButton.style.borderColor = "#51191b";
  }
  else {
    aboutMe.style.display = "none";
    aboutMeButton.style.backgroundColor = "#090c15";
    aboutMeButton.style.borderColor = "#51191b";
  }
}
