function a_flip(k){
    let v=document.getElementById(k);
    let temp=v.className.split(" ");
    console.log("yes",v);
    if (v.className==="cont" || v.className=="cont dispimg"){
        v.classList.remove("dispimg");
        v.offsetWidth=v.offsetWidth;
        v.classList.toggle("disptext");
    }
    else{
        v.classList.remove("disptext");
         v.offsetWidth=v.offsetWidth;
         v.classList.toggle("dispimg");
    }
}