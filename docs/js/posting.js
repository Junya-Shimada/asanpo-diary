
// import storage from './firebase/config/firebaseconfig';
// import {ref} from "firebase/storage";



const OnFileUploadToFirebase = (e) => {
    console.log(e.target.files[0].name);
    const storageRef = ref(storage, "../images/");
} 





// Set Device Information
$(function() {       
    if(device == "pc") {
        bg.id = "bg-pc";
    } else {
        bg.id = "bg-sp";
    }
});


// define 'showTime' function
function showTime() {
    resetTime();
    var clock = thisMonth + "月" + today + "日(" + week + ")" + " - " + nowHour + ":" + nowMin + ":" + nowSec;
    if(device == "pc"){
        document.getElementById("clock-pc").innerHTML = clock;
    } else {
        document.getElementById("clock-sp").innerHTML = clock;
    }
};
// run 'showTime' function every second
$(window).onload = setInterval('showTime()',1000);



var core;
$('#image-pc').on('change', function (e) {
    var reader = new FileReader();
    console.log(e.target.files[0]);
    reader.onload = function (e) {
        $("#preview").attr('src', e.target.result);
    }
    // core = e.target.files[0].name;
    core = reader.readAsDataURL(e.target.files[0]);
    
    // reader.readAsDataURL(e.target.files[0]);
});



// resister
function resister() {

    if(contents == null){
        contents = [];
    }
    
    var day = localStorage.getItem('day');
    if(!day){
        day = 1;
    } else {
        day++;
    }
    localStorage.setItem('day', day);
        
    if(device == "pc"){
        var content = {
            date: date,
            time: time,
            day: localStorage.getItem('day'),
            title: document.getElementById('title-pc').value,
            // image: document.getElementById('image-pc').value,
            image: core,
            sentence: document.getElementById('sentence-pc').value,
        };        
    } else {
        var content = {
            date: date,
            time: time,
            day: localStorage.getItem('day'),
            title: document.getElementById('title-sp').value,
            image: document.getElementById('image-sp').value,
            sentence: document.getElementById('sentence-sp').value,
        };
    }

    if(!content.title){
        content.title = "無題";
    }
    
    if(!content.sentence){
        content.sentence = "コメントはありません。";
    }


    contents.push(content);
    localStorage.setItem('contents', JSON.stringify(contents));
}

addContents();


