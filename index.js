
window.onload = function () {
    //*********************** 轮播图*****************************//    
    var index = 0;
    var time = 0;
    var left_btn = document.getElementById("left_btn");
    var right_btn = document.getElementById("right_btn");
    var points_ul = document.getElementById("points_ul");

    function autoBanner() {
        var banners_lis = document.getElementsByClassName("banners_li");
        var points_lis = document.getElementsByClassName("points_li");
        setInterval(function () {
            time++;
            if (time == 20) {
                time = 0;
                clearClass();
                banners_lis[index].classList.add("active");
                points_lis[index].classList.add("active");
                index++;
                if (index == 5) {
                    index = 0;
                }
            }
        }, 100)
    }

    function clearClass() {
        var banners_lis = document.getElementsByClassName("banners_li");
        var points_lis = document.getElementsByClassName("points_li");
        for (var i = 0; i < banners_lis.length; i++) {
            banners_lis[i].classList.remove("active");
            points_lis[i].classList.remove("active");
        }
    }

    autoBanner();

    left_btn.onclick = function () {
        var banners_lis = document.getElementsByClassName("banners_li");
        var points_lis = document.getElementsByClassName("points_li");
        time = 0;
        clearClass();
        index--;
        if (index == -1) {
            index = 4;
        }
        banners_lis[index].classList.add("active");
        points_lis[index].classList.add("active");
    }

    right_btn.onclick = function () {
        clearClass();
        time = 0;
        var banners_lis = document.getElementsByClassName("banners_li");
        var points_lis = document.getElementsByClassName("points_li");
        index++;
        if (index == 5) {
            index = 0;
        }
        banners_lis[index].classList.add("active");
        points_lis[index].classList.add("active");
    }

    points_ul.onclick = function (ev) {
        var banners_lis = document.getElementsByClassName("banners_li");
        time = 0;
        var e = ev || window.event;
        var target = e.target || window.event.target;
        clearClass();
        target.classList.add("active");
        index = target.dataset.index;
        banners_lis[index].classList.add("active");
        // points_lis[index].classList.add("active");
    }

    //*********************** 小米秒杀倒计时*****************************//
    function miTime() {
        var hours = document.getElementById("hours");
        var minutes = document.getElementById("minutes");
        var seconds = document.getElementById("seconds");
        var timetext = document.getElementById("timetext");
        var newd = null;
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth();
        var day = d.getDate();
        var h = d.getHours();
        var minu = d.getMinutes();
        var s = d.getSeconds();
        // console.log(h);console.log(minu);console.log(s);
        if (h >= 8 && h < 10 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 10, 0, 0, 0);
            timetext.innerHTML = "10:00场";
        } else if (h >= 10 && h < 12 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 12, 0, 0, 0);
            timetext.innerHTML = "12:00场";
        } else if (h >= 12 && h < 14 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 14, 0, 0, 0);
            timetext.innerHTML = "14:00场";
        } else if (h >= 14 && h < 16 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 16, 0, 0, 0);
            timetext.innerHTML = "16:00场";
        } else if (h >= 16 && h < 18 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 18, 0, 0, 0);
            timetext.innerHTML = "18:00场";
        } else if (h >= 18 && h < 20 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 20, 0, 0, 0);
            timetext.innerHTML = "20:00场";
        } else if (h >= 20 && h < 22 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 22, 0, 0, 0);
            timetext.innerHTML = "22:00场";
        } else if (h >= 22 && h < 24 && minu <= 59 && s <= 59) {
            newd = new Date(y, m, day, 24, 0, 0, 0);
            timetext.innerHTML = "00:00场";
        } else {
            newd = new Date(y, m, day, 8, 0, 0, 0);
            timetext.innerHTML = "08:00场";
        }

        var news = (newd.getTime() - d.getTime()) / 1000;
        var newh = parseInt(news / 3600);
        var newminu = parseInt((news % 3600) / 60);
        var news = parseInt((news % 3600) % 60);
        newh = addZero(newh);
        newminu = addZero(newminu);
        news = addZero(news);
        hours.innerHTML = newh;
        minutes.innerHTML = newminu;
        seconds.innerHTML = news;
    }

    function addZero(num) {
        if (num >= 0 && num <= 9) {
            return "0" + num;
        } else {
            return num;
        }
    }

    setInterval(miTime, 1000)
    // miTime()
    var slide_ul = document.getElementById("slide_ul");
    var timer=null;
    //***********************商品滑动栏*****************************//
    function slideFloat(node,target) {
        // var slide_ul = document.getElementById("slide_ul");
        // console.log(getStyle(slide_ul,"margin-left"))
            timer = setInterval(function () {
            var currentLeft = parseInt(getStyle(slide_ul, "margin-left"));
            // target=-991;
            speed = (target - currentLeft) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (currentLeft === target) {
                clearInterval(timer);
            } else {
                slide_ul.style.marginLeft = currentLeft + speed + "px";
            }

            // var target=-991*n;
            // var speed=target-window.getComputedStyle("slide_ul","marginLeft")
            // console.log(window.getComputedStyle("slide_ul")["marginLeft"])
            // slide_ul.style.marginLeft=-991*n+"px";
        }
            , 30)
    }

    function getStyle(node, attr) {
        return node.currentStyle ? node.currentStyle[attr] : window.getComputedStyle(node)[attr];
    }


    // for(let i=1;i<7;i++){
    //         setTimeout(function () {
    //         slideFloat(-991*i)
    //     }
    //         , 3000*i);    
    // }

 //***********************按钮控制商品滑动栏*****************************//
 var produce_btn_left=document.getElementById("produce_btn_left");
 var produce_btn_right=document.getElementById("produce_btn_right");
 
 var n=0;
 produce_btn_left.onclick=function(){
    n++;
    slideFloat(slide_ul,-991*n);
 }

 produce_btn_right.onclick=function(){
    n--;
    slideFloat(slide_ul,-991*n);
 }
 
 //***********************内容区商品切换*****************************//
