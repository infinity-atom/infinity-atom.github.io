function clickMeme(memeName = "desel") {
    if(memeName == "desel") {
        clearAllMemes();
        var memePanel = document.querySelector(".panel-memeinfo");

        memePanel.classList.add("notsel");
        return;
    }

    clearAllMemes();
    var memePanel = document.querySelector(".panel-memeinfo");

    memePanel.classList.add(`sel-${memeName}`);
}

function clearAllMemes() {
    var memePanel = document.querySelector(".panel-memeinfo");
    memePanel.classList.remove("notsel");


    memePanel.classList.remove("sel-mid-smurfcat");
    memePanel.classList.remove("sel-mid-nothingwecando");
}