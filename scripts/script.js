
function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    
    const body = document.body;
    const toggleCheckbox = document.querySelector(".toggle-checkbox");
    let visualAidContainer = document.getElementById("visual-aid-container");
    let loremText = document.getElementById("lorem-text");


    
    function doubleDigits() {
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    }

    function changeImage() {
        if( toggleCheckbox.checked && ((hours > 17 && hours <= 23) || (hours >=0 && hours <5) )) {
            visualAidContainer.style.background = "url(../images/night.jpg) var(--secondary-color)";
            visualAidContainer.style.backgroundSize = "cover";
            visualAidContainer.style.backgroundPosition = "center";
            visualAidContainer.style.backgroundRepeat = "repeat";
    
        } else if (!toggleCheckbox.checked && (((hours>5 && session == "PM") && (hours<=11 && session == "PM"))|| (hours>=12 && session == "AM") && (hours<=5 && session == "AM"))){
            visualAidContainer.style.background = "url(../images/night.jpg) var(--secondary-color)";
            visualAidContainer.style.backgroundSize = "cover";
            visualAidContainer.style.backgroundPosition = "center";
            visualAidContainer.style.backgroundRepeat = "repeat";
        } else {
            visualAidContainer.style.background = "url(../images/day  .jpg) var(--secondary-color)";
            visualAidContainer.style.backgroundSize = "cover";
            visualAidContainer.style.backgroundPosition = "center";
            visualAidContainer.style.backgroundRepeat = "repeat";
        }   
    }

    function changeImageMobile() {
        if (document.body.scrollWidth <781) {
            // console.log("windth is less that 781");
            if( toggleCheckbox.checked && ((hours > 17 && hours <= 23) || (hours >=0 && hours <5) )) {
                body.style.background = "url(../images/night.jpg) var(--secondary-color)";
                body.style.backgroundSize = "cover";
                body.style.backgroundPosition = "center";
                body.style.backgroundRepeat = "repeat";
            
            } else if (!toggleCheckbox.checked && (((hours>5 && session == "PM") && (hours<=11 && session == "PM"))|| (hours>=12 && session == "AM") && (hours<=5 && session == "AM"))){
                body.style.background = "url(../images/night.jpg) var(--primary-color)";
                body.style.backgroundSize = "cover";
                body.style.backgroundRepeat = "repeat";
                body.style.backgroundPosition = "center";
            } else {
                body.style.background = "url(../images/day-mobile.jpg) var(--primary-color)";
                body.style.backgroundSize = "cover";
                body.style.backgroundRepeat = "repeat";
                body.style.backgroundPosition = "center";
            }
        visualAidContainer.style.background = "none";

    } else {
            body.style.background = "url(../images/bg-clock.jpg) var(--primary-color)";
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "repeat";
            body.style.backgroundPosition = "center";
    }   
}  

    if (toggleCheckbox.checked) {
        // console.log("Button is Checked");
        doubleDigits();
        document.getElementById("hours").textContent = `${hours}:`;
        session ="";

    } 

    if(!toggleCheckbox.checked) {
        if(hours==0){
            hours = 12;
        }
        if(hours >12){
            hours = hours-12;
            session = "PM"
        }

        doubleDigits();
        document.getElementById("hours").textContent = `${hours}:`;
    }

    
    document.getElementById("minutes").textContent = `${minutes}:`;
    document.getElementById("seconds").textContent = `${seconds}`;
    document.getElementById("session").textContent = session

    changeImage();
    changeImageMobile();
    setTimeout(showTime, 1000);

}

showTime();