$(document).ready(function () {
    // Add a class to indicate selectable cells
    $("td").not(":contains('Not Available')").css("cursor", "pointer");

    // Click event for table cells
    $("td").not(":contains('Not Available')").on("click", function () {
        $(this).toggleClass("selected");
    });
});