const form = document.querySelector('form')
form.addEventListener('submit', addTask)


function addTask(event) {
    const taskText = document.querySelector('#task').value
    console.log(taskText)
    let li = document.createElement('li')
    li.className = 'collection-item'
    let liText =document.createTextNode(taskText)
    li.appendChild(liText)

    let a = document.createElement("a")
    a.className = 'teal-text darken-2 secondary-content'
    let aText = document.createTextNode('X')
    a.appendChild(aText)
    a.setAttribute('href', '#')
    li.appendChild(a)
    ul.appendChild(li)

    document.querySelector('#task').value = ''

    event.preventDefault()



}
