// CarQR β v0.2.3
// debug.js

const Debug = {

    startTime: 0,

    start() {
        this.startTime = performance.now();
    },

    finish() {
        return Math.round(performance.now() - this.startTime);
    },

    show(data) {

        const result = document.getElementById("result");

        result.innerHTML = `
            <h3>🛠 デバッグ情報</h3>

            📷 幅：${data.width}px<br>
            📷 高さ：${data.height}px<br><br>

            🔍 QR検出数：${data.qrCount}<br>
            ⏱ 処理時間：${data.time} ms<br><br>

            ${data.message}
        `;
    }

};