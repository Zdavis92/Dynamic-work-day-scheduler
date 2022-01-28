var currentDay = moment().format("dddd, MMMM Do")
var currentHour = (moment().format("H"))
var hoursArr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]
var hoursAmPm = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
// adding the current date to the header
$("#currentDay").append(currentDay);

var createTimeBlock = function() {
    for (i = 0; i < hoursArr.length; i++) {
        var divEl = $("<div>").addClass("row time-block")
        var hourEl = $("<div>").addClass("hour col-1")
        var textEl = $("<div>").attr("id", hoursArr[i]).addClass("textarea col-10")
        var saveEl = $("<div>").addClass("saveBtn col-1").append('<i class="fas fa-save"></i>')
        if (currentHour === parseInt(hoursArr[i])) {
            $(textEl).addClass("present")
        }
        else if (currentHour < parseInt(hoursArr[i])) {
            $(textEl).addClass("future")
        }
        else {
            $(textEl).addClass("past")
        }
        hourEl.append(hoursAmPm[i])
        divEl.append(hourEl, textEl, saveEl)
        $(".container").append(divEl)
    }
}

createTimeBlock();