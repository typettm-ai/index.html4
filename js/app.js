alert("app.js 読み込み成功！");// CarQR β v0.2.0
// app.js

// 要素取得
const fileInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");
const scanButton = document.getElementById("scanButton");

// 画像選択時
fileInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event) {

        preview.src = event.target.result;

        preview.onload = function() {

            result.innerHTML =
                "✅ 画像を読み込みました。<br>「解析開始」を押してください。";

        };

    };

    reader.readAsDataURL(file);

});

// 解析開始
scanButton.addEventListener("click", () => {

    alert("解析開始ボタンが押されました！");

    if (!preview.src) {
        alert("先に画像を選択してください。");
        return;
    }

    result.innerHTML = "🔍 QRコードを解析中...";

    scanQRCode(preview);

});