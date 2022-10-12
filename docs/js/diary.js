
// Set Device Information
$(function() {       
    if(device == "pc") {
        bg.id = "bg-pc";
    } else {
        bg.id = "bg-sp";
    }
});

if(localStorage.getItem('title') == null) {
    localStorage.setItem('title', "Asanpo Diary");
}


function changeTitle() {
    document.getElementById("title").innerHTML = "<input type='text' id='newTitle' value=''>";
    newTitle.addEventListener('keypress', enter);
    function enter(e) {
        if (e.keyCode === 13) {
            if(newTitle.value != "") {
                title = newTitle.value;
                localStorage.setItem('title', title);
                document.getElementById('title').innerHTML = localStorage.getItem('title');
            }
        }  
    }
}


// "diary-top"の表示内容を追加
document.getElementById("diary-top").innerHTML = 
    '<h1 id="title" oncontextmenu="changeTitle(); return false;">'
    + localStorage.getItem('title') + '</h1>'
    + '<div id="diary-tile" class="grid"></div>';


if(localStorage.getItem('contents')){
    
    // var contents = JSON.parse(localStorage.getItem('contents'));
    addContents();
    function addPages(){

        document.getElementById("diary-tile").innerHTML = '';

        Object.keys(contents).forEach(function(i) {
            document.getElementById("diary-tile").innerHTML
            += '<button onclick="showDiaryPage(' + i + '); return true;" oncontextmenu="removeContents(' + i + '); return false;" class="tile-item">'
            + '<p>' + contents[i].title + '</p>'
            + '<p>' + contents[i].date + '</p>'
            + '</button>';
        });
    }
        
}

$(window).onload = addPages();


function showDiaryPage(i) {

    // "diary-page"の表示内容を変更
    document.getElementById("diary-page").innerHTML =
        '<h2 id="title">Day' + contents[i].day + ' - ' + contents[i].title + '</h2>'
        + '<p id="date">' + contents[i].date + contents[i].time + '</p>'
        + '<p id="sentence">' + contents[i].sentence + '</p>'
        + '<div id="return-btn"><button onclick="showDiaryTop()">一覧に戻る</button></div>';

    document.getElementById("diary-top").style.display = "none";
    document.getElementById("diary-page").style.display = "block";
    
}


// Button for diary-top
function showDiaryTop() {
    document.getElementById("diary-top").style.display = "block";
    document.getElementById("diary-page").style.display = "none";
}



function removeContents(i) {
    contents.splice(i, 1);
    saveContents();
    addPages();
}