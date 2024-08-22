const defineCanvas=()=>{
    let canvas= document.getElementById('webglCanvas');
    let gl=canvas.getContext('webgl2')
    gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
    gl.clearColor(60/255,193/255,131/255,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
}
defineCanvas()