var j = true;

function move(){    
    if(localStorage.getItem('banklogs')) {
        if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
            if(localStorage.getItem('loadtime')) {
                var elemj = document.getElementById('pablos');
                var width = localStorage.getItem('time-left');
                var id = setInterval(frame, 1000);
                function frame(){
                    if(width <= 0){
                        clearInterval(id);
                        i = false;
                        localStorage.setItem('time-left',null);
                        localStorage.setItem('banklogs',[]);
                        alert("Time's up, select another bank log and pay for it before time runs out!");
                        window.location.reload();
                    } 
                    else if( width <= 300) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){
                            seconds = '0'+seconds
                        }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width <= 600) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){
                            seconds = '0'+seconds
                        }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){
                            seconds = '0'+seconds
                        }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    }
                }
            } else if(!localStorage.getItem('loadtime')) {
                var elemj = document.getElementById('pablos');
                localStorage.setItem('time-left',900);
                var width = localStorage.getItem('time-left');
                var id = setInterval(frame, 1000);
                function frame(){
                    if(width <= 0){
                        clearInterval(id);
                        i = false;
                        localStorage.setItem('time-left',null);
                        localStorage.setItem('banklogs',[]);
                        alert("Time's up, select another bank log and pay for it before time runs out!");
                        window.location.reload();
                    } 
                    else if( width <= 300) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){
                            seconds = '0'+seconds
                        }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width <= 600) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){
                            seconds = '0'+seconds
                        }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){
                            seconds = '0'+seconds
                        }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    }
                }
                localStorage.setItem('loadtime', true)
            }
        } else {
            console.log('No items are in cart');
        }
    } else {
        console.log('No bank logs selected')
    }                                
}
