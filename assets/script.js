var currentDay = moment().format("dddd, MMMM Do")
var currentHour = (moment().format("H"))
var hoursArr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]
var hoursAmPm = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var Tasks = {
    hour9: "",
    hour10: "",
    hour11: "",
    hour12: "",
    hour13: "",
    hour14: "",
    hour15: "",
    hour16: "",
    hour17: "",
};
// adding the current date to the header
$("#currentDay").append(currentDay);

var loadTasks = function() {
    Tasks = JSON.parse(localStorage.getItem("savedTasks"));
    $("#09").empty()
    $("#09").append("<p>" + Tasks.hour9 + "<p>");
}

var createTimeBlock = function() {
    for (i = 0; i < hoursArr.length; i++) {
        var divEl = $("<div>").addClass("row time-block")
        var hourEl = $("<div>").addClass("hour col-1")
        var textEl = $("<div>").addClass("textarea col-10").attr("id", hoursArr[i])
        var textArea = $("<p>")
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

createTimeBlock();
loadTasks();

$(".textarea").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("textBox").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".saveBtn").on("click", function() {
    var text = $("textarea").val();
    var taskP = $("<p>").text(text)
    $("textarea").replaceWith(taskP)
    saveTasks();
});
