var NumberOfWords = 30 //Ne Kadar Uzattıysan Buraya Yaz

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "czxb2"
words[2] = "dsd21c"
words[3] = "f3dsc"
words[4] = "21esghj"
words[5] = "safaf2"
words[6] = "sdsad21"
words[7] = "gökığ2"
words[8] = "ddkod42"
words[9] = "32321dw"
words[10] = "kod4312"
words[11] = "kdowjm2kod"
words[12] = "n2nsw1c"
words[13] = "dsdajdı283"
words[14] = "dwqwsa2"
words[15] = "34qwqsc"
words[16] = "dsdasda"
words[17] = "fdsfas2"
words[18] = "dsdwqje42"
words[19] = "şlldwüe5"
words[20] = "qkjdjvc"
words[21] = "fdsfds321"
words[22] = "dsadascb"
words[23] = "ffiieo"
words[24] = "ewqeqw21vm"
words[25] = "hhbv"
words[26] = "eee222"
words[27] = "eeeetyvd"
words[28] = "vvfewww"
words[29] = "ffffhj"
words[30] = "eetyyhh"






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