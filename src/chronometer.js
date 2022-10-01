class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null;
  }

  start(printTimeCallback) {
      
      this.intervalId = setInterval(()=>{
      this.currentTime += 1;

      if(printTimeCallback) {
        printTimeCallback();
      }
        
    }, 1000)

  }


  getMinutes() {
    return Math.floor(this.currentTime/60);
  }


  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {

    if (value.toString().length < 2) {
      return `0${value.toString()}`;
    }

    return value.toString();
   
  }

  stop() {
    setTimeout(()=>{
      clearInterval(this.intervalId);
    })
    clearInterval();
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
