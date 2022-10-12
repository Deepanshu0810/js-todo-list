const form = document.querySelector("#new-task-form")
const input_el = document.querySelector("#new-task-input")
const list_el = document.querySelector("#tasks")

form.addEventListener("submit",(e)=> {

    e.preventDefault()

    console.log('clicked')

    const task_ele = document.createElement("div")
    task_ele.classList.add('task')
    

    const task_content_ele = document.createElement('div')
    task_content_ele.classList.add('content')
    task_ele.appendChild(task_content_ele)

    const task_content_input = document.createElement('input')
    task_content_input.classList.add('text')
    task_content_input.type = 'text'
    task_content_input.value = input_el.value
    task_content_input.setAttribute('readonly','readonly')
    task_content_ele.appendChild(task_content_input)

    const task_action_ele = document.createElement('div')
    task_action_ele.classList.add('actions')
    
    const task_edit_el = document.createElement('button')
    task_edit_el.classList.add('edit')

    
    const task_delete_el = document.createElement('button')
    task_delete_el.classList.add('delete')
    
    const edit_image = document.createElement('img')
    edit_image.src="https://cdn-icons-png.flaticon.com/512/2997/2997896.png"
    task_edit_el.appendChild(edit_image)

    const delete_image = document.createElement('img')
    delete_image.src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
    task_delete_el.appendChild(delete_image)
    
    task_action_ele.appendChild(task_edit_el)
    task_action_ele.appendChild(task_delete_el)
    task_ele.appendChild(task_action_ele)
    list_el.appendChild(task_ele)

    input_el.value = ''

    task_edit_el.addEventListener('click',()=>{
        if (edit_image.src == "https://cdn-icons-png.flaticon.com/512/2997/2997896.png") {
            edit_image.src = "https://cdn-icons-png.flaticon.com/512/2550/2550221.png"
            task_content_input.removeAttribute('readonly')
            task_content_input.focus()
        }else{
            edit_image.src = "https://cdn-icons-png.flaticon.com/512/2997/2997896.png"
            task_content_input.setAttribute('readonly','readonly')
        }
    })

    task_delete_el.addEventListener('click',()=>{
        list_el.removeChild(task_ele)
    })

})