const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada'

// const doesExist = lyrics.includes('pakhi');
const searchStrings = 'Pakhi';
// const doesExist = lyrics.includes(searchStrings);
const searchStringLower = searchStrings.toLowerCase()
const lyricsLowercase = lyrics.toLowerCase();
const doesExist = lyricsLowercase.includes(searchStringLower);

const searchStingOneLine = lyrics.toLowerCase().includes(searchStrings.toLowerCase());
console.log(searchStingOneLine);
console.log(doesExist);


//-----------------------
// index of
console.log(lyrics.indexOf('kaila'));
console.log(lyrics.indexOf('Tumi'));
if(lyrics.indexOf('sadaa') !== -1){
    console.log('Exist inside the strings')
}
else{
    console.log('Can not find it')
}
//starts with
console.log(lyrics.startsWith('Tumi'));
//ends with
console.log(lyrics.endsWith('kala'));
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));