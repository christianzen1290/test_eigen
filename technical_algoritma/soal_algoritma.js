// -------------------------------------------------------------
// Soal No 1
string = "NEGIE134534"
arrString = string.split("")
newString = numberString = ''
numArr = arrString.length

while(numArr != 0){
    if(isNaN(arrString[numArr-1])){
        newString += arrString[numArr-1]
    } else{
        numberString = arrString[numArr-1] + numberString
    }
    numArr--;
}

finalString = newString + numberString
console.log(finalString)

// -------------------------------------------------------------
// Soal No 2
stringNo2 = "Saya sangat senang mengerjakan soal algoritma"
arrStringNo2 = stringNo2.split(" ")
longestSentence = 0; tempSentence = ''
arrStringNo2.forEach(e => {
    if(e.length > longestSentence){
        longestSentence = e.length
        tempSentence = e
    }
});
console.log('//' + tempSentence +': '+ longestSentence + ' character')

// -------------------------------------------------------------
// Soal No 3

input = ['xc', 'dz', 'bbb', 'dz']  
query = ['bbb', 'ac', 'dz']

tempArr = []
input.forEach(e=>{
    query.forEach((val,key) =>{
        if(typeof tempArr[key] == 'undefined'){
            tempArr[key] = 0
        }
        if(val == e){
            tempArr[key]++
        }
    })
})

finalStringNo3 = '['
redaksiNo3 = 'karena'
tempArr.forEach((ans,keyval)=>{
    finalStringNo3 += ans
    if(ans != 0){
        redaksiNo3 += " kata " + query[keyval] + " terdapat " + tempArr[keyval]  + " pada INPUT"
    } else {
        redaksiNo3 += " kata " + query[keyval] + " tidak ada pada INPUT"
    }
    if(keyval != (tempArr.length -1)){
        finalStringNo3 += ','
        if(ans == 0){
            redaksiNo3 += ', dan'
        } else {
            redaksiNo3 += ', '
        }
    }
})
finalStringNo3 += '] '

console.log('OUTPUT = ' + finalStringNo3 + redaksiNo3)

// -------------------------------------------------------------
// Soal No 4

Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
nMatrix = Matrix.length
tempDiagonal1 = tempDiagonal2 = 0
redaksiDiag1 = redaksiDiag2 = ''
Matrix.forEach((subMatrix,keyMatrix) =>{
    subMatrix.forEach((val,key)=>{
        if(keyMatrix == key){
            tempDiagonal1 += subMatrix[key]
            redaksiDiag1 += subMatrix[key]
            if(key != nMatrix -1){
                redaksiDiag1 += ' + '
            }
        }
        if(keyMatrix + key == nMatrix -1){
            tempDiagonal2 += subMatrix[key]
            redaksiDiag2 += subMatrix[key]
            if(key != 0){
                redaksiDiag2 += ' + '
            }
        }
    })
})

console.log('diagonal pertama = ' + redaksiDiag1)
console.log('diagonal kedua = ' + redaksiDiag2)
console.log("maka hasilnya adalah " + tempDiagonal1 + " - " + tempDiagonal2 + " = " + (tempDiagonal1 - tempDiagonal2))


