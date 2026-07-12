// CarQR β v0.3.0
// pipeline.js

console.log("✅ pipeline.js 読み込み成功");

function startAnalysis(canvas) {

    console.log("📷 画像解析開始");

    return {
        canvas: canvas,
        width: canvas.width,
        height: canvas.height
    };

}