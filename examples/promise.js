function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script"); // <script>
        script.src = src; // <script src="https://github.com"></script>
        script.onload = function () {
            resolve(script);
        };
        script.onerror = function () {
            reject(new Error("Loi roi"));
        };
        document.head.append(script); // <head><script src="https://github.com"></script></head>
    });
}
loadScript("https://github.com")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));