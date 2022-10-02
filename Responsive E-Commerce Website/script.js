// Event Listener for Responsive Navbar

let barBtn = document.getElementById('bars');
let list1 = document.getElementById('list1');
barBtn.addEventListener('click' , e => {
    if(list1.classList.contains('show')){
        list1.classList.remove('show');
        barBtn.classList.replace('fa-xmark' , 'fa-bars')
    }else{
        list1.classList.add('show');
        barBtn.classList.replace('fa-bars' , 'fa-xmark')
    }
})

// Event Listener for Side Panel

let cartBtn = document.getElementById('cart-btn')
let sidePanel = document.getElementById('side-panel')
cartBtn.addEventListener('click' , () => {
    if(sidePanel.classList.contains('show')){
        sidePanel.classList.remove('show');
    }else{
        sidePanel.classList.add('show');
    }
})

let closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click' , () => {
    sidePanel.classList.remove('show');
})


// Event Listener for Navbar to disbale after clicking 

let target = document.getElementById('list1').querySelectorAll('.list-items');
target.forEach(
    (element) => {
        element.addEventListener('click' , () => {
            list1.classList.remove('show');
            barBtn.classList.replace('fa-xmark' , 'fa-bars')
        })
    }
)


// Setting Attribute to All AddToCart Buttons

let addToCartButtons = document.getElementsByClassName('add-to-cart');
let addToCartArray = Array.from(addToCartButtons);

addToCartArray.forEach((product , index) => {
   product.setAttribute('data-index' , `${index}`)
})


// Add Products to SidePanel

let AllProducts = document.getElementsByClassName('product');
let AllProductsArray = Array.from(AllProducts);
let cartContainer = document.getElementById('cartContainer');
let newBtn = document.getElementById('remove-btn');
let oldBtn = document.querySelector('.add-to-cart');
let cartTotalTag = document.getElementById('total-bill');
let  notification = document.getElementById('notification');
let noti = 0;
let totalBill = 0;


AllProductsArray.forEach((product) => {
        
        let addingBtn = product.querySelector('button');
        addingBtn.addEventListener('click' , () => {
            noti +=1;
            notification.innerText = noti;
            let cloneProduct = product.cloneNode(true);
            
            cloneProduct.setAttribute('class' , 'cart-product');
            let cloneImg = cloneProduct.querySelector('img');
            cloneImg.setAttribute('class' , 'cart-product-img')

            let cloneDetail = cloneProduct.querySelector('div');
            cloneDetail.setAttribute('class' , 'cart-details')

            let cloneCategory = cloneProduct.querySelector('p');
            cloneCategory.setAttribute('class' , 'cart-category')

            let cloneStatement = cloneProduct.querySelector('span');
            cloneStatement.setAttribute('class' , 'cart-statement')

            let clonePrice = cloneProduct.querySelector('span').querySelector('span');
            totalBill = totalBill + parseInt(clonePrice.innerText)
            cartTotalTag.innerText = totalBill;
            clonePrice.setAttribute('class' , 'cart-price');


            let cloneBtn = cloneProduct.querySelector('button');
            cloneBtn.setAttribute('class' , 'remove-btn');
            cloneBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            cartContainer.append(cloneProduct);


            //Remove Product from cart when we click remove btn
            cloneBtn.addEventListener('click', e => {
                noti -=1;
                notification.innerText = noti;

                totalBill = totalBill - parseInt(clonePrice.innerText)
                cartTotalTag.innerText = totalBill;
                cloneProduct.classList.add('hide')
            })
    })
})




















