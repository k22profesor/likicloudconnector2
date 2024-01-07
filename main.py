def on_data_received():
    global RxData
    RxData = serial.read_line()
    basic.show_string(RxData.substr(8, 0))
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

temp = 0
RxData = ""
serial.redirect(SerialPin.P12, SerialPin.P16, BaudRate.BAUD_RATE115200)

def on_forever():
    global temp
    temp = input.temperature()
    serial.write_line("DANE(A,Temperatura):" + convert_to_text(temp))
    basic.pause(1000)
basic.forever(on_forever)

def on_forever2():
    basic.pause(200)
    serial.write_line("REQUEST(Sheet2,F44)")
    basic.pause(4800)
basic.forever(on_forever2)
