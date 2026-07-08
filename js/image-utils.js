// CarQR β v0.2.2

function createCanvasFromImage(image){

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    ctx.drawImage(image,0,0);

    return canvas;

}

function getImageInfo(image){

    return {

        width:image.naturalWidth,
        height:image.naturalHeight

    };

}