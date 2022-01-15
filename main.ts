function ukaz_ton (ton: string) {
    if (ton == "C1") {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (ton == "D1") {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    } else if (ton == "E1") {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    } else if (ton == "F1") {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    } else if (ton == "G1") {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Violet))
    } else if (ton == "A1") {
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Orange))
    } else if (ton == "H1") {
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Purple))
    } else if (ton == "C2") {
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
    }
    strip.show()
}
function text_na_dobu (d: string) {
    if (d == "1") {
        return music.beat(BeatFraction.Whole)
    } else if (d == "2") {
        return music.beat(BeatFraction.Half)
    } else if (d == "4") {
        return music.beat(BeatFraction.Quarter)
    } else if (d == "8") {
        return music.beat(BeatFraction.Eighth)
    } else {
        return music.beat(BeatFraction.Whole)
    }
}
function hrej_notu (nota: string) {
    ton_a_doba = nota.split(" ")
    ton = ton_a_doba[0]
    doba = text_na_dobu(ton_a_doba[1])
    ukaz_ton(ton)
    if (ton == "C1") {
        music.playTone(262, doba)
    } else if (ton == "D1") {
        music.playTone(294, doba)
    } else if (ton == "E1") {
        music.playTone(330, doba)
    } else if (ton == "F1") {
        music.playTone(349, doba)
    } else if (ton == "G1") {
        music.playTone(392, doba)
    } else if (ton == "A1") {
        music.playTone(440, doba)
    } else if (ton == "H1") {
        music.playTone(494, doba)
    } else if (ton == "C2") {
        music.playTone(523, doba)
    }
    music.rest(music.beat(BeatFraction.Eighth))
    strip.clear()
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    hrej(ovecka)
})
input.onButtonPressed(Button.B, function () {
    hrej(Sluníčko)
})
let doba = 0
let ton_a_doba: string[] = []
let ton = ""
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
strip.show()
let ovecka: string[] = []
let Sluníčko: string[] = []
function hrej (noty: any[]) {
    for (let hodnota of noty) {
        hrej_notu(hodnota)
    }
}
music.setVolume(107)
music.setTempo(90)
ovecka = [
"G1 4",
"A1 4",
"H1 2",
"C2 2",
"C2 4",
"C2 4",
"C2 4",
"H1 4",
"A1 2",
"H1 2",
"H1 4",
"H1 4",
"H1 4",
"A1 4",
"G1 2",
"A1 2",
"A1 4",
"A1 4",
"A1 4",
"H1 4",
"A1 2",
"G1 2",
"G1 4",
"G1 4"
]
Sluníčko = ["A1 8"]
