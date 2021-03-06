let chromeSprite = {
    name: 'chrome',
    visible: true,
    iteration: 0,
    direction: '++',
    moving: true,
    pos: {
        x: 0,
        y: 0
    },
    size: 1,
    colors: {
        0: 'rgba(0,0,0,0)',
        1: '#ea3c3c',
        2: '#48db71',
        3: '#ffffff',
        4: '#e8dd43',
        5: '#3c8fe8',
        6: '#444',
        7: '#2a6dd1',
        8: '#2a4fd1',
        9: '#322ad1'
    },
    values: [
        [
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
            [0,0,0,6,6,1,1,1,1,1,1,1,1,6,6,0,0,0],
            [0,0,6,1,1,1,1,1,1,1,1,1,1,1,1,6,0,0],
            [0,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [0,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [6,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
            [6,2,2,2,1,1,1,3,3,3,3,4,4,4,4,1,1,6],
            [6,2,2,2,2,1,3,5,5,5,5,3,4,4,4,4,4,6],
            [6,2,2,2,2,1,3,5,5,5,5,3,4,4,4,4,4,6],
            [6,2,2,2,2,2,3,5,5,5,5,3,4,4,4,4,4,6],
            [6,2,2,2,2,2,3,5,5,5,5,3,4,4,4,4,4,6],
            [6,2,2,2,2,2,2,3,3,3,3,2,4,4,4,4,4,6],
            [6,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,6],
            [0,6,2,2,2,2,2,2,2,2,2,4,4,4,4,4,6,0],
            [0,6,2,2,2,2,2,2,2,2,2,4,4,4,4,4,6,0],
            [0,0,6,2,2,2,2,2,2,2,4,4,4,4,4,6,0,0],
            [0,0,0,6,6,2,2,2,2,2,4,4,4,6,6,0,0,0],
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
            [0,0,0,6,6,1,1,1,1,1,1,1,1,6,6,0,0,0],
            [0,0,6,1,1,1,1,1,1,1,1,1,1,1,1,6,0,0],
            [0,6,2,1,1,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [0,6,2,2,1,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [6,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
            [6,2,2,2,2,1,1,3,3,3,3,4,4,1,1,1,1,6],
            [6,2,2,2,2,1,3,7,7,7,7,3,4,4,4,1,1,6],
            [0,6,2,2,2,2,3,7,7,7,7,3,4,4,4,4,1,6],
            [0,6,6,2,2,2,3,7,7,7,7,3,4,4,4,4,4,6],
            [6,2,2,2,2,2,3,7,7,7,7,3,4,4,4,4,4,6],
            [6,2,2,2,2,2,2,3,3,3,3,2,4,4,4,4,4,6],
            [6,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,6],
            [0,6,2,2,2,2,2,2,2,2,2,4,4,4,4,4,6,0],
            [0,6,2,2,2,2,2,2,2,2,4,4,4,4,4,4,6,0],
            [0,0,6,2,2,2,2,2,2,4,4,4,4,4,4,6,0,0],
            [0,0,0,6,6,2,2,2,4,4,4,4,4,6,6,0,0,0],
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
            [0,0,0,6,6,1,1,1,1,1,1,1,1,6,6,0,0,0],
            [0,0,6,2,2,1,1,1,1,1,1,1,1,1,1,6,0,0],
            [0,6,2,2,1,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [6,6,2,2,1,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [6,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,6],
            [6,2,2,2,2,1,1,3,3,3,3,1,1,1,1,1,1,6],
            [0,6,6,2,2,1,3,8,8,8,8,3,4,4,1,1,1,6],
            [0,0,0,6,2,2,3,8,8,8,8,3,4,4,4,1,1,6],
            [0,0,0,0,6,2,3,8,8,8,8,3,4,4,4,4,1,6],
            [0,0,0,6,2,2,3,8,8,8,8,3,4,4,4,4,4,6],
            [0,6,6,2,2,2,2,3,3,3,3,2,4,4,4,4,4,6],
            [6,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,6],
            [0,6,2,2,2,2,2,2,2,2,2,4,4,4,4,4,6,0],
            [0,6,2,2,2,2,2,2,2,2,4,4,4,4,4,4,6,0],
            [0,0,6,2,2,2,2,2,2,4,4,4,4,4,4,6,0,0],
            [0,0,0,6,6,2,2,4,4,4,4,4,4,6,6,0,0,0],
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
        ],
        [
            // Center
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
            [0,0,0,6,6,2,2,1,1,1,1,1,1,6,6,0,0,0],
            [0,0,6,2,2,2,1,1,1,1,1,1,1,1,1,6,0,0],
            [0,6,2,2,2,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [0,6,2,2,2,1,1,1,1,1,1,1,1,1,1,1,6,0],
            [0,0,6,2,2,1,1,1,1,1,1,1,1,1,1,1,1,6],
            [0,0,0,6,2,1,1,3,3,3,3,1,1,1,1,1,1,6],
            [0,0,0,0,6,1,3,9,9,9,9,3,1,1,1,1,1,6],
            [0,0,0,0,0,6,3,9,9,9,9,3,4,4,1,1,1,6],
            [0,0,0,0,0,0,6,9,9,9,9,3,4,4,4,1,1,6],
            [0,0,0,0,0,6,3,9,9,9,9,3,4,4,4,1,1,6],
            [0,0,0,0,6,2,2,3,3,3,3,4,4,4,4,4,1,6],
            [0,0,0,6,2,2,2,2,2,2,2,4,4,4,4,4,4,6],
            [0,0,6,2,2,2,2,2,2,2,4,4,4,4,4,4,6,0],
            [0,6,2,2,2,2,2,2,4,4,4,4,4,4,4,4,6,0],
            [0,0,6,2,2,2,4,4,4,4,4,4,4,4,4,6,0,0],
            [0,0,0,6,6,4,4,4,4,4,4,4,4,6,6,0,0,0],
            [0,0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0],
            // Center
        ],
    ]
}

let ramSprite = {
    name: 'ram',
    visible: false,
    iteration: 0,
    direction: '++',
    moving: false,
    pos: { x: 0, y: 0 },
    size: 1,
    colors: {
        0: 'rgba(0,0,0,0)',
        1: '#338e39',
        2: '#444444',
        3: '#bfa06a',
        6: '#444444'
    },
    values: [
        [
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
            [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
            [6,1,1,2,2,1,2,2,1,2,1,2,2,1,1,6],
            [0,6,1,2,2,1,2,2,1,2,1,2,2,1,6,0],
            [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
            [0,6,3,3,3,3,3,3,3,3,3,3,3,3,6,0],
            [0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0],
        ]
    ]
}

let cakeSprite = {
    name: 'cake',
    visible: true,
    iteration: 0,
    direction: '++',
    moving: false,
    pos: { x: 0, y: 0 },
    size: 1,
    colors: {
        0: 'rgba(0,0,0,0)',
        1: '#444',
        2: '#dddddd',
        3: '#d52828',
        4: '#eeeeee',
        5: '#442821',
        6: '#af4126'
    },
    values: [
        [
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,1,1,2,2,2,2,2,1,1,0,0,0],
            [0,1,1,2,2,2,2,2,2,2,2,2,1,1,0],
            [1,2,2,3,4,4,4,4,4,3,4,4,2,2,1],
            [1,2,4,4,4,4,4,3,4,4,4,3,4,2,1],
            [1,2,2,4,3,4,4,4,3,4,4,4,2,2,1],
            [5,2,4,2,2,4,4,4,4,2,2,2,2,2,5],
            [5,2,4,4,4,4,2,2,2,2,2,2,2,2,5],
            [5,6,2,2,2,2,2,2,2,2,2,2,6,6,5],
            [5,6,6,6,6,6,2,6,6,2,6,6,6,6,5],
            [0,5,6,6,6,6,6,6,6,6,6,6,6,5,0],
            [0,0,5,5,5,6,6,6,6,6,5,5,5,0,0],
            [0,0,0,0,0,5,5,5,5,5,0,0,0,0,0]
            // [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
            // [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
            // [6,1,1,2,2,1,2,2,1,2,1,2,2,1,1,6],
            // [0,6,1,2,2,1,2,2,1,2,1,2,2,1,6,0],
            // [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
            // [0,6,3,3,3,3,3,3,3,3,3,3,3,3,6,0],
            // [0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0],
        ]
    ]
}
