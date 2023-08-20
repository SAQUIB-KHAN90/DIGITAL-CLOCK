let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')



setInterval(() =>{
    let currentTime = new Date()

        hrs.innerHTML =currentTime.getHours()
        min.innerHTML = currentTime.getMinutes()
        sec.innerHTML = currentTime.getSeconds()
},1000)

// function handle (){
//     let minute = 0   
//     return setInterval(() =>{
//             let currentTime = new Date()
//             let currentHour = currentTime.getHours() + minute;
//             if (currentHour >= 24) {
//                 currentHour %= 24; 
//               }
//               let currentmin = currentTime.getMinutes()+ minute
//               if(currentmin >= 60){
//                   currentmin %=60
//               }
//             hrs.innerHTML = currentHour
//             min.innerHTML = currentmin
//             sec.innerHTML = currentTime.getSeconds()
//                 ++minute

//         },1000)
//     // }
// }
// handle()()