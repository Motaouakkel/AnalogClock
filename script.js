const updateDate = () =>{
    let h = (new Date()).getHours();
    let m = (new Date()).getMinutes();
    let s = (new Date()).getSeconds();
    let ampm = h>=12?"  PM":"  AM";
    let Hours = h<10?`0${h}`:`${h}`;
    let Minutes = m<10?`0${m}`:`${m}`;
    let Seconds = s<10?`0${s}`:`${s}`;
    const divTime = document.getElementById("electronicClock");
    divTime.innerHTML = `${Hours} : ${Minutes} : ${Seconds}  ${ampm}`;
    rotateHandes(h,m,s);
}

const rotateHandes = (h,m,s)=>{
    const hoursHand = document.getElementById("hoursHand");
        hoursHand.setAttribute("transform",`rotate(${h*30},50,50)`);

    const minutesHand = document.getElementById("minutesHand");
        minutesHand.setAttribute("transform",`rotate(${m*6},50,50)`);

    const secondsHand = document.getElementById("secondsHand");
        secondsHand.setAttribute("transform",`rotate(${s*6},50,50)`);
        
    const secondsHand_ = document.getElementById("secondsHand_");
        secondsHand_.setAttribute("transform",`rotate(${s*6+180},50,50)`);

}
setInterval(updateDate,1000);