$(document).ready(function () {
    // only selectable cells
    $("td").not(":contains('Not Available')").css("cursor", "pointer");

    // Click event for table cells
    $("td").not(":contains('Not Available')").on("click", function () {
        $(this).toggleClass("tdhighlight"); // Toggle highlight class

        let columnIndex = $(this).index(); // Get column index
        let siteName = $("thead th").eq(columnIndex).text().trim(); // Extract site name
        let activity = $(this).text().trim(); // Get activity text
        let activityKey = `${activity} at ${siteName}`; 

        if ($(this).hasClass("tdhighlight")) {
            // If selected, append the activity with site name to the display box
            if ($("#result p[data-activity='" + activityKey + "']").length === 0) {
                $("#result").append(`<p data-activity="${activityKey}">${activity} at <span class="site">${siteName}</span></p>`);
            }
            $("#displaySelected").css("visibility", "visible"); // Show box
        } else {
            // If deselected, remove
            $("#result p[data-activity='" + activityKey + "']").remove();

            // Hide display box if empty
            if ($("#result p").length === 0) {
                $("#displaySelected").css("visibility", "hidden");
            }
        }
    });
});

$(document).ready(function () {
    $("td").not(":contains('Not Available')").on("click", function () {
        $(this).toggleClass("selected");
    });
});
