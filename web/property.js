((g) => {
    var h,
        a,
        k,
        p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
        r = new Set(),
        e = new URLSearchParams(),
        u = () =>
            h ||
            (h = new Promise(async (f, n) => {
                await (a = m.createElement("script"));
                e.set("libraries", [...r] + "");
                for (k in g)
                    e.set(
                        k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                        g[k]
                    );
                e.set("callback", c + ".maps." + q);
                a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                d[q] = f;
                a.onerror = () => (h = n(Error(p + " could not load.")));
                a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                m.head.append(a);
            }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
    key: "AIzaSyDQ23JrObi2IpGVp8LTnRrga-xhtvMveaI",
    // Add other bootstrap parameters as needed, using camel case.
    // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
});

let map;

async function initMap() {
    const coords = { lat: -34.79472923531919, lng: -55.931148849338406 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map"), {
        mapId: "DEMO_MAP_ID",
        center: coords,
        zoom: 17,
        disableDefaultUI: true,
    });

    const priceTag = document.createElement("div");
    priceTag.className = "property__tag";
    priceTag.innerHTML = `  <div class="tag__container">
                                <i class="fa-solid fa-house"></i>
                                <span class="tag__arrow"></span>
                                
                            </div>
                            <span class="tag__circle"></span>
                            `;

    const markerView = new AdvancedMarkerElement({
        map,
        position: coords,
        content: priceTag,
    });

    markerView.addListener("click", () => {
        alert("first");
    });
}

initMap();
