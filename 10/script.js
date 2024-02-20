const chunkString = (str, length) => str.match(new RegExp('.{1,' + length + '}', 'g'));
const chunkArray = (arr, size) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

const toAscii = v => String.fromCharCode((v%26)+65)

const MODE = {
    ENCODE: 0,
    DECODE: 1
}

const mode = MODE.DECODE; // legacy purposes, keep to decode

const ordA = a => a.charCodeAt(0) - 65;
const reverse = s => s.split('').reverse().join('');
const rotToVig = (n, mode = MODE.DECODE) => String.fromCharCode(65 + (mode === MODE.ENCODE ? (n % 26) : 26 - (n % 26)));
const rot = (text, n, mode) => vig(text, rotToVig(n, mode), mode);

const vig = (text, key, mode = MODE.DECODE) => {
    let i = 0, b;
    //key = key.toUpperCase().replace(/[^A-Z]/g, ''); // all set by default in our case
    return text.toUpperCase()
                //.replace(/[^A-Z]/g, '')   // all set by default
                .replace(/[A-Z]/g, a => {
        b = key[i++ % key.length];
        return String.fromCharCode(((ordA(a) + (mode = MODE.DECODE ? 26 - ordA(b) : ordA(b))) % 26 + 65));
    });
}

const notesLiteral = `F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4 A3 F3 A3 Fs5 D3 E3 B3 Fs5 F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4 A3 F3 A3 Fs5 D3 E3 B3 Fs5 F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4 A3 F3 A3 Fs5 D3 E3 B3 Fs5 E3 F3 C3 Gs5 B3 B3 C4 C5 E3 D3 F3 F5 C3 B3 F3 G4 B3 G3 E3 Eb5 G3 G3 E3 Bb4 B3 G3 E3 A4 C3 B3 E3 D4 E3 D3 F3 D4 B3 G3 D3 Eb5 B3 G3 E3 D4 F3 B3 B3 B4 C3 B3 F3 D5 D3 E3 B3 F4 A3 D3 G3 G4 B3 B3 C3 Cs6 E3 C3 F3 Eb5 A3 F3 A3 Cs5 G3 G3 E3 E4 A3 B3 F3 D4 E3 A3 A3 Cs5 C3 B3 F3 C4 C3 F3 B3 Bb4 F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4 A3 F3 A3 Fs5 D3 E3 B3 Fs5 F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4 A3 F3 A3 Fs5 D3 E3 B3 Fs5 F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4 A3 F3 A3 Fs5 D3 E3 B3 Fs5 F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4 A3 F3 A3 Fs5 D3 E3 B3 Fs5 F3 B3 B3 Eb5 B3 G3 D3 D5 E3 A3 A3 B4 C3 B3 F3 Bb4 G3 G3 E3 C4 G3 G3 E3 Eb4 B3 G3 D3 D5 B3 G3 E3 G5 E3 C3 F3 Eb4 B3 B3 C3 F5 E3 C3 F3 E4`;
const widthsLiteral = `02102022110212010001100100101210002022010212202220021020221101012021020221102120100011001001012100020220102122022200210202211`;

const notesMiddlePartInterval = [3*52, 3*52+92];
const widthsMiddlePartInterval = [50, 50+15];

const canvas = document.getElementById('root'), ctx = canvas.getContext('2d');
const zoom = [4, 32];
const widthSizes = [1, 2, 3];

const orderNoScale = ['C', 'Cs', 'D', 'Eb', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'Bb', 'B'];

const order = [
'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 
'C4', 'D4', 'Eb4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'B4', 'B4s', // B4s added for faking Q
'C5', 'Cs5', 'D5', 'Eb5', 'E5', 'F5', 'Fs5', 'G5', 'Gs5', 'A5', 'B5',
'C6', 'Cs6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6',
]

let widths = widthsLiteral.split('').map(Number);

// just the middle parts of the messages
//let notes = `E F C G# B B C C E D F F C B F G B G E Eb G G E Bb B G E A C B F D E D F D B G D Eb B G E D F B B B C B F D D E B F A D G G B B C C# E C F Eb A F A C# G G E E A B F D E A A C# C B F C C F B Bb`.split(' ')
//let widths = `021020221101012`.split('').map(Number);

/*
// ternary numbers chunking
let widthsChunkSize = 3;
if (widths.length % widthsChunkSize !== 0) console.log('wrong widthsChunkSize!');
let a = chunkArray(widths, widthsChunkSize);
let key = a
    //.map(v => parseInt(v.map(v => [0, 1, 2][v]).join(''), widthsChunkSize))
    .map(v => parseInt(v.join(''), widthsChunkSize))
    .map(toAscii)
    .join('');

console.log('key', key);
*/

/*
let notesChunkSize = 2;

if (notes.length % notesChunkSize !== 0) console.log('wrong widthsChunkSize!');

console.log(
    chunkArray(notes.map(v => order.indexOf(v)), notesChunkSize)
        .map(v => v.reduce((a, c, i) => a + c * Math.pow(12, (notesChunkSize-1)-i), 0))
        .map(toAscii)
        .join('')
)
*/

let notesFull = notesLiteral.split(' ');

// create order table
let sorted = [...new Set(notesFull)];
//sorted.push('B4s'); // add dummy note for Q
sorted.sort((a, b) => order.indexOf(a) - order.indexOf(b));
const ntn = note => sorted.indexOf(note);

let notes = notesFull.map((s, i) => ({
    note: s.replace(/\d/, ''),
    scale: Number(s.match(/\d/)[0]),
    width: widths[Math.floor(i/4)],
    widthIndex: Math.floor(i/4),
}))

console.log(notes);

console.log('distinct notes', new Set(notesFull).size)

notesFull.forEach(v => {
    if (!order.includes(v)) console.log('missing ordering data for note', v);
})

// let's draw the thing
const draw = () => {
    let height = Math.ceil(12);
    let width = notes.reduce((a, v) => a+widthSizes[v.width], 0);

    canvas.width = (width+1)*zoom[0];
    canvas.height = (height+1)*zoom[1];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = 0;

    notes.forEach((o, i) => {
        let col = [0, 0, (i*11) % 128];
        if (i >= notesMiddlePartInterval[0] && i < notesMiddlePartInterval[1]) col[0] = 255;
        if (o.widthIndex >= widthsMiddlePartInterval[0] && o.widthIndex < widthsMiddlePartInterval[1]) col[1] = 200;
        ctx.fillStyle = 'rgb('+col.join(',')+')';
        ctx.fillRect(x*zoom[0], (11-orderNoScale.indexOf(o.note))*zoom[1], zoom[0]*widthSizes[o.width], zoom[1]);
        x += widthSizes[o.width];
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x*zoom[0], 0);
        ctx.lineTo(x*zoom[0], 12*zoom[1]);
        ctx.stroke();
    })

    orderNoScale.forEach((o, i) => {
        ctx.lineWidth = 0.1;
        ctx.beginPath();
        ctx.moveTo(0, i*zoom[1]);
        ctx.lineTo(x*zoom[0], i*zoom[1]);
        ctx.stroke();
        ctx.font = "12px serif";
        ctx.fillText(o, Math.round(window.scrollX), (12-i)*zoom[1]-10);
    })

}

draw();

window.addEventListener("scroll", e => draw());

// rot/vigenere attempts
//let message = middleNotes.map(v => sorted.indexOf(v)).map(toAscii).join('')

//console.log('message', message);
//console.log('vig', vig(message, key));

/*
console.log('non-roted', 
    notesFull
        .map(ntn)
        .map(toAscii)
        //.map((v, i) => rot(v, 26 + widths[Math.floor(i/4)]))
        .join('')
)

const mapWidth = n => {
    switch (n) {
        case 0: return -2;
        case 1: return -0;
        case 2: return -1;
    }
}

console.log('roted',
    notesFull
        .map(ntn)
        .map(toAscii)
        .map((v, i) => rot(v, 26 + mapWidth(widths[Math.floor(i/4)])))
        .join('')
)
*/