function detect() {
    var system = "";
    if(navigator.appVersion.indexOf("Win") != -1) {
        system = "Windows";
    }
    if(navigator.appVersion.indexOf("Mac") != -1) {
        system = "Mac";
    }
    if(navigator.appVersion.indexOf("X11") != -1) {
        system = "Unix";
    }
    if(navigator.appVersion.indexOf("Linux") != -1) {
        system = "Linux";
    }
    return system;
}

console.log(detect());