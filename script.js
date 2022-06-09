let index = 0;

function showImage(i){
    index += i;

    const images = document.getElementsByClassName('image');
    const dotes = document.getElementsByClassName('dot');

    console.log(images);
    console.log(dotes);

    for(i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    for(let i = 0; i < dotes.length; i++){
        dotes[i].className = dotes[i].className.replace(" active", "");
    }

    if(index > images.length - 1){
        index = 0;
    }

    if(index < 0){
        index = images.length - 1;
    }

    images[index].style.display = 'block';
    dotes[index].className += " active";
}

showImage(index);
