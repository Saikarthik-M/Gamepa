// getting players name

var ply1=prompt("player one enter your name: you will be blue");
var ply2=prompt("player two enter your name: you will be red");

// displaying game commands

var h3=document.querySelector("#h3");
var h2=document.querySelector("#h2");
var h1=document.querySelector("#h1");
h3.innerHTML="Player one:it is your turn,please pick a column to drop a blue chip";
var t=0; // players turn
var u=0; // recent coloured ball's column number

// after clicking

$("#n61").click(function(){colourit("1");check(u,1);})
$("#n62").click(function(){colourit("2");check(u,2);})
$("#n63").click(function(){colourit("3");check(u,3);})
$("#n64").click(function(){colourit("4");check(u,4);})
$("#n65").click(function(){colourit("5");check(u,5);})
$("#n66").click(function(){colourit("6");check(u,6);})
$("#n67").click(function(){colourit("7");check(u,7);})

//colouring of balls

function colourit(a){
    var i=1
    t=t+1;
    while(i<7){
        var c="#n"+i+a;
        if($(c).css("background-color")=="rgb(128, 128, 128)"){
            u=i;
            
            if(t%2!=0){
                $(c).css("background-color","lightblue");
                $(c).attr("value","1");
                h3.innerHTML="Player two:it is your turn,please pick a column to drop a red chip";
                break;
            }
            else{
                $(c).css("background-color","#fa4d4d");
                h3.innerHTML="Player one:it is your turn,please pick a column to drop a blue chip";
                $(c).attr("value","2");
                break;
            }
        }
        i=i+1;
    }
}

// checking for game end

function check(b,e){
    var r=e;
    var w=b;
    var o="#n"+b+e;
    var f="#n"+b+(e+1);
    var p="#n"+b+(e-1);
    var o2="#n"+b+e;
    var f2="#n"+(b+1)+e;
    var p2="#n"+(b-1)+e;
    if(($(o).attr("value")==$(f).attr("value"))&&($(o).attr("value")==$(p).attr("value"))){
        var f="#n"+b+(e+2);
        var p="#n"+b+(e-2);
        if(($(o).attr("value")==$(f).attr("value"))||($(o).attr("value")==$(p).attr("value"))){
            if(t%2!=0){
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply1+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
            }
            else{
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply2+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
            }
        }
        return 0;
    }
    else if(($(o).attr("value")==$(f).attr("value"))){
        var f="#n"+b+(e+2);
        if(($(o).attr("value")==$(f).attr("value"))){
            var f="#n"+b+(e+3);
            if(($(o).attr("value")==$(f).attr("value"))){
                if(t%2!=0){
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply1+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
                else{
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply2+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
            }
        }
        return 0;
    }
    else if(($(o).attr("value")==$(p).attr("value"))){
        var p="#n"+b+(e-2);
        if(($(o).attr("value")==$(p).attr("value"))){
            var p="#n"+b+(e-3);
            if(($(o).attr("value")==$(p).attr("value"))){
                if(t%2!=0){
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply1+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
                else{
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply2+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
            }
        }
        return 0;
    }
    else if(($(o2).attr("value")==$(f2).attr("value"))&&($(o2).attr("value")==$(p2).attr("value")))
    {
        var f2="#n"+(b+2)+e;
        var p2="#n"+(b-2)+e;
        if(($(o2).attr("value")==$(f2).attr("value"))||($(o2).attr("value")==$(p2).attr("value"))){
            if(t%2!=0){
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply1+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
            }
            else{
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply2+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
            }
        }
        return 0;
    }
    else if(($(o2).attr("value")==$(f2).attr("value")))
    {
        var f2="#n"+(b+2)+e;
        if(($(o2).attr("value")==$(f2).attr("value"))){
            var f2="#n"+(b+3)+e;
            if(($(o2).attr("value")==$(f2).attr("value"))){
                if(t%2!=0){
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply1+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
                else{
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply2+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
            }
        }
        return 0;
    }
    else if(($(o2).attr("value")==$(p2).attr("value"))){
        var p2="#n"+(b-2)+e;
        if(($(o2).attr("value")==$(p2).attr("value"))){
            var p2="#n"+(b-3)+e;
            if(($(o2).attr("value")==$(p2).attr("value"))){
                if(t%2!=0){
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply1+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
                else{
                h2.innerHTML="";
                h3.innerHTML="";
                h1.innerHTML=ply2+" WON THE GAME !!! CONGRATS ";
                $("#h1").css("font-size","60px");
                }
            }
        }
        return 0;
}} 
