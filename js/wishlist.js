loadWishlist();

document.addEventListener('visibilitychange',function(e){
    if(document.visibilityState === 'visible'){

        loadWishlist();
    }
})




function loadWishlist(){
    wishlistStr = localStorage.getItem('wishlist');

    if (wishlistStr)
        wishlist = JSON.parse(wishlistStr);
    else
        wishlist = []
    
    let itemList = document.getElementById('itemList')
    itemList.innerHTML='';
    wishlist.forEach(id => {
    
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response=>response.json())
        .then(data=>{
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerText = data.title;
            itemList.appendChild(li)
        })
    });
}