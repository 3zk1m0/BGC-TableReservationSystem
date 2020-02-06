export let cache = {
    "heads": 1,
    "strangers": 0,
    "duration": 1
}

export let onHeadsInput = () => {
    calculateTotalPeople("heads")
}

export let onStrangersInput = () => {
    calculateTotalPeople("strangers")
}

export let onDurationInput = () => {
    validateInteger("duration")
}

export let onAddHeadsPress = () => {
    changePeopleNumber("heads", 1)
}

export let onRemoveHeadsPress = () => {
    changePeopleNumber("heads", -1)
}

export let onAddStrangersPress = () => {
    changePeopleNumber("strangers", 1)
}

export let onRemoveStrangersPress = () => {
    changePeopleNumber("strangers", -1)
}

export let onAddDurationPress = () => {
    changeDurationNumber(1)
}

export let onRemoveDurationPress = () => {
    changeDurationNumber(-1)
}

let validateInteger = (id) => {
/*
    Make sure the integer is valid and if not, revert the value to the previous one.

    Return the value of previous cache if successful, null if not.
    */
    let inputElement = document.querySelector("#" + id)
    if (!isWholeNumber(inputElement.value)) {
        console.log("Not a non-negative whole number!")
        inputElement.value = cache[id]
        return null
    }

    let prevCache = cache[id]
    cache[id] = Number(inputElement.value)
    return prevCache
}

let isWholeNumber = (value) => {
    /*
    Check if the given input value is a non-negative whole number.

    Return true or false.
    */
    let pattern = new RegExp("[0-9]+")
    let match = pattern.exec(value)
    return match && value === pattern.exec(value)[0]
}

let calculateTotalPeople = (id) => {
    /*
    Perform validation checks for the input element that is being modified.
    */
    const MAX_PEOPLE = 10

    let inputElement = document.querySelector("#" + id)
    let otherValue = Number(getOtherElement(id).value)

    let prevCache = validateInteger(id)
    if (prevCache !== null) {
        let intValue = Number(inputElement.value)
        if (intValue + otherValue > MAX_PEOPLE) {
            inputElement.value = prevCache
            alert("Only reservations up to " + MAX_PEOPLE + " are allowed")
        }
        else {
            cache[id] = intValue
        }
    }
}

let getOtherElement = (id) => {
    /*
    Get either heads or strangers input element, depending on which one is being modified.
    */
    let otherId;
    if (id === "heads") {
        otherId = "strangers"
    }
    else {
        otherId = "heads"
    }

    return document.querySelector("#" + otherId)
}

let changeNumber = (id, amount) => {
    /*
    Change the number in heads, strangers or duration input fields.
    */
    let inputElement = document.querySelector("#" + id)
    inputElement.value = Number(inputElement.value) + amount
}

let changePeopleNumber = (id, amount) => {
    /*
    Change the number of heads or strangers.
    */
    changeNumber(id, amount)
    calculateTotalPeople(id)
}

let changeDurationNumber = (amount) => {
    changeNumber("duration", amount)
    validateInteger("duration")
}