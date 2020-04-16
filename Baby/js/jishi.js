
var show=document.getElementById("one").getElementsByTagName("span");
setInterval(function(){
    var timeing=new Date();
    var str="2019/4/25 00:20:00";

    var time=new Date(str);
    var num=timeing.getTime()-time.getTime();

    var day=parseInt(num/(24*60*60*1000));
    num=num%(24*60*60*1000);
    var hour=parseInt(num/(60*60*1000));
    num=num%(60*60*1000);
    var minute=parseInt(num/(60*1000));
    num=num%(60*1000);
    var seconde=parseInt(num/1000);

    show[0].innerHTML=day;
    show[1].innerHTML=hour;
    show[2].innerHTML=minute;
    show[3].innerHTML=seconde;
},100)