// CarQR β v0.3.2
// pipeline.js

function startAnalysis(canvas) {

    console.log("📷 画像解析開始");

    const ctx = canvas.getContext("2d");

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const data = imageData.data;

    // グレースケール化
    for (let i = 0; i < data.length; i += 4) {

        const gray = Math.floor(
            (data[i] + data[i + 1] + data[i + 2]) / 3
        );

        data[i]     = gray; // R
        data[i + 1] = gray; // G
        data[i + 2] = gray; // B
    }

    ctx.putImageData(imageData, 0, 0);

    return {
        canvas: canvas,
        width: canvas.width,
        height: canvas.height
    };

}