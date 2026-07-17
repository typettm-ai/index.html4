async function scanQRCode() {

    const result = document.getElementById("result");
    const canvas = document.getElementById("canvas");

    Debug.start();

    const analysis = startAnalysis(canvas);

    const time = Debug.finish();

    Debug.show({
        width: analysis.width,
        height: analysis.height,
        qrCount: 0,
        time: time,
        message: `
            <hr>
            ✅ 画像解析パイプライン動作確認成功<br><br>
            次は画像処理を追加します。
        `
    });

}