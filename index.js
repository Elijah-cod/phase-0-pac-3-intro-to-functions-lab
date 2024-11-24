function shout (text) {
    return text.toUpperCase()
}

function whisper (text) {
    return text.toLowerCase()
}

function logShout (text) {
    return console.log(text.toUpperCase())
}

function logWhisper (text) {
    return console.log(text.toLowerCase())
}

function sayHiToHeadphonedRoommate (greeting) {
    if(greeting === greeting.toLowerCase()){
        return "I can't hear you!"
    }else if (greeting === "Let's have dinner together!") {
        return "I would love to!"
    } else {
        return "YES INDEED!"
    }
}