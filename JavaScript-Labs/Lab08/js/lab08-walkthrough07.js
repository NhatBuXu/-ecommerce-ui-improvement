var daysOfWeek = new Array("Mon","Tues","Wed","Thur", "Fri");
document.write(daysOfWeek+"<br>");
var daysOfWeek = new Array("Mon","Tues","Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
document.write(daysOfWeek+"<br/>");
daysOfWeek.unshift("Sun");
document.write(daysOfWeek + "<br/>");

document.write("<table border=1>");

// Tạo hàng tiêu đề các ngày trong tuần
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");

// Tạo các hàng chứa ngày từ 1 đến 30
var date = 1;

for (var week = 0; week < 5; week++) {
    document.write("<tr>");

    for (var dayCount = 0; dayCount < 7; dayCount++) {
        if (date <= 30) {
            document.write("<td>" + date + "</td>");
            date++;
        }
    }

    document.write("</tr>");
}

document.write("</table>");