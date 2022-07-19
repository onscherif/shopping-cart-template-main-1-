//pour incr et dercr
 let incr=document.querySelectorAll('.plus-btn');
 console.log(incr)
for (let i=0 ; i< incr.length ; i++){
incr[i].addEventListener('click', function(){
    incr[i].previousElementSibling.value++;
    totalprice()

})
}
let decr=document.querySelectorAll('.minus-btn');
console.log(decr)
for(let i=0; i< decr.length ;i++){
decr[i].addEventListener('click', function(){
    if ( decr[i].nextElementSibling.value>1){

        decr[i].nextElementSibling.value--;
        totalprice()
    }
}
)}
// pour elever 
 let rmvBtns = document.querySelectorAll('.delete')
 for (let i=0; i<rmvBtns.length; i++){
    rmvBtns[i].addEventListener('click',function(){
        rmvBtns[i].parentNode.remove()
        totalprice()
    })
 }
 //button like
 let likes = document.querySelectorAll('.fa-heart')
console.log(likes)
for(let i=0; i< likes.length; i++) {
    likes[i].addEventListener('click', function(){
        if (likes[i].style.color === "rgb(158, 158, 158)")
        {likes[i].style.color = "red"}
        else{
            likes[i].style.color = "rgb(158, 158, 158)"
        }
    })
}
//total price
function totalprice(){
    let QNT=document.querySelectorAll('.QNT')
    let price=document.querySelectorAll('.price')
    let count=0
    for (let i=0;i<QNT.length;i++){
        count= count+QNT[i].value * price[i].innerHTML
    } 
    document.querySelector('#finalPrice').value =count
}