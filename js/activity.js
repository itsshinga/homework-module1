$(document).ready(function () {
    // Make only selectable cells clickable (excluding 'Not Available')
    $("td").not(":contains('Not Available')").css("cursor", "pointer");

    // Click event for table cells
    $("td").not(":contains('Not Available')").on("click", function () {
        $(this).toggleClass("tdhighlight"); // Toggle highlight class

        let columnIndex = $(this).index(); // Get column index
        let siteName = $("thead th").eq(columnIndex).text().trim(); // Extract site name
        let activity = $(this).text().trim(); // Get activity text
        let activityKey = `${activity} at ${siteName}`; 

        if ($(this).hasClass("tdhighlight")) {
            // If selected, add activity to modal if not already present
            if ($("#modalActivities p[data-activity='" + activityKey + "']").length === 0) {
                $("#modalActivities").append(`<p data-activity="${activityKey}">${activity} at <span class="site">${siteName}</span></p>`);
            }
        } else {
            // If deselected, remove activity from modal
            $("#modalActivities p[data-activity='" + activityKey + "']").remove();
        }

        // If no selected activities remain, hide modal when triggered
        if ($("#modalActivities p").length === 0) {
            $("#activityModal").modal("hide");
        } else {
            $("#activityModal").modal("show"); // Show modal when there are selected activities
        }
    });
});

$(document).ready(function () {
    $("#closeModal").on("click", function () {
        $("#activityModal").modal("hide"); // Manually close the modal
    });
});
