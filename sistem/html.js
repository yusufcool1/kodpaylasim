var NumberOfWords = 25 //Ne Kadar Uzattıysan Buraya Yaz

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "g0ad5"
words[2] = "tarks"
words[3] = "jas0y"
words[4] = "tra13"
words[5] = "ka*da"
words[6] = "sla92"
words[7] = "ya9sf"
words[8] = "jd9as"
words[9] = "bhd1j"
words[10] = "hd0a"
words[11] = "Dke2"
words[12] = "oemd"
words[13] = "4jem"
words[14] = "k65gm"
words[15] = "şkhrn"
words[16] = "dj2dn"
words[17] = "kjensd"
words[18] = "7hdns"
words[19] = "1dmjw"
words[20] = "ilend2"
words[21] = "yrnw2"
words[22] = "üğrn2"
words[23] = "cbewq"
words[24] = "cod21"
words[25] = "okw21"






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
}s