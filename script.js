document.querySelectorAll(".inputRadio").forEach(function(elem){
    elem.addEventListener("click",function(){
      document.querySelector("#rate").innerHTML =  this.id;
    })
  })

  document.querySelector(".m-btn").addEventListener("click",function(){
    document.querySelector("#first").style.display = "none";
    document.querySelector("#second").style.display = "block";
  })