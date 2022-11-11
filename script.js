window.onload =function (){
   for(let i=0;i<13;i++){
      let columnchar1 = document.getElementsByClassName(`columnchar${i+1}`)
      for(let j=0;j<columnchar1.length;j++){
        columnchar1[j].style.display = "none"
   
      }  
   }

 let buttonn = document.getElementById("Register")


 buttonn.addEventListener("mousemove",(e)=>{
  
    let modal = document.getElementById("modal")
    modal.style.display ="flex"
 })
 buttonn.addEventListener("mouseout",(e)=>{
    let modal = document.getElementById("modal")
    modal.style.display ="none"
 })
 let btnsearch = document.getElementById("searchchart")
 btnsearch.addEventListener("click", ()=>{
   let chart =document.getElementsByClassName("columnchar121")
   for(let i =0;i<chart.length;i++){
      let columnchar1 = document.getElementsByClassName(`columnchar${i+1}`)

      let a = setTimeout(()=>{
         columnchar1[0].style.display ="block"
      },200*i)
     
   }
 })
 let persent = document.getElementsByClassName("percent_infor")
 for(let i=0;i<persent.length;i++){
   let randomvalue = Math.floor(Math.random()*100)
   persent[i].textContent = randomvalue +"%"
 
   let columnchar1 = document.getElementsByClassName(`columnchar${i+1}`)
   for(let j=0;j<columnchar1.length;j++){
     columnchar1[j].style.width =290/100*randomvalue+"px"

   }
 }
}


