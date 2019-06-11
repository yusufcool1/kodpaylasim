var NumberOfWords = 30 //Ne Kadar Uzattıysan Buraya Yaz

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "cod34"
words[2] = "kod12"
words[3] = "kod231"
words[4] = "kdnwn132"
words[5] = "ewqd2d"
words[6] = "işlncb"
words[7] = "ğoec"
words[8] = "sdww2"
words[9] = "dsw21c"
words[10] = "ömnbr"
words[11] = "gong"
words[12] = "dwqd2"
words[13] = "028jd"
words[14] = "öcmdh32"
words[15] = "çcömje"
words[16] = "asxdw"
words[17] = "sqswds"
words[18] = "erqfcs"
words[19] = "ewqfe"
words[20] = "5şkwc2"
words[21] = "dsw21d"
words[22] = "21dsdw"
words[23] = "412rdw"
words[24] = "2131dfs"
words[25] = "2dc8rd"
words[26] = "fq2fd"
words[27] = "ffsksj38"
words[28] = "faskajl8"
words[29] = "mvnreew2"
words[30] = "sjksk2"






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