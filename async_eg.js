//settimeout
const changeText = function(){
        document.querySelector('h1').innerHTML = "best JS series"
    }

    const changeMe = setTimeout(changeText, 2000)

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe)
        console.log("STOPPED")
//setinterval
  const sayDate = function(str){
        console.log(str, Date.now());
    }

    const intervalId = setInterval(sayDate, 1000, "hi")

    clearInterval(intervalId)
