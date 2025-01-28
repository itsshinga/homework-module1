function currentTime() {
    // Get current date/time
    var d = new Date();

    // Get local hours, minutes, seconds
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    // Convert seconds/minutes to two digits
    if (sec < 10) { sec = "0" + sec; }
    if (min < 10) { min = "0" + min; }

    // Determine AM or PM (convert to 12-hour if needed)
    var ampm;
    if (hr === 12) {
      ampm = "PM";
    } else if (hr > 12) {
      hr -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    // Build the time string (without time zone yet)
    var time = hr + ":" + min + ":" + sec + " " + ampm;

    // Calculate difference between local and UTC
    var timeDiff = d.getHours() - d.getUTCHours();
    //absolute value of a number//
    var adjTimeDiff = Math.abs(timeDiff);

    // Determine time zone for (US) logic
    var timeZone;
    if (adjTimeDiff === 8) {
      timeZone = "PT";
    } else if (adjTimeDiff === 7) {
      timeZone = "MT";
    } else if (adjTimeDiff === 6) {
      timeZone = "CT";
    } else if (adjTimeDiff === 5) {
      timeZone = "ET";
    } else {
      timeZone = ""; // or "UNKNOWN" 
    }

    // If we found a zone, append it to 'time'
    if (timeZone) {
      time += " " + timeZone;
    }

    // Display result in the page
    document.getElementById("clock").innerText = time;
  }

  // Update every second
  setInterval(currentTime, 1000);