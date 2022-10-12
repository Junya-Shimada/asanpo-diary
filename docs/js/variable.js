
var contents = [];
var device = "";
var hamburger = false;

$(function() {
    if(window.outerWidth > 600) {
        device = "pc";
    } else {
        device = "sp";
    }
});

function addContents(){
    contents = JSON.parse(localStorage.getItem('contents'));
}

function saveContents(){
    localStorage.setItem('contents', JSON.stringify(contents));
}

// about time
var weeks = ["日","月","火","水","木","金","土"];
var now = new Date();
var thisYear = now.getFullYear();
var thisMonth = now.getMonth()+1;
var today = now.getDate();
var week = weeks[now.getDay()];
var nowHour = now.getHours();
var nowMin = now.getMinutes();
var nowSec = now.getSeconds();
var date = '';
var time = '';



// this is called every second
function resetTime() {
    var now = new Date();
    thisMonth = now.getMonth()+1;
    today = now.getDate();
    week = weeks[now.getDay()];
    nowHour = now.getHours();
    nowMin = now.getMinutes();
    nowSec = now.getSeconds();
    if(nowMin < 10) {
        nowMin = "0" + nowMin;
    }
    if(nowSec < 10) {
        nowSec = "0" + nowSec;
    }
    date = thisYear + "年" + thisMonth + "月" + today + "日(" + week + ")";
    time = nowHour + ":" + nowMin;
}