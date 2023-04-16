let countDown


function timer(count){
    let now = new Date().getTime();
    let then = now + count*1000;

    countDown = setInterval(()=>{
        const new_date_now = new Date().getTime()
        const last_count = Math.floor((then-new_date_now)/1000)+1

        if(last_count<0){
            clearInterval(countDown)
            return;
        }else{
            showTimer(last_count,then);
        }
    },1000)
    
}

function showTimer(count,then){
    const min_count = Math.floor((count/60))
    const seconds = count % 60;

    time_then = new Date(then)
    document.querySelector("h1").innerHTML = `${min_count}:${seconds<10?"0":""}${seconds}`
    const minute = time_then.getMinutes()<10 ?"0"+time_then.getMinutes() : time_then.getMinutes();
    document.querySelector("h2").innerHTML = `Be right back at: ${time_then.getHours()}:${minute}`;
}


let press_count = 1;
document.querySelector(".right-triangle").addEventListener("click",()=>{
    if(press_count<13){
        clearInterval(countDown)
        document.querySelector("h1").innerHTML = `${press_count*5}:00`
        press_count ++;
        document.querySelector("body").style.backgroundColor = "#D2DAFF";
        document.querySelector(".time-container").style.backgroundColor ="#EEF2FF";
        document.querySelector(".left-triangle").style.borderRightColor = "#B1B2FF";
        document.querySelector(".right-triangle").style.borderLeftColor = "#B1B2FF";
        document.querySelector(".start-button").style.backgroundColor = "#B1B2FF";
        document.querySelectorAll(".time-button").style.color = "#B1B2FF";
    }

})

document.querySelector(".left-triangle").addEventListener("click",()=>{
    
    if(press_count>1){
        clearInterval(countDown)
        press_count--;
        document.querySelector("h1").innerHTML = `${press_count*5}:00`
        document.querySelector("body").style.backgroundColor = "#D2DAFF";
        document.querySelector(".time-container").style.backgroundColor ="#EEF2FF";
        document.querySelector(".left-triangle").style.borderRightColor = "#B1B2FF";
        document.querySelector(".right-triangle").style.borderLeftColor = "#B1B2FF";
        document.querySelector(".start-button").style.backgroundColor = "#B1B2FF";
        document.querySelectorAll(".time-button").style.color = "#B1B2FF";
    }
    else{
        return
    }

})

let start_button = document.querySelector(".start-button");
start_button.addEventListener("click",()=>{
    
    let currentTime = document.querySelector("h1").innerText.slice(1,2) ===":" ?document.querySelector("h1").innerText.slice(0,1):document.querySelector("h1").innerText.slice(0,2);
    clearInterval(countDown)
    timer(Number(currentTime)*60);
})


let buttons = document.querySelectorAll(".time-button");

buttons.forEach(function(button){
    button.addEventListener("click",()=>{
        press_count = 1;
        console.log(typeof(button.value))
        if(button.value == 25){
            clearInterval(countDown)
            timer(button.value*60);
            document.querySelector("body").style.backgroundColor = "#FFABAB";
            document.querySelector(".time-container").style.backgroundColor ="#FCC8D1";
            document.querySelector(".left-triangle").style.borderRightColor = "#F56A79";
            document.querySelector(".right-triangle").style.borderLeftColor = "#F56A79";
            document.querySelector(".start-button").style.backgroundColor = "#F56A79";
            document.querySelectorAll(".time-button").style.color = "#F56A79";
            
        }
        else if(button.value == 15){
            clearInterval(countDown)
            timer(button.value*60);
            document.querySelector("body").style.backgroundColor = "#CCE490";
            document.querySelector(".time-container").style.backgroundColor ="#F2F4B2";
            document.querySelector(".left-triangle").style.borderRightColor = "#1E6F5C";
            document.querySelector(".right-triangle").style.borderLeftColor = "#1E6F5C";
            document.querySelector(".start-button").style.backgroundColor = "#1E6F5C";
            document.querySelectorAll(".time-button").style.color = "#1E6F5C";
          
        }
        else if(button.value ==5){
            clearInterval(countDown)
            timer(button.value*60);
            document.querySelector("body").style.backgroundColor = "#F9F3DF";
            document.querySelector(".time-container").style.backgroundColor ="#FDFCE5";
            document.querySelector(".left-triangle").style.borderRightColor = "#FFB319";
            document.querySelector(".right-triangle").style.borderLeftColor = "#FFB319";
            document.querySelector(".start-button").style.backgroundColor = "#FFB319";
            document.querySelectorAll(".time-button").style.color = "#FFB319";
        }
        clearInterval(countDown);

    })
})
