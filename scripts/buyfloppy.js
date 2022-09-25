function buyFloppyDisks() {

    if(localStorage.getItem("cart") != null)
    {
        console.log("you clicked the button")
        var amount = document.getElementById("amountOfFloppies").value;
        localStorage.setItem("cart",amount);
        localStorage.setItem("cartDisabled",0);
        window.location.reload();
    }
    if(document.getElementById("boughtFloppies") != null)
    {
        document.getElementById("boughtFloppies").innerHTML = localStorage.getItem("cart");
        console.log("You bought "+localStorage.getItem("cart")+ " floppies");
    }


}