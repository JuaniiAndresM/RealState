window.addEventListener("load", () => {
    document.getElementById("menuBtn").addEventListener("click", () => {
        document.getElementById("menuBtn").classList.toggle("active");
        document.getElementById("header__links").classList.toggle("active");

        if (document.getElementById("menuBtn").classList.contains("active")) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    });
    
});

const searchType = (btn) => {
    if (
        (btn == 1 && !document.getElementById("ventaType").classList.contains("selected")) ||
        (btn == 2 && !document.getElementById("alquilerType").classList.contains("selected"))
    ) {
        document.getElementById("ventaType").classList.toggle("selected");
        document.getElementById("alquilerType").classList.toggle("selected");
    }
};

const currencyType = (btn) => {
    if (
        (btn == 1 && !document.getElementById("currencyUSD").classList.contains("active")) ||
        (btn == 2 && !document.getElementById("currencyUYU").classList.contains("active"))
    ) {
        document.getElementById("currencyUSD").classList.toggle("active");
        document.getElementById("currencyUYU").classList.toggle("active");
    }
};
