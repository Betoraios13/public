

function OpenNewtab (url){
    const win = window.open(url, "_blank")
    win.focus();
}

function CloseTab(){
    const win = window.close()
    win.close()
}

function OpenSingleton(){
    OpenNewtab("singleton.html");
}

function OpenInterface(){
    OpenNewtab("interface.html");
}

function OpenNameSpace(){
    OpenNewtab("namespace.html");
}
