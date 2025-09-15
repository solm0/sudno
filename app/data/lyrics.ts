export interface LyricsProp {
  name: string;
  lyric: {
    kr: string;
    ru: string;
  }[];
  isFound: boolean;
}

export const Lyrics: LyricsProp[] = [
  {
    name: 'sudno',
    lyric: [{ kr: '에나멜 칠 요강,', ru: 'Эмалированное судно,' }],
    isFound: false,
  },
  {
    name: 'okoshko',
    lyric: [{ kr: '쪽창,', ru: 'Окошко,' }],
    isFound: false,
  },
  {
    name: 'tumbochka',
    lyric: [{ kr: '탁자,', ru: 'тумбочка,' }],
    isFound: false,
  },
  {
    name: 'krovat',
    lyric: [{ kr: '침대.', ru: 'кровать.' }],
    isFound: false,
  },
  {
    name: 'pol',
    lyric: [
      { kr: '사는 것은 어렵고 불편하나', ru: 'Жить тяжело и неуютно' },
      { kr: '죽는 것은 편안하다.', ru: 'Зато уютно умирать.' }
    ],
    isFound: false,
  },
  {
    name: 'lampa',
    lyric: [
      { kr: '나는 누워 생각한다', ru: 'Лежу и думаю:'},
      { kr: '여기 이 하얀 천이 어제 세상을 떠난 자를 덮지 않았을 리 없다고.', ru: 'едва ли вот этой белой простынёй того вчера не укрывали, кто нынче вышел в мир иной.'},
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
  },
  {
    name: 'zerkalo',
    lyric: [
      { kr: '안개 속에 있었던 듯 튀어나오고,', ru: 'Выходит как бы из тумана,' },
    ],
    isFound: false,
  },
  {
    name: 'stol',
    lyric: [
      { kr: '보았네 - 탁자와 침대를.', ru: 'И видит: тумбочка, кровать.' }
    ],
    isFound: false,
  },
  {
    name: 'stul',
    lyric: [{ kr: '나는 깨어나려고 몸부림쳤다', ru: 'И я пытаюсь приподняться' }],
    isFound: false,
  },
  {
    name: 'dver',
    lyric: [
      { kr: '삶이란 걸 눈에 담아 보고 싶었다', ru: 'Хочу в глаза ей поглядеть' },
      { kr: '눈에 담고는 울음을 터트리며', ru: 'Взглянуть в глаза и разрыдаться' }
    ],
    isFound: false,
  },
  {
    name: 'end',
    lyric: [{ kr: '다시는 죽지 않아', ru: 'И никогда не умереть' }],
    isFound: false,
  }
];