const API = `https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services`

let Result = document.querySelector(".Result")

async function getServise(){
    try {
        const res = await fetch(API)
        const data = await res.json()
        console.log(data);
        showServise(data)
    } catch (error) {
        
    }
}
getServise()

function showServise(data){
    Result.innerHTML = data.map((item) => {
        return`
        <div class="product">
        <img src="${item.image}" alt=""/>
        <p>${item.name}</p>
        <p>${item.category}</p>
        </div>
        `
    }).join(" ")
}

showServise()