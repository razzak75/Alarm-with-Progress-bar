const Timer = (date,time,output,interval = null,alarm = null,tick= null,bar=null ) => {
    // get time stamps

    let startTime  = Date.now()
    let endTime = new Date(date + ' ' + time)
    let orderTime = Math.floor(Math.abs(endTime.getTime() - startTime))

    // get value from time

    let totalSecond = Math.floor(orderTime/1000)
    let totalMinute = Math.floor(totalSecond/60)
    let totalHour = Math.floor(totalMinute/60)
    let totalDay = Math.floor(totalHour/24)

    
    let hours = totalHour - (totalDay * 24)
    let min = totalMinute - (totalDay*24*60) - (hours*60)
    let sec = totalSecond - (totalDay*24*60*60) - (hours*60*60) - (min*60)

    
    if (totalSecond <= 0) {
        clearInterval(interval)
        alarm.play()   
    }

    
    //Validation and output message

    if (!date || !time) {
        output.innerHTML = `<h3 class="bg-danger rounded text-white text-center py-3">All fields are required! </h3>`
        bar.style.display = 'none';
        bar.style.opacity = '0';
        bar.style.height = '0';

   } else {
        output.innerHTML = `<h3 class="bg-success rounded text-white text-center py-3"> ${totalDay} days : ${hours} hours : ${min} minutes : ${sec} sec</h3>`  
        tick.play()   
        bar.style.display = 'block';
        bar.style.opacity = '1';
        bar.style.height = '8px';     
   }

  
}


// Progress bar

const progressBar = (startTime,endTime) => {
    let timeDiff = endTime - startTime
    let timeChange = endTime - Date.now()

    return Math.floor((100*timeChange)/timeDiff)


}
 
