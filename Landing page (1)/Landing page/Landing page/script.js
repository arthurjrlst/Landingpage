function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.showModal(); // Abre o modal
  }
  
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.close(); // Fecha o modal
  }


  // carrosel

  let imgs = document.getElementById("img");
let img = document.querySelectorAll("#img img");

let idx= 0;

function carrossel(){
    idx+=1;
    
    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 960}px)`
}

setInterval(carrossel, 5500 );
