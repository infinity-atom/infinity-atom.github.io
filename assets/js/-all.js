const carChanges = [
    {
        now: "turn1", 
        next: "turn2",
        info: `
        <h2>Minebahn</h2>
        Minebahn is a Minecraft Transit Railway server. <a href="https://bahn.infatom.site">Website</a>
        `
    },
    {
        now: "turn2", 
        next: "turn3",
        info: `
        <h2>Fabric Roads</h2>
        Fabric Roads is a fabric mod that adds road signs and signals to the game. <a href="https://modrinth.com/mod/road">Download</a>
        `
    },
    {
        now: "turn3", 
        next: "turn1",
        info: `
        <h2>Chival</h2>
        Chival is a Minecraft server based in Australia with custom coded plugins. <a href="https://www.chival.au/">Website</a>
        `
    },
];

function loopProjects() {

    var car = document.querySelector(".turn");
    var info = document.querySelector(".project-gallery-info");

    for(const e of carChanges) {
        if(car.classList.contains(e.now)) {
            car.classList.remove(e.now);
            car.classList.add(e.next);

            info.innerHTML = e.info;

            break;
        }
    }

}


document.addEventListener("DOMContentLoaded",()=>{
    setInterval(loopProjects, 6000);
});