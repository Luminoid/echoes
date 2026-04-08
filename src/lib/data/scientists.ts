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
      {
        text: {
          en: 'A theory is the more impressive the greater the simplicity of its premises, the more different kinds of things it relates, and the more extended its area of applicability. Therefore the deep impression that classical thermodynamics made upon me. It is the only physical theory of universal content which I am convinced will never be overthrown.',
          zh: '一个理论的前提越简洁、它所关联的事物种类越多、适用范围越广，就越令人印象深刻。因此经典热力学给我留下了深刻的印象。它是我确信永远不会被推翻的唯一具有普适性内容的物理理论。',
        },
        original: 'A theory is the more impressive the greater the simplicity of its premises, the more different kinds of things it relates, and the more extended its area of applicability. Therefore the deep impression that classical thermodynamics made upon me. It is the only physical theory of universal content which I am convinced will never be overthrown.',
        originalLang: 'en',
        source: {
          en: 'Autobiographical Notes',
          zh: '《自传性笔记》',
        },
        year: 1949,
      },
      {
        text: {
          en: 'The state of mind which enables a man to do work of this kind is akin to that of the religious worshipper or the lover; the daily effort comes from no deliberate intention or program, but straight from the heart.',
          zh: '使一个人能够从事这类工作的心灵状态，类似于宗教信徒或恋爱中的人；日复一日的努力并非来自刻意的计划，而是直接发自内心。',
        },
        original: 'Der Gemütszustand, der zu solcher Arbeit befähigt, ist dem des Religiösen oder Verliebten ähnlich; das tägliche Streben entspringt keinem Vorsatz oder Programm, sondern unmittelbar dem Herzen.',
        originalLang: 'de',
        source: {
          en: 'Principles of Research, address to the Physical Society in Berlin',
          zh: '《研究的原则》，柏林物理学会演讲',
        },
        year: 1918,
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
      {
        text: {
          en: 'It doesn\'t matter how beautiful your theory is, it doesn\'t matter how smart you are. If it doesn\'t agree with experiment, it\'s wrong.',
          zh: '你的理论多么优美并不重要，你多么聪明也不重要。如果它与实验不符，它就是错的。',
        },
        original: 'It doesn\'t matter how beautiful your theory is, it doesn\'t matter how smart you are. If it doesn\'t agree with experiment, it\'s wrong.',
        originalLang: 'en',
        source: { en: 'The Character of Physical Law', zh: '《物理定律的本性》' },
        year: 1965,
      },
      {
        text: {
          en: 'I would rather have questions that can\'t be answered than answers that can\'t be questioned.',
          zh: '我宁愿拥有无法解答的问题，也不要不能被质疑的答案。',
        },
        original: 'I would rather have questions that can\'t be answered than answers that can\'t be questioned.',
        originalLang: 'en',
        source: { en: 'Attributed, widely quoted from lectures', zh: '讲座，广泛引用' },
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
      {
        text: {
          en: 'If we are not able to ask skeptical questions, to interrogate those who tell us that something is true, to be skeptical of those in authority, then we\'re up for grabs for the next charlatan, political or religious, who comes ambling along.',
          zh: '如果我们不能提出怀疑性的问题，不能质问那些告诉我们某事为真的人，不能对权威持怀疑态度，那么我们就会成为下一个江湖骗子——无论是政治的还是宗教的——的猎物。',
        },
        original: 'If we are not able to ask skeptical questions, to interrogate those who tell us that something is true, to be skeptical of those in authority, then we\'re up for grabs for the next charlatan, political or religious, who comes ambling along.',
        originalLang: 'en',
        source: {
          en: 'The Burden of Skepticism, Pasadena lecture',
          zh: '《怀疑的负担》，帕萨迪纳演讲',
        },
        year: 1987,
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
      {
        text: {
          en: 'The original question, "Can machines think?" I believe to be too meaningless to deserve discussion. Nevertheless I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.',
          zh: '最初的问题"机器能思考吗？"我认为太无意义，不值得讨论。尽管如此，我相信到本世纪末，词语的使用和一般的受教育者的观点将发生很大变化，以至于人们能够谈论机器思考而不会被反驳。',
        },
        original: 'The original question, "Can machines think?" I believe to be too meaningless to deserve discussion. Nevertheless I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.',
        originalLang: 'en',
        source: {
          en: 'Computing Machinery and Intelligence, Mind',
          zh: '《计算机器与智能》，《心灵》期刊',
        },
        year: 1950,
      },
      {
        text: {
          en: 'Mathematical reasoning may be regarded rather schematically as the exercise of a combination of two facilities, which we may call intuition and ingenuity.',
          zh: '数学推理可以被简略地视为两种能力的结合运用，我们可以称之为直觉与巧思。',
        },
        original: 'Mathematical reasoning may be regarded rather schematically as the exercise of a combination of two facilities, which we may call intuition and ingenuity.',
        originalLang: 'en',
        source: {
          en: 'Systems of Logic Based on Ordinals',
          zh: '《基于序数的逻辑系统》',
        },
        year: 1939,
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
      {
        text: {
          en: 'If quantum mechanics hasn\'t profoundly shocked you, you haven\'t understood it yet.',
          zh: '如果量子力学没有深深震撼你，那说明你还没有理解它。',
        },
        original: 'If quantum mechanics hasn\'t profoundly shocked you, you haven\'t understood it yet.',
        originalLang: 'en',
        source: {
          en: 'Attributed, widely quoted',
          zh: '广泛引用',
        },
      },
      {
        text: {
          en: 'Every great and deep difficulty bears in itself its own solution. It forces us to change our thinking in order to find it.',
          zh: '每一个重大而深刻的困难本身都蕴含着自己的解答。它迫使我们改变思维方式去找到它。',
        },
        original: 'Every great and deep difficulty bears in itself its own solution. It forces us to change our thinking in order to find it.',
        originalLang: 'en',
        source: {
          en: 'Attributed, quoted in discussions with Heisenberg',
          zh: '与海森堡讨论时引述',
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
      {
        text: {
          en: 'The atoms or elementary particles themselves are not real; they form a world of potentialities or possibilities rather than one of things or facts.',
          zh: '原子或基本粒子本身不是实在的；它们构成的是一个可能性或潜在性的世界，而不是事物或事实的世界。',
        },
        original: 'Die Atome oder Elementarteilchen selbst sind nicht real; sie bilden eine Welt von Möglichkeiten oder Potentialitäten und nicht eine Welt von Dingen oder Tatsachen.',
        originalLang: 'de',
        source: {
          en: 'Physics and Philosophy',
          zh: '《物理学与哲学》',
        },
        year: 1958,
      },
      {
        text: {
          en: 'Not only is the universe stranger than we think, it is stranger than we can think.',
          zh: '宇宙不仅比我们所想的更奇异，它比我们所能想象的更奇异。',
        },
        original: 'Nicht nur ist das Universum seltsamer, als wir denken, es ist seltsamer, als wir denken können.',
        originalLang: 'de',
        comment: { en: 'The original version is by J.B.S. Haldane in Possible Worlds (1927): "The universe is not only queerer than we suppose, but queerer than we can suppose." Attribution to Heisenberg is disputed.', zh: '原始版本出自霍尔丹《可能的世界》(1927)："宇宙不仅比我们想象的更奇异，而且比我们所能想象的更奇异。"归于海森堡名下存在争议。' },
        source: {
          en: 'Across the Frontiers',
          zh: '《跨越前沿》',
        },
        year: 1974,
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
      {
        text: {
          en: 'Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts. There is something infinitely healing in the repeated refrains of nature — the assurance that dawn comes after night, and spring after winter.',
          zh: '那些凝视大地之美的人，能找到与生命等长的力量源泉。自然反复吟唱的旋律中有一种无限的疗愈——那是黎明必在黑夜之后、春天必在冬天之后到来的确信。',
        },
        original: 'Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts. There is something infinitely healing in the repeated refrains of nature — the assurance that dawn comes after night, and spring after winter.',
        originalLang: 'en',
        source: {
          en: 'The Sense of Wonder',
          zh: '《惊奇之心》',
        },
        year: 1965,
      },
      {
        text: {
          en: 'The human race is challenged more than ever before to demonstrate our mastery, not over nature but of ourselves.',
          zh: '人类比以往任何时候都更需要证明我们的驾驭力——不是驾驭自然，而是驾驭我们自己。',
        },
        original: 'The human race is challenged more than ever before to demonstrate our mastery, not over nature but of ourselves.',
        originalLang: 'en',
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
      {
        text: {
          en: 'Anybody who has been seriously engaged in scientific work of any kind realizes that over the entrance to the gates of the temple of science are written the words: Ye must have faith. It is a quality which the scientist cannot dispense with.',
          zh: '任何认真从事过科学工作的人都意识到，在科学殿堂的入口处写着这样的话：你必须有信仰。这是科学家不可或缺的品质。',
        },
        original: 'Wer es in der Wissenschaft zu etwas bringen will, muss über den Pforten des Tempels der Wissenschaft die Worte lesen: Du musst glauben. Es ist eine Eigenschaft, auf die der Forscher nicht verzichten kann.',
        originalLang: 'de',
        source: {
          en: 'Where Is Science Going?',
          zh: '《科学往何处去？》',
        },
        year: 1932,
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
          en: 'The Observer',
          zh: '《观察家报》',
        },
        year: 1931,
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
    name: { en: 'John von Neumann', zh: '约翰·冯·诺伊曼' },
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
  {
    slug: 'eo-wilson',
    name: { en: 'E.O. Wilson', zh: '爱德华·威尔逊' },
    years: '1929–2021',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Biologist and naturalist who founded sociobiology, championed biodiversity conservation, and argued for the consilience of all knowledge — from the sciences to the humanities.',
      zh: '生物学家与博物学家，创立了社会生物学，倡导生物多样性保护，并主张从自然科学到人文学科的知识大统一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/E._O._Wilson',
      zh: 'https://zh.wikipedia.org/wiki/爱德华·威尔逊',
    },
    quotes: [
      {
        text: {
          en: 'The real problem of humanity is the following: We have Paleolithic emotions, medieval institutions, and godlike technology. And it is terrifically dangerous, and it is now approaching a point of crisis overall.',
          zh: '人类真正的问题是：我们拥有旧石器时代的情感、中世纪的制度和神一般的技术。这极其危险，而现在正逼近一个全面危机的临界点。',
        },
        originalLang: 'en',
        source: { en: 'Debate at Harvard Museum of Natural History', zh: '哈佛自然历史博物馆辩论' },
        year: 2009,
      },
      {
        text: {
          en: 'Destroying rainforest for economic gain is like burning a Renaissance painting to cook a meal.',
          zh: '为了经济利益而毁灭雨林，就像烧掉一幅文艺复兴画作来做一顿饭。',
        },
        originalLang: 'en',
        source: { en: 'The Diversity of Life', zh: '《生命的多样性》' },
        year: 1992,
      },
      {
        text: {
          en: 'The one process now going on that will take millions of years to correct is the loss of genetic and species diversity by the destruction of natural habitats. This is the folly our descendants are least likely to forgive us.',
          zh: '当下正在发生的、需要数百万年才能纠正的唯一过程，是因自然栖息地遭到破坏而导致的基因和物种多样性的丧失。这是我们的后代最不可能原谅我们的愚行。',
        },
        originalLang: 'en',
        source: { en: 'Biophilia', zh: '《亲生命性》' },
        year: 1984,
      },
      {
        text: {
          en: 'The love of complexity without reductionism makes art; the love of complexity with reductionism makes science.',
          zh: '对复杂性的热爱而不求还原，造就了艺术；对复杂性的热爱加上还原论，造就了科学。',
        },
        originalLang: 'en',
        source: { en: 'Consilience: The Unity of Knowledge', zh: '《论契合：知识的统一》' },
        year: 1998,
      },
      {
        text: {
          en: 'We are drowning in information, while starving for wisdom. The world henceforth will be run by synthesizers, people able to put together the right information at the right time, think critically about it, and make important choices wisely.',
          zh: '我们淹没在信息中，却饥渴于智慧。从今往后，这个世界将由综合者来运转——那些能在正确的时间汇集正确的信息、批判性地思考并明智地做出重要选择的人。',
        },
        originalLang: 'en',
        source: { en: 'Consilience: The Unity of Knowledge', zh: '《论契合：知识的统一》' },
        year: 1998,
      },
      {
        text: {
          en: 'If all mankind were to disappear, the world would regenerate back to the rich state of equilibrium that existed ten thousand years ago. If insects were to vanish, the environment would collapse into chaos.',
          zh: '如果全人类消失了，世界将恢复到一万年前丰富的平衡状态。但如果昆虫消失了，环境将陷入混乱。',
        },
        originalLang: 'en',
        source: { en: 'The Diversity of Life', zh: '《生命的多样性》' },
        year: 1992,
      },
      {
        text: {
          en: 'You are capable of more than you know. Choose a goal that seems right for you and strive to be the best, however hard the path. Aim high. Behave honorably. Prepare to be alone at times, and to endure failure. The world needs all you can give.',
          zh: '你的能力超乎你所知。选择一个你认为正确的目标，无论道路多么艰难，都要努力做到最好。志存高远。行为端正。准备好有时孤独前行，并承受失败。这个世界需要你所能给予的一切。',
        },
        originalLang: 'en',
        source: { en: 'Letters to a Young Scientist', zh: '《致年轻科学家的信》' },
        year: 2013,
      },
    ],
  },
  {
    slug: 'freeman-dyson',
    name: { en: 'Freeman Dyson', zh: '弗里曼·戴森' },
    years: '1923–2020',
    nationality: { en: 'British-American', zh: '英裔美国人' },
    bio: {
      en: 'Theoretical physicist and public intellectual who championed the diversity of life and ideas, questioned scientific orthodoxy, and envisioned the long-term future of intelligence in the cosmos.',
      zh: '理论物理学家与公共知识分子，倡导生命与思想的多样性，质疑科学正统观念，构想了智能在宇宙中的长远未来。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Freeman_Dyson',
      zh: 'https://zh.wikipedia.org/wiki/弗里曼·戴森',
    },
    quotes: [
      {
        text: {
          en: 'The more I examine the universe and study the details of its architecture, the more evidence I find that the universe in some sense must have known we were coming.',
          zh: '我越是审视宇宙、研究其结构的细节，就越是发现证据表明：宇宙在某种意义上一定知道我们要来。',
        },
        originalLang: 'en',
        source: { en: 'Disturbing the Universe', zh: '宇宙波澜' },
        year: 1979,
      },
      {
        text: {
          en: 'It is better to be wrong than to be vague. A theory that is precise enough to be wrong is far more useful than one so flexible it can accommodate any result.',
          zh: '宁可犯错，也不要含糊。一个精确到可以被证伪的理论，远比一个灵活到能容纳任何结果的理论有用得多。',
        },
        originalLang: 'en',
        source: { en: 'Disturbing the Universe', zh: '《搅动宇宙》' },
        year: 1979,
      },
      {
        text: {
          en: 'The glory of science is to imagine more than we can prove. The glory of art is to feel more than we can understand.',
          zh: '科学的荣耀在于想象超越我们所能证明的。艺术的荣耀在于感受超越我们所能理解的。',
        },
        originalLang: 'en',
        source: { en: 'Infinite in All Directions', zh: '《无限的各个方向》' },
        year: 1988,
      },
      {
        text: {
          en: 'You ask: what is the meaning or purpose of life? I can only answer with another question: do you think we are wise enough to read God\'s mind?',
          zh: '你问：生命的意义或目的是什么？我只能以另一个问题来回答：你认为我们足够智慧去读懂上帝的心意吗？',
        },
        originalLang: 'en',
        source: { en: 'Infinite in All Directions', zh: '《无限的各个方向》' },
        year: 1988,
      },
      {
        text: {
          en: 'A good scientist is a person with original ideas. A good engineer is a person who makes a design that works with as few original ideas as possible. There are no prima donnas in engineering.',
          zh: '好的科学家是有原创想法的人。好的工程师是能用尽可能少的原创想法做出可行设计的人。工程领域没有自命不凡的主角。',
        },
        originalLang: 'en',
        source: { en: 'Disturbing the Universe', zh: '《搅动宇宙》' },
        year: 1979,
      },
      {
        text: {
          en: 'Technology is a gift of God. After the gift of life it is perhaps the greatest of God\'s gifts. It is the mother of civilizations, of arts and of sciences.',
          zh: '技术是上帝的恩赐。继生命之恩之后，它也许是上帝最伟大的恩赐。它是文明、艺术和科学之母。',
        },
        originalLang: 'en',
        source: { en: 'Infinite in All Directions', zh: '《无限的各个方向》' },
        year: 1988,
      },
      {
        text: {
          en: 'The bottom line for mathematicians is that the architecture has to be right. In all the mathematics that I did, the richness of discovery and the beauty of the solution depended on finding the right structure. Finding it is like finding a key that opens a door — suddenly everything falls into place.',
          zh: '对数学家来说，底线是结构必须正确。在我所做的全部数学中，发现的丰富性和解法的优美都取决于找到正确的结构。找到它就像找到一把开门的钥匙——一切突然各就其位。',
        },
        originalLang: 'en',
        source: { en: 'Disturbing the Universe', zh: '《搅动宇宙》' },
        year: 1979,
      },
    ],
  },
  {
    slug: 'roger-penrose',
    name: { en: 'Roger Penrose', zh: '罗杰·彭罗斯' },
    years: '1931–',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Mathematical physicist and Nobel laureate who explored the deepest connections between consciousness, computation, and the structure of physical reality, arguing that human understanding transcends algorithmic processes.',
      zh: '数学物理学家与诺贝尔奖得主，探索意识、计算与物理现实结构之间最深层的联系，主张人类理解力超越算法过程。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Roger_Penrose',
      zh: 'https://zh.wikipedia.org/wiki/罗杰·彭罗斯',
    },
    quotes: [
      {
        text: {
          en: 'Intelligence cannot be present without understanding. No computer has any awareness of what it does.',
          zh: '没有理解就不可能有智能。没有任何计算机对自己所做之事有任何觉察。',
        },
        originalLang: 'en',
        source: { en: 'The Emperor\'s New Mind', zh: '《皇帝新脑》' },
        year: 1989,
      },
      {
        text: {
          en: 'There is something in the conscious act of understanding that eludes computation. Mathematical insight, the "Aha!" moment, is not the output of an algorithm — it is the recognition of truth that no formal system, by itself, can achieve.',
          zh: '意识中的理解行为有某种东西是计算所无法捕捉的。数学洞察力——那个"顿悟"时刻——不是算法的输出，而是对真理的识别，这是任何形式系统本身都无法做到的。',
        },
        originalLang: 'en',
        source: { en: 'The Emperor\'s New Mind', zh: '《皇帝新脑》' },
        year: 1989,
      },
      {
        text: {
          en: 'The world of mathematics is a Platonic reality every bit as genuine as the physical world we inhabit. Mathematical truths are not invented; they are discovered. They exist timelessly, whether or not anyone finds them.',
          zh: '数学世界是一个柏拉图式的实在，与我们栖居的物理世界一样真实。数学真理不是发明的，而是发现的。它们超越时间地存在着，无论是否有人找到它们。',
        },
        originalLang: 'en',
        source: { en: 'The Road to Reality', zh: '《通往实在之路》' },
        year: 2004,
      },
      {
        text: {
          en: 'It seems to me that we must make a distinction between what is computable and what is merely computational. The brain may use quantum-level processes that are not algorithmic, and consciousness may depend on physics that we do not yet understand.',
          zh: '在我看来，我们必须区分可计算的和仅仅是计算性的。大脑可能使用非算法的量子层级过程，而意识可能依赖于我们尚未理解的物理学。',
        },
        originalLang: 'en',
        source: { en: 'Shadows of the Mind', zh: '《心灵的阴影》' },
        year: 1994,
      },
      {
        text: {
          en: 'Do I dare to say that there are three worlds — physical, mental, and Platonic-mathematical — and that each seems to emerge mysteriously from one of the others?',
          zh: '我敢说存在三个世界——物理的、心灵的、柏拉图数学的——而每一个似乎都神秘地从另一个中涌现出来？',
        },
        originalLang: 'en',
        source: { en: 'The Road to Reality', zh: '《通往实在之路》' },
        year: 2004,
      },
    ],
  },
  {
    slug: 'david-bohm',
    name: { en: 'David Bohm', zh: '戴维·玻姆' },
    years: '1917–1992',
    nationality: { en: 'American-British', zh: '美裔英国人' },
    bio: {
      en: 'Theoretical physicist and philosopher who proposed the implicate order as the deep structure of reality, and argued that thought itself is a systemic process whose fragmentation is the root of human conflict.',
      zh: '理论物理学家与哲学家，提出隐序作为实在的深层结构，认为思维本身是一种系统性过程，其碎片化是人类冲突的根源。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/David_Bohm',
      zh: 'https://zh.wikipedia.org/wiki/戴维·玻姆',
    },
    quotes: [
      {
        text: {
          en: 'In some sense man is a microcosm of the universe; therefore what man is, is a clue to the universe. We are enfolded in the universe.',
          zh: '在某种意义上，人是宇宙的缩影；因此人之所是，就是通向宇宙的线索。我们被卷入宇宙之中。',
        },
        originalLang: 'en',
        source: { en: 'Wholeness and the Implicate Order', zh: '《整体性与隐缠序》' },
        year: 1980,
      },
      {
        text: {
          en: 'Thought is a system. That system not only includes thoughts, feelings, and the state of the body; it includes the state of the entire society. It is essential for human beings to perceive this, because the fragmentation of thought is the root of our incoherence.',
          zh: '思维是一个系统。这个系统不仅包括思想、感受和身体状态，也包括整个社会的状态。人类必须认识到这一点，因为思维的碎片化是我们不连贯性的根源。',
        },
        originalLang: 'en',
        source: { en: 'Thought as a System', zh: '《作为系统的思维》' },
        year: 1992,
      },
      {
        text: {
          en: 'The ability to perceive or think differently is more important than the knowledge gained.',
          zh: '以不同方式感知或思考的能力，比获得的知识更重要。',
        },
        originalLang: 'en',
        source: { en: 'On Dialogue', zh: '《论对话》' },
        year: 1996,
      },
      {
        text: {
          en: 'In the implicate order, everything is enfolded into everything. The entire universe is in some way enfolded in each part, and each part is enfolded in the whole. This is the fundamental new feature of the implicate order.',
          zh: '在隐缠序中，一切都卷入一切之中。整个宇宙以某种方式卷入每一部分，而每一部分也卷入整体。这是隐缠序根本性的新特征。',
        },
        originalLang: 'en',
        source: { en: 'Wholeness and the Implicate Order', zh: '《整体性与隐缠序》' },
        year: 1980,
      },
      {
        text: {
          en: 'We must learn to view the world as an undivided whole. The notion that all these fragments are separately existent is evidently an illusion, and this illusion cannot do other than lead to endless conflict and confusion.',
          zh: '我们必须学会把世界视为一个不可分割的整体。认为所有这些碎片各自独立存在的观念显然是一种幻觉，而这种幻觉只能导致无尽的冲突与混乱。',
        },
        originalLang: 'en',
        source: { en: 'Wholeness and the Implicate Order', zh: '《整体性与隐缠序》' },
        year: 1980,
      },
      {
        text: {
          en: 'Dialogue is really aimed at going into the whole thought process, and changing the way the thought process occurs collectively. We haven\'t really paid much attention to thought as a process. We have engaged in thoughts, but we have only paid attention to the content, not to the process.',
          zh: '对话的真正目标是深入整个思维过程，改变思维过程在集体中发生的方式。我们并未真正关注作为过程的思维。我们一直在从事思考，但只关注了内容，而非过程本身。',
        },
        originalLang: 'en',
        source: { en: 'On Dialogue', zh: '《论对话》' },
        year: 1996,
      },
      {
        text: {
          en: 'If we can really understand the problem, the answer will come out of it, because the answer is not separate from the problem.',
          zh: '如果我们能真正理解问题，答案就会从中浮现，因为答案并不独立于问题之外。',
        },
        originalLang: 'en',
        source: { en: 'Thought as a System', zh: '《作为系统的思维》' },
        year: 1992,
      },
    ],
  },
  {
    slug: 'barbara-mcclintock',
    name: { en: 'Barbara McClintock', zh: '巴巴拉·麦克林托克' },
    years: '1902–1992',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Cytogeneticist and Nobel laureate who discovered genetic transposition, vindicated decades later after persistent resistance from the scientific establishment, exemplifying the virtues of patience and deep attention in scientific inquiry.',
      zh: '细胞遗传学家与诺贝尔奖得主，发现了基因转座现象，在科学界的持久抵制数十年后终获承认，体现了科学探究中耐心与深度专注的美德。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Barbara_McClintock',
      zh: 'https://zh.wikipedia.org/wiki/巴巴拉·麦克林托克',
    },
    quotes: [
      {
        text: {
          en: 'If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off. No matter what they say.',
          zh: '如果你知道自己走在正确的路上，如果你拥有这种内在的确信，那么没有人能让你偏离。无论他们说什么。',
        },
        originalLang: 'en',
        source: { en: 'A Feeling for the Organism (Evelyn Fox Keller)', zh: '《对有机体的感觉》（伊芙琳·福克斯·凯勒著）' },
        year: 1983,
      },
      {
        text: {
          en: 'I was just so interested in what I was doing I could hardly wait to get up in the morning and get at it. One of my friends, a geneticist, said I was a child, because only children can\'t wait to get up in the morning to get at what they want to do.',
          zh: '我对自己正在做的事情如此感兴趣，几乎迫不及待地想每天早晨起来继续。我的一位遗传学家朋友说我像个孩子，因为只有孩子才会迫不及待地早起去做他们想做的事。',
        },
        originalLang: 'en',
        source: { en: 'A Feeling for the Organism (Evelyn Fox Keller)', zh: '《对有机体的感觉》（伊芙琳·福克斯·凯勒著）' },
        year: 1983,
      },
      {
        text: {
          en: 'You have to have a feeling for the organism. You have to understand how it grows, understand its parts, understand when something is going wrong with it. You need to have a feeling for every individual plant.',
          zh: '你必须对有机体有一种感觉。你必须理解它如何生长，理解它的各个部分，理解何时出了问题。你需要对每一株植物都有一种感觉。',
        },
        originalLang: 'en',
        source: { en: 'A Feeling for the Organism (Evelyn Fox Keller)', zh: '《对有机体的感觉》（伊芙琳·福克斯·凯勒著）' },
        year: 1983,
      },
      {
        text: {
          en: 'When you suddenly see the problem, something happens that you have the answer — before you are able to put it into words. It is all done subconsciously. This has happened too many times to me, and I know when to trust it.',
          zh: '当你突然看到问题时，某些事情发生了——你有了答案，在你能用语言表述之前。这一切都在潜意识中完成。这种情况在我身上发生了太多次，我知道何时该信任它。',
        },
        originalLang: 'en',
        source: { en: 'A Feeling for the Organism (Evelyn Fox Keller)', zh: '《对有机体的感觉》（伊芙琳·福克斯·凯勒著）' },
        year: 1983,
      },
      {
        text: {
          en: 'I found that the more I worked with the chromosomes, the bigger and bigger they got, and when I was really working with them I wasn\'t outside, I was down there. I was part of the system.',
          zh: '我发现和染色体打交道越多，它们在我眼中就变得越来越大，当我真正投入其中时，我不是在外面，我在里面。我是系统的一部分。',
        },
        originalLang: 'en',
        source: { en: 'A Feeling for the Organism (Evelyn Fox Keller)', zh: '《对有机体的感觉》（伊芙琳·福克斯·凯勒著）' },
        year: 1983,
      },
      {
        text: {
          en: 'No two plants are exactly alike. They aren\'t, they just aren\'t, and I know every one of them. I start with the seedling, and I don\'t want to leave it. I don\'t feel I really know the story if I don\'t watch the plant all the way along.',
          zh: '没有两株植物是完全一样的。它们不是，它们就是不一样，而我认识其中的每一株。我从幼苗开始，就不想离开它。如果不一路看着这株植物，我就不觉得自己真正了解了故事。',
        },
        originalLang: 'en',
        source: { en: 'A Feeling for the Organism (Evelyn Fox Keller)', zh: '《对有机体的感觉》（伊芙琳·福克斯·凯勒著）' },
        year: 1983,
      },
    ],
  },
  {
    slug: 'j-robert-oppenheimer',
    name: { en: 'J. Robert Oppenheimer', zh: 'J·罗伯特·奥本海默' },
    years: '1904–1967',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Theoretical physicist who led the Manhattan Project and spent the rest of his life grappling with the moral consequences of scientific knowledge and the physicist\'s responsibility to humanity.',
      zh: '理论物理学家，领导了曼哈顿计划，余生都在与科学知识的道德后果以及物理学家对人类的责任作斗争。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/J._Robert_Oppenheimer',
      zh: 'https://zh.wikipedia.org/wiki/罗伯特·奥本海默',
    },
    quotes: [
      {
        text: {
          en: 'Now I am become Death, the destroyer of worlds.',
          zh: '现在我成了死神，世界的毁灭者。',
        },
        originalLang: 'en',
        source: { en: 'Recalling the Bhagavad Gita after the Trinity test', zh: '三位一体核试验后引用《薄伽梵歌》' },
        year: 1945,
      },
      {
        text: {
          en: 'The physicists have known sin; and this is a knowledge which they cannot lose.',
          zh: '物理学家们已经知道了罪；这是他们无法失去的知识。',
        },
        originalLang: 'en',
        source: { en: 'Lecture at MIT', zh: '麻省理工学院演讲' },
        year: 1947,
      },
      {
        text: {
          en: 'In some sort of crude sense, which no vulgarity, no humor, no overstatement can quite extinguish, the physicists have known sin; and this is a knowledge which they cannot lose.',
          zh: '在某种粗略的意义上——任何粗俗、幽默或夸张都无法完全消除——物理学家们已经知道了罪；这是他们无法失去的知识。',
        },
        originalLang: 'en',
        source: { en: 'Physics in the Contemporary World, MIT lecture', zh: '《当代世界的物理学》，麻省理工学院演讲' },
        year: 1947,
      },
      {
        text: {
          en: 'There must be no barriers to freedom of inquiry. There is no place for dogma in science. The scientist is free, and must be free to ask any question, to doubt any assertion, to seek for any evidence, to correct any errors.',
          zh: '探究自由不应有任何障碍。科学中没有教条的位置。科学家是自由的，也必须自由地提出任何问题，质疑任何断言，寻求任何证据，纠正任何错误。',
        },
        originalLang: 'en',
        source: { en: 'Science and the Common Understanding', zh: '《科学与共识》' },
        year: 1954,
      },
      {
        text: {
          en: 'The open society, the unrestricted access to knowledge, the unplanned and uninhibited association of men for its furtherance — these are what may make a vast, complex, ever growing, ever changing, ever more specialized and expert technological world, nevertheless a world of human community.',
          zh: '开放的社会、不受限制的知识获取、人们为推进知识而进行的自发而无拘束的结合——这些可以使一个庞大、复杂、不断增长、不断变化、日益专业化的技术世界，仍然是一个人类共同体的世界。',
        },
        originalLang: 'en',
        source: { en: 'Science and the Common Understanding', zh: '《科学与共识》' },
        year: 1954,
      },
      {
        text: {
          en: 'Both the man of science and the man of action live always at the edge of mystery, surrounded by it. Both always must have the sense of being lost, in order to find.',
          zh: '科学之人和行动之人都永远生活在神秘的边缘，被神秘所包围。为了发现，两者都必须始终保持迷失感。',
        },
        originalLang: 'en',
        source: { en: 'Quoted in Bulletin of the Atomic Scientists', zh: '引自《原子科学家公报》' },
        year: 1955,
      },
    ],
  },
  {
    slug: 'thomas-kuhn',
    name: { en: 'Thomas Kuhn', zh: '托马斯·库恩' },
    years: '1922–1996',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Philosopher and historian of science whose theory of paradigm shifts revolutionized our understanding of how scientific knowledge advances — not by smooth accumulation, but through revolutionary ruptures.',
      zh: '科学哲学家与科学史学家，其范式转换理论彻底改变了人们对科学知识如何进步的理解——不是通过平滑的积累，而是通过革命性的断裂。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Thomas_Kuhn',
      zh: 'https://zh.wikipedia.org/wiki/托马斯·库恩',
    },
    quotes: [
      {
        text: {
          en: 'Normal science, the activity in which most scientists inevitably spend almost all their time, is predicated on the assumption that the scientific community knows what the world is like. Normal science often suppresses fundamental novelties because they are necessarily subversive of its basic commitments.',
          zh: '常规科学——大多数科学家不可避免地把几乎全部时间花在上面的活动——建立在一个假设之上：科学共同体知道世界是什么样的。常规科学常常压制根本性的新发现，因为它们必然颠覆其基本承诺。',
        },
        originalLang: 'en',
        source: { en: 'The Structure of Scientific Revolutions', zh: '《科学革命的结构》' },
        year: 1962,
      },
      {
        text: {
          en: 'The transfer of allegiance from paradigm to paradigm is a conversion experience that cannot be forced. Lifelong resistance, particularly from those whose productive careers have committed them to an older tradition, is not a violation of scientific standards but an index to the nature of scientific research itself.',
          zh: '从一个范式到另一个范式的效忠转移是一种无法强迫的皈依体验。终身的抵抗——尤其来自那些生产性的职业已将他们绑定在旧传统上的人——并非违反科学标准，而是科学研究本质的一个指标。',
        },
        originalLang: 'en',
        source: { en: 'The Structure of Scientific Revolutions', zh: '《科学革命的结构》' },
        year: 1962,
      },
      {
        text: {
          en: 'Under normal conditions the research scientist is not an innovator but a solver of puzzles, and the puzzles upon which he concentrates are just those which he believes can be both stated and solved within the existing scientific tradition.',
          zh: '在正常条件下，研究科学家不是创新者，而是解谜者，而他集中精力的谜题恰恰是那些他相信可以在现有科学传统内被提出和解决的谜题。',
        },
        originalLang: 'en',
        source: { en: 'The Structure of Scientific Revolutions', zh: '《科学革命的结构》' },
        year: 1962,
      },
      {
        text: {
          en: 'The historian of science may be tempted to exclaim that when paradigms change, the world itself changes with them. Led by a new paradigm, scientists adopt new instruments and look in new places. Even more important, during revolutions scientists see new and different things when looking with familiar instruments in places they have looked before.',
          zh: '科学史家可能忍不住要说：当范式改变时，世界本身也随之改变。在新范式的引领下，科学家采用新的工具，去新的地方探索。更重要的是，在革命期间，科学家用熟悉的工具在曾经探索过的地方看到了新的、不同的东西。',
        },
        originalLang: 'en',
        source: { en: 'The Structure of Scientific Revolutions', zh: '《科学革命的结构》' },
        year: 1962,
      },
      {
        text: {
          en: 'In learning a paradigm the scientist acquires theory, methods, and standards together, usually in an inextricable mixture. Therefore, when paradigms change, there are usually significant shifts in the criteria determining the legitimacy both of problems and of proposed solutions.',
          zh: '在学习一个范式时，科学家同时获得理论、方法和标准，通常以不可分割的混合形式。因此，当范式改变时，决定问题和拟议解决方案合法性的标准通常也会发生重大转变。',
        },
        originalLang: 'en',
        source: { en: 'The Structure of Scientific Revolutions', zh: '《科学革命的结构》' },
        year: 1962,
      },
      {
        text: {
          en: 'Successive transition from one paradigm to another via revolution is the usual developmental pattern of mature science.',
          zh: '通过革命从一个范式向另一个范式的逐次转换，是成熟科学通常的发展模式。',
        },
        originalLang: 'en',
        source: { en: 'The Structure of Scientific Revolutions', zh: '《科学革命的结构》' },
        year: 1962,
      },
      {
        text: {
          en: 'Novelty emerges only with difficulty, manifested by resistance, against a background provided by expectation. Initially, only the anticipated and usual are experienced even under circumstances where the anomalous will later be observed.',
          zh: '新颖之物只有在困难中才能涌现，表现为抵抗，以预期为背景。最初，即使在后来会被观察到异常的情况下，人们所经历的也只有预期中的和寻常的。',
        },
        originalLang: 'en',
        source: { en: 'The Structure of Scientific Revolutions', zh: '《科学革命的结构》' },
        year: 1962,
      },
    ],
  },
  {
    slug: 'ilya-prigogine',
    name: { en: 'Ilya Prigogine', zh: '伊利亚·普里戈金' },
    years: '1917–2003',
    nationality: { en: 'Belgian', zh: '比利时' },
    bio: {
      en: 'Physical chemist and Nobel laureate who discovered dissipative structures and argued that irreversibility and chance are not defects of classical science but fundamental features of nature that give rise to order, complexity, and life.',
      zh: '物理化学家与诺贝尔奖得主，发现了耗散结构，认为不可逆性和偶然性不是经典科学的缺陷，而是自然界产生秩序、复杂性和生命的根本特征。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Ilya_Prigogine',
      zh: 'https://zh.wikipedia.org/wiki/伊利亚·普里高津',
    },
    quotes: [
      {
        text: {
          en: 'The future is uncertain — but this uncertainty is at the very heart of human creativity. The possible is richer than the real.',
          zh: '未来是不确定的——但这种不确定性正是人类创造力的核心。可能性比现实更丰富。',
        },
        original: 'Le possible est plus riche que le réel.',
        originalLang: 'fr',
        source: { en: 'The End of Certainty', zh: '《确定性的终结》' },
        year: 1997,
      },
      {
        text: {
          en: 'We are living in a world of self-organization. Far from equilibrium, matter acquires new properties — properties that are not contained in the laws governing individual particles. Organization, complexity, and life itself emerge from disorder through irreversible processes.',
          zh: '我们生活在一个自组织的世界中。在远离平衡态的条件下，物质获得了新的性质——这些性质并不包含在支配个体粒子的定律中。组织、复杂性和生命本身通过不可逆过程从无序中涌现。',
        },
        original: 'Loin de l\'équilibre, la matière acquiert des propriétés nouvelles.',
        originalLang: 'fr',
        source: { en: 'Order Out of Chaos', zh: '《从混沌到有序》' },
        year: 1984,
      },
      {
        text: {
          en: 'The arrow of time is the manifestation of the fact that the future is not given, that — as the French poet Paul Valéry emphasized — "time is construction."',
          zh: '时间之箭是这一事实的表现：未来并非给定的——正如法国诗人保罗·瓦莱里所强调的，"时间就是建造。"',
        },
        original: 'La flèche du temps est la manifestation du fait que l\'avenir n\'est pas donné.',
        originalLang: 'fr',
        source: { en: 'The End of Certainty', zh: '《确定性的终结》' },
        year: 1997,
      },
      {
        text: {
          en: 'Classical science emphasized order and stability; now we see fluctuations, instability, multiple choices, and limited predictability at all levels of observation. Ideas of disorder, of instability, once felt to be the negation of science, now form the very backbone of our understanding.',
          zh: '经典科学强调秩序与稳定；现在我们在所有观测层面看到涨落、不稳定、多重选择和有限可预测性。曾被认为是科学之否定的无序和不稳定观念，如今构成了我们理解的核心骨架。',
        },
        original: 'La science classique mettait l\'accent sur l\'ordre et la stabilité ; nous voyons maintenant les fluctuations et l\'instabilité à tous les niveaux.',
        originalLang: 'fr',
        source: { en: 'Order Out of Chaos', zh: '《从混沌到有序》' },
        year: 1984,
      },
      {
        text: {
          en: 'Entropy is not merely a quantity describing loss — it is the driving force of structure and creativity in the universe. Without irreversibility, there would be no life, no evolution, no history.',
          zh: '熵不仅仅是描述损失的量——它是宇宙中结构和创造力的驱动力。没有不可逆性，就没有生命，没有进化，没有历史。',
        },
        original: 'L\'entropie n\'est pas seulement une perte — elle est le moteur de la créativité.',
        originalLang: 'fr',
        source: { en: 'The End of Certainty', zh: '《确定性的终结》' },
        year: 1997,
      },
      {
        text: {
          en: 'We can no longer accept the old a priori distinction between scientific and ethical values. The scientific picture of the world that takes shape in our understanding can no longer be detached from the question of what it means to be human.',
          zh: '我们不能再接受科学价值与伦理价值之间旧有的先验区分。在我们理解中成形的科学世界图景，再也不能与"何为人"这一问题相分离。',
        },
        original: 'Nous ne pouvons plus accepter la vieille distinction a priori entre valeurs scientifiques et valeurs éthiques.',
        originalLang: 'fr',
        source: { en: 'Order Out of Chaos', zh: '《从混沌到有序》' },
        year: 1984,
      },
    ],
  },
];
