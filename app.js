
var getul = document.getElementById('ul')
function send(){
    var a = document.getElementById('inp')
    var li = document.createElement('li') 
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ''
    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('delete')
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick', 'del(this)')
    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Edit')
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'edit(this)')
    deletebtn.setAttribute('class', 'btn-main')
    editbtn.setAttribute('class', 'btn-main')
    li.setAttribute('class', 'li-text')


}
function da(){
    getul.innerHTML = ''
}
function del(e){
    e.parentNode.remove()
}
function edit(e){
    var  b = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = b

}





































