const typed = new Typed(".typing", {
    strings: [
        "💻 Verified Discord Bot Developer", 
        "🌌 I'm a Web Developer.",
        "👀 Html, Css, Js, Python.",
        "🎓 Student, Krishna Public School.",
        "🤖 <a href='https://pixiej.xyz/'>PixieJ</a> My Discord Bot.",
        "📕 <a href='https://api.pixiej.xyz/'>api.pixiej.xyz</a> My 1st Api.",
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});
var menuList = document.getElementById("nav");
    menuList.style.maxHeight = "0px";
    function togglemenu(){
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "130px"
        }
        else {
            menuList.style.maxHeight = "0px"
    }
}
document.getElementById("hyt").onclick = function() {
    window.open("https://discord.com/oauth2/authorize?client_id=966673564046614581&permissions=8&scope=bot%20applications.commands")
}
document.getElementById("ven").onclick = function() {
    window.open("https://venoxbot.tk/")
}
document.getElementById("music").onclick = function() {
    window.open("https://music.pixiej.xyz/")
}
