
if(localStorage.getItem("cartDisabled") != 1)
{
    if(localStorage.getItem("cart")!= null || localStorage.getItem("cart") != 0)
    {
            window.onload = init();

            console.log("you are in second time and this is cart"+localStorage.getItem("cart"));
            console.log("this is boughtfloppies"+document.getElementById("boughtFloppies"));
            document.getElementById("boughtFloppies").innerText = localStorage.getItem("cart");


    }
    else
    {

        if(document.getElementById("boughtFloppies") != null)
        {
            console.log("removing");
            document.getElementById("boughtFloppies").remove();
        }
    }
}
function init()
{
    console.log("you are insdsds");
    document.write('<container id="floppycart" class="align-content-center">\n' +
        '<p class="text-white">You have</p>\n' +
        '<p id="boughtFloppies" class="text-white"></p>\n' +
        '<p class="text-white"> Floppy-Disks in your cart !</p>\n' +
        '<button onclick="removeCart()" id="removeButton" >Remove</button>' +
        '<script src="scripts/removeCart.js"></script>' +
        '</container>')
    ;
}


