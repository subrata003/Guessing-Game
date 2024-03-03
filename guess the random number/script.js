const min=1
const max=50
const random=parseInt(Math.random()*max-min+1)+min
console.log(random);
const input=document.querySelector(".inputbox")
const btn=document.querySelector(".btn")
const preview=document.querySelector(".preview")
const remaing=document.querySelector(".remaing")
const game=document.querySelector(".game")
const refresh=document.querySelector(".refresh")
const att=document.querySelector(".att")
const newbtn=document.createElement("button")
newbtn.textContent="Play Again"

let newnum=[]
let count=4
btn.addEventListener("click",()=>{
        console.log(input.value);
        if(input.value>50){
                alert("please enter the valid number")
        }
        else if(input.value<0){
                alert("please enter the valid number")
        }
        else{
                if(input.value>random){
                        att.innerHTML="plzz Enter small Number"
                        
                }
                else if(input.value<random){
                      
                        att.innerHTML="plzz Enter big Number"
                }

      
                if(input.value==random){
                        game.innerHTML="Yes...You are Right !!!"
                input.value=''
                refresh.appendChild(newbtn)
                att.innerHTML=''
                btn.remove()
              
                }
                else{
                 newnum.push(input.value)
                 console.log(newnum);
                 input.value=''
                 preview.innerHTML=newnum
                 if(count==0){
                        remaing.innerHTML="0"
                        game.innerHTML=`Game Over . Random Number was ${random}`
                        refresh.appendChild(newbtn)
                        preview.innerHTML=''
                        btn.remove()
                        att.innerHTML=''
                        
                       
                       
                 }
                 else{

                         remaing.innerHTML=count--
                 }
                 
                

                }
        }
        
})
newbtn.addEventListener("click",()=>{
        location.reload()
})