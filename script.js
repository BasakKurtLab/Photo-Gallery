
const foto = document.querySelectorAll("#fotos>img");
const bigFoto = document.querySelector("#bigBox img");
const bigBox = document.querySelector("#bigBox");
const cross = document.querySelector("#bigBox i");

foto.forEach(
    function (element) {
        element.onclick = function () {
            
            bigBox.style.transform = "translateX(0)";
            const source = element.getAttribute("src");
            bigFoto.setAttribute("src", source);

            setTimeout(function()
            {
                bigFoto.style.transform = "scale(1)";
            }, 500);


        }

    });

cross.onclick = function () {

    bigFoto.style.transform = "scale(0)";
    
    setTimeout(function () {
        
        bigBox.style.transform = "translateY(-100vh)";

    }, 500);
    

}


