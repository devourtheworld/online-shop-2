// if (document.getElementById('color1').checked = true){
//     document.body.style.backgroundImage = 'ulr(../img/test-image.jpg)';
// }

document.getElementById('color1').addEventListener('click', changeImg);
document.getElementById('color2').addEventListener('click', changeImg);
document.getElementById('color3').addEventListener('click', changeImg);

function changeImg(){
    if (document.getElementById('color1').checked === true){
        document.getElementById('product-pic').style.backgroundImage = 'url(../img/purple-case.jpg)';
        console.log('works - 1');
    } else if (document.getElementById('color2').checked === true){
        console.log('works - 2');
        document.getElementById('product-pic').style.backgroundImage = 'url(../img/test-image.jpg)';
    } else if (document.getElementById('color3').checked === true){
        console.log('works - 3');
        document.getElementById('product-pic').style.backgroundImage = 'url(../img/red-case-apple.jpg)';
    }
};
