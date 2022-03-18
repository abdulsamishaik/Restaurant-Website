let addToCartButtons = document.getElementsByClassName('nikilesh')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')

// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)

}
// This function helps to add items to our cart
function addToCart(event){


    let itemContainer = document.createElement('tr')
    let button = event.target
    let btnGrandParent = button.parentElement.parentElement
    let btnParent = button.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText


    itemContainer.innerHTML = `
    <td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button remove uk-button-danger" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer)




    // Accessing individual quantity fields
    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)

    }

    // Accessing individual quantity fields
    for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()


}



// This function helps to multiply the quantity and the price
function totalCost(event){
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('item-price')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    price_field_content = price_field.innerText.replace('₹', '')
    total_field.children[0].innerText = '₹' +  quantity.value * price_field_content
    grandTotal()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
    }



}

// This function helps to add up the total of the items
function grandTotal(){
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    all_total_fields = document.getElementsByClassName('total-price')
    for(let i = 0; i < all_total_fields.length; i++){
        all_prices = Number(all_total_fields[i].innerText.replace('₹', ''))
        total+=all_prices
    }
    grand_total.children[0].innerText = "₹"+total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}


function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()

}


































// var noti = document.querySelector('h1');
// 	var select = document.querySelector('.select');
// 	var button = document.getElementsByTagName('button');
// 	for(var but of button){
// 		but.addEventListener('click', (e)=>{
// 			var add = Number(noti.getAttribute('data-count') || 0);
// 			noti.setAttribute('data-count', add +1);
// 			noti.classList.add('zero')
//
// 			// image --animation to cart ---//
// 			var image = e.target.parentNode.querySelector('img');
// 			var span = e.target.parentNode.querySelector('span');
// 			var s_image = image.cloneNode(false);
// 			span.appendChild(s_image);
// 			span.classList.add("active");
// 			setTimeout(()=>{
// 				span.classList.remove("active");
// 				span.removeChild(s_image);
// 			}, 500);
//
//
// 			// copy and paste //
// 			var parent = e.target.parentNode;
// 			var clone = parent.cloneNode(true);
// 			select.appendChild(clone);
// 			clone.lastElementChild.innerText = "Buy-now";
//
// 			if (clone) {
// 				noti.onclick = ()=>{
// 					select.classList.toggle('display');
// 				}
// 			}
// 		})
// 	}
