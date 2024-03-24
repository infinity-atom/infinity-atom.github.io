document.querySelectorAll("b-station").forEach((station) => {
    if(window.location.pathname.includes("station-mtr")) {
        station.addEventListener("click", () => {
            window.location.href = station.getAttribute("data-station-code") + ".html";
        });
    } else {
        station.addEventListener("click", () => {
            window.location.href = "station-mtr/" + station.getAttribute("data-station-code") + ".html";
        });
    }
});

const lineData = {
    "Disneyland Resort": ["#f173ac", "black"],
    "East Rail": ["#53b7e8", "black"],
    "Island": ["#007dc5", "white"],
    "Kwun Tong": ["#00a650", "white"],
    "South Island": ["#bac429", "black"],
    "Tseung Kwan O": ["#a063a5", "white"],
    "Tsuen Wan": ["#ed1d24", "white"],
    "Tuen Ma": ["#923011", "white"],
    "Tung Chung": ["#f7943e", "black"],
    "Airport Express": ["#00888a", "white"],
    "Light Rail": ["#d3a809", "black"]
};

document.querySelectorAll("b-line").forEach((line) => {
    line.style.backgroundColor = lineData[line.getAttribute("data-line-name")][0];
    line.style.color = lineData[line.getAttribute("data-line-name")][1];
    line.textContent = line.getAttribute("data-line-name") + " Line";
});

const trainData = {
    M: "M-Train (Metro-Cammell EMU)",
    CAF: "CAF-Train (Adtranz-CAF EMU)",
    K: "K-Train (Rotem EMU)",
    C: "C-Train (CNR Changchun EMU)",
    S: "S-Train (CNR Changchun EMU)",
    Q: "Q-Train (CRRC Sifang EMU)",
    IKK: "IKK-Train (SP1900/1950 EMU)",
    TMLC: "TML C-Train (CRRC Changchun EMU)",
    R: "R-Train (Hyundai Rotem EMU)",
    LR: "Light Rail"
};

document.querySelectorAll("b-train").forEach((train) => {
    train.textContent = trainData[train.getAttribute("data-type")];
});