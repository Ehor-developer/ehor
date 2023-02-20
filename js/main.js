//code:http://infoseek_rip.g.ribbon.to/iswebmag.hp.infoseek.co.jp/sample147.html

var birth_year = 2008;
var birth_month = 3;
var birth_day = 15;
var age = 0;
now = new Date();
year = now.getYear();
month = now.getMonth() + 1;
day = now.getDate();
if (year < 1900) { year = year + 1900; }
if (month < birth_month) { age = year - birth_year - 1 }
if (month > birth_month) { age = year - birth_year }
if (month == birth_month) {
    if (day < birth_day) { age = year - birth_year - 1 }
    else { age = year - birth_year }
}
document.getElementById("age").innerHTML = age + "歳";

function countdown() {

    var today = new Date();
    var birthday = new Date(today.getFullYear(), 2, 15); // 2月19日を指定


    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    var diffTime = Math.abs(birthday - today);
    var diffSeconds = Math.floor(diffTime / 1000);
    var diffMinutes = Math.floor(diffSeconds / 60);
    var diffHours = Math.floor(diffMinutes / 60);
    var diffDays = Math.floor(diffHours / 24);
    if (diffDays === 364) {
        document.getElementById("message").innerHTML = "今日は誕生日です！";
        document.getElementById("timer").style.display = "none";
    }
    else {
        document.getElementById("timer").style.display = "flex";
    }
    diffHours %= 24;
    diffMinutes %= 60;
    diffSeconds %= 60;

    document.getElementById("days").innerHTML = diffDays;
    document.getElementById("hours").innerHTML = diffHours;
    document.getElementById("minutes").innerHTML = diffMinutes;
    document.getElementById("seconds").innerHTML = diffSeconds;

}
countdown()
setInterval(countdown, 1000);