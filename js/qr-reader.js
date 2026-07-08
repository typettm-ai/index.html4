// CarQR β v0.2.1
// QRコード読取

async function scanQRCode(imageElement) {

    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "🔍 QRコードを解析しています...";

    try {

        const reader = new ZXing.BrowserQRCodeReader();

        const result = await reader.decodeFromImageElement(imageElement);

        resultDiv.innerHTML = `
            <h3>✅ QRコード読取成功</h3>
            <textarea style="width:100%;height:180px;">${result.text}</textarea>
        `;

    } catch (error) {

        resultDiv.innerHTML = `
            <h3>❌ QRコードが見つかりません</h3>
            <p>画像を確認してください。</p>
        `;

        console.error(error);

    }

}