import getData from "../getData.js";
const tbody = document.querySelector("tbody");
getData()
    .then((response) => response.json())
    .then((data) =>{
        Show(data)
        const btnXoa = document.querySelectorAll(".btn-xoa");
        for(let btn of btnXoa){
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                return Xoa(id)
            })
        }
        const btnSua = document.querySelectorAll(".btn-sua");
        for(let btn of btnSua){
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                return Update(id)
            })
        }
    })
const Xoa = (id) =>{
    const vali = confirm("Xoa?");
    if(vali){
        fetch(`http://localhost:3000/products/${id}`,{
            method:"DELETE"
        }).then(() =>alert("Xoa thanh cong"))
        .then(() => location.reload())
    } 
}    
const Show = (data) =>{
    tbody.innerHTML = data.map((product,index) =>{
        return `
        <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>
            <button data-id="${product.id}" class="btn-xoa">Xoa</button>
            <button data-id="${product.id}" class="btn-sua">Sua</button>
        </td>
      </tr>
        `
    }).join("")
}
const Add = () =>{
    document.querySelector("body").innerHTML = `
    <form action="" class="form">
    <input type="text" class="username">
    <button class="btn-add">Them</button>
      </form>
    `
    document.querySelector(".btn-add").addEventListener("click",function(){
         const newUser= {
               "name" : document.querySelector(".username").value
         }
         fetch(`http://localhost:3000/products`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newUser)
        }).then(() => alert("Thành công"))
          //.then(() => window.location.reload = "http://localhost:5173/")
    })
}
document.querySelector("#btn-add").addEventListener("click",Add)
const Update = (id) =>{
    fetch(`http://localhost:3000/products/${id}`)
    .then((response) => response.json())
    .then((data) =>{
        document.querySelector("body").innerHTML = `
        <form action="" class="form">
        <input type="text" class="username" value="${data.name}">
        <button class="btn-sua">Sua</button>
          </form>
        `
        document.querySelector(".btn-sua").addEventListener("click",function(){
             const newUser= {
                "id" : id,
                   "name" : document.querySelector(".username").value
             }
             fetch(`http://localhost:3000/products/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(newUser)
            })
                alert("Thanh cong")
        })
    })
 
}