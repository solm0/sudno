export interface LyricsProp {
  name: string;
  lyric: {
    kr: string;
    ru: string;
  }[];
  isFound: boolean;
  time?: {
    start: number;
    end: number;
  }[]
}

export const Lyrics: LyricsProp[] = [
  {
    name: 'sudno',
    lyric: [{ kr: '에나멜 칠 요강,', ru: 'Эмалированное судно,' }],
    isFound: false,
    time: [
      {
        start: 14,
        end: 17
      },
      {
        start: 26.5,
        end: 29.5
      },
      {
        start: 95.5,
        end: 98.5
      },
      {
        start: 107.5,
        end: 110.5
      },
    ]
  },
  {
    name: 'okoshko',
    lyric: [{ kr: '쪽창,', ru: 'Окошко,' }],
    isFound: false,
    time: [
      {
        start: 17.5,
        end: 18.2
      },
      {
        start: 29.5,
        end: 30
      },
      {
        start: 98.5,
        end: 99
      },
      {
        start: 110.5,
        end: 111
      },
    ]
  },
  {
    name: 'tumbochka',
    lyric: [{ kr: '탁자,', ru: 'тумбочка,' }],
    isFound: false,
    time: [
      {
        start: 18.2,
        end: 18.7
      },
      {
        start: 30,
        end: 30.5
      },
      {
        start: 99,
        end: 99.5
      },
      {
        start: 111,
        end: 111.5
      },
    ]
  },
  {
    name: 'krovat',
    lyric: [{ kr: '침대.', ru: 'кровать.' }],
    isFound: false,
    time: [
      {
        start: 18.7,
        end: 20
      },
      {
        start: 30.5,
        end: 31.5
      },
      {
        start: 99.5,
        end: 100.5
      },
      {
        start: 111.5,
        end: 112
      },
    ]
  },
  {
    name: 'pol',
    lyric: [
      { kr: '사는 것은 어렵고 불편하나', ru: 'Жить тяжело и неуютно' },
      { kr: '죽는 것은 편안하다.', ru: 'Зато уютно умирать.' }
    ],
    isFound: false,
    time: [
      {
        start: 20.5,
        end: 25.5
      },
      {
        start: 32.5,
        end: 37.5
      },
      {
        start: 101.5,
        end: 106.5
      },
      {
        start: 113.5,
        end: 118.5
      },
    ]
  },
  {
    name: 'lampa',
    lyric: [
      { kr: '나는 누워 생각한다', ru: 'Лежу и думаю:'},
      { kr: '이 하얀 천이 어제 세상을 떠난 자를 덮지 않았을 리 없다고.', ru: 'едва ли вот этой белой простынёй того вчера не укрывали, кто нынче вышел в мир иной.'},
    ],
    isFound: false,
  },
  {
    name: 'krana',
    lyric: [
      { kr: '수도꼭지에선 소리 없이 떨어지고,', ru: 'И тихо капает из крана,' },
      { kr: '삶은 헝클어진 채, 창년마냥.', ru: 'И жизнь растрёпана, как блядь.' },
    ],
    isFound: false,
    time: [
      {
        start: 53.5,
        end: 58.5
      },
    ]
  },
  {
    name: 'zerkalo',
    lyric: [
      { kr: '안개 속에 있었던 듯 튀어나오고,', ru: 'Выходит как бы из тумана,' },
    ],
    isFound: false,
    time: [
      {
        start: 59.5,
        end: 61.5
      },
    ]
  },
  {
    name: 'stol',
    lyric: [
      { kr: '보았네 - 탁자와 침대를.', ru: 'И видит: тумбочка, кровать.' }
    ],
    isFound: false,
    time: [
      {
        start: 62.5,
        end: 64.5
      },
    ]
  },
  {
    name: 'stul',
    lyric: [{ kr: '나는 깨어나려고 몸부림쳤다', ru: 'И я пытаюсь приподняться' }],
    isFound: false,
    time: [
      {
        start: 71.5,
        end: 73.5
      },
    ]
  },
  {
    name: 'dver',
    lyric: [
      { kr: '삶이란 걸 눈에 담아 보고 싶었다', ru: 'Хочу в глаза ей поглядеть' },
      { kr: '눈에 담고는 울음을 터트리며', ru: 'Взглянуть в глаза и разрыдаться' }
    ],
    isFound: false,
    time: [
      {
        start: 74.5,
        end: 80
      },
    ]
  },
  {
    name: 'end',
    lyric: [{ kr: '다시는 죽지 않아', ru: 'И никогда не умереть' }],
    isFound: false,
    time: [
      {
        start: 80.5,
        end: 82.3
      },
      {
        start: 82.5,
        end: 83.7
      },
      {
        start: 85,
        end: 86.8
      },
      {
        start: 88,
        end: 90
      },
      {
        start: 91,
        end: 92.5,
      },
      {
        start: 92.7,
        end: 94.3,
      },
    ]
  }
];