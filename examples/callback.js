function loadScript(src, callback) {
    const script = document.createElement("script"); // <script>
    script.src = src; // <script src="https://github.com"></script>
    script.onload = function () {
        callback(10);
    };
    script.onerror = function () {
        callback(new Error("Loi roi"));
    };
    document.head.append(script); // <head><script src="https://github.com"></script></head>
}
loadScript("https://github.com", function (error, data) {
    loadScript("https://github.com2", function (data2) {
        loadScript("https://github.com3", function (data3) {
            loadScript("https://github.com4", function (data4) {
                // callback hell
            });
        });
    });
});