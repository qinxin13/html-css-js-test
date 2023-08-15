//找到所有属性名叫panel的标签
const panels=document.querySelectorAll('.panel');
//遍历所有标签，并给每一个div添加点击监听事件，并触发active
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}