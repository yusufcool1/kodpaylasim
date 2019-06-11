var NumberOfWords = 25 //Ne Kadar Uzattıysan Buraya Yaz

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "g0addd5"
words[2] = "twwwarks"
words[3] = "jaddcs0y"
words[4] = "dwwqd2"
words[5] = "ka*ssda"
words[6] = "slffa92"
words[7] = "yvva9sf"
words[8] = "jd9ddas"
words[9] = "bhdss1j"
words[10] = "hda0a"
words[11] = "Dksde2"
words[12] = "oemf2d"
words[13] = "4je3m"
words[14] = "k6r5gm"
words[15] = "şkh2rn"
words[16] = "dj25dn"
words[17] = "kje6nsd"
words[18] = "77hdns"
words[19] = "1dm6gjw"
words[20] = "ile43nd2"
words[21] = "yr3nw2"
words[22] = "üğrghbn2"
words[23] = "cbf4ewq"
words[24] = "codr321"
words[25] = "okwr321"






//Uzatsam m uzatmasam mı hmmmmmmm
function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}