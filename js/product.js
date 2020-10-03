document.querySelector('.buy-btn').addEventListener('click', show);
document.querySelector('.confirm-btn').addEventListener('click', hide);
document.querySelector('.buy-btn').addEventListener('click', buy);


function show(){
    document.querySelector('.confirm-btn').style.visibility = 'visible';

    document.querySelector('.email-input').style.visibility = 'visible';
    document.querySelector('#email').style.visibility = 'visible';

    document.querySelector('.name-input').style.visibility = 'visible';
    document.querySelector('#name').style.visibility = 'visible';

    document.querySelector('.phone-input').style.visibility = 'visible';
    document.querySelector('#phone-num').style.visibility = 'visible';

    // document.querySelector('.product-input').style.visibility = 'visible';
    // document.querySelector('#product').style.visibility = 'visible';

    document.querySelector('.buy-btn').style.visibility = 'hidden';
}

function hide(){
    document.querySelector('.confirm-btn').style.visibility = 'hidden';

    document.querySelector('.email-input').style.visibility = 'hidden';
    document.querySelector('#email').style.visibility = 'hidden';

    document.querySelector('.name-input').style.visibility = 'hidden';
    document.querySelector('#name').style.visibility = 'hidden';

    document.querySelector('.phone-input').style.visibility = 'hidden';
    document.querySelector('#phone-num').style.visibility = 'hidden';

    document.querySelector('.buy-btn').style.visibility = 'visible';
}

function buy(){
    const product = document.getElementById('#product-name');
    document.getElementById('product').value = document.getElementById('product-name').innerHTML;
}