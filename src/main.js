import './style.css'

document.querySelector('#app').innerHTML = `
<h1>🚗 CarQR β v0.4.0</h1>

<input type="file" id="imageInput" accept="image/*">

<button id="scanButton">
解析開始
</button>

<img id="preview" style="display:none;">

<canvas id="canvas"></canvas>

<div id="result">
画像を選択してください
</div>
`