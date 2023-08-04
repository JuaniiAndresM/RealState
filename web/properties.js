window.addEventListener("load", () => {
    document.getElementById("menuToggler").addEventListener("click", () => {
        document.getElementById("menuToggler").classList.toggle("active");
        document.getElementById("filters__body").classList.toggle("active");
    });

    document.getElementById("input__localizacion").addEventListener("change", () => {
        if (document.getElementById("input__localizacion").value !== 0)
            document.getElementById("filters__barrios").style.display = "block";
        else document.getElementById("filters__barrios").style.display = "none";
    });
});

const selectRooms = (room) => {
    document.getElementById("rooms" + room).classList.toggle("selected");
};
const selectBaths = (bath) => {
    document.getElementById("baths" + bath).classList.toggle("selected");
};

const selectCurrency = (btn) => {
    if (
        (btn == 1 && !document.getElementById("currencyUSD").classList.contains("selected")) ||
        (btn == 2 && !document.getElementById("currencyUYU").classList.contains("selected"))
    ) {
        document.getElementById("currencyUSD").classList.toggle("selected");
        document.getElementById("currencyUYU").classList.toggle("selected");
    }
};
