// const color_span=document.querySelector('.color-span')
// const word_web=['Frontend Web Developer']
// var web_index=0
// var web_letter=0
// function webname(){
//     color_span.innerHTML+=word_web[web_index][web_letter]
//     web_letter++
//     if(web_letter>word_web[web_index].length){
//         web_letter=0
//     color_span.innerHTML=''
//     }
// }
// setInterval(webname,300)



const text=document.getElementById('text')
const words=['HTML','CSS','Javascript']
var indexword=0
var indexletter=0

function showarray(){
    text.innerHTML+=words[indexword][indexletter]
    indexletter++
    if(indexletter>=words[indexword].length){
        clearInterval(interval)
        setTimeout(()=>{
            text.innerHTML=''
            indexword++
            indexletter=0
            if(indexword>=words.length){
                indexword=0
            }
            interval = setInterval(showarray,400)
        },1000)
    }
}
interval = setInterval(showarray,400)
