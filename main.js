var myWorker = new Worker('worker.js');


let btn = document.querySelector(".btn")
let img = document.querySelector('.img')


btn.onclick = ()=>{
  
    myWorker.postMessage({})

    myWorker.onmessage = (event)=>{
          //  console.log(event.data.string)
           img.src = event.data.string
    }
   
    
}


