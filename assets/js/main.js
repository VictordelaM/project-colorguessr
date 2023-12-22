let text = document.querySelector("#text")
let boxArr = Array.from(document.querySelectorAll(".box"))
let output = document.querySelector("#output")
let button = document.querySelector("input")

function createRandom(max){
    return max * Math.random() 
}
for (let i = 0; i < boxArr.length; i++){
    boxArr[i].style.backgroundColor = `rgb(${createRandom(256)},${createRandom(256)},${createRandom(256)})`
    boxArr[i].addEventListener("click", () => {
        switch(boxArr[boxArr.indexOf(event.target)].style.backgroundColor === rightColor){
            case true:
                output.innerHTML = "Wow gutes Auge! :D"
                break
            case false:
                output.innerHTML = "Versuch es nochmal!"
                break
        }
    })
}
let rightColor = boxArr[Math.ceil(createRandom(5))].style.backgroundColor
text.innerHTML = `guess what color ${rightColor} is:`


button.addEventListener("click", () => {
    for (let i = 0; i < boxArr.length; i++){
        rightColor = boxArr[Math.ceil(createRandom(5))].style.backgroundColor
        boxArr[i].style.backgroundColor = `rgb(${createRandom(256)},${createRandom(256)},${createRandom(256)})`
        boxArr[i].addEventListener("click", () => {
            switch(boxArr[boxArr.indexOf(event.target)].style.backgroundColor === rightColor){
                case true:
                    output.innerHTML = "Wow gutes Auge! :D"
                    break
                case false:
                    output.innerHTML = "Versuch es nochmal!"
                    // zwiebel()
                    break
            }
        })
    }
    
    text.innerHTML = `guess what color ${rightColor} is:`
}
)



