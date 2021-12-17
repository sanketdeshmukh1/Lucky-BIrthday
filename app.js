const dateofbirth=document.querySelector(".dobip");
const l1number=document.querySelector(".luckynumberip");
const checkbtn=document.querySelector(".check-btn");
const luckyop=document.querySelector(".lucky-op");
checkbtn.addEventListener('click', validatelucky);



function validatelucky(){

const newdob=dateofbirth.value.replaceAll("-","");
var sum=0;

for(let i=0;i<newdob.length;i++){
    sum+=Number(newdob.charAt(i));
    if(sum%l1number.value==0)
    {
luckyop.innerText="Your  birthday is lucky buddy";
    }else{
        luckyop.innerText="Your  birthday is Unlucky buddy";
    }

}

}