const starE1 = document.querySelectorAll(".fa-star");
const emojiE1 = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starE1.forEach((starE1, index)=>{
    starE1.addEventListener("click", ()=>{
        updateRating(index);
    })
})

function updateRating(index){
    starE1.forEach((starE1, idx)=>{
        if(idx < index + 1){
            starE1.classList.add("active");

        }else{
            starE1.classList.remove("active");
        }
    });
    emojiE1.forEach(emojiE1=>{
        emojiE1.style.transform = `translate(-${index * 50}px)`; 
        emojiE1.style.color = colorsArray[index];
    });
};