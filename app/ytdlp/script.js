$( () => {
    $(".win-main").draggable({
        handle: ".win-main-header",
        containment: "body"
    });

    $(".win-ffmpegwarn").draggable({
        handle: ".win-ffmpegwarn-header",
        containment: "body"
    });

    $(".win-remuxopt").draggable({
        handle: ".win-remuxopt-header",
        containment: "body"
    });

    $(".win-extractopt").draggable({
        handle: ".win-extractopt-header",
        containment: "body"
    });

    $(".win-output").draggable({
        handle: ".win-output-header",
        containment: "body"
    });
});

$( () => {
    $("[class*=win-]").on("click", () => {
        $(".background-info").html("v1.0")
   });
});

$( () => {
    $("#win-main-button-submit").on("click", () => {
        const complete = generateCommand(
            $("#win-main-input-linktype").val(),
            $("#win-main-input-videolink").val(),
            $("#win-main-input-verbose")[0].checked,
            $("#win-main-input-printhttp")[0].checked,
            $("#win-remuxopt-input-enable")[0].checked,
            $("#win-extractopt-input-enable")[0].checked,
            $("#win-remuxopt-input-format").val(),
            $("#win-extractopt-input-format").val()
        );
        
        $("#win-output-input-gen").val(complete[0]);

        if(complete[1]) {
            $(".win-ffmpegwarn").css("display", "block");
        } else {
            $(".win-output").css("display", "block");
        }
    });
    $("#win-ffmpegwarn-button-cancel").on("click", () => {
        $(".win-ffmpegwarn").css("display", "none");
    });
    $("#win-output-button-close").on("click", () => {
        $(".win-output").css("display", "none");
    });
    $("#win-ffmpegwarn-button-ok").on("click", () => {
        $(".win-ffmpegwarn").css("display", "none");
        $(".win-output").css("display", "block");
    });
    $("#win-main-button-remux").on("click", () => {
        $(".win-remuxopt").css("display", "block");
    });
    $("#win-remuxopt-button-close").on("click", () => {
        $(".win-remuxopt").css("display", "none");
    });
    $("#win-main-button-extractaudio").on("click", () => {
        $(".win-extractopt").css("display", "block");
    });
    $("#win-extractopt-button-close").on("click", () => {
        $(".win-extractopt").css("display", "none");
    });
    
});

function generateCommand(
    linkOrFile = "single-link",
    linkFileValue = "",
    enableVerbose = false,
    enableHTTP = false,
    remuxEnabled = false,
    extractEnabled = false,
    remuxFormat = "avi",
    extractFormat = "best"
) {
    var generated = "yt-dlp ";
    
    if(linkOrFile == "single-link") {
        generated += linkFileValue;
    } else {
        generated += "--batch-file ";
        generated += linkFileValue;
    }

    generated += " ";

    if(enableVerbose) {
        generated += "--verbose ";
    }

    if(enableHTTP) {
        generated += "--print-traffic ";
    }

    if(remuxEnabled) {
        generated += "--remux-video ";
        generated += remuxFormat;
        generated += " ";
    }

    if(extractEnabled) {
        generated += "--extract-audio ";
        generated += extractFormat;
        generated += " ";
    }

    return [generated, remuxEnabled || extractEnabled];
}