var choose_text=document.getElementsByClassName("choose_text");
var choose_btn=document.getElementsByClassName("choose_btn");
var common_bottom_right_father=document.getElementsByClassName("common_bottom_right_father");
for(let i=0;i<choose_btn.length;i++){
    choose_btn[i].onmouseover=function(){
       if(i<=1){
           for(var j=0;j<=1;j++){
               choose_btn[j].classList.remove("active");
               common_bottom_right_father[j].classList.remove("active");
           }
            choose_btn[i].classList.add("active");
            common_bottom_right_father[i].classList.add("active");
            choose_text[i].innerHTML=choose_btn[i].innerHTML;
        }else if(i>=2&& i<=4){
            for(var j=2;j<=4;j++){
                choose_btn[j].classList.remove("active");
                common_bottom_right_father[j].classList.remove("active");
            }
             choose_btn[i].classList.add("active");
             common_bottom_right_father[i].classList.add("active");
             choose_text[i].innerHTML=choose_btn[i].innerHTML;
        }else if(i>=5&&i<=6){
            for(var j=5;j<=6;j++){
                choose_btn[j].classList.remove("active");
                common_bottom_right_father[j].classList.remove("active");
            }
             choose_btn[i].classList.add("active");
             common_bottom_right_father[i].classList.add("active");
             choose_text[i].innerHTML=choose_btn[i].innerHTML;
        }else if(i>=7&&i<=8){
            for(var j=7;j<=8;j++){
                choose_btn[j].classList.remove("active");
                common_bottom_right_father[j].classList.remove("active");
            }
             choose_btn[i].classList.add("active");
             common_bottom_right_father[i].classList.add("active");
             choose_text[i].innerHTML=choose_btn[i].innerHTML;
        }else{
            for(var j=9;j<=10;j++){
                choose_btn[j].classList.remove("active");
                common_bottom_right_father[j].classList.remove("active");
            }
             choose_btn[i].classList.add("active");
             common_bottom_right_father[i].classList.add("active");
             choose_text[i].innerHTML=choose_btn[i].innerHTML;
        }
       }
    }
}
     

