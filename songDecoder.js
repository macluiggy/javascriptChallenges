function songDecoder(song){
  // ...
  if (song[0] == 'W' && song[1] == 'U' && song[2] == 'B') {
      song[0] = '';
      song[1] = '';
      song[2] = '';
  }
  console.log(song[0]);
}

songDecoder("WUBAWUBBWUBCWUB");

var string = 'helowubyowubtewub';
var wub = /wub/i
var replaced = string.replace(wub, '');
console.log(replaced);

