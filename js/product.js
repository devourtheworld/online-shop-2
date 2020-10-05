document.querySelector('.buy-btn').addEventListener('click', show);
// document.querySelector('.confirm-btn').addEventListener('click', hide);
document.querySelector('.buy-btn').addEventListener('click', buy);


function show(){
    document.querySelector('.confirm-btn').style.display = 'inline-block';
    document.querySelector('.confirm-btn').style.opacity = 1;

    document.querySelector('.email-input').style.display = 'inline-block';
    document.querySelector('#email').style.display = 'inline-block';
    document.querySelector('#email').style.opacity = 1;
    document.querySelector('.email-input').style.opacity = 1;

    document.querySelector('.name-input').style.display = 'inline-block';
    document.querySelector('#name').style.display = 'inline-block';
    document.querySelector('#name').style.opacity = 1;
    document.querySelector('.name-input').style.opacity = 1;

    document.querySelector('.phone-input').style.display = 'inline-block';
    document.querySelector('#phone-num').style.display = 'inline-block';
    document.querySelector('#phone-num').style.opacity = 1;
    document.querySelector('.phone-input').style.opacity = 1;

    document.querySelector('.color').style.display = 'inline-block';
    // document.querySelector('#phone-num').style.display = 'inline-block';
    // document.querySelector('#phone-num').style.opacity = 1;
    document.querySelector('.color').style.opacity = 1;

    // document.querySelector('.product-input').style.visibility = 'visible';
    // document.querySelector('#product').style.visibility = 'visible';

    document.querySelector('.buy-btn').style.display = 'none';
    document.querySelector('.buy-btn').style.opacity = 0;
}

function hide(){
    // document.querySelector('.confirm-btn').style.visibility = 'hidden';
    // document.querySelector('.confirm-btn').style.opacity = 0;

    // document.querySelector('.email-input').style.visibility = 'hidden';
    // document.querySelector('#email').style.visibility = 'hidden';
    // document.querySelector('.email-input').style.opacity = 0;
    // document.querySelector('#email').style.opacity = 0;
    document.querySelector('#email').value = '';
    
    // document.querySelector('.name-input').style.visibility = 'hidden';
    // document.querySelector('#name').style.visibility = 'hidden';
    // document.querySelector('.name-input').style.opacity = 0;
    // document.querySelector('#name').style.opacity = 0;
    document.querySelector('#name').value = '';

    // document.querySelector('.phone-input').style.visibility = 'hidden';
    // document.querySelector('#phone-num').style.visibility = 'hidden';
    // document.querySelector('.phone-input').style.opacity = 0;
    // document.querySelector('#phone-num').style.opacity = 0;
    document.querySelector('#phone-num').value = '';

    // document.querySelector('.buy-btn').style.visibility = 'visible';
    // document.querySelector('.confirm-btn').style.opacity = 1;
}

function buy(){
    const product = document.getElementById('#product-name');
    document.getElementById('product').value = document.getElementById('product-name').innerHTML;
}