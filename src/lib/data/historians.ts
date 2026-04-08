import type { PersonData } from './types';

export const historianData: PersonData[] = [
  {
    slug: 'thucydides',
    name: { en: 'Thucydides', zh: '修昔底德' },
    years: 'c. 460–400 BCE',
    nationality: { en: 'Greek', zh: '希腊' },
    bio: {
      en: 'Athenian historian and general, author of the History of the Peloponnesian War, considered the father of scientific history and political realism.',
      zh: '雅典历史学家与将军，《伯罗奔尼撒战争史》作者，被视为科学历史学和政治现实主义之父。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Thucydides',
      zh: 'https://zh.wikipedia.org/wiki/修昔底德',
    },
    quotes: [
      {
        text: {
          en: 'The strong do what they can and the weak suffer what they must.',
          zh: '强者为所欲为，弱者忍其所必受。',
        },
        original: 'οἱ δυνατοὶ πράσσουσι καὶ οἱ ἀσθενεῖς ξυγχωροῦσι.',
        originalLang: 'grc',
        source: { en: 'History of the Peloponnesian War, V.89 (Melian Dialogue)', zh: '《伯罗奔尼撒战争史》第五卷第89节（米洛斯对话）' },
        year: -411,
      },
      {
        text: {
          en: 'It is a general rule of human nature that people despise those who treat them well, and look up to those who make no concessions.',
          zh: '人之常情，总是轻视善待自己的人，而仰望不肯让步的人。',
        },
        original: 'πεφύκασι γὰρ οἱ ἄνθρωποι τὸ μὲν θεραπεῦον ὑπερφρονεῖν, τὸ δὲ μὴ ὑπεῖκον θαυμάζειν.',
        originalLang: 'grc',
        source: { en: 'History of the Peloponnesian War, III.39', zh: '《伯罗奔尼撒战争史》第三卷第39节' },
        year: -411,
      },
      {
        text: {
          en: 'War is a violent teacher. It reduces most people\'s characters to the level of their circumstances.',
          zh: '战争是一位暴烈的导师。它将多数人的品性降低到与其处境相称的水平。',
        },
        original: 'βίαιος διδάσκαλος ὁ πόλεμος καὶ πρὸς τὰ παρόντα τὰς ὀργὰς τῶν πολλῶν ὁμοιοῖ.',
        originalLang: 'grc',
        source: { en: 'History of the Peloponnesian War, III.82', zh: '《伯罗奔尼撒战争史》第三卷第82节' },
        year: -411,
      },
      {
        text: {
          en: 'The cause of all these evils was the desire for power which greed and ambition inspire. From these arose the fanaticism which attended the rivalries of parties.',
          zh: '这一切罪恶的根源在于贪婪和野心所激发的权力欲。由此产生了伴随党派之争的狂热。',
        },
        original: 'αἰτία δ᾽ ἦν πάντων ἀρχὴ ἡ διὰ πλεονεξίαν καὶ φιλοτιμίαν· ἐκ δ᾽ αὐτῶν καὶ ἐς τὸ φιλονικεῖν καθισταμένων τὸ πρόθυμον.',
        originalLang: 'grc',
        source: { en: 'History of the Peloponnesian War, III.82', zh: '《伯罗奔尼撒战争史》第三卷第82节' },
        year: -411,
      },
      {
        text: {
          en: 'My work is not a piece of writing designed to meet the taste of an immediate public, but was done to last forever.',
          zh: '我的作品不是为迎合一时之众的趣味而写的应景之作，而是要流传千古的。',
        },
        original: 'κτῆμά τε ἐς αἰεὶ μᾶλλον ἢ ἀγώνισμα ἐς τὸ παραχρῆμα ἀκούειν ξύγκειται.',
        originalLang: 'grc',
        source: { en: 'History of the Peloponnesian War, I.22', zh: '《伯罗奔尼撒战争史》第一卷第22节' },
        year: -411,
      },
      {
        text: {
          en: 'In times of peace and prosperity, cities and individuals alike have better dispositions because they are not forced into desperate straits; but war, which strips away the comfortable provisions of daily life, is a violent teacher and assimilates most men\'s passions to their conditions.',
          zh: '在和平繁荣之时，城邦和个人都有更好的品性，因为他们不被逼入绝境；但战争剥夺了日常生活的舒适，是一位暴烈的导师，使大多数人的性情与其处境同化。',
        },
        original: 'ἐν μὲν γὰρ εἰρήνῃ καὶ ἀγαθοῖς πράγμασι βελτίους τὰς γνώμας ἔχουσι καὶ αἱ πόλεις καὶ οἱ ἰδιῶται διὰ τὸ μὴ ἐς ἀκουσίους ἀνάγκας πίπτειν.',
        originalLang: 'grc',
        source: { en: 'History of the Peloponnesian War, III.82', zh: '《伯罗奔尼撒战争史》第三卷第82节' },
        year: -411,
      },
      {
        text: {
          en: 'It was the rise of Athens and the fear that this instilled in Sparta that made war inevitable.',
          zh: '正是雅典势力的增长以及由此在斯巴达引起的恐惧，使战争不可避免。',
        },
        original: 'τὴν μὲν γὰρ ἀληθεστάτην πρόφασιν, ἀφανεστάτην δὲ λόγῳ, τοὺς Ἀθηναίους ἡγοῦμαι μεγάλους γιγνομένους καὶ φόβον παρέχοντας τοῖς Λακεδαιμονίοις ἀναγκάσαι ἐς τὸ πολεμεῖν.',
        originalLang: 'grc',
        source: { en: 'History of the Peloponnesian War, I.23', zh: '《伯罗奔尼撒战争史》第一卷第23节' },
        year: -411,
      },
    ],
  },
  {
    slug: 'herodotus',
    name: { en: 'Herodotus', zh: '希罗多德' },
    years: 'c. 484–425 BCE',
    nationality: { en: 'Greek', zh: '希腊' },
    bio: {
      en: 'Greek historian from Halicarnassus, author of The Histories, the first great prose narrative of the ancient world, known as the father of history.',
      zh: '哈利卡纳索斯的希腊历史学家，《历史》作者，古代世界第一部伟大的散文叙事作品，被称为"历史之父"。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Herodotus',
      zh: 'https://zh.wikipedia.org/wiki/希罗多德',
    },
    quotes: [
      {
        text: {
          en: 'Of all men\'s miseries the bitterest is this: to know so much and to have control over nothing.',
          zh: '人间一切苦难中最痛苦的莫过于此：知道得很多，却无力掌控任何事。',
        },
        original: 'πάντων ἀνιηρότατον· πολλὰ φρονέοντα μηδενὸς κρατέειν.',
        originalLang: 'grc',
        source: { en: 'The Histories, IX.16', zh: '《历史》第九卷第16节' },
        year: -430,
      },
      {
        text: {
          en: 'Custom is king of all.',
          zh: '习俗是万物之王。',
        },
        original: 'νόμον πάντων βασιλέα.',
        originalLang: 'grc',
        source: { en: 'The Histories, III.38', zh: '《历史》第三卷第38节' },
        year: -430,
      },
      {
        text: {
          en: 'If one were to order all mankind to choose the best set of rules in the world, each group would, after consideration, choose its own customs; each group regards its own as being by far the best.',
          zh: '假如有人命令全人类从世间一切规则中选出最好的，每个民族在反复考量之后，都会选择自己的习俗；每个民族都认为自己的习俗远远优于其他一切。',
        },
        original: 'εἰ γάρ τις πᾶσι ἀνθρώποισι ἐκλέξασθαι κελεύοι νόμους τοὺς καλλίστους ἐκ τῶν πάντων νόμων, διασκεψάμενοι ἂν ἑλοίατο ἕκαστοι τοὺς ἑωυτῶν· οὕτω νομίζουσι πολλόν τι καλλίστους τοὺς ἑωυτῶν νόμους ἕκαστοι εἶναι.',
        originalLang: 'grc',
        source: { en: 'The Histories, III.38', zh: '《历史》第三卷第38节' },
        year: -430,
      },
      {
        text: {
          en: 'Great deeds are usually wrought at great risks.',
          zh: '伟大的功业通常伴随着巨大的风险。',
        },
        original: 'τὰ μεγάλα πρήγματα μεγάλοισι κινδύνοισι ἐθέλει κατέρχεσθαι.',
        originalLang: 'grc',
        source: { en: 'The Histories, VII.50', zh: '《历史》第七卷第50节' },
        year: -430,
      },
      {
        text: {
          en: 'In peace, sons bury their fathers. In war, fathers bury their sons.',
          zh: '和平时期，儿子埋葬父亲。战争时期，父亲埋葬儿子。',
        },
        original: 'ἐν μὲν γὰρ τῇ εἰρήνῃ οἱ παῖδες τοὺς πατέρας θάπτουσι, ἐν δὲ τῷ πολέμῳ οἱ πατέρες τοὺς παῖδας.',
        originalLang: 'grc',
        source: { en: 'The Histories, I.87', zh: '《历史》第一卷第87节' },
        year: -430,
      },
      {
        text: {
          en: 'Men trust their ears less than their eyes.',
          zh: '人们相信耳朵不如相信眼睛。',
        },
        original: 'ὦτα γὰρ τυγχάνει ἀνθρώποισι ἐόντα ἀπιστότερα ὀφθαλμῶν.',
        originalLang: 'grc',
        source: { en: 'The Histories, I.8', zh: '《历史》第一卷第8节' },
        year: -430,
      },
    ],
  },
  {
    slug: 'sima-qian',
    name: { en: 'Sima Qian', zh: '司马迁' },
    years: 'c. 145–86 BCE',
    nationality: { en: 'Chinese', zh: '中国' },
    bio: {
      en: 'Han dynasty court historian and author of the Records of the Grand Historian, a monumental work covering over two thousand years of Chinese history that established the model for all subsequent dynastic histories.',
      zh: '西汉太史令，《史记》作者。该书纵贯两千余年中国历史，开创了纪传体通史的先河，为后世正史之楷模。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Sima_Qian',
      zh: 'https://zh.wikipedia.org/wiki/司马迁',
    },
    quotes: [
      {
        text: {
          en: 'I wished to examine into all that concerns heaven and man, to penetrate the changes of the past and present, and to put forth my views as the work of one school of thought.',
          zh: '究天人之际，通古今之变，成一家之言。',
        },
        original: '究天人之际，通古今之变，成一家之言。',
        originalLang: 'zh',
        source: { en: 'Letter to Ren An', zh: '《报任安书》' },
        year: -91,
      },
      {
        text: {
          en: 'A man has only one death. That death may be as heavy as Mount Tai, or it may be as light as a goose feather. It all depends on the way he uses it.',
          zh: '人固有一死，或重于泰山，或轻于鸿毛，用之所趋异也。',
        },
        original: '人固有一死，或重于泰山，或轻于鸿毛，用之所趋异也。',
        originalLang: 'zh',
        source: { en: 'Letter to Ren An', zh: '《报任安书》' },
        year: -91,
      },
      {
        text: {
          en: 'Those who look to the past will find a guide for the future.',
          zh: '前事不忘，后事之师。',
        },
        original: '前事不忘，后事之师。',
        originalLang: 'zh',
        source: { en: 'Records of the Grand Historian, Basic Annals of Qin', zh: '《史记·秦本纪》' },
        year: -91,
      },
      {
        text: {
          en: 'He who does not plan far ahead will find trouble right at his door.',
          zh: '人无远虑，必有近忧。',
        },
        original: '人无远虑，必有近忧。',
        originalLang: 'zh',
        source: { en: 'The Analerta (Weilinggong), cited in Records of the Grand Historian', zh: '《论语·卫灵公》，见引于《史记》' },
        year: -91,
      },
      {
        text: {
          en: 'When a bird is about to die, its cry is mournful. When a man is about to die, his words are true.',
          zh: '鸟之将死，其鸣也哀；人之将死，其言也善。',
        },
        original: '鸟之将死，其鸣也哀；人之将死，其言也善。',
        originalLang: 'zh',
        source: { en: 'The Analerta (Taibo, words of Zengzi), cited in Records of the Grand Historian', zh: '《论语·泰伯》（曾子语），见引于《史记》' },
        year: -91,
      },
      {
        text: {
          en: 'The greatest disgrace is the punishment of castration. There is no affliction worse than desire, and no sorrow deeper than the grief of the heart. There is no act more shameful than to bring disgrace upon one\'s ancestors. I suffered the extreme punishment, yet I did not die — all so that I might accomplish this work and transmit it to those who may appreciate it.',
          zh: '最下腐刑极矣！……所以隐忍苟活，幽于粪土之中而不辞者，恨私心有所不尽，鄙陋没世，而文采不表于后也。',
        },
        original: '最下腐刑极矣……所以隐忍苟活，幽于粪土之中而不辞者，恨私心有所不尽，鄙陋没世，而文采不表于后也。',
        originalLang: 'zh',
        source: { en: 'Letter to Ren An', zh: '《报任安书》' },
        year: -91,
      },
    ],
  },
  {
    slug: 'tacitus',
    name: { en: 'Tacitus', zh: '塔西佗' },
    years: 'c. 56–120',
    nationality: { en: 'Roman', zh: '罗马' },
    bio: {
      en: 'Roman senator and historian, author of the Annals and Histories, regarded as one of the greatest historians of the ancient world for his penetrating analysis of imperial tyranny and moral corruption.',
      zh: '罗马元老院议员与历史学家，《编年史》和《历史》作者，以其对帝制暴政和道德腐败的深刻剖析而被视为古代世界最伟大的历史学家之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Tacitus',
      zh: 'https://zh.wikipedia.org/wiki/塔西佗',
    },
    quotes: [
      {
        text: {
          en: 'They make a desert and call it peace.',
          zh: '他们制造了荒漠，却称之为和平。',
        },
        original: 'solitudinem faciunt, pacem appellant.',
        originalLang: 'la',
        source: { en: 'Agricola, 30 (speech of Calgacus)', zh: '《阿古利可拉传》第30节（卡尔加库斯演说）' },
        year: 98,
      },
      {
        text: {
          en: 'The desire for safety stands against every great and noble enterprise.',
          zh: '对安全的渴求阻碍着一切伟大而崇高的事业。',
        },
        originalLang: 'la',
        source: { en: 'Annals, XV.50', zh: '《编年史》第十五卷第50节' },
        year: 116,
      },
      {
        text: {
          en: 'The more corrupt the state, the more numerous the laws.',
          zh: '国家越腐败，法令越繁多。',
        },
        original: 'corruptissima re publica plurimae leges.',
        originalLang: 'la',
        source: { en: 'Annals, III.27', zh: '《编年史》第三卷第27节' },
        year: 116,
      },
      {
        text: {
          en: 'Even after an age of destruction and violence, a few survivors may remain; but they will be men who have outlived their own freedom.',
          zh: '即使在一个毁灭与暴力的时代之后，仍有少数幸存者留下；然而他们不过是苟活于自由已丧之人。',
        },
        original: 'superstites eramus; exemptis cum maxime viris, cum tot optimorum exiliis.',
        originalLang: 'la',
        source: { en: 'Agricola, 2', zh: '《阿古利可拉传》第2节' },
        year: 98,
      },
      {
        text: {
          en: 'All things atrocious and shameless flock from all parts to Rome.',
          zh: '一切残暴可耻之事从四面八方汇聚到罗马。',
        },
        original: 'cuncta undique atrocia aut pudenda confluunt celebranturque.',
        originalLang: 'la',
        source: { en: 'Annals, XV.44', zh: '《编年史》第十五卷第44节' },
        year: 116,
      },
      {
        text: {
          en: 'The lust for power is the most flagrant of all the passions.',
          zh: '对权力的贪欲，是一切激情中最炽烈的。',
        },
        original: 'cupido dominandi cunctis adfectibus flagrantior est.',
        originalLang: 'la',
        source: { en: 'Annals, XV.53', zh: '《编年史》第十五卷第53节' },
        year: 116,
      },
      {
        text: {
          en: 'Reason and calm judgment are the qualities especially belonging to a leader.',
          zh: '理性与冷静的判断力，是一位领袖尤为应具备的品质。',
        },
        original: 'ratio et consilium propriae ducis artes.',
        originalLang: 'la',
        source: { en: 'Annals, II.14', zh: '《编年史》第二卷第14节' },
        year: 116,
      },
    ],
  },
  {
    slug: 'ibn-khaldun',
    name: { en: 'Ibn Khaldun', zh: '伊本·赫勒敦' },
    years: '1332–1406',
    nationality: { en: 'Tunisian', zh: '突尼斯' },
    bio: {
      en: 'Arab historian, sociologist, and philosopher, author of the Muqaddimah, a foundational text in the philosophy of history, sociology, and economics that analyzed the rise and fall of civilizations.',
      zh: '阿拉伯历史学家、社会学家和哲学家，《历史绪论》作者。该书是历史哲学、社会学和经济学的奠基之作，系统分析了文明的兴衰更替。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Ibn_Khaldun',
      zh: 'https://zh.wikipedia.org/wiki/伊本·赫勒敦',
    },
    quotes: [
      {
        text: {
          en: 'In the beginning of the dynasty, the weights and measures of civilization are obtained at their full value. At the end, they are given only as shadows and names.',
          zh: '王朝初兴之际，文明的尺度尚能体现其全部价值。至其末世，所存者不过虚影与空名而已。',
        },
        original: 'في أول الدولة تكون الحضارة بحقائقها وفي آخرها تكون بأسمائها وأشباحها.',
        originalLang: 'ar',
        source: { en: 'Muqaddimah', zh: '《历史绪论》' },
        year: 1377,
      },
      {
        text: {
          en: 'Throughout history, many nations have suffered a physical defeat, but that has never marked the end of a nation. But when a nation has become the victim of a psychological defeat, then that marks the end of a nation.',
          zh: '纵观历史，许多民族遭受过军事上的失败，但这从未意味着一个民族的终结。然而，当一个民族在心理上被击败时，那便标志着这个民族的末日。',
        },
        original: 'إن الأمم التي تُهزم عسكريا لا تموت، ولكن الأمم التي تُهزم نفسيا هي التي تموت.',
        originalLang: 'ar',
        source: { en: 'Muqaddimah', zh: '《历史绪论》' },
        year: 1377,
      },
      {
        text: {
          en: 'Group feeling produces the ability to defend oneself, to offer opposition, to protect oneself, and to press one\'s claims. Whoever loses it is too weak to do any of these things.',
          zh: '群体凝聚力（阿萨比亚）赋予人自卫、抵抗、自我保护和伸张权利的能力。失去它的人便无力做成其中任何一件事。',
        },
        original: 'العصبية هي التي تُحقق النصر والمدافعة والحماية والمطالبة، ومن فقدها عجز عن ذلك كله.',
        originalLang: 'ar',
        source: { en: 'Muqaddimah, Chapter 2', zh: '《历史绪论》第二章' },
        year: 1377,
      },
      {
        text: {
          en: 'Luxury then increases in a dynasty, with increasing civilization. The dynasty comes to indulge in extravagance. The customs of luxury become firmly entrenched, and the dynasty falls into complete decay.',
          zh: '随着文明的发展，王朝中的奢靡也日益增长。王朝开始沉溺于挥霍。奢侈之风根深蒂固，王朝便彻底衰败。',
        },
        original: 'ثم يزداد الترف في الدولة بازدياد الحضارة، فتنغمس في النعيم وتترسخ عوائد الترف، وتبلغ الدولة غاية الهرم.',
        originalLang: 'ar',
        source: { en: 'Muqaddimah, Chapter 3', zh: '《历史绪论》第三章' },
        year: 1377,
      },
      {
        text: {
          en: 'History is a discipline that has a great number of approaches. Its useful aspects are very many. It requires numerous sources and vastly varied knowledge. It is a contemplation and verification of events and their causes, and a deep knowledge of the how and why of them.',
          zh: '历史是一门方法众多的学问。其有益之处甚广。它需要大量的史料和极为多样的知识。它是对事件及其原因的深思与考证，是对事物如何发生及为何发生的深刻认识。',
        },
        original: 'إن فن التاريخ من الفنون التي تتداوله الأمم والأجيال، وتشد إليه الركائب والرحال، وتسموا إلى معرفته السوقة والأغفال.',
        originalLang: 'ar',
        source: { en: 'Muqaddimah, Introduction', zh: '《历史绪论》导言' },
        year: 1377,
      },
      {
        text: {
          en: 'The past resembles the future more than one drop of water resembles another.',
          zh: '过去与未来的相似，甚于一滴水与另一滴水的相似。',
        },
        original: 'الماضي أشبه بالآتي من الماء بالماء.',
        originalLang: 'ar',
        source: { en: 'Muqaddimah', zh: '《历史绪论》' },
        year: 1377,
      },
      {
        text: {
          en: 'When the ruling dynasty begins to enjoy luxury and tranquility, and when the people of the group seek to acquire the things that go with luxury, their vigor decreases, and so does their group feeling.',
          zh: '当统治王朝开始享受奢华与安逸，当群体中的人们追逐奢侈的附属之物时，他们的活力便衰退了，群体凝聚力也随之减弱。',
        },
        original: 'وإذا حصل الترف والدعة في الدولة أخذت العصبية في التلاشي وأخذ بأسهم في النقص.',
        originalLang: 'ar',
        source: { en: 'Muqaddimah, Chapter 3', zh: '《历史绪论》第三章' },
        year: 1377,
      },
    ],
  },
  {
    slug: 'edward-gibbon',
    name: { en: 'Edward Gibbon', zh: '爱德华·吉本' },
    years: '1737–1794',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'English historian and member of Parliament, author of The History of the Decline and Fall of the Roman Empire, one of the greatest works of historical literature in the English language.',
      zh: '英国历史学家和国会议员，《罗马帝国衰亡史》作者。该书是英语世界最伟大的历史文学作品之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Edward_Gibbon',
      zh: 'https://zh.wikipedia.org/wiki/爱德华·吉本',
    },
    quotes: [
      {
        text: {
          en: 'History is indeed little more than the register of the crimes, follies, and misfortunes of mankind.',
          zh: '历史不过是人类的罪行、愚行与不幸的记录簿。',
        },
        original: 'History is indeed little more than the register of the crimes, follies, and misfortunes of mankind.',
        originalLang: 'en',
        source: { en: 'The History of the Decline and Fall of the Roman Empire, Chapter III', zh: '《罗马帝国衰亡史》第三章' },
        year: 1776,
      },
      {
        text: {
          en: 'The decline of Rome was the natural and inevitable effect of immoderate greatness. Prosperity ripened the principle of decay; the cause of the destruction multiplied with the extent of conquest; and, as soon as time or accident had removed the artificial supports, the stupendous fabric yielded to the pressure of its own weight.',
          zh: '罗马的衰落是过度强大的自然而必然的结果。繁荣催熟了衰败的种子；毁灭的根由随征服的扩张而增殖；一旦时间或意外撤去了人为的支撑，这座宏伟的大厦便在自身的重压之下倾塌。',
        },
        original: 'The decline of Rome was the natural and inevitable effect of immoderate greatness. Prosperity ripened the principle of decay; the cause of the destruction multiplied with the extent of conquest; and, as soon as time or accident had removed the artificial supports, the stupendous fabric yielded to the pressure of its own weight.',
        originalLang: 'en',
        source: { en: 'The History of the Decline and Fall of the Roman Empire, Chapter XXXVIII', zh: '《罗马帝国衰亡史》第三十八章' },
        year: 1781,
      },
      {
        text: {
          en: 'The various modes of worship which prevailed in the Roman world were all considered by the people as equally true; by the philosopher as equally false; and by the magistrate as equally useful.',
          zh: '罗马世界盛行的各种崇拜方式，在百姓看来同样真实，在哲学家看来同样虚妄，在行政长官看来同样有用。',
        },
        original: 'The various modes of worship which prevailed in the Roman world were all considered by the people as equally true; by the philosopher as equally false; and by the magistrate as equally useful.',
        originalLang: 'en',
        source: { en: 'The History of the Decline and Fall of the Roman Empire, Chapter II', zh: '《罗马帝国衰亡史》第二章' },
        year: 1776,
      },
      {
        text: {
          en: 'Under a democratical government the citizens exercise the powers of sovereignty; and those powers will be first abused, and afterwards lost, if they are committed to an unwieldy multitude.',
          zh: '在民主政体之下，公民行使主权；而这些权力若交付给一群乌合之众，将先被滥用，继而丧失。',
        },
        original: 'Under a democratical government the citizens exercise the powers of sovereignty; and those powers will be first abused, and afterwards lost, if they are committed to an unwieldy multitude.',
        originalLang: 'en',
        source: { en: 'The History of the Decline and Fall of the Roman Empire, Chapter VII', zh: '《罗马帝国衰亡史》第七章' },
        year: 1776,
      },
      {
        text: {
          en: 'I have described the triumph of barbarism and religion.',
          zh: '我记述了野蛮与宗教的胜利。',
        },
        original: 'I have described the triumph of barbarism and religion.',
        originalLang: 'en',
        source: { en: 'The History of the Decline and Fall of the Roman Empire, Chapter LXXI', zh: '《罗马帝国衰亡史》第七十一章' },
        year: 1788,
      },
      {
        text: {
          en: 'The winds and waves are always on the side of the ablest navigators.',
          zh: '风浪总是站在最善驾驭的航海者一边。',
        },
        original: 'The winds and waves are always on the side of the ablest navigators.',
        originalLang: 'en',
        source: { en: 'The History of the Decline and Fall of the Roman Empire, Chapter LXVIII', zh: '《罗马帝国衰亡史》第六十八章' },
        year: 1788,
      },
    ],
  },
  {
    slug: 'alexis-de-tocqueville',
    name: { en: 'Alexis de Tocqueville', zh: '亚历克西·德·托克维尔' },
    years: '1805–1859',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'French political thinker and historian, author of Democracy in America and The Old Regime and the Revolution, renowned for his analysis of democratic society, equality, and the tensions within liberal governance.',
      zh: '法国政治思想家和历史学家，《论美国的民主》和《旧制度与大革命》作者，以其对民主社会、平等问题及自由治理中的张力之分析而闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Alexis_de_Tocqueville',
      zh: 'https://zh.wikipedia.org/wiki/亚历克西·德·托克维尔',
    },
    quotes: [
      {
        text: {
          en: 'The tyranny of the majority is an ever-present danger in democracies, and it is especially threatening to individual liberty because it operates not through the force of law but through the force of opinion.',
          zh: '多数人的暴政是民主政体中始终存在的危险，它对个人自由的威胁尤甚，因为它不是通过法律的力量运作，而是通过舆论的力量运作。',
        },
        original: 'La tyrannie de la majorité est un danger toujours présent dans les démocraties.',
        originalLang: 'fr',
        source: { en: 'Democracy in America, Volume I', zh: '《论美国的民主》第一卷' },
        year: 1835,
      },
      {
        text: {
          en: 'I know of no country in which there is so little independence of mind and real freedom of discussion as in America.',
          zh: '我不知道世上还有哪个国家像美国那样，思想独立如此之少，讨论的真正自由如此之匮乏。',
        },
        original: 'Je ne connais pas de pays où il règne, en général, moins d\'indépendance d\'esprit et de véritable liberté de discussion qu\'en Amérique.',
        originalLang: 'fr',
        source: { en: 'Democracy in America, Volume I, Chapter XV', zh: '《论美国的民主》第一卷第十五章' },
        year: 1835,
      },
      {
        text: {
          en: 'In democratic societies, each citizen is habitually busy with the contemplation of a very petty object, which is himself.',
          zh: '在民主社会中，每个公民习惯性地忙于审视一个非常渺小的对象——那就是他自己。',
        },
        original: 'Dans les sociétés démocratiques, chaque citoyen est habituellement occupé à contempler un très petit objet, qui est lui-même.',
        originalLang: 'fr',
        source: { en: 'Democracy in America, Volume II', zh: '《论美国的民主》第二卷' },
        year: 1840,
      },
      {
        text: {
          en: 'The nations of our time cannot prevent conditions of equality from spreading in their midst. But it depends upon themselves whether equality is to lead to servitude or freedom, to knowledge or barbarism, to prosperity or wretchedness.',
          zh: '当代各民族无法阻止平等在其中蔓延。但平等究竟通向奴役还是自由、通向知识还是野蛮、通向繁荣还是困苦，则取决于他们自己。',
        },
        original: 'Les nations de nos jours ne sauraient empêcher que dans leur sein les conditions ne soient égales; mais il dépend d\'elles que l\'égalité les conduise à la servitude ou à la liberté, aux lumières ou à la barbarie, à la prospérité ou aux misères.',
        originalLang: 'fr',
        source: { en: 'Democracy in America, Volume II, Conclusion', zh: '《论美国的民主》第二卷结语' },
        year: 1840,
      },
      {
        text: {
          en: 'The French under the old monarchy held it for a maxim that the king could do no wrong; and if he did do wrong, the blame was imputed to his advisers. This made obedience very easy. One could murmur against the law without ceasing to love and honor the lawgiver.',
          zh: '旧制度下的法国人奉为准则：国王不可能犯错；即便他犯了错，过错也归咎于他的顾问。这使得服从变得很容易。人们可以抱怨法律而不必停止爱戴和尊崇立法者。',
        },
        original: 'Les Français de l\'ancien régime tenaient pour maxime que le roi ne pouvait mal faire; et quand il lui arrivait de mal faire, on en imputait la faute à ses conseillers.',
        originalLang: 'fr',
        source: { en: 'The Old Regime and the Revolution', zh: '《旧制度与大革命》' },
        year: 1856,
      },
      {
        text: {
          en: 'The most dangerous moment for a bad government is usually when it begins to reform itself.',
          zh: '对一个坏政府来说，最危险的时刻通常就是它开始自我改革的时刻。',
        },
        original: 'Le moment le plus dangereux pour un mauvais gouvernement est d\'ordinaire celui où il commence à se réformer.',
        originalLang: 'fr',
        source: { en: 'The Old Regime and the Revolution, Chapter IV', zh: '《旧制度与大革命》第四章' },
        year: 1856,
      },
    ],
  },
  {
    slug: 'jacob-burckhardt',
    name: { en: 'Jacob Burckhardt', zh: '雅各布·布克哈特' },
    years: '1818–1897',
    nationality: { en: 'Swiss', zh: '瑞士' },
    bio: {
      en: 'Swiss historian of art and culture, author of The Civilization of the Renaissance in Italy, a pioneering work in cultural history that redefined how we understand the relationship between the individual, the state, and culture.',
      zh: '瑞士艺术与文化史学家，《意大利文艺复兴时期的文化》作者。该书是文化史的开创性著作，重新定义了个人、国家与文化之间的关系。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Jacob_Burckhardt',
      zh: 'https://zh.wikipedia.org/wiki/雅各布·布克哈特',
    },
    quotes: [
      {
        text: {
          en: 'The state as a work of art — this was the achievement of the Italian tyrants of the fourteenth and fifteenth centuries.',
          zh: '将国家视为一件艺术品——这是十四和十五世纪意大利僭主们的成就。',
        },
        original: 'Der Staat als Kunstwerk — das war die Leistung der italienischen Tyrannen des vierzehnten und fünfzehnten Jahrhunderts.',
        originalLang: 'de',
        source: { en: 'The Civilization of the Renaissance in Italy, Part I', zh: '《意大利文艺复兴时期的文化》第一部分' },
        year: 1860,
      },
      {
        text: {
          en: 'In the Middle Ages both sides of human consciousness — that which was turned within as that which was turned without — lay dreaming or half awake beneath a common veil. Man was conscious of himself only as a member of a race, people, party, family, or corporation — only through some general category.',
          zh: '在中世纪，人类意识的两面——向内的一面和向外的一面——都在一层共同的面纱之下沉睡或半醒。人只是作为种族、民族、党派、家族或行会的成员来认识自己——只是通过某种集体的范畴。',
        },
        original: 'Im Mittelalter lagen die beiden Seiten des Bewusstseins — nach der Welt hin und nach dem Innern des Menschen selbst — wie unter einem gemeinsamen Schleier träumend oder halbwach.',
        originalLang: 'de',
        source: { en: 'The Civilization of the Renaissance in Italy, Part II', zh: '《意大利文艺复兴时期的文化》第二部分' },
        year: 1860,
      },
      {
        text: {
          en: 'The essence of tyranny is the denial of complexity.',
          zh: '暴政的本质就是对复杂性的否认。',
        },
        original: 'Das Wesen der Tyrannei ist die Leugnung der Komplexität.',
        originalLang: 'de',
        source: { en: 'Reflections on History', zh: '《历史的反思》' },
        year: 1905,
      },
      {
        text: {
          en: 'The most decisive historical events have often proceeded from causes which have nothing to do with the importance of the result.',
          zh: '最具决定性的历史事件，其起因往往与结果的重要性毫无关系。',
        },
        original: 'Die entscheidendsten Begebenheiten gehen oft von Ursachen aus, die gar nicht im Verhältnis zur Wichtigkeit der Wirkung stehen.',
        originalLang: 'de',
        source: { en: 'Reflections on History', zh: '《历史的反思》' },
        year: 1905,
      },
      {
        text: {
          en: 'Power is of its nature evil, whoever wields it. It is not a stability but a lust, and ipso facto insatiable, therefore unhappy in itself and doomed to make others unhappy.',
          zh: '权力就其本性而言是邪恶的，无论由谁执掌。它不是一种稳定的状态，而是一种欲望，因而本质上永不满足，所以自身就是不幸的，并注定使他人不幸。',
        },
        original: 'Die Macht ist an sich böse, gleichviel wer sie ausübt. Sie ist kein Beharren, sondern eine Gier, und eo ipso unerfüllbar, daher in sich unglücklich und muss also Andere unglücklich machen.',
        originalLang: 'de',
        source: { en: 'Reflections on History, Chapter III', zh: '《历史的反思》第三章' },
        year: 1905,
      },
      {
        text: {
          en: 'The great man of history is he in whom the general and the particular fuse together, in whom a whole people and a whole age finds its expression.',
          zh: '历史上的伟人，就是那种将普遍性与特殊性融为一体的人，一个完整的民族和一个完整的时代在他身上得以表达。',
        },
        original: 'Der große Mann der Geschichte ist derjenige, in welchem das Allgemeine und das Besondere zusammenfließen, in dem ein ganzes Volk und eine ganze Zeit ihren Ausdruck finden.',
        originalLang: 'de',
        source: { en: 'Reflections on History', zh: '《历史的反思》' },
        year: 1905,
      },
    ],
  },
  {
    slug: 'marc-bloch',
    name: { en: 'Marc Bloch', zh: '马克·布洛赫' },
    years: '1886–1944',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'French historian and co-founder of the Annales school of historiography, author of Feudal Society and The Historian\'s Craft, executed by the Nazis for his work in the French Resistance.',
      zh: '法国历史学家，年鉴学派联合创始人，《封建社会》和《历史学家的技艺》作者，因参加法国抵抗运动而被纳粹处决。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Marc_Bloch',
      zh: 'https://zh.wikipedia.org/wiki/马克·布洛赫',
    },
    quotes: [
      {
        text: {
          en: 'Misunderstanding of the present is the inevitable consequence of ignorance of the past. But a man may wear himself out just as fruitlessly in seeking to understand the past, if he is totally ignorant of the present.',
          zh: '对当下的误解是无知于过去的必然后果。但一个人若完全不了解现在，穷尽心力去理解过去也同样徒劳。',
        },
        original: 'L\'incompréhension du présent naît fatalement de l\'ignorance du passé. Mais il n\'est peut-être pas moins vain de s\'épuiser à comprendre le passé, si l\'on ne sait rien du présent.',
        originalLang: 'fr',
        source: { en: 'The Historian\'s Craft, Chapter I', zh: '《历史学家的技艺》第一章' },
        year: 1949,
      },
      {
        text: {
          en: 'The good historian is like the giant of the fairy tale. He knows that wherever he catches the scent of human flesh, there his quarry lies.',
          zh: '优秀的历史学家就像童话里的巨人。他知道，无论在哪里嗅到人的气息，他追寻的猎物就在那里。',
        },
        original: 'Le bon historien, lui, ressemble à l\'ogre de la légende. Là où il flaire la chair humaine, il sait que là est son gibier.',
        originalLang: 'fr',
        source: { en: 'The Historian\'s Craft, Chapter I', zh: '《历史学家的技艺》第一章' },
        year: 1949,
      },
      {
        text: {
          en: 'Historical facts are, in essence, psychological facts. They find their antecedents and their explanations in other psychological facts.',
          zh: '历史事实本质上是心理事实。它们的前因和解释存在于其他心理事实之中。',
        },
        original: 'Les faits historiques sont, par essence, des faits psychologiques. C\'est donc dans d\'autres faits psychologiques qu\'ils trouvent normalement leurs antécédents.',
        originalLang: 'fr',
        source: { en: 'The Historian\'s Craft, Chapter IV', zh: '《历史学家的技艺》第四章' },
        year: 1949,
      },
      {
        text: {
          en: 'There is no true understanding without a certain range of comparison; and no comparison is possible without a certain degree of abstraction.',
          zh: '没有一定范围的比较就没有真正的理解；没有一定程度的抽象就不可能进行比较。',
        },
        original: 'Il n\'y a pas de vraie compréhension sans une certaine étendue de comparaison; pas de comparaison sans un certain degré d\'abstraction.',
        originalLang: 'fr',
        source: { en: 'The Historian\'s Craft', zh: '《历史学家的技艺》' },
        year: 1949,
      },
      {
        text: {
          en: 'The feudal system was not merely a form of government, nor even a type of social organization in the narrow sense. It was a civilization — a particular way of thinking and feeling, a particular attitude toward the world.',
          zh: '封建制度不仅仅是一种政府形式，甚至不仅仅是狭义上的一种社会组织。它是一种文明——一种特殊的思维和感受方式，一种面对世界的特殊态度。',
        },
        original: 'La féodalité ne fut pas seulement une forme de gouvernement, ni même un type d\'organisation sociale au sens étroit. Elle fut une civilisation.',
        originalLang: 'fr',
        source: { en: 'Feudal Society, Volume II', zh: '《封建社会》第二卷' },
        year: 1940,
      },
      {
        text: {
          en: 'To ask why something happened is to assume that what did happen was not the only thing that could have happened.',
          zh: '追问某事为何发生，就是假定所发生的并非唯一可能发生的事。',
        },
        original: 'Demander pourquoi une chose est arrivée, c\'est supposer que ce qui est arrivé n\'était pas la seule chose qui pût arriver.',
        originalLang: 'fr',
        source: { en: 'The Historian\'s Craft', zh: '《历史学家的技艺》' },
        year: 1949,
      },
      {
        text: {
          en: 'A science of human beings in time: that is the definition of history that I would suggest.',
          zh: '时间中关于人的科学：这是我对历史学提出的定义。',
        },
        original: 'Une science des hommes dans le temps: telle est la définition de l\'histoire que je proposerais.',
        originalLang: 'fr',
        source: { en: 'The Historian\'s Craft, Chapter I', zh: '《历史学家的技艺》第一章' },
        year: 1949,
      },
    ],
  },
  {
    slug: 'fernand-braudel',
    name: { en: 'Fernand Braudel', zh: '费尔南·布罗代尔' },
    years: '1902–1985',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'French historian and leading figure of the Annales school, author of The Mediterranean and the Mediterranean World in the Age of Philip II and Civilization and Capitalism, who transformed historical thinking with his concept of the longue durée.',
      zh: '法国历史学家，年鉴学派的领军人物，《菲利普二世时代的地中海和地中海世界》和《文明与资本主义》作者，以"长时段"概念革新了历史思维。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Fernand_Braudel',
      zh: 'https://zh.wikipedia.org/wiki/费尔南·布罗代尔',
    },
    quotes: [
      {
        text: {
          en: 'Events are the ephemera of history; they pass across its stage like fireflies, hardly glimpsed before they settle back into darkness and as often as not into oblivion.',
          zh: '事件是历史的蜉蝣；它们像萤火虫一样掠过历史的舞台，尚未看清便已重归黑暗，而且往往堕入遗忘。',
        },
        original: 'Les événements sont la poussière de l\'histoire; ils traversent sa scène comme des lucioles, à peine entrevus avant de retomber dans l\'ombre et, le plus souvent, dans l\'oubli.',
        originalLang: 'fr',
        source: { en: 'The Mediterranean and the Mediterranean World in the Age of Philip II, Preface', zh: '《菲利普二世时代的地中海和地中海世界》前言' },
        year: 1949,
      },
      {
        text: {
          en: 'Capitalism has been potentially visible since the dawn of history, and it has developed and grown alongside mankind; but in certain periods and certain places it is more forceful than in others, for reasons that must be explained.',
          zh: '自历史黎明以来，资本主义就潜在地显现了，它与人类一同发展壮大；但在某些时期和某些地方它比在其他时候更有力量，其原因有待解释。',
        },
        original: 'Le capitalisme est potentiellement visible dès l\'aube de l\'histoire et il s\'est développé et grandi aux côtés de l\'humanité.',
        originalLang: 'fr',
        source: { en: 'Civilization and Capitalism, 15th–18th Century, Volume II', zh: '《15至18世纪的物质文明、经济和资本主义》第二卷' },
        year: 1979,
      },
      {
        text: {
          en: 'I am by temperament a "structuralist," little tempted by the event, or even by the short-term conjuncture which is after all merely a grouping of events. But the historian\'s time is not the geologist\'s time.',
          zh: '就性情而言，我是一个"结构主义者"，对事件不大感兴趣，甚至对短期局势也不甚关心——毕竟那不过是一组事件的集合。但历史学家的时间不是地质学家的时间。',
        },
        original: 'Je suis, par tempérament, un « structuraliste », peu tenté par l\'événement, ou même par la conjoncture de courte durée qui n\'est après tout qu\'un groupement d\'événements.',
        originalLang: 'fr',
        source: { en: 'The Mediterranean and the Mediterranean World in the Age of Philip II, Preface to the Second Edition', zh: '《菲利普二世时代的地中海和地中海世界》第二版前言' },
        year: 1966,
      },
      {
        text: {
          en: 'The history of civilizations is the history of their borrowings from one another over the ages.',
          zh: '文明的历史就是各文明在漫长岁月中相互借鉴的历史。',
        },
        original: 'L\'histoire des civilisations, c\'est l\'histoire de leurs emprunts mutuels au cours des âges.',
        originalLang: 'fr',
        source: { en: 'A History of Civilizations', zh: '《文明史》' },
        year: 1963,
      },
      {
        text: {
          en: 'Everyday life consists of the little things one hardly notices in time and space. The more we reduce the focus of vision, the more likely we are to find ourselves in the realm of material life: the broad sweep that encompasses all of our actions, habits, and constraints.',
          zh: '日常生活由那些在时间和空间中几乎不被注意的琐事组成。我们越缩小视野的焦距，就越可能发现自己置身于物质生活的领域：那涵盖我们一切行为、习惯和制约的广阔运动。',
        },
        original: 'La vie quotidienne, ce sont ces petites choses qu\'on ne remarque guère dans le temps et dans l\'espace.',
        originalLang: 'fr',
        source: { en: 'Civilization and Capitalism, 15th–18th Century, Volume I: The Structures of Everyday Life', zh: '《15至18世纪的物质文明、经济和资本主义》第一卷：日常生活的结构' },
        year: 1967,
      },
      {
        text: {
          en: 'The Mediterranean speaks with many voices; it is a sum of individual histories.',
          zh: '地中海以众多声音说话；它是无数个体历史的总和。',
        },
        original: 'La Méditerranée parle de mille voix; elle est une somme d\'histoires individuelles.',
        originalLang: 'fr',
        source: { en: 'The Mediterranean and the Mediterranean World in the Age of Philip II', zh: '《菲利普二世时代的地中海和地中海世界》' },
        year: 1949,
      },
      {
        text: {
          en: 'Every society has to redistribute the wealth it produces. The methods of redistribution define the nature of the society itself.',
          zh: '每个社会都必须重新分配它所生产的财富。分配的方式定义了社会本身的性质。',
        },
        original: 'Toute société doit redistribuer la richesse qu\'elle produit. Les modes de redistribution définissent la nature de la société elle-même.',
        originalLang: 'fr',
        source: { en: 'Civilization and Capitalism, 15th–18th Century, Volume II', zh: '《15至18世纪的物质文明、经济和资本主义》第二卷' },
        year: 1979,
      },
    ],
  },
  {
    slug: 'ep-thompson',
    name: { en: 'E.P. Thompson', zh: 'E·P·汤普森' },
    years: '1924–1993',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British historian, writer, and socialist activist, author of The Making of the English Working Class, a landmark of social history that recovered the agency and experience of ordinary people in the industrial revolution.',
      zh: '英国历史学家、作家和社会主义运动家，《英国工人阶级的形成》作者。该书是社会史的里程碑，重新发现了工业革命中普通人的能动性与经验。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/E._P._Thompson',
      zh: 'https://zh.wikipedia.org/wiki/E·P·汤普森',
    },
    quotes: [
      {
        text: {
          en: 'The working class did not rise like the sun at an appointed time. It was present at its own making.',
          zh: '工人阶级并非像太阳那样在预定的时刻升起。它参与了自身的形成。',
        },
        original: 'The working class did not rise like the sun at an appointed time. It was present at its own making.',
        originalLang: 'en',
        source: { en: 'The Making of the English Working Class, Preface', zh: '《英国工人阶级的形成》前言' },
        year: 1963,
      },
      {
        text: {
          en: 'I am seeking to rescue the poor stockinger, the Luddite cropper, the "obsolete" hand-loom weaver, the "utopian" artisan, and even the deluded follower of Joanna Southcott, from the enormous condescension of posterity.',
          zh: '我试图将那些贫穷的织袜工、卢德派的剪毛工、"过时的"手工织布工、"空想的"工匠，甚至乔安娜·萨斯科特的受蒙蔽的追随者，从后人巨大的傲慢中拯救出来。',
        },
        original: 'I am seeking to rescue the poor stockinger, the Luddite cropper, the "obsolete" hand-loom weaver, the "utopian" artisan, and even the deluded follower of Joanna Southcott, from the enormous condescension of posterity.',
        originalLang: 'en',
        source: { en: 'The Making of the English Working Class, Preface', zh: '《英国工人阶级的形成》前言' },
        year: 1963,
      },
      {
        text: {
          en: 'Class happens when some men, as a result of common experiences, feel and articulate the identity of their interests as between themselves, and as against other men whose interests are different from and usually opposed to theirs.',
          zh: '当一些人由于共同的经历，感受到并表达出他们彼此之间利益的一致性，以及他们与另一些利益不同且通常对立的人之间的差异时，阶级就产生了。',
        },
        original: 'Class happens when some men, as a result of common experiences, feel and articulate the identity of their interests as between themselves, and as against other men whose interests are different from and usually opposed to theirs.',
        originalLang: 'en',
        source: { en: 'The Making of the English Working Class, Preface', zh: '《英国工人阶级的形成》前言' },
        year: 1963,
      },
      {
        text: {
          en: 'Class is a relationship, not a thing.',
          zh: '阶级是一种关系，而非一种事物。',
        },
        original: 'Class is a relationship, not a thing.',
        originalLang: 'en',
        source: { en: 'The Making of the English Working Class, Preface', zh: '《英国工人阶级的形成》前言' },
        year: 1963,
      },
      {
        text: {
          en: 'The moral economy of the crowd imposes the expectation that prices should be reasonable, that in times of dearth the authorities should ensure provision, and that exploitative practices should be punished.',
          zh: '群众的道德经济强加了这样的期望：价格应当合理，在匮乏时期当局应当确保供给，剥削性的做法应当受到惩罚。',
        },
        original: 'The moral economy of the crowd imposes the expectation that prices should be reasonable, that in times of dearth the authorities should ensure provision, and that exploitative practices should be punished.',
        originalLang: 'en',
        source: { en: '"The Moral Economy of the English Crowd in the Eighteenth Century," Past & Present', zh: '《十八世纪英国群众的道德经济》，《过去与现在》' },
        year: 1971,
      },
      {
        text: {
          en: 'We should not assume that what happened was bound to happen. People made choices, and those choices were conditioned by the experiences and resources available to them.',
          zh: '我们不应假定所发生的必然会发生。人们做出了选择，而这些选择受制于他们可及的经验与资源。',
        },
        original: 'We should not assume that what happened was bound to happen. People made choices, and those choices were conditioned by the experiences and resources available to them.',
        originalLang: 'en',
        source: { en: 'The Making of the English Working Class', zh: '《英国工人阶级的形成》' },
        year: 1963,
      },
      {
        text: {
          en: 'No one eats "the average." A wage expressed as an average can buy less and less while appearing stable in the statistics.',
          zh: '没有人吃"平均数"。一个以平均值表示的工资在统计数据中看起来稳定，实际购买力却可能越来越低。',
        },
        original: 'No one eats "the average." A wage expressed as an average can buy less and less while appearing stable in the statistics.',
        originalLang: 'en',
        source: { en: 'The Making of the English Working Class', zh: '《英国工人阶级的形成》' },
        year: 1963,
      },
    ],
  },
  {
    slug: 'eric-hobsbawm',
    name: { en: 'Eric Hobsbawm', zh: '艾瑞克·霍布斯鲍姆' },
    years: '1917–2012',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British Marxist historian, author of the "Age of" tetralogy spanning the modern era from the French Revolution to the fall of the Soviet Union, and co-editor of The Invention of Tradition.',
      zh: '英国马克思主义历史学家，"年代四部曲"作者，涵盖了从法国大革命到苏联解体的整个现代时期，并与人合编了《传统的发明》。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Eric_Hobsbawm',
      zh: 'https://zh.wikipedia.org/wiki/艾瑞克·霍布斯鲍姆',
    },
    quotes: [
      {
        text: {
          en: 'The destruction of the past — or rather of the social mechanisms that link one\'s contemporary experience to that of earlier generations — is one of the most characteristic and eerie phenomena of the late twentieth century.',
          zh: '对过去的摧毁——或更确切地说，对那些将当代人的经验与前辈经验联结起来的社会机制的摧毁——是二十世纪晚期最具特征性也最令人不安的现象之一。',
        },
        original: 'The destruction of the past — or rather of the social mechanisms that link one\'s contemporary experience to that of earlier generations — is one of the most characteristic and eerie phenomena of the late twentieth century.',
        originalLang: 'en',
        source: { en: 'The Age of Extremes, Chapter 1', zh: '《极端的年代》第一章' },
        year: 1994,
      },
      {
        text: {
          en: 'Traditions which appear or claim to be old are often quite recent in origin and sometimes invented.',
          zh: '那些看起来或声称是古老的传统，实际上往往起源晚近，有时是被发明出来的。',
        },
        original: 'Traditions which appear or claim to be old are often quite recent in origin and sometimes invented.',
        originalLang: 'en',
        source: { en: 'The Invention of Tradition, Introduction', zh: '《传统的发明》导言' },
        year: 1983,
      },
      {
        text: {
          en: 'The most lasting result of the French Revolution was the metric system.',
          zh: '法国大革命最持久的成果是公制。',
        },
        original: 'The most lasting result of the French Revolution was the metric system.',
        originalLang: 'en',
        source: { en: 'The Age of Revolution, Chapter 2', zh: '《革命的年代》第二章' },
        year: 1962,
      },
      {
        text: {
          en: 'Nations do not make states and nationalisms but the other way round.',
          zh: '不是民族创造了国家和民族主义，而是恰恰相反。',
        },
        original: 'Nations do not make states and nationalisms but the other way round.',
        originalLang: 'en',
        source: { en: 'Nations and Nationalism Since 1780', zh: '《民族与民族主义》' },
        year: 1990,
      },
      {
        text: {
          en: 'The short twentieth century — from the outbreak of the first world war to the collapse of the USSR — was an era of religious wars, though the most militant and bloodthirsty of its religions were secular ideologies.',
          zh: '短暂的二十世纪——从第一次世界大战爆发到苏联解体——是一个宗教战争的时代，尽管其中最好战、最嗜血的宗教是世俗意识形态。',
        },
        original: 'The short twentieth century — from the outbreak of the first world war to the collapse of the USSR — was an era of religious wars, though the most militant and bloodthirsty of its religions were secular ideologies.',
        originalLang: 'en',
        source: { en: 'The Age of Extremes, Chapter 14', zh: '《极端的年代》第十四章' },
        year: 1994,
      },
      {
        text: {
          en: 'One of the most universal social assumptions, so universal that it is rarely stated, is that the economic system exists in order to provide what people need and want. That is why it causes such outrage when it manifestly fails to do so.',
          zh: '最普遍的社会假设之一——普遍到很少被明确表述——是经济体系存在的目的是为了满足人们的需要和需求。正因如此，当经济体系明显做不到这一点时，才会引起如此大的愤怒。',
        },
        original: 'One of the most universal social assumptions, so universal that it is rarely stated, is that the economic system exists in order to provide what people need and want.',
        originalLang: 'en',
        source: { en: 'The Age of Capital, Chapter 1', zh: '《资本的年代》第一章' },
        year: 1975,
      },
      {
        text: {
          en: 'The world economy was not designed to satisfy human needs. It was designed to generate profits. It does so very efficiently, and it generates needs as a by-product.',
          zh: '世界经济的设计不是为了满足人的需要，而是为了产生利润。在这方面它非常高效，至于人的需要不过是副产品。',
        },
        original: 'The world economy was not designed to satisfy human needs. It was designed to generate profits.',
        originalLang: 'en',
        source: { en: 'The Age of Extremes', zh: '《极端的年代》' },
        year: 1994,
      },
    ],
  },
  {
    slug: 'barbara-tuchman',
    name: { en: 'Barbara Tuchman', zh: '芭芭拉·塔奇曼' },
    years: '1912–1989',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American historian and author, two-time Pulitzer Prize winner for The Guns of August and Stilwell and the American Experience in China, renowned for her vivid narrative style and analysis of political folly.',
      zh: '美国历史学家和作家，凭《八月炮火》和《史迪威与美国在中国的经验》两度获得普利策奖，以其生动的叙事风格和对政治愚行的分析而闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Barbara_W._Tuchman',
      zh: 'https://zh.wikipedia.org/wiki/芭芭拉·塔奇曼',
    },
    quotes: [
      {
        text: {
          en: 'War is the unfolding of miscalculations.',
          zh: '战争是误判的展开。',
        },
        original: 'War is the unfolding of miscalculations.',
        originalLang: 'en',
        source: { en: 'The Guns of August', zh: '《八月炮火》' },
        year: 1962,
      },
      {
        text: {
          en: 'Wooden-headedness, the source of self-deception, is a factor that plays a remarkably large role in government. It consists in assessing a situation in terms of preconceived fixed notions while ignoring or rejecting any contrary signs.',
          zh: '"木头脑袋"——自我欺骗的根源——在政府中扮演着一个惊人之大的角色。它表现为按照先入为主的固定观念来评估形势，同时忽略或拒绝一切相反的迹象。',
        },
        original: 'Wooden-headedness, the source of self-deception, is a factor that plays a remarkably large role in government. It consists in assessing a situation in terms of preconceived fixed notions while ignoring or rejecting any contrary signs.',
        originalLang: 'en',
        source: { en: 'The March of Folly: From Troy to Vietnam', zh: '《愚政进行曲：从特洛伊到越南》' },
        year: 1984,
      },
      {
        text: {
          en: 'The folly consisted not in the pursuit of self-interest but in the refusal to recognize when self-interest was being damaged by one\'s own policies.',
          zh: '愚行并不在于追求自身利益，而在于拒绝承认自己的政策正在损害自身利益。',
        },
        original: 'The folly consisted not in the pursuit of self-interest but in the refusal to recognize when self-interest was being damaged by one\'s own policies.',
        originalLang: 'en',
        source: { en: 'The March of Folly: From Troy to Vietnam', zh: '《愚政进行曲：从特洛伊到越南》' },
        year: 1984,
      },
      {
        text: {
          en: 'Books are the carriers of civilization. Without books, history is silent, literature dumb, science crippled, thought and speculation at a standstill.',
          zh: '书籍是文明的载体。没有书籍，历史便沉默，文学便哑然，科学便残缺，思想和思辨便停滞不前。',
        },
        original: 'Books are the carriers of civilization. Without books, history is silent, literature dumb, science crippled, thought and speculation at a standstill.',
        originalLang: 'en',
        source: { en: 'Address to the American Academy and Institute of Arts and Letters', zh: '美国艺术与文学学院演讲' },
        year: 1979,
      },
      {
        text: {
          en: 'Disaster is rarely as pervasive as it seems from recorded accounts. The fact of being on the record makes it appear continuous and ubiquitous whereas it is more likely to have been sporadic both in time and place.',
          zh: '灾难很少像文字记载中表现的那样无处不在。被记录在案这一事实使其显得连续而普遍，而实际上它在时间和空间上很可能是零星分布的。',
        },
        original: 'Disaster is rarely as pervasive as it seems from recorded accounts. The fact of being on the record makes it appear continuous and ubiquitous whereas it is more likely to have been sporadic both in time and place.',
        originalLang: 'en',
        source: { en: 'A Distant Mirror: The Calamitous 14th Century, Foreword', zh: '《遥远的镜子：动荡不安的十四世纪》前言' },
        year: 1978,
      },
      {
        text: {
          en: 'The two World Wars of the 20th century were essentially European civil wars — the final, suicidal phase of European world dominance.',
          zh: '二十世纪的两次世界大战本质上是欧洲内战——欧洲世界霸权的最终自杀性阶段。',
        },
        original: 'The two World Wars of the 20th century were essentially European civil wars — the final, suicidal phase of European world dominance.',
        originalLang: 'en',
        source: { en: 'The Proud Tower', zh: '《骄傲之塔》' },
        year: 1966,
      },
      {
        text: {
          en: 'Dead battles, like dead generals, hold the military mind in their dead grip and Germans, no less than other peoples, prepare for the last war.',
          zh: '过去的战役如同死去的将军，以其僵死之手禁锢着军事思维。德国人和其他民族一样，总在为上一场战争做准备。',
        },
        original: 'Dead battles, like dead generals, hold the military mind in their dead grip and Germans, no less than other peoples, prepare for the last war.',
        originalLang: 'en',
        source: { en: 'The Guns of August, Chapter 2', zh: '《八月炮火》第二章' },
        year: 1962,
      },
    ],
  },
  {
    slug: 'tony-judt',
    name: { en: 'Tony Judt', zh: '托尼·朱特' },
    years: '1948–2010',
    nationality: { en: 'British-American', zh: '英裔美国人' },
    bio: {
      en: 'British-born American historian and public intellectual, author of Postwar: A History of Europe Since 1945 and Ill Fares the Land, known for his defense of European social democracy and the moral obligations of intellectuals.',
      zh: '生于英国的美国历史学家和公共知识分子，《战后欧洲史》和《沉疴遍地》作者，以其对欧洲社会民主制度的捍卫和对知识分子道德责任的论述而闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Tony_Judt',
      zh: 'https://zh.wikipedia.org/wiki/托尼·朱特',
    },
    quotes: [
      {
        text: {
          en: 'If we have learned nothing else from the twentieth century, we should at least have grasped that the more perfect the answer, the more terrifying its consequences.',
          zh: '如果我们从二十世纪什么都没学到的话，至少应该领悟到：答案越完美，其后果就越可怕。',
        },
        original: 'If we have learned nothing else from the twentieth century, we should at least have grasped that the more perfect the answer, the more terrifying its consequences.',
        originalLang: 'en',
        source: { en: 'Ill Fares the Land', zh: '《沉疴遍地》' },
        year: 2010,
      },
      {
        text: {
          en: 'Why do we experience such difficulty even imagining a different sort of society? Why is it beyond us to conceive of a different set of arrangements to our common advantage?',
          zh: '为什么我们连想象一种不同的社会都如此困难？为什么构想一套对我们共同有利的不同制度安排，竟超出了我们的能力？',
        },
        original: 'Why do we experience such difficulty even imagining a different sort of society? Why is it beyond us to conceive of a different set of arrangements to our common advantage?',
        originalLang: 'en',
        source: { en: 'Ill Fares the Land, Chapter I', zh: '《沉疴遍地》第一章' },
        year: 2010,
      },
      {
        text: {
          en: 'We have entered an age of insecurity — economic insecurity, physical insecurity, political insecurity. The fact that we are largely unaware of this is small comfort.',
          zh: '我们已进入一个不安全的时代——经济的不安全、人身的不安全、政治的不安全。我们在很大程度上对此浑然不觉这一事实，并不能给我们多少安慰。',
        },
        original: 'We have entered an age of insecurity — economic insecurity, physical insecurity, political insecurity.',
        originalLang: 'en',
        source: { en: 'Ill Fares the Land', zh: '《沉疴遍地》' },
        year: 2010,
      },
      {
        text: {
          en: 'Social democracy does not represent an ideal future; it does not even represent the ideal past. But among the options available to us in the present, it is better than anything else to hand.',
          zh: '社会民主并不代表一个理想的未来；它甚至不代表理想的过去。但在我们当前可用的选项中，它优于其他任何现成的选择。',
        },
        original: 'Social democracy does not represent an ideal future; it does not even represent the ideal past. But among the options available to us in the present, it is better than anything else to hand.',
        originalLang: 'en',
        source: { en: 'Ill Fares the Land, Chapter VI', zh: '《沉疴遍地》第六章' },
        year: 2010,
      },
      {
        text: {
          en: 'A society of uncertain, insecure, and anxious individuals — that is what awaits us when the welfare state is dismantled. It will not be a community of freely associating individuals but rather a mass of atomized, suspicious loners.',
          zh: '一个充满不确定、不安全和焦虑的个体的社会——这就是当福利国家被拆除后等待我们的。它不会是自由结社的个人组成的共同体，而是一群原子化的、互相猜疑的孤独者。',
        },
        original: 'A society of uncertain, insecure, and anxious individuals — that is what awaits us when the welfare state is dismantled.',
        originalLang: 'en',
        source: { en: 'Ill Fares the Land', zh: '《沉疴遍地》' },
        year: 2010,
      },
      {
        text: {
          en: 'In the United States today, the weights are so heavy on the scales of justice that we are in serious risk of forfeiting our national myths. The "American way of life" is an illusion for all but the top twenty percent of the wealth-holding population.',
          zh: '在今天的美国，正义天平上的砝码如此沉重，以至于我们有丧失国家神话的严重风险。"美国式生活方式"对除了顶层百分之二十的持有财富者之外的所有人来说，都是一种幻觉。',
        },
        original: 'In the United States today, the weights are so heavy on the scales of justice that we are in serious risk of forfeiting our national myths.',
        originalLang: 'en',
        source: { en: 'Ill Fares the Land', zh: '《沉疴遍地》' },
        year: 2010,
      },
      {
        text: {
          en: 'The twentieth century is hardly behind us but already its quarrels and its ideals, its hopes and its fears are slipping into obscurity. The Cold War, the great ideological divide, is already as alien to most young people as the Thirty Years\' War.',
          zh: '二十世纪刚刚过去，但它的纷争与理想、希望与恐惧已在褪色。冷战，那场伟大的意识形态分歧，对大多数年轻人来说已如三十年战争般遥远。',
        },
        original: 'The twentieth century is hardly behind us but already its quarrels and its ideals, its hopes and its fears are slipping into obscurity.',
        originalLang: 'en',
        source: { en: 'Postwar: A History of Europe Since 1945, Introduction', zh: '《战后欧洲史》导言' },
        year: 2005,
      },
    ],
  },
  {
    slug: 'timothy-snyder',
    name: { en: 'Timothy Snyder', zh: '蒂莫西·斯奈德' },
    years: '1969–',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American historian and professor at Yale University, author of Bloodlands, On Tyranny, and Black Earth, specializing in the history of Central and Eastern Europe, political violence, and the fragility of democratic institutions.',
      zh: '美国历史学家，耶鲁大学教授，《血色大地》、《论暴政》和《黑土》作者，专攻中东欧历史、政治暴力和民主制度的脆弱性。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Timothy_Snyder',
      zh: 'https://zh.wikipedia.org/wiki/蒂莫西·斯奈德',
    },
    quotes: [
      {
        text: {
          en: 'Do not obey in advance. Most of the power of authoritarianism is freely given. In times like these, individuals think ahead about what a more repressive government will want, and then offer themselves without being asked.',
          zh: '不要提前服从。威权主义的大部分权力是被自愿让渡的。在这样的时代，人们会提前揣度一个更加压制性的政府想要什么，然后不待被要求便主动奉上。',
        },
        original: 'Do not obey in advance. Most of the power of authoritarianism is freely given.',
        originalLang: 'en',
        source: { en: 'On Tyranny: Twenty Lessons from the Twentieth Century, Lesson 1', zh: '《论暴政：二十世纪的二十个教训》第一课' },
        year: 2017,
      },
      {
        text: {
          en: 'Defend institutions. It is institutions that help us to preserve decency. They need our help as well. Do not speak of "our institutions" unless you make them yours by acting on their behalf.',
          zh: '捍卫制度。正是制度帮助我们维系体面。制度同样需要我们的帮助。不要谈论"我们的制度"，除非你以实际行动使它们真正成为你的。',
        },
        original: 'Defend institutions. It is institutions that help us to preserve decency.',
        originalLang: 'en',
        source: { en: 'On Tyranny: Twenty Lessons from the Twentieth Century, Lesson 2', zh: '《论暴政：二十世纪的二十个教训》第二课' },
        year: 2017,
      },
      {
        text: {
          en: 'The European killing fields were not battlefields. They were, for the most part, places where civilians were brought to be murdered, or sites near where they lived where they were killed in large numbers.',
          zh: '欧洲的杀戮之地并非战场。它们大多是平民被带去屠杀的地方，或者是他们居住地附近被大规模杀害的场所。',
        },
        original: 'The European killing fields were not battlefields. They were, for the most part, places where civilians were brought to be murdered.',
        originalLang: 'en',
        source: { en: 'Bloodlands: Europe Between Hitler and Stalin, Introduction', zh: '《血色大地：希特勒与斯大林之间的欧洲》导言' },
        year: 2010,
      },
      {
        text: {
          en: 'Post-truth is pre-fascism.',
          zh: '后真相即前法西斯。',
        },
        original: 'Post-truth is pre-fascism.',
        originalLang: 'en',
        source: { en: 'On Tyranny: Twenty Lessons from the Twentieth Century', zh: '《论暴政：二十世纪的二十个教训》' },
        year: 2017,
      },
      {
        text: {
          en: 'To abandon facts is to abandon freedom. If nothing is true, then no one can criticize power, because there is no basis upon which to do so. If nothing is true, then all is spectacle.',
          zh: '放弃事实就是放弃自由。如果没有什么是真的，就没有人能批评权力，因为批评失去了依据。如果没有什么是真的，那一切都不过是表演。',
        },
        original: 'To abandon facts is to abandon freedom. If nothing is true, then no one can criticize power, because there is no basis upon which to do so.',
        originalLang: 'en',
        source: { en: 'On Tyranny: Twenty Lessons from the Twentieth Century, Lesson 10', zh: '《论暴政：二十世纪的二十个教训》第十课' },
        year: 2017,
      },
      {
        text: {
          en: 'The Holocaust is not only history. It is also a warning. It tells us that the human capacity for mass murder is not limited to any one political system, culture, or historical epoch.',
          zh: '大屠杀不仅仅是历史。它也是一个警告。它告诉我们，人类进行大规模屠杀的能力并不局限于任何一种政治制度、文化或历史时期。',
        },
        original: 'The Holocaust is not only history. It is also a warning.',
        originalLang: 'en',
        source: { en: 'Black Earth: The Holocaust as History and Warning', zh: '《黑土：大屠杀作为历史与警示》' },
        year: 2015,
      },
      {
        text: {
          en: 'Be calm when the unthinkable arrives. Modern tyranny is terror management. When the terrorist attack comes, remember that authoritarians exploit such events in order to consolidate power.',
          zh: '当不可想象之事降临时保持冷静。现代暴政就是恐惧管理。当恐怖袭击来临时，请记住威权者会利用这样的事件来巩固权力。',
        },
        original: 'Be calm when the unthinkable arrives. Modern tyranny is terror management.',
        originalLang: 'en',
        source: { en: 'On Tyranny: Twenty Lessons from the Twentieth Century, Lesson 19', zh: '《论暴政：二十世纪的二十个教训》第十九课' },
        year: 2017,
      },
    ],
  },
  {
    slug: 'reinhart-koselleck',
    name: { en: 'Reinhart Koselleck', zh: '莱因哈特·科泽勒克' },
    years: '1923–2006',
    nationality: { en: 'German', zh: '德国' },
    bio: {
      en: 'German historian and one of the most important theorists of history in the twentieth century, author of Futures Past and Critique and Crisis, who pioneered Begriffsgeschichte (conceptual history) and analyzed how temporal structures shape historical experience.',
      zh: '德国历史学家，二十世纪最重要的历史理论家之一，《过去的未来》和《批判与危机》作者，开创了"概念史"(Begriffsgeschichte)方法，分析了时间结构如何塑造历史经验。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Reinhart_Koselleck',
      zh: 'https://zh.wikipedia.org/wiki/莱因哈特·科泽勒克',
    },
    quotes: [
      {
        text: {
          en: 'The relationship between past and future that is peculiar to any given present is what constitutes the temporal structure of a particular experience.',
          zh: '任何特定当下所特有的过去与未来之间的关系，构成了某种特定经验的时间结构。',
        },
        original: 'Das Verhältnis von Vergangenheit und Zukunft, das einer jeweiligen Gegenwart eigentümlich ist, konstituiert die Zeitstruktur einer bestimmten Erfahrung.',
        originalLang: 'de',
        source: { en: 'Futures Past: On the Semantics of Historical Time', zh: '《过去的未来：论历史时间的语义学》' },
        year: 1979,
      },
      {
        text: {
          en: 'The "space of experience" and the "horizon of expectation" are two categories which, by intertwining past and future, are suitable for thematizing historical time.',
          zh: '"经验空间"和"期待视野"是两个范畴，它们通过将过去和未来交织在一起，适合于将历史时间主题化。',
        },
        original: 'Der „Erfahrungsraum" und der „Erwartungshorizont" sind zwei Kategorien, die, indem sie Vergangenheit und Zukunft verschränken, geeignet sind, die historische Zeit zu thematisieren.',
        originalLang: 'de',
        source: { en: 'Futures Past: On the Semantics of Historical Time, Chapter 14', zh: '《过去的未来：论历史时间的语义学》第十四章' },
        year: 1979,
      },
      {
        text: {
          en: 'Modernity is characterized by an increasing gap between the space of experience and the horizon of expectation. The past teaches less and less about the future.',
          zh: '现代性的特征在于经验空间与期待视野之间日益增大的裂隙。过去能教给我们关于未来的东西越来越少。',
        },
        original: 'Die Neuzeit ist durch eine zunehmende Differenz zwischen Erfahrungsraum und Erwartungshorizont gekennzeichnet.',
        originalLang: 'de',
        source: { en: 'Futures Past: On the Semantics of Historical Time', zh: '《过去的未来：论历史时间的语义学》' },
        year: 1979,
      },
      {
        text: {
          en: 'Every concept is not only effective as a factor in political and social life; it is also an indicator of that life. Every concept is simultaneously a fact and an indicator of something lying beyond itself.',
          zh: '每一个概念不仅作为政治和社会生活中的一个因素而发挥作用；它也是那种生活的一个指标。每一个概念同时是一个事实和一个指向自身之外的某物的指标。',
        },
        original: 'Jeder Begriff ist nicht nur als Faktor im politischen und sozialen Leben wirksam; er ist auch ein Indikator dieses Lebens.',
        originalLang: 'de',
        source: { en: 'Futures Past: On the Semantics of Historical Time', zh: '《过去的未来：论历史时间的语义学》' },
        year: 1979,
      },
      {
        text: {
          en: 'Crisis became a structural signature of modernity: the permanent condition of a world in which the old no longer applies and the new has not yet arrived.',
          zh: '危机成为现代性的结构性标志：一个旧事物不再适用而新事物尚未到来的世界的永恒状态。',
        },
        original: 'Krise wurde zur strukturellen Signatur der Neuzeit: der Dauerzustand einer Welt, in der das Alte nicht mehr gilt und das Neue noch nicht eingetreten ist.',
        originalLang: 'de',
        source: { en: 'Critique and Crisis: Enlightenment and the Pathogenesis of Modern Society', zh: '《批判与危机：启蒙运动与现代社会的病理学》' },
        year: 1959,
      },
      {
        text: {
          en: 'History may not repeat itself, but the linguistic structures through which we grasp it certainly do. The same words recur to articulate new experiences, and this is precisely what makes concepts historically significant.',
          zh: '历史也许不会重演，但我们用以把握历史的语言结构肯定会重演。同样的词语反复出现以表达新的经验，而这正是使概念具有历史意义的原因所在。',
        },
        original: 'Die Geschichte mag sich nicht wiederholen, aber die sprachlichen Strukturen, durch die wir sie erfassen, tun es gewiss.',
        originalLang: 'de',
        source: { en: 'Futures Past: On the Semantics of Historical Time', zh: '《过去的未来：论历史时间的语义学》' },
        year: 1979,
      },
    ],
  },
];
