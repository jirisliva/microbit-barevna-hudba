input.onButtonPressed(Button.A, function () {
    hrej(ovecka)
})
function hrej_ton (ton: string) {
    hodnota = ton.split("")
}
function hrej (tóny: any[]) {
    for (let hodnota of tóny) {
        hrej_ton(hodnota)
    }
}
let hodnota: string[] = []
let ovecka: string[] = []
music.setVolume(60)
ovecka = [
"C1 4",
"P 8",
"E1 4",
"P 4",
"C2 4"
]
basic.forever(function () {
	
})
