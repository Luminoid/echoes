import type { PersonData } from './types';

export const playwrightData: PersonData[] = [
  {
    slug: 'shakespeare',
    name: { en: 'William Shakespeare', zh: '威廉\u00b7莎士比亚' },
    years: '1564–1616',
    nationality: { en: 'English', zh: '英国' },
    bio: {
      en: 'England\'s national poet and the most performed playwright in history, whose tragedies, comedies, and histories explored the full depth of human nature with unmatched linguistic invention.',
      zh: '英国国民诗人、历史上演出最多的剧作家，其悲剧、喜剧和历史剧以无与伦比的语言创造力探索了人性的全部深度。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/William_Shakespeare',
      zh: 'https://zh.wikipedia.org/wiki/%E5%A8%81%E5%BB%89%C2%B7%E8%8E%8E%E5%A3%AB%E6%AF%94%E4%BA%9A',
    },
    quotes: [
      {
        text: {
          en: 'To be, or not to be, that is the question.',
          zh: '生存还是毁灭，这是个问题。',
        },
        original: 'To be, or not to be, that is the question.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Hamlet (Act III, Scene 1)', zh: '《哈姆雷特》（第三幕第一场）' },
        year: 1601,
        speaker: { en: 'Hamlet', zh: '哈姆雷特' },
      },
      {
        text: {
          en: 'All the world\'s a stage, and all the men and women merely players.',
          zh: '全世界是一个舞台，所有的男男女女不过是一些演员。',
        },
        original: 'All the world\'s a stage, and all the men and women merely players.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'As You Like It (Act II, Scene 7)', zh: '《皆大欢喜》（第二幕第七场）' },
        year: 1599,
        speaker: { en: 'Jaques', zh: '杰奎斯' },
      },
      {
        text: {
          en: 'The lady doth protest too much, methinks.',
          zh: '我觉得那位夫人抗议得太厉害了。',
        },
        original: 'The lady doth protest too much, methinks.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Hamlet (Act III, Scene 2)', zh: '《哈姆雷特》（第三幕第二场）' },
        year: 1601,
        speaker: { en: 'Queen Gertrude', zh: '王后格特鲁德' },
      },
      {
        text: {
          en: 'We are such stuff as dreams are made on, and our little life is rounded with a sleep.',
          zh: '我们是梦的质料所构成，短暂的一生，以一场睡眠作结。',
        },
        original: 'We are such stuff as dreams are made on, and our little life is rounded with a sleep.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Tempest (Act IV, Scene 1)', zh: '《暴风雨》（第四幕第一场）' },
        year: 1611,
        speaker: { en: 'Prospero', zh: '普洛斯彼罗' },
      },
      {
        text: {
          en: 'The course of true love never did run smooth.',
          zh: '真爱的道路从来不会平坦。',
        },
        original: 'The course of true love never did run smooth.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Midsummer Night\'s Dream (Act I, Scene 1)', zh: '《仲夏夜之梦》（第一幕第一场）' },
        year: 1596,
        speaker: { en: 'Lysander', zh: '拉山德' },
      },
      {
        text: {
          en: 'There is nothing either good or bad, but thinking makes it so.',
          zh: '事情本无好坏之分，只是思想使然。',
        },
        original: 'There is nothing either good or bad, but thinking makes it so.',
        originalLang: 'en',
        source: { en: 'Hamlet (Act II, Scene 2)', zh: '《哈姆雷特》（第二幕第二场）' },
        year: 1601,
        speaker: { en: 'Hamlet', zh: '哈姆雷特' },
      },
      {
        text: {
          en: 'What\'s in a name? That which we call a rose by any other name would smell as sweet.',
          zh: '名字有什么关系呢？我们叫做玫瑰的那朵花，换个名字还是一样芬芳。',
        },
        original: 'What\'s in a name? That which we call a rose by any other name would smell as sweet.',
        originalLang: 'en',
        source: { en: 'Romeo and Juliet (Act II, Scene 2)', zh: '《罗密欧与朱丽叶》（第二幕第二场）' },
        year: 1597,
        speaker: { en: 'Juliet', zh: '朱丽叶' },
      },
      {
        text: {
          en: 'The fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.',
          zh: '错不在我们的命运，亲爱的布鲁图斯，而在我们自己甘为下人。',
        },
        original: 'The fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.',
        originalLang: 'en',
        source: { en: 'Julius Caesar (Act I, Scene 2)', zh: '《裘力斯·凯撒》（第一幕第二场）' },
        year: 1599,
        speaker: { en: 'Cassius', zh: '卡西乌斯' },
      },
      {
        text: {
          en: 'Though she be but little, she is fierce.',
          zh: '虽然她个子小，但她很凶猛。',
        },
        original: 'Though she be but little, she is fierce.',
        originalLang: 'en',
        source: { en: 'A Midsummer Night\'s Dream (Act III, Scene 2)', zh: '《仲夏夜之梦》（第三幕第二场）' },
        year: 1596,
        speaker: { en: 'Helena', zh: '海伦娜' },
      },
      {
        text: {
          en: 'Cowards die many times before their deaths; the valiant never taste of death but once.',
          zh: '懦夫在死前已死过多次；勇者一生只死一回。',
        },
        original: 'Cowards die many times before their deaths; the valiant never taste of death but once.',
        originalLang: 'en',
        source: { en: 'Julius Caesar (Act II, Scene 2)', zh: '《裘力斯·凯撒》（第二幕第二场）' },
        year: 1599,
        speaker: { en: 'Caesar', zh: '凯撒' },
      },
      {
        text: {
          en: 'Love all, trust a few, do wrong to none.',
          zh: '爱所有人，信任少数人，不负任何人。',
        },
        original: 'Love all, trust a few, do wrong to none.',
        originalLang: 'en',
        source: { en: 'All\'s Well That Ends Well (Act I, Scene 1)', zh: '《终成眷属》（第一幕第一场）' },
        year: 1605,
        speaker: { en: 'Countess', zh: '伯爵夫人' },
      },
      {
        text: {
          en: 'Nothing will come of nothing. Speak again.',
          zh: '空无所有便一无所获。再说一次。',
        },
        original: 'Nothing will come of nothing. Speak again.',
        originalLang: 'en',
        source: { en: 'King Lear (Act I, Scene 1)', zh: '《李尔王》（第一幕第一场）' },
        year: 1606,
        speaker: { en: 'King Lear', zh: '李尔王' },
      },
      {
        text: {
          en: 'Men must endure their going hence, even as their coming hither: ripeness is all.',
          zh: '人必须忍受离去，正如忍受到来：成熟即一切。',
        },
        original: 'Men must endure Their going hence, even as their coming hither: Ripeness is all.',
        originalLang: 'en',
        source: { en: 'King Lear (Act V, Scene 2)', zh: '《李尔王》（第五幕第二场）' },
        year: 1606,
        speaker: { en: 'Edgar', zh: '埃德加' },
      },
    ],
  },
  {
    slug: 'samuel-beckett',
    name: { en: 'Samuel Beckett', zh: '塞缪尔\u00b7贝克特' },
    years: '1906–1989',
    nationality: { en: 'Irish-French', zh: '爱尔兰裔法国' },
    bio: {
      en: 'Nobel Prize-winning Irish avant-garde dramatist and novelist who stripped theater to its existential bones. Waiting for Godot redefined what drama could be.',
      zh: '爱尔兰先锋剧作家和小说家，诺贝尔文学奖得主，将戏剧剥离至存在主义的骨架。《等待戈多》重新定义了戏剧的可能。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Samuel_Beckett',
      zh: 'https://zh.wikipedia.org/wiki/%E5%A1%9E%E7%BC%AA%E5%B0%94%C2%B7%E8%B4%9D%E5%85%8B%E7%89%B9',
    },
    quotes: [
      {
        text: {
          en: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
          zh: '试过。失败过。没关系。再试。再败。败得更好。',
        },
        original: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Worstward Ho', zh: '《向最糟处去》' },
        year: 1983,
      },
      {
        text: {
          en: 'Nothing happens. Nobody comes, nobody goes. It\'s awful.',
          zh: '什么也没有发生。没有人来，没有人去。真可怕。',
        },
        original: 'Rien ne se passe, personne ne vient, personne ne s\'en va, c\'est terrible.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Waiting for Godot (Act I)', zh: '《等待戈多》（第一幕）' },
        year: 1953,
        speaker: { en: 'Estragon', zh: '爱斯特拉冈' },
      },
      {
        text: {
          en: 'I can\'t go on, I\'ll go on.',
          zh: '我无法继续了，我会继续的。',
        },
        original: 'je ne peux pas continuer, je vais continuer.',
        originalLang: 'fr',
        source: { en: 'The Unnamable', zh: '《无法称呼的人》' },
        year: 1953,
      },
      {
        text: {
          en: 'We are all born mad. Some remain so.',
          zh: '我们生来就是疯狂的。有些人一直如此。',
        },
        original: 'On naît tous fous. Quelques-uns le demeurent.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Waiting for Godot (Act II)', zh: '《等待戈多》（第二幕）' },
        year: 1953,
        speaker: { en: 'Estragon', zh: '爱斯特拉冈' },
      },
      {
        text: {
          en: 'Every word is like an unnecessary stain on silence and nothingness.',
          zh: '每一个字都像是在沉默和虚无上留下的多余污渍。',
        },
        original: 'Every word is like an unnecessary stain on silence and nothingness.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed (interview)', zh: '传为其语（访谈）' },
      },
      {
        text: {
          en: 'Let us not waste our time in idle discourse! Let us do something, while we have the chance!',
          zh: '我们不要把时间浪费在无聊的话语上！趁我们有机会，让我们做点什么！',
        },
        original: 'Ne perdons pas notre temps en vains discours! Faisons quelque chose, pendant que l\'occasion se présente!',
        originalLang: 'fr',
        source: { en: 'Waiting for Godot (Act II)', zh: '《等待戈多》（第二幕）' },
        year: 1953,
        speaker: { en: 'Vladimir', zh: '弗拉基米尔' },
      },
      {
        text: {
          en: 'The tears of the world are a constant quantity. For each one who begins to weep somewhere else another stops.',
          zh: '世界的眼泪是一个常量。每当某处有人开始哭泣，另一处就有人停止。',
        },
        original: 'Les larmes du monde sont immuables. Pour chacun qui se met à pleurer, quelque part un autre s\'arrête.',
        originalLang: 'fr',
        source: { en: 'Waiting for Godot (Act I)', zh: '《等待戈多》（第一幕）' },
        year: 1953,
        speaker: { en: 'Pozzo', zh: '波卓' },
      },
      {
        text: {
          en: 'They give birth astride of a grave, the light gleams an instant, then it\'s night once more.',
          zh: '她们在坟墓上方分娩，光芒闪烁了一瞬，然后又是黑夜。',
        },
        original: 'Elles accouchent à cheval sur une tombe, le jour brille un instant, puis c\'est la nuit à nouveau.',
        originalLang: 'fr',
        source: { en: 'Waiting for Godot (Act II)', zh: '《等待戈多》（第二幕）' },
        year: 1953,
        speaker: { en: 'Pozzo', zh: '波卓' },
      },
      {
        text: {
          en: 'Habit is a great deadener.',
          zh: '习惯是一种巨大的麻醉剂。',
        },
        original: 'L\'habitude est une grande sourdine.',
        originalLang: 'fr',
        source: { en: 'Waiting for Godot (Act II)', zh: '《等待戈多》（第二幕）' },
        year: 1953,
        speaker: { en: 'Vladimir', zh: '弗拉基米尔' },
      },
      {
        text: {
          en: 'There\'s man all over for you, blaming on his boots the faults of his feet.',
          zh: '人就是这样，把脚的毛病怪到靴子上。',
        },
        original: 'Voilà l\'homme tout entier, s\'en prenant à sa chaussure alors que c\'est son pied le coupable.',
        originalLang: 'fr',
        source: { en: 'Waiting for Godot (Act I)', zh: '《等待戈多》（第一幕）' },
        year: 1953,
        speaker: { en: 'Vladimir', zh: '弗拉基米尔' },
      },
      {
        text: {
          en: 'To find a form that accommodates the mess, that is the task of the artist now.',
          zh: '找到一种能容纳混乱的形式，这是艺术家现在的任务。',
        },
        original: 'To find a form that accommodates the mess, that is the task of the artist now.',
        originalLang: 'en',
        source: { en: 'Interview with Tom Driver', zh: '汤姆·德赖弗访谈' },
        year: 1961,
      },
      {
        text: {
          en: 'The end is in the beginning and yet you go on.',
          zh: '终点就在起点之中，而你仍继续走下去。',
        },
        original: 'La fin est dans le commencement et cependant on continue.',
        originalLang: 'fr',
        source: { en: 'Endgame', zh: '《终局》' },
        year: 1957,
        speaker: { en: 'Hamm', zh: '哈姆' },
      },
      {
        text: {
          en: 'Nothing is funnier than unhappiness, I grant you that. Yes, yes, it\'s the most comical thing in the world.',
          zh: '没有什么比不幸更好笑的了，我承认。是的，是的，这是世界上最滑稽的事情。',
        },
        original: 'Rien n\'est plus dr\u00f4le que le malheur, je te l\'accorde. Si, si, c\'est la chose la plus comique au monde.',
        originalLang: 'fr',
        source: { en: 'Endgame', zh: '《终局》' },
        year: 1957,
        speaker: { en: 'Nell', zh: '奈尔' },
      },
    ],
  },
  {
    slug: 'anton-chekhov',
    name: { en: 'Anton Chekhov', zh: '安东\u00b7契诃夫' },
    years: '1860–1904',
    nationality: { en: 'Russian', zh: '俄国' },
    bio: {
      en: 'Russian playwright and short story master whose understated, psychologically nuanced dramas revolutionized modern theater with their focus on mood, subtext, and ordinary life.',
      zh: '俄国剧作家和短篇小说大师，以低调、心理层次丰富的戏剧革新了现代戏剧，聚焦于氛围、潜台词和日常生活。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Anton_Chekhov',
      zh: 'https://zh.wikipedia.org/wiki/%E5%AE%89%E4%B8%9C%C2%B7%E5%A5%91%E8%AF%83%E5%A4%AB',
    },
    quotes: [
      {
        text: {
          en: 'If in the first act you have hung a pistol on the wall, then in the following one it should be fired.',
          zh: '如果你在第一幕的墙上挂了一把手枪，那么在接下来的某一幕中它就必须被发射。',
        },
        originalLang: 'ru',
        source: { en: 'Letter to Aleksandr Semenovich Lazarev', zh: '致亚历山大\u00b7谢苗诺维奇\u00b7拉扎列夫的信' },
        year: 1889,
      },
      {
        text: {
          en: 'Knowledge is of no value unless you put it into practice.',
          zh: '知识如果不付诸实践，就毫无价值。',
        },
        originalLang: 'ru',
        source: { en: 'Notebooks', zh: '《笔记》' },
      },
      {
        text: {
          en: 'Don\'t tell me the moon is shining; show me the glint of light on broken glass.',
          zh: '不要告诉我月亮在发光；让我看到碎玻璃上的一线光芒。',
        },
        originalLang: 'ru',
        source: { en: 'Attributed (letter to his brother)', zh: '传为其语（致其兄弟的信）' },
      },
      {
        text: {
          en: 'Medicine is my lawful wife, and literature is my mistress.',
          zh: '医学是我的合法妻子，文学是我的情妇。',
        },
        original: 'Медицина — моя законная жена, а литература — любовница.',
        originalLang: 'ru',
        source: { en: 'Letter to Alexei Suvorin', zh: '致阿列克谢·苏沃林的信' },
        year: 1888,
      },
      {
        text: {
          en: 'People don\'t notice whether it\'s winter or summer when they\'re happy.',
          zh: '人们在幸福的时候不会注意到是冬天还是夏天。',
        },
        originalLang: 'ru',
        source: { en: 'Three Sisters (Act II)', zh: '《三姐妹》（第二幕）' },
        year: 1901,
      },
      {
        text: {
          en: 'We shall find peace. We shall hear angels, we shall see the sky sparkling with diamonds.',
          zh: '我们会找到平静。我们会听到天使的声音，我们会看到钻石般闪耀的天空。',
        },
        original: 'Мы отдохнём! Мы услышим ангелов, мы увидим всё небо в алмазах.',
        originalLang: 'ru',
        source: { en: 'Uncle Vanya (Act IV)', zh: '《万尼亚舅舅》（第四幕）' },
        year: 1899,
        speaker: { en: 'Sonya', zh: '索尼娅' },
      },
      {
        text: {
          en: 'If you are afraid of loneliness, do not marry.',
          zh: '如果你害怕孤独，就不要结婚。',
        },
        original: 'Если боитесь одиночества, то не женитесь.',
        originalLang: 'ru',
        source: { en: 'Notebooks', zh: '《笔记》' },
      },
      {
        text: {
          en: 'The task of a writer is not to solve the problem but to state the problem correctly.',
          zh: '作家的任务不是解决问题，而是正确地提出问题。',
        },
        originalLang: 'ru',
        source: { en: 'Letter to Alexei Suvorin', zh: '致阿列克谢·苏沃林的信' },
        year: 1888,
      },
      {
        text: {
          en: 'You must trust and believe in people or life becomes impossible.',
          zh: '你必须信任和相信人，否则生活变得不可能。',
        },
        originalLang: 'ru',
        source: { en: 'Attributed', zh: '传为其语' },
      },
      {
        text: {
          en: 'In Moscow they don\'t understand anything. The most important thing is, they don\'t understand the most important thing.',
          zh: '在莫斯科他们什么都不懂。最重要的是，他们不懂得最重要的事情。',
        },
        original: '\u0412 \u041c\u043e\u0441\u043a\u0432\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442. \u0413\u043b\u0430\u0432\u043d\u043e\u0435, \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e.',
        originalLang: 'ru',
        source: { en: 'Three Sisters (Act I)', zh: '《三姐妹》（第一幕）' },
        year: 1901,
        speaker: { en: 'Masha', zh: '玛莎' },
      },
      {
        text: {
          en: 'What does it matter? In two hundred or three hundred years life on earth will be unimaginably beautiful, astonishing. Man needs such a life, and if it hasn\'t come yet he must anticipate it, wait for it, dream about it.',
          zh: '那又有什么关系呢？再过两三百年，地球上的生活将美得难以想象，令人惊叹。人需要这样的生活，如果它还没到来，他就必须预见它，等待它，梦想它。',
        },
        original: '\u0427\u0442\u043e \u0436? \u0427\u0435\u0440\u0435\u0437 \u0434\u0432\u0435\u0441\u0442\u0438-\u0442\u0440\u0438\u0441\u0442\u0430 \u043b\u0435\u0442 \u0436\u0438\u0437\u043d\u044c \u043d\u0430 \u0437\u0435\u043c\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0432\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u043c\u043e \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e\u0439, \u0438\u0437\u0443\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439.',
        originalLang: 'ru',
        source: { en: 'Three Sisters (Act I)', zh: '《三姐妹》（第一幕）' },
        year: 1901,
        speaker: { en: 'Vershinin', zh: '韦尔什宁' },
      },
    ],
  },
  {
    slug: 'bertolt-brecht',
    name: { en: 'Bertolt Brecht', zh: '贝托尔特\u00b7布莱希特' },
    years: '1898–1956',
    nationality: { en: 'German', zh: '德国' },
    bio: {
      en: 'German dramatist and poet who developed epic theater, using alienation effects to provoke critical thinking about society, politics, and injustice.',
      zh: '德国剧作家和诗人，发展了史诗剧场，运用间离效果激发观众对社会、政治和不公正的批判性思考。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Bertolt_Brecht',
      zh: 'https://zh.wikipedia.org/wiki/%E8%B4%9D%E6%89%98%E5%B0%94%E7%89%B9%C2%B7%E5%B8%83%E8%8E%B1%E5%B8%8C%E7%89%B9',
    },
    quotes: [
      {
        text: {
          en: 'Unhappy is the land that needs a hero.',
          zh: '需要英雄的国家是不幸的。',
        },
        original: 'Unglücklich das Land, das Helden nötig hat.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'Life of Galileo (Scene 13)', zh: '《伽利略传》（第十三场）' },
        year: 1939,
        speaker: { en: 'Galileo', zh: '伽利略' },
      },
      {
        text: {
          en: 'Do not fear death so much, but rather the inadequate life.',
          zh: '不要太害怕死亡，而要害怕不充分的生活。',
        },
        original: 'Fürchte nicht so sehr den Tod, sondern das unzulängliche Leben.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Mother (Scene 11)', zh: '《母亲》（第十一场）' },
        year: 1932,
      },
      {
        text: {
          en: 'Would it not be easier in that case for the government to dissolve the people and elect another?',
          zh: '那样的话，政府解散人民，另选一批人民，岂不更简单？',
        },
        original: 'Wäre es da nicht doch einfacher, die Regierung löste das Volk auf und wählte ein anderes?',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: '"The Solution"', zh: '《解决办法》' },
        year: 1953,
      },
      {
        text: {
          en: 'What is the robbing of a bank compared to the founding of a bank?',
          zh: '抢劫一家银行和创办一家银行相比，又算得了什么？',
        },
        original: 'Was ist ein Einbruch in eine Bank gegen die Gr\u00fcndung einer Bank?',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Threepenny Opera (Act III)', zh: '《三分钱歌剧》（第三幕）' },
        year: 1928,
        speaker: { en: 'Macheath', zh: '麦基' },
      },
      {
        text: {
          en: 'In the dark times, will there also be singing? Yes, there will also be singing. About the dark times.',
          zh: '在黑暗的时代，还会有歌唱吗？是的，也会有歌唱。歌唱那黑暗的时代。',
        },
        original: 'In den finsteren Zeiten, wird da auch gesungen werden? Ja, da wird auch gesungen werden. Von den finsteren Zeiten.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'Motto to the Svendborg Poems', zh: '《斯文堡诗集》题词' },
        year: 1939,
      },
    ],
  },
  {
    slug: 'tennessee-williams',
    name: { en: 'Tennessee Williams', zh: '田纳西\u00b7威廉斯' },
    years: '1911–1983',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Two-time Pulitzer Prize-winning American playwright whose poetic, emotionally raw dramas of the American South explored desire, loneliness, and psychological fragility.',
      zh: '两度获得普利策奖的美国剧作家，其诗意而情感赤裸的美国南方戏剧探索了欲望、孤独和心理脆弱性。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Tennessee_Williams',
      zh: 'https://zh.wikipedia.org/wiki/%E7%94%B0%E7%BA%B3%E8%A5%BF%C2%B7%E5%A8%81%E5%BB%89%E6%96%AF',
    },
    quotes: [
      {
        text: {
          en: 'I have always depended on the kindness of strangers.',
          zh: '我一直依赖陌生人的善意。',
        },
        original: 'I have always depended on the kindness of strangers.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Streetcar Named Desire (Scene 11)', zh: '《欲望号街车》（第十一场）' },
        year: 1947,
        speaker: { en: 'Blanche DuBois', zh: '布兰奇\u00b7杜波依斯' },
      },
      {
        text: {
          en: 'In memory everything seems to happen to music.',
          zh: '在记忆中，一切似乎都伴随着音乐发生。',
        },
        original: 'In memory everything seems to happen to music.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Glass Menagerie (Scene 1)', zh: '《玻璃动物园》（第一场）' },
        year: 1944,
        speaker: { en: 'Tom Wingfield', zh: '汤姆\u00b7温菲尔德' },
      },
      {
        text: {
          en: 'When so many are lonely as seem to be lonely, it would be inexcusably selfish to be lonely alone.',
          zh: '当如此多的人似乎都很孤独时，独自孤独是不可原谅的自私。',
        },
        original: 'When so many are lonely as seem to be lonely, it would be inexcusably selfish to be lonely alone.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Camino Real (Block 2)', zh: '《卡米诺\u00b7雷亚尔》（第二段）' },
        year: 1953,
      },
      {
        text: {
          en: 'A prayer for the wild of heart kept in cages.',
          zh: '为关在笼中的狂野心灵祈祷。',
        },
        original: 'A prayer for the wild of heart kept in cages.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Stairs to the Roof (epigraph)', zh: '《通往屋顶的阶梯》（题词）' },
        year: 1941,
      },
    ],
  },
  {
    slug: 'henrik-ibsen',
    name: { en: 'Henrik Ibsen', zh: '亨里克\u00b7易卜生' },
    years: '1828–1906',
    nationality: { en: 'Norwegian', zh: '挪威' },
    bio: {
      en: 'The father of modern realistic drama, whose socially challenging plays like A Doll\'s House and Hedda Gabler shattered Victorian theatrical conventions and sparked worldwide debate.',
      zh: '现代写实主义戏剧之父，《玩偶之家》和《海达\u00b7高布乐》等挑战社会的剧作打破了维多利亚时代的戏剧常规，引发全球讨论。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Henrik_Ibsen',
      zh: 'https://zh.wikipedia.org/wiki/%E4%BA%A8%E9%87%8C%E5%85%8B%C2%B7%E6%98%93%E5%8D%9C%E7%94%9F',
    },
    quotes: [
      {
        text: {
          en: 'A thousand words will not leave so deep an impression as one deed.',
          zh: '千言万语留下的印象，不如一个行动来得深刻。',
        },
        original: 'Tusind Ord vil ikke efterlade saa dybt et Indtryk som en Handling.',
        originalLang: 'no',
        originalLocale: 'en',
        source: { en: 'Pillars of Society', zh: '《社会支柱》' },
        year: 1877,
      },
      {
        text: {
          en: 'The strongest man in the world is he who stands most alone.',
          zh: '世界上最强大的人是最孤独的人。',
        },
        original: 'Den stærkeste Mand i Verden, det er han, som staar mest alene.',
        originalLang: 'no',
        originalLocale: 'en',
        source: { en: 'An Enemy of the People (Act V)', zh: '《人民公敌》（第五幕）' },
        year: 1882,
        speaker: { en: 'Dr. Stockmann', zh: '斯多克芒医生' },
      },
    ],
  },
  {
    slug: 'arthur-miller',
    name: { en: 'Arthur Miller', zh: '阿瑟\u00b7米勒' },
    years: '1915–2005',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Pulitzer Prize-winning American playwright who dissected the American Dream\'s dark underbelly through morally complex family dramas that defined postwar American theater.',
      zh: '普利策奖美国剧作家，通过道德复杂的家庭戏剧剖析了美国梦的黑暗面，定义了战后美国戏剧。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Arthur_Miller',
      zh: 'https://zh.wikipedia.org/wiki/%E9%98%BF%E7%91%9F%C2%B7%E7%B1%B3%E5%8B%92',
    },
    quotes: [
      {
        text: {
          en: 'Attention, attention must be finally paid to such a person.',
          zh: '必须注意，必须最终关注这样一个人。',
        },
        original: 'Attention, attention must be finally paid to such a person.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Death of a Salesman (Act I)', zh: '《推销员之死》（第一幕）' },
        year: 1949,
        speaker: { en: 'Linda Loman', zh: '琳达\u00b7洛曼' },
      },
      {
        text: {
          en: 'He\'s not the finest character that ever lived. But he\'s a human being, and a terrible thing is happening to him. So attention must be paid.',
          zh: '他不是有史以来最好的人。但他是一个人，一件可怕的事情正在发生在他身上。所以必须关注。',
        },
        original: 'He\'s not the finest character that ever lived. But he\'s a human being, and a terrible thing is happening to him. So attention must be paid.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Death of a Salesman (Act I)', zh: '《推销员之死》（第一幕）' },
        year: 1949,
        speaker: { en: 'Linda Loman', zh: '琳达\u00b7洛曼' },
      },
      {
        text: {
          en: 'Maybe all one can do is hope to end up with the right regrets.',
          zh: '也许一个人能做的，就是希望最终留下的是正确的遗憾。',
        },
        original: 'Maybe all one can do is hope to end up with the right regrets.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Ride Down Mt. Morgan', zh: '《摩根山的下坡路》' },
        year: 1991,
      },
      {
        text: {
          en: 'The task of the real intellectual consists of analyzing illusions in order to discover their causes.',
          zh: '真正的知识分子的任务在于分析幻象，以发现其成因。',
        },
        original: 'The task of the real intellectual consists of analyzing illusions in order to discover their causes.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Attributed (interview)', zh: '传为其语（访谈）' },
      },
    ],
  },
  {
    slug: 'sophocles',
    name: { en: 'Sophocles', zh: '索福克勒斯' },
    years: 'c. 496–406 BC',
    nationality: { en: 'Greek', zh: '古希腊' },
    bio: {
      en: 'Ancient Athenian tragedian who perfected Greek drama with works like Oedipus Rex and Antigone, exploring fate, moral law, and the limits of human knowledge.',
      zh: '古雅典悲剧家，以《俄狄浦斯王》和《安提戈涅》等作品完善了希腊戏剧，探索命运、道德律和人类认知的局限。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Sophocles',
      zh: 'https://zh.wikipedia.org/wiki/%E7%B4%A2%E7%A6%8F%E5%85%8B%E5%8B%92%E6%96%AF',
    },
    quotes: [
      {
        text: {
          en: 'Count no man happy until he is dead.',
          zh: '在死亡之前，不要称任何人为幸福。',
        },
        original: 'Count no man happy until he is dead.',
        originalLang: 'grc',
        originalLocale: 'en',
        source: { en: 'Oedipus Rex', zh: '《俄狄浦斯王》' },
        year: -429,
        speaker: { en: 'Chorus', zh: '歌队' },
      },
      {
        text: {
          en: 'All men make mistakes, but a good man yields when he knows his course is wrong, and repairs the evil. The only crime is pride.',
          zh: '所有人都会犯错，但一个好人在认识到自己走错了路时会改正，弥补过失。唯一的罪是傲慢。',
        },
        original: 'All men make mistakes, but a good man yields when he knows his course is wrong, and repairs the evil. The only crime is pride.',
        originalLang: 'grc',
        originalLocale: 'en',
        source: { en: 'Antigone', zh: '《安提戈涅》' },
        year: -441,
      },
      {
        text: {
          en: 'One word frees us of all the weight and pain of life: that word is love.',
          zh: '有一个字能把我们从生命的全部重负和痛苦中解脱出来：那个字就是爱。',
        },
        original: 'One word frees us of all the weight and pain of life: that word is love.',
        originalLang: 'grc',
        originalLocale: 'en',
        source: { en: 'Oedipus at Colonus', zh: '《俄狄浦斯在科洛诺斯》' },
        year: -401,
      },
      {
        text: {
          en: 'There is no happiness where there is no wisdom.',
          zh: '没有智慧的地方就没有幸福。',
        },
        original: 'There is no happiness where there is no wisdom.',
        originalLang: 'grc',
        originalLocale: 'en',
        source: { en: 'Antigone', zh: '《安提戈涅》' },
        year: -441,
        speaker: { en: 'Chorus', zh: '歌队' },
      },
    ],
  },
  {
    slug: 'euripides',
    name: { en: 'Euripides', zh: '欧里庇得斯' },
    years: 'c. 480–406 BC',
    nationality: { en: 'Greek', zh: '古希腊' },
    bio: {
      en: 'The most psychologically modern of the ancient Greek tragedians, who gave voice to women, slaves, and outsiders with radical empathy and moral ambiguity.',
      zh: '古希腊悲剧家中最具现代心理深度的一位，以激进的同理心和道德模糊性赋予女性、奴隶和边缘人以声音。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Euripides',
      zh: 'https://zh.wikipedia.org/wiki/%E6%AC%A7%E9%87%8C%E5%BA%87%E5%BE%97%E6%96%AF',
    },
    quotes: [
      {
        text: {
          en: 'Whom the gods would destroy, they first make mad.',
          zh: '上天欲使其灭亡，必先使其疯狂。',
        },
        original: 'Whom the gods would destroy, they first make mad.',
        originalLang: 'grc',
        originalLocale: 'en',
        comment: { en: 'The specific English phrasing originates from Longfellow (1875). The concept appears in ancient Greek literature (Sophocles, Aeschylus) but this exact formulation is not reliably attributed to Euripides.', zh: '这一英文表述源自朗费罗(1875)。该概念见于古希腊文学（索福克勒斯、埃斯库罗斯），但这一确切措辞并非可靠地归于欧里庇得斯。' },
        source: { en: 'Attributed (fragment)', zh: '传世残篇' },
      },
      {
        text: {
          en: 'No one can confidently say that he will still be living tomorrow.',
          zh: '没有人能自信地说他明天还会活着。',
        },
        original: 'No one can confidently say that he will still be living tomorrow.',
        originalLang: 'grc',
        originalLocale: 'en',
        source: { en: 'Alcestis', zh: '《阿尔刻斯提斯》' },
        year: -438,
      },
    ],
  },
  {
    slug: 'harold-pinter',
    name: { en: 'Harold Pinter', zh: '哈罗德\u00b7品特' },
    years: '1930–2008',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'Nobel Prize-winning British playwright whose menacing silences, elliptical dialogue, and "comedy of menace" made him one of the most influential dramatists of the twentieth century.',
      zh: '英国诺贝尔文学奖得主剧作家，以威胁性的沉默、隐晦的对话和"威胁喜剧"成为二十世纪最具影响力的剧作家之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Harold_Pinter',
      zh: 'https://zh.wikipedia.org/wiki/%E5%93%88%E7%BD%97%E5%BE%B7%C2%B7%E5%93%81%E7%89%B9',
    },
    quotes: [
      {
        text: {
          en: 'There are no hard distinctions between what is real and what is unreal, nor between what is true and what is false.',
          zh: '真实与不真实之间没有明确的界限，真相与谎言之间也没有。',
        },
        original: 'There are no hard distinctions between what is real and what is unreal, nor between what is true and what is false.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Nobel Lecture: Art, Truth & Politics', zh: '诺贝尔演讲《艺术、真相与政治》' },
        year: 2005,
      },
      {
        text: {
          en: 'One way of looking at speech is to say it is a constant stratagem to cover nakedness.',
          zh: '看待言语的一种方式是：它是掩盖赤裸的永恒策略。',
        },
        original: 'One way of looking at speech is to say it is a constant stratagem to cover nakedness.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Speech: Writing for the Theatre', zh: '演讲《为剧场写作》' },
        year: 1962,
      },
      {
        text: {
          en: 'The more acute the experience, the less articulate its expression.',
          zh: '体验越深刻，表达就越难以言说。',
        },
        original: 'The more acute the experience, the less articulate its expression.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Speech: Writing for the Theatre', zh: '演讲《为剧场写作》' },
        year: 1962,
      },
      {
        text: {
          en: 'I think we communicate only too well, in our silence, in what is unsaid.',
          zh: '我认为我们在沉默中、在未说出口的话中，沟通得太好了。',
        },
        original: 'I think we communicate only too well, in our silence, in what is unsaid.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Speech: Writing for the Theatre', zh: '演讲《为剧场写作》' },
        year: 1962,
      },
      {
        text: {
          en: 'Apart from the known and the unknown, what is there?',
          zh: '除了已知与未知之外，还有什么？',
        },
        original: 'Apart from the known and the unknown, what is there?',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Homecoming (Act II)', zh: '《归乡》（第二幕）' },
        year: 1965,
        speaker: { en: 'Lenny', zh: '伦尼' },
      },
      {
        text: {
          en: 'The thing is not to treat it as a question of morals. It is a question of the way we live.',
          zh: '问题不在于把它当作道德问题来对待。这是关于我们生活方式的问题。',
        },
        original: 'The thing is not to treat it as a question of morals. It is a question of the way we live.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Homecoming (Act II)', zh: '《归乡》（第二幕）' },
        year: 1965,
        speaker: { en: 'Max', zh: '马克斯' },
      },
    ],
  },
  {
    slug: 'tom-stoppard',
    name: { en: 'Tom Stoppard', zh: '汤姆\u00b7斯托帕德' },
    years: '1937–',
    nationality: { en: 'Czech-British', zh: '捷克裔英国' },
    bio: {
      en: 'Czech-born British playwright celebrated for intellectually dazzling, verbally acrobatic plays that merge philosophy, science, and human comedy with theatrical inventiveness.',
      zh: '捷克裔英国剧作家，以才智闪耀、语言杂技般的戏剧将哲学、科学和人间喜剧与戏剧创造力融为一体。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Tom_Stoppard',
      zh: 'https://zh.wikipedia.org/wiki/%E6%B1%A4%E5%A7%86%C2%B7%E6%96%AF%E6%89%98%E5%B8%95%E5%BE%B7',
    },
    quotes: [
      {
        text: {
          en: 'Every exit is an entry somewhere else.',
          zh: '每一个出口都是另一个地方的入口。',
        },
        original: 'Every exit is an entry somewhere else.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Rosencrantz and Guildenstern Are Dead', zh: '《罗森克兰茨和吉尔登斯特恩已死》' },
        year: 1966,
        speaker: { en: 'Player', zh: '演员' },
      },
      {
        text: {
          en: 'We\'re actors. We\'re the opposite of people.',
          zh: '我们是演员。我们是人的反面。',
        },
        original: 'We\'re actors. We\'re the opposite of people.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Rosencrantz and Guildenstern Are Dead', zh: '《罗森克兰茨和吉尔登斯特恩已死》' },
        year: 1966,
        speaker: { en: 'Player', zh: '演员' },
      },
    ],
  },
  {
    slug: 'august-wilson',
    name: { en: 'August Wilson', zh: '奥古斯特\u00b7威尔逊' },
    years: '1945–2005',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Two-time Pulitzer Prize-winning American playwright whose ten-play Pittsburgh Cycle chronicled the African American experience across each decade of the twentieth century.',
      zh: '两次获得普利策奖的美国剧作家，其十部匹兹堡系列剧记录了二十世纪每个十年中非裔美国人的经历。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/August_Wilson',
      zh: 'https://zh.wikipedia.org/wiki/%E5%A5%A5%E5%8F%A4%E6%96%AF%E7%89%B9%C2%B7%E5%A8%81%E5%B0%94%E9%80%8A',
    },
    quotes: [
      {
        text: {
          en: 'You got to go out and meet life halfway. Can\'t just sit around waiting on it.',
          zh: '你得走出去与生活半路相遇。不能只是坐着等它来。',
        },
        original: 'You got to go out and meet life halfway. Can\'t just sit around waiting on it.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Fences (Act I, Scene 3)', zh: '《藩篱》（第一幕第三场）' },
        year: 1985,
        speaker: { en: 'Troy Maxson', zh: '特洛伊\u00b7马克森' },
      },
      {
        text: {
          en: 'All you need in the world is love and laughter. That\'s all anybody needs. To have love in one hand and laughter in the other.',
          zh: '世界上你需要的不过是爱与欢笑。这就是每个人需要的一切。一手握着爱，一手握着欢笑。',
        },
        original: 'All you need in the world is love and laughter. That\'s all anybody needs. To have love in one hand and laughter in the other.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Joe Turner\'s Come and Gone', zh: '《乔\u00b7特纳来了又走了》' },
        year: 1986,
      },
    ],
  },
  {
    slug: 'eugene-ionesco',
    name: { en: 'Eug\u00e8ne Ionesco', zh: '欧仁\u00b7尤内斯库' },
    years: '1909–1994',
    nationality: { en: 'Romanian-French', zh: '罗马尼亚裔法国' },
    bio: {
      en: 'Romanian-French playwright and leading figure of the Theatre of the Absurd, whose surreal, darkly comic plays exposed the emptiness of bourgeois language and conformity.',
      zh: '罗马尼亚裔法国剧作家，荒诞派戏剧的领军人物，以超现实的黑色喜剧揭露资产阶级语言与从众的空洞。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Eug%C3%A8ne_Ionesco',
      zh: 'https://zh.wikipedia.org/wiki/%E5%B0%A4%E5%86%85%E6%96%AF%E5%BA%93',
    },
    quotes: [
      {
        text: {
          en: 'Ideologies separate us. Dreams and anguish bring us together.',
          zh: '意识形态使我们分离。梦想和痛苦使我们团结。',
        },
        original: 'Les idéologies nous séparent. Les rêves et les angoisses nous rassemblent.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Fragments of a Journal', zh: '《日记片段》' },
        year: 1967,
      },
      {
        text: {
          en: 'A nose that can see is worth two that sniff.',
          zh: '一个能看见的鼻子，胜过两个只会嗅的。',
        },
        original: 'A nose that can see is worth two that sniff.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Rhinoceros (Act II)', zh: '《犀牛》（第二幕）' },
        year: 1959,
      },
    ],
  },
  {
    slug: 'luigi-pirandello',
    name: { en: 'Luigi Pirandello', zh: '路易吉\u00b7皮兰德娄' },
    years: '1867–1936',
    nationality: { en: 'Italian', zh: '意大利' },
    bio: {
      en: 'Nobel Prize-winning Italian dramatist who pioneered metatheatrical innovation, dissolving the boundaries between reality and performance, actor and character.',
      zh: '意大利诺贝尔文学奖剧作家，开创了元戏剧的创新，消解了现实与表演、演员与角色之间的界限。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Luigi_Pirandello',
      zh: 'https://zh.wikipedia.org/wiki/%E8%B7%AF%E4%BC%8A%E5%90%89%C2%B7%E7%9A%AE%E5%85%B0%E5%BE%B7%E5%A8%84',
    },
    quotes: [
      {
        text: {
          en: 'It is so, if you think so.',
          zh: '如果你这么认为，那就是这样。',
        },
        original: 'Così è (se vi pare).',
        originalLang: 'it',
        originalLocale: 'en',
        source: { en: 'Right You Are (If You Think So)', zh: '《各是其是》' },
        year: 1917,
      },
      {
        text: {
          en: 'A fact is like a sack \u2013 it won\'t stand up if it\'s empty. To make it stand up, you have to put in it all the reasons and feelings that caused it in the first place.',
          zh: '事实就像一只麻袋——空的立不起来。要让它立起来，你得把最初引发它的所有原因和感受都放进去。',
        },
        original: 'A fact is like a sack \u2013 it won\'t stand up if it\'s empty. To make it stand up, you have to put in it all the reasons and feelings that caused it in the first place.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Six Characters in Search of an Author', zh: '《六个寻找剧作家的角色》' },
        year: 1921,
        speaker: { en: 'The Father', zh: '父亲' },
      },
    ],
  },
  {
    slug: 'moliere',
    name: { en: 'Moli\u00e8re', zh: '莫里哀' },
    years: '1622–1673',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'France\'s greatest comic playwright, whose satirical masterpieces skewered hypocrisy, pretension, and social folly with a wit that remains razor-sharp across centuries.',
      zh: '法国最伟大的喜剧剧作家，其讽刺杰作以历经数百年仍然锋利的机智针砭虚伪、做作和社会愚行。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Moli%C3%A8re',
      zh: 'https://zh.wikipedia.org/wiki/%E8%8E%AB%E9%87%8C%E5%93%80',
    },
    quotes: [
      {
        text: {
          en: 'The greater the obstacle, the more glory in overcoming it.',
          zh: '障碍越大，克服它的荣耀也越大。',
        },
        original: 'Plus l\'obstacle est puissant, plus on reçoit de gloire.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Blunderer (Act V, Scene 6)', zh: '《冒失鬼》（第五幕第六场）' },
        year: 1655,
      },
      {
        text: {
          en: 'One ought to examine oneself a great deal before thinking of condemning others.',
          zh: '在想要谴责别人之前，应当先好好审视自己。',
        },
        original: 'On doit se regarder soi-même un fort long temps avant que de songer à condamner les gens.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Misanthrope (Act III)', zh: '《恨世者》（第三幕）' },
        year: 1666,
      },
    ],
  },
  {
    slug: 'tony-kushner',
    name: { en: 'Tony Kushner', zh: '托尼\u00b7库什纳' },
    years: '1956–',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'Pulitzer Prize and Tony Award-winning American playwright whose epic Angels in America became a landmark of political theater, weaving AIDS, Mormonism, and McCarthyism into a visionary American fantasia.',
      zh: '普利策奖和托尼奖得主美国剧作家，史诗剧作《天使在美国》成为政治戏剧的里程碑，将艾滋病、摩门教和麦卡锡主义编织成一部充满远见的美国幻想曲。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Tony_Kushner',
      zh: 'https://zh.wikipedia.org/wiki/%E6%89%98%E5%B0%BC%C2%B7%E5%BA%93%E4%BB%80%E7%BA%B3',
    },
    quotes: [
      {
        text: {
          en: 'The world only spins forward. We will be citizens. The time has come.',
          zh: '世界只会向前转。我们将成为公民。时候到了。',
        },
        original: 'The world only spins forward. We will be citizens. The time has come.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Angels in America: Perestroika (Act V)', zh: '《天使在美国：改革》（第五幕）' },
        year: 1992,
        speaker: { en: 'Prior Walter', zh: '普莱尔\u00b7沃尔特' },
      },
      {
        text: {
          en: 'You are fabulous creatures, each and every one. And I bless you: more life.',
          zh: '你们是了不起的生灵，每一个。我祝福你们：更多的生命。',
        },
        original: 'You are fabulous creatures, each and every one. And I bless you: more life.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Angels in America: Perestroika (Epilogue)', zh: '《天使在美国：改革》（尾声）' },
        year: 1992,
        speaker: { en: 'Prior Walter', zh: '普莱尔\u00b7沃尔特' },
      },
    ],
  },
  {
    slug: 'sarah-kane',
    name: { en: 'Sarah Kane', zh: '萨拉\u00b7凯恩' },
    years: '1971–1999',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British playwright whose visceral, formally radical works pushed theater to its emotional extremes, confronting violence, love, and despair with unflinching honesty.',
      zh: '英国剧作家，其粗粝而形式激进的作品将戏剧推向情感的极端，以毫不退缩的诚实面对暴力、爱情和绝望。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Sarah_Kane',
      zh: 'https://zh.wikipedia.org/wiki/%E8%90%A8%E6%8B%89%C2%B7%E5%87%AF%E6%81%A9',
    },
    quotes: [
      {
        text: {
          en: 'Please open the curtains.',
          zh: '请拉开窗帘。',
        },
        original: 'Please open the curtains.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: '4.48 Psychosis', zh: '《4.48精神崩溃》' },
        year: 2000,
      },
      {
        text: {
          en: 'It is myself I have never met, whose face is pasted on the underside of my mind.',
          zh: '我从未遇见的是我自己，那张贴在我意识背面的脸。',
        },
        original: 'It is myself I have never met, whose face is pasted on the underside of my mind.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: '4.48 Psychosis', zh: '《4.48精神崩溃》' },
        year: 2000,
      },
    ],
  },
  {
    slug: 'tang-xianzu',
    name: { en: 'Tang Xianzu', zh: '汤显祖' },
    years: '1550–1616',
    nationality: { en: 'Chinese (Ming Dynasty)', zh: '中国（明朝）' },
    bio: {
      en: 'The greatest dramatist of the Ming Dynasty, often called "China\'s Shakespeare," whose masterpiece The Peony Pavilion elevated kunqu opera with its lyrical exploration of love, dream, and death.',
      zh: '明代最伟大的戏剧家，被誉为"中国的莎士比亚"，代表作《牡丹亭》以抒情的笔触探索爱情、梦境与死亡，将昆曲提升至艺术巅峰。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Tang_Xianzu',
      zh: 'https://zh.wikipedia.org/wiki/%E6%B1%A4%E6%98%BE%E7%A5%96',
    },
    quotes: [
      {
        text: {
          en: 'In this world, is there anything more real than love? Love can bring the dead back to life, and make the living die.',
          zh: '情不知所起，一往而深，生者可以死，死可以生。',
        },
        original: '情不知所起，一往而深，生者可以死，死可以生。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'The Peony Pavilion (Preface)', zh: '《牡丹亭\u00b7题词》' },
        year: 1598,
      },
      {
        text: {
          en: 'So it turns out that brilliant purples and reds bloom everywhere, yet all are given over to broken wells and crumbling walls.',
          zh: '原来姹紫嫣红开遍，似这般都付与断井颓垣。',
        },
        original: '原来姹紫嫣红开遍，似这般都付与断井颓垣。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'The Peony Pavilion (Scene 10: The Dream)', zh: '《牡丹亭\u00b7惊梦》' },
        year: 1598,
        speaker: { en: 'Du Liniang', zh: '杜丽娘' },
      },
    ],
  },
  {
    slug: 'cao-yu',
    name: { en: 'Cao Yu', zh: '曹禺' },
    years: '1910–1996',
    nationality: { en: 'Chinese', zh: '中国' },
    bio: {
      en: 'China\'s foremost modern dramatist, whose debut Thunderstorm at age twenty-three established spoken drama as a major literary form in China and remains its most performed play.',
      zh: '中国最重要的现代剧作家，二十三岁时以处女作《雷雨》确立了话剧在中国文学中的重要地位，至今仍是上演最多的话剧。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Cao_Yu',
      zh: 'https://zh.wikipedia.org/wiki/%E6%9B%B9%E7%A6%BA',
    },
    quotes: [
      {
        text: {
          en: 'The most painful thing in this world is being awake in a dream.',
          zh: '在这个世界上，最痛苦的事就是在梦中清醒。',
        },
        original: '在这个世界上，最痛苦的事就是在梦中清醒。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Thunderstorm', zh: '《雷雨》' },
        year: 1934,
      },
      {
        text: {
          en: 'The sun has risen. The darkness is left behind. But the sun is not ours; we shall sleep.',
          zh: '太阳升起来了，黑暗留在后面。但是太阳不是我们的，我们要睡了。',
        },
        original: '太阳升起来了，黑暗留在后面。但是太阳不是我们的，我们要睡了。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Sunrise (Act IV)', zh: '《日出》（第四幕）' },
        year: 1936,
      },
      {
        text: {
          en: 'People are always in a hopeless situation, yet they always try to find a way out.',
          zh: '人们总是在绝望中挣扎，却又总想寻找出路。',
        },
        original: '人们总是在绝望中挣扎，却又总想寻找出路。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Thunderstorm (Preface)', zh: '《雷雨》（序）' },
        year: 1934,
      },
      {
        text: {
          en: 'What I wrote is a poem, a narrative poem... I did not use realistic techniques; what I wanted to write was a mood.',
          zh: '我写的是一首诗，一首叙事诗……我用的不是写实的笔墨，我要写出的是一种情绪。',
        },
        original: '我写的是一首诗，一首叙事诗……我用的不是写实的笔墨，我要写出的是一种情绪。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Preface to Thunderstorm', zh: '《雷雨·序》' },
        year: 1936,
      },
    ],
  },
  {
    slug: 'aeschylus',
    name: { en: 'Aeschylus', zh: '埃斯库罗斯' },
    years: 'c. 525–456 BC',
    nationality: { en: 'Greek', zh: '古希腊' },
    bio: {
      en: 'Dramatist and "father of tragedy" who introduced the second actor to the stage, transforming ritual into drama. His Oresteia is the only complete ancient Greek tragic trilogy to survive.',
      zh: '剧作家，被誉为"悲剧之父"，将第二个演员引入舞台，将仪式转变为戏剧。其《奥瑞斯提亚》是唯一完整留存的古希腊悲剧三部曲。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Aeschylus',
      zh: 'https://zh.wikipedia.org/wiki/埃斯库罗斯',
    },
    quotes: [
      {
        text: {
          en: 'He who learns must suffer. And even in our sleep, pain that cannot forget falls drop by drop upon the heart, and in our own despair, against our will, comes wisdom to us by the awful grace of God.',
          zh: '学习的人必须受苦。即使在睡梦中，无法忘记的痛苦一滴一滴落在心上，在我们自己的绝望中，违背我们的意愿，智慧通过上帝可畏的恩典降临于我们。',
        },
        originalLang: 'grc',
        source: { en: 'Agamemnon (Oresteia)', zh: '《阿伽门农》（《奥瑞斯提亚》）' },
        year: -458,
      },
      {
        text: {
          en: 'In war, truth is the first casualty.',
          zh: '在战争中，真相是第一个牺牲品。',
        },
        originalLang: 'grc',
        source: { en: 'Attributed', zh: '传统归属' },
        comment: {
          en: 'Widely attributed to Aeschylus but the exact source is debated. Similar sentiments appear in various ancient texts.',
          zh: '广泛归于埃斯库罗斯名下，但确切来源有争议。类似的观点出现在各种古代文献中。',
        },
      },
      {
        text: {
          en: 'I would rather be ignorant than knowledgeable of evils.',
          zh: '我宁愿对恶一无所知，也不愿精通于它。',
        },
        originalLang: 'grc',
        source: { en: 'The Suppliants', zh: '《乞援女》' },
        year: -463,
      },
    ],
  },
  {
    slug: 'soyinka',
    name: { en: 'Wole Soyinka', zh: '沃莱·索因卡' },
    years: '1934–',
    nationality: { en: 'Nigerian', zh: '尼日利亚' },
    bio: {
      en: 'Nobel laureate playwright, poet, and memoirist whose work draws on Yoruba mythology and ritual to confront the collisions between tradition and modernity, the exercise of power, and the testimony of the political prisoner.',
      zh: '诺贝尔文学奖剧作家、诗人与回忆录作者，其作品借助约鲁巴神话与仪式，直面传统与现代的碰撞、权力的行使以及政治犯的证词。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Wole_Soyinka',
      zh: 'https://zh.wikipedia.org/wiki/%E6%B2%83%E8%8E%B1%C2%B7%E7%B4%A2%E5%9B%A0%E5%8D%A1',
    },
    quotes: [
      {
        text: {
          en: 'The man dies in all who keep silent in the face of tyranny.',
          zh: '在面对暴政保持沉默的所有人身上，那个人已经死去。',
        },
        originalLang: 'en',
        source: { en: 'The Man Died: Prison Notes', zh: '《人已死去：狱中笔记》' },
        year: 1972,
      },
      {
        text: {
          en: 'A tiger does not proclaim his tigritude. He pounces. In the same way, I think a writer simply writes.',
          zh: '老虎不宣告自己的虎性。它直接扑上去。同样地，我认为一个作家只是写作。',
        },
        originalLang: 'en',
        source: { en: 'Response to Négritude (1962 African Writers Conference)', zh: '回应"黑人性"（1962年非洲作家会议）' },
        year: 1962,
      },
      {
        text: {
          en: 'The greatest threat to freedom is the absence of criticism.',
          zh: '对自由最大的威胁是批评的缺席。',
        },
        originalLang: 'en',
        source: { en: 'The Open Sore of a Continent', zh: '《一个大陆的裸露伤口》' },
        year: 1996,
      },
      {
        text: {
          en: 'The hand that dips into the bottom of the pot will eat the biggest snail. The hand that does not reach into the bottom of the pot will eat small snails.',
          zh: '伸到锅底的手会吃到最大的蜗牛。不伸到锅底的手只能吃到小蜗牛。',
        },
        originalLang: 'en',
        source: { en: 'Death and the King\'s Horseman', zh: '《死亡与国王的骑兵》' },
        year: 1975,
        speaker: { en: 'Elesin', zh: '埃莱辛' },
      },
      {
        text: {
          en: 'I have one abiding religion — human liberty. Justice is a God that must be served regardless of the sacrifice.',
          zh: '我有一个永恒的信仰——人的自由。正义是一位必须被侍奉的神，无论需要怎样的牺牲。',
        },
        originalLang: 'en',
        source: { en: 'The Man Died: Prison Notes', zh: '《人已死去：狱中笔记》' },
        year: 1972,
      },
      {
        text: {
          en: 'Books and all forms of writing are terror to those who wish to suppress the truth. The power of the written word terrorizes the oppressor while it liberates the mind of the oppressed.',
          zh: '书籍和一切书写形式，是那些企图压制真相之人的恐惧。文字的力量使压迫者恐惧，同时解放被压迫者的心灵。',
        },
        originalLang: 'en',
        source: { en: 'The Burden of Memory, the Muse of Forgiveness', zh: '《记忆的重负，宽恕的缪斯》' },
        year: 1999,
      },
      {
        text: {
          en: 'Power is domination, control, and therefore a very selective form of truth which is a lie.',
          zh: '权力即支配、控制，因而是一种非常有选择性的真相——也就是谎言。',
        },
        originalLang: 'en',
        source: { en: 'Interview, The Paris Review', zh: '《巴黎评论》访谈' },
        year: 2003,
      },
    ],
  },
  {
    slug: 'fugard',
    name: { en: 'Athol Fugard', zh: '阿索尔·富加德' },
    years: '1932–2025',
    nationality: { en: 'South African', zh: '南非' },
    bio: {
      en: 'South African playwright and actor whose intensely personal dramas exposed the intimate wounds of apartheid — the shame, complicity, and fragile bonds between individuals caught in a system designed to keep them apart.',
      zh: '南非剧作家与演员，其极具个人色彩的戏剧揭露了种族隔离的切身伤痛——羞耻、共谋，以及被一个旨在将人们分隔开来的体制所困的个体之间脆弱的纽带。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Athol_Fugard',
      zh: 'https://zh.wikipedia.org/wiki/%E9%98%BF%E7%B4%A2%E5%B0%94%C2%B7%E5%AF%8C%E5%8A%A0%E5%BE%B7',
    },
    quotes: [
      {
        text: {
          en: 'The only safe place for a man who can\'t dream is a cage. The world is too beautiful to stay awake in without dreams.',
          zh: '一个不能做梦的人唯一安全的地方是笼子。这个世界太美丽了，不能没有梦地醒着。',
        },
        originalLang: 'en',
        source: { en: 'Notebooks 1960–1977', zh: '《笔记本 1960–1977》' },
        year: 1977,
      },
      {
        text: {
          en: 'You know what\'s wrong with your world? You think there is a way things should be. There isn\'t.',
          zh: '你知道你的世界出了什么问题吗？你以为事情应该有一种样子。并没有。',
        },
        originalLang: 'en',
        source: { en: 'The Road to Mecca', zh: '《通往麦加之路》' },
        year: 1984,
      },
      {
        text: {
          en: 'I had a good day. A man is only as good as the company he keeps, and Sam and Willie were my best friends. That was what made it good. That feeling of being with two of the best human beings.',
          zh: '我度过了美好的一天。一个人的好坏取决于他所交往的人，而萨姆和威利是我最好的朋友。正是这一点使那一天美好。与两个最好的人在一起的那种感觉。',
        },
        originalLang: 'en',
        source: { en: '"Master Harold"...and the Boys', zh: '《"哈罗德少爷"……和他的仆人们》' },
        year: 1982,
        speaker: { en: 'Hally', zh: '哈利' },
      },
      {
        text: {
          en: 'The real issue is whether there is a way of living that doesn\'t involve mastering others. If there is, the theater must help us imagine it.',
          zh: '真正的问题是，是否存在一种不涉及支配他人的生活方式。如果有，戏剧必须帮助我们想象它。',
        },
        originalLang: 'en',
        source: { en: 'Notebooks 1960–1977', zh: '《笔记本 1960–1977》' },
        year: 1977,
      },
      {
        text: {
          en: 'Shame was in the room. It was in the air we breathed. I was ashamed of myself, ashamed of my mother, ashamed of my country.',
          zh: '羞耻在房间里。它在我们呼吸的空气中。我为自己羞耻，为我的母亲羞耻，为我的国家羞耻。',
        },
        originalLang: 'en',
        source: { en: '"Master Harold"...and the Boys', zh: '《"哈罗德少爷"……和他的仆人们》' },
        year: 1982,
      },
      {
        text: {
          en: 'My life as a writer and as a South African is so much tangled up that the one is inseparable from the other. I couldn\'t have written as I did about anything else.',
          zh: '我作为作家和作为南非人的生活如此纠缠在一起，以至于两者不可分割。如果写别的什么，我不可能那样写。',
        },
        originalLang: 'en',
        source: { en: 'Statements After an Arrest Under the Immorality Act (Introduction)', zh: '《根据不道德法被捕后的陈述》（导言）' },
        year: 1974,
      },
    ],
  },
  {
    slug: 'muller',
    name: { en: 'Heiner Müller', zh: '海纳·穆勒' },
    years: '1929–1995',
    nationality: { en: 'German', zh: '德国' },
    bio: {
      en: 'German playwright and theater director whose fragmentary, violent texts dismantled the ruins of European history, confronting the failure of socialist utopia and transforming the stage into an open wound that refused to heal.',
      zh: '德国剧作家与戏剧导演，其碎片化、暴烈的文本拆解欧洲历史的废墟，直面社会主义乌托邦的失败，将舞台转化为一道拒绝愈合的裸露伤口。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Heiner_M%C3%BCller',
      zh: 'https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%BA%B3%C2%B7%E7%A9%86%E5%8B%92',
    },
    quotes: [
      {
        text: {
          en: 'I am not Hamlet. I don\'t take a role any longer. My words have nothing to say to me anymore. My drama doesn\'t happen anymore.',
          zh: '我不是哈姆雷特。我不再扮演任何角色。我的话语不再对我有任何意义。我的戏剧不再发生。',
        },
        original: 'Ich bin nicht Hamlet. Ich spiele keine Rolle mehr. Meine Worte haben mir nichts mehr zu sagen. Mein Drama findet nicht mehr statt.',
        originalLang: 'de',
        source: { en: 'Hamletmachine', zh: '《哈姆雷特机器》' },
        year: 1977,
      },
      {
        text: {
          en: 'Optimism is merely a lack of information.',
          zh: '乐观主义不过是信息的匮乏。',
        },
        original: 'Optimismus ist nur ein Mangel an Information.',
        originalLang: 'de',
        source: { en: 'War Without Battle: Life in Two Dictatorships', zh: '《无战之役：两个独裁体制下的人生》' },
        year: 1992,
      },
      {
        text: {
          en: 'To use Brecht without criticizing him is to betray him. What we need is a theater that is not afraid to be painful.',
          zh: '使用布莱希特而不批判他就是背叛他。我们需要的是一种不惧怕痛苦的戏剧。',
        },
        original: 'Brecht gebrauchen, ohne ihn zu kritisieren, ist Verrat.',
        originalLang: 'de',
        source: { en: 'Fatzer ± Keuner (on Brecht)', zh: '《法策尔±科伊纳》（论布莱希特）' },
        year: 1980,
      },
      {
        text: {
          en: 'A text is only alive when it cannot be understood. To understand a text is to destroy it. The task is to keep the text open, like a wound.',
          zh: '一个文本只有在无法被理解时才是活的。理解一个文本就是毁灭它。任务是让文本保持敞开，如同一道伤口。',
        },
        original: 'Ein Text lebt nur, wenn er nicht verstanden werden kann. Einen Text verstehen heißt ihn zerstören.',
        originalLang: 'de',
        source: { en: 'Interview, Theater heute', zh: '《今日戏剧》访谈' },
        year: 1985,
      },
      {
        text: {
          en: 'The first shape of hope is fear. The first appearance of the new is terror.',
          zh: '希望的最初形态是恐惧。新事物的最初面貌是恐怖。',
        },
        original: 'Die erste Gestalt der Hoffnung ist die Furcht. Die erste Erscheinung des Neuen ist der Schrecken.',
        originalLang: 'de',
        source: { en: 'The Task', zh: '《任务》' },
        year: 1979,
      },
      {
        text: {
          en: 'The theater must make the dead speak so that the living can hear themselves. When the stage is empty, history enters.',
          zh: '戏剧必须让死者说话，好让活着的人听见自己。当舞台空无一物时，历史就登场了。',
        },
        original: 'Das Theater muss die Toten zum Sprechen bringen, damit die Lebenden sich hören können.',
        originalLang: 'de',
        source: { en: 'Germania Death in Berlin', zh: '《日耳曼尼亚 柏林之死》' },
        year: 1971,
      },
    ],
  },
  {
    slug: 'churchill',
    name: { en: 'Caryl Churchill', zh: '卡里尔·丘吉尔' },
    years: '1938–',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British playwright whose formally inventive, politically charged work has redefined the possibilities of the stage, using overlapping dialogue, time displacement, and structural estrangement to expose the violence hidden within capitalism, gender, and systems of power.',
      zh: '英国剧作家，其形式创新、政治锋芒的作品重新定义了舞台的可能性，运用重叠对话、时间错位与结构陌生化，揭露隐藏在资本主义、性别与权力体制中的暴力。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Caryl_Churchill',
      zh: 'https://zh.wikipedia.org/wiki/%E5%8D%A1%E9%87%8C%E5%B0%94%C2%B7%E4%B8%98%E5%90%89%E5%B0%94',
    },
    quotes: [
      {
        text: {
          en: 'I think the century can\'t be dealt with by individual characters. The whole structure has to carry the meaning. People are not in charge of their own destinies — systems are.',
          zh: '我认为这个世纪无法通过单个人物来处理。整个结构必须承载意义。人并非自身命运的主宰——体制才是。',
        },
        originalLang: 'en',
        source: { en: 'Interview, The Guardian', zh: '《卫报》访谈' },
        year: 2002,
      },
      {
        text: {
          en: 'Top girls don\'t put themselves forward, / top girls seize the day. / Top girls keep their nerve and look / as if they\'re having a wonderful time.',
          zh: '顶尖女孩不主动出头，／顶尖女孩抓住时机。／顶尖女孩保持镇定，看上去／仿佛她们正过得精彩。',
        },
        originalLang: 'en',
        source: { en: 'Top Girls', zh: '《顶尖女孩》' },
        year: 1982,
      },
      {
        text: {
          en: 'What\'s so frightening? That I might be the same as the next one? That the next one won\'t come from me? How do I know what I feel is what I feel?',
          zh: '什么如此可怕？我可能和下一个一样？下一个不会来自我？我怎么知道我感受到的就是我感受到的？',
        },
        originalLang: 'en',
        source: { en: 'A Number', zh: '《一个数字》' },
        year: 2002,
        speaker: { en: 'Salter / Bernard', zh: '索尔特 / 伯纳德' },
      },
      {
        text: {
          en: 'The terrible thing is that sometimes you look at the world and you can\'t tell what\'s terrible.',
          zh: '可怕的是，有时你看着这个世界，却分辨不出什么是可怕的。',
        },
        originalLang: 'en',
        source: { en: 'Far Away', zh: '《远方》' },
        year: 2000,
      },
      {
        text: {
          en: 'I don\'t see how the theater can fail to be political. Every play is political whether the writer intends it or not. If it supports the status quo, that is a political act. If it\'s silent about injustice, that silence is political.',
          zh: '我不明白戏剧怎么可能不是政治性的。每部剧都是政治性的，无论作者是否有意。如果它支持现状，那就是一种政治行为。如果它对不公保持沉默，那沉默就是政治性的。',
        },
        originalLang: 'en',
        source: { en: 'Interview, New Theatre Quarterly', zh: '《新戏剧季刊》访谈' },
        year: 1988,
      },
      {
        text: {
          en: 'Ordinary things are what I find most frightening. Most political damage is done by ordinary people behaving ordinarily within systems that have extraordinary consequences.',
          zh: '日常之物是我觉得最可怕的。大多数政治伤害是由普通人在具有非凡后果的体制中以普通方式行事所造成的。',
        },
        originalLang: 'en',
        source: { en: 'On Far Away (Royal Court Theatre program)', zh: '关于《远方》（皇家宫廷剧院节目单）' },
        year: 2000,
      },
    ],
  },
];
