const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click',() =>{
     size=8;
    addImage();


})

function addImage() {
    for(let i=0;i<size;i++)
    {
        const newimg = document.createElement("img");
    newimg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    container.appendChild(newimg);
    }
    
}