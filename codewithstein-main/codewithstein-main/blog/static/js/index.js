function showIcons(x) {
    document.getElementsByClassName('sharebtns')[0].style.display = 'initial';
}
function showIcons1(x) {
    document.getElementsByClassName('sharebtns')[1].style.display = 'initial';
}
function showIcons2(x) {
    document.getElementsByClassName('sharebtns')[2].style.display = 'initial';
}

function openside1() {
    document.getElementById("main").style.marginRight = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
    document.getElementById("closeNav").style.display = 'initial';

}
    function closeside1() {
    document.getElementById("main").style.marginRight = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "initial";
    document.getElementById("closeNav").style.display = 'none';

}

function showText(){
    document.getElementById("content2").style.display = "initial";
}

function openNav() {
document.getElementById("myySidebar").style.width = "300px";
document.getElementById("main2").style.marginRight = "300px";
document.getElementById("main3").style.marginRight = "300px";
}

function closeNav() {
document.getElementById("myySidebar").style.width = "0";
document.getElementById("main2").style.marginRight= "0";
document.getElementById("main3").style.marginRight= "0";
}

