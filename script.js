const billAmount=document.querySelector(".bill-amount");
const cashGiven=document.querySelector(".cash-given");
const checkNow=document.querySelector(".check-now");
const outputBoxArea= document.querySelector(".output-boxarea");
const outBox1=document.querySelector(".outbox1")
const outBox2=document.querySelector(".outbox2")
const outBox3=document.querySelector(".outbox3")
const outBox4=document.querySelector(".outbox4")
const outBox5=document.querySelector(".outbox5")
const outBox6=document.querySelector(".outbox6")
const outBox7=document.querySelector(".outbox7")
console.log(cashGiven.value + " " + billAmount.value);
function calculate(){
   var a=parseInt(cashGiven.value);
   var b=parseInt(billAmount.value);
   console.log(a);
   if(b>0 &&  a>=b)
{
    outputBoxArea.innerText="";
let amtreturn=cashGiven.value-billAmount.value;
let nd=[0,0,0,0,0,0,0];
console.log(nd);
while(amtreturn!=0)
    {
        if(amtreturn>=2000)
        {
        amtreturn=amtreturn-2000;
        console.log("2");
        nd[0]++;
    }
        else if(amtreturn>=500){
            console.log("5");
        
        amtreturn=amtreturn-500;
        nd[1]++;}
        else if(amtreturn>=100)
        {nd[2]++;
        amtreturn=amtreturn-100;
    }
        else if(amtreturn>=20){
        nd[3]++;
        amtreturn=amtreturn-20;
        }
        else if(amtreturn>=10){
            nd[4]++;
        amtreturn=amtreturn-10;}
        else if(amtreturn>=5){nd[5]++;
        amtreturn=amtreturn-5;}
        else if(amtreturn>=1){
            nd[6]++;
        amtreturn=amtreturn-1;}
       console.log(amtreturn);
       outBox1.innerText=nd[0];
       outBox2.innerText=nd[1];
       outBox3.innerText=nd[2];
       outBox4.innerText=nd[3];
       outBox5.innerText=nd[4];
       outBox6.innerText=nd[5];
       outBox7.innerText=nd[6];



 }
}
else
{
   outputBoxArea.innerText="Wrong Input";
}
}
checkNow.addEventListener('click',calculate);