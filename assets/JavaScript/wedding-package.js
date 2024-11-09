const new_sub_box=document.querySelectorAll('.new-sub-box');
new_sub_box.forEach(box =>{
    box.addEventListener('mouseover', function(){
        const new_sub_box_text=box.querySelector('.new-sub-box-text');
        const hover_box=box.querySelector('.hover-box');
        new_sub_box_text.style.display='block';
        hover_box.style.display='none';
    })
    box.addEventListener('mouseout', function(){
        const new_sub_box_text=box.querySelector('.new-sub-box-text');
        const hover_box=box.querySelector('.hover-box');
        new_sub_box_text.style.display='none';
        hover_box.style.display='block';
    })
})

// HOVER IMAGE KEYFRAMING
// const hover_img=document.querySelector('.hover-box-inmg');
// let img=true;
// function toggle_display(){
//     if(img){
//         hover_img.style.display='block';
//         img=false;
//     }
//     else{
//         hover_img.style.display='none';
//         img-true;
//     }
// }
