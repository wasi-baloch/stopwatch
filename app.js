var min=0;
var sec=0;
var msec=0;
var interval;
var startCheck=0;

var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");

var data=[];

function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if (msec >=100){
        sec++
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if (sec >=60){
        min++;
        sec=0
        document.getElementById("lblMin").style.visibility = "visible";
        document.getElementById("min").style.visibility="visible"
        minHeading.innerHTML=min;

    }

}

function start(){
    // if (startCheck===0){
    //     startCheck=1;
    //     interval=setInterval(timer, 10);
    // }

    var btnStart=document.getElementById("btnStart");
    if(btnStart.innerHTML === "Start"){
        btnStart.innerHTML="Stop"
        interval=setInterval(timer, 10);
    }else if(btnStart.innerHTML === "Stop"){
        btnStart.innerHTML="Start"
        stop();
    } 
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    startCheck=0;

    // stop();
    clearInterval(interval);

    var btnStart=document.getElementById("btnStart");
    btnStart.innerHTML="Start"

    document.getElementById("lblMin").style.visibility = "hidden";
    document.getElementById("min").style.visibility="hidden"
    
}

function stop(){
    clearInterval(interval);
}


function save(){

    newRecord=prompt("Enter Name!");
    data.unshift(newRecord + " "+min +" m "+ sec + " s " + msec + " ms");
}

function show(){
    document.getElementById("resultCard").style.visibility="visible";
    // document.getElementById("lblMin").style.visibility = "visible";

    for (let i=0; i<data.length; i++)
    // for (let i=data.length; i>0; i--)
    {
        document.getElementById("resultPara").textContent += (i+1)+") " + data[i] ;

        // document.write((i+1)+") " + data[i] + "<br>");
        // var paragraph = document.getElementById("resultPara");
        // var text = document.createTextNode((i+1)+") " + data[i] );

        // paragraph.appendChild(text);
    }
}

