const serialNumber = 'abcdef1';

const hasVowel = (/[aeiou]/).test(serialNumber);

const lastDigitIsEven = serialNumber[serialNumber.length - 1] % 2 === 0;

const batteryCount = 2;

const indicators = ['car'];

const ports = ['parallel'];

function onTheSubjectOfWires() {
    const wires = 'rrw';

    const lastWire = wires[wires.length - 1];

    switch (wires.length) {
        case 3:
            if (!wires.includes('r')) {
                return 2;
            } else if (lastWire === 'w') {
                return 3;
            } else if (wires.match(/b/g).length > 1) {
                return wires.lastIndexOf('b') + 1;
            } else {
                return 3;
            }
        case 4:
            if (wires.match(/r/g).length > 1 && !lastDigitIsEven) {
                return wires.lastIndexOf('r') + 1;
            } else if (lastWire === 'y' && !wires.includes('r')) {
                return 1;
            } else if (wires.match(/b/g).length === 1) {
                return 1;
            } else if (wires.match(/y/g).length > 1) {
                return 4;
            } else {
                return 2;
            }
        case 5:
            if (lastWire === 'b' && !lastDigitIsEven) {
                return 4;
            } else if (wires.match(/r/g).length === 1 && wires.match(/y/g).length > 1) {
                return 1;
            } else if (!wires.includes('b')) {
                return 2;
            } else {
                return 1;
            }
        case 6:
            if (!wires.includes('y') && !lastDigitIsEven) {
                return 3;
            } else if (wires.match(/y/g).length === 1 && wires.match(/w/g).length > 1) {
                return 4;
            } else if (!wires.includes('r')) {
                return 6;
            } else {
                return 4;
            }
    }
}

function onTheSubjectOfTheButton(color, text) {
    if (color === 'b' && text === 'abort') {
        return 'hold';
    } else if (batteryCount > 1 && text === 'detonate') {
        return 'press_and_release';
    } else if (color === 'w' && indicators.includes('car')) {
        return 'hold';
    } else if (batteryCount > 2 && indicators.includes('frk')) {
        return 'press_and_release';
    } else if (color === 'y') {
        return 'hold';
    } else if (color === 'r' && text === 'hold') {
        return 'press_and_release';
    } else {
        return 'hold';
    }
}

function onTheSubjectOfSimonSays(strikeCount, colors) {
    const colorMappers =  [[
        {
            'r': 'b',
            'b': 'r',
            'g': 'y',
            'y': 'g',
        },
        {
            'r': 'y',
            'b': 'g',
            'g': 'b',
            'y': 'r',
        },
        {
            'r': 'r',
            'b': 'y',
            'g': 'g',
            'y': 'b',
        }
    ], [
        {
            'r': 'b',
            'b': 'y',
            'g': 'g',
            'y': 'r',
        },
        {
            'r': 'r',
            'b': 'b',
            'g': 'y',
            'y': 'g',
        },
        {
            'r': 'y',
            'b': 'g',
            'g': 'b',
            'y': 'r',
        }
    ]];

    const mapper = colorMappers[hasVowel ? 0 : 1][strikeCount];
    return colors.map(color => mapper[color]);
}

function onTheSubjectOfMemory(display, buttons) {
    let stage = 1;

    switch (stage) {
        case 1:
            switch (display) {
                case 1:
                    return buttons[1];
                case 2:
                    return buttons[1];
                case 3:
                    return buttons[2];
                case 4:
                    return buttons[3];
            }
            break;
    }
}

function onTheSubjectOfComplicatedWires(wire) {
    const sets = {
        led:          ['p1', 's4', 'd1', 'd2', 'b1', 'p3', 'b2', 'b3'],
        redColoring:  ['s1', 'c2', 's3', 'p2', 's4', 'd2', 'b1', 'b2'],
        blueColoring: ['s2', 's3', 'p1', 'p2', 's4', 'd2', 'd3', 'p3'],
        star:         ['c2', 'c3', 'p2', 'd2', 'd3', 'p3', 'b2', 'b3'],
    };

    const includedSets = Object.keys(sets).filter(k => wire[k]).map(k => sets[k]);

    const includedLetters = includedSets.reduce((a, b) => a.filter(c => b.includes(c)));

    const excludedLetters = Object.keys(sets).filter(k => !wire[k]).map(k => sets[k]).flat();

    const [[letter]] = includedLetters.filter(letter => !excludedLetters.includes(letter));

    switch (letter) {
        case 'c':
            return true;
        case 'd':
            return false;
        case 's':
            return lastDigitIsEven;
        case 'p':
            return ports.includes('parallel');
        case 'b':
            return batteryCount >= 2;
    }
}

function onTheSubjectOfPasswords() {
    const f = (a, b) => a.map(d => b.map(e => [...d, ...e])).flat();
    const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

    const combinations = cartesian([...'rpqvns'], [...'zpgxlv']).map(s => s.join(''));

    const words = [
        'about', 'after', 'again', 'below', 'could',
        'every', 'first', 'found', 'great', 'house',
        'large', 'learn', 'never', 'other', 'place',
        'plant', 'point', 'right', 'small', 'sound',
        'spell', 'still', 'study', 'their', 'there',
        'these', 'thing', 'think', 'three', 'water',
        'where', 'which', 'world', 'would', 'write'
    ];


    for (const word of words) {
        if (combinations.includes(word[0] + word[1])) {
            console.log(word);
        }
    }
}