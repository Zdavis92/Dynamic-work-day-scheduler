var currentDay = moment().format("dddd, MMMM Do")
var currentHour = (moment().format("H"))
var hoursArr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]
var hoursAmPm = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var Tasks = {};
// adding the current date to the header
$("#currentDay").append(currentDay);

// function to load tasks from local storage
var loadTasks = function() {
    Tasks = JSON.parse(localStorage.getItem("savedTasks"));
    // if there are no saved tasks then a new defalt list is loaded
    if (!Tasks) {
        Tasks = {
            hour9: "Click to add a new task",
            hour10: "Click to add a new task",
            hour11: "Click to add a new task",
            hour12: "Click to add a new task",
            hour13: "Click to add a new task",
            hour14: "Click to add a new task",
            hour15: "Click to add a new task",
            hour16: "Click to add a new task",
            hour17: "Click to add a new task"
    }};

    // puts to saved tasks into the correct timeslot
    $("#09").empty()
    if (Tasks.hour9 === "") {
        $("#09").append("<p>Click to add a new task<p>")
    }
    else {
        $("#09").append("<p>" + Tasks.hour9 + "<p>");
    }
    $("#10").empty()
    if (Tasks.hour10 === "") {
        $("#10").append("<p>Click to add a new task<p>")
    }
    else {
        $("#10").append("<p>" + Tasks.hour10 + "<p>");
    }
    $("#11").empty()
    if (Tasks.hour11 === "") {
        $("#11").append("<p>Click to add a new task<p>")
    }
    else {
        $("#11").append("<p>" + Tasks.hour11 + "<p>");
    }
    $("#12").empty()
    if (Tasks.hour12 === "") {
        $("#12").append("<p>Click to add a new task<p>")
    }
    else {
        $("#12").append("<p>" + Tasks.hour12 + "<p>");
    }
    $("#13").empty()
    if (Tasks.hour13 === "") {
        $("#13").append("<p>Click to add a new task<p>")
    }
    else {
        $("#13").append("<p>" + Tasks.hour13 + "<p>");
    }
    $("#14").empty()
    if (Tasks.hour14 === "") {
        $("#14").append("<p>Click to add a new task<p>")
    }
    else {
        $("#14").append("<p>" + Tasks.hour14 + "<p>");
    }
    $("#15").empty()
    if (Tasks.hour15 === "") {
        $("#15").append("<p>Click to add a new task<p>")
    }
    else {
        $("#15").append("<p>" + Tasks.hour15 + "<p>");
    }
    $("#16").empty()
    if (Tasks.hour16 === "") {
        $("#16").append("<p>Click to add a new task<p>")
    }
    else {
        $("#16").append("<p>" + Tasks.hour16 + "<p>");
    }
    $("#17").empty()
    if (Tasks.hour17 === "") {
        $("#17").append("<p>Click to add a new task<p>")
    }
    else {
        $("#17").append("<p>" + Tasks.hour17 + "<p>");
    }
}

// function to generate the time blocks on screen
var createTimeBlock = function() {
    for (i = 0; i < hoursArr.length; i++) {
        var divEl = $("<div>").addClass("row time-block")
        var hourEl = $("<div>").addClass("hour col-1")
        var textEl = $("<div>").addClass("textarea col-10").attr("id", hoursArr[i])
        var textArea = $("<p>").text("Click to add a new task")
        var saveEl = $("<div>").addClass("saveBtn col-1").append('<i class="fas fa-save"></i>')
        if (currentHour == parseInt(hoursArr[i])) {
            $(textEl).addClass("present")
        }
        else if (currentHour < parseInt(hoursArr[i])) {
            $(textEl).addClass("future")
        }
        else {
            $(textEl).addClass("past")
        }
        textEl.append(textArea)
        hourEl.append(hoursAmPm[i])
        divEl.append(hourEl, textEl, saveEl)
        $(".container").append(divEl)
    }
}

// get text and puts into the Tasks object to save them
var saveTasks = function() {
    Tasks.hour9 = $("#09").text()
    Tasks.hour10 = $("#10").text()
    Tasks.hour11 = $("#11").text()
    Tasks.hour12 = $("#12").text()
    Tasks.hour13 = $("#13").text()
    Tasks.hour14 = $("#14").text()
    Tasks.hour15 = $("#15").text()
    Tasks.hour16 = $("#16").text()
    Tasks.hour17 = $("#17").text()
    localStorage.setItem("savedTasks", JSON.stringify(Tasks))
}
// starting the app
createTimeBlock();
loadTasks();

// creates a text area to add new tasks
$(".textarea").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("textBox").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});
// puts new task on screen and calls the save function
$(".saveBtn").on("click", function() {
    var text = $("textarea").val();
    var taskP = $("<p>").text(text)
    $("textarea").replaceWith(taskP)
    saveTasks();
});
