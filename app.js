var counter =0;

document.querySelector('.share').addEventListener('click', function(e){
    const socialMedia = document.querySelector('.social-media');

    if (counter==0)
    {
    socialMedia.style.display = 'flex';
    counter=1;
    }
    else{
        socialMedia.style.display = 'none';
    counter=0;
    }
    



})