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
    lyric: [{ kr: '에나멜 칠 요강', ru: 'Эмалированное судно' }],
    isFound: false,
  },
  {
    name: 'okoshko',
    lyric: [{ kr: '쪽창문', ru: 'Окошко' }],
    isFound: false,
  },
  {
    name: 'tumbochka',
    lyric: [{ kr: '서랍장', ru: 'тумбочка' }],
    isFound: false,
  },
  {
    name: 'krovat',
    lyric: [{ kr: '침대', ru: 'кровать' }],
    isFound: false,
  },
  {
    name: 'neuyutno',
    lyric: [{ kr: '살기도 어렵고 편하지도 않아', ru: 'Жить тяжело и неуютно' }],
    isFound: false,
  },
  {
    name: 'uyutno',
    lyric: [{ kr: '그렇지만 죽기에는 편하다', ru: 'Зато уютно умирать' }],
    isFound: false,
  },
  {
    name: 'krana',
    lyric: [
      { kr: '수도꼭지에서 물은 조용히 떨어지고', ru: 'И тихо капает из крана' },
      { kr: '삶마저도 헤프다네, 창녀마냥', ru: 'И жизнь растрёпана, как блядь' },
    ],
    isFound: false,
  },
  {
    name: 'dver',
    lyric: [
      { kr: '삶은 안개 속에 있듯이 튀어나오고', ru: 'Выходит как бы из тумана' },
      { kr: '그리고 보았다네 - 서랍장과 침대를', ru: 'И видит: тумбочка, кровать' }
    ],
    isFound: false,
  },
  {
    name: 'zerkalo',
    lyric: [{ kr: '깨어나려고 몸부림쳐', ru: 'И я пытаюсь приподняться' }],
    isFound: false,
  },
  {
    name: 'stol',
    lyric: [{ kr: '인생이란 걸 눈에 담고 싶어', ru: 'Хочу в глаза ей поглядеть' }],
    isFound: false,
  },
  {
    name: 'lampa',
    lyric: [{ kr: '눈에 담고 울음을 터트리지', ru: 'Взглянуть в глаза и разрыдаться' }],
    isFound: false,
  },
  {
    name: 'end',
    lyric: [{ kr: '다시는 죽지 않아', ru: 'И никогда не умереть' }],
    isFound: false,
  }
];