serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    RxData = serial.readLine().split("=")
    basic.showString("" + (RxData[1]))
    basic.pause(5000)
})
let temp = 0
let RxData: string[] = []
serial.redirect(
SerialPin.P12,
SerialPin.P16,
BaudRate.BaudRate115200
)
basic.forever(function () {
    temp = input.temperature()
    serial.writeLine("DATA(A,Temperatura):" + convertToText(temp))
    basic.pause(2000)
})
basic.forever(function () {
    basic.pause(200)
    serial.writeLine("REQUEST(Sheet3,F414)")
    basic.pause(200)
    serial.writeLine("URL(https://docs.google.com/spreadsheets/d/1zX8XiftKqrxGiFI5nmw1hhmamDaujJcoGMLj1WMFL2E/edit?usp=sharing)")
    basic.pause(5000)
    serial.writeLine("WHAT(TIME)")
    basic.pause(5000)
})
