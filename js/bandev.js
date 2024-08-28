/*禁用F12*/
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
        layer.msg("F12被禁用了哦~");
        event.keyCode = 0;
        event.returnValue = false;
    }
}
function fuckyou() {
    //window.close(); //关闭当前窗口(防抽)
    window.location = "about:blank"; //将当前窗口跳转置空白页
}

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("禁止拿代码");
            oncontextmenu = 'return false';
        }
    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}
if (document.layers) {
    fuckyou();
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function () {
    if (window.event.keyCode == 123) {
        fuckyou();
        window.event.returnValue = false;
        return (false);
    }
}