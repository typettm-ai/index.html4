function startAnalysis(canvas) {

    console.log("① 画像解析開始");

    const ctx = canvas.getContext("2d");
    console.log("② ctx取得");

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log("③ imageData取得");

    const data = imageData.data;
    console.log("④ data取得");

    // =========================
    // グレースケール化
    // =========================
    for (let i = 0; i < data.length; i += 4) {

        const gray = Math.floor(
            (data[i] + data[i + 1] + data[i + 2]) / 3
        );

        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
    }

    console.log("⑤ グレースケール完了");

    // =========================
    // 二値化（ここを追加）
    // =========================
    const threshold = 150;

    for (let i = 0; i < data.length; i += 4) {

        const value = data[i] > threshold ? 255 : 0;

        data[i]     = value;
        data[i + 1] = value;
        data[i + 2] = value;
    }

    console.log("⑥ 二値化完了");

    // =========================
    // Canvasへ戻す
    // =========================
    ctx.putImageData(imageData, 0, 0);

    console.log("⑦ Canvasへ描画完了");

    return {
        canvas: canvas,
        width: canvas.width,
        height: canvas.height
    };

}