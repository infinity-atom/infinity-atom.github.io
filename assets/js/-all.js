const resizer = () => {
    document.getElementById("content").style.height = window.innerHeight + "px";
}

window.addEventListener("resize", (_e) => resizer());

document.addEventListener("DOMContentLoaded", (_e) => resizer());