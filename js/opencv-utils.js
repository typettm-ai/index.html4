// CarQR β v0.2.6
// opencv-utils.js

function checkOpenCV(){

    if(typeof cv === "undefined"){

        console.log("❌ OpenCV未読込");

        return false;

    }

    console.log("✅ OpenCV読込成功");

    return true;

}