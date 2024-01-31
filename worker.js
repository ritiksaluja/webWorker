self.onmessage = function (event) {


   base64string().then((string)=>{
    // console.log(string)
    self.postMessage({string})
   })

  



    

};


async function base64string(){
    const blob = await loadImage('./img/download.jpg');
    const base64Data = await imageToBase64(blob);
    return base64Data
    // console.log(base64Data)

}



async function loadImage(path) {
    const response = await fetch(path);
    const blob = await response.blob();
    return createImageBitmap(blob);
  }



  async function imageToBase64(bitmap) {
  const offscreenCanvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const context = offscreenCanvas.getContext('2d');
  context.drawImage(bitmap, 0, 0);

  
  const blob = await offscreenCanvas.convertToBlob({ type: 'image/png' });


  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}



