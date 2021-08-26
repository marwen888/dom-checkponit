    const plus=document.querySelector(".plus-btn")
    const minus=document.querySelector(".minus-btn")
    const price=Number(document.querySelector(".price").innerHTML)
    var qty=document.querySelector(".qty").value
    const total=document.querySelector(".total")
    const remove=document.querySelector(".remove")
    console.log(plus,minus,price,qty,total)
     plus.addEventListener('click',function (){
       qty++
       document.querySelector(".qty").value=qty
       document.querySelector(".total").innerHTML=price*qty
    })
    minus.addEventListener('click',function (){
      if(document.querySelector(".qty").value>1){
        qty--
        document.querySelector(".qty").value=qty
        document.querySelector(".total").innerHTML=price*qty
      }
      
    })
     remove.addEventListener('click',function(){
      document.getElementById("1st").remove()
    })

    ///////////////////////////////////////////////////////////////
    const plus1=document.querySelector(".plus-btn1")
    const minus1=document.querySelector(".minus-btn1")
    const price1=Number(document.querySelector(".price1").innerHTML)
    var qty1=document.querySelector(".qty1").value
    const total1=document.querySelector(".total1")
    const remove1=document.querySelector(".remove1")
    console.log(plus1,minus1,price1,qty1,total1)


     plus1.addEventListener('click',function (){
       qty1++
       document.querySelector(".qty1").value=qty1
       document.querySelector(".total1").innerHTML=price1*qty1
    })



    minus1.addEventListener('click',function (){
      if(document.querySelector(".qty1").value>1){
        qty1--
        document.querySelector(".qty1").value=qty1
        document.querySelector(".total1").innerHTML=price*qty1
      }

  remove1.addEventListener('click',function(){
      document.getElementById("2st").remove()
    })
  }  )
