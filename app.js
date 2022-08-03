const fiver_form=  document. getElementById('fiver-form');
const output=  document.querySelector('.output');
const alarm=  document.querySelector('#alarm');
const tick=  document.querySelector('#tick');
const stop_btn=  document.getElementById('stop_btn')
const bar = document.getElementById('bar')


let count;
fiver_form.onsubmit = (e) => {
    e.preventDefault()

    clearInterval(count)

    // get form value
    const form_data = new FormData(e.target);
    const { date, time } = Object.fromEntries(form_data.entries())

    // Time value
    let startTime  = Date.now()
    let endTime = new Date(date + ' ' + time)
    
   
    count = setInterval(() => {
    Timer(date,time,output,count,alarm,tick,bar)
    let pbar = progressBar(startTime,endTime)
    pbar && (bar.style.display= 'block')
    bar.style.width = `${pbar}%`

    
// Changing progress bar color
    if (pbar > 0 && pbar < 30 ) {
        bar.style.backgroundColor = "red";
    } else if(pbar > 30 && pbar < 70) {
        bar.style.backgroundColor = "yellow";

    }else if(pbar == 0 || pbar < 0){
        bar.style.display = 'none';
    }

    }, 1000);  
}



// stop alarm
stop_btn.onclick = (e) => {
    e.preventDefault()
    alarm.pause()
}
