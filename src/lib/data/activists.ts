import type { PersonData } from './types';

export const activistData: PersonData[] = [
  {
    slug: 'martin-luther-king-jr',
    name: { en: 'Martin Luther King Jr.', zh: '马丁·路德·金' },
    years: '1929–1968',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American Baptist minister and civil rights leader whose philosophy of nonviolent resistance transformed a nation and inspired the world.',
      zh: '美国浸信会牧师和民权领袖，其非暴力抵抗哲学改变了一个国家并激励了全世界。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.',
      zh: 'https://zh.wikipedia.org/wiki/马丁·路德·金',
    },
    quotes: [
      {
        text: {
          en: 'Injustice anywhere is a threat to justice everywhere.',
          zh: '任何地方的不公正都是对所有地方公正的威胁。',
        },
        original: 'Injustice anywhere is a threat to justice everywhere.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: '"Letter from Birmingham Jail"',
          zh: '《伯明翰监狱来信》',
        },
        year: 1963,
      },
      {
        text: {
          en: 'The arc of the moral universe is long, but it bends toward justice.',
          zh: '道德宇宙的弧线很长，但它终将弯向正义。',
        },
        original: 'The arc of the moral universe is long, but it bends toward justice.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Sermon at the National Cathedral (paraphrasing Theodore Parker, 1853)',
          zh: '国家大教堂布道（转述西奥多·帕克，1853）',
        },
        year: 1968,
      },
      {
        text: {
          en: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
          zh: '黑暗不能驱除黑暗，只有光明才能做到。仇恨不能驱除仇恨，只有爱才能做到。',
        },
        original: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Strength to Love', zh: '《爱的力量》' },
        year: 1963,
      },
      {
        text: {
          en: 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.',
          zh: '我梦想有一天，我的四个孩子将生活在一个不以肤色而以品格来评判人的国家。',
        },
        original: 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: '"I Have a Dream" speech, March on Washington',
          zh: '《我有一个梦想》演讲，华盛顿大游行',
        },
        year: 1963,
      },
      {
        text: {
          en: 'The time is always right to do what is right.',
          zh: '做正确的事，任何时候都是对的时候。',
        },
        original: 'The time is always right to do what is right.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Oberlin College commencement address', zh: '奥伯林学院毕业典礼演讲' },
        year: 1964,
      },
      {
        text: {
          en: 'Our lives begin to end the day we become silent about things that matter.',
          zh: '从我们对重要事情沉默的那一天起，我们的生命就开始走向终结。',
        },
        original: 'Our lives begin to end the day we become silent about things that matter.',
        originalLang: 'en',
        source: { en: 'Attributed', zh: '名言' },
        comment: {
          en: 'No verified source for this exact wording in King\'s speeches or writings. Likely a paraphrase of sentiments from a March 8, 1965 Selma sermon.',
          zh: '在金的演讲或著作中未找到此确切措辞的来源。可能是1965年3月8日塞尔玛布道内容的改述。',
        },
      },
      {
        text: {
          en: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
          zh: '最终，我们记住的不是敌人的话语，而是朋友的沉默。',
        },
        original: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
        originalLang: 'en',
        source: { en: 'Attributed', zh: '名言' },
      },
      {
        text: {
          en: 'Love is the only force capable of transforming an enemy into a friend.',
          zh: '爱是唯一能将敌人变成朋友的力量。',
        },
        original: 'Love is the only force capable of transforming an enemy into a friend.',
        originalLang: 'en',
        source: { en: 'Strength to Love', zh: '《爱的力量》' },
        year: 1963,
      },
    ],
  },
  {
    slug: 'mahatma-gandhi',
    name: { en: 'Mahatma Gandhi', zh: '圣雄甘地' },
    years: '1869–1948',
    nationality: { en: 'Indian', zh: '印度' },
    bio: {
      en: 'Indian lawyer and anti-colonial nationalist who led India to independence through nonviolent civil disobedience, inspiring movements for freedom worldwide.',
      zh: '印度律师和反殖民民族主义者，通过非暴力不合作运动领导印度走向独立，激励了全世界的自由运动。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Mahatma_Gandhi',
      zh: 'https://zh.wikipedia.org/wiki/圣雄甘地',
    },
    quotes: [
      {
        text: {
          en: 'If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him.',
          zh: '如果我们能改变自己，世界的趋势也会随之改变。当一个人改变了自己的本性，世界对他的态度也会改变。',
        },
        original: 'If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Indian Opinion', zh: '《印度舆论》' },
        year: 1913,
        comment: {
          en: 'Often misquoted as "Be the change you wish to see in the world." The actual passage is from an article about snakebites.',
          zh: '常被误引为"成为你希望在世界上看到的改变"。原文实际出自一篇关于蛇咬伤的文章。',
        },
      },
      {
        text: {
          en: 'An eye for an eye only ends up making the whole world blind.',
          zh: '以眼还眼只会让整个世界都瞎掉。',
        },
        original: 'An eye for an eye only ends up making the whole world blind.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
      {
        text: {
          en: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
          zh: '弱者永远不能原谅。宽恕是强者的品质。',
        },
        original: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'All Men Are Brothers', zh: '《众生皆兄弟》' },
        year: 1960,
      },
    ],
  },
  {
    slug: 'nelson-mandela',
    name: { en: 'Nelson Mandela', zh: '纳尔逊·曼德拉' },
    years: '1918–2013',
    nationality: { en: 'South African', zh: '南非' },
    bio: {
      en: 'South African anti-apartheid revolutionary and statesman who served 27 years in prison before becoming the country\'s first Black president.',
      zh: '南非反种族隔离革命家和政治家，在监狱中度过27年后成为该国首位黑人总统。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Nelson_Mandela',
      zh: 'https://zh.wikipedia.org/wiki/纳尔逊·曼德拉',
    },
    quotes: [
      {
        text: {
          en: 'It always seems impossible until it\'s done.',
          zh: '在事情完成之前，一切看起来总是不可能的。',
        },
        original: 'It always seems impossible until it\'s done.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed (no verified Mandela source)', zh: '传为其语（未找到曼德拉原始出处）' },
        comment: {
          en: 'No verified Mandela source. Often attributed to him but no documentation exists.',
          zh: '无曼德拉的确切出处。常被归因于他但无文献记录。',
        },
      },
      {
        text: {
          en: 'Education is the most powerful weapon which you can use to change the world.',
          zh: '教育是你能用来改变世界的最强大的武器。',
        },
        original: 'Education is the most powerful weapon which you can use to change the world.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Address at University of the Witwatersrand',
          zh: '威特沃特斯兰德大学演讲',
        },
        year: 2003,
      },
      {
        text: {
          en: 'I learned that courage was not the absence of fear, but the triumph over it.',
          zh: '我学到，勇气不是没有恐惧，而是战胜恐惧。',
        },
        original: 'I learned that courage was not the absence of fear, but the triumph over it.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Long Walk to Freedom', zh: '《漫漫自由路》' },
        year: 1994,
      },
      {
        text: {
          en: 'No one is born hating another person because of the colour of his skin, or his background, or his religion.',
          zh: '没有人生来就因为肤色、背景或宗教而憎恨另一个人。',
        },
        original: 'No one is born hating another person because of the colour of his skin, or his background, or his religion.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Long Walk to Freedom', zh: '《漫漫自由路》' },
        year: 1994,
      },
      {
        text: {
          en: 'A good head and a good heart are always a formidable combination.',
          zh: '一个好头脑和一颗好心灵，永远是一个可畏的组合。',
        },
        original: 'A good head and a good heart are always a formidable combination.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Long Walk to Freedom', zh: '《漫漫自由路》' },
        year: 1994,
      },
      {
        text: {
          en: 'After climbing a great hill, one only finds that there are many more hills to climb.',
          zh: '登上一座伟大的山丘后，你才会发现还有更多的山丘要攀登。',
        },
        original: 'After climbing a great hill, one only finds that there are many more hills to climb.',
        originalLang: 'en',
        source: { en: 'Long Walk to Freedom', zh: '《漫漫自由路》' },
        year: 1994,
      },
    ],
  },
  {
    slug: 'malala-yousafzai',
    name: { en: 'Malala Yousafzai', zh: '马拉拉·优素福扎伊' },
    years: '1997–',
    nationality: { en: 'Pakistani', zh: '巴基斯坦' },
    bio: {
      en: 'Pakistani education activist and youngest Nobel Peace Prize laureate, who survived a Taliban assassination attempt and became a global symbol for girls\' education.',
      zh: '巴基斯坦教育活动家，最年轻的诺贝尔和平奖获得者，在塔利班暗杀未遂后成为全球女童教育的象征。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Malala_Yousafzai',
      zh: 'https://zh.wikipedia.org/wiki/马拉拉·优素福扎伊',
    },
    quotes: [
      {
        text: {
          en: 'One child, one teacher, one book, one pen can change the world.',
          zh: '一个孩子、一位老师、一本书、一支笔就能改变世界。',
        },
        original: 'One child, one teacher, one book, one pen can change the world.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Address to the United Nations',
          zh: '联合国演讲',
        },
        year: 2013,
      },
      {
        text: {
          en: 'We realize the importance of our voices only when we are silenced.',
          zh: '只有当我们被噤声时，才意识到自己声音的重要性。',
        },
        original: 'We realize the importance of our voices only when we are silenced.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'I Am Malala', zh: '《我是马拉拉》' },
        year: 2013,
      },
    ],
  },
  {
    slug: 'frederick-douglass',
    name: { en: 'Frederick Douglass', zh: '弗雷德里克·道格拉斯' },
    years: '1818–1895',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American abolitionist, social reformer, and orator who escaped slavery and became one of the most powerful voices against it in American history.',
      zh: '美国废奴主义者、社会改革家和演说家，从奴隶制中逃脱后成为美国历史上反对奴隶制最有力的声音之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Frederick_Douglass',
      zh: 'https://zh.wikipedia.org/wiki/弗雷德里克·道格拉斯',
    },
    quotes: [
      {
        text: {
          en: 'If there is no struggle, there is no progress.',
          zh: '没有斗争就没有进步。',
        },
        original: 'If there is no struggle, there is no progress.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: '"West India Emancipation" speech',
          zh: '《西印度解放》演讲',
        },
        year: 1857,
      },
      {
        text: {
          en: 'Once you learn to read, you will be forever free.',
          zh: '一旦你学会了阅读，你就永远自由了。',
        },
        original: 'Once you learn to read, you will be forever free.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
        comment: {
          en: 'Simplified paraphrase. Douglass expressed more nuanced sentiments about literacy in his autobiographies.',
          zh: '简化改述。道格拉斯在其自传中对识字表达了更加细致的看法。',
        },
      },
      {
        text: {
          en: 'Power concedes nothing without a demand. It never did and it never will.',
          zh: '权力不会在没有要求的情况下做出任何让步。过去不会，将来也不会。',
        },
        original: 'Power concedes nothing without a demand. It never did and it never will.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: '"West India Emancipation" speech',
          zh: '《西印度解放》演讲',
        },
        year: 1857,
      },
      {
        text: {
          en: 'I prayed for three years but received no answer until I prayed with my legs.',
          zh: '我祈祷了三年却没有得到回应，直到我用双腿去祈祷。',
        },
        original: 'I prayed for three years but received no answer until I prayed with my legs.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
    ],
  },
  {
    slug: 'vaclav-havel',
    name: { en: 'Václav Havel', zh: '瓦茨拉夫·哈维尔' },
    years: '1936–2011',
    nationality: { en: 'Czech', zh: '捷克' },
    bio: {
      en: 'Czech playwright, dissident, and statesman who led the Velvet Revolution and became the first president of the Czech Republic.',
      zh: '捷克剧作家、异见人士和政治家，领导了天鹅绒革命并成为捷克共和国首任总统。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Václav_Havel',
      zh: 'https://zh.wikipedia.org/wiki/瓦茨拉夫·哈维尔',
    },
    quotes: [
      {
        text: {
          en: 'Hope is not the conviction that something will turn out well, but the certainty that something makes sense, regardless of how it turns out.',
          zh: '希望不是确信事情会有好结果，而是确信某件事有意义，无论结果如何。',
        },
        original: 'Hope is not the conviction that something will turn out well, but the certainty that something makes sense, regardless of how it turns out.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Disturbing the Peace', zh: '《扰乱和平》' },
        year: 1986,
      },
      {
        text: {
          en: 'The salvation of this human world lies nowhere else than in the human heart.',
          zh: '这个人类世界的救赎不在别处，就在人心之中。',
        },
        original: 'The salvation of this human world lies nowhere else than in the human heart.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Address to the United States Congress',
          zh: '美国国会演讲',
        },
        year: 1990,
      },
      {
        text: {
          en: 'Truth and love must prevail over lies and hatred.',
          zh: '真理和爱必须战胜谎言和仇恨。',
        },
        original: 'Truth and love must prevail over lies and hatred.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Motto of the Velvet Revolution', zh: '天鹅绒革命口号' },
        year: 1989,
      },
      {
        text: {
          en: 'The real test of a man is not when he plays the role that he wants for himself, but when he plays the role destiny has for him.',
          zh: '对一个人真正的考验不是当他扮演自己想要的角色时，而是当他扮演命运安排给他的角色时。',
        },
        original: 'The real test of a man is not when he plays the role that he wants for himself, but when he plays the role destiny has for him.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Disturbing the Peace', zh: '《扰乱和平》' },
        year: 1986,
      },
    ],
  },
  {
    slug: 'rosa-parks',
    name: { en: 'Rosa Parks', zh: '罗莎·帕克斯' },
    years: '1913–2005',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American civil rights activist whose refusal to give up her bus seat in Montgomery, Alabama sparked the modern civil rights movement.',
      zh: '美国民权活动家，在阿拉巴马州蒙哥马利市拒绝让出公交车座位，点燃了现代民权运动。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Rosa_Parks',
      zh: 'https://zh.wikipedia.org/wiki/罗莎·帕克斯',
    },
    quotes: [
      {
        text: {
          en: 'I have learned over the years that when one\'s mind is made up, this diminishes fear; knowing what must be done does away with fear.',
          zh: '多年来我学到，当一个人下定决心时，恐惧就会减少；知道必须做什么就能消除恐惧。',
        },
        original: 'I have learned over the years that when one\'s mind is made up, this diminishes fear; knowing what must be done does away with fear.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Quiet Strength', zh: '《安静的力量》' },
        year: 1994,
      },
      {
        text: {
          en: 'Each person must live their life as a model for others.',
          zh: '每个人都必须把自己的生活过成他人的榜样。',
        },
        original: 'Each person must live their life as a model for others.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Quiet Strength', zh: '《安静的力量》' },
        year: 1994,
      },
    ],
  },
  {
    slug: 'desmond-tutu',
    name: { en: 'Desmond Tutu', zh: '德斯蒙德·图图' },
    years: '1931–2021',
    nationality: { en: 'South African', zh: '南非' },
    bio: {
      en: 'South African Anglican bishop and theologian who was a leading anti-apartheid voice and won the Nobel Peace Prize for his nonviolent advocacy.',
      zh: '南非圣公会主教和神学家，反种族隔离运动的重要声音，因非暴力倡导获诺贝尔和平奖。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Desmond_Tutu',
      zh: 'https://zh.wikipedia.org/wiki/德斯蒙德·图图',
    },
    quotes: [
      {
        text: {
          en: 'If you are neutral in situations of injustice, you have chosen the side of the oppressor.',
          zh: '如果你在不公正的情况下保持中立，你就选择了压迫者的一边。',
        },
        original: 'If you are neutral in situations of injustice, you have chosen the side of the oppressor.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
      {
        text: {
          en: 'Do your little bit of good where you are; it\'s those little bits of good put together that overwhelm the world.',
          zh: '在你所在的地方做你能做的一点善事；正是这些汇聚在一起的小善，改变了世界。',
        },
        original: 'Do your little bit of good where you are; it\'s those little bits of good put together that overwhelm the world.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
    ],
  },
  {
    slug: 'emma-goldman',
    name: { en: 'Emma Goldman', zh: '艾玛·戈德曼' },
    years: '1869–1940',
    nationality: { en: 'Russian-American', zh: '俄裔美国人' },
    bio: {
      en: 'Anarchist political activist and writer whose advocacy for free speech, women\'s rights, and labor made her one of the most radical voices of her era.',
      zh: '无政府主义政治活动家和作家，其对言论自由、妇女权利和劳工权益的倡导使她成为那个时代最激进的声音之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Emma_Goldman',
      zh: 'https://zh.wikipedia.org/wiki/艾玛·戈德曼',
    },
    quotes: [
      {
        text: {
          en: 'If I can\'t dance, it\'s not my revolution.',
          zh: '如果不能跳舞，那就不是我的革命。',
        },
        original: 'If I can\'t dance, it\'s not my revolution.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Paraphrase of sentiments in Living My Life (1931); exact wording is modern', zh: '意译自《我的生活》（1931）中的情感；确切措辞为后人概括' },
      },
      {
        text: {
          en: 'The most violent element in society is ignorance.',
          zh: '社会中最暴力的因素是无知。',
        },
        original: 'The most violent element in society is ignorance.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Anarchism and Other Essays', zh: '《无政府主义及其他论文》' },
        year: 1910,
      },
      {
        text: {
          en: 'No real social change has ever been brought about without a revolution — revolution is but thought carried into action.',
          zh: '没有任何真正的社会变革是不经过革命实现的——革命不过是思想付诸行动。',
        },
        original: 'No real social change has ever been brought about without a revolution — revolution is but thought carried into action.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Anarchism and Other Essays', zh: '《无政府主义及其他论文》' },
        year: 1910,
      },
      {
        text: {
          en: 'The history of progress is written in the blood of men and women who have dared to espouse an unpopular cause.',
          zh: '进步的历史是用那些敢于拥护不受欢迎的事业的男男女女的鲜血写成的。',
        },
        original: 'The history of progress is written in the blood of men and women who have dared to espouse an unpopular cause.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Patriotism: A Menace to Liberty', zh: '《爱国主义：自由的威胁》' },
        year: 1908,
      },
    ],
  },
  {
    slug: 'sojourner-truth',
    name: { en: 'Sojourner Truth', zh: '索杰纳·特鲁思' },
    years: 'c. 1797–1883',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'African American abolitionist and women\'s rights activist born into slavery whose "Ain\'t I a Woman?" speech became an icon of feminist rhetoric.',
      zh: '非裔美国废奴主义者和妇女权利活动家，生为奴隶，其"我不是一个女人吗？"演讲成为女权修辞的经典。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Sojourner_Truth',
      zh: 'https://zh.wikipedia.org/wiki/索杰纳·特鲁思',
    },
    quotes: [
      {
        text: {
          en: 'Ain\'t I a woman? I have borne thirteen children, and seen most all sold off to slavery, and when I cried out with my mother\'s grief, none but Jesus heard me! And ain\'t I a woman?',
          zh: '我不是一个女人吗？我生了十三个孩子，眼睁睁看着他们大多被卖为奴隶，当我以母亲的悲痛哭喊时，除了耶稣没人听到我！我不是一个女人吗？',
        },
        original: 'Ain\'t I a woman? I have borne thirteen children, and seen most all sold off to slavery, and when I cried out with my mother\'s grief, none but Jesus heard me! And ain\'t I a woman?',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: '"Ain\'t I a Woman?" speech (1863 Gage version; Truth had 5 children, not 13 — the original 1851 Robinson transcript is more accurate)',
          zh: '《我不是一个女人吗？》演讲（1863年盖奇版本；特鲁思实际有5个孩子，非13个——1851年罗宾逊记录更准确）',
        },
        year: 1851,
      },
      {
        text: {
          en: 'Truth is powerful and it prevails.',
          zh: '真理是强大的，它终将胜出。',
        },
        original: 'Truth is powerful and it prevails.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
    ],
  },
  {
    slug: 'wangari-maathai',
    name: { en: 'Wangari Maathai', zh: '旺加里·马塔伊' },
    years: '1940–2011',
    nationality: { en: 'Kenyan', zh: '肯尼亚' },
    bio: {
      en: 'Kenyan environmental and political activist who founded the Green Belt Movement and became the first African woman to win the Nobel Peace Prize.',
      zh: '肯尼亚环境和政治活动家，创立绿带运动，成为首位获得诺贝尔和平奖的非洲女性。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Wangari_Maathai',
      zh: 'https://zh.wikipedia.org/wiki/旺加里·马塔伊',
    },
    quotes: [
      {
        text: {
          en: 'It\'s the little things citizens do. That\'s what will make the difference. My little thing is planting trees.',
          zh: '正是公民做的小事改变了世界。我的小事就是种树。',
        },
        original: 'It\'s the little things citizens do. That\'s what will make the difference. My little thing is planting trees.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Nobel Peace Prize lecture', zh: '诺贝尔和平奖演讲' },
        year: 2004,
      },
      {
        text: {
          en: 'In the course of history, there comes a time when humanity is called to shift to a new level of consciousness.',
          zh: '在历史进程中，总会有一个时刻，人类被召唤转向一个新的意识层次。',
        },
        original: 'In the course of history, there comes a time when humanity is called to shift to a new level of consciousness.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Nobel Peace Prize lecture', zh: '诺贝尔和平奖演讲' },
        year: 2004,
      },
    ],
  },
  {
    slug: 'cesar-chavez',
    name: { en: 'Cesar Chavez', zh: '塞萨尔·查韦斯' },
    years: '1927–1993',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American labor leader and civil rights activist who co-founded the National Farm Workers Association and led nonviolent strikes for farmworker justice.',
      zh: '美国劳工领袖和民权活动家，联合创立全国农场工人协会，领导非暴力罢工争取农场工人的权益。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Cesar_Chavez',
      zh: 'https://zh.wikipedia.org/wiki/塞萨尔·查韦斯',
    },
    quotes: [
      {
        text: {
          en: 'Once social change begins, it cannot be reversed. You cannot uneducate the person who has learned to read.',
          zh: '社会变革一旦开始，就不可逆转。你不可能让已经学会阅读的人变回文盲。',
        },
        original: 'Once social change begins, it cannot be reversed. You cannot uneducate the person who has learned to read.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Address to the Commonwealth Club of California',
          zh: '加利福尼亚联邦俱乐部演讲',
        },
        year: 1984,
      },
      {
        text: {
          en: 'We cannot seek achievement for ourselves and forget about progress and prosperity for our community.',
          zh: '我们不能只追求个人成就，而忘记社区的进步和繁荣。',
        },
        original: 'We cannot seek achievement for ourselves and forget about progress and prosperity for our community.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
    ],
  },
  {
    slug: 'gloria-steinem',
    name: { en: 'Gloria Steinem', zh: '格洛丽亚·斯泰纳姆' },
    years: '1934–',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American feminist journalist and activist who co-founded Ms. magazine and became one of the most visible leaders of the women\'s liberation movement.',
      zh: '美国女权记者和活动家，联合创办《Ms.》杂志，成为妇女解放运动最具代表性的领袖之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Gloria_Steinem',
      zh: 'https://zh.wikipedia.org/wiki/格洛丽亚·斯泰纳姆',
    },
    quotes: [
      {
        text: {
          en: 'The truth will set you free, but first it will piss you off.',
          zh: '真相会让你自由，但首先它会让你愤怒。',
        },
        original: 'The truth will set you free, but first it will piss you off.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
      {
        text: {
          en: 'A woman without a man is like a fish without a bicycle.',
          zh: '没有男人的女人就像没有自行车的鱼。',
        },
        original: 'A woman without a man is like a fish without a bicycle.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Originated by Irina Dunn (c. 1970); popularized by Steinem', zh: '原创者为伊琳娜·邓恩（约1970年）；经斯泰纳姆推广' },
      },
    ],
  },
  {
    slug: 'angela-davis',
    name: { en: 'Angela Davis', zh: '安吉拉·戴维斯' },
    years: '1944–',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American political activist, philosopher, and scholar whose work has focused on race, class, gender, and the prison-industrial complex.',
      zh: '美国政治活动家、哲学家和学者，其研究聚焦于种族、阶级、性别和监狱产业复合体。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Angela_Davis',
      zh: 'https://zh.wikipedia.org/wiki/安吉拉·戴维斯',
    },
    quotes: [
      {
        text: {
          en: 'I am no longer accepting the things I cannot change. I am changing the things I cannot accept.',
          zh: '我不再接受我无法改变的事情。我在改变我无法接受的事情。',
        },
        original: 'I am no longer accepting the things I cannot change. I am changing the things I cannot accept.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed', zh: '传为其语' },
      },
      {
        text: {
          en: 'Radical simply means grasping things at the root.',
          zh: '激进只不过意味着从根本上把握事物。',
        },
        original: 'Radical simply means grasping things at the root.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Women, Culture & Politics', zh: '《女性、文化与政治》' },
        year: 1989,
      },
      {
        text: {
          en: 'You have to act as if it were possible to radically transform the world. And you have to do it all the time.',
          zh: '你必须表现得好像从根本上改变世界是可能的。而且你必须一直这样做。',
        },
        original: 'You have to act as if it were possible to radically transform the world. And you have to do it all the time.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Lecture at Southern Illinois University', zh: '南伊利诺伊大学演讲' },
        year: 2014,
      },
      {
        text: {
          en: 'Freedom is a constant struggle.',
          zh: '自由是一场持续的斗争。',
        },
        original: 'Freedom is a constant struggle.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Freedom Is a Constant Struggle', zh: '《自由是一场持续的斗争》' },
        year: 2016,
      },
    ],
  },
  {
    slug: 'greta-thunberg',
    name: { en: 'Greta Thunberg', zh: '格蕾塔·通贝里' },
    years: '2003–',
    nationality: { en: 'Swedish', zh: '瑞典' },
    bio: {
      en: 'Swedish environmental activist who started the global school strike for climate movement at age 15, challenging world leaders to act on the climate crisis.',
      zh: '瑞典环境活动家，15岁时发起全球学生气候罢课运动，挑战世界领导人应对气候危机。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Greta_Thunberg',
      zh: 'https://zh.wikipedia.org/wiki/格蕾塔·通贝里',
    },
    quotes: [
      {
        text: {
          en: 'Our house is on fire. I am here to say, our house is on fire.',
          zh: '我们的房子着火了。我在这里要说的是，我们的房子着火了。',
        },
        original: 'Our house is on fire. I am here to say, our house is on fire.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Address at the World Economic Forum, Davos',
          zh: '达沃斯世界经济论坛演讲',
        },
        year: 2019,
      },
      {
        text: {
          en: 'You are never too small to make a difference.',
          zh: '你永远不会因为太渺小而无法产生影响。',
        },
        original: 'You are never too small to make a difference.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'COP24, United Nations Climate Change Conference',
          zh: '联合国气候变化大会COP24',
        },
        year: 2018,
      },
    ],
  },
  {
    slug: 'bryan-stevenson',
    name: { en: 'Bryan Stevenson', zh: '布莱恩·史蒂文森' },
    years: '1959–',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American lawyer and social justice activist who founded the Equal Justice Initiative and has dedicated his career to defending the wrongly condemned.',
      zh: '美国律师和社会正义活动家，创立平等正义倡议组织，毕生致力于为被错判者辩护。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Bryan_Stevenson',
      zh: 'https://zh.wikipedia.org/wiki/布莱恩·史蒂文森',
    },
    quotes: [
      {
        text: {
          en: 'Each of us is more than the worst thing we\'ve ever done.',
          zh: '我们每个人都不仅仅是我们做过的最糟糕的事情。',
        },
        original: 'Each of us is more than the worst thing we\'ve ever done.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Just Mercy', zh: '《正义的慈悲》' },
        year: 2014,
      },
      {
        text: {
          en: 'The opposite of poverty is not wealth; the opposite of poverty is justice.',
          zh: '贫穷的反面不是富裕；贫穷的反面是正义。',
        },
        original: 'The opposite of poverty is not wealth; the opposite of poverty is justice.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'TED Talk, "We Need to Talk About an Injustice"',
          zh: 'TED演讲《我们需要谈谈不公正》',
        },
        year: 2012,
        sourceUrl: 'https://www.ted.com/talks/bryan_stevenson_we_need_to_talk_about_an_injustice',
      },
    ],
  },
  {
    slug: 'rigoberta-menchu',
    name: { en: 'Rigoberta Menchú', zh: '里戈韦塔·门楚' },
    years: '1959–',
    nationality: { en: 'Guatemalan', zh: '危地马拉' },
    bio: {
      en: 'Guatemalan indigenous rights activist who won the Nobel Peace Prize for her work advocating for the rights of indigenous peoples during Guatemala\'s civil war.',
      zh: '危地马拉原住民权利活动家，因在危地马拉内战期间倡导原住民权利而获诺贝尔和平奖。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Rigoberta_Menchú',
      zh: 'https://zh.wikipedia.org/wiki/里戈韦塔·门楚',
    },
    quotes: [
      {
        text: {
          en: 'Peace is not just the absence of war. Like a cathedral, peace must be constructed patiently and with unshakable faith.',
          zh: '和平不仅仅是没有战争。就像一座大教堂，和平必须以耐心和坚定不移的信念来建造。',
        },
        original: 'Peace is not just the absence of war. Like a cathedral, peace must be constructed patiently and with unshakable faith.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Nobel Peace Prize lecture', zh: '诺贝尔和平奖演讲' },
        year: 1992,
      },
      {
        text: {
          en: 'We are not myths of the past, ruins in the jungle, or zoos. We are people and we want to be respected.',
          zh: '我们不是过去的神话、丛林中的废墟或动物园。我们是人，我们要求被尊重。',
        },
        original: 'We are not myths of the past, ruins in the jungle, or zoos. We are people and we want to be respected.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'I, Rigoberta Menchú', zh: '《我，里戈韦塔·门楚》' },
        year: 1983,
      },
    ],
  },
  {
    slug: 'helen-keller',
    name: { en: 'Helen Keller', zh: '海伦·凯勒' },
    years: '1880–1968',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American author, disability rights advocate, and political activist who, despite being deaf and blind, became a world-famous symbol of perseverance.',
      zh: '美国作家、残障权利倡导者和政治活动家，尽管又聋又盲，仍成为举世闻名的坚毅象征。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Helen_Keller',
      zh: 'https://zh.wikipedia.org/wiki/海伦·凯勒',
    },
    quotes: [
      {
        text: {
          en: 'Life is either a daring adventure or nothing at all.',
          zh: '生命要么是一场大胆的冒险，要么什么都不是。',
        },
        original: 'Life is either a daring adventure or nothing at all.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Open Door', zh: '《敞开的门》' },
        year: 1957,
      },
      {
        text: {
          en: 'Although the world is full of suffering, it is also full of the overcoming of it.',
          zh: '虽然世界充满了苦难，但也充满了对苦难的克服。',
        },
        original: 'Although the world is full of suffering, it is also full of the overcoming of it.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Optimism: An Essay', zh: '《乐观主义》' },
        year: 1903,
      },
    ],
  },
  {
    slug: 'arundhati-roy',
    name: { en: 'Arundhati Roy', zh: '阿兰达蒂·洛伊' },
    years: '1961–',
    nationality: { en: 'Indian', zh: '印度' },
    bio: {
      en: 'Indian author and political activist whose Booker Prize-winning novel and fierce essays challenge imperialism, capitalism, and nuclear weapons.',
      zh: '印度作家和政治活动家，其布克奖小说和犀利的散文挑战帝国主义、资本主义和核武器。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Arundhati_Roy',
      zh: 'https://zh.wikipedia.org/wiki/阿兰达蒂·洛伊',
    },
    quotes: [
      {
        text: {
          en: 'Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing.',
          zh: '另一个世界不仅是可能的，她正在路上。在安静的日子里，我能听到她的呼吸。',
        },
        original: 'Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'War Talk',
          zh: '《战争话语》',
        },
        year: 2003,
      },
      {
        text: {
          en: 'There\'s really no such thing as the "voiceless." There are only the deliberately silenced, or the preferably unheard.',
          zh: '真的没有所谓的"无声者"。只有被故意噤声的人，或者宁愿不被听到的人。',
        },
        original: 'There\'s really no such thing as the "voiceless." There are only the deliberately silenced, or the preferably unheard.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: '2004 Sydney Peace Prize lecture',
          zh: '2004年悉尼和平奖演讲',
        },
        year: 2004,
      },
    ],
  },
  {
    slug: 'harriet-tubman',
    name: { en: 'Harriet Tubman', zh: '哈莉特·塔布曼' },
    years: 'c. 1822–1913',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American abolitionist who escaped slavery and led about seventy people to freedom through the Underground Railroad, becoming a legendary symbol of courage.',
      zh: '美国废奴主义者，从奴隶制中逃脱后通过地下铁路带领约七十人走向自由，成为勇气的传奇象征。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Harriet_Tubman',
      zh: 'https://zh.wikipedia.org/wiki/%E5%93%88%E8%8E%89%E7%89%B9%C2%B7%E5%A1%94%E5%B8%83%E6%9B%BC',
    },
    quotes: [
      {
        text: {
          en: 'I was the conductor of the Underground Railroad for eight years, and I can say what most conductors can\'t say — I never ran my train off the track and I never lost a passenger.',
          zh: '我担任地下铁路的指挥长达八年，我可以说大多数指挥都说不出的话——我从未让列车脱轨，也从未失去过一位乘客。',
        },
        original: 'I was the conductor of the Underground Railroad for eight years, and I can say what most conductors can\'t say — I never ran my train off the track and I never lost a passenger.',
        originalLang: 'en',
        source: { en: 'Speech at a suffrage convention', zh: '妇女选举权大会演讲' },
        year: 1896,
      },
    ],
  },
  {
    slug: 'frantz-fanon',
    name: { en: 'Frantz Fanon', zh: '弗朗茨·法农' },
    years: '1925–1961',
    nationality: { en: 'Martiniquais-Algerian', zh: '马提尼克-阿尔及利亚' },
    bio: {
      en: 'Psychiatrist, philosopher, and revolutionary whose writings on colonialism, race, and decolonization — blending clinical observation with political urgency — became foundational texts of postcolonial thought.',
      zh: '精神病学家、哲学家和革命者，其关于殖民主义、种族和去殖民化的著作——将临床观察与政治紧迫感相融合——成为后殖民思想的奠基性文本。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Frantz_Fanon',
      zh: 'https://zh.wikipedia.org/wiki/弗朗茨·法农',
    },
    quotes: [
      {
        text: {
          en: 'O my body, make of me always a man who questions!',
          zh: '哦，我的身体，让我永远做一个质疑的人！',
        },
        original: 'O mon corps, fais de moi toujours un homme qui interroge !',
        originalLang: 'fr',
        source: { en: 'Black Skin, White Masks', zh: '《黑皮肤，白面具》' },
        year: 1952,
      },
      {
        text: {
          en: 'Each generation must, out of relative obscurity, discover its mission, fulfill it, or betray it.',
          zh: '每一代人都必须从相对的默默无闻中发现自己的使命，完成它，或背叛它。',
        },
        original: 'Chaque g\u00e9n\u00e9ration doit dans une relative opacit\u00e9 d\u00e9couvrir sa mission, la remplir ou la trahir.',
        originalLang: 'fr',
        source: { en: 'The Wretched of the Earth', zh: '《全世界受苦的人》' },
        year: 1961,
      },
      {
        text: {
          en: 'To speak a language is to take on a world, a culture.',
          zh: '说一种语言就是承担一个世界、一种文化。',
        },
        original: 'Parler une langue, c\'est assumer un monde, une culture.',
        originalLang: 'fr',
        source: { en: 'Black Skin, White Masks', zh: '《黑皮肤，白面具》' },
        year: 1952,
      },
      {
        text: {
          en: 'The colonized is elevated above his jungle status in proportion to his adoption of the mother country\'s cultural standards.',
          zh: '被殖民者从他的丛林状态中提升的程度，与他对宗主国文化标准的接受程度成正比。',
        },
        original: 'Le colonis\u00e9 se sera d\'autant plus \u00e9chapp\u00e9 de sa brousse qu\'il aura fait siennes les valeurs culturelles de la m\u00e9tropole.',
        originalLang: 'fr',
        source: { en: 'Black Skin, White Masks', zh: '《黑皮肤，白面具》' },
        year: 1952,
      },
    ],
  },
];
