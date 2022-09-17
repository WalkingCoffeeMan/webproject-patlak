function removeCart() {
    localStorage.setItem("cart",0);
    localStorage.setItem("cartDisabled",1);
    document.getElementById("floppycart").remove();
}
