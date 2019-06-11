var NumberOfWords = 30 //Ne Kadar Uzattıysan Buraya Yaz

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "726hdn"
words[2] = "123ewq"
words[3] = "456tec"
words[4] = "2349hg"
words[5] = "dsj28jfdj"
words[6] = "093jmf"
words[7] = "38jrj"
words[8] = "as44555"
words[9] = "eeeeeww"
words[10] = "bbbbrr"
words[11] = "eeeffr44"
words[12] = "rrre22"
words[13] = "ee33322"
words[14] = "rrfvvvv"
words[15] = "ffeerr3322"
words[16] = "fdddvv"
words[17] = "ddede"
words[18] = "ffew"
words[19] = "ffew321"
words[20] = "rwerew"
words[21] = "öönnnf"
words[22] = "ewqw21"
words[23] = "eee323bnjj"
words[24] = "jjjtttff"
words[25] = "fffewe"
words[26] = "ee2221w"
words[27] = "adsse212adsa"
words[28] = "jdhdhd2"
words[29] = "ddvvd2"
words[30] = "ddww21sa"






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