function clock () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let divide = "AM"

    if (hours > 12) {
        hours = hours - 12;
        divide = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let time = hours + ":" + minutes + ":" + seconds + " " + divide;
    let day = date.getDate();
    let month = new Date().toLocaleString('en-us', {  month: 'long' });
    let year = date.getFullYear();
    let dayOfTheWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
    let Dateday = dayOfTheWeek + ", " + month + " " +  day + ", " + year;
    document.getElementById('txt').innerHTML = time;
    document.getElementById('date').innerHTML = Dateday;
    setTimeout(clock, 1000);
}
clock();