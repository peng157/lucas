// const task= document.querySelector('h1');//選取標籤
// console.log(task.textContent)//textcontent取得元素內容
const Text_bar =document.querySelector(".文字欄");
 //TEXT BAR==文字欄
const list=document.querySelector('.list')
const button=document.querySelector('.button')
function new_task(){    
    if (Text_bar.value===''){
        return
    }
    const task=document.createElement('p')
    task.innerHTML=`
        <input type="checkbox" class="打勾方塊">
        <label >${Text_bar.value}</label>
        <button class="trash_can">🗑️</button>`
    const trash_can=task.querySelector(".trash_can")
    const 打勾方塊=task.querySelector('.打勾方塊')
    打勾方塊.addEventListener('change',function(){
        if (打勾方塊.checked){
            task.style.textDecoration='line-through'
            task.style.color='#999'
            list.append(task)
        }else{
            task.style.textDecoration='none'
            task.style.color=''
            list.prepend(task)
        }
    })

    trash_can.addEventListener('click',function(){
        task.remove()  //使垃圾桶可以刪除

    })
    list.append(task)
    Text_bar.value=''
} 
button.addEventListener('click',new_task)
Text_bar.addEventListener("keyup", function(e) {
    if (e.key==='Enter'){
       new_task()
    }
}); //addEventListener事件監聽;判斷使用者點及的按建
// keyup按下按鍵後放開 k不得為大寫
//key回傳用戶按鍵鍵名
// e=event
