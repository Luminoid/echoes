import type { PersonData } from './types';

export const psychologistData: PersonData[] = [
  {
    slug: 'sigmund-freud',
    name: { en: 'Sigmund Freud', zh: '西格蒙德·弗洛伊德' },
    years: '1856–1939',
    nationality: { en: 'Austrian', zh: '奥地利' },
    bio: {
      en: 'Neurologist and founder of psychoanalysis who revolutionized our understanding of the unconscious mind, dreams, and human desire.',
      zh: '神经学家，精神分析学创始人，彻底改变了人类对潜意识、梦和欲望的理解。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Sigmund_Freud',
      zh: 'https://zh.wikipedia.org/wiki/西格蒙德·弗洛伊德',
    },
    quotes: [
      {
        text: {
          en: 'Being entirely honest with oneself is a good exercise.',
          zh: '对自己完全诚实是一种好的练习。',
        },
        original: 'Gegen sich ganz ehrlich zu sein, ist eine gute Übung.',
        originalLang: 'de',
        source: { en: 'Letter to Wilhelm Fliess', zh: '致威廉·弗利斯的信' },
        year: 1897,
      },
      {
        text: {
          en: 'Where id was, there ego shall be.',
          zh: '在本我所在之处，自我应当出现。',
        },
        original: 'Wo Es war, soll Ich werden.',
        originalLang: 'de',
        source: { en: 'New Introductory Lectures on Psycho-Analysis', zh: '《精神分析新论》' },
        year: 1933,
      },
      {
        text: {
          en: 'The goal of all life is death.',
          zh: '一切生命的目标是死亡。',
        },
        original: 'Das Ziel alles Lebens ist der Tod.',
        originalLang: 'de',
        source: { en: 'Beyond the Pleasure Principle', zh: '《超越快乐原则》' },
        year: 1920,
      },
      {
        text: {
          en: 'We are never so defenseless against suffering as when we love.',
          zh: '我们在爱的时候最没有防御力去对抗痛苦。',
        },
        original: 'Gegen das Leiden sind wir niemals so schutzlos, als wenn wir lieben.',
        originalLang: 'de',
        source: { en: 'Civilization and Its Discontents', zh: '《文明及其不满》' },
        year: 1930,
      },
      {
        text: {
          en: 'In the depths of my heart I can\'t help being convinced that my dear fellow men, with a few exceptions, are worthless.',
          zh: '在内心深处，除了少数例外，我无法不认为我亲爱的同胞们是毫无价值的。',
        },
        originalLang: 'de',
        source: { en: 'Letter to Lou Andreas-Salomé', zh: '致卢·安德烈亚斯-萨洛梅的信' },
        year: 1929,
      },
      {
        text: {
          en: 'The ego is not master in its own house. The mind is like an iceberg — it floats with one-seventh of its bulk above water. What is visible in mental life is only the surface; the great mass of psychical activity takes place below the threshold of consciousness.',
          zh: '自我在自己的房屋中并非主人。心灵如同冰山——七分之一浮在水面之上。精神生活中可见的只是表面；大量的心理活动发生在意识的阈限之下。',
        },
        original: 'Das Ich ist nicht Herr im eigenen Hause.',
        originalLang: 'de',
        source: { en: 'A Difficulty in the Path of Psycho-Analysis', zh: '《精神分析道路上的一个困难》' },
        year: 1917,
      },
    ],
  },
  {
    slug: 'carl-jung',
    name: { en: 'Carl Jung', zh: '卡尔·荣格' },
    years: '1875–1961',
    nationality: { en: 'Swiss', zh: '瑞士' },
    bio: {
      en: 'Psychiatrist and psychoanalyst who founded analytical psychology, introducing concepts like the collective unconscious, archetypes, and individuation.',
      zh: '精神病学家和精神分析学家，创立了分析心理学，提出了集体无意识、原型和个体化等概念。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Carl_Jung',
      zh: 'https://zh.wikipedia.org/wiki/卡尔·荣格',
    },
    quotes: [
      {
        text: {
          en: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
          zh: '除非你让无意识变成有意识，否则它将主宰你的生活，而你称之为命运。',
        },
        original: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
        comment: {
          en: 'One of the most widely cited "Jung quotes" on the internet, but this exact formulation has never been located in any of Jung\'s published works, collected works, or verified correspondence.',
          zh: '互联网上最广泛引用的"荣格名言"之一，但这一确切表述从未在荣格的任何出版著作、全集或已证实的通信中被找到。',
        },
      },
      {
        text: {
          en: 'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.',
          zh: '两种人格的相遇如同两种化学物质的接触：一旦发生反应，两者都会改变。',
        },
        original: 'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.',
        originalLang: 'en',
        source: { en: 'Modern Man in Search of a Soul', zh: '《寻找灵魂的现代人》' },
        year: 1933,
      },
      {
        text: {
          en: 'Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.',
          zh: '只有当你能审视自己的内心时，你的视野才会变得清晰。向外看的人在做梦；向内看的人才能觉醒。',
        },
        original: 'Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.',
        originalLang: 'en',
        source: { en: 'Letters', zh: '书信集' },
      },
      {
        text: {
          en: 'Knowing your own darkness is the best method for dealing with the darknesses of other people.',
          zh: '了解自己的黑暗是应对他人黑暗的最好方法。',
        },
        original: 'Knowing your own darkness is the best method for dealing with the darknesses of other people.',
        originalLang: 'en',
        source: { en: 'Letters', zh: '书信集' },
      },
      {
        text: {
          en: 'Everything that irritates us about others can lead us to an understanding of ourselves.',
          zh: '他人身上一切让我们恼怒的东西，都能引导我们理解自己。',
        },
        original: 'Everything that irritates us about others can lead us to an understanding of ourselves.',
        originalLang: 'en',
        source: { en: 'Memories, Dreams, Reflections', zh: '《回忆·梦·思考》' },
        year: 1963,
      },
      {
        text: {
          en: 'People will do anything, no matter how absurd, to avoid facing their own souls.',
          zh: '人们会做任何事，无论多么荒谬，以避免面对自己的灵魂。',
        },
        original: 'People will do anything, no matter how absurd, to avoid facing their own souls.',
        originalLang: 'en',
        source: { en: 'Psychology and Alchemy', zh: '《心理学与炼金术》' },
        year: 1944,
      },
      {
        text: {
          en: 'Loneliness does not come from having no people about one, but from being unable to communicate the things that seem important to oneself.',
          zh: '孤独不是因为身边没有人，而是因为无法与人交流对自己来说重要的事情。',
        },
        original: 'Loneliness does not come from having no people about one, but from being unable to communicate the things that seem important to oneself.',
        originalLang: 'en',
        source: { en: 'Memories, Dreams, Reflections', zh: '《回忆·梦·思考》' },
        year: 1963,
      },
      {
        text: {
          en: 'The privilege of a lifetime is to become who you truly are. The most terrifying thing is to accept oneself completely. There is no coming to consciousness without pain.',
          zh: '一生的特权就是成为真正的自己。最令人恐惧的事情是完全接受自己。没有痛苦，就没有意识的觉醒。',
        },
        originalLang: 'en',
        source: { en: 'Collected Works of C.G. Jung, Volume 9', zh: '《荣格全集》第九卷' },
        year: 1959,
      },
      {
        text: {
          en: 'The shoe that fits one person pinches another; there is no recipe for living that suits all cases. Each of us carries his own life-form — an indeterminable form which cannot be superseded by any other.',
          zh: '适合一个人的鞋子却夹另一个人的脚；没有一种生活方式适合所有情况。我们每个人都承载着自己的生命形式——一种不确定的形式，无法被任何其他形式所取代。',
        },
        original: 'The shoe that fits one person pinches another; there is no recipe for living that suits all cases.',
        originalLang: 'en',
        source: { en: 'Modern Man in Search of a Soul', zh: '《寻找灵魂的现代人》' },
        year: 1933,
      },
    ],
  },
  {
    slug: 'viktor-frankl',
    name: { en: 'Viktor Frankl', zh: '维克多·弗兰克尔' },
    years: '1905–1997',
    nationality: { en: 'Austrian', zh: '奥地利' },
    bio: {
      en: 'Psychiatrist and Holocaust survivor who founded logotherapy, arguing that the search for meaning is the primary motivation of human life.',
      zh: '精神病学家和大屠杀幸存者，创立了意义疗法，认为寻找意义是人生的首要动力。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Viktor_Frankl',
      zh: 'https://zh.wikipedia.org/wiki/維克多·弗蘭克',
    },
    quotes: [
      {
        text: {
          en: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
          zh: '当我们无法改变处境时，我们就面临着改变自己的挑战。',
        },
        original: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: "Man's Search for Meaning",
          zh: '《活出生命的意义》',
        },
        year: 1946,
      },
      {
        text: {
          en: 'He who has a why to live for can bear almost any how.',
          zh: '知道为什么而活的人，几乎能承受任何怎样活。',
        },
        original: 'He who has a why to live for can bear almost any how.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: "Man's Search for Meaning, quoting Nietzsche",
          zh: '《活出生命的意义》，引用尼采',
        },
        year: 1946,
      },
      {
        text: {
          en: 'Everything can be taken from a man but one thing: the last of the human freedoms — to choose one\'s attitude in any given set of circumstances.',
          zh: '人可以被夺走一切，但有一样东西除外：人类最后的自由——在任何给定的环境中选择自己的态度。',
        },
        original: 'Everything can be taken from a man but one thing: the last of the human freedoms — to choose one\'s attitude in any given set of circumstances.',
        originalLang: 'en',
        source: { en: "Man's Search for Meaning", zh: '《活出生命的意义》' },
        year: 1946,
      },
      {
        text: {
          en: 'For the meaning of life differs from man to man, from day to day and from hour to hour.',
          zh: '生命的意义因人而异，因日而异，因时而异。',
        },
        original: 'For the meaning of life differs from man to man, from day to day and from hour to hour.',
        originalLang: 'en',
        source: { en: "Man's Search for Meaning", zh: '《活出生命的意义》' },
        year: 1946,
      },
      {
        text: {
          en: 'An abnormal reaction to an abnormal situation is normal behavior.',
          zh: '对异常情境的异常反应是正常行为。',
        },
        original: 'Eine abnormale Reaktion auf eine abnormale Situation ist normales Verhalten.',
        originalLang: 'de',
        source: { en: "Man's Search for Meaning", zh: '《活出生命的意义》' },
        year: 1946,
      },
      {
        text: {
          en: 'Happiness cannot be pursued; it must ensue.',
          zh: '幸福不能追求；它必须自然产生。',
        },
        original: 'Happiness cannot be pursued; it must ensue.',
        originalLang: 'en',
        source: { en: "Man's Search for Meaning", zh: '《活出生命的意义》' },
        year: 1946,
      },
      {
        text: {
          en: 'Life is never made unbearable by circumstances, but only by lack of meaning and purpose. What is to give light must endure burning.',
          zh: '使生活变得无法忍受的从来不是环境，而只是意义和目的的缺失。要发光的东西必须承受燃烧。',
        },
        originalLang: 'en',
        source: { en: "Man's Search for Meaning", zh: '《活出生命的意义》' },
        year: 1946,
      },
    ],
  },
  {
    slug: 'oliver-sacks',
    name: { en: 'Oliver Sacks', zh: '奥利弗·萨克斯' },
    years: '1933–2015',
    nationality: { en: 'British-American', zh: '英裔美国人' },
    bio: {
      en: 'Neurologist and author whose compassionate case studies explored how the brain shapes identity, perception, and the human experience.',
      zh: '神经学家和作家，以充满同理心的病例研究探索大脑如何塑造身份、感知和人类体验。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Oliver_Sacks',
      zh: 'https://zh.wikipedia.org/wiki/奥利弗·萨克斯',
    },
    quotes: [
      {
        text: {
          en: 'Every act of perception is to some degree an act of creation, and every act of memory is to some degree an act of imagination.',
          zh: '每一次感知在某种程度上都是一次创造，每一次记忆在某种程度上都是一次想象。',
        },
        original: 'Every act of perception is to some degree an act of creation, and every act of memory is to some degree an act of imagination.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Musicophilia: Tales of Music and the Brain',
          zh: '《音乐嗜好症：音乐与大脑的故事》',
        },
        year: 2007,
      },
      {
        text: {
          en: 'In examining disease, we gain wisdom about anatomy and physiology and biology. In examining the person with disease, we gain wisdom about life.',
          zh: '研究疾病，我们获得关于解剖学、生理学和生物学的智慧。研究患病的人，我们获得关于生命的智慧。',
        },
        original: 'In examining disease, we gain wisdom about anatomy and physiology and biology. In examining the person with disease, we gain wisdom about life.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Man Who Mistook His Wife for a Hat',
          zh: '《错把太太当帽子的人》',
        },
        year: 1985,
      },
      {
        text: {
          en: 'There is no one so ill that he or she cannot be reached. Everyone, even the most devastated, has a deep need to tell the story of their lives, to compose a narrative, and this act of composing is itself an act of reclaiming identity.',
          zh: '没有任何人病重到无法被触及。每个人，即使是最受摧残的人，都有讲述自己生命故事、编织叙事的深层需要，而这种编织的行为本身就是重建身份认同的行为。',
        },
        originalLang: 'en',
        source: {
          en: 'The Man Who Mistook His Wife for a Hat',
          zh: '《错把太太当帽子的人》',
        },
        year: 1985,
      },
      {
        text: {
          en: 'Above all, I have been a sentient being, a thinking animal, on this beautiful planet, and that in itself has been an enormous privilege and adventure.',
          zh: '最重要的是，我一直是这个美丽星球上一个有知觉的生命、一个思考的动物，这本身就是一种巨大的特权和冒险。',
        },
        originalLang: 'en',
        source: {
          en: 'Gratitude',
          zh: '《感恩》',
        },
        year: 2015,
      },
    ],
  },
  {
    slug: 'erich-fromm',
    name: { en: 'Erich Fromm', zh: '埃里希·弗洛姆' },
    years: '1900–1980',
    nationality: { en: 'German-American', zh: '德裔美国人' },
    bio: {
      en: 'Psychoanalyst and social philosopher who explored the interplay of psychology, society, and freedom in works like The Art of Loving and Escape from Freedom.',
      zh: '精神分析学家和社会哲学家，在《爱的艺术》和《逃避自由》等著作中探索了心理学、社会与自由的交汇。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Erich_Fromm',
      zh: 'https://zh.wikipedia.org/wiki/埃里希·弗洛姆',
    },
    quotes: [
      {
        text: {
          en: 'Love is the only sane and satisfactory answer to the problem of human existence.',
          zh: '爱是人类存在问题的唯一理智而令人满意的答案。',
        },
        original: 'Love is the only sane and satisfactory answer to the problem of human existence.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Art of Loving',
          zh: '《爱的艺术》',
        },
        year: 1956,
      },
      {
        text: {
          en: 'Man\'s main task in life is to give birth to himself, to become what he potentially is.',
          zh: '人一生中的主要任务是诞生自己，成为他潜在可能成为的那个人。',
        },
        original: 'Man\'s main task in life is to give birth to himself, to become what he potentially is.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Man for Himself',
          zh: '《为自己的人》',
        },
        year: 1947,
      },
      {
        text: {
          en: 'To die is poignantly bitter, but the idea of having to die without having lived is unbearable.',
          zh: '死亡是令人痛苦的，但想到没有真正活过就要死去，那是无法忍受的。',
        },
        original: 'To die is poignantly bitter, but the idea of having to die without having lived is unbearable.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Man for Himself',
          zh: '《为自己的人》',
        },
        year: 1947,
      },
      {
        text: {
          en: 'The danger of the past was that men became slaves. The danger of the future is that men may become robots. True enough, robots do not rebel. But given man\'s nature, robots cannot live and remain sane.',
          zh: '过去的危险是人成为奴隶。未来的危险是人可能成为机器人。确实，机器人不会反叛。但鉴于人的本性，机器人无法活着并保持理智。',
        },
        original: 'The danger of the past was that men became slaves. The danger of the future is that men may become robots.',
        originalLang: 'en',
        source: {
          en: 'The Sane Society',
          zh: '《健全的社会》',
        },
        year: 1955,
      },
      {
        text: {
          en: 'Immature love says: "I love you because I need you." Mature love says: "I need you because I love you." Love is not primarily a relationship to a specific person; it is an attitude, an orientation of character which determines the relatedness of a person to the world as a whole.',
          zh: '不成熟的爱说："我爱你，因为我需要你。"成熟的爱说："我需要你，因为我爱你。"爱首先不是对某个特定人的关系；它是一种态度、一种性格的定向，决定了一个人与整个世界的关联方式。',
        },
        original: 'Immature love says: "I love you because I need you." Mature love says: "I need you because I love you."',
        originalLang: 'en',
        source: {
          en: 'The Art of Loving',
          zh: '《爱的艺术》',
        },
        year: 1956,
      },
    ],
  },
  {
    slug: 'jacques-lacan',
    name: { en: 'Jacques Lacan', zh: '雅克·拉康' },
    years: '1901–1981',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'Psychoanalyst who reinterpreted Freud through structural linguistics, profoundly influencing contemporary thought on language, desire, and subjectivity.',
      zh: '精神分析学家，通过结构语言学重新解读弗洛伊德，深刻影响了当代关于语言、欲望和主体性的思想。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Jacques_Lacan',
      zh: 'https://zh.wikipedia.org/wiki/雅克·拉康',
    },
    quotes: [
      {
        text: {
          en: 'The unconscious is structured like a language.',
          zh: '无意识的结构犹如一种语言。',
        },
        original: 'L\'inconscient est structuré comme un langage.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'The Four Fundamental Concepts of Psycho-analysis',
          zh: '《精神分析的四个基本概念》',
        },
        year: 1973,
      },
      {
        text: {
          en: 'Desire is the desire of the Other.',
          zh: '欲望是他者的欲望。',
        },
        original: 'Le désir de l\'homme est le désir de l\'Autre.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'Ecrits',
          zh: '《文集》',
        },
        year: 1966,
      },
    ],
  },
  {
    slug: 'abraham-maslow',
    name: { en: 'Abraham Maslow', zh: '亚伯拉罕·马斯洛' },
    years: '1908–1970',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Psychologist best known for his hierarchy of needs theory and his pioneering work in humanistic psychology and self-actualization.',
      zh: '心理学家，以需求层次理论闻名，在人本主义心理学和自我实现领域做出了开创性贡献。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Abraham_Maslow',
      zh: 'https://zh.wikipedia.org/wiki/亚伯拉罕·马斯洛',
    },
    quotes: [
      {
        text: {
          en: 'If the only tool you have is a hammer, it is tempting to treat everything as if it were a nail.',
          zh: '如果你手中唯一的工具是锤子，你就会倾向于把一切都当成钉子。',
        },
        original: 'If the only tool you have is a hammer, it is tempting to treat everything as if it were a nail.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Psychology of Science',
          zh: '《科学心理学》',
        },
        year: 1966,
      },
      {
        text: {
          en: 'What a man can be, he must be. This need we call self-actualization.',
          zh: '一个人能成为什么，他就必须成为什么。这种需求我们称之为自我实现。',
        },
        original: 'What a man can be, he must be. This need we call self-actualization.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Motivation and Personality',
          zh: '《动机与人格》',
        },
        year: 1954,
      },
    ],
  },
  {
    slug: 'carl-rogers',
    name: { en: 'Carl Rogers', zh: '卡尔·罗杰斯' },
    years: '1902–1987',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Psychologist who developed person-centered therapy, emphasizing empathy, unconditional positive regard, and the inherent tendency toward growth.',
      zh: '心理学家，发展了以人为中心的治疗方法，强调共情、无条件积极关注和人固有的成长倾向。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Carl_Rogers',
      zh: 'https://zh.wikipedia.org/wiki/卡尔·罗杰斯',
    },
    quotes: [
      {
        text: {
          en: 'The curious paradox is that when I accept myself just as I am, then I can change.',
          zh: '奇妙的悖论在于，当我接受真实的自己时，我反而能够改变。',
        },
        original: 'The curious paradox is that when I accept myself just as I am, then I can change.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'On Becoming a Person',
          zh: '《成为一个人》',
        },
        year: 1961,
      },
      {
        text: {
          en: 'The only person who is educated is the one who has learned how to learn and change.',
          zh: '唯一受过教育的人，是学会了如何学习和改变的人。',
        },
        original: 'The only person who is educated is the one who has learned how to learn and change.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Freedom to Learn',
          zh: '《学习的自由》',
        },
        year: 1969,
      },
    ],
  },
  {
    slug: 'rollo-may',
    name: { en: 'Rollo May', zh: '罗洛·梅' },
    years: '1909–1994',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Existential psychologist who explored anxiety, creativity, and the human will, bridging European existential philosophy and American psychology.',
      zh: '存在主义心理学家，探索焦虑、创造力和人的意志，架起了欧洲存在哲学与美国心理学之间的桥梁。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Rollo_May',
      zh: 'https://zh.wikipedia.org/wiki/罗洛·梅',
    },
    quotes: [
      {
        text: {
          en: 'The opposite of courage in our society is not cowardice, it is conformity.',
          zh: '在我们的社会中，勇气的反面不是怯懦，而是从众。',
        },
        original: 'The opposite of courage in our society is not cowardice, it is conformity.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Courage to Create',
          zh: '《创造的勇气》',
        },
        year: 1975,
      },
      {
        text: {
          en: 'Creativity requires the courage to let go of certainties.',
          zh: '创造力需要放弃确定性的勇气。',
        },
        original: 'Creativity requires the courage to let go of certainties.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Courage to Create',
          zh: '《创造的勇气》',
        },
        year: 1975,
      },
      {
        text: {
          en: 'Depression is the inability to construct a future. It is not merely the excess of suffering but the inability to imagine that this condition will end, the conviction that no action of one\'s own can alter the situation.',
          zh: '抑郁是无法构建未来的状态。它不仅仅是痛苦的过度，更是无法想象这种状况会结束、确信自己的任何行动都无法改变处境。',
        },
        original: 'Depression is the inability to construct a future.',
        originalLang: 'en',
        source: {
          en: 'Love and Will',
          zh: '《爱与意志》',
        },
        year: 1969,
      },
      {
        text: {
          en: 'It is an ironic habit of human beings to run faster when they have lost their way. Anxiety is the experience of the threat of imminent nonbeing.',
          zh: '人类有一种讽刺性的习惯：迷路时反而跑得更快。焦虑是对即将到来的非存在之威胁的体验。',
        },
        original: 'It is an ironic habit of human beings to run faster when they have lost their way.',
        originalLang: 'en',
        source: {
          en: 'The Meaning of Anxiety',
          zh: '《焦虑的意义》',
        },
        year: 1950,
      },
    ],
  },
  {
    slug: 'jean-piaget',
    name: { en: 'Jean Piaget', zh: '让·皮亚杰' },
    years: '1896–1980',
    nationality: { en: 'Swiss', zh: '瑞士' },
    bio: {
      en: 'Developmental psychologist whose theory of cognitive development transformed our understanding of how children think and learn.',
      zh: '发展心理学家，其认知发展理论彻底改变了我们对儿童如何思考和学习的理解。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Jean_Piaget',
      zh: 'https://zh.wikipedia.org/wiki/让·皮亚杰',
    },
    quotes: [
      {
        text: {
          en: 'The principal goal of education in the schools should be creating men and women who are capable of doing new things, not simply repeating what other generations have done.',
          zh: '学校教育的主要目标应该是培养能做新事情的人，而不是简单地重复前人所做的事。',
        },
        original: 'The principal goal of education in the schools should be creating men and women who are capable of doing new things, not simply repeating what other generations have done.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'Intelligence is what you use when you don\'t know what to do.',
          zh: '智力就是在你不知道该怎么做的时候所运用的东西。',
        },
        original: 'Intelligence is what you use when you don\'t know what to do.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
    ],
  },
  {
    slug: 'daniel-kahneman',
    name: { en: 'Daniel Kahneman', zh: '丹尼尔·卡内曼' },
    years: '1934–2024',
    nationality: { en: 'Israeli-American', zh: '以色列裔美国人' },
    bio: {
      en: 'Psychologist who won the Nobel Prize in Economics for his work on cognitive biases, heuristics, and the psychology of judgment and decision-making.',
      zh: '心理学家，因在认知偏差、启发法和判断决策心理学方面的研究获诺贝尔经济学奖。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Daniel_Kahneman',
      zh: 'https://zh.wikipedia.org/wiki/丹尼尔·卡内曼',
    },
    quotes: [
      {
        text: {
          en: 'Nothing in life is as important as you think it is, while you are thinking about it.',
          zh: '生活中没有什么事情像你正在想它的时候那样重要。',
        },
        original: 'Nothing in life is as important as you think it is, while you are thinking about it.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Thinking, Fast and Slow',
          zh: '《思考，快与慢》',
        },
        year: 2011,
      },
      {
        text: {
          en: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.',
          zh: '让人们相信谬误的一个可靠方法是频繁重复，因为熟悉感和真实感不容易区分。',
        },
        original: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Thinking, Fast and Slow',
          zh: '《思考，快与慢》',
        },
        year: 2011,
      },
    ],
  },
  {
    slug: 'irvin-yalom',
    name: { en: 'Irvin Yalom', zh: '欧文·亚隆' },
    years: '1931–',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Existential psychiatrist and author whose novels and textbooks have made psychotherapy vivid and accessible to millions of readers.',
      zh: '存在主义精神病学家和作家，其小说和教科书让心理治疗对数百万读者变得生动可及。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Irvin_D._Yalom',
      zh: 'https://zh.wikipedia.org/wiki/欧文·亚隆',
    },
    quotes: [
      {
        text: {
          en: 'The awareness of death is the worm at the core of the human condition.',
          zh: '对死亡的意识是人类处境核心中的蛀虫。',
        },
        original: 'The awareness of death is the worm at the core of the human condition.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Staring at the Sun: Overcoming the Terror of Death',
          zh: '《直视骄阳：征服死亡恐惧》',
        },
        year: 2008,
      },
      {
        text: {
          en: 'Ultimately, we must each find our own way, and that is the existential challenge of life.',
          zh: '最终，我们每个人都必须找到自己的路，这就是生命的存在主义挑战。',
        },
        original: 'Ultimately, we must each find our own way, and that is the existential challenge of life.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Love\'s Executioner',
          zh: '《爱情刽子手》',
        },
        year: 1989,
      },
    ],
  },
  {
    slug: 'bf-skinner',
    name: { en: 'B.F. Skinner', zh: 'B·F·斯金纳' },
    years: '1904–1990',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Psychologist who developed the theory of operant conditioning and radical behaviorism, becoming one of the most influential psychologists of the 20th century.',
      zh: '心理学家，发展了操作性条件反射理论和激进行为主义，成为20世纪最有影响力的心理学家之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/B._F._Skinner',
      zh: 'https://zh.wikipedia.org/wiki/伯尔赫斯·弗雷德里克·斯金纳',
    },
    quotes: [
      {
        text: {
          en: 'The real problem is not whether machines think but whether men do.',
          zh: '真正的问题不是机器是否会思考，而是人类是否在思考。',
        },
        original: 'The real problem is not whether machines think but whether men do.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Contingencies of Reinforcement',
          zh: '《强化的偶然性》',
        },
        year: 1969,
      },
      {
        text: {
          en: 'Education is what survives when what has been learned has been forgotten.',
          zh: '教育就是当所学的一切被遗忘之后所剩下的东西。',
        },
        original: 'Education is what survives when what has been learned has been forgotten.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'New Scientist',
          zh: '《新科学家》',
        },
        year: 1964,
      },
    ],
  },
  {
    slug: 'donald-winnicott',
    name: { en: 'Donald Winnicott', zh: '唐纳德·温尼科特' },
    years: '1896–1971',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Pediatrician and psychoanalyst who explored the mother-child relationship and introduced concepts like the "good enough mother" and the transitional object.',
      zh: '儿科医生和精神分析学家，探索了母子关系，提出了"足够好的母亲"和过渡性客体等概念。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Donald_Winnicott',
      zh: 'https://zh.wikipedia.org/wiki/唐纳德·温尼科特',
    },
    quotes: [
      {
        text: {
          en: 'It is a joy to be hidden, and disaster not to be found.',
          zh: '隐藏是一种快乐，但不被发现则是一场灾难。',
        },
        original: 'It is a joy to be hidden, and disaster not to be found.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Playing and Reality',
          zh: '《游戏与现实》',
        },
        year: 1971,
      },
      {
        text: {
          en: 'It is in playing and only in playing that the individual child or adult is able to be creative and to use the whole personality.',
          zh: '只有在游戏中，无论是儿童还是成人，才能发挥创造力，运用完整的人格。',
        },
        original: 'It is in playing and only in playing that the individual child or adult is able to be creative and to use the whole personality.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Playing and Reality',
          zh: '《游戏与现实》',
        },
        year: 1971,
      },
    ],
  },
  {
    slug: 'william-james',
    name: { en: 'William James', zh: '威廉·詹姆斯' },
    years: '1842–1910',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Philosopher and psychologist who founded American pragmatism and pioneered the scientific study of consciousness, religious experience, and the will.',
      zh: '哲学家与心理学家，美国实用主义的奠基人，开创了对意识、宗教经验与意志的科学研究。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/William_James',
      zh: 'https://zh.wikipedia.org/wiki/威廉·詹姆斯',
    },
    quotes: [
      {
        text: {
          en: 'The greatest discovery of my generation is that a human being can alter his life by altering his attitudes of mind.',
          zh: '我这一代人最伟大的发现是：人可以通过改变心态来改变自己的人生。',
        },
        originalLang: 'en',
        source: { en: 'Attributed', zh: '格言' },
      },
      {
        text: {
          en: 'The stream of thinking is not a chain of discrete ideas, but a continuous flow in which every image, feeling, and thought melts into the next. Consciousness does not appear to itself chopped up in bits; it flows.',
          zh: '思维之流并非一串离散的观念，而是一种连续的流动，其中每一个意象、感受和思想都融入下一个。意识在自身看来并非被切割成碎片；它是流动的。',
        },
        originalLang: 'en',
        source: { en: 'The Principles of Psychology', zh: '《心理学原理》' },
        year: 1890,
      },
      {
        text: {
          en: 'Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. The "will to believe" is not a license for wishful thinking — it is a recognition that in matters where evidence is ambiguous, our commitment shapes the outcome.',
          zh: '不要惧怕生活。相信生活值得一过，你的信念将帮助创造这一事实。"信仰的意志"并非为一厢情愿开脱，而是承认在证据模糊的事务中，我们的投入塑造着结果。',
        },
        originalLang: 'en',
        source: { en: 'The Will to Believe', zh: '《信仰的意志》' },
        year: 1897,
      },
      {
        text: {
          en: 'The art of being wise is the art of knowing what to overlook.',
          zh: '智慧的艺术就是知道该忽略什么的艺术。',
        },
        originalLang: 'en',
        source: { en: 'The Principles of Psychology', zh: '《心理学原理》' },
        year: 1890,
      },
      {
        text: {
          en: 'There is no more miserable human being than one in whom nothing is habitual but indecision, and for whom the lighting of every cigar, the drinking of every cup, the time of rising and going to bed every day, and the beginning of every bit of work, are subjects of express volitional deliberation.',
          zh: '没有比这样的人更可悲的了——除了优柔寡断之外一无所习，每点一支雪茄、每喝一杯水、每天起床和就寝的时间、每一项工作的开始，都要经过明确的意志审议。',
        },
        originalLang: 'en',
        source: { en: 'The Principles of Psychology', zh: '《心理学原理》' },
        year: 1890,
      },
      {
        text: {
          en: 'A great many people think they are thinking when they are merely rearranging their prejudices.',
          zh: '很多人以为自己在思考，其实不过是在重新排列自己的偏见。',
        },
        originalLang: 'en',
        source: { en: 'Attributed, various lectures', zh: '出自多次演讲' },
      },
    ],
  },
  {
    slug: 'lev-vygotsky',
    name: { en: 'Lev Vygotsky', zh: '列夫·维果茨基' },
    years: '1896–1934',
    nationality: { en: 'Soviet', zh: '苏联' },
    bio: {
      en: 'Developmental psychologist whose theory of the social origins of mind and the zone of proximal development transformed our understanding of learning, language, and cognitive growth.',
      zh: '发展心理学家，其关于心智社会起源和最近发展区的理论深刻改变了人们对学习、语言和认知发展的理解。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Lev_Vygotsky',
      zh: 'https://zh.wikipedia.org/wiki/利維·維谷斯基',
    },
    quotes: [
      {
        text: {
          en: 'Every function in the child\'s cultural development appears twice: first, on the social level, and later, on the individual level; first, between people, and then inside the child.',
          zh: '儿童文化发展中的每一种功能都出现两次：首先在社会层面，然后在个体层面；首先在人与人之间，然后在儿童内部。',
        },
        original: 'Каждая функция в культурном развитии ребёнка появляется на сцене дважды: сперва в социальном плане, потом — в психологическом.',
        originalLang: 'ru',
        source: { en: 'Mind in Society', zh: '《社会中的心智》' },
        year: 1978,
      },
      {
        text: {
          en: 'What a child can do today with assistance, she will be able to do by herself tomorrow.',
          zh: '儿童今天在帮助下能做到的事，明天就能独立完成。',
        },
        original: 'То, что ребёнок сегодня делает с помощью, завтра он сумеет сделать самостоятельно.',
        originalLang: 'ru',
        source: { en: 'Mind in Society', zh: '《社会中的心智》' },
        year: 1978,
      },
      {
        text: {
          en: 'Thought is not merely expressed in words; it comes into existence through them. Every thought tends to connect something with something else, to establish a relationship between things.',
          zh: '思想不仅仅通过语言来表达；它通过语言而存在。每一种思想都倾向于将某物与另一物联系起来，在事物之间建立关系。',
        },
        original: 'Мысль не выражается в слове, но совершается в нём.',
        originalLang: 'ru',
        source: { en: 'Thought and Language', zh: '《思维与语言》' },
        year: 1934,
      },
      {
        text: {
          en: 'Learning awakens a variety of internal developmental processes that are able to operate only when the child is interacting with people in his environment and in cooperation with his peers.',
          zh: '学习唤醒了各种内在的发展过程，这些过程只有在儿童与周围人互动、与同伴合作时才能运作。',
        },
        original: 'Обучение пробуждает разнообразные внутренние процессы развития, которые способны действовать только тогда, когда ребёнок взаимодействует с окружающими.',
        originalLang: 'ru',
        source: { en: 'Mind in Society', zh: '《社会中的心智》' },
        year: 1978,
      },
      {
        text: {
          en: 'The child begins to perceive the world not only through his eyes but also through his speech. As a result, the immediacy of "natural" perception is supplanted by a complex mediated process.',
          zh: '儿童开始不仅通过眼睛而且通过言语来感知世界。由此，"自然"感知的直接性被一个复杂的中介过程所取代。',
        },
        original: 'Ребёнок начинает воспринимать мир не только через глаза, но и через речь.',
        originalLang: 'ru',
        source: { en: 'Thought and Language', zh: '《思维与语言》' },
        year: 1934,
      },
      {
        text: {
          en: 'A word devoid of thought is a dead thing, and a thought unembodied in words remains a shadow.',
          zh: '没有思想的词语是死的东西，未化为言语的思想不过是一道影子。',
        },
        original: 'Слово, лишённое мысли, есть мёртвая вещь, а мысль, не воплощённая в слове, остаётся тенью.',
        originalLang: 'ru',
        source: { en: 'Thought and Language', zh: '《思维与语言》' },
        year: 1934,
      },
    ],
  },
  {
    slug: 'stanley-milgram',
    name: { en: 'Stanley Milgram', zh: '斯坦利·米尔格拉姆' },
    years: '1933–1984',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Social psychologist whose obedience experiments revealed the alarming ease with which ordinary people can be led to inflict harm under authority, reshaping our understanding of conformity and moral agency.',
      zh: '社会心理学家，其服从实验揭示了普通人在权威指令下施加伤害的惊人容易程度，重塑了人们对从众与道德主体性的认识。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Stanley_Milgram',
      zh: 'https://zh.wikipedia.org/wiki/斯坦利·米尔格拉姆',
    },
    quotes: [
      {
        text: {
          en: 'The disappearance of a sense of responsibility is the most far-reaching consequence of submission to authority.',
          zh: '责任感的消失是服从权威最深远的后果。',
        },
        originalLang: 'en',
        source: { en: 'Obedience to Authority', zh: '《服从权威》' },
        year: 1974,
      },
      {
        text: {
          en: 'Ordinary people, simply doing their jobs, and without any particular hostility on their part, can become agents in a terrible destructive process. Moreover, even when the destructive effects of their work become patently clear, and they are asked to carry out actions incompatible with fundamental standards of morality, relatively few people have the resources needed to resist authority.',
          zh: '普通人只是在做本职工作，他们自身并无任何特别的敌意，却能成为可怕的毁灭性过程中的工具。而且，即使当他们工作的破坏性后果变得显而易见，即使他们被要求执行与基本道德准则不相容的行为，也只有极少数人拥有抵抗权威所需的资源。',
        },
        originalLang: 'en',
        source: { en: 'Obedience to Authority', zh: '《服从权威》' },
        year: 1974,
      },
      {
        text: {
          en: 'It may be that we are puppets — puppets controlled by the strings of society. But at least we are puppets with perception, with awareness. And perhaps our awareness is the first step to our liberation.',
          zh: '也许我们是提线木偶——被社会的绳线操控。但至少我们是有感知、有意识的木偶。而也许，这意识就是我们通向解放的第一步。',
        },
        originalLang: 'en',
        source: { en: 'Obedience to Authority', zh: '《服从权威》' },
        year: 1974,
      },
      {
        text: {
          en: 'The essence of obedience consists in the fact that a person comes to view himself as the instrument for carrying out another person\'s wishes, and he therefore no longer regards himself as responsible for his actions.',
          zh: '服从的本质在于：一个人开始将自己视为执行他人意愿的工具，因此不再把自己看作行为的责任人。',
        },
        originalLang: 'en',
        source: { en: 'Obedience to Authority', zh: '《服从权威》' },
        year: 1974,
      },
      {
        text: {
          en: 'Each individual possesses a conscience which to a greater or lesser degree serves to restrain the unimpeded flow of impulses destructive to others. But when he merges his person into an organizational structure, a new creature replaces autonomous man — unhindered by the limitations of individual morality.',
          zh: '每个人都拥有良知，在不同程度上约束着对他人的破坏性冲动。但当他将自身融入一个组织结构时，一种新的生物取代了自主的人——不再受个体道德的限制。',
        },
        originalLang: 'en',
        source: { en: 'Obedience to Authority', zh: '《服从权威》' },
        year: 1974,
      },
      {
        text: {
          en: 'The social psychology of this century reveals a major lesson: often it is not so much the kind of person a man is as the kind of situation in which he finds himself that determines how he will act.',
          zh: '本世纪的社会心理学揭示了一个重要教训：决定一个人行为方式的，往往不是他是什么样的人，而是他身处什么样的情境。',
        },
        originalLang: 'en',
        source: { en: 'Obedience to Authority', zh: '《服从权威》' },
        year: 1974,
      },
      {
        text: {
          en: 'A substantial proportion of people do what they are told to do, irrespective of the content of the act and without limitations of conscience, so long as they perceive that the command comes from a legitimate authority.',
          zh: '相当大比例的人会按照被告知的去做，不论行为的内容如何，不受良知的限制，只要他们认为命令来自合法的权威。',
        },
        originalLang: 'en',
        source: { en: 'Obedience to Authority', zh: '《服从权威》' },
        year: 1974,
      },
    ],
  },
  {
    slug: 'elisabeth-kubler-ross',
    name: { en: 'Elisabeth Kübler-Ross', zh: '伊丽莎白·库伯勒-罗斯' },
    years: '1926–2004',
    nationality: { en: 'Swiss-American', zh: '瑞士裔美国人' },
    bio: {
      en: 'Psychiatrist who pioneered the study of death and dying, introduced the five stages of grief, and transformed how medicine and society approach mortality.',
      zh: '精神病学家，开创了对死亡与临终的研究，提出悲伤五阶段模型，改变了医学界和社会面对死亡的方式。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Elisabeth_Kübler-Ross',
      zh: 'https://zh.wikipedia.org/wiki/伊丽莎白·库伯勒-罗斯',
    },
    quotes: [
      {
        text: {
          en: 'The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern.',
          zh: '我们所知最美的人，是那些经历过失败、苦难、挣扎和失去，却从深渊中找到出路的人。这些人拥有一种对生命的感悟、敏锐和理解，使他们充满慈悲、温柔与深沉的爱。',
        },
        originalLang: 'en',
        source: { en: 'Death: The Final Stage of Growth', zh: '《死亡：成长的最后阶段》' },
        year: 1975,
      },
      {
        text: {
          en: 'People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in, their true beauty is revealed only if there is a light from within.',
          zh: '人就像彩色玻璃窗。阳光灿烂时它们闪闪发光，但当黑暗降临，只有当内心有一盏灯时，它们真正的美才会显现。',
        },
        originalLang: 'en',
        source: { en: 'Death: The Final Stage of Growth', zh: '《死亡：成长的最后阶段》' },
        year: 1975,
      },
      {
        text: {
          en: 'It is not the end of the physical body that should worry us. Rather, our concern must be to live while we\'re alive — to release our inner selves from the spiritual death that comes with living behind a facade designed to conform to external definitions of who and what we are.',
          zh: '令我们担忧的不应是肉体的终结。我们真正需要关注的是在活着的时候真正地活——将内在自我从精神之死中解放出来，那种精神之死源于我们躲在一个迎合外界定义的面具后面生活。',
        },
        originalLang: 'en',
        source: { en: 'Death: The Final Stage of Growth', zh: '《死亡：成长的最后阶段》' },
        year: 1975,
      },
      {
        text: {
          en: 'There are no mistakes, no coincidences. All events are blessings given to us to learn from.',
          zh: '没有错误，没有巧合。所有事件都是赐予我们的礼物，让我们从中学习。',
        },
        originalLang: 'en',
        source: { en: 'The Wheel of Life', zh: '《生命之轮》' },
        year: 1997,
      },
      {
        text: {
          en: 'The five stages — denial, anger, bargaining, depression, and acceptance — are a part of the framework that makes up our learning to live with the one we lost. They are tools to help us frame and identify what we may be feeling. But they are not stops on some linear timeline in grief.',
          zh: '否认、愤怒、讨价还价、抑郁和接受这五个阶段，是帮助我们学习与失去共处的框架的一部分。它们是帮助我们构建和辨识自身感受的工具，但并非悲伤过程中线性时间轴上的站点。',
        },
        originalLang: 'en',
        source: { en: 'On Grief and Grieving', zh: '《论悲伤与哀悼》' },
        year: 2005,
      },
      {
        text: {
          en: 'I have learned that there is no joy without hardship. There is no pleasure without pain. Would we know the comfort of peace without the distress of war?',
          zh: '我学到了没有苦难就没有喜悦，没有痛苦就没有快乐。若不曾经历战争的苦痛，我们能否体会和平的安慰？',
        },
        originalLang: 'en',
        source: { en: 'The Wheel of Life', zh: '《生命之轮》' },
        year: 1997,
      },
    ],
  },
  {
    slug: 'alice-miller',
    name: { en: 'Alice Miller', zh: '爱丽丝·米勒' },
    years: '1923–2010',
    nationality: { en: 'Polish-Swiss', zh: '波兰裔瑞士人' },
    bio: {
      en: 'Psychologist and author who exposed the hidden violence of "normal" child-rearing and argued that repressed childhood suffering is the root of adult destructiveness.',
      zh: '心理学家与作家，揭露了"正常"教养中隐藏的暴力，认为被压抑的童年苦难是成年人破坏性行为的根源。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Alice_Miller_(psychologist)',
      zh: 'https://zh.wikipedia.org/wiki/愛麗絲·米勒',
    },
    quotes: [
      {
        text: {
          en: 'The truth about our childhood is stored up in our body, and although we can repress it, we can never alter it. Our intellect can be deceived, our feelings manipulated, and conceptions confused, and our body tricked with medication. But someday our body will present its bill.',
          zh: '关于我们童年的真相储存在身体里，虽然我们可以压抑它，但永远无法改变它。我们的智识可以被欺骗，感受可以被操纵，观念可以被混淆，身体可以被药物蒙蔽。但总有一天，身体会提出它的账单。',
        },
        original: 'Die Wahrheit über unsere Kindheit ist in unserem Körper gespeichert, und obwohl wir sie verdrängen können, können wir sie nie verändern.',
        originalLang: 'de',
        source: { en: 'The Drama of the Gifted Child', zh: '《天才儿童的悲剧》' },
        year: 1979,
      },
      {
        text: {
          en: 'Experience has taught us that we have only one enduring weapon in our struggle against mental illness: the emotional discovery of the truth about the unique history of our childhood.',
          zh: '经验告诉我们，在与精神疾病的斗争中，我们只有一件持久的武器：对自己独特童年历史真相的情感发现。',
        },
        original: 'Die Erfahrung lehrt uns, daß wir im Kampf gegen die seelische Erkrankung nur eine einzige dauerhafte Waffe haben: die emotionale Entdeckung der Wahrheit über die einzigartige Geschichte unserer Kindheit.',
        originalLang: 'de',
        source: { en: 'The Drama of the Gifted Child', zh: '《天才儿童的悲剧》' },
        year: 1979,
      },
      {
        text: {
          en: 'Wherever I look, I see signs of the commandment to honor one\'s parents and nowhere of a commandment that calls for the respect of a child.',
          zh: '放眼望去，到处都是孝敬父母的诫命，却无处可见要求尊重孩子的训示。',
        },
        original: 'Wohin ich auch schaue, überall sehe ich Zeichen des Gebots, die Eltern zu ehren, aber nirgends ein Gebot, das den Respekt vor dem Kind verlangt.',
        originalLang: 'de',
        source: { en: 'For Your Own Good', zh: '《为你好》' },
        year: 1980,
      },
      {
        text: {
          en: 'The way we were treated as small children is the way we treat ourselves the rest of our lives: with cruelty or with tenderness and protection.',
          zh: '我们小时候被对待的方式，就是我们余生对待自己的方式：残忍，或者温柔与保护。',
        },
        original: 'So, wie wir als kleine Kinder behandelt wurden, behandeln wir uns selbst für den Rest unseres Lebens.',
        originalLang: 'de',
        source: { en: 'The Drama of the Gifted Child', zh: '《天才儿童的悲剧》' },
        year: 1979,
      },
      {
        text: {
          en: 'If it\'s very painful for you to criticize your friends — you\'re safe in doing it. But if you take the slightest pleasure in it, that\'s the time to hold your tongue.',
          zh: '如果批评朋友让你感到非常痛苦——你可以放心地这样做。但如果你从中获得哪怕一丝快感，那就是你该闭嘴的时候。',
        },
        original: 'Wenn es dir sehr wehtut, deine Freunde zu kritisieren, kannst du es ruhig tun. Aber wenn du auch nur die geringste Freude daran hast, dann halte dich zurück.',
        originalLang: 'de',
        source: { en: 'The Body Never Lies', zh: '《身体不说谎》' },
        year: 2004,
      },
      {
        text: {
          en: 'Disregard for those dependent on us is the root of all other violence. What we do to children, they will do to society.',
          zh: '漠视依赖我们的人，是一切其他暴力的根源。我们对儿童做的事，他们会对社会做。',
        },
        original: 'Die Missachtung der von uns Abhängigen ist die Wurzel aller anderen Gewalt.',
        originalLang: 'de',
        source: { en: 'For Your Own Good', zh: '《为你好》' },
        year: 1980,
      },
      {
        text: {
          en: 'Many people suffer all their lives from this oppressive feeling of guilt, the sense of not having lived up to their parents\' expectations. This guilt is not justified by reality but is the sequel to very early life experiences.',
          zh: '许多人一生都承受着这种压抑的愧疚感，觉得自己辜负了父母的期望。这种愧疚并非现实所证明的，而是早期生命经历的延续。',
        },
        original: 'Viele Menschen leiden ihr Leben lang unter diesem bedrückenden Schuldgefühl, den Erwartungen ihrer Eltern nicht genügt zu haben.',
        originalLang: 'de',
        source: { en: 'The Drama of the Gifted Child', zh: '《天才儿童的悲剧》' },
        year: 1979,
      },
    ],
  },
  {
    slug: 'rd-laing',
    name: { en: 'R.D. Laing', zh: 'R.D. 莱恩' },
    years: '1927–1989',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Psychiatrist who challenged conventional understandings of madness, arguing that psychosis could be a sane response to an insane world and that the family itself could be a crucible of mental disturbance.',
      zh: '精神病学家，挑战了对疯狂的传统理解，认为精神病可以是对疯狂世界的理性回应，而家庭本身可能是精神紊乱的熔炉。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/R._D._Laing',
      zh: 'https://zh.wikipedia.org/wiki/罗纳德·大卫·莱恩',
    },
    quotes: [
      {
        text: {
          en: 'Insanity — a perfectly rational adjustment to an insane world.',
          zh: '疯狂——对一个疯狂世界的完全理性的适应。',
        },
        originalLang: 'en',
        source: { en: 'The Divided Self', zh: '《分裂的自我》' },
        year: 1960,
      },
      {
        text: {
          en: 'The range of what we think and do is limited by what we fail to notice. And because we fail to notice that we fail to notice, there is little we can do to change until we notice how failing to notice shapes our thoughts and deeds.',
          zh: '我们思考和行为的范围受制于我们未能注意到的事物。而因为我们未能注意到我们未能注意到，所以几乎无法改变——直到我们注意到这种"未注意"如何塑造了我们的思想和行为。',
        },
        originalLang: 'en',
        source: { en: 'The Politics of Experience', zh: '《经验的政治学》' },
        year: 1967,
      },
      {
        text: {
          en: 'We live in a moment of history where change is so speeded up that we begin to see the present only when it is already disappearing.',
          zh: '我们生活在历史上变化如此之快的时刻，以至于我们开始看到现在时，它已经在消失了。',
        },
        originalLang: 'en',
        source: { en: 'The Politics of Experience', zh: '《经验的政治学》' },
        year: 1967,
      },
      {
        text: {
          en: 'There is a great deal of pain in life and perhaps the only pain that can be avoided is the pain that comes from trying to avoid pain.',
          zh: '生活中有大量的痛苦，也许唯一可以避免的痛苦，就是来自试图逃避痛苦的痛苦。',
        },
        originalLang: 'en',
        source: { en: 'The Divided Self', zh: '《分裂的自我》' },
        year: 1960,
      },
      {
        text: {
          en: 'Life is a sexually transmitted disease and the mortality rate is one hundred percent.',
          zh: '生命是一种性传播疾病，死亡率百分之百。',
        },
        originalLang: 'en',
        source: { en: 'Attributed, various lectures', zh: '出自多次演讲' },
      },
      {
        text: {
          en: 'The experience and behavior that gets labeled schizophrenic is a special strategy that a person invents in order to live in an unlivable situation.',
          zh: '被贴上精神分裂症标签的体验和行为，是一个人为了在无法生存的处境中生活而发明的特殊策略。',
        },
        originalLang: 'en',
        source: { en: 'The Politics of Experience', zh: '《经验的政治学》' },
        year: 1967,
      },
      {
        text: {
          en: 'We are effectively destroying ourselves by violence masquerading as love.',
          zh: '我们正在以伪装成爱的暴力有效地摧毁自己。',
        },
        originalLang: 'en',
        source: { en: 'The Politics of the Family', zh: '《家庭的政治学》' },
        year: 1971,
      },
    ],
  },
  {
    slug: 'karen-horney',
    name: { en: 'Karen Horney', zh: '卡伦·霍妮' },
    years: '1885–1952',
    nationality: { en: 'German-American', zh: '德裔美国人' },
    bio: {
      en: 'Psychoanalyst who challenged Freudian orthodoxy, argued that neurosis is largely a product of culture rather than biology, and articulated the tyranny of the idealized self-image.',
      zh: '精神分析学家，挑战了弗洛伊德正统学说，认为神经症在很大程度上是文化而非生物的产物，并阐述了理想化自我形象的暴政。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Karen_Horney',
      zh: 'https://zh.wikipedia.org/wiki/卡伦·霍妮',
    },
    quotes: [
      {
        text: {
          en: 'The search for glory is the comprehensive drive to actualize the idealized self. Like any other compulsive drive, it is born of compulsion and aims at the impossible.',
          zh: '对荣耀的追寻是实现理想化自我的全面驱力。像其他任何强迫性驱力一样，它源于强迫，目标却指向不可能之事。',
        },
        originalLang: 'en',
        source: { en: 'Neurosis and Human Growth', zh: '《神经症与人的成长》' },
        year: 1950,
      },
      {
        text: {
          en: 'The tyranny of the should is a peculiarly insidious form of self-coercion. Despising himself for not being what he "should" be, the neurotic person lives in a constant state of inner warfare.',
          zh: '"应该"的暴政是一种特别阴险的自我强迫。因为自己不是"应该"成为的样子而鄙视自己，神经症患者生活在持续的内心交战中。',
        },
        originalLang: 'en',
        source: { en: 'Neurosis and Human Growth', zh: '《神经症与人的成长》' },
        year: 1950,
      },
      {
        text: {
          en: 'Concern should drive us into action, not into a depression. No amount of brooding will achieve the insight or change that flows naturally from genuine self-awareness.',
          zh: '忧虑应该驱使我们行动，而不是陷入抑郁。再多的沉思也无法获得从真正的自我觉察中自然流出的洞察或改变。',
        },
        originalLang: 'en',
        source: { en: 'Our Inner Conflicts', zh: '《我们内心的冲突》' },
        year: 1945,
      },
      {
        text: {
          en: 'The neurotic personality of our time is characterized not by specific symptoms but by a particular kind of inner conflict — a conflict between contradictory sets of values and desires that have been internalized from contradictory cultural demands.',
          zh: '我们时代的神经症人格不以特定症状为特征，而以一种特殊的内在冲突为标志——源自矛盾的文化要求被内化后，相互对立的价值观和欲望之间的冲突。',
        },
        originalLang: 'en',
        source: { en: 'The Neurotic Personality of Our Time', zh: '《我们时代的神经症人格》' },
        year: 1937,
      },
      {
        text: {
          en: 'To find a mountain path all by oneself gives a greater feeling of strength than to take a path that is shown.',
          zh: '独自找到一条山路比走别人指出的路更能给人力量感。',
        },
        originalLang: 'en',
        source: { en: 'Self-Analysis', zh: '《自我分析》' },
        year: 1942,
      },
      {
        text: {
          en: 'Like Prometheus, the neurotic is chained to his rock of compulsion. He does not know that he forged the chains himself, and that it is he who possesses the key.',
          zh: '如同普罗米修斯，神经症患者被锁链锁在强迫的岩石上。他不知道这些锁链是自己锻造的，钥匙也在自己手中。',
        },
        originalLang: 'en',
        source: { en: 'Our Inner Conflicts', zh: '《我们内心的冲突》' },
        year: 1945,
      },
    ],
  },
  {
    slug: 'mihaly-csikszentmihalyi',
    name: { en: 'Mihaly Csikszentmihalyi', zh: '米哈里·契克森米哈伊' },
    years: '1934–2021',
    nationality: { en: 'Hungarian-American', zh: '匈牙利裔美国人' },
    bio: {
      en: 'Psychologist who identified and named the state of "flow" — the condition of complete absorption in an intrinsically rewarding activity — and transformed our understanding of happiness, creativity, and optimal experience.',
      zh: '心理学家，发现并命名了"心流"状态——完全沉浸于内在有价值的活动中的体验，深刻改变了人们对幸福、创造力和最佳体验的认识。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Mihaly_Csikszentmihalyi',
      zh: 'https://zh.wikipedia.org/wiki/米哈里·契克森米哈赖',
    },
    quotes: [
      {
        text: {
          en: 'The best moments in our lives are not the passive, receptive, relaxing times — although such experiences can also be enjoyable, if we have worked hard to attain them. The best moments usually occur when a person\'s body or mind is stretched to its limits in a voluntary effort to accomplish something difficult and worthwhile.',
          zh: '我们生命中最美好的时刻不是被动的、接受性的、放松的时刻——尽管如果我们努力争取，这样的体验也可以令人愉悦。最美好的时刻通常发生在一个人的身体或心智在自愿努力完成某件困难而有价值的事情时被推到极限的时候。',
        },
        originalLang: 'en',
        source: { en: 'Flow: The Psychology of Optimal Experience', zh: '《心流：最优体验心理学》' },
        year: 1990,
      },
      {
        text: {
          en: 'Control of consciousness determines the quality of life.',
          zh: '对意识的掌控决定了生命的质量。',
        },
        originalLang: 'en',
        source: { en: 'Flow: The Psychology of Optimal Experience', zh: '《心流：最优体验心理学》' },
        year: 1990,
      },
      {
        text: {
          en: 'It is when we act freely, for the sake of the action itself rather than for ulterior motives, that we learn to become more than what we were. When we choose a goal and invest ourselves in it to the limits of our concentration, whatever we do will be enjoyable. And once we have tasted this joy, we will redouble our efforts to taste it again.',
          zh: '当我们自由地行动，为行动本身而非为隐秘动机而行动时，我们才学会超越过去的自己。当我们选定一个目标，将自己投入其中直至专注的极限，无论做什么都将是令人愉悦的。而一旦品尝过这种喜悦，我们将加倍努力以再次体验它。',
        },
        originalLang: 'en',
        source: { en: 'Flow: The Psychology of Optimal Experience', zh: '《心流：最优体验心理学》' },
        year: 1990,
      },
      {
        text: {
          en: 'A person who is never bored and never anxious, enjoying every moment of what life brings, would be said to be leading a creative life. Creativity does not depend on inherited talent or on environment; it results from a personal decision to pay attention to what is happening.',
          zh: '一个从不无聊、从不焦虑、享受生命带来的每一刻的人，可以说正在过一种创造性的生活。创造力不取决于天赋或环境；它源于一个关注正在发生之事的个人决定。',
        },
        originalLang: 'en',
        source: { en: 'Creativity: Flow and the Psychology of Discovery and Invention', zh: '《创造力：心流与发现发明心理学》' },
        year: 1996,
      },
      {
        text: {
          en: 'Repression is not the way to virtue. When people restrain themselves out of fear, their lives are by necessity diminished. Only through freely chosen discipline can life be enjoyed and still kept within the bounds of reason.',
          zh: '压抑不是通向美德的道路。当人们出于恐惧而自我约束时，他们的生活必然被削减。只有通过自由选择的纪律，生活才能既被享受又保持在理性的范围内。',
        },
        originalLang: 'en',
        source: { en: 'Flow: The Psychology of Optimal Experience', zh: '《心流：最优体验心理学》' },
        year: 1990,
      },
      {
        text: {
          en: 'Most enjoyable activities are not natural; they demand an effort that initially one is reluctant to make. But once the interaction starts to provide feedback to the person\'s skills, it usually begins to be intrinsically rewarding.',
          zh: '大多数令人愉悦的活动并非自然而然；它们要求一种最初人们不愿付出的努力。但一旦这种互动开始为个人技能提供反馈，它通常就开始具有内在的回报性。',
        },
        originalLang: 'en',
        source: { en: 'Flow: The Psychology of Optimal Experience', zh: '《心流：最优体验心理学》' },
        year: 1990,
      },
    ],
  },
];
