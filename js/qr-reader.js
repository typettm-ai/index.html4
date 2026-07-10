// CarQR β v0.2.4
// qr-reader.js

async function scanQRCode() {

    const result = document.getElementById("result");
    const canvas = document.getElementById("canvas");

    Debug.start();

    result.innerHTML = "🔍 QRコードを解析しています...";

    try {

        const codeReader = new ZXing.BrowserQRCodeReader();

        const qrResult = await codeReader.decodeFromCanvas(canvas);

        const time = Debug.finish();

        Debug.show({
            width: canvas.width,
            height: canvas.height,
            qrCount: 1,
            time: time,
            message: `
                <hr>
                <b>✅ QRコード読取成功</b><br><br>
                ${qrResult.text}
            `
        });

    } catch (error) {

        const time = Debug.finish();

        Debug.show({
            width: canvas.width,
            height: canvas.height,
            qrCount: 0,
            time: time,
            message: `
                <hr>
                ❌ QRコードは見つかりませんでした
            `
        });

        console.log(error);

    }

}