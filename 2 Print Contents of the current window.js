function Windowprint(){
    var btn = document.getElementById('print');
    // btn.onclick()
    btn.addEventListener('click',()=>{
        console.log('clicked');
        window.print();
    })
}
Windowprint();