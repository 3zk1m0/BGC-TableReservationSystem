export let onTimeBackwardPress = () => {
    changeTime(-15)
}

export let onTimeForwardPress = () => {
    changeTime(15)
}

let getTime = () => {
    let inputElement = document.querySelector("#time")
    let hoursAndMinutes = inputElement.value.split(":")

    return new Date(2000, 1, 1, hoursAndMinutes[0], hoursAndMinutes[1]).getTime()
}

let changeTime = (minutes) => {
    let time = getTime()
    time += minutes * 60 * 1000
    
    let date = new Date()
    date.setTime(time)

    let minuteString = ("0" + date.getMinutes()).slice(-2)
    document.querySelector("#time").value = `${date.getHours()}:${minuteString}`
}