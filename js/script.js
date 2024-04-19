 // preloader
 var loader = document.getElementById("preloader");

 window.addEventListener('load', function(){
 loader.classList.add('out-animation');
 })
 // end of preloader 


 let mobnav = document.querySelector("#mobnav");
let menu_btn = document.querySelector("#menu_btn");
let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let topbar = document.querySelector("#topbar");



menu_btn.addEventListener("click", function () {
    mobnav.classList.toggle("left-[0%]");
    mobnav.classList.toggle("left-[100%]");

    line1.classList.toggle("rotate-down")
    line2.classList.toggle('hide');
    line3.classList.toggle("rotate-up")
     
    
  })

  let mobnavitm = document.querySelectorAll(".mobnav-itm")
  for (let i = 0; i < mobnavitm.length; i++) {
    mobnavitm[i].addEventListener("click", function (){
        mobnav.classList.toggle("left-[0%]");
        mobnav.classList.toggle("left-[100%]");

        line1.classList.toggle("rotate-down")
        line2.classList.toggle('hide');
        line3.classList.toggle("rotate-up")
    })
  }



 const navbar = document.querySelector("#nav")
        const menulist = document.querySelector("#menulist")
        var menuline = document.querySelectorAll(".menu-line")
        const blacklogo = document.querySelector("#blacklogo")
        const whitelogo = document.querySelector("#whitelogo")
        const backtotop = document.getElementById("backtotop")


        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            if(value > 100){
            //   navbar.classList.remove("bg-blue-800");
            navbar.classList.add("bg-white");
            menulist.classList.remove("md:text-white");
            menulist.classList.add("md:text-black");
            blacklogo.classList.add("block")
            blacklogo.classList.remove("hidden")
            whitelogo.classList.add("hidden")
            whitelogo.classList.remove("block")
            backtotop.classList.remove("hidden")

                for (let i = 0; i < menuline.length; i++) {
                    menuline[i].classList.remove("bg-white")
                    menuline[i].classList.add("bg-black")
                }

            }
            else{
            navbar.classList.remove("bg-white");
            menulist.classList.remove("md:text-black");
            menulist.classList.add("md:text-white");
            blacklogo.classList.add("hidden")
            blacklogo.classList.remove("block")
            whitelogo.classList.add("block")
            whitelogo.classList.remove("hidden")
            backtotop.classList.add("hidden")
                for (let i = 0; i < menuline.length; i++) {
                    menuline[i].classList.add("bg-white")
                    menuline[i].classList.remove("bg-black")
                }
            }

        })