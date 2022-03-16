window.addEventListener("load", () => {
    let burgerButton = document.getElementById("burger-button");
    burgerButton.addEventListener("click", (e) => {
        document.getElementById("smart-navbar").style.height = "100%";
        


    });

    let closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", (e) => {
        document.getElementById("smart-navbar").style.height = "0";
        


    });

});

/*function openNav() {
    document.getElementById("smart-navbar").style.height = "450px";
    document.getElementById("main").style.top = "175px";
    console.log("FUNCIONAAAAAAAAA")
}
function closeNav() {
    document.getElementById("smart-navbar").style.width = "0"
    document.getElementById("main").style.marginLeft = "0";
}*/