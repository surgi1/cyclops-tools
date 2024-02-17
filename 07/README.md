# Track 07

https://mazegame.org/cyclops-tools/07/index.html

## How to use

From browser dev console.

### Examples
```
// ex. 1: trying to match line 4 from the puzzle in relatively wide search space
// for the list of explicitely defined letter families see script.js

run([
    FAMILY.F_REDUCED, FAMILY.B_REDUCED, FAMILY.F_REDUCED, ['K'], FAMILY.F_REDUCED, ['J'], FAMILY.B_REDUCED, FAMILY.B_REDUCED, FAMILY.B_REDUCED  // trying to match FVFKFJCTV and alike, each element of the array prescribes available letters for that slot
], {
    //allowedRots: [0, 1],  // allow only some of the ROT keys, default: [], not applied while empty array
    //plain: false,         // allow plain (meaning non-reversed) words usage, default: true
    reversed: true,         // allow reversed words (**verify the mirror** they say), default: true
    tuples: true,           // search wlaso for word tuples, e.g. redbadger, purplefox, default: false
    unprefixCryptonyms: true, // add also cryptonyms stripped of their prefixes, if applicable. Ex. remove MK from MKNAOMI, if NAOMI is a word present in our dictionary (MKNAOMI would be added regardless), default: false
    //triplets: false,      // silly number of matches, turned off completely for now
})

// ex. 2: matching the 3rd line of the puzzle (mirror)

run([ FAMILY.B, FAMILY.B, ['Y'], ['Y'], FAMILY.B, ['Y'] ], {
    reversed: true,
    tuples: false,
})

```