function hrej_notu (nota: string) {
    ton_a_doba = nota.split(" ")
    ton = ton_a_doba[0]
    doba = text_na_dobu(ton_a_doba[1])
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
    } else if (ton == "P") {
        music.rest(doba)
    }
}
input.onButtonPressed(Button.A, function () {
    hrej(ovecka)
})
function hrej (noty: any[]) {
    for (let hodnota of noty) {
        hrej_notu(hodnota)
    }
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
input.onButtonPressed(Button.B, function () {
    hrej(Sluníčko)
})
let doba = 0
let ton = ""
let ton_a_doba: string[] = []
let Sluníčko: string[] = []
let ovecka: string[] = []
music.setVolume(179)
music.setTempo(90)
ovecka = [
"G1 4",
"P 8",
"A1 4",
"P 8",
"H1 2",
"P 4",
"C1 2",
"P 8",
"C1 4",
"P 8",
"C1 4",
"P 4",
"C1 4",
"P 4",
"H1 4",
"P 4",
"A1 2"
]
Sluníčko = ["A1 8"]
