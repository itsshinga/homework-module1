    // Arrays to hold file names, alt text, and final HTML strings
    var fileNames = [
        "partner-bustour",
        "partner-cabinrental",
        "partner-campingadv",
        "partner-collegetours",
        "partner-rentalbike",
        "partner-tourgroup"
      ];
  
      var altTexts = [
        "Partner Bus Tours",
        "Partner Cabin Rental",
        "Partner Camping Adventure",
        "Partner College Tours",
        "Partner Bike Rentals",
        "Partner Tour Group"
      ];
  
      var photos = [];      // Will store each <img> HTML
      var imageList = [];   // Will store each <li>...<img>...</li>
  
      // Open and close <li> tags
      var openList = "<li class='partner'>";
      var closeList = "</li>";
  
      // Loop through each partner
      for (var i = 0; i < fileNames.length; i++) {
        // Build the <img> string
        // (Adjust folder path to 'images/' if that's where your images actually are)
        photos.push("<img src='partners/" + fileNames[i] + ".png' alt='" + altTexts[i] + "'>");
  
        // Combine <li> + <img> and push into imageList
        var image = openList + photos[i] + closeList;
        imageList.push(image);
      }
  
      document.getElementById("partners").innerHTML = imageList.join("");  