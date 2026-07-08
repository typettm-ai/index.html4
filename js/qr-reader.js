async function scanQRCode(image){

    const result=document.getElementById("result");

    result.innerHTML="🖼️ 画像を解析しています...";

    const canvas=createCanvasFromImage(image);

    const info=getImageInfo(image);

    result.innerHTML=`
        <h3>画像情報</h3>

        幅：${info.width}px<br>
        高さ：${info.height}px<br><br>

        ✅ Canvas生成成功
    `;

}