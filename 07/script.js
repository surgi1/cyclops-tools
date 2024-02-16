// https://www.verbling.com/discussion/american-english-alphabet-letter-sound-groups
const FAMILY = {
    B: ['B', 'C', 'D', 'E', 'G', 'P', 'T', 'V', 'Z'],
    A: ['A', 'H', 'K', 'J'],
    F: ['F', 'L', 'M', 'N', 'S', 'X'],
    I: ['I', 'Y'],
    U: ['U', 'Q'],
    A_REDUCED: ['A', 'K', 'J'], // minus H
    B_REDUCED: ['B', 'C', 'D', 'E', 'P', 'T', 'V', 'Z'], // minus G
    F_REDUCED: ['F', 'L', 'M', 'N', 'S'], // minus X
    FS: ['F', 'S'],
    VZ: ['V', 'Z'],
    AK: ['A', 'K'],
}
// O, R, W have quite unique sounds

const MODE = {
    ENCODE: 0,
    DECODE: 1
}

const mode = MODE.DECODE; // legacy purposes, keep to decode

const ordA = a => a.charCodeAt(0) - 65;
const reverse = s => s.split('').reverse().join('');
const rotToVig = (n, mode = MODE.ENCODE) => String.fromCharCode(65 + (mode === MODE.ENCODE ? (n % 26) : 26 - (n % 26)));
const rot = (text, n, mode) => vig(text, rotToVig(n, mode), mode);

const vig = (text, key, mode = MODE.ENCODE) => {
    let i = 0, b;
    //key = key.toUpperCase().replace(/[^A-Z]/g, ''); // all set by default in our case
    return text.toUpperCase()
                //.replace(/[^A-Z]/g, '')   // all set by default
                .replace(/[A-Z]/g, a => {
        b = key[i++ % key.length];
        return String.fromCharCode(((ordA(a) + (mode = MODE.DECODE ? 26 - ordA(b) : ordA(b))) % 26 + 65));
    });
}

const initDictionary = (checkPlain = true, checkReversed = true) => {
    let o = new Set(), _o = new Set(), cia = new Set(), w = [...words];

    // compile codenames and cryptonyms
    [...dict, Object.keys(cryptonyms)].forEach(v => {
        cia.add(v);
        w.push(v);
    });

    if (checkPlain) w
        .filter(v => v.length <= 9)
        .forEach(v => o.add(v))

    if (checkReversed) w
        .filter(v => v.length <= 9)
        .forEach(v => _o.add(reverse(v)));

    console.log('active dictionary size', o.size + _o.size);
    return {plain: o, reversed: _o, cia: cia}
}

const initVariants = groups => {
    let variants = [];
    const gen = (s = '', i = 0) => {
        if (i >= groups.length) {
            variants.push(s);
            return;
        }
        groups[i].forEach(l => gen(s+l, i+1))
    }

    gen();

    console.log('generated variants', variants.length);
    return variants;
}

const run = (groups, {plain = true, reversed = false, tuples = false, triplets = false, allowedRots = []}) => {
    let dictionary = initDictionary(plain, reversed);
    let variants = initVariants(groups);
    let found = 0, wordLen = variants[0].length;

    const logWord = (s, v, n, words, note1 = '', note2 = '') => {
        let note3 = words.some(w => dictionary.cia.has(w)) ? 'CRYPTONYM PRESENT' : '';
        console.log(s, '[', v, n, ']', note1, note2, note3);
        found++;
        return true;
    }

    console.time('cmp');

    for (let n = 0; n < 26; n++) {
        if (allowedRots && allowedRots.length > 0 && !allowedRots.includes(n)) continue;
        variants.forEach(v => {
            let t = rot(v, 26 - n, mode);
            let skip = false;
            if (dictionary.plain.has(t)) skip = logWord(t, v, n, [t]);
            if (dictionary.reversed.has(t)) skip = logWord(reverse(t), v, n, [reverse(t)], 'reverse match');
            if (skip) return true;

            if (!tuples || wordLen < 6) return true;

            for (w1len = 3; w1len <= wordLen-3; w1len++) {
                let w2len = wordLen - w1len;
                let w1 = t.substr(0, w1len), w2 = t.substr(w1len, w2len);
                skip = false;
                if (dictionary.plain.has(w1) && dictionary.plain.has(w2)) skip = logWord(t, v, n, [w1, w2], '', `tuple (${w1len}, ${w2len})`);
                if (dictionary.reversed.has(w1) && dictionary.reversed.has(w2)) skip = logWord(reverse(t), v, n, [reverse(w1), reverse(w2)], 'reverse match', `tuple (${w1len}, ${w2len})`);
                if (skip) return true;
            }

            /*if (!triplets || wordLen != 9) return true;
            let w1 = t.substr(0, 3), w2 = t.substr(3, 3), w3 = t.substr(6, 3);
            if (dictionary.full.has(w1) && dictionary.full.has(w2) && dictionary.full.has(w3)) {
                let isPlain = dictionary.plain.has(w1) && dictionary.plain.has(w2) && dictionary.plain.has(w3);
                console.log(isPlain ? t : reverse(t), '[', v, n, ']', !isPlain ? 'reverse match' : '' , 'triplet');
                found++;
                return true;
            }*/
        })
    }

    console.log('finished, found', found);
    console.timeEnd('cmp');
}

// describe the word we're looking for by letter groups applicable for individual letters
let groups = [
    //FAMILY.F, ['O'], FAMILY.B, FAMILY.F, FAMILY.B, ['I']    // FOBSPI -> VERITY
    //FAMILY.B, FAMILY.B, ['Y'], ['Y'], FAMILY.B, ['Y']     // TPYYVY -> MIRROR
    //FAMILY.F_REDUCED, FAMILY.B_REDUCED, FAMILY.F_REDUCED, ['K'], FAMILY.F_REDUCED, ['J'], FAMILY.B_REDUCED, FAMILY.B_REDUCED, FAMILY.VZ  // FVFKFJCTV
    //FAMILY.F, FAMILY.B, FAMILY.F, FAMILY.A_REDUCED, FAMILY.F, ['J'], FAMILY.B, FAMILY.B, FAMILY.B_REDUCED  // FVFKFJCTV wide search
    FAMILY.F_REDUCED, FAMILY.B_REDUCED, FAMILY.F_REDUCED, ['K'], FAMILY.F_REDUCED, ['J'], FAMILY.B_REDUCED, FAMILY.B_REDUCED, FAMILY.B_REDUCED  // FVFKFJCTV
]

run(groups, {
    //allowedRots: [0],
    //plain: false,
    reversed: true,
    tuples: true,
    //triplets: false,
})