async function scanQRCode() {

    // OpenCVは後で導入する
    // if (!checkOpenCV()) {
    //     return;
    // }

    const result = document.getElementById("result");
const canvas = document.getElementById("canvas");

const analysis = startAnalysis(canvas);

console.log(analysis);

Debug.start();

    result.innerHTML = "🔍 QRコードを解析しています...";

    console.log("ZXing =", ZXing);

    console.log(Object.keys(ZXing));

    try {

        const luminanceSource =
            new ZXing.HTMLCanvasElementLuminanceSource(canvas);

        const binaryBitmap =
            new ZXing.BinaryBitmap(
                new ZXing.HybridBinarizer(luminanceSource)
            );

        const reader = new ZXing.MultiFormatReader();

        const qrResult = reader.decode(binaryBitmap);

        const time = Debug.finish();

        Debug.show({
            width: canvas.width,
            height: canvas.height,
            qrCount: 1,
            time: time,
            message: `
                <hr>
                <b>✅ QRコード読取成功</b><br><br>
                ${qrResult.getText()}
            `
        });

    } catch (error) {

        console.error(error);

        const time = Debug.finish();

        Debug.show({
            width: canvas.width,
            height: canvas.height,
            qrCount: 0,
            time: time,
            message: `
                <hr>
                ❌ QRコードは見つかりませんでした<br><br>
                <pre>${error}</pre>
            `
        });

    }

}