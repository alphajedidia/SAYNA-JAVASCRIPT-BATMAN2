const next = document.getElementsByClassName("nextQuestion")
const frame = document.getElementsByClassName("frame")
const result = document.getElementById('result')
for(let x in next){
    next[x].addEventListener("click",()=>{
        if(x == 15){
            console.log("ok")
        }
        else{
            let y = 1
            console.log(x)
            frame[y+parseInt(x)].style.display = 'block'
            frame[x].style.display = 'none'
        }
    })

}