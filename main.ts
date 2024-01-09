function _1stRun () {
    if (_1st_run == true) {
        basic.pause(2000)
        serial.writeLine("URL(https://docs.google.com/spreadsheets/d/1zX8XiftKqrxGiFI5nmw1hhmamDaujJcoGMLj1WMFL2E/edit?usp=sharing)")
        _1st_run = false
        basic.pause(1000)
    }
}
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    _1stRun()
    basic.pause(100)
    RxData = serial.readLine().split("=")
    Answer = RxData[1]
})
let temp = 0
let RxData: string[] = []
let _1st_run = false
let Answer = ""
serial.redirect(
SerialPin.P12,
SerialPin.P16,
BaudRate.BaudRate115200
)
serial.setRxBufferSize(128)
Answer = "Welcome"
_1st_run = true
basic.forever(function () {
    _1stRun()
    basic.pause(100)
    temp = input.temperature()
    serial.writeLine("DATA(A,Temperatura):" + convertToText(temp))
    basic.pause(1000)
    serial.writeLine("REQUEST(Sheet3,F414)")
    basic.pause(1000)
    basic.showString(Answer)
    basic.pause(5000)
    basic.pause(1000)
    serial.writeLine("WHAT(TIME)")
    basic.pause(1000)
    basic.showString(Answer)
    basic.pause(5000)
})
