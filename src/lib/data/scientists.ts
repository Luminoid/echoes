import type { PersonData } from './types';

export const scientistData: PersonData[] = [
  {
    slug: 'albert-einstein',
    name: { en: 'Albert Einstein', zh: '阿尔伯特·爱因斯坦' },
    years: '1879–1955',
    nationality: { en: 'German-American', zh: '德裔美国人' },
    bio: {
      en: 'Theoretical physicist who developed the theory of relativity and reshaped our understanding of space, time, and energy.',
      zh: '理论物理学家，提出了相对论，重塑了人类对时空与能量的理解。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Albert_Einstein',
      zh: 'https://zh.wikipedia.org/wiki/阿尔伯特·爱因斯坦',
    },
    quotes: [
      {
        text: {
          en: 'The most incomprehensible thing about the world is that it is comprehensible.',
          zh: '关于这个世界，最不可理解的就是它竟然是可以理解的。',
        },
        original: 'The most incomprehensible thing about the world is that it is comprehensible.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Physics and Reality, Journal of the Franklin Institute',
          zh: '《物理与现实》，富兰克林学会期刊',
        },
        year: 1936,
      },
      {
        text: {
          en: 'God does not play dice with the universe.',
          zh: '上帝不会和宇宙掷骰子。',
        },
        original: 'Gott würfelt nicht.',
        originalLang: 'de',
        originalLocale: 'en',
        source: {
          en: 'Letter to Max Born',
          zh: '致马克斯·玻恩的信',
        },
        year: 1926,
      },
      {
        text: {
          en: 'Everything should be made as simple as possible, but not simpler.',
          zh: '一切都应该尽可能简单，但不能过于简单。',
        },
        original: 'Everything should be made as simple as possible, but not simpler.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Paraphrase of remarks in a 1933 Herbert Spencer Lecture at Oxford',
          zh: '1933年牛津赫伯特·斯宾塞讲座发言的简述',
        },
        year: 1933,
      },
      {
        text: {
          en: 'The important thing is not to stop questioning. Curiosity has its own reason for existing.',
          zh: '重要的是不要停止提问。好奇心有它自身存在的理由。',
        },
        original: 'The important thing is not to stop questioning. Curiosity has its own reason for existing.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'LIFE Magazine, May 1955',
          zh: '《生活》杂志，1955年5月',
        },
        year: 1955,
      },
      {
        text: {
          en: 'I am enough of the artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
          zh: '我足够像一位艺术家，能自由运用我的想象力。想象力比知识更重要。知识是有限的，而想象力环绕着整个世界。',
        },
        original: 'I am enough of the artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
        originalLang: 'en',
        source: {
          en: 'Interview with George Sylvester Viereck, The Saturday Evening Post',
          zh: '乔治·西尔维斯特·维雷克采访，《星期六晚报》',
        },
        year: 1929,
      },
      {
        text: {
          en: 'Science without religion is lame, religion without science is blind.',
          zh: '没有宗教的科学是跛脚的，没有科学的宗教是盲目的。',
        },
        original: 'Science without religion is lame, religion without science is blind.',
        originalLang: 'en',
        source: {
          en: 'Science, Philosophy and Religion: A Symposium',
          zh: '《科学、哲学与宗教：研讨会》',
        },
        year: 1940,
      },
    ],
  },
  {
    slug: 'richard-feynman',
    name: { en: 'Richard Feynman', zh: '理查德·费曼' },
    years: '1918–1988',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Theoretical physicist known for his work in quantum electrodynamics, particle physics, and his extraordinary gift for explaining science.',
      zh: '理论物理学家，以量子电动力学和粒子物理学研究闻名，拥有非凡的科学解释天赋。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Richard_Feynman',
      zh: 'https://zh.wikipedia.org/wiki/理查德·費曼',
    },
    quotes: [
      {
        text: {
          en: 'The first principle is that you must not fool yourself — and you are the easiest person to fool.',
          zh: '第一条原则是你绝不能欺骗自己——而你恰恰是最容易被自己欺骗的人。',
        },
        original: 'The first principle is that you must not fool yourself — and you are the easiest person to fool.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Cargo Cult Science, Caltech commencement address',
          zh: '《货物崇拜科学》，加州理工学院毕业典礼演讲',
        },
        year: 1974,
      },
      {
        text: {
          en: 'What I cannot create, I do not understand.',
          zh: '我不能创造的东西，我就不理解。',
        },
        original: 'What I cannot create, I do not understand.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Written on his blackboard at the time of his death',
          zh: '去世时写在黑板上的话',
        },
        year: 1988,
      },
      {
        text: {
          en: 'I think it\'s much more interesting to live not knowing than to have answers which might be wrong.',
          zh: '我认为活在未知中要比拥有可能错误的答案有趣得多。',
        },
        original: 'I think it\'s much more interesting to live not knowing than to have answers which might be wrong.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Pleasure of Finding Things Out, BBC interview',
          zh: '《发现的乐趣》，BBC采访',
        },
        year: 1981,
      },
      {
        text: {
          en: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.',
          zh: '以最不拘一格、最不敬畏、最原创的方式，努力学习你最感兴趣的东西。',
        },
        original: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Letter to a student',
          zh: '致学生的信',
        },
      },
      {
        text: {
          en: 'Nature uses only the longest threads to weave her patterns, so that each small piece of her fabric reveals the organization of the entire tapestry.',
          zh: '自然只用最长的线来编织她的图案，因此她织物的每一小片都揭示了整幅挂毯的组织。',
        },
        original: 'Nature uses only the longest threads to weave her patterns, so that each small piece of her fabric reveals the organization of the entire tapestry.',
        originalLang: 'en',
        source: { en: 'The Character of Physical Law', zh: '《物理定律的本性》' },
        year: 1965,
      },
    ],
  },
  {
    slug: 'marie-curie',
    name: { en: 'Marie Curie', zh: '玛丽·居里' },
    years: '1867–1934',
    nationality: { en: 'Polish-French', zh: '波兰裔法国人' },
    bio: {
      en: 'Physicist and chemist who pioneered research on radioactivity and became the first person to win Nobel Prizes in two different sciences.',
      zh: '物理学家和化学家，开创了放射性研究，是首位在两个不同科学领域获得诺贝尔奖的人。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Marie_Curie',
      zh: 'https://zh.wikipedia.org/wiki/玛丽·居里',
    },
    quotes: [
      {
        text: {
          en: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
          zh: '生活中没有什么是值得恐惧的，只有需要理解的。现在是理解更多的时候，这样我们才能少一些恐惧。',
        },
        original: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'Be less curious about people and more curious about ideas.',
          zh: '少一些对人的好奇，多一些对思想的好奇。',
        },
        original: 'Be less curious about people and more curious about ideas.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'I was taught that the way of progress was neither swift nor easy.',
          zh: '我被教导进步之路既不迅速也不容易。',
        },
        original: 'I was taught that the way of progress was neither swift nor easy.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Lecture at Vassar College',
          zh: '瓦萨学院演讲',
        },
        year: 1921,
      },
      {
        text: {
          en: 'One never notices what has been done; one can only see what remains to be done.',
          zh: '人们永远注意不到已经做了什么；只能看到还有什么没做。',
        },
        original: 'One never notices what has been done; one can only see what remains to be done.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Letter to her brother, 1894',
          zh: '致兄弟的信，1894年',
        },
        year: 1894,
      },
      {
        text: {
          en: 'I am among those who think that science has great beauty.',
          zh: '我属于那些认为科学有着伟大之美的人。',
        },
        original: 'I am among those who think that science has great beauty.',
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
    slug: 'stephen-hawking',
    name: { en: 'Stephen Hawking', zh: '史蒂芬·霍金' },
    years: '1942–2018',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Theoretical physicist and cosmologist whose work on black holes and the origins of the universe made science accessible to millions.',
      zh: '理论物理学家和宇宙学家，关于黑洞和宇宙起源的研究让数百万人走近科学。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Stephen_Hawking',
      zh: 'https://zh.wikipedia.org/wiki/史蒂芬·霍金',
    },
    quotes: [
      {
        text: {
          en: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
          zh: '我的目标很简单。就是完全理解宇宙——它为什么是这样的，以及它为什么存在。',
        },
        original: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Stephen Hawking\'s Universe (by John Boslough)',
          zh: '《史蒂芬·霍金的宇宙》（约翰·博斯劳夫著）',
        },
        year: 1985,
      },
      {
        text: {
          en: 'Not only does God play dice, but He sometimes throws them where they cannot be seen.',
          zh: '上帝不仅掷骰子，有时还把它们扔到看不见的地方。',
        },
        original: 'Not only does God play dice, but He sometimes throws them where they cannot be seen.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Nature of Space and Time (lecture)',
          zh: '《时空本性》（演讲）',
        },
        year: 1994,
      },
      {
        text: {
          en: 'We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the universe. That makes us something very special.',
          zh: '我们不过是一颗非常普通的恒星的一颗小行星上的一种进化了的猴子。但我们能理解宇宙，这使我们非常特别。',
        },
        original: 'We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the universe. That makes us something very special.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Interview with Der Spiegel',
          zh: '《明镜》周刊采访',
        },
        year: 1988,
      },
    ],
  },
  {
    slug: 'charles-darwin',
    name: { en: 'Charles Darwin', zh: '查尔斯·达尔文' },
    years: '1809–1882',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Naturalist who formulated the theory of evolution by natural selection, transforming our understanding of life on Earth.',
      zh: '博物学家，提出了自然选择进化论，彻底改变了人类对地球生命的理解。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Charles_Darwin',
      zh: 'https://zh.wikipedia.org/wiki/查尔斯·达尔文',
    },
    quotes: [
      {
        text: {
          en: 'From so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.',
          zh: '从如此简单的起点，最美丽、最奇妙的无尽形态已经并正在进化之中。',
        },
        original: 'From so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'On the Origin of Species',
          zh: '《物种起源》',
        },
        year: 1859,
      },
      {
        text: {
          en: 'There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one.',
          zh: '这种生命观有一种庄严之美——最初的生命力被注入少数或仅仅一种形式之中。',
        },
        original: 'There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'On the Origin of Species',
          zh: '《物种起源》',
        },
        year: 1859,
      },
      {
        text: {
          en: 'A man who dares to waste one hour of time has not discovered the value of life.',
          zh: '一个敢于浪费哪怕一小时时间的人，还没有发现生命的价值。',
        },
        original: 'A man who dares to waste one hour of time has not discovered the value of life.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Life and Letters of Charles Darwin',
          zh: '《查尔斯·达尔文生平与书信集》',
        },
        year: 1887,
      },
      {
        text: {
          en: 'The love for all living creatures is the most noble attribute of man.',
          zh: '对所有生灵的爱是人类最崇高的品质。',
        },
        original: 'The love for all living creatures is the most noble attribute of man.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Descent of Man',
          zh: '《人类的由来》',
        },
        year: 1871,
      },
      {
        text: {
          en: 'I am not apt to follow blindly the lead of other men.',
          zh: '我不善于盲目追随他人的引导。',
        },
        original: 'I am not apt to follow blindly the lead of other men.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Autobiography of Charles Darwin',
          zh: '《查尔斯·达尔文自传》',
        },
        year: 1887,
      },
    ],
  },
  {
    slug: 'nikola-tesla',
    name: { en: 'Nikola Tesla', zh: '尼古拉·特斯拉' },
    years: '1856–1943',
    nationality: { en: 'Serbian-American', zh: '塞尔维亚裔美国人' },
    bio: {
      en: 'Inventor and electrical engineer who designed the alternating-current electrical system and envisioned wireless communication decades ahead of his time.',
      zh: '发明家和电气工程师，设计了交流电系统，提前数十年预见了无线通信。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Nikola_Tesla',
      zh: 'https://zh.wikipedia.org/wiki/尼古拉·特斯拉',
    },
    quotes: [
      {
        text: {
          en: 'The present is theirs; the future, for which I really worked, is mine.',
          zh: '现在是他们的；但未来——我真正为之工作的——是我的。',
        },
        original: 'The present is theirs; the future, for which I really worked, is mine.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.',
          zh: '今天的科学家思考得深入而非清晰。一个人必须理智才能清晰地思考，但一个人可以思考得很深入却相当疯狂。',
        },
        original: 'The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Modern Mechanics and Inventions',
          zh: '《现代机械与发明》',
        },
        year: 1934,
      },
      {
        text: {
          en: 'I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success.',
          zh: '我不认为有任何激动能像发明家看到自己头脑的创造逐步走向成功时所感受到的那样穿透人心。',
        },
        original: 'I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'My Inventions, Electrical Experimenter',
          zh: '《我的发明》，《电气实验者》杂志',
        },
        year: 1919,
      },
      {
        text: {
          en: 'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.',
          zh: '我们的美德和我们的缺点是不可分割的，就像力与物质。当它们分离时，人就不复存在了。',
        },
        original: 'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'My Inventions, Electrical Experimenter',
          zh: '《我的发明》，《电气实验者》杂志',
        },
        year: 1919,
      },
      {
        text: {
          en: 'Let the future tell the truth, and evaluate each one according to his work and accomplishments.',
          zh: '让未来来诉说真相，根据每个人的工作和成就来评价他。',
        },
        original: 'Let the future tell the truth, and evaluate each one according to his work and accomplishments.',
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
    slug: 'carl-sagan',
    name: { en: 'Carl Sagan', zh: '卡尔·萨根' },
    years: '1934–1996',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Astronomer, planetary scientist, and science communicator who inspired a generation with Cosmos and the search for extraterrestrial life.',
      zh: '天文学家、行星科学家和科学传播者，以《宇宙》系列和对外星生命的探索激励了一代人。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Carl_Sagan',
      zh: 'https://zh.wikipedia.org/wiki/卡尔·萨根',
    },
    quotes: [
      {
        text: {
          en: 'The cosmos is all that is or ever was or ever will be.',
          zh: '宇宙就是过去、现在和将来所有存在的一切。',
        },
        original: 'The cosmos is all that is or ever was or ever will be.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Cosmos: A Personal Voyage',
          zh: '《宇宙：个人游记》',
        },
        year: 1980,
      },
      {
        text: {
          en: 'We are a way for the cosmos to know itself.',
          zh: '我们是宇宙认识自身的一种方式。',
        },
        original: 'We are a way for the cosmos to know itself.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Cosmos: A Personal Voyage',
          zh: '《宇宙：个人游记》',
        },
        year: 1980,
      },
      {
        text: {
          en: 'For small creatures such as we the vastness is bearable only through love.',
          zh: '对于我们这样渺小的生灵，唯有爱能让我们承受这无垠的浩瀚。',
        },
        original: 'For small creatures such as we the vastness is bearable only through love.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Contact',
          zh: '《接触》',
        },
        year: 1985,
      },
      {
        text: {
          en: 'Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.',
          zh: '从宇宙的视角看，我们每一个人都是珍贵的。如果一个人与你意见不同，让他活着。在千亿个星系中，你找不到第二个。',
        },
        original: 'Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Cosmos: A Personal Voyage',
          zh: '《宇宙：个人游记》',
        },
        year: 1980,
      },
      {
        text: {
          en: 'The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.',
          zh: '我们DNA中的氮，牙齿中的钙，血液中的铁，苹果派中的碳，都是在坍缩的恒星内部制造的。我们是由星尘构成的。',
        },
        original: 'The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Cosmos: A Personal Voyage',
          zh: '《宇宙：个人游记》',
        },
        year: 1980,
      },
    ],
  },
  {
    slug: 'ada-lovelace',
    name: { en: 'Ada Lovelace', zh: '阿达·洛芙莱斯' },
    years: '1815–1852',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Mathematician and writer, often regarded as the first computer programmer for her work on Charles Babbage\'s Analytical Engine.',
      zh: '数学家和作家，因在查尔斯·巴贝奇的分析机上的工作而被视为第一位计算机程序员。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Ada_Lovelace',
      zh: 'https://zh.wikipedia.org/wiki/愛達·勒芙蕾絲',
    },
    quotes: [
      {
        text: {
          en: 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.',
          zh: '分析机编织代数图案，正如提花织机编织花卉和叶片。',
        },
        original: 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Notes on the Analytical Engine',
          zh: '《分析机注释》',
        },
        year: 1843,
      },
      {
        text: {
          en: 'That brain of mine is something more than merely mortal, as time will show.',
          zh: '我的头脑绝非凡人所能比拟，时间会证明一切。',
        },
        original: 'That brain of mine is something more than merely mortal, as time will show.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Letter to her mother',
          zh: '致母亲的信',
        },
        year: 1843,
      },
    ],
  },
  {
    slug: 'alan-turing',
    name: { en: 'Alan Turing', zh: '艾伦·图灵' },
    years: '1912–1954',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Mathematician and logician who laid the foundations of computer science and artificial intelligence, and cracked the Enigma code in World War II.',
      zh: '数学家和逻辑学家，奠定了计算机科学和人工智能的基础，并在二战中破译了恩尼格玛密码。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Alan_Turing',
      zh: 'https://zh.wikipedia.org/wiki/艾伦·图灵',
    },
    quotes: [
      {
        text: {
          en: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
          zh: '我们只能看到不远的前方，但那里有很多需要我们去做的事情。',
        },
        original: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Computing Machinery and Intelligence, Mind',
          zh: '《计算机器与智能》，《心灵》期刊',
        },
        year: 1950,
      },
      {
        text: {
          en: 'Machines take me by surprise with great frequency.',
          zh: '机器经常让我感到惊讶。',
        },
        original: 'Machines take me by surprise with great frequency.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Computing Machinery and Intelligence, Mind',
          zh: '《计算机器与智能》，《心灵》期刊',
        },
        year: 1950,
      },
      {
        text: {
          en: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.',
          zh: '如果一台计算机能欺骗人类使其相信它是人类，那么它就值得被称为智能的。',
        },
        original: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Computing Machinery and Intelligence, Mind',
          zh: '《计算机器与智能》，《心灵》期刊',
        },
        year: 1950,
      },
      {
        text: {
          en: 'No, I\'m not interested in developing a powerful brain. All I\'m after is just a mediocre brain, something like the President of the American Telephone and Telegraph Company.',
          zh: '不，我对开发一个强大的大脑不感兴趣。我追求的只是一个普通的大脑，差不多像美国电话电报公司总裁那样的。',
        },
        original: 'No, I\'m not interested in developing a powerful brain. All I\'m after is just a mediocre brain, something like the President of the American Telephone and Telegraph Company.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Quoted in The Times, London',
          zh: '引自伦敦《泰晤士报》',
        },
        year: 1951,
      },
      {
        text: {
          en: 'Science is a differential equation. Religion is a boundary condition.',
          zh: '科学是一个微分方程。宗教是一个边界条件。',
        },
        original: 'Science is a differential equation. Religion is a boundary condition.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Quoted by Robin Gandy in a memoir',
          zh: '罗宾·甘迪在回忆录中引述',
        },
      },
    ],
  },
  {
    slug: 'niels-bohr',
    name: { en: 'Niels Bohr', zh: '尼尔斯·玻尔' },
    years: '1885–1962',
    nationality: { en: 'Danish', zh: '丹麦' },
    bio: {
      en: 'Physicist who made foundational contributions to understanding atomic structure and quantum theory, winning the Nobel Prize in 1922.',
      zh: '物理学家，对原子结构和量子理论做出了奠基性贡献，1922年获诺贝尔奖。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Niels_Bohr',
      zh: 'https://zh.wikipedia.org/wiki/尼尔斯·玻尔',
    },
    quotes: [
      {
        text: {
          en: 'An expert is a person who has made all the mistakes that can be made in a very narrow field.',
          zh: '专家就是在一个极其狭窄的领域里犯过所有可能错误的人。',
        },
        original: 'An expert is a person who has made all the mistakes that can be made in a very narrow field.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth.',
          zh: '正确陈述的对立面是错误陈述。但一个深刻真理的对立面，很可能是另一个深刻真理。',
        },
        original: 'The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth.',
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
    slug: 'werner-heisenberg',
    name: { en: 'Werner Heisenberg', zh: '维尔纳·海森堡' },
    years: '1901–1976',
    nationality: { en: 'German', zh: '德国' },
    bio: {
      en: 'Theoretical physicist who created quantum mechanics and formulated the uncertainty principle, winning the Nobel Prize in 1932.',
      zh: '理论物理学家，创建了量子力学并提出不确定性原理，1932年获诺贝尔奖。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Werner_Heisenberg',
      zh: 'https://zh.wikipedia.org/wiki/维尔纳·海森堡',
    },
    quotes: [
      {
        text: {
          en: 'What we observe is not nature itself, but nature exposed to our method of questioning.',
          zh: '我们观察到的不是自然本身，而是自然对我们提问方式的回应。',
        },
        original: 'What we observe is not nature itself, but nature exposed to our method of questioning.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Physics and Philosophy',
          zh: '《物理学与哲学》',
        },
        year: 1958,
      },
    ],
  },
  {
    slug: 'isaac-newton',
    name: { en: 'Isaac Newton', zh: '艾萨克·牛顿' },
    years: '1643–1727',
    nationality: { en: 'English', zh: '英国' },
    bio: {
      en: 'Mathematician and physicist who formulated the laws of motion, universal gravitation, and co-invented calculus, defining classical mechanics.',
      zh: '数学家和物理学家，提出了运动定律和万有引力定律，共同发明了微积分，奠定了经典力学的基础。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Isaac_Newton',
      zh: 'https://zh.wikipedia.org/wiki/艾萨克·牛顿',
    },
    quotes: [
      {
        text: {
          en: 'If I have seen further it is by standing on the shoulders of Giants.',
          zh: '如果我比别人看得更远，那是因为我站在巨人的肩膀上。',
        },
        original: 'If I have seen further it is by standing on the shoulders of Giants.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Letter to Robert Hooke',
          zh: '致罗伯特·胡克的信',
        },
        year: 1676,
      },
      {
        text: {
          en: 'Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.',
          zh: '真理总是在简洁中被发现，而不是在事物的繁杂与混乱中。',
        },
        original: 'Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Theological Manuscripts',
          zh: '《神学手稿》',
        },
      },
      {
        text: {
          en: 'To every action there is always opposed an equal reaction.',
          zh: '每一个作用力都有一个大小相等、方向相反的反作用力。',
        },
        original: 'To every action there is always opposed an equal reaction.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Principia Mathematica',
          zh: '《自然哲学的数学原理》',
        },
        year: 1687,
      },
      {
        text: {
          en: 'I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.',
          zh: '我不知道世人如何看我，但在我自己看来，我不过像是一个在海边嬉戏的男孩，偶尔找到一块更光滑的鹅卵石或一只更漂亮的贝壳，而真理的浩瀚大海仍未被发现地展现在我面前。',
        },
        original: 'I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Anecdotes, Observations and Characters, by Joseph Spence',
          zh: '约瑟夫·斯彭斯《轶事、观察与人物》',
        },
        year: 1727,
      },
    ],
  },
  {
    slug: 'galileo-galilei',
    name: { en: 'Galileo Galilei', zh: '伽利略·伽利莱' },
    years: '1564–1642',
    nationality: { en: 'Italian', zh: '意大利' },
    bio: {
      en: 'Astronomer, physicist, and polymath, often called the father of modern science for his pioneering use of observation and experiment.',
      zh: '天文学家、物理学家和博学者，因开创性地使用观察和实验方法而被称为现代科学之父。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Galileo_Galilei',
      zh: 'https://zh.wikipedia.org/wiki/伽利略·伽利莱',
    },
    quotes: [
      {
        text: {
          en: 'And yet it moves.',
          zh: '但它确实在动。',
        },
        original: 'Eppur si muove.',
        originalLang: 'it',
        originalLocale: 'en',
        source: {
          en: 'Attributed, after his forced recantation before the Inquisition',
          zh: '据传在被迫放弃日心说后所言',
        },
        year: 1633,
      },
      {
        text: {
          en: 'You cannot teach a man anything, you can only help him find it within himself.',
          zh: '你不能教会一个人任何东西，你只能帮助他在自己内心发现它。',
        },
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'The universe cannot be read until we have learnt the language and become familiar with the characters in which it is written. It is written in mathematical language, and the letters are triangles, circles and other geometrical figures.',
          zh: '宇宙在我们学会其语言并熟悉其书写符号之前是无法被理解的。它以数学语言写成，其字母是三角形、圆和其他几何图形。',
        },
        source: {
          en: 'The Assayer (Il Saggiatore)',
          zh: '《试金者》',
        },
        year: 1623,
      },
      {
        text: {
          en: 'I have never met a man so ignorant that I couldn\'t learn something from him.',
          zh: '我从未遇到过一个无知到我无法从他身上学到东西的人。',
        },
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'All truths are easy to understand once they are discovered; the point is to discover them.',
          zh: '所有真理一旦被发现就容易理解；关键在于发现它们。',
        },
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
    ],
  },
  {
    slug: 'rachel-carson',
    name: { en: 'Rachel Carson', zh: '蕾切尔·卡森' },
    years: '1907–1964',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Marine biologist and conservationist whose book Silent Spring catalyzed the modern environmental movement.',
      zh: '海洋生物学家和环保主义者，其著作《寂静的春天》催生了现代环保运动。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Rachel_Carson',
      zh: 'https://zh.wikipedia.org/wiki/蕾切尔·卡森',
    },
    quotes: [
      {
        text: {
          en: 'The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.',
          zh: '我们越是清晰地关注周围宇宙的奇迹与真实，就越不会有破坏的欲望。',
        },
        original: 'The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Acceptance speech for the John Burroughs Medal',
          zh: '约翰·巴勒斯奖章获奖演讲',
        },
        year: 1952,
      },
      {
        text: {
          en: 'In nature nothing exists alone.',
          zh: '在自然中，没有什么是孤立存在的。',
        },
        original: 'In nature nothing exists alone.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Silent Spring',
          zh: '《寂静的春天》',
        },
        year: 1962,
      },
    ],
  },
  {
    slug: 'jane-goodall',
    name: { en: 'Jane Goodall', zh: '珍·古道尔' },
    years: '1934–',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Primatologist and anthropologist whose groundbreaking study of chimpanzees transformed our understanding of animal behavior and human kinship with nature.',
      zh: '灵长类动物学家和人类学家，对黑猩猩的开创性研究改变了我们对动物行为及人与自然关系的认识。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Jane_Goodall',
      zh: 'https://zh.wikipedia.org/wiki/珍·古道尔',
    },
    quotes: [
      {
        text: {
          en: 'What you do makes a difference, and you have to decide what kind of difference you want to make.',
          zh: '你做的事会产生影响，你需要决定你想产生什么样的影响。',
        },
        original: 'What you do makes a difference, and you have to decide what kind of difference you want to make.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Widely quoted, public lectures',
          zh: '公开演讲，广泛引用',
        },
      },
      {
        text: {
          en: 'The least I can do is speak out for those who cannot speak for themselves.',
          zh: '我至少能做的是为那些无法为自己发声的生命发声。',
        },
        original: 'The least I can do is speak out for those who cannot speak for themselves.',
        originalLang: 'en',
        source: { en: 'Reason for Hope', zh: '《希望的理由》' },
        year: 1999,
      },
    ],
  },
  {
    slug: 'max-planck',
    name: { en: 'Max Planck', zh: '马克斯·普朗克' },
    years: '1858–1947',
    nationality: { en: 'German', zh: '德国' },
    bio: {
      en: 'Theoretical physicist who originated quantum theory, fundamentally changing our understanding of atomic and subatomic processes.',
      zh: '理论物理学家，量子理论的创始人，从根本上改变了人类对原子和亚原子过程的理解。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Max_Planck',
      zh: 'https://zh.wikipedia.org/wiki/马克斯·普朗克',
    },
    quotes: [
      {
        text: {
          en: 'Science cannot solve the ultimate mystery of nature. And that is because, in the last analysis, we ourselves are a part of the mystery that we are trying to solve.',
          zh: '科学无法解开自然的终极之谜。因为归根结底，我们自己就是我们试图解开的谜团的一部分。',
        },
        original: 'Science cannot solve the ultimate mystery of nature. And that is because, in the last analysis, we ourselves are a part of the mystery that we are trying to solve.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Where Is Science Going?',
          zh: '《科学往何处去？》',
        },
        year: 1932,
      },
      {
        text: {
          en: 'A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.',
          zh: '一个新的科学真理不是通过说服反对者并让他们看到光明而胜利的，而是因为反对者最终都去世了，而熟悉它的新一代成长了起来。',
        },
        original: 'A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Scientific Autobiography and Other Papers',
          zh: '《科学自传及其他论文》',
        },
        year: 1949,
      },
    ],
  },
  {
    slug: 'emmy-noether',
    name: { en: 'Emmy Noether', zh: '埃米·诺特' },
    years: '1882–1935',
    nationality: { en: 'German', zh: '德国' },
    bio: {
      en: 'Mathematician who made groundbreaking contributions to abstract algebra and theoretical physics, including the theorem linking symmetry and conservation laws.',
      zh: '数学家，在抽象代数和理论物理学方面做出了开创性贡献，提出了将对称性与守恒定律联系起来的定理。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Emmy_Noether',
      zh: 'https://zh.wikipedia.org/wiki/埃米·诺特',
    },
    quotes: [
      {
        text: {
          en: 'My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.',
          zh: '我的方法实际上是工作和思考的方法；这就是为什么它们无处不在却不为人知。',
        },
        original: 'My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, quoted by colleagues',
          zh: '同事引述',
        },
      },
      {
        text: {
          en: 'It does not matter to me whether my work is valued. I work because I love to work.',
          zh: '我的工作是否被重视对我来说并不重要。我工作是因为我热爱工作。',
        },
        original: 'It does not matter to me whether my work is valued. I work because I love to work.',
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
    slug: 'claude-shannon',
    name: { en: 'Claude Shannon', zh: '克劳德·香农' },
    years: '1916–2001',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Mathematician and electrical engineer known as the father of information theory, whose work laid the groundwork for the digital age.',
      zh: '数学家和电气工程师，被称为信息论之父，其工作为数字时代奠定了基础。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Claude_Shannon',
      zh: 'https://zh.wikipedia.org/wiki/克劳德·香农',
    },
    quotes: [
      {
        text: {
          en: 'The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point.',
          zh: '通信的基本问题是在一个点上精确或近似地再现在另一个点上选择的消息。',
        },
        original: 'The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'A Mathematical Theory of Communication',
          zh: '《通信的数学理论》',
        },
        year: 1948,
      },
      {
        text: {
          en: 'I just wondered how things were put together.',
          zh: '我只是好奇事物是如何组合在一起的。',
        },
        original: 'I just wondered how things were put together.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Interview, widely quoted',
          zh: '采访，广泛引用',
        },
      },
    ],
  },
  {
    slug: 'rosalind-franklin',
    name: { en: 'Rosalind Franklin', zh: '罗莎琳德·富兰克林' },
    years: '1920–1958',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Chemist and X-ray crystallographer whose work was central to understanding the molecular structures of DNA, RNA, and viruses.',
      zh: '化学家和X射线晶体学家，其工作对理解DNA、RNA和病毒的分子结构至关重要。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
      zh: 'https://zh.wikipedia.org/wiki/罗莎琳德·富兰克林',
    },
    quotes: [
      {
        text: {
          en: 'Science and everyday life cannot and should not be separated.',
          zh: '科学和日常生活不能也不应该被分开。',
        },
        original: 'Science and everyday life cannot and should not be separated.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Letter to her father',
          zh: '致父亲的信',
        },
        year: 1940,
      },
      {
        text: {
          en: 'In my view, all that is necessary for faith is the belief that by doing our best we shall succeed in our aims: the improvement of mankind.',
          zh: '在我看来，信仰所需要的只是相信：通过尽我们最大的努力，我们将实现我们的目标——改善人类。',
        },
        original: 'In my view, all that is necessary for faith is the belief that by doing our best we shall succeed in our aims: the improvement of mankind.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Letter to her father',
          zh: '致父亲的信',
        },
        year: 1940,
      },
    ],
  },
  {
    slug: 'tu-youyou',
    name: { en: 'Tu Youyou', zh: '屠呦呦' },
    years: '1930–',
    nationality: { en: 'Chinese', zh: '中国' },
    bio: {
      en: 'Pharmaceutical chemist who discovered artemisinin, a treatment for malaria that has saved millions of lives, winning the Nobel Prize in 2015.',
      zh: '药学家，发现了治疗疟疾的青蒿素，拯救了数百万人的生命，2015年获诺贝尔奖。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Tu_Youyou',
      zh: 'https://zh.wikipedia.org/wiki/屠呦呦',
    },
    quotes: [
      {
        text: {
          en: 'Every scientist dreams of doing something that can help the world.',
          zh: '每个科学家都梦想做一些能帮助世界的事情。',
        },
        original: '每个科学家都梦想做一些能帮助世界的事情。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: {
          en: 'Nobel Prize acceptance speech',
          zh: '诺贝尔奖获奖演讲',
        },
        year: 2015,
      },
      {
        text: {
          en: 'The discovery of artemisinin was a gift from traditional Chinese medicine to the world.',
          zh: '青蒿素的发现是中医药给世界的一份礼物。',
        },
        original: '青蒿素的发现是中医药给世界的一份礼物。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: {
          en: 'Nobel Lecture',
          zh: '诺贝尔演讲',
        },
        year: 2015,
      },
    ],
  },
  {
    slug: 'erwin-schrodinger',
    name: { en: 'Erwin Schrödinger', zh: '埃尔温·薛定谔' },
    years: '1887–1961',
    nationality: { en: 'Austrian', zh: '奥地利' },
    bio: {
      en: 'Theoretical physicist who developed the wave equation fundamental to quantum mechanics and posed the famous thought experiment about a cat.',
      zh: '理论物理学家，提出了量子力学的基础波动方程，以及著名的"薛定谔的猫"思想实验。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Erwin_Schrödinger',
      zh: 'https://zh.wikipedia.org/wiki/埃尔温·薛定谔',
    },
    quotes: [
      {
        text: {
          en: 'Consciousness cannot be accounted for in physical terms. For consciousness is absolutely fundamental.',
          zh: '意识无法用物理术语来解释。因为意识是绝对基本的。',
        },
        original: 'Consciousness cannot be accounted for in physical terms. For consciousness is absolutely fundamental.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'What Is Life?',
          zh: '《生命是什么？》',
        },
        year: 1944,
      },
    ],
  },
  {
    slug: 'paul-dirac',
    name: { en: 'Paul Dirac', zh: '保罗·狄拉克' },
    years: '1902–1984',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Theoretical physicist who made fundamental contributions to quantum mechanics and quantum electrodynamics, predicting the existence of antimatter.',
      zh: '理论物理学家，对量子力学和量子电动力学做出了根本性贡献，预言了反物质的存在。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Paul_Dirac',
      zh: 'https://zh.wikipedia.org/wiki/保罗·狄拉克',
    },
    quotes: [
      {
        text: {
          en: 'The laws of nature should be expressed in beautiful equations.',
          zh: '自然法则应当用优美的方程来表达。',
        },
        original: 'The laws of nature should be expressed in beautiful equations.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'God used beautiful mathematics in creating the world.',
          zh: '上帝用美丽的数学创造了这个世界。',
        },
        original: 'God used beautiful mathematics in creating the world.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'The Evolution of the Physicist\'s Picture of Nature, Scientific American',
          zh: '《物理学家自然图像的演变》，《科学美国人》',
        },
        year: 1963,
      },
    ],
  },
  {
    slug: 'john-von-neumann',
    name: { en: 'John von Neumann', zh: '约翰·冯·诺依曼' },
    years: '1903–1957',
    nationality: { en: 'Hungarian-American', zh: '匈牙利裔美国人' },
    bio: {
      en: 'Mathematician and polymath who made major contributions to computer science, game theory, quantum mechanics, and the architecture of modern computers.',
      zh: '数学家和博学者，对计算机科学、博弈论、量子力学和现代计算机架构做出了重大贡献。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/John_von_Neumann',
      zh: 'https://zh.wikipedia.org/wiki/约翰·冯·诺伊曼',
    },
    quotes: [
      {
        text: {
          en: 'With four parameters I can fit an elephant, and with five I can make him wiggle his trunk.',
          zh: '用四个参数我能拟合出一头大象，用五个参数我能让它摇鼻子。',
        },
        original: 'With four parameters I can fit an elephant, and with five I can make him wiggle his trunk.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Attributed, quoted by Enrico Fermi',
          zh: '恩里科·费米引述',
        },
      },
      {
        text: {
          en: 'Young man, in mathematics you don\'t understand things. You just get used to them.',
          zh: '年轻人，在数学中你不是去理解事物，你只是去习惯它们。',
        },
        original: 'Young man, in mathematics you don\'t understand things. You just get used to them.',
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
    slug: 'vera-rubin',
    name: { en: 'Vera Rubin', zh: '薇拉·鲁宾' },
    years: '1928–2016',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Astronomer whose observations of galaxy rotation rates provided the first strong evidence for the existence of dark matter.',
      zh: '天文学家，对星系旋转速率的观测为暗物质的存在提供了首个有力证据。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Vera_Rubin',
      zh: 'https://zh.wikipedia.org/wiki/薇拉·鲁宾',
    },
    quotes: [
      {
        text: {
          en: 'Still more interesting is the mystery of the dark matter. We have peered into a new world, and have seen that it is more mysterious than we had imagined.',
          zh: '更有趣的是暗物质之谜。我们窥见了一个新世界，发现它比我们想象的更加神秘。',
        },
        original: 'Still more interesting is the mystery of the dark matter. We have peered into a new world, and have seen that it is more mysterious than we had imagined.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Bright Galaxies, Dark Matters',
          zh: '《明亮星系，暗物质》',
        },
        year: 1997,
      },
      {
        text: {
          en: 'In a spiral galaxy, the weights of stellar orbits at large radii are predominately supported by the gravitational attraction of the unseen mass.',
          zh: '在旋涡星系中，大半径处恒星轨道的重力主要由不可见质量的引力来维持。',
        },
        original: 'In a spiral galaxy, the weights of stellar orbits at large radii are predominately supported by the gravitational attraction of the unseen mass.',
        originalLang: 'en',
        source: { en: 'Rotation of the Andromeda Nebula from a Spectroscopic Survey of Emission Regions', zh: '《仙女座星云发射区光谱巡天旋转研究》' },
        year: 1970,
        comment: {
          en: 'From her landmark paper providing evidence for dark matter. Co-authored with W. Kent Ford Jr.',
          zh: '出自她提供暗物质证据的里程碑论文。与W·肯特·福特共同撰写。',
        },
      },
    ],
  },
  {
    slug: 'santiago-ramon-y-cajal',
    name: { en: 'Santiago Ramón y Cajal', zh: '圣地亚哥·拉蒙-卡哈尔' },
    years: '1852–1934',
    nationality: { en: 'Spanish', zh: '西班牙' },
    bio: {
      en: 'Neuroscientist and pathologist, considered the father of modern neuroscience for his detailed drawings and studies of the nervous system.',
      zh: '神经科学家和病理学家，因对神经系统的详细绘图和研究而被视为现代神经科学之父。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Santiago_Ramón_y_Cajal',
      zh: 'https://zh.wikipedia.org/wiki/圣地亚哥·拉蒙-卡哈尔',
    },
    quotes: [
      {
        text: {
          en: 'Every man can, if he so desires, become the sculptor of his own brain.',
          zh: '每个人只要愿意，都可以成为自己大脑的雕塑家。',
        },
        original: 'Every man can, if he so desires, become the sculptor of his own brain.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Advice for a Young Investigator',
          zh: '《给年轻研究者的建议》',
        },
        year: 1897,
      },
      {
        text: {
          en: 'As long as our brain is a mystery, the universe, the reflection of the structure of the brain, will also be a mystery.',
          zh: '只要我们的大脑仍是一个谜，宇宙——大脑结构的映射——也将是一个谜。',
        },
        original: 'As long as our brain is a mystery, the universe, the reflection of the structure of the brain, will also be a mystery.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Charlas de cafe',
          zh: '《咖啡馆闲谈》',
        },
        year: 1920,
      },
    ],
  },
  {
    slug: 'henri-poincare',
    name: { en: 'Henri Poincar\u00e9', zh: '\u4ea8\u5229\u00b7\u5e9e\u52a0\u83b1' },
    years: '1854\u20131912',
    nationality: { en: 'French', zh: '\u6cd5\u56fd' },
    bio: {
      en: 'Mathematician, physicist, and philosopher of science whose work on topology, celestial mechanics, and the foundations of mathematics made him the last great universalist, and whose reflections on creativity and intuition remain influential.',
      zh: '\u6570\u5b66\u5bb6\u3001\u7269\u7406\u5b66\u5bb6\u548c\u79d1\u5b66\u54f2\u5b66\u5bb6\uff0c\u5728\u62d3\u6251\u5b66\u3001\u5929\u4f53\u529b\u5b66\u548c\u6570\u5b66\u57fa\u7840\u65b9\u9762\u7684\u5de5\u4f5c\u4f7f\u4ed6\u6210\u4e3a\u6700\u540e\u4e00\u4f4d\u4f1f\u5927\u7684\u5168\u624d\uff0c\u5176\u5bf9\u521b\u9020\u529b\u548c\u76f4\u89c9\u7684\u601d\u8003\u81f3\u4eca\u4ecd\u6709\u6df1\u8fdc\u5f71\u54cd\u3002',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Henri_Poincar%C3%A9',
      zh: 'https://zh.wikipedia.org/wiki/\u4ea8\u5229\u00b7\u5e9e\u52a0\u83b1',
    },
    quotes: [
      {
        text: {
          en: 'It is by logic that we prove, but by intuition that we discover.',
          zh: '\u6211\u4eec\u7528\u903b\u8f91\u6765\u8bc1\u660e\uff0c\u4f46\u7528\u76f4\u89c9\u6765\u53d1\u73b0\u3002',
        },
        original: 'C\'est avec la logique que nous prouvons et avec l\'intuition que nous trouvons.',
        originalLang: 'fr',
        source: { en: 'Science and Method', zh: '\u300a\u79d1\u5b66\u4e0e\u65b9\u6cd5\u300b' },
        year: 1908,
      },
      {
        text: {
          en: 'The scientist does not study nature because it is useful; he studies it because he delights in it, and he delights in it because it is beautiful.',
          zh: '\u79d1\u5b66\u5bb6\u7814\u7a76\u81ea\u7136\u4e0d\u662f\u56e0\u4e3a\u5b83\u6709\u7528\uff1b\u4ed6\u7814\u7a76\u5b83\u662f\u56e0\u4e3a\u4ed6\u4ee5\u6b64\u4e3a\u4e50\uff0c\u800c\u4ed6\u4ee5\u6b64\u4e3a\u4e50\u662f\u56e0\u4e3a\u5b83\u662f\u7f8e\u7684\u3002',
        },
        original: 'Le savant n\'\u00e9tudie pas la nature parce que cela est utile ; il l\'\u00e9tudie parce qu\'il y prend plaisir et il y prend plaisir parce qu\'elle est belle.',
        originalLang: 'fr',
        source: { en: 'Science and Method', zh: '\u300a\u79d1\u5b66\u4e0e\u65b9\u6cd5\u300b' },
        year: 1908,
      },
      {
        text: {
          en: 'To doubt everything or to believe everything are two equally convenient solutions; both dispense with the necessity of reflection.',
          zh: '\u6000\u7591\u4e00\u5207\u6216\u76f8\u4fe1\u4e00\u5207\uff0c\u662f\u4e24\u79cd\u540c\u6837\u7701\u4e8b\u7684\u529e\u6cd5\uff1b\u4e24\u8005\u90fd\u7701\u53bb\u4e86\u601d\u8003\u7684\u5fc5\u8981\u3002',
        },
        original: 'Douter de tout ou tout croire, ce sont deux solutions \u00e9galement commodes, qui l\'une et l\'autre nous dispensent de r\u00e9fl\u00e9chir.',
        originalLang: 'fr',
        source: { en: 'Science and Hypothesis', zh: '\u300a\u79d1\u5b66\u4e0e\u5047\u8bbe\u300b' },
        year: 1902,
      },
      {
        text: {
          en: 'Mathematics is the art of giving the same name to different things.',
          zh: '\u6570\u5b66\u662f\u7ed9\u4e0d\u540c\u4e8b\u7269\u4ee5\u76f8\u540c\u540d\u79f0\u7684\u827a\u672f\u3002',
        },
        original: 'Les math\u00e9matiques sont l\'art de donner le m\u00eame nom \u00e0 des choses diff\u00e9rentes.',
        originalLang: 'fr',
        source: { en: 'Science and Method', zh: '\u300a\u79d1\u5b66\u4e0e\u65b9\u6cd5\u300b' },
        year: 1908,
      },
    ],
  },
];
