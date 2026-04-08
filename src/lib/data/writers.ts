import type { PersonData } from './types';

export const writerData: PersonData[] = [
  {
    slug: 'kim-ae-ran',
    name: { en: 'Kim Ae-ran', zh: '金爱烂' },
    years: '1980\u2013',
    nationality: { en: 'South Korean', zh: '韩国' },
    bio: {
      en: 'South Korean novelist and short story writer known for portraying the lives of young urban precariats with lyrical precision.',
      zh: '韩国小说家、短篇小说作家，以抒情而精准的笔触描绘都市年轻人的不稳定生活而闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Kim_Ae-ran',
      zh: 'https://zh.wikipedia.org/wiki/%E9%87%91%E6%84%9B%E7%88%9B',
    },
    quotes: [
      {
        text: {
          en: 'The reason we read is to know that we are not alone.',
          zh: '我们阅读的理由，是为了知道自己并不孤独。',
        },
        original: '우리가 책을 읽는 이유는 우리가 혼자가 아니라는 것을 알기 위해서다.',
        originalLang: 'ko',
        originalLocale: 'en',
        source: { en: 'Run, Dad!', zh: '《奔跑吧，爸爸》' },
        year: 2005,
        comment: {
          en: 'This quote originates from the play/film Shadowlands (William Nicholson, 1985/1993), spoken by the character of C.S. Lewis. Its attribution to Kim Ae-ran is unverified.',
          zh: '此引言源自戏剧/电影《影子大地》（威廉·尼科尔森，1985/1993），由C.S.刘易斯角色所说。将其归于金爱烂名下尚未证实。',
        },
      },
      {
        text: {
          en: 'Poverty is not romantic. It is exhausting, shameful, and isolating.',
          zh: '贫穷不是浪漫的。它令人疲惫、羞耻、孤立。',
        },
        original: '가난은 낭만적이지 않다. 그것은 지치고, 부끄럽고, 고립되는 것이다.',
        originalLang: 'ko',
        source: { en: 'Run, Dad!', zh: '《奔跑吧，爸爸》' },
        year: 2005,
      },
    ],
  },
  {
    slug: 'as-byatt',
    name: { en: 'A.S. Byatt', zh: 'A.S.拜厄特' },
    years: '1936\u20132023',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British novelist and literary critic celebrated for intellectually rich narratives that weave together history, art, and the life of the mind.',
      zh: '英国小说家、文学评论家，以将历史、艺术与精神生活交织在一起的智性叙事著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/A._S._Byatt',
      zh: 'https://zh.wikipedia.org/wiki/A%C2%B7S%C2%B7%E6%8B%9C%E5%8E%84%E7%89%B9',
    },
    quotes: [
      {
        text: {
          en: 'A good book is the precious life-blood of a master spirit, embalmed and treasured up on purpose to a life beyond life.',
          zh: '一本好书是一位大师精神的珍贵血液，被精心保存，留给超越生命的生命。',
        },
        original: 'A good book is the precious life-blood of a master spirit, embalmed and treasured up on purpose to a life beyond life.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Possession (quoting John Milton, Areopagitica)', zh: '占有（引用约翰·弥尔顿《论出版自由》）' },
        year: 1990,
      },
      {
        text: {
          en: 'Reading is a creative activity. You have to visualize the characters, you have to hear their voices.',
          zh: '阅读是一种创造性活动。你必须想象人物的形象，必须听到他们的声音。',
        },
        original: 'Reading is a creative activity. You have to visualize the characters, you have to hear their voices.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Interview with The Paris Review', zh: '《巴黎评论》访谈' },
        year: 2001,
      },
    ],
  },
  {
    slug: 'marguerite-duras',
    name: { en: 'Marguerite Duras', zh: '玛格丽特·杜拉斯' },
    years: '1914\u20131996',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'French novelist, playwright, and filmmaker whose spare, haunting prose explored desire, memory, and colonial Indochina.',
      zh: '法国小说家、剧作家、电影导演，以简洁而萦绕不去的散文探索欲望、记忆与殖民地印度支那。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Marguerite_Duras',
      zh: 'https://zh.wikipedia.org/wiki/%E7%8E%9B%E6%A0%BC%E4%B8%BD%E7%89%B9%C2%B7%E6%9D%9C%E6%8B%89%E6%96%AF',
    },
    quotes: [
      {
        text: {
          en: 'Very early in my life it was too late.',
          zh: '我在很年轻的时候，就已经老了。',
        },
        original: 'Tr\u00e8s vite dans ma vie il a \u00e9t\u00e9 trop tard.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Lover', zh: '情人' },
        year: 1984,
      },
      {
        text: {
          en: 'You have to be very fond of men. Very, very fond. You have to be very fond of them to love them. Otherwise they are simply unbearable.',
          zh: '你必须非常喜欢男人。非常、非常喜欢。你必须非常喜欢他们才能爱他们。否则他们简直不可忍受。',
        },
        original: 'Il faut beaucoup aimer les hommes. Beaucoup, beaucoup. Beaucoup les aimer pour les aimer. Sans cela, ce n\u2019est pas possible, on ne peut pas les supporter.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Practicalities', zh: '物质生活' },
        year: 1987,
      },
      {
        text: {
          en: 'The story of my life does not exist. It does not exist. There is never a center. No path, no line.',
          zh: '我的人生故事并不存在。它不存在。从来没有中心。没有道路，没有线索。',
        },
        original: 'L\u2019histoire de ma vie n\u2019existe pas. \u00c7a n\u2019existe pas. Il n\u2019y a jamais de centre. Pas de chemin, pas de ligne.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Lover', zh: '情人' },
        year: 1984,
      },
      {
        text: {
          en: 'I think the world offers nothing comparable to writing. Nothing can equal it.',
          zh: '我认为世上没有什么能与写作相比。没有什么能与之相提并论。',
        },
        original: 'Je pense que rien au monde ne remplace l\u2019\u00e9criture. Rien ne peut l\u2019\u00e9galer.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Writing', zh: '写作' },
        year: 1993,
      },
      {
        text: {
          en: 'Alcohol doesn\'t console, it doesn\'t fill up anyone\'s psychological gaps, all it replaces is the lack of God.',
          zh: '酒精不能安慰人，不能填补任何人心理上的空缺，它所替代的只是上帝的缺席。',
        },
        original: 'L\u2019alcool ne console pas, il ne meuble pas les espaces psychologiques de l\u2019individu, il ne remplace que le manque de Dieu.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Practicalities', zh: '物质生活' },
        year: 1987,
      },
      {
        text: {
          en: 'One must write what one does not know, what one has forgotten, what lies dormant in the region of the self.',
          zh: '一个人必须写自己不知道的东西，自己已经遗忘的东西，沉睡在自我深处的东西。',
        },
        original: 'Il faut \u00e9crire ce qu\u2019on ne sait pas, ce qu\u2019on a oubli\u00e9, ce qui dort dans la r\u00e9gion de soi-m\u00eame.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Writing', zh: '写作' },
        year: 1993,
      },
      {
        text: {
          en: 'I believe that always, or almost always, in all childhoods and in all the lives that follow them, the mother represents madness. Our mothers always remain the strangest, craziest people we\u2019ve ever met.',
          zh: '我相信，在所有的童年和随后的生命中，母亲总是或几乎总是代表着疯狂。我们的母亲永远是我们遇到过的最奇怪、最疯狂的人。',
        },
        original: 'Je crois que toujours, ou presque toujours, dans toutes les enfances et dans toutes les vies qui suivent, la m\u00e8re repr\u00e9sente la folie. Nos m\u00e8res restent toujours les plus \u00e9tranges, les plus folles personnes que nous ayons jamais rencontr\u00e9es.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Practicalities', zh: '物质生活' },
        year: 1987,
      },
      {
        text: {
          en: 'The best way to fill time is to waste it.',
          zh: '填满时间最好的方式就是浪费它。',
        },
        original: 'La meilleure fa\u00e7on de remplir le temps, c\u2019est de le perdre.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Practicalities', zh: '物质生活' },
        year: 1987,
      },
      {
        text: {
          en: 'Writing is the unknown. Before writing one knows nothing of what one is about to write.',
          zh: '写作是未知的。在写作之前，人对自己将要写的东西一无所知。',
        },
        original: '\u00c9crire, c\u2019est l\u2019inconnu. Avant d\u2019\u00e9crire on ne sait rien de ce qu\u2019on va \u00e9crire.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Writing', zh: '写作' },
        year: 1993,
      },
      {
        text: {
          en: 'I think love always ends up being the most important thing.',
          zh: '我认为爱到最后总是最重要的事。',
        },
        original: 'Je pense que l\u2019amour est toujours le plus important.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Lover', zh: '情人' },
        year: 1984,
      },
    ],
  },
  {
    slug: 'borges',
    name: { en: 'Jorge Luis Borges', zh: '豪尔赫·路易斯·博尔赫斯' },
    years: '1899\u20131986',
    nationality: { en: 'Argentine', zh: '阿根廷' },
    bio: {
      en: 'Argentine short story writer and poet whose labyrinthine fictions transformed 20th-century literature with their explorations of infinity, time, and identity.',
      zh: '阿根廷短篇小说家与诗人，以迷宫般的虚构作品探索无限、时间与身份，深刻改变了二十世纪文学。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Jorge_Luis_Borges',
      zh: 'https://zh.wikipedia.org/wiki/%E8%B1%AA%E5%B0%94%E8%B5%AB%C2%B7%E8%B7%AF%E6%98%93%E6%96%AF%C2%B7%E5%8D%9A%E5%B0%94%E8%B5%AB%E6%96%AF',
    },
    quotes: [
      {
        text: {
          en: 'I have always imagined that Paradise will be a kind of library.',
          zh: '我一直想象，天堂应该是图书馆的模样。',
        },
        original: 'Yo, que me figuraba el Para\u00edso / bajo la especie de una biblioteca.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Poem of the Gifts', zh: '关于天赐的诗' },
        year: 1960,
      },
      {
        text: {
          en: 'A man sets out to draw the world. As the years go by, he peoples a space with images of provinces, kingdoms, mountains, bays, ships, islands, fishes, rooms, instruments, stars, horses, and individuals. A short time before he dies, he discovers that the patient labyrinth of lines traces the lineaments of his own face.',
          zh: '一个人立志要描绘世界。随着岁月流逝，他画出了省份、王国、山脉、海湾、船只、岛屿、鱼群、房间、器具、星辰、马匹和人物。临终前不久，他发现那耐心的线条迷宫勾勒出的是自己的面容。',
        },
        original: 'Un hombre se propone la tarea de dibujar el mundo. A lo largo de los a\u00f1os puebla un espacio con im\u00e1genes de provincias, de reinos, de monta\u00f1as, de bah\u00edas, de naves, de islas, de peces, de habitaciones, de instrumentos, de astros, de caballos y de personas. Poco antes de morir, descubre que ese paciente laberinto de l\u00edneas traza la imagen de su cara.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'The Maker', zh: '诗人' },
        year: 1960,
      },
      {
        text: {
          en: 'Time is the substance I am made of. Time is a river which sweeps me along, but I am the river.',
          zh: '时间是构成我的材料。时间是一条卷走我的河流，但我就是这条河。',
        },
        original: 'El tiempo es la substancia de que estoy hecho. El tiempo es un r\u00edo que me arrebata, pero yo soy el r\u00edo.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'A New Refutation of Time', zh: '对时间的新反驳' },
        year: 1946,
      },
      {
        text: {
          en: 'Being with you and not being with you is the only way I have to measure time.',
          zh: '与你在一起，或不与你在一起，是我衡量时间的唯一方式。',
        },
        original: 'Estar contigo o no estar contigo es la medida de mi tiempo.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'The Threatened', zh: '被威胁的人' },
        year: 1972,
      },
      {
        text: {
          en: 'A writer \u2014 and, I believe, generally all persons \u2014 must think that whatever happens to him or her is a resource.',
          zh: '一个作家\u2014\u2014我相信，一般来说所有人\u2014\u2014都必须认为发生在他或她身上的一切都是一种资源。',
        },
        original: 'Un escritor \u2014 y creo que en general todas las personas \u2014 debe pensar que todo lo que le ocurre es un recurso.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Twenty-Four Conversations with Borges', zh: '与博尔赫斯的二十四次对话' },
        year: 1984,
      },
      {
        text: {
          en: 'The universe (which others call the Library) is composed of an indefinite, perhaps infinite number of hexagonal galleries.',
          zh: '宇宙（别人管它叫图书馆）由数目不定的、也许是无限数目的六角形回廊组成。',
        },
        original: 'El universo (que otros llaman la Biblioteca) se compone de un n\u00famero indefinido, y tal vez infinito, de galer\u00edas hexagonales.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'The Library of Babel', zh: '巴别图书馆' },
        year: 1941,
      },
      {
        text: {
          en: 'We accept reality so readily \u2014 perhaps because we sense that nothing is real.',
          zh: '我们如此轻易地接受现实\u2014\u2014也许是因为我们感觉到没有什么是真实的。',
        },
        original: 'Aceptamos la realidad con tanta facilidad \u2014 acaso porque intuimos que nada es real.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Other Inquisitions', zh: '其他审问' },
        year: 1952,
      },
      {
        text: {
          en: 'Every man should be capable of all ideas, and I believe that in the future he will be.',
          zh: '每个人都应该有能力拥有一切思想，我相信将来他会的。',
        },
        original: 'Todo hombre debe ser capaz de todas las ideas, y entiendo que en el porvenir lo ser\u00e1.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Pierre Menard, Author of the Quixote', zh: '吉诃德的作者皮埃尔·梅纳尔' },
        year: 1939,
      },
      {
        text: {
          en: 'There is no intellectual exercise that is not ultimately pointless.',
          zh: '没有一种智力活动不是最终徒劳的。',
        },
        original: 'No hay ejercicio intelectual que no sea finalmente in\u00fatil.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Pierre Menard, Author of the Quixote', zh: '吉诃德的作者皮埃尔·梅纳尔' },
        year: 1939,
      },
      {
        text: {
          en: 'Nothing is built on stone; all is built on sand, but we must build as if the sand were stone.',
          zh: '没有什么建在石头上；一切都建在沙上，但我们必须把沙当作石头来建设。',
        },
        original: 'Nada se edifica sobre la piedra, todo sobre la arena, pero nuestro deber es edificar como si fuera piedra la arena.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'In Praise of Darkness', zh: '《暗影颂》' },
        year: 1969,
      },
      {
        text: {
          en: 'I am not sure that I exist, actually. I am all the writers that I have read, all the people that I have met, all the women that I have loved.',
          zh: '我不确定我是否真的存在。我是我读过的所有作家，遇到过的所有人，爱过的所有女人。',
        },
        original: 'No estoy seguro de que yo exista, en realidad. Soy todos los autores que he le\u00eddo, toda la gente que he conocido, todas las mujeres que he amado.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Interview, 1980', zh: '1980年访谈' },
        year: 1980,
      },
      {
        text: {
          en: 'A book is more than a verbal structure or series of verbal structures; it is the dialogue it establishes with its reader and the intonation it imposes upon his voice and the changing and durable images it leaves in his memory.',
          zh: '一本书不只是一个语词结构或一系列语词结构；它是与读者建立的对话，是它赋予读者声音的语调，以及它留在读者记忆中那些变化而持久的意象。',
        },
        original: 'Un libro es m\u00e1s que una estructura verbal, o que una serie de estructuras verbales; es el di\u00e1logo que entabla con su lector y la entonaci\u00f3n que impone a su voz y las cambiantes y durables im\u00e1genes que deja en su memoria.',
        originalLang: 'es',
        source: { en: 'Prologues, with a Prologue of Prologues', zh: '序言集及序言的序言' },
        year: 1975,
      },
      {
        text: {
          en: 'To fall in love is to create a religion that has a fallible god.',
          zh: '坠入爱河就是创造一种宗教，而其神灵是会犯错的。',
        },
        original: 'Enamorarse es crear una religi\u00f3n cuyo dios es falible.',
        originalLang: 'es',
        source: { en: 'The Meeting in a Dream', zh: '梦中相会' },
        year: 1952,
      },
    ],
  },
  {
    slug: 'virginia-woolf',
    name: { en: 'Virginia Woolf', zh: '弗吉尼亚·伍尔夫' },
    years: '1882\u20131941',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British modernist novelist and essayist who pioneered the stream-of-consciousness technique and became a central figure of the Bloomsbury Group.',
      zh: '英国现代主义小说家、散文家，开创了意识流技法，是布鲁姆斯伯里团体的核心人物。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Virginia_Woolf',
      zh: 'https://zh.wikipedia.org/wiki/%E5%BC%97%E5%90%89%E5%B0%BC%E4%BA%9A%C2%B7%E4%BC%8D%E5%B0%94%E5%A4%AB',
    },
    quotes: [
      {
        text: {
          en: 'One cannot think well, love well, sleep well, if one has not dined well.',
          zh: '一个人如果吃得不好，就无法好好思考、好好去爱、好好入睡。',
        },
        original: 'One cannot think well, love well, sleep well, if one has not dined well.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Room of One\'s Own', zh: '一间自己的房间' },
        year: 1929,
      },
      {
        text: {
          en: 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.',
          zh: '随便你们把图书馆锁起来吧；但是没有任何大门、锁链或门闩能够封锁我思想的自由。',
        },
        original: 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Room of One\'s Own', zh: '一间自己的房间' },
        year: 1929,
      },
      {
        text: {
          en: 'A woman must have money and a room of her own if she is to write fiction.',
          zh: '一个女人如果要写小说，她必须有钱和一间自己的房间。',
        },
        original: 'A woman must have money and a room of her own if she is to write fiction.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Room of One\'s Own', zh: '一间自己的房间' },
        year: 1929,
      },
      {
        text: {
          en: 'For most of history, Anonymous was a woman.',
          zh: '在历史的大部分时间里，\u201c佚名\u201d是一个女人。',
        },
        original: 'For most of history, Anonymous was a woman.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Room of One\'s Own', zh: '一间自己的房间' },
        year: 1929,
      },
      {
        text: {
          en: 'I am rooted, but I flow.',
          zh: '我扎下了根，但我在流动。',
        },
        original: 'I am rooted, but I flow.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Waves', zh: '海浪' },
        year: 1931,
      },
      {
        text: {
          en: 'The beauty of the world, which is so soon to perish, has two edges, one of laughter, one of anguish, cutting the heart asunder.',
          zh: '这世界的美，如此快将消逝，有两面刃，一面是笑，一面是痛，将心切成两半。',
        },
        original: 'The beauty of the world, which is so soon to perish, has two edges, one of laughter, one of anguish, cutting the heart asunder.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Room of One\'s Own', zh: '一间自己的房间' },
        year: 1929,
      },
      {
        text: {
          en: 'Arrange whatever pieces come your way.',
          zh: '把到你手中的碎片拼好。',
        },
        original: 'Arrange whatever pieces come your way.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Diary, 5 September 1925', zh: '日记，1925年9月5日' },
        year: 1925,
      },
      {
        text: {
          en: 'No need to hurry. No need to sparkle. No need to be anybody but oneself.',
          zh: '无需匆忙。无需闪耀。只需做自己。',
        },
        original: 'No need to hurry. No need to sparkle. No need to be anybody but oneself.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Room of One\'s Own', zh: '一间自己的房间' },
        year: 1929,
      },
      {
        text: {
          en: 'The eyes of others our prisons; their thoughts our cages.',
          zh: '别人的目光是我们的监狱，别人的思想是我们的牢笼。',
        },
        original: 'The eyes of others our prisons; their thoughts our cages.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'An Unwritten Novel', zh: '未写出的小说' },
        year: 1920,
      },
      {
        text: {
          en: 'Life is not a series of gig lamps symmetrically arranged; life is a luminous halo, a semi-transparent envelope surrounding us from the beginning of consciousness to the end.',
          zh: '人生不是一组对称排列的灯泡；人生是一圈发光的晕，一层半透明的包裹，从意识的开始到结束围绕着我们。',
        },
        original: 'Life is not a series of gig lamps symmetrically arranged; life is a luminous halo, a semi-transparent envelope surrounding us from the beginning of consciousness to the end.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Modern Fiction', zh: '现代小说' },
        year: 1919,
      },
      {
        text: {
          en: 'Let us not take it for granted that life exists more fully in what is commonly thought big than in what is commonly thought small.',
          zh: '不要想当然地认为，生活在通常被认为重大的事物中比在通常被认为渺小的事物中更为充实。',
        },
        originalLang: 'en',
        source: { en: 'The Common Reader', zh: '普通读者' },
        year: 1925,
      },
      {
        text: {
          en: 'The mind receives a myriad impressions \u2014 trivial, fantastic, evanescent, or engraved with the sharpness of steel. From all sides they come, an incessant shower of innumerable atoms.',
          zh: '心灵接收到无数的印象\u2014\u2014琐碎的、奇异的、转瞬即逝的，或是以钢铁般的锐利镌刻的。它们从四面八方涌来，是无数原子的不断倾泻。',
        },
        originalLang: 'en',
        source: { en: 'Modern Fiction', zh: '现代小说' },
        year: 1919,
      },
    ],
  },
  {
    slug: 'kafka',
    name: { en: 'Franz Kafka', zh: '弗朗茨·卡夫卡' },
    years: '1883\u20131924',
    nationality: { en: 'Czech (Austro-Hungarian)', zh: '捷克（奥匈帝国）' },
    bio: {
      en: 'German-language novelist whose surreal, nightmarish tales of bureaucracy and alienation gave the world the adjective \u201cKafkaesque.\u201d',
      zh: '德语小说家，以超现实的、噩梦般的官僚与异化故事闻名，\u201c卡夫卡式\u201d一词由此而来。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Franz_Kafka',
      zh: 'https://zh.wikipedia.org/wiki/%E5%BC%97%E5%85%B0%E8%8C%A8%C2%B7%E5%8D%A1%E5%A4%AB%E5%8D%A1',
    },
    quotes: [
      {
        text: {
          en: 'A book must be the axe for the frozen sea within us.',
          zh: '一本书必须是凿开我们心中冰封大海的斧头。',
        },
        original: 'Ein Buch mu\u00df die Axt sein f\u00fcr das gefrorene Meer in uns.',
        originalLang: 'de',
        originalLocale: 'en',
        source: {
          en: 'Letter to Oskar Pollak',
          zh: '致奥斯卡·波拉克的信',
        },
        year: 1904,
      },
      {
        text: {
          en: 'I am a cage, in search of a bird.',
          zh: '我是一只笼子，在寻找一只鸟。',
        },
        original: 'Ich bin ein K\u00e4fig, auf der Suche nach einem Vogel.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Zurau Aphorisms', zh: '策劳箴言' },
        year: 1917,
      },
      {
        text: {
          en: 'In the struggle between yourself and the world, side with the world.',
          zh: '在你与世界的斗争中，要站在世界那一边。',
        },
        original: 'Im Kampf zwischen dir und der Welt sekundiere der Welt.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Zurau Aphorisms', zh: '策劳箴言' },
        year: 1917,
      },
      {
        text: {
          en: 'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.',
          zh: '一天早晨，格里高尔·萨姆沙从不安的睡梦中醒来，发现自己在床上变成了一只巨大的甲虫。',
        },
        original: 'Als Gregor Samsa eines Morgens aus unruhigen Tr\u00e4umen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Metamorphosis', zh: '变形记' },
        year: 1915,
      },
      {
        text: {
          en: 'A first sign of the beginning of understanding is the wish to die.',
          zh: '理解开始的第一个标志就是想死的愿望。',
        },
        original: 'Ein erstes Zeichen beginnender Erkenntnis ist der Wunsch zu sterben.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Zurau Aphorisms', zh: '策劳箴言' },
        year: 1917,
      },
      {
        text: {
          en: 'There are two main human sins from which all the others derive: impatience and indolence.',
          zh: '人有两大原罪，其余一切罪恶皆由此衍生：急躁与懒惰。',
        },
        original: 'Es gibt zwei menschliche Haupts\u00fcnden, aus welchen sich alle andern ableiten: Ungeduld und L\u00e4ssigkeit.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Zurau Aphorisms', zh: '策劳箴言' },
        year: 1917,
      },
      {
        text: {
          en: 'Someone must have been telling lies about Josef K., because without having done anything truly wrong he was arrested one fine morning.',
          zh: '一定有人诽谤了约瑟夫·K.，因为他没有做过任何坏事，一天早晨却被逮捕了。',
        },
        original: 'Jemand mu\u00dfte Josef K. verleumdet haben, denn ohne da\u00df er etwas B\u00f6ses getan h\u00e4tte, wurde er eines Morgens verhaftet.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'The Trial', zh: '审判' },
        year: 1925,
      },
      {
        text: {
          en: 'I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.',
          zh: '我无法让任何人理解我内心发生了什么。我甚至无法向自己解释。',
        },
        original: 'Ich kann niemandem verst\u00e4ndlich machen, was in mir vorgeht. Ich kann es mir selbst nicht einmal erkl\u00e4ren.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'Diaries', zh: '日记' },
        year: 1914,
      },
      {
        text: {
          en: 'You do not need to leave your room. Remain sitting at your table and listen. Do not even listen, simply wait. Do not even wait, be quite still and solitary. The world will freely offer itself to you to be unmasked; it has no choice; it will roll in ecstasy at your feet.',
          zh: '你不必离开房间。留在桌前倾听。甚至不必倾听，只需等待。甚至不必等待，只需安静而孤独。世界会自行向你敞开面目；它别无选择；它会在你脚下狂喜地滚动。',
        },
        original: 'Du brauchst aus deinem Zimmer nicht zu gehen. Bleib an deinem Tisch und horche. Horche nicht einmal, warte nur. Warte nicht einmal, sei ganz still und allein. Die Welt wird sich dir zur Entlarvung anbieten, sie kann nicht anders, verz\u00fcckt wird sie sich vor dir winden.',
        originalLang: 'de',
        source: { en: 'The Zurau Aphorisms', zh: '策劳箴言' },
        year: 1917,
      },
      {
        text: {
          en: 'The Messiah will come only when he is no longer necessary; he will come only on the day after his arrival; he will come, not on the last day, but on the very last.',
          zh: '弥赛亚只有在不再被需要的时候才会到来；他只会在到达的次日来临；他来的不是最后一天，而是最最后的那天。',
        },
        original: 'Der Messias wird erst kommen, wenn er nicht mehr n\u00f6tig sein wird; er wird erst einen Tag nach seiner Ankunft kommen; er wird nicht am letzten Tag kommen, sondern am allerletzten.',
        originalLang: 'de',
        source: { en: 'The Zurau Aphorisms', zh: '策劳箴言' },
        year: 1917,
      },
    ],
  },
  {
    slug: 'garcia-marquez',
    name: { en: 'Gabriel Garc\u00eda M\u00e1rquez', zh: '加夫列尔·加西亚·马尔克斯' },
    years: '1927\u20132014',
    nationality: { en: 'Colombian', zh: '哥伦比亚' },
    bio: {
      en: 'Colombian novelist and Nobel laureate who became the foremost practitioner of magical realism, blending the fantastical with the everyday.',
      zh: '哥伦比亚小说家、诺贝尔文学奖得主，魔幻现实主义最杰出的实践者，将奇幻与日常融为一体。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Gabriel_Garc%C3%ADa_M%C3%A1rquez',
      zh: 'https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%A4%AB%E5%88%97%E5%B0%94%C2%B7%E5%8A%A0%E8%A5%BF%E4%BA%9A%C2%B7%E9%A9%AC%E5%B0%94%E5%85%8B%E6%96%AF',
    },
    quotes: [
      {
        text: {
          en: 'What matters in life is not what happens to you but what you remember and how you remember it in order to tell it.',
          zh: '生命中重要的不是你遭遇了什么，而是你记住了什么，以及如何记住它来讲述它。',
        },
        original: 'La vida no es la que uno vivi\u00f3, sino la que uno recuerda y c\u00f3mo la recuerda para contarla.',
        originalLang: 'es',
        originalLocale: 'en',
        source: {
          en: 'Living to Tell the Tale',
          zh: '活着为了讲述',
        },
        year: 2002,
      },
      {
        text: {
          en: 'No matter what, nobody can take away the dances you\'ve already had.',
          zh: '无论如何，没有人能夺走你已经跳过的舞。',
        },
        original: 'Nadie puede quitarte los bailes que ya has bailado.',
        originalLang: 'es',
        originalLocale: 'en',
        source: {
          en: 'Memories of My Melancholy Whores',
          zh: '苦妓回忆录',
        },
        year: 2004,
      },
      {
        text: {
          en: 'He who awaits much can expect little.',
          zh: '期望太多的人，能得到的很少。',
        },
        original: 'Quien espera mucho puede esperar poco.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'No One Writes to the Colonel', zh: '没有人给他写信的上校' },
        year: 1961,
      },
      {
        text: {
          en: 'Many years later, as he faced the firing squad, Colonel Aureliano Buend\u00eda was to remember that distant afternoon when his father took him to discover ice.',
          zh: '多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。',
        },
        original: 'Muchos a\u00f1os despu\u00e9s, frente al pelot\u00f3n de fusilamiento, el coronel Aureliano Buend\u00eda hab\u00eda de recordar aquella tarde remota en que su padre lo llev\u00f3 a conocer el hielo.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'One Hundred Years of Solitude', zh: '百年孤独' },
        year: 1967,
      },
      {
        text: {
          en: 'The only regret I will have in dying is if it is not for love.',
          zh: '我死时唯一的遗憾就是不能为爱而死。',
        },
        original: 'El \u00fanico pesar que tendr\u00e9 al morir es que no sea por amor.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Love in the Time of Cholera', zh: '霍乱时期的爱情' },
        year: 1985,
      },
      {
        text: {
          en: 'It was inevitable: the scent of bitter almonds always reminded him of the fate of unrequited love.',
          zh: '这是不可避免的：苦杏仁的气味总是使他想起不得回报的爱情的命运。',
        },
        original: 'Era inevitable: el olor de las almendras amargas le recordaba siempre el destino de los amores contrariados.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Love in the Time of Cholera', zh: '霍乱时期的爱情' },
        year: 1985,
      },
      {
        text: {
          en: 'The heart\'s memory eliminates the bad and magnifies the good; and thanks to this artifice we manage to endure the burdens of the past.',
          zh: '心灵的记忆消除了坏的，放大了好的；正是由于这种伎俩，我们才得以承受过去的负担。',
        },
        original: 'La memoria del coraz\u00f3n elimina los malos recuerdos y magnifica los buenos, y gracias a ese artificio logramos sobrellevar el pasado.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Living to Tell the Tale', zh: '活着为了讲述' },
        year: 2002,
      },
      {
        text: {
          en: 'Human beings are not born once and for all on the day their mothers give birth to them; life obliges them over and over again to give birth to themselves.',
          zh: '人不是在母亲生下他们那天一劳永逸地诞生的；生活一再迫使他们重新生出自己。',
        },
        original: 'Los seres humanos no nacen para siempre el d\u00eda en que sus madres los alumbran, sino que la vida los obliga a parirse a s\u00ed mismos una y otra vez.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Love in the Time of Cholera', zh: '霍乱时期的爱情' },
        year: 1985,
      },
      {
        text: {
          en: 'Wisdom comes to us when it can no longer do any good.',
          zh: '智慧到来时，已无法挽回什么了。',
        },
        original: 'La sabidur\u00eda nos llega cuando ya no nos sirve de nada.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'Love in the Time of Cholera', zh: '霍乱时期的爱情' },
        year: 1985,
      },
    ],
  },
  {
    slug: 'italo-calvino',
    name: { en: 'Italo Calvino', zh: '伊塔洛·卡尔维诺' },
    years: '1923\u20131985',
    nationality: { en: 'Italian', zh: '意大利' },
    bio: {
      en: 'Italian novelist and short story writer whose playful, inventive fictions ranged from neorealism to postmodern fable.',
      zh: '意大利小说家、短篇小说作家，风格从新现实主义到后现代寓言，作品充满游戏精神与创造力。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Italo_Calvino',
      zh: 'https://zh.wikipedia.org/wiki/%E4%BC%8A%E5%A1%94%E6%B4%9B%C2%B7%E5%8D%A1%E5%B0%94%E7%BB%B4%E8%AF%BA',
    },
    quotes: [
      {
        text: {
          en: 'The inferno of the living is not something that will be; if there is one, it is what is already here, the inferno where we live every day, that we form by being together.',
          zh: '活人的地狱不是将来才有的；如果真有的话，就是此刻已经存在的，是我们每天生活其中的，是我们聚在一起而形成的地狱。',
        },
        original: 'L\u2019inferno dei viventi non \u00e8 qualcosa che sar\u00e0; se ce n\u2019\u00e8 uno, \u00e8 quello che \u00e8 gi\u00e0 qui, l\u2019inferno che abitiamo tutti i giorni, che formiamo stando insieme.',
        originalLang: 'it',
        originalLocale: 'en',
        source: { en: 'Invisible Cities', zh: '看不见的城市' },
        year: 1972,
      },
      {
        text: {
          en: 'A classic is a book that has never finished saying what it has to say.',
          zh: '经典是一本从来没有说完它要说的话的书。',
        },
        original: 'Un classico \u00e8 un libro che non ha mai finito di dire quel che ha da dire.',
        originalLang: 'it',
        originalLocale: 'en',
        source: {
          en: 'Why Read the Classics?',
          zh: '为什么读经典',
        },
        year: 1991,
      },
      {
        text: {
          en: 'You take delight not in a city\'s seven or seventy wonders, but in the answer it gives to a question of yours.',
          zh: '让你着迷的不是一座城市的七个或七十个奇观，而是它对你某个问题的回答。',
        },
        original: 'D\u2019una citt\u00e0 non godi le sette o le settantasette meraviglie, ma la risposta che d\u00e0 a una tua domanda.',
        originalLang: 'it',
        originalLocale: 'en',
        source: { en: 'Invisible Cities', zh: '看不见的城市' },
        year: 1972,
      },
    ],
  },
  {
    slug: 'dostoevsky',
    name: { en: 'Fyodor Dostoevsky', zh: '费奥多尔·陀思妥耶夫斯基' },
    years: '1821\u20131881',
    nationality: { en: 'Russian', zh: '俄国' },
    bio: {
      en: 'Russian novelist and philosopher whose psychologically intense works probed the darkest recesses of the human soul.',
      zh: '俄国小说家、哲学家，以心理深度极强的作品探索人类灵魂最黑暗的角落。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Fyodor_Dostoevsky',
      zh: 'https://zh.wikipedia.org/wiki/%E8%B4%B9%E5%A5%A5%E5%A4%9A%E5%B0%94%C2%B7%E9%99%80%E6%80%9D%E5%A6%A5%E8%80%B6%E5%A4%AB%E6%96%AF%E5%9F%BA',
    },
    quotes: [
      {
        text: {
          en: 'The soul is healed by being with children.',
          zh: '与孩子们在一起，灵魂便得以治愈。',
        },
        original: '\u0414\u0443\u0448\u0430 \u0438\u0441\u0446\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u044f\u0434\u043e\u043c \u0441 \u0434\u0435\u0442\u044c\u043c\u0438.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'The Idiot', zh: '白痴' },
        year: 1869,
      },
      {
        text: {
          en: 'Pain and suffering are always inevitable for a large intelligence and a deep heart.',
          zh: '对于高度的智慧和深厚的心灵而言，痛苦与苦难总是不可避免的。',
        },
        original: '\u0411\u043e\u043b\u044c \u0438 \u0441\u0442\u0440\u0430\u0434\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0441\u043e\u0437\u043d\u0430\u043d\u0438\u044f \u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u0441\u0435\u0440\u0434\u0446\u0430.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Crime and Punishment', zh: '罪与罚' },
        year: 1866,
      },
      {
        text: {
          en: 'Beauty will save the world.',
          zh: '美将拯救世界。',
        },
        original: '\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0441\u043f\u0430\u0441\u0451\u0442 \u043c\u0438\u0440.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'The Idiot', zh: '白痴' },
        year: 1869,
      },
      {
        text: {
          en: 'The darker the night, the brighter the stars, the deeper the grief, the closer is God!',
          zh: '夜越黑，星越亮；悲伤越深，上帝越近！',
        },
        original: '\u0427\u0435\u043c \u0442\u0435\u043c\u043d\u0435\u0435 \u043d\u043e\u0447\u044c, \u0442\u0435\u043c \u044f\u0440\u0447\u0435 \u0437\u0432\u0451\u0437\u0434\u044b, \u0447\u0435\u043c \u0433\u043b\u0443\u0431\u0436\u0435 \u0441\u043a\u043e\u0440\u0431\u044c, \u0442\u0435\u043c \u0431\u043b\u0438\u0436\u0435 \u0411\u043e\u0433!',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Crime and Punishment', zh: '罪与罚' },
        year: 1866,
      },
      {
        text: {
          en: 'To go wrong in one\'s own way is better than to go right in someone else\'s.',
          zh: '以自己的方式走错路，也比按别人的方式走对路要好。',
        },
        original: '\u041b\u0443\u0447\u0448\u0435 \u043e\u0448\u0438\u0431\u0430\u0442\u044c\u0441\u044f \u043f\u043e-\u0441\u0432\u043e\u0435\u043c\u0443, \u0447\u0435\u043c \u0431\u044b\u0442\u044c \u043f\u0440\u0430\u0432\u044b\u043c \u043f\u043e \u0447\u0443\u0436\u043e\u043c\u0443.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Crime and Punishment', zh: '罪与罚' },
        year: 1866,
      },
      {
        text: {
          en: 'The mystery of human existence lies not in just staying alive, but in finding something to live for.',
          zh: '人的存在之谜不在于仅仅活着，而在于找到值得为之而活的东西。',
        },
        original: '\u0422\u0430\u0439\u043d\u0430 \u0431\u044b\u0442\u0438\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043d\u0435 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0436\u0438\u0442\u044c, \u0430 \u0432 \u0442\u043e\u043c, \u0434\u043b\u044f \u0447\u0435\u0433\u043e \u0436\u0438\u0442\u044c.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'The Brothers Karamazov', zh: '卡拉马佐夫兄弟' },
        year: 1880,
      },
      {
        text: {
          en: 'Man is a mystery. If you spend your entire life trying to puzzle it out, do not say that you have wasted your time. I occupy myself with this mystery, because I want to be a man.',
          zh: '人是一个谜。如果你用一生去解开它，不要说你浪费了时间。我专注于这个谜，因为我想做一个人。',
        },
        original: '\u0427\u0435\u043b\u043e\u0432\u0435\u043a \u0435\u0441\u0442\u044c \u0442\u0430\u0439\u043d\u0430. \u0415\u0451 \u043d\u0430\u0434\u043e \u0440\u0430\u0437\u0433\u0430\u0434\u0430\u0442\u044c, \u0438 \u0435\u0436\u0435\u043b\u0438 \u0431\u0443\u0434\u0435\u0448\u044c \u0435\u0451 \u0440\u0430\u0437\u0433\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u044e \u0436\u0438\u0437\u043d\u044c, \u0442\u043e \u043d\u0435 \u0433\u043e\u0432\u043e\u0440\u0438, \u0447\u0442\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u043b \u0432\u0440\u0435\u043c\u044f. \u042f \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u044d\u0442\u043e\u0439 \u0442\u0430\u0439\u043d\u043e\u0439, \u0438\u0431\u043e \u0445\u043e\u0447\u0443 \u0431\u044b\u0442\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Letter to his brother Mikhail', zh: '致其兄米哈伊尔的信' },
        year: 1839,
      },
      {
        text: {
          en: 'Above all, do not lie to yourself. A man who lies to himself and listens to his own lie comes to a point where he does not discern any truth either in himself or anywhere around him.',
          zh: '首先，不要对自己撒谎。一个对自己撒谎并听信自己谎言的人，终将无法辨别自己或周围的任何真相。',
        },
        original: '\u0413\u043b\u0430\u0432\u043d\u043e\u0435, \u0441\u0430\u043c\u0438\u043c \u0441\u0435\u0431\u0435 \u043d\u0435 \u043b\u0433\u0438\u0442\u0435. \u041b\u0433\u0443\u0449\u0438\u0439 \u0441\u0430\u043c\u043e\u043c\u0443 \u0441\u0435\u0431\u0435 \u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u043b\u043e\u0436\u044c \u0441\u0432\u043e\u044e \u0441\u043b\u0443\u0448\u0430\u044e\u0449\u0438\u0439 \u0434\u043e \u0442\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0438\u0442, \u0447\u0442\u043e \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u043f\u0440\u0430\u0432\u0434\u044b \u043d\u0438 \u0432 \u0441\u0435\u0431\u0435, \u043d\u0438 \u043a\u0440\u0443\u0433\u043e\u043c \u043d\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u0435\u0442.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'The Brothers Karamazov', zh: '卡拉马佐夫兄弟' },
        year: 1880,
      },
      {
        text: {
          en: 'What is hell? I maintain that it is the suffering of being unable to love.',
          zh: '地狱是什么？我认为它就是无法去爱的痛苦。',
        },
        original: '\u0427\u0442\u043e \u0435\u0441\u0442\u044c \u0430\u0434? \u0420\u0430\u0441\u0441\u0443\u0436\u0434\u0430\u044e \u0442\u0430\u043a: \u00ab\u0421\u0442\u0440\u0430\u0434\u0430\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0443\u0436\u0435 \u0431\u043e\u043b\u0435\u0435 \u043b\u044e\u0431\u0438\u0442\u044c\u00bb.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'The Brothers Karamazov', zh: '卡拉马佐夫兄弟' },
        year: 1880,
      },
      {
        text: {
          en: 'If you want to overcome the whole world, overcome yourself.',
          zh: '如果你想征服全世界，先征服你自己。',
        },
        original: '\u0415\u0441\u043b\u0438 \u0445\u043e\u0447\u0435\u0448\u044c \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u043c\u0438\u0440, \u043f\u043e\u0431\u0435\u0434\u0438 \u0441\u0435\u0431\u044f.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Demons', zh: '群魔' },
        year: 1872,
      },
      {
        text: {
          en: 'Nothing in this world is harder than speaking the truth, nothing easier than flattery.',
          zh: '在这个世界上，没有什么比说真话更难，也没有什么比奉承更容易。',
        },
        original: 'Ничего нет в мире труднее прямодушия, и ничего нет легче лести.',
        originalLang: 'ru',
        source: { en: 'Crime and Punishment', zh: '罪与罚' },
        year: 1866,
      },
      {
        text: {
          en: 'Beauty is a terrible and awful thing. It is terrible because it has never been fathomed, for God sets us nothing but riddles.',
          zh: '美是一件可怕而令人敬畏的事物。它之所以可怕，是因为它从未被看透，因为上帝给我们的只是谜。',
        },
        original: 'Красота — это страшная и ужасная вещь. Страшная, потому что неопределимая, а определить нельзя, потому что Бог задал одни загадки.',
        originalLang: 'ru',
        source: { en: 'The Brothers Karamazov', zh: '《卡拉马佐夫兄弟》' },
        year: 1880,
      },
    ],
  },
  {
    slug: 'tolstoy',
    name: { en: 'Leo Tolstoy', zh: '列夫·托尔斯泰' },
    years: '1828\u20131910',
    nationality: { en: 'Russian', zh: '俄国' },
    bio: {
      en: 'Russian novelist and moral philosopher widely regarded as one of the greatest writers of all time, known for his epic narratives of Russian society.',
      zh: '俄国小说家、道德哲学家，被广泛认为是有史以来最伟大的作家之一，以描绘俄国社会的史诗叙事著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Leo_Tolstoy',
      zh: 'https://zh.wikipedia.org/wiki/%E5%88%97%E5%A4%AB%C2%B7%E6%89%98%E5%B0%94%E6%96%AF%E6%B3%B0',
    },
    quotes: [
      {
        text: {
          en: 'All happy families are alike; each unhappy family is unhappy in its own way.',
          zh: '幸福的家庭都是相似的，不幸的家庭各有各的不幸。',
        },
        original: '\u0412\u0441\u0435 \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0435 \u0441\u0435\u043c\u044c\u0438 \u043f\u043e\u0445\u043e\u0436\u0438 \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430, \u043a\u0430\u0436\u0434\u0430\u044f \u043d\u0435\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u0430\u044f \u0441\u0435\u043c\u044c\u044f \u043d\u0435\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u0430 \u043f\u043e-\u0441\u0432\u043e\u0435\u043c\u0443.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Anna Karenina', zh: '安娜·卡列尼娜' },
        year: 1877,
      },
      {
        text: {
          en: 'The strongest of all warriors are these two \u2014 Time and Patience.',
          zh: '所有战士中最强大的两个\u2014\u2014时间与耐心。',
        },
        original: '\u0421\u0438\u043b\u044c\u043d\u0435\u0435 \u0432\u0441\u0435\u0445 \u0432\u043e\u0438\u043d\u043e\u0432 \u2014 \u044d\u0442\u0438 \u0434\u0432\u0430: \u0432\u0440\u0435\u043c\u044f \u0438 \u0442\u0435\u0440\u043f\u0435\u043d\u0438\u0435.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'War and Peace', zh: '战争与和平' },
        year: 1869,
      },
      {
        text: {
          en: 'The sole meaning of life is to serve humanity.',
          zh: '生命的唯一意义在于为人类服务。',
        },
        original: '\u0415\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438 \u2014 \u0441\u043b\u0443\u0436\u0435\u043d\u0438\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u0443.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'What I Believe', zh: '我的信仰' },
        year: 1884,
      },
      {
        text: {
          en: 'We can know only that we know nothing. And that is the highest degree of human wisdom.',
          zh: '我们只能知道自己一无所知。而这就是人类智慧的最高境界。',
        },
        original: '\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u0437\u043d\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e, \u0447\u0442\u043e \u043c\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0435\u043c. \u0418 \u044d\u0442\u043e \u0432\u044b\u0441\u0448\u0430\u044f \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0443\u0434\u0440\u043e\u0441\u0442\u0438.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'War and Peace', zh: '战争与和平' },
        year: 1869,
      },
      {
        text: {
          en: 'True life is lived when tiny changes occur.',
          zh: '当微小的变化发生时，真正的生活才开始。',
        },
        original: '\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u0436\u0438\u0437\u043d\u044c \u0436\u0438\u0432\u0451\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043a\u0440\u043e\u0448\u0435\u0447\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u044b.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Diaries', zh: '日记' },
      },
      {
        text: {
          en: 'There is no greatness where there is no simplicity, goodness, and truth.',
          zh: '没有朴素、善良和真实，就没有伟大。',
        },
        original: '\u041d\u0435\u0442 \u0432\u0435\u043b\u0438\u0447\u0438\u044f \u0442\u0430\u043c, \u0433\u0434\u0435 \u043d\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u044b, \u0434\u043e\u0431\u0440\u0430 \u0438 \u043f\u0440\u0430\u0432\u0434\u044b.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'War and Peace', zh: '战争与和平' },
        year: 1869,
      },
      {
        text: {
          en: 'All the variety, all the charm, all the beauty of life is made up of light and shadow.',
          zh: '生活的所有丰富、所有魅力、所有美丽都由光与影构成。',
        },
        original: '\u0412\u0441\u0451 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435, \u0432\u0441\u044f \u043f\u0440\u0435\u043b\u0435\u0441\u0442\u044c, \u0432\u0441\u044f \u043a\u0440\u0430\u0441\u043e\u0442\u0430 \u0436\u0438\u0437\u043d\u0438 \u0441\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0438\u0437 \u0441\u0432\u0435\u0442\u0430 \u0438 \u0442\u0435\u043d\u0438.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'Anna Karenina', zh: '安娜·卡列尼娜' },
        year: 1877,
      },
      {
        text: {
          en: 'In the name of God, stop a moment, cease your work, look around you.',
          zh: '以上帝的名义，停下来片刻，放下你的工作，环顾四周。',
        },
        original: '\u0420\u0430\u0434\u0438 \u0411\u043e\u0433\u0430, \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u0438\u0435, \u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u0440\u0430\u0431\u043e\u0442\u0443, \u043e\u0433\u043b\u044f\u043d\u0438\u0442\u0435\u0441\u044c \u0432\u043e\u043a\u0440\u0443\u0433.',
        originalLang: 'ru',
        originalLocale: 'en',
        source: { en: 'What Then Must We Do?', zh: '那么我们该怎么办？' },
        year: 1886,
      },
    ],
  },
  {
    slug: 'proust',
    name: { en: 'Marcel Proust', zh: '马塞尔·普鲁斯特' },
    years: '1871\u20131922',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'French novelist whose monumental work In Search of Lost Time is considered one of the most significant novels of the 20th century, renowned for its exploration of memory and time.',
      zh: '法国小说家，其鸿篇巨制《追忆似水年华》被誉为二十世纪最重要的小说之一，以对记忆与时间的探索闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Marcel_Proust',
      zh: 'https://zh.wikipedia.org/wiki/%E9%A9%AC%E5%A1%9E%E5%B0%94%C2%B7%E6%99%AE%E9%B2%81%E6%96%AF%E7%89%B9',
    },
    quotes: [
      {
        text: {
          en: 'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.',
          zh: '真正的发现之旅不在于寻找新的风景，而在于拥有新的眼光。',
        },
        original: 'Le seul v\u00e9ritable voyage, le seul bain de Jouvence, ce ne serait pas d\u2019aller vers de nouveaux paysages, mais d\u2019avoir d\u2019autres yeux.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: The Prisoner',
          zh: '追忆似水年华：女囚',
        },
        year: 1923,
      },
      {
        text: {
          en: 'We are healed of a suffering only by experiencing it to the full.',
          zh: '只有彻底经历了苦难，我们才能从中痊愈。',
        },
        original: 'On ne gu\u00e9rit d\u2019une souffrance qu\u2019\u00e0 condition de l\u2019\u00e9prouver pleinement.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Albertine Gone',
          zh: '追忆似水年华：失踪的阿尔贝蒂娜',
        },
        year: 1925,
      },
      {
        text: {
          en: 'Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.',
          zh: '让我们感谢那些使我们幸福的人；他们是令我们灵魂绽放的迷人园丁。',
        },
        original: 'Soyons reconnaissants aux personnes qui nous donnent du bonheur ; elles sont les charmants jardiniers par qui nos \u00e2mes sont fleuries.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'Pleasures and Days',
          zh: '欢乐与时日',
        },
        year: 1896,
      },
      {
        text: {
          en: 'Remembrance of things past is not necessarily the remembrance of things as they were.',
          zh: '对往事的回忆，不一定是对事物本来面貌的回忆。',
        },
        original: 'Le souvenir des choses pass\u00e9es n\u2019est pas n\u00e9cessairement le souvenir des choses telles qu\u2019elles furent.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Within a Budding Grove',
          zh: '追忆似水年华：在少女们身旁',
        },
        year: 1919,
      },
      {
        text: {
          en: 'The only true paradise is a paradise that we have lost.',
          zh: '唯一真正的乐园是我们已经失去的乐园。',
        },
        original: 'Les vrais paradis sont les paradis qu\u2019on a perdus.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Time Regained',
          zh: '追忆似水年华：重现的时光',
        },
        year: 1927,
      },
      {
        text: {
          en: 'Happiness is beneficial for the body, but it is grief that develops the powers of the mind.',
          zh: '幸福有益于身体，但只有悲伤才能发展心灵的力量。',
        },
        original: 'Le bonheur est salutaire pour le corps, mais c\u2019est le chagrin qui d\u00e9veloppe les forces de l\u2019esprit.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Time Regained',
          zh: '追忆似水年华：重现的时光',
        },
        year: 1927,
      },
      {
        text: {
          en: 'Love is a striking example of how little reality means to us.',
          zh: '爱是一个显著的例子，说明现实对我们来说多么无足轻重。',
        },
        original: 'L\u2019amour est un exemple frappant de combien la r\u00e9alit\u00e9 nous importe peu.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Swann\'s Way',
          zh: '追忆似水年华：在斯万家那边',
        },
        year: 1913,
      },
      {
        text: {
          en: 'If a little dreaming is dangerous, the cure for it is not to dream less but to dream more, to dream all the time.',
          zh: '如果一点点做梦是危险的，那么治疗它的方法不是少做梦，而是多做梦，一直做梦。',
        },
        original: 'Si un peu de r\u00eaverie est dangereux, ce qui en gu\u00e9rit, ce n\u2019est pas moins de r\u00eaverie, mais plus de r\u00eaverie, mais toute la r\u00eaverie.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Within a Budding Grove',
          zh: '追忆似水年华：在少女们身旁',
        },
        year: 1919,
      },
      {
        text: {
          en: 'The only real book is not one that has already been written, but one that does not yet exist, a book to be made by the writer.',
          zh: '唯一真正的书不是已经写好的那一本，而是尚不存在的那一本，一本有待作家去创造的书。',
        },
        original: 'Le seul vrai livre n\u2019est pas celui qui a d\u00e9j\u00e0 \u00e9t\u00e9 \u00e9crit, mais celui qui n\u2019existe pas encore, un livre \u00e0 faire par l\u2019\u00e9crivain.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Time Regained',
          zh: '追忆似水年华：重现的时光',
        },
        year: 1927,
      },
      {
        text: {
          en: 'For a long time I used to go to bed early.',
          zh: '很长一段时间，我都是早早就上床了。',
        },
        original: 'Longtemps, je me suis couch\u00e9 de bonne heure.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Swann\'s Way',
          zh: '追忆似水年华：在斯万家那边',
        },
        year: 1913,
      },
      {
        text: {
          en: 'The time at our disposal each day is elastic; the passions we feel dilate it, those that inspire us shrink it, and habit fills it.',
          zh: '我们每天所拥有的时间是有弹性的；我们感受到的激情使它膨胀，激励我们的那些使它收缩，而习惯填满它。',
        },
        original: 'Le temps dont nous disposons chaque jour est \u00e9lastique ; les passions que nous ressentons le dilatent, celles que nous inspirons le r\u00e9tr\u00e9cissent, et l\u2019habitude le remplit.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'In Search of Lost Time: Within a Budding Grove',
          zh: '追忆似水年华：在少女们身旁',
        },
        year: 1919,
      },
      {
        text: {
          en: 'Every reader, as he reads, is actually the reader of himself. The writer\u2019s work is only a kind of optical instrument he provides the reader so he can discern what he might never have seen in himself without this book.',
          zh: '每个读者在阅读时，其实是在阅读自己。作家的作品不过是一种光学仪器，他提供给读者，使读者得以辨识出没有这本书就可能永远无法在自身发现的东西。',
        },
        original: 'Chaque lecteur est, quand il lit, le propre lecteur de soi-m\u00eame. L\u2019ouvrage de l\u2019\u00e9crivain n\u2019est qu\u2019une esp\u00e8ce d\u2019instrument optique qu\u2019il offre au lecteur afin de lui permettre de discerner ce que sans ce livre il n\u2019e\u00fbt peut-\u00eatre pas vu en soi-m\u00eame.',
        originalLang: 'fr',
        source: {
          en: 'In Search of Lost Time: Time Regained',
          zh: '追忆似水年华：重现的时光',
        },
        year: 1927,
      },
      {
        text: {
          en: 'We do not receive wisdom; we must discover it for ourselves after a journey that no one can take for us or spare us.',
          zh: '我们不是被赋予智慧的；我们必须在一段无人能替代也无人能免除的旅途之后，自己去发现它。',
        },
        original: 'On ne re\u00e7oit pas la sagesse, il faut la d\u00e9couvrir soi-m\u00eame apr\u00e8s un trajet que personne ne peut faire pour nous, ne peut nous \u00e9pargner.',
        originalLang: 'fr',
        source: {
          en: 'In Search of Lost Time: Within a Budding Grove',
          zh: '追忆似水年华：在少女们身旁',
        },
        year: 1919,
      },
    ],
  },
  {
    slug: 'james-joyce',
    name: { en: 'James Joyce', zh: '詹姆斯·乔伊斯' },
    years: '1882\u20131941',
    nationality: { en: 'Irish', zh: '爱尔兰' },
    bio: {
      en: 'Irish novelist and short story writer whose experimental masterworks Ulysses and Finnegans Wake revolutionized the modern novel.',
      zh: '爱尔兰小说家、短篇小说作家，实验性杰作《尤利西斯》与《芬尼根的守灵夜》彻底革新了现代小说。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/James_Joyce',
      zh: 'https://zh.wikipedia.org/wiki/%E8%A9%B9%E5%A7%86%E6%96%AF%C2%B7%E4%B9%94%E4%BC%8A%E6%96%AF',
    },
    quotes: [
      {
        text: {
          en: 'A man of genius makes no mistakes. His errors are volitional and are the portals of discovery.',
          zh: '天才不会犯错。他的失误是有意为之，是通往发现的大门。',
        },
        original: 'A man of genius makes no mistakes. His errors are volitional and are the portals of discovery.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Ulysses', zh: '尤利西斯' },
        year: 1922,
      },
      {
        text: {
          en: 'I am tomorrow, or some future day, what I establish today. I am today what I established yesterday or some previous day.',
          zh: '我是明天，或者某个未来的日子里，我今天所确立的一切。我是今天，我昨天或之前某天所确立的一切。',
        },
        original: 'I am tomorrow, or some future day, what I establish today. I am today what I established yesterday or some previous day.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Portrait of the Artist as a Young Man', zh: '一个青年艺术家的画像' },
        year: 1916,
      },
      {
        text: {
          en: 'His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling, like the descent of their last end, upon all the living and the dead.',
          zh: '他的灵魂缓缓昏厥，听着雪花穿越宇宙轻轻飘落，轻轻飘落，如同他们最终的归宿降临在所有生者与死者身上。',
        },
        originalLang: 'en',
        source: { en: 'Dubliners, "The Dead"', zh: '《都柏林人·死者》' },
        year: 1914,
      },
      {
        text: {
          en: 'Welcome, O life! I go to encounter for the millionth time the reality of experience and to forge in the smithy of my soul the uncreated conscience of my race.',
          zh: '欢迎你，生活！我将第百万次去迎接经验的现实，在我灵魂的锻炉中铸造我民族尚未被创造的良心。',
        },
        originalLang: 'en',
        source: { en: 'A Portrait of the Artist as a Young Man', zh: '《一个青年艺术家的画像》' },
        year: 1916,
      },
      {
        text: {
          en: '...and yes I said yes I will Yes.',
          zh: '……是的我说过是的我愿意是的。',
        },
        originalLang: 'en',
        source: { en: 'Ulysses (Molly Bloom\'s soliloquy)', zh: '《尤利西斯》（莫莉·布鲁姆的独白）' },
        year: 1922,
      },
    ],
  },
  {
    slug: 'toni-morrison',
    name: { en: 'Toni Morrison', zh: '托妮·莫里森' },
    years: '1931\u20132019',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American novelist and Nobel laureate whose lyrical, unflinching works illuminated the African American experience and the legacy of slavery.',
      zh: '美国小说家、诺贝尔文学奖得主，以抒情而毫不退缩的作品照亮了非裔美国人的经历与奴隶制的遗产。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Toni_Morrison',
      zh: 'https://zh.wikipedia.org/wiki/%E6%89%98%E5%A6%AE%C2%B7%E8%8E%AB%E9%87%8C%E6%A3%AE',
    },
    quotes: [
      {
        text: {
          en: 'If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.',
          zh: '如果有一本你想读的书，但它还没有被写出来，那你就必须自己去写。',
        },
        original: 'If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Ohio Arts Council Address',
          zh: '俄亥俄州艺术委员会演讲',
        },
        year: 1981,
      },
      {
        text: {
          en: 'You wanna fly, you got to give up the shit that weighs you down.',
          zh: '你想飞翔，就得放下那些压得你喘不过气的东西。',
        },
        original: 'You wanna fly, you got to give up the shit that weighs you down.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Song of Solomon', zh: '所罗门之歌' },
        year: 1977,
      },
      {
        text: {
          en: 'Freeing yourself was one thing, claiming ownership of that freed self was another.',
          zh: '解放自己是一回事，宣称对那个自由的自我的所有权是另一回事。',
        },
        original: 'Freeing yourself was one thing, claiming ownership of that freed self was another.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Beloved', zh: '宠儿' },
        year: 1987,
      },
      {
        text: {
          en: 'Definitions belong to the definers, not the defined.',
          zh: '定义属于定义者，而不是被定义者。',
        },
        original: 'Definitions belong to the definers, not the defined.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Beloved', zh: '宠儿' },
        year: 1987,
      },
      {
        text: {
          en: 'In this country American means white. Everybody else has to hyphenate.',
          zh: '在这个国家，\u201c美国人\u201d意味着白人。其他所有人都必须加连字符。',
        },
        original: 'In this country American means white. Everybody else has to hyphenate.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'Interview with The Guardian',
          zh: '《卫报》访谈',
        },
        year: 1992,
      },
      {
        text: {
          en: 'The function of freedom is to free someone else.',
          zh: '自由的功能就是去解放他人。',
        },
        originalLang: 'en',
        source: { en: 'Barnard College Commencement Address', zh: '巴纳德学院毕业典礼演讲' },
        year: 1979,
      },
      {
        text: {
          en: 'There is no time for despair, no place for self-pity, no need for silence, no room for fear. We speak, we write, we do language. That is how civilizations heal.',
          zh: '没有时间绝望，没有地方自怜，不需要沉默，没有空间恐惧。我们说，我们写，我们运用语言。文明就是这样愈合的。',
        },
        originalLang: 'en',
        source: { en: 'No Place for Self-Pity, No Room for Fear (The Nation)', zh: '《无暇自怜，无处恐惧》（《国家》杂志）' },
        year: 2015,
      },
      {
        text: {
          en: 'All water has a perfect memory and is forever trying to get back to where it was.',
          zh: '所有的水都有完美的记忆，永远试图回到它曾经所在的地方。',
        },
        originalLang: 'en',
        source: { en: '"The Site of Memory"', zh: '《记忆之所》' },
        year: 1987,
      },
    ],
  },
  {
    slug: 'murakami',
    name: { en: 'Haruki Murakami', zh: '村上春树' },
    years: '1949\u2013',
    nationality: { en: 'Japanese', zh: '日本' },
    bio: {
      en: 'Japanese novelist whose dreamlike, melancholic fiction blends Western pop culture with Japanese sensibility, reaching a vast global readership.',
      zh: '日本小说家，以梦幻而忧郁的小说融合西方流行文化与日本感性，拥有庞大的全球读者群。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Haruki_Murakami',
      zh: 'https://zh.wikipedia.org/wiki/%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91',
    },
    quotes: [
      {
        text: {
          en: 'And once the storm is over, you won\'t remember how you made it through, how you managed to survive. You won\'t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won\'t be the same person who walked in.',
          zh: '暴风雨结束后，你不会记得自己是怎样活下来的，你甚至不确定暴风雨是否真的结束了。但有一件事是确定的：当你穿越了暴风雨，你已不再是走进去时的那个人。',
        },
        original: '\u305d\u3057\u3066\u5d50\u304c\u7d42\u308f\u3063\u305f\u3068\u304d\u3001\u3042\u306a\u305f\u306f\u305d\u306e\u5d50\u3092\u3069\u3046\u3084\u3063\u3066\u304f\u3050\u308a\u629c\u3051\u3066\u751f\u304d\u5ef6\u3073\u305f\u306e\u304b\u3001\u305d\u306e\u3053\u3068\u304c\u3046\u307e\u304f\u601d\u3044\u51fa\u305b\u306a\u3044\u306f\u305a\u3060\u3002\u305d\u306e\u5d50\u304c\u672c\u5f53\u306b\u7d42\u308f\u3063\u305f\u306e\u304b\u3069\u3046\u304b\u3082\u78ba\u4fe1\u304c\u6301\u3066\u306a\u3044\u306f\u305a\u3060\u3002\u3067\u3082\u3072\u3068\u3064\u3060\u3051\u306f\u3063\u304d\u308a\u3057\u3066\u3044\u308b\u3002\u305d\u306e\u5d50\u306e\u4e2d\u304b\u3089\u51fa\u3066\u304d\u305f\u3068\u304d\u3001\u3042\u306a\u305f\u306f\u305d\u306e\u5d50\u306e\u4e2d\u306b\u5165\u3063\u305f\u3068\u304d\u3068\u540c\u3058\u4eba\u9593\u3067\u306f\u306a\u304f\u306a\u3063\u3066\u3044\u308b\u3060\u308d\u3046\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Kafka on the Shore', zh: '海边的卡夫卡' },
        year: 2002,
      },
      {
        text: {
          en: 'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.',
          zh: '如果你只读别人都在读的书，你就只能想到别人都在想的事。',
        },
        original: '\u4ed6\u4eba\u3068\u540c\u3058\u3082\u306e\u3092\u8aad\u3093\u3067\u3044\u308c\u3070\u3001\u4ed6\u4eba\u3068\u540c\u3058\u3053\u3068\u3057\u304b\u8003\u3048\u306a\u304f\u306a\u308b\u3093\u3060\u3088\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Norwegian Wood', zh: '挪威的森林' },
        year: 1987,
      },
      {
        text: {
          en: 'Pain is inevitable. Suffering is optional.',
          zh: '痛是不可避免的，苦却是可以选择的。',
        },
        original: '\u75db\u307f\u306f\u907f\u3051\u3089\u308c\u306a\u3044\u3082\u306e\u3060\u304c\u3001\u82e6\u3057\u307f\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3060\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: {
          en: 'What I Talk About When I Talk About Running',
          zh: '当我谈跑步时我谈些什么',
        },
        year: 2007,
      },
      {
        text: {
          en: 'Memories warm you up from the inside. But they also tear you apart.',
          zh: '回忆从内心温暖你，但也将你撕裂。',
        },
        original: '\u8a18\u61b6\u304c\u541b\u3092\u5185\u5074\u304b\u3089\u6e29\u3081\u308b\u3002\u3067\u3082\u540c\u6642\u306b\u541b\u3092\u5f15\u304d\u88c2\u304f\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Kafka on the Shore', zh: '海边的卡夫卡' },
        year: 2002,
      },
      {
        text: {
          en: 'No truth can cure the sorrow we feel from losing a loved one. No truth, no sincerity, no strength, no kindness can cure that sorrow.',
          zh: '没有任何真理能治愈失去所爱之人的悲伤。没有真理、没有真诚、没有力量、没有善良能治愈那种悲伤。',
        },
        original: '\u3069\u3093\u306a\u771f\u5b9f\u3082\u611b\u3059\u308b\u4eba\u3092\u5931\u3063\u305f\u60b2\u3057\u307f\u3092\u7652\u3059\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3002\u3069\u3093\u306a\u771f\u5b9f\u3082\u3001\u3069\u3093\u306a\u8aa0\u5b9f\u3082\u3001\u3069\u3093\u306a\u5f37\u3055\u3082\u3001\u3069\u3093\u306a\u3084\u3055\u3057\u3055\u3082\u3001\u305d\u306e\u60b2\u3057\u307f\u3092\u7652\u3059\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: '1Q84', zh: '1Q84' },
        year: 2009,
      },
      {
        text: {
          en: 'I think that my job is to observe people and the world, and not to judge them. I always hope to position myself away from so-called conclusions. I would like to leave everything wide open to all the possibilities in the world.',
          zh: '我认为我的工作是观察人和世界，而不是评判他们。我总是希望让自己远离所谓的结论。我想让一切对世上所有的可能性敞开。',
        },
        original: '\u50d5\u306e\u4ed5\u4e8b\u306f\u4eba\u3084\u4e16\u754c\u3092\u89b3\u5bdf\u3059\u308b\u3053\u3068\u3067\u3042\u3063\u3066\u3001\u305d\u308c\u3092\u5224\u65ad\u3059\u308b\u3053\u3068\u3067\u306f\u306a\u3044\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Interview, 2004', zh: '2004年访谈' },
        year: 2004,
      },
      {
        text: {
          en: 'Silence, I discover, is something you can actually hear.',
          zh: '我发现，沉默是你实际上能听到的东西。',
        },
        original: '\u6c88\u9ed9\u3068\u3044\u3046\u306e\u306f\u3001\u5b9f\u969b\u306b\u8033\u306b\u805e\u3053\u3048\u308b\u3082\u306e\u3060\u3068\u50d5\u306f\u767a\u898b\u3057\u305f\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Kafka on the Shore', zh: '海边的卡夫卡' },
        year: 2002,
      },
      {
        text: {
          en: 'Whatever it is you\u2019re seeking won\u2019t come in the form you\u2019re expecting.',
          zh: '无论你在寻找什么，它都不会以你期待的形式出现。',
        },
        original: '\u541b\u304c\u4f55\u3092\u6c42\u3081\u3066\u3044\u308b\u306b\u305b\u3088\u3001\u305d\u308c\u306f\u541b\u304c\u671f\u5f85\u3057\u3066\u3044\u308b\u304b\u305f\u3061\u3067\u306f\u73fe\u308c\u306a\u3044\u3060\u308d\u3046\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'The Wind-Up Bird Chronicle', zh: '奇鸟行状录' },
        year: 1994,
      },
      {
        text: {
          en: 'Not all of us can be the protagonist of a story. Somebody has to sit in the audience and clap.',
          zh: '不是所有人都能成为故事的主角。总得有人坐在观众席上鼓掌。',
        },
        original: '\u8a70\u307e\u308b\u3068\u3053\u308d\u3001\u4eba\u306f\u307f\u306a\u7269\u8a9e\u306e\u4e3b\u4eba\u516c\u306b\u306f\u306a\u308c\u306a\u3044\u3002\u8ab0\u304b\u304c\u89b3\u5ba2\u5e2d\u306b\u5ea7\u3063\u3066\u62cd\u624b\u3092\u3057\u306a\u304f\u3066\u306f\u306a\u3089\u306a\u3044\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Hear the Wind Sing', zh: '且听风吟' },
        year: 1979,
      },
      {
        text: {
          en: 'Closing your eyes isn\u2019t going to change anything. Nothing\u2019s going to disappear just because you can\u2019t see what\u2019s going on.',
          zh: '闭上眼睛什么也改变不了。不会因为你看不到正在发生的事，什么就消失了。',
        },
        original: '\u76ee\u3092\u9589\u3058\u3066\u3082\u4f55\u3082\u5909\u308f\u3089\u306a\u3044\u3002\u4f55\u304c\u8d77\u304d\u3066\u3044\u308b\u304b\u898b\u3048\u306a\u3044\u3060\u3051\u3067\u3001\u4f55\u304b\u304c\u6d88\u3048\u308b\u308f\u3051\u3058\u3083\u306a\u3044\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Kafka on the Shore', zh: '海边的卡夫卡' },
        year: 2002,
      },
    ],
  },
  {
    slug: 'milan-kundera',
    name: { en: 'Milan Kundera', zh: '米兰·昆德拉' },
    years: '1929\u20132023',
    nationality: { en: 'Czech-French', zh: '捷克裔法国' },
    bio: {
      en: 'Czech-French novelist whose philosophical fiction explored identity, memory, and the ironic absurdities of political and private life.',
      zh: '捷克裔法国小说家，以哲理小说探索身份、记忆以及政治与私人生活中的荒诞讽刺。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Milan_Kundera',
      zh: 'https://zh.wikipedia.org/wiki/%E7%B1%B3%E5%85%B0%C2%B7%E6%98%86%E5%BE%B7%E6%8B%89',
    },
    quotes: [
      {
        text: {
          en: 'The struggle of man against power is the struggle of memory against forgetting.',
          zh: '人与权力的斗争，就是记忆与遗忘的斗争。',
        },
        original: 'Boj \u010dlov\u011bka proti moci je boj pam\u011bti proti zapom\u011bn\u00ed.',
        originalLang: 'cs',
        originalLocale: 'en',
        source: { en: 'The Book of Laughter and Forgetting', zh: '笑忘录' },
        year: 1979,
      },
      {
        text: {
          en: 'Dogs are our link to paradise. They don\'t know evil or jealousy or discontent.',
          zh: '狗是我们与天堂的纽带。它们不知道邪恶、嫉妒或不满。',
        },
        original: 'Psi jsou na\u0161\u00edm poutem k r\u00e1ji. Neznaj\u00ed zlo ani \u017e\u00e1rlivost ani nespokojenost.',
        originalLang: 'cs',
        originalLocale: 'en',
        source: {
          en: 'The Unbearable Lightness of Being',
          zh: '不能承受的生命之轻',
        },
        year: 1984,
      },
      {
        text: {
          en: 'The purpose of the novel is not to pass judgment but to explore the ambiguity of human existence.',
          zh: '小说的目的不是宣判，而是探索人类存在的模糊性。',
        },
        original: 'Le but du roman n\'est pas de juger mais d\'explorer l\'ambigu\u00eft\u00e9 de l\'existence humaine.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Art of the Novel', zh: '小说的艺术' },
        year: 1986,
      },
      {
        text: {
          en: 'The heaviest of burdens is simultaneously an image of life\'s most intense fulfillment.',
          zh: '最沉重的负担同时也是最充实生命的象征。',
        },
        original: 'Nejt\u011b\u017e\u0161\u00ed b\u0159\u00edm\u011b je z\u00e1rove\u0148 obrazem nejintenzivn\u011bj\u0161\u00edho napln\u011bn\u00ed \u017eivota.',
        originalLang: 'cs',
        originalLocale: 'en',
        source: {
          en: 'The Unbearable Lightness of Being',
          zh: '不能承受的生命之轻',
        },
        year: 1984,
      },
      {
        text: {
          en: 'Two people in love, alone, isolated from the world, that\'s beautiful.',
          zh: '两个相爱的人，独处，与世隔绝，那是美的。',
        },
        original: 'Deux personnes amoureuses, seules, isol\u00e9es du monde, c\u2019est beau.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Identity', zh: '身份' },
        year: 1998,
      },
      {
        text: {
          en: 'When the heart speaks, the mind finds it indecent to object.',
          zh: '当心灵说话时，理智觉得反对是不体面的。',
        },
        original: 'Kdy\u017e srdce mluv\u00ed, rozum pova\u017euje za nep\u0159\u00edstojn\u00e9 nam\u00edtat.',
        originalLang: 'cs',
        originalLocale: 'en',
        source: {
          en: 'The Unbearable Lightness of Being',
          zh: '不能承受的生命之轻',
        },
        year: 1984,
      },
      {
        text: {
          en: 'Einmal ist keinmal. What happens but once might as well not have happened at all.',
          zh: '一次不算数。只发生过一次的事，就好像从来没有发生过。',
        },
        original: 'Einmal ist keinmal. Co se stane jen jednou, jako by se nestalo nikdy.',
        originalLang: 'cs',
        originalLocale: 'en',
        source: {
          en: 'The Unbearable Lightness of Being',
          zh: '不能承受的生命之轻',
        },
        year: 1984,
      },
      {
        text: {
          en: 'We can never know what to want, because, living only one life, we can neither compare it with our previous lives nor perfect it in our lives to come.',
          zh: '我们永远不知道自己该要什么，因为人只活一次，既不能拿它跟前世相比，也不能在来世加以完善。',
        },
        original: 'Nem\u016f\u017eeme nikdy v\u011bd\u011bt, co m\u00e1me cht\u00edt, proto\u017ee \u017eijeme jen jeden \u017eivot a nem\u016f\u017eeme ho ani porovnat se sv\u00fdmi p\u0159edchoz\u00edmi \u017eivoty, ani ho opravit v \u017eivotech p\u0159\u00ed\u0161t\u00edch.',
        originalLang: 'cs',
        originalLocale: 'en',
        source: {
          en: 'The Unbearable Lightness of Being',
          zh: '不能承受的生命之轻',
        },
        year: 1984,
      },
      {
        text: {
          en: 'Kitsch causes two tears to flow in quick succession. The first tear says: How nice to see children running on the grass! The second tear says: How nice to be moved, together with all mankind, by children running on the grass!',
          zh: '媚俗令人接连流下两滴泪。第一滴泪说：看到孩子们在草地上奔跑，多好啊！第二滴泪说：与全人类一起被孩子们在草地上奔跑而感动，多好啊！',
        },
        original: 'K\u00fd\u010d vyvolav\u00e1 dv\u011b slzy dojet\u00ed v rychl\u00e9m sledu. Prvn\u00ed slza \u0159\u00edk\u00e1: Jak je to kr\u00e1sn\u00e9, d\u011bti b\u011b\u017e\u00ed po tr\u00e1vn\u00edku! Druh\u00e1 slza \u0159\u00edk\u00e1: Jak je to kr\u00e1sn\u00e9, b\u00fdt dojat spolu s cel\u00fdm lidstvem d\u011btmi b\u011b\u017e\u00edc\u00edmi po tr\u00e1vn\u00edku!',
        originalLang: 'cs',
        originalLocale: 'en',
        source: {
          en: 'The Unbearable Lightness of Being',
          zh: '不能承受的生命之轻',
        },
        year: 1984,
      },
      {
        text: {
          en: 'The novel is not the author\u2019s confession; it is an investigation of human life in the trap the world has become.',
          zh: '小说不是作者的忏悔；它是对人类生活的探究\u2014\u2014在这个世界已变成的陷阱之中。',
        },
        original: 'Le roman n\u2019est pas la confession de l\u2019auteur ; c\u2019est une investigation de la vie humaine dans le pi\u00e8ge qu\u2019est devenu le monde.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Art of the Novel', zh: '小说的艺术' },
        year: 1986,
      },
      {
        text: {
          en: 'In the sunset of dissolution, everything is illuminated by the aura of nostalgia, even the guillotine.',
          zh: '在消亡的落日中，一切都被怀旧的光环照亮，甚至断头台也不例外。',
        },
        original: 'V z\u00e1\u0159iv\u00e9m slunci z\u00e1niku je v\u0161echno oz\u00e1\u0159eno kouzlem nostalgie, dokonce i gilotina.',
        originalLang: 'cs',
        originalLocale: 'en',
        source: {
          en: 'The Unbearable Lightness of Being',
          zh: '不能承受的生命之轻',
        },
        year: 1984,
      },
    ],
  },
  {
    slug: 'ursula-le-guin',
    name: { en: 'Ursula K. Le Guin', zh: '厄休拉·K·勒古恩' },
    years: '1929\u20132018',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American novelist who elevated science fiction and fantasy into profound explorations of society, gender, and human nature.',
      zh: '美国小说家，将科幻与奇幻提升为对社会、性别与人性的深刻探索。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Ursula_K._Le_Guin',
      zh: 'https://zh.wikipedia.org/wiki/%E5%A8%A5%E8%8B%8F%E6%8B%89%C2%B7%E5%8B%92%E7%80%9A%E6%81%A9',
    },
    quotes: [
      {
        text: {
          en: 'We live in capitalism. Its power seems inescapable. So did the divine right of kings.',
          zh: '我们生活在资本主义中。它的力量看似不可逃避。君权神授曾经也是。',
        },
        original: 'We live in capitalism. Its power seems inescapable. So did the divine right of kings.',
        originalLang: 'en',
        originalLocale: 'en',
        source: {
          en: 'National Book Awards Speech',
          zh: '美国国家图书奖致辞',
        },
        year: 2014,
      },
      {
        text: {
          en: 'The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next.',
          zh: '唯一让生活成为可能的，是永恒的、难以忍受的不确定性\u2014\u2014不知道接下来会发生什么。',
        },
        original: 'The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Left Hand of Darkness', zh: '黑暗的左手' },
        year: 1969,
      },
      {
        text: {
          en: 'It is good to have an end to journey toward; but it is the journey that matters, in the end.',
          zh: '有一个旅行的目的地固然好，但最终重要的是旅途本身。',
        },
        original: 'It is good to have an end to journey toward; but it is the journey that matters, in the end.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Left Hand of Darkness', zh: '黑暗的左手' },
        year: 1969,
      },
      {
        text: {
          en: 'You cannot buy the revolution. You cannot make the revolution. You can only be the revolution. It is in your spirit, or it is nowhere.',
          zh: '你无法购买革命。你无法制造革命。你只能成为革命本身。它在你的精神中，否则它无处可寻。',
        },
        originalLang: 'en',
        source: { en: 'The Dispossessed', zh: '《一无所有》' },
        year: 1974,
      },
      {
        text: {
          en: 'To light a candle is to cast a shadow.',
          zh: '点燃蜡烛就是投下阴影。',
        },
        originalLang: 'en',
        source: { en: 'A Wizard of Earthsea', zh: '《地海巫师》' },
        year: 1968,
      },
    ],
  },
  {
    slug: 'clarice-lispector',
    name: { en: 'Clarice Lispector', zh: '克拉丽丝·利斯佩克托尔' },
    years: '1920\u20131977',
    nationality: { en: 'Brazilian', zh: '巴西' },
    bio: {
      en: 'Brazilian novelist and short story writer whose introspective, existential prose pushed the boundaries of language and self-awareness.',
      zh: '巴西小说家、短篇小说作家，以内省的、存在主义的散文推动了语言与自我意识的边界。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Clarice_Lispector',
      zh: 'https://zh.wikipedia.org/wiki/%E5%85%8B%E6%8B%89%E4%B8%BD%E4%B8%9D%C2%B7%E5%88%A9%E6%96%AF%E4%BD%A9%E5%85%8B%E6%89%98',
    },
    quotes: [
      {
        text: {
          en: 'How can I explain: my disquiet was my true self.',
          zh: '我该如何解释：我的不安才是真正的我。',
        },
        original: 'Como explicar: minha inquieta\u00e7\u00e3o era o meu verdadeiro eu.',
        originalLang: 'pt',
        originalLocale: 'en',
        source: { en: 'The Passion According to G.H.', zh: '根据G.H.的激情' },
        year: 1964,
      },
      {
        text: {
          en: 'I write as if to save somebody\'s life. Probably my own.',
          zh: '我写作，像是要挽救某人的生命。也许是我自己的。',
        },
        original: 'Eu escrevo como se fosse para salvar a vida de algu\u00e9m. Provavelmente a minha pr\u00f3pria vida.',
        originalLang: 'pt',
        originalLocale: 'en',
        source: { en: 'A Breath of Life', zh: '生命的气息' },
        year: 1978,
      },
      {
        text: {
          en: 'Everything in the world began with a yes. One molecule said yes to another molecule and life was born.',
          zh: '世界上的一切都始于一个"是"。一个分子对另一个分子说了"是"，生命便诞生了。',
        },
        original: 'Tudo no mundo começou com um sim. Uma molécula disse sim a outra molécula e nasceu a vida.',
        originalLang: 'pt',
        source: { en: 'The Hour of the Star', zh: '《星辰时刻》' },
        year: 1977,
      },
      {
        text: {
          en: 'I write you as an exercise in sketching before painting. I see words. What I want is entirely beyond words.',
          zh: '我书写你，如同绘画前的素描练习。我看见文字。但我想要的完全超越文字。',
        },
        original: 'Eu te escrevo como exercício de esboços antes de pintar. Vejo as palavras. O que quero é inteiramente além das palavras.',
        originalLang: 'pt',
        source: { en: 'Água Viva', zh: '《活水》' },
        year: 1973,
      },
    ],
  },
  {
    slug: 'lu-xun',
    name: { en: 'Lu Xun', zh: '鲁迅' },
    years: '1881\u20131936',
    nationality: { en: 'Chinese', zh: '中国' },
    bio: {
      en: 'Chinese essayist, short story writer, and poet regarded as the father of modern Chinese literature, whose fierce social criticism awakened a nation.',
      zh: '中国散文家、小说家、诗人，被誉为中国现代文学之父，以犀利的社会批判唤醒了一个民族。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Lu_Xun',
      zh: 'https://zh.wikipedia.org/wiki/%E9%B2%81%E8%BF%85',
    },
    quotes: [
      {
        text: {
          en: 'Hope cannot be said to exist, nor can it be said not to exist. It is just like roads across the earth. For actually the earth had no roads to begin with, but when many men pass one way, a road is made.',
          zh: '希望是本无所谓有，无所谓无的。这正如地上的路；其实地上本没有路，走的人多了，也便成了路。',
        },
        original: '希望是本无所谓有，无所谓无的。这正如地上的路；其实地上本没有路，走的人多了，也便成了路。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'My Old Home', zh: '故乡' },
        year: 1921,
      },
      {
        text: {
          en: 'Lies written in ink can never disguise facts written in blood.',
          zh: '墨写的谎说，决掩不住血写的事实。',
        },
        original: '墨写的谎说，决掩不住血写的事实。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'In Memory of Miss Liu Hezhen', zh: '记念刘和珍君' },
        year: 1926,
      },
      {
        text: {
          en: 'Despair is as much a vanity as hope.',
          zh: '绝望之为虚妄，正与希望相同。',
        },
        original: '绝望之为虚妄，正与希望相同。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Wild Grass', zh: '野草' },
        year: 1927,
      },
      {
        text: {
          en: 'Silence, silence! Unless we burst out, we shall perish in this silence!',
          zh: '不在沉默中爆发，就在沉默中灭亡。',
        },
        original: '不在沉默中爆发，就在沉默中灭亡。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'In Memory of Miss Liu Hezhen', zh: '记念刘和珍君' },
        year: 1926,
      },
      {
        text: {
          en: 'I often dissect others, but more often and more mercilessly I dissect myself.',
          zh: '我的确时时解剖别人，然而更多的是更无情面地解剖我自己。',
        },
        original: '我的确时时解剖别人，然而更多的是更无情面地解剖我自己。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Preface to "Grave"', zh: '《坟》题记' },
        year: 1926,
      },
      {
        text: {
          en: 'Fierce-browed, I coolly defy a thousand pointing fingers; head-bowed, like a willing ox I serve the children.',
          zh: '横眉冷对千夫指，俯首甘为孺子牛。',
        },
        original: '横眉冷对千夫指，俯首甘为孺子牛。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Self-Mockery', zh: '自嘲' },
        year: 1932,
      },
      {
        text: {
          en: 'I often feel secretly ashamed \u2014 I am not the kind of hero who can rally followers with a single call to arms.',
          zh: '我以为常常暗自感到惭愧，我还不是一个振臂一呼应者云集的英雄。',
        },
        original: '我以为常常暗自感到惭愧，我还不是一个振臂一呼应者云集的英雄。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Preface to Call to Arms', zh: '《呐喊》自序' },
        year: 1922,
      },
      {
        text: {
          en: 'A true warrior dares to face the bleakness of life, dares to confront the dripping blood.',
          zh: '真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。',
        },
        original: '真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'In Memory of Miss Liu Hezhen', zh: '记念刘和珍君' },
        year: 1926,
      },
      {
        text: {
          en: 'To waste others\u2019 time is tantamount to murder for money.',
          zh: '浪费别人的时间等于谋财害命。',
        },
        original: '时间就是性命。无端的空耗别人的时间，其实是无异于谋财害命的。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'An Outsider\'s Chats About Written Language', zh: '门外文谈' },
        year: 1934,
      },
      {
        text: {
          en: 'Time flows on forever; the streets are peaceful as before. A few limited lives, in China, count for nothing.',
          zh: '时间永是流驶，街市依旧太平，有限的几个生命，在中国是不算什么的。',
        },
        original: '时间永是流驶，街市依旧太平，有限的几个生命，在中国是不算什么的。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'In Memory of Miss Liu Hezhen', zh: '记念刘和珍君' },
        year: 1926,
      },
      {
        text: {
          en: 'I felt I must have changed a great deal. Of old when I saw moonlight of this quality, or the sea, I would have been moved to write; but all I feel now is that they are merely fine moonlight and a fine sea.',
          zh: '我自己也觉得确乎是变了。以前看到好月光或者海，便要写；如今觉得不过是好月色和好海罢了。',
        },
        original: '我自己也觉得确乎是变了。以前看到好月光或者海，便要写；如今觉得不过是好月色和好海罢了。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Preface to Call to Arms', zh: '《呐喊》自序' },
        year: 1922,
      },
      {
        text: {
          en: 'What is a road? It is trampled out from where there was no road, it is hacked out from where there were only brambles.',
          zh: '什么是路？就是从没路的地方践踏出来的，从只有荆棘的地方开辟出来的。',
        },
        original: '什么是路？就是从没路的地方践踏出来的，从只有荆棘的地方开辟出来的。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Random Thoughts (No. 66)', zh: '随感录六十六' },
        year: 1919,
      },
    ],
  },
  {
    slug: 'eileen-chang',
    name: { en: 'Eileen Chang', zh: '张爱玲' },
    years: '1920\u20131995',
    nationality: { en: 'Chinese', zh: '中国' },
    bio: {
      en: 'Chinese novelist and essayist celebrated for her elegant, psychologically acute portrayals of love and daily life in wartime Shanghai.',
      zh: '中国小说家、散文家，以优雅而心理洞察力极强的笔触描绘战时上海的爱情与日常生活而著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Eileen_Chang',
      zh: 'https://zh.wikipedia.org/wiki/%E5%BC%A0%E7%88%B1%E7%8E%B2',
    },
    quotes: [
      {
        text: {
          en: 'Among millions of people, in the wilderness of time, a person happens to meet the person he is meant to meet. Not a step too early, not a step too late.',
          zh: '于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了。',
        },
        original: '于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Love', zh: '爱' },
        year: 1944,
      },
      {
        text: {
          en: 'Because of having loved, one becomes compassionate; because of having understood, one becomes forgiving.',
          zh: '因为爱过，所以慈悲；因为懂得，所以宽容。',
        },
        original: '因为爱过，所以慈悲；因为懂得，所以宽容。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: {
          en: 'Attributed, widely cited (not confirmed in her published works)',
          zh: '广为流传的名言（未在其出版作品中得到确认）',
        },
      },
      {
        text: {
          en: 'Life is a gorgeous robe, crawling with fleas.',
          zh: '生命是一袭华美的袍，爬满了蚤子。',
        },
        original: '生命是一袭华美的袍，爬满了蚤子。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'My Genius Dream', zh: '天才梦' },
        year: 1939,
      },
      {
        text: {
          en: 'Laugh, and the world laughs with you; weep, and you weep alone.',
          zh: '笑，全世界便与你同声笑；哭，你便独自哭。',
        },
        original: '笑，全世界便与你同声笑；哭，你便独自哭。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Withered Flower (quoting Ella Wheeler Wilcox, Solitude, 1883)', zh: '花凋（引用埃拉·惠勒·威尔科克斯《孤独》，1883年）' },
        year: 1944,
      },
      {
        text: {
          en: 'What is long is suffering; what is short is life.',
          zh: '长的是磨难，短的是人生。',
        },
        original: '长的是磨难，短的是人生。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Eighteen Springs', zh: '《十八春》' },
        year: 1950,
      },
      {
        text: {
          en: 'One should become famous as early as possible; if it comes too late, the joy is not so keen.',
          zh: '出名要趁早呀，来得太晚的话，快乐也不那么痛快。',
        },
        original: '出名要趁早呀，来得太晚的话，快乐也不那么痛快。',
        originalLang: 'zh',
        originalLocale: 'zh',
        source: { en: 'Preface to Legend (second edition)', zh: '《传奇》再版的话' },
        year: 1944,
      },
    ],
  },
  {
    slug: 'natsume-soseki',
    name: { en: 'Natsume Soseki', zh: '夏目漱石' },
    years: '1867\u20131916',
    nationality: { en: 'Japanese', zh: '日本' },
    bio: {
      en: 'Japanese novelist and scholar widely considered the greatest writer of modern Japanese literature, known for his psychological depth and wit.',
      zh: '日本小说家、学者，被广泛认为是日本近代文学最伟大的作家，以心理深度和机智闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Natsume_S%C5%8Dseki',
      zh: 'https://zh.wikipedia.org/wiki/%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3',
    },
    quotes: [
      {
        text: {
          en: 'The moon is beautiful, isn\'t it?',
          zh: '今晚的月色真美。',
        },
        original: '月が綺麗ですね。',
        originalLang: 'ja',
        originalLocale: 'en',
        source: {
          en: 'Attributed, as a translation of "I love you"',
          zh: '据传为"我爱你"的翻译',
        },
        comment: {
          en: 'Soseki reportedly suggested this as the proper Japanese translation for "I love you" \u2014 too direct a confession would be un-Japanese.',
          zh: '据说漱石认为这是"I love you"最恰当的日语翻译\u2014\u2014太直接的表白不符合日本人的性格。',
        },
      },
      {
        text: {
          en: 'You see, loneliness is the price we have to pay for being born in this modern age, so full of freedom, independence, and our own egotistical selves.',
          zh: '你看，孤独是我们为生在这个充满自由、独立和自我的现代社会所必须付出的代价。',
        },
        original: '自由と独立と己れとに充ちた現代に生まれた我々は、その犠牲としてみんなこの淋しみを味わわなくてはならないでしょう。',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Kokoro', zh: '心' },
        year: 1914,
      },
    ],
  },
  {
    slug: 'hermann-hesse',
    name: { en: 'Hermann Hesse', zh: '赫尔曼·黑塞' },
    years: '1877\u20131962',
    nationality: { en: 'German-Swiss', zh: '德裔瑞士' },
    bio: {
      en: 'German-Swiss novelist and Nobel laureate whose introspective works on self-discovery and spirituality became touchstones for generations of seekers.',
      zh: '德裔瑞士小说家、诺贝尔文学奖得主，以关于自我发现与精神追求的内省作品影响了一代又一代探索者。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Hermann_Hesse',
      zh: 'https://zh.wikipedia.org/wiki/%E8%B5%AB%E5%B0%94%E6%9B%BC%C2%B7%E9%BB%91%E5%A1%9E',
    },
    quotes: [
      {
        text: {
          en: 'I have been and still am a seeker, but I have ceased to question stars and books; I have begun to listen to the teaching my blood whispers to me.',
          zh: '我曾经是、现在仍然是一个探索者，但我已不再向星辰和书本提问；我开始倾听血液对我的低语。',
        },
        original: 'Ich bin ein Suchender gewesen und bin es noch, aber ich suche nicht mehr auf den Sternen und in den B\u00fcchern; ich beginne die Lehren zu h\u00f6ren, die mein Blut in mir rauscht.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'Demian', zh: '德米安' },
        year: 1919,
      },
      {
        text: {
          en: 'Every man\'s story is important, eternal, sacred; that is why every man, as long as he lives and fulfills the will of nature, is wondrous and worthy of consideration.',
          zh: '每个人的故事都是重要的、永恒的、神圣的；因此每一个人，只要活着并顺应自然的意志，就是奇妙的、值得关注的。',
        },
        original: 'Eines jeden Menschen Geschichte ist wichtig, ewig, g\u00f6ttlich, und eines jeden Menschen Geschichte ist wunderbar und ewig und g\u00f6ttlich, wenn er in der Natur lebt und den Willen der Natur erf\u00fcllt.',
        originalLang: 'de',
        originalLocale: 'en',
        source: { en: 'Demian', zh: '德米安' },
        year: 1919,
      },
      {
        text: {
          en: 'I can think. I can wait. I can fast.',
          zh: '我能思考。我能等待。我能斋戒。',
        },
        original: 'Ich kann denken. Ich kann warten. Ich kann fasten.',
        originalLang: 'de',
        source: { en: 'Siddhartha', zh: '《悉达多》' },
        year: 1922,
      },
      {
        text: {
          en: 'There is no reality except the one contained within us. That is why so many people live such an unreal life. They take the images outside of them for reality and never allow the world within to assert itself.',
          zh: '除了我们内心包含的现实，没有其他现实。这就是为什么这么多人过着如此不真实的生活。他们把外界的影像当作现实，却从不允许内心世界去表达自己。',
        },
        original: 'Es gibt keine andere Realität als die, die wir in uns haben.',
        originalLang: 'de',
        source: { en: 'Steppenwolf', zh: '《荒原狼》' },
        year: 1927,
      },
      {
        text: {
          en: 'We are not going in circles, we are going upwards. The path is a spiral; we have already climbed many steps.',
          zh: '我们不是在兜圈子，我们是在向上攀登。道路是一条螺旋；我们已经攀登了许多台阶。',
        },
        original: 'Wir gehen nicht im Kreise, wir gehen nach oben. Der Weg ist eine Spirale, wir haben schon manche Stufe erstiegen.',
        originalLang: 'de',
        source: { en: 'Siddhartha', zh: '《悉达多》' },
        year: 1922,
      },
    ],
  },
  {
    slug: 'oscar-wilde',
    name: { en: 'Oscar Wilde', zh: '奥斯卡·王尔德' },
    years: '1854\u20131900',
    nationality: { en: 'Irish', zh: '爱尔兰' },
    bio: {
      en: 'Irish poet, playwright, and novelist celebrated for his biting wit, flamboyant style, and the enduring novel The Picture of Dorian Gray.',
      zh: '爱尔兰诗人、剧作家、小说家，以尖锐的机智、华丽的风格和经典小说《道林·格雷的画像》闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Oscar_Wilde',
      zh: 'https://zh.wikipedia.org/wiki/%E5%A5%A5%E6%96%AF%E5%8D%A1%C2%B7%E7%8E%8B%E5%B0%94%E5%BE%B7',
    },
    quotes: [
      {
        text: {
          en: 'To live is the rarest thing in the world. Most people exist, that is all.',
          zh: '活着是世上最稀有的事。大多数人只是存在，仅此而已。',
        },
        original: 'To live is the rarest thing in the world. Most people exist, that is all.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Soul of Man Under Socialism', zh: '社会主义下人的灵魂' },
        year: 1891,
      },
      {
        text: {
          en: 'We are all in the gutter, but some of us are looking at the stars.',
          zh: '我们都在阴沟里，但仍有人仰望星空。',
        },
        original: 'We are all in the gutter, but some of us are looking at the stars.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Lady Windermere\'s Fan', zh: '温德米尔夫人的扇子' },
        year: 1892,
      },
      {
        text: {
          en: 'The truth is rarely pure and never simple.',
          zh: '真相很少是纯粹的，也从不简单。',
        },
        original: 'The truth is rarely pure and never simple.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Importance of Being Earnest', zh: '认真的重要性' },
        year: 1895,
      },
      {
        text: {
          en: 'Every saint has a past, and every sinner has a future.',
          zh: '每个圣人都有过去，每个罪人都有未来。',
        },
        original: 'Every saint has a past, and every sinner has a future.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'A Woman of No Importance', zh: '无足轻重的女人' },
        year: 1893,
      },
      {
        text: {
          en: 'Experience is merely the name men gave to their mistakes.',
          zh: '经验不过是人们给自己的错误起的名字。',
        },
        original: 'Experience is merely the name men gave to their mistakes.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Picture of Dorian Gray', zh: '道林·格雷的画像' },
        year: 1890,
      },
      {
        text: {
          en: 'I can resist everything except temptation.',
          zh: '除了诱惑，我什么都能抵挡。',
        },
        original: 'I can resist everything except temptation.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Lady Windermere\'s Fan', zh: '温德米尔夫人的扇子' },
        year: 1892,
      },
      {
        text: {
          en: 'The only way to get rid of a temptation is to yield to it.',
          zh: '摆脱诱惑的唯一方式就是屈服于它。',
        },
        original: 'The only way to get rid of a temptation is to yield to it.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Picture of Dorian Gray', zh: '道林·格雷的画像' },
        year: 1890,
      },
      {
        text: {
          en: 'A cynic is a man who knows the price of everything, and the value of nothing.',
          zh: '愤世嫉俗者是一个知道一切东西的价格，却不知道任何东西的价值的人。',
        },
        original: 'A cynic is a man who knows the price of everything, and the value of nothing.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'Lady Windermere\'s Fan', zh: '温德米尔夫人的扇子' },
        year: 1892,
      },
      {
        text: {
          en: 'The books that the world calls immoral are books that show the world its own shame.',
          zh: '世人所谓不道德的书，是向世人展示其自身耻辱的书。',
        },
        original: 'The books that the world calls immoral are books that show the world its own shame.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Picture of Dorian Gray', zh: '道林·格雷的画像' },
        year: 1890,
      },
      {
        text: {
          en: 'To define is to limit.',
          zh: '定义就是限制。',
        },
        original: 'To define is to limit.',
        originalLang: 'en',
        originalLocale: 'en',
        source: { en: 'The Picture of Dorian Gray', zh: '道林·格雷的画像' },
        year: 1890,
      },
      {
        text: {
          en: 'I was a man who stood in symbolic relations to the art and culture of my age. I had realised this for myself at the very dawn of my manhood, and had forced my age to realise it afterwards.',
          zh: '我是一个与自己时代的艺术和文化有着象征性关系的人。在我青年时代伊始，我自己就意识到了这一点，此后又迫使我的时代也意识到了这一点。',
        },
        originalLang: 'en',
        source: { en: 'De Profundis', zh: '《深渊书简》' },
        year: 1905,
      },
      {
        text: {
          en: 'Yet each man kills the thing he loves, / By each let this be heard, / Some do it with a bitter look, / Some with a flattering word.',
          zh: '然而每个人都杀死他所爱的，/让每个人都听见这话，/有人用苦涩的目光，/有人用恭维的话语。',
        },
        originalLang: 'en',
        source: { en: 'The Ballad of Reading Gaol', zh: '《雷丁监狱之歌》' },
        year: 1898,
      },
    ],
  },
  {
    slug: 'marguerite-yourcenar',
    name: { en: 'Marguerite Yourcenar', zh: '玛格丽特·尤瑟纳尔' },
    years: '1903\u20131987',
    nationality: { en: 'French-American', zh: '法裔美国' },
    bio: {
      en: 'French-American novelist and essayist, the first woman elected to the Acad\u00e9mie fran\u00e7aise, renowned for her historical novels of classical antiquity.',
      zh: '法裔美国小说家、散文家，首位当选法兰西学院院士的女性，以描写古典时代的历史小说闻名。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Marguerite_Yourcenar',
      zh: 'https://zh.wikipedia.org/wiki/%E7%8E%9B%E6%A0%BC%E4%B8%BD%E7%89%B9%C2%B7%E5%B0%A4%E7%91%9F%E7%BA%B3%E5%B0%94',
    },
    quotes: [
      {
        text: {
          en: 'Everything that is not me is incomprehensible to me.',
          zh: '一切不是我的东西，对我来说都不可理解。',
        },
        original: 'Tout ce qui n\u2019est pas moi m\u2019est incompr\u00e9hensible.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Memoirs of Hadrian', zh: '哈德良回忆录' },
        year: 1951,
      },
      {
        text: {
          en: 'The founding of libraries was like constructing more public granaries, amassing reserves against a spiritual winter.',
          zh: '建造图书馆就像修建更多的公共粮仓，为精神的寒冬积蓄储备。',
        },
        original: 'Fonder des biblioth\u00e8ques, c\u2019\u00e9tait encore construire des greniers publics, amasser des r\u00e9serves contre un hiver de l\u2019esprit.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Memoirs of Hadrian', zh: '哈德良回忆录' },
        year: 1951,
      },
    ],
  },
  {
    slug: 'olga-tokarczuk',
    name: { en: 'Olga Tokarczuk', zh: '奥尔加·托卡尔丘克' },
    years: '1962\u2013',
    nationality: { en: 'Polish', zh: '波兰' },
    bio: {
      en: 'Polish novelist and Nobel laureate whose genre-blending narratives span mythology, history, and the interconnectedness of all living things.',
      zh: '波兰小说家、诺贝尔文学奖得主，其跨越类型的叙事融合了神话、历史与万物之间的联系。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Olga_Tokarczuk',
      zh: 'https://zh.wikipedia.org/wiki/%E5%A5%A5%E5%B0%94%E5%8A%A0%C2%B7%E6%89%98%E5%8D%A1%E5%B0%94%E4%B8%98%E5%85%8B',
    },
    quotes: [
      {
        text: {
          en: 'The world is a fabric we weave daily on the great looms of information, discussions, films, books, gossip, little anecdotes.',
          zh: '世界是一块我们每天在信息、讨论、电影、书籍、闲聊和小故事的巨大织机上编织的织物。',
        },
        original: '\u015awiat jest tkanin\u0105, kt\u00f3r\u0105 tkamy codziennie na wielkich krosnach informacji, dyskusji, film\u00f3w, ksi\u0105\u017cek, plotek, ma\u0142ych anegdot.',
        originalLang: 'pl',
        originalLocale: 'en',
        source: {
          en: 'Nobel Lecture',
          zh: '诺贝尔文学奖演讲',
        },
        year: 2019,
      },
      {
        text: {
          en: 'I believe that when we die, we become the pages of a book that someone is slowly reading.',
          zh: '我相信当我们死去时，我们会变成一本书的书页，有人正在慢慢阅读。',
        },
        original: 'Wierz\u0119, \u017ce kiedy umieramy, stajemy si\u0119 stronami ksi\u0105\u017cki, kt\u00f3r\u0105 kto\u015b powoli czyta.',
        originalLang: 'pl',
        originalLocale: 'en',
        source: { en: 'Flights', zh: '云游' },
        year: 2007,
      },
    ],
  },
  {
    slug: 'roberto-bolano',
    name: { en: 'Roberto Bola\u00f1o', zh: '罗贝托·波拉尼奥' },
    years: '1953\u20132003',
    nationality: { en: 'Chilean', zh: '智利' },
    bio: {
      en: 'Chilean novelist and poet whose sprawling, darkly comic works probed violence, literature, and the fate of Latin American idealism.',
      zh: '智利小说家、诗人，以庞大而黑色幽默的作品探讨暴力、文学与拉丁美洲理想主义的命运。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Roberto_Bola%C3%B1o',
      zh: 'https://zh.wikipedia.org/wiki/%E7%BD%97%E8%B4%9D%E6%89%98%C2%B7%E6%B3%A2%E6%8B%89%E5%B0%BC%E5%A5%A5',
    },
    quotes: [
      {
        text: {
          en: 'Reading is like thinking, like praying, like talking to a friend, like expressing your ideas, like listening to other people\'s ideas, like listening to music, like looking at the view, like taking a walk on the beach.',
          zh: '阅读就像思考，像祈祷，像与朋友交谈，像表达你的想法，像倾听他人的想法，像听音乐，像欣赏风景，像在海滩上散步。',
        },
        original: 'Leer es como pensar, como rezar, como hablar con un amigo, como exponer tus ideas, como escuchar las ideas de los otros, como escuchar m\u00fasica, como mirar el paisaje, como salir a dar un paseo por la playa.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: '2666', zh: '2666' },
        year: 2004,
      },
      {
        text: {
          en: 'Every hundred feet the world changes.',
          zh: '每隔一百英尺，世界就会改变。',
        },
        original: 'Cada cien metros el mundo cambia.',
        originalLang: 'es',
        originalLocale: 'en',
        source: { en: 'The Savage Detectives', zh: '荒野侦探' },
        year: 1998,
      },
    ],
  },
  {
    slug: 'kawabata',
    name: { en: 'Yasunari Kawabata', zh: '川端康成' },
    years: '1899\u20131972',
    nationality: { en: 'Japanese', zh: '日本' },
    bio: {
      en: 'Japanese novelist and Nobel laureate whose lyrical, delicate prose captured the essence of Japanese aesthetics and the beauty of impermanence.',
      zh: '日本小说家、诺贝尔文学奖得主，以抒情细腻的散文捕捉日本美学的精髓与无常之美。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Yasunari_Kawabata',
      zh: 'https://zh.wikipedia.org/wiki/%E5%B7%9D%E7%AB%AF%E5%BA%B7%E6%88%90',
    },
    quotes: [
      {
        text: {
          en: 'The train came out of the long tunnel into the snow country.',
          zh: '穿过县界长长的隧道，便是雪国。',
        },
        original: '\u56fd\u5883\u306e\u9577\u3044\u30c8\u30f3\u30cd\u30eb\u3092\u629c\u3051\u308b\u3068\u96ea\u56fd\u3067\u3042\u3063\u305f\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'Snow Country', zh: '雪国' },
        year: 1948,
      },
      {
        text: {
          en: 'We can live our lives only by looking forward to our encounters with beauty.',
          zh: '我们只有期待与美的邂逅，才能度过一生。',
        },
        original: '\u7f8e\u3057\u3044\u3082\u306e\u3068\u306e\u51fa\u4f1a\u3044\u3092\u5fc3\u5f85\u3061\u306b\u3057\u3066\u3053\u305d\u3001\u4eba\u306f\u751f\u304d\u3066\u3044\u3051\u308b\u306e\u3067\u3042\u308b\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: {
          en: 'Japan, the Beautiful and Myself (Nobel Lecture)',
          zh: '日本的美与我（诺贝尔演讲）',
        },
        year: 1968,
      },
      {
        text: {
          en: 'Even when I am sitting still, I feel that I am drifting.',
          zh: '即使我静坐不动，也感觉自己在漂流。',
        },
        original: '\u3058\u3063\u3068\u3057\u3066\u3044\u3066\u3082\u3001\u79c1\u306f\u6d41\u308c\u3066\u3044\u308b\u3088\u3046\u306a\u6c17\u304c\u3059\u308b\u3002',
        originalLang: 'ja',
        originalLocale: 'en',
        source: { en: 'The Master of Go', zh: '名人' },
        year: 1954,
      },
    ],
  },
  {
    slug: 'han-kang',
    name: { en: 'Han Kang', zh: '韩江' },
    years: '1970\u2013',
    nationality: { en: 'South Korean', zh: '韩国' },
    bio: {
      en: 'South Korean novelist and Nobel laureate whose visceral, poetic fiction confronts violence, bodily autonomy, and the haunting legacies of history.',
      zh: '韩国小说家、诺贝尔文学奖得主，以内脏般的、诗意的小说直面暴力、身体自主权与历史的幽灵。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Han_Kang',
      zh: 'https://zh.wikipedia.org/wiki/%E9%9F%A9%E6%B1%9F_(%E4%BD%9C%E5%AE%B6)',
    },
    quotes: [
      {
        text: {
          en: 'I didn\'t know then that the darkness I was entering was a problem of the living, not the dead.',
          zh: '我当时不知道，我正在步入的黑暗是活人的问题，而不是死者的。',
        },
        original: '\uadf8\ub54c\ub294 \ub0b4\uac00 \ub4e4\uc5b4\uc11c\uace0 \uc788\ub294 \uc5b4\ub460\uc774 \uc8fd\uc740 \uc790\ub4e4\uc758 \ubb38\uc81c\uac00 \uc544\ub2c8\ub77c \uc0b0 \uc790\ub4e4\uc758 \ubb38\uc81c\ub77c\ub294 \uac83\uc744 \ubab0\ub790\ub2e4.',
        originalLang: 'ko',
        originalLocale: 'en',
        source: { en: 'Human Acts', zh: '少年来了' },
        year: 2014,
      },
      {
        text: {
          en: 'I want to believe that the lives of the dead are not in vain.',
          zh: '我想相信死者的生命不是徒劳的。',
        },
        original: '\uc8fd\uc740 \uc790\ub4e4\uc758 \uc0b6\uc774 \ud5db\ub418\uc9c0 \uc54a\uc558\ub2e4\uace0 \ubbff\uace0 \uc2f6\ub2e4.',
        originalLang: 'ko',
        originalLocale: 'en',
        source: { en: 'Human Acts', zh: '少年来了' },
        year: 2014,
      },
      {
        text: {
          en: 'Is it possible that human beings are fundamentally cruel?',
          zh: '人类是否从根本上就是残忍的？',
        },
        original: '\uc778\uac04\uc740 \uadfc\ubcf8\uc801\uc73c\ub85c \uc794\uc778\ud55c \uac83\uc774 \uac00\ub2a5\ud55c\uac00?',
        originalLang: 'ko',
        originalLocale: 'en',
        source: { en: 'The Vegetarian', zh: '素食者' },
        year: 2007,
      },
    ],
  },
  {
    slug: 'annie-ernaux',
    name: { en: 'Annie Ernaux', zh: '安妮·埃尔诺' },
    years: '1940\u2013',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'French Nobel-laureate memoirist and novelist who forged an unflinching autobiographical style that examines class, gender, and memory.',
      zh: '法国诺贝尔文学奖得主、回忆录作家和小说家，以毫不退缩的自传体风格审视阶级、性别与记忆。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Annie_Ernaux',
      zh: 'https://zh.wikipedia.org/wiki/%E5%AE%89%E5%A6%AE%C2%B7%E5%9F%83%E5%B0%94%E8%AF%BA',
    },
    quotes: [
      {
        text: {
          en: 'I will not describe the end of a love affair because I have never lived through one. What I have lived through is the end of a fantasy.',
          zh: '我不会描述一段爱情的终结，因为我从未经历过。我所经历的是一个幻想的终结。',
        },
        original: 'Je ne d\u00e9crirai pas la fin d\u2019une passion parce que je n\u2019en ai pas v\u00e9cu. Ce que j\u2019ai v\u00e9cu, c\u2019est la fin d\u2019une illusion.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'Simple Passion', zh: '单纯的激情' },
        year: 1991,
      },
      {
        text: {
          en: 'I wished to render the lived dimension of memory in writing.',
          zh: '我希望在写作中呈现记忆的生活维度。',
        },
        original: 'Je voulais rendre la dimension v\u00e9cue de la m\u00e9moire dans l\u2019\u00e9criture.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: { en: 'The Years', zh: '悠悠岁月' },
        year: 2008,
      },
      {
        text: {
          en: 'Writing is a way of not being dead.',
          zh: '写作是一种不死的方式。',
        },
        original: '\u00c9crire, c\u2019est une fa\u00e7on de ne pas mourir.',
        originalLang: 'fr',
        originalLocale: 'en',
        source: {
          en: 'Nobel Lecture',
          zh: '诺贝尔文学奖演讲',
        },
        year: 2022,
      },
    ],
  },
  {
    slug: 'gustave-flaubert',
    name: { en: 'Gustave Flaubert', zh: '居斯塔夫·福楼拜' },
    years: '1821–1880',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'Novelist and stylist whose relentless pursuit of le mot juste transformed modern fiction. His dissection of bourgeois illusion and romantic self-deception remains unsurpassed.',
      zh: '小说家和文体家，对精确用词的不懈追求改变了现代小说。他对资产阶级幻想和浪漫主义自我欺骗的剖析至今无人超越。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Gustave_Flaubert',
      zh: 'https://zh.wikipedia.org/wiki/居斯塔夫·福楼拜',
    },
    quotes: [
      {
        text: {
          en: 'Be regular and orderly in your life like a bourgeois, so that you may be violent and original in your work.',
          zh: '在生活中要像资产阶级一样规律有序，这样你才能在作品中狂放而有创造力。',
        },
        original: 'Soyez réglé dans votre vie et ordinaire comme un bourgeois, afin d\'être violent et original dans vos œuvres.',
        originalLang: 'fr',
        source: { en: 'Letter to Gertrude Tennant', zh: '致格特鲁德·坦南特的信' },
        year: 1876,
      },
      {
        text: {
          en: 'Human speech is like a cracked kettle on which we tap crude rhythms for bears to dance to, while we long to make music that will melt the stars.',
          zh: '人类的语言就像一面破鼓，我们在上面敲出粗糙的节奏让狗熊跳舞，而我们渴望的是创作出令星辰融化的音乐。',
        },
        original: 'La parole humaine est comme un chaudron fêlé où nous battons des mélodies à faire danser les ours, quand on voudrait attendrir les étoiles.',
        originalLang: 'fr',
        source: { en: 'Madame Bovary', zh: '《包法利夫人》' },
        year: 1857,
      },
      {
        text: {
          en: 'An author in his book must be like God in the universe, present everywhere and visible nowhere.',
          zh: '作者在他的书中必须像上帝在宇宙中一样，无处不在又无处可见。',
        },
        original: 'L\'auteur, dans son œuvre, doit être comme Dieu dans l\'univers, présent partout et visible nulle part.',
        originalLang: 'fr',
        source: { en: 'Letter to Louise Colet', zh: '致路易丝·科莱的信' },
        year: 1852,
      },
      {
        text: {
          en: 'There is no truth. There is only perception.',
          zh: '没有真理，只有感知。',
        },
        original: 'Il n\'y a pas de vrai. Il n\'y a que des manières de voir.',
        originalLang: 'fr',
        source: { en: 'Letter to Léon Hennique', zh: '致莱昂·埃尼克的信' },
        year: 1880,
      },
      {
        text: {
          en: 'One must not always think that feeling is everything. In the arts, it is nothing without form.',
          zh: '不能总以为感觉就是一切。在艺术中，没有形式，感觉什么都不是。',
        },
        original: 'Il ne faut pas toujours croire que le sentiment soit tout. Dans les arts, ce n\'est rien sans la forme.',
        originalLang: 'fr',
        source: { en: 'Letter to Louise Colet', zh: '致路易丝·科莱的信' },
        year: 1846,
      },
    ],
  },
  {
    slug: 'vladimir-nabokov',
    name: { en: 'Vladimir Nabokov', zh: '弗拉基米尔·纳博科夫' },
    years: '1899–1977',
    nationality: { en: 'Russian-American', zh: '俄裔美国' },
    bio: {
      en: 'Novelist and lepidopterist who wrote masterpieces in both Russian and English. His ornate prose, ludic structures, and penetrating intelligence made him one of the supreme stylists of the twentieth century.',
      zh: '小说家和鳞翅目学家，用俄语和英语写出了杰作。华丽的散文、游戏般的结构和敏锐的智性使他成为二十世纪最卓越的文体家之一。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Vladimir_Nabokov',
      zh: 'https://zh.wikipedia.org/wiki/弗拉基米尔·纳博科夫',
    },
    quotes: [
      {
        text: {
          en: 'Literature was not born the day when a boy crying wolf, wolf came running out of the Neanderthal valley with a big gray wolf at his heels: literature was born on the day when a boy came crying wolf, wolf and there was no wolf behind him.',
          zh: '文学并非诞生在一个男孩喊着"狼来了"、身后真有一头大灰狼从尼安德特山谷跑出来的那天：文学诞生在一个男孩喊着"狼来了"、身后却没有狼的那天。',
        },
        originalLang: 'en',
        source: { en: 'Lectures on Literature', zh: '《文学讲稿》' },
        year: 1980,
      },
      {
        text: {
          en: 'The cradle rocks above an abyss, and common sense tells us that our existence is but a brief crack of light between two eternities of darkness.',
          zh: '摇篮在深渊之上摇摆，常识告诉我们，我们的存在不过是两段永恒黑暗之间的一线微光。',
        },
        originalLang: 'en',
        source: { en: 'Speak, Memory', zh: '《说吧，记忆》' },
        year: 1951,
      },
      {
        text: {
          en: 'Curiosity is insubordination in its purest form.',
          zh: '好奇心是最纯粹形式的不服从。',
        },
        originalLang: 'en',
        source: { en: 'Bend Sinister', zh: '《庶出的标志》' },
        year: 1947,
      },
      {
        text: {
          en: 'A writer should have the precision of a poet and the imagination of a scientist.',
          zh: '作家应当具有诗人的精确和科学家的想象力。',
        },
        originalLang: 'en',
        source: { en: 'Strong Opinions', zh: '《固执己见》' },
        year: 1973,
      },
      {
        text: {
          en: 'The pages are still blank, but there is a miraculous feeling of the words being there, written in invisible ink and clamoring to become visible.',
          zh: '书页仍然空白，但有一种奇妙的感觉——文字已经在那里，用隐形墨水写就，喧嚷着要变得可见。',
        },
        originalLang: 'en',
        source: { en: 'Strong Opinions', zh: '《固执己见》' },
        year: 1973,
      },
    ],
  },
  {
    slug: 'thomas-mann',
    name: { en: 'Thomas Mann', zh: '托马斯·曼' },
    years: '1875–1955',
    nationality: { en: 'German', zh: '德国' },
    bio: {
      en: 'German novelist and Nobel laureate whose vast, ironic novels charted the crisis of European bourgeois civilization. His work fuses philosophical inquiry with musical structure, probing the tension between art and life, sickness and health, spirit and nature.',
      zh: '德国小说家、诺贝尔文学奖得主，以宏大而充满反讽的小说描绘欧洲资产阶级文明的危机。他的作品将哲学探索与音乐结构融为一体，深入剖析艺术与生活、疾病与健康、精神与自然之间的张力。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Thomas_Mann',
      zh: 'https://zh.wikipedia.org/wiki/托马斯·曼',
    },
    quotes: [
      {
        text: {
          en: 'A man lives not only his personal life, as an individual, but also, consciously or unconsciously, the life of his epoch and his contemporaries.',
          zh: '一个人不仅过着他个人的生活，而且有意无意地也过着他的时代和同代人的生活。',
        },
        original: 'Ein Mensch lebt nicht nur sein persönliches Leben als Einzelwesen, sondern, bewußt oder unbewußt, auch das seiner Epoche und seiner Zeitgenossen.',
        originalLang: 'de',
        source: { en: 'The Magic Mountain', zh: '魔山' },
        year: 1924,
      },
      {
        text: {
          en: 'What we call mourning for our dead is perhaps not so much grief at not being able to call them back as it is grief at not being able to want to do so.',
          zh: '我们所谓对逝者的哀悼，或许与其说是因为无法将他们唤回而悲伤，不如说是因为无法想要唤回他们而悲伤。',
        },
        original: 'Was wir Trauer um unsere Toten nennen, ist vielleicht gar nicht so sehr der Schmerz darüber, daß wir sie nicht zurückrufen können, als der Schmerz darüber, daß wir es nicht wollen können.',
        originalLang: 'de',
        source: { en: 'The Magic Mountain', zh: '魔山' },
        year: 1924,
      },
      {
        text: {
          en: 'Solitude gives birth to the original in us, to beauty unfamiliar and perilous — to poetry. But also, it gives birth to the opposite: to the perverse, the illicit, the absurd.',
          zh: '孤独在我们内心孕育出独创之物，孕育出陌生而危险的美——孕育出诗歌。但同样，它也孕育出相反的东西：变态的、违禁的、荒谬的。',
        },
        original: 'Die Einsamkeit zeitigt das Originale, das gewagt und befremdend Schöne, das Gedicht. Die Einsamkeit zeitigt aber auch das Verkehrte, das Unverhältnismäßige, das Absurde und das Unerlaubte.',
        originalLang: 'de',
        source: { en: 'Death in Venice', zh: '威尼斯之死' },
        year: 1912,
      },
      {
        text: {
          en: 'For the sake of goodness and love, man shall let death have no sovereignty over his thoughts.',
          zh: '为了善与爱的缘故，人不应让死亡统治自己的思想。',
        },
        original: 'Der Mensch soll um der Güte und Liebe willen dem Tode keine Herrschaft einräumen über seine Gedanken.',
        originalLang: 'de',
        source: { en: 'The Magic Mountain', zh: '魔山' },
        year: 1924,
      },
      {
        text: {
          en: 'A writer is someone for whom writing is more difficult than it is for other people.',
          zh: '作家就是那种写作比别人更困难的人。',
        },
        original: 'Ein Schriftsteller ist jemand, dem das Schreiben schwerer fällt als allen anderen Leuten.',
        originalLang: 'de',
        source: { en: 'Essays of Three Decades', zh: '三十年文集' },
        year: 1947,
      },
      {
        text: {
          en: 'Order and simplification are the first steps toward the mastery of a subject — the actual enemy is the unknown.',
          zh: '条理和简化是掌握一门学问的第一步——真正的敌人是未知。',
        },
        original: 'Ordnung und Vereinfachung sind die ersten Schritte zur Bewältigung eines Gegenstandes — der eigentliche Feind ist das Unbekannte.',
        originalLang: 'de',
        source: { en: 'The Magic Mountain', zh: '魔山' },
        year: 1924,
      },
      {
        text: {
          en: 'It is love, not reason, that is stronger than death.',
          zh: '比死亡更强大的是爱，而非理性。',
        },
        original: 'Es ist die Liebe, nicht die Vernunft, die stärker ist als der Tod.',
        originalLang: 'de',
        source: { en: 'The Magic Mountain', zh: '魔山' },
        year: 1924,
      },
      {
        text: {
          en: 'Every reasonable human being should be a moderate Socialist.',
          zh: '每一个有理性的人都应该是一个温和的社会主义者。',
        },
        original: 'Jeder vernünftige Mensch sollte ein gemäßigter Sozialist sein.',
        originalLang: 'de',
        source: { en: 'The New York Times (interview)', zh: '《纽约时报》（采访）' },
        year: 1950,
      },
    ],
  },
  {
    slug: 'chinua-achebe',
    name: { en: 'Chinua Achebe', zh: '钦努阿·阿契贝' },
    years: '1930–2013',
    nationality: { en: 'Nigerian', zh: '尼日利亚' },
    bio: {
      en: 'Nigerian novelist, poet, and critic widely regarded as the father of modern African literature. His fiction restored dignity and complexity to African culture by telling its stories from within, challenging the distortions of colonial narrative.',
      zh: '尼日利亚小说家、诗人和批评家，被广泛视为现代非洲文学之父。他的小说从内部讲述非洲故事，恢复了非洲文化的尊严与复杂性，挑战了殖民叙事的扭曲。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Chinua_Achebe',
      zh: 'https://zh.wikipedia.org/wiki/钦努阿·阿契贝',
    },
    quotes: [
      {
        text: {
          en: 'Until the lions have their own historians, the history of the hunt will always glorify the hunter.',
          zh: '在狮子拥有自己的历史学家之前，狩猎的历史将永远美化猎人。',
        },
        originalLang: 'en',
        source: { en: 'The Art of Fiction No. 139 (The Paris Review)', zh: '《小说的艺术》第139期（《巴黎评论》）' },
        year: 1994,
        comment: { en: 'An African proverb cited by Achebe in his 1994 Paris Review interview, not from Things Fall Apart.', zh: '这是一句非洲谚语，阿切贝在1994年《巴黎评论》访谈中引用，并非出自《瓦解》。' },
      },
      {
        text: {
          en: 'The world has no end, and what is good among one people is an abomination with others.',
          zh: '世界没有尽头，在一群人中被视为美好的事物，在另一群人中可能是令人憎恶的。',
        },
        originalLang: 'en',
        source: { en: 'Things Fall Apart', zh: '瓦解' },
        year: 1958,
      },
      {
        text: {
          en: 'There is no story that is not true. The world has no end, and what is good among one people is an abomination with others.',
          zh: '没有一个故事是不真实的。世界没有尽头，在一群人中被视为美好的事物，在另一群人中可能是令人憎恶的。',
        },
        originalLang: 'en',
        source: { en: 'Things Fall Apart', zh: '瓦解' },
        year: 1958,
      },
      {
        text: {
          en: 'Art is, and always was, at the service of man. Our ancestors created their myths and told their stories for a human purpose. Any good story, any good novel, should have a message, should have a purpose.',
          zh: '艺术始终是为人服务的。我们的祖先创造神话、讲述故事都是出于人的目的。任何好的故事、好的小说都应该有信息，都应该有目的。',
        },
        originalLang: 'en',
        source: { en: 'Morning Yet on Creation Day', zh: '创世日的黎明' },
        year: 1975,
      },
      {
        text: {
          en: 'The novelist teaches the reader that the past was not as simple as it might appear. He reveals that the world is complex and that there is no single perspective that contains the whole truth.',
          zh: '小说家教会读者，过去并不像看上去那样简单。他揭示出世界是复杂的，没有任何单一视角能包含全部真相。',
        },
        originalLang: 'en',
        source: { en: 'The Education of a British-Protected Child', zh: '一个受英国保护的孩子的教育' },
        year: 2009,
      },
      {
        text: {
          en: 'When suffering knocks at your door and you say there is no seat for him, he tells you not to worry because he has brought his own stool.',
          zh: '当苦难敲响你的门，你说没有座位给他，他告诉你不必担心，因为他自带了凳子。',
        },
        originalLang: 'en',
        source: { en: 'Things Fall Apart', zh: '瓦解' },
        year: 1958,
      },
      {
        text: {
          en: 'People say that if you find water rising up to your ankle, that is the time to do something about it, not when it is up to your neck.',
          zh: '人们说，当你发现水涨到脚踝时，那才是你该有所行动的时候，而不是等到水漫到脖子。',
        },
        originalLang: 'en',
        source: { en: 'Anthills of the Savannah', zh: '草原蚁丘' },
        year: 1987,
      },
    ],
  },
  {
    slug: 'wg-sebald',
    name: { en: 'W.G. Sebald', zh: 'W.G.泽巴尔德' },
    years: '1944–2001',
    nationality: { en: 'German-British', zh: '德裔英国' },
    bio: {
      en: 'German-born British writer whose haunting, genre-defying prose meditations on memory, destruction, and the weight of European history are interwoven with uncaptioned photographs. His work explores how the past persists as ruin, echo, and unresolved grief.',
      zh: '德裔英国作家，其令人难忘的、超越文类的散文式冥想探索记忆、毁灭和欧洲历史的重压，文中穿插无标注的照片。他的作品探索过去如何以废墟、回声和未消解的悲伤持续存在。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/W._G._Sebald',
      zh: 'https://zh.wikipedia.org/wiki/温弗里德·塞巴尔德',
    },
    quotes: [
      {
        text: {
          en: 'It does not seem to me that we understand the laws governing the return of the past, but I feel more and more as if time did not exist at all, only various spaces interlocking according to the rules of a higher form of stereometry, between which the living and the dead can move back and forth as they like.',
          zh: '在我看来，我们并不理解支配往事回返的法则，但我越来越感到时间根本不存在，有的只是各种空间按照某种更高级的立体几何法则彼此嵌套，生者与死者可以在其间随意往来。',
        },
        original: 'Es scheint mir nicht, daß wir die Gesetze verstehen, die die Rückkehr der Vergangenheit regieren, aber ich fühle immer mehr, als gäbe es die Zeit überhaupt nicht, nur verschiedene Räume, die sich nach einer höheren Stereometrie ineinanderschachteln, zwischen denen die Lebendigen und die Toten hin und her gehen können, wie es ihnen beliebt.',
        originalLang: 'de',
        source: { en: 'Austerlitz', zh: '奥斯特利茨' },
        year: 2001,
      },
      {
        text: {
          en: 'Our spread over the earth was fuelled by reducing the higher species of vegetation to charcoal, by incessantly burning whatever was combustible. From the earliest times, human civilization has been no more than a strange luminescence growing more intense by the hour, of which no one can say when it will begin to wane and when it will fade away.',
          zh: '我们向地球的蔓延是靠将高等植物化为木炭来推动的，靠不停地焚烧一切可燃之物。自最早的时代以来，人类文明不过是一种奇异的微光，一小时比一小时更强烈，没有人能说它何时开始减弱，何时将消散。',
        },
        original: 'Unsere Ausbreitung über die Erde war befeuert durch die Reduktion der höheren Vegetationsformen zu Holzkohle, durch das unablässige Verbrennen alles Brennbaren. Die menschliche Zivilisation war von jeher nichts als ein von Stunde zu Stunde intensiver werdendes seltsames Leuchten, von dem keiner sagen kann, wann es schwächer werden und wann es verlöschen wird.',
        originalLang: 'de',
        source: { en: 'The Rings of Saturn', zh: '土星之环' },
        year: 1995,
      },
      {
        text: {
          en: 'I have always kept things at arm\'s length, and have never settled anywhere, and that I am now, at the age of fifty-seven, obliged to think about the nature of my melancholy.',
          zh: '我始终与一切事物保持一臂之距，从未在任何地方安顿下来，而如今，在五十七岁的年纪，我不得不思考自己忧郁的本质。',
        },
        original: 'Ich habe die Dinge immer auf Distanz gehalten und habe mich nirgends je niedergelassen, und nun bin ich, im Alter von siebenundfünfzig Jahren, gezwungen, über das Wesen meiner Melancholie nachzudenken.',
        originalLang: 'de',
        source: { en: 'The Rings of Saturn', zh: '土星之环' },
        year: 1995,
      },
      {
        text: {
          en: 'The marks of pain that trace countless fine lines through history are not recorded in the annals of the victors. They persist instead in the obscure reports of the nameless.',
          zh: '在历史中刻下无数细纹的痛苦痕迹并未被记入胜利者的史册。它们反而留存于无名者的晦涩记述中。',
        },
        original: 'Die Zeichen des Schmerzes, die ungezählte feine Linien durch die Geschichte ziehen, sind nicht in den Annalen der Sieger aufgezeichnet. Sie bleiben in den obskuren Berichten der Namenlosen.',
        originalLang: 'de',
        source: { en: 'On the Natural History of Destruction', zh: '论毁灭的自然史' },
        year: 1999,
      },
      {
        text: {
          en: 'Strange to say, I had the impression that the darkness was thronged with an invisible multitude, and I could almost hear the low murmur of many voices, as if I had arrived at some point where all the stories in the world originated.',
          zh: '说来奇怪，我有一种印象，黑暗中挤满了看不见的人群，我几乎能听见许多声音的低声细语，仿佛我来到了世界上所有故事的起源之处。',
        },
        original: 'Seltsam zu sagen, hatte ich den Eindruck, die Finsternis sei durchdrungen von einer unsichtbaren Menge, und ich konnte das leise Gemurmel vieler Stimmen fast hören, als sei ich an einen Ort gekommen, wo alle Geschichten der Welt ihren Ursprung hatten.',
        originalLang: 'de',
        source: { en: 'The Rings of Saturn', zh: '土星之环' },
        year: 1995,
      },
      {
        text: {
          en: 'In the second half of the 1960s I traveled from England to Belgium on several occasions, and made visits to Waterloo and other Belgian sites. And it was these journeys which first awoke in me a sense of how everything is continuously lapsing into oblivion with every extinguished life.',
          zh: '二十世纪六十年代后半叶，我多次从英国前往比利时，造访了滑铁卢和其他比利时遗址。正是这些旅行最初唤醒了我的一种感觉：随着每一个生命的熄灭，一切都在不断坠入遗忘。',
        },
        original: 'In der zweiten Hälfte der sechziger Jahre bin ich von England aus mehrmals nach Belgien gefahren und habe Waterloo und andere belgische Orte besucht. Und es waren diese Reisen, die in mir zuerst ein Gefühl dafür weckten, wie alles mit jedem erloschenen Leben unaufhörlich ins Vergessen hinabsinkt.',
        originalLang: 'de',
        source: { en: 'The Rings of Saturn', zh: '土星之环' },
        year: 1995,
      },
      {
        text: {
          en: 'We learn from history as much as a rabbit learns from the experiment that is performed upon it.',
          zh: '我们从历史中学到的东西，就像一只兔子从对它进行的实验中学到的一样多。',
        },
        original: 'Wir lernen aus der Geschichte so viel wie das Kaninchen aus dem Experiment, das an ihm durchgeführt wird.',
        originalLang: 'de',
        source: { en: 'On the Natural History of Destruction', zh: '论毁灭的自然史' },
        year: 1999,
      },
    ],
  },
  {
    slug: 'jm-coetzee',
    name: { en: 'J.M. Coetzee', zh: 'J.M.库切' },
    years: '1940–',
    nationality: { en: 'South African-Australian', zh: '南非裔澳大利亚' },
    bio: {
      en: 'South African-Australian novelist and Nobel laureate whose spare, unsettling fiction confronts the structures of power, humiliation, and moral complicity. His work probes the limits of reason and empathy with an unflinching philosophical rigor.',
      zh: '南非裔澳大利亚小说家、诺贝尔文学奖得主，以简洁而令人不安的小说直面权力、羞辱与道德共谋的结构。他的作品以毫不退缩的哲学严谨探索理性与共情的极限。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/J._M._Coetzee',
      zh: 'https://zh.wikipedia.org/wiki/约翰·马克斯韦尔·库切',
    },
    quotes: [
      {
        text: {
          en: 'One can punish a dog, it seems to me, for an offence like chewing a slipper. A dog will accept the justice of that. But desire is another story. No animal will accept the justice of being punished for following its instincts.',
          zh: '在我看来，你可以因为狗咬了拖鞋这样的过错而惩罚它。狗会接受这种公正。但欲望是另一回事。没有动物会接受因追随本能而被惩罚的公正性。',
        },
        originalLang: 'en',
        source: { en: 'Disgrace', zh: '耻' },
        year: 1999,
      },
      {
        text: {
          en: 'The barbarians come out at night. Before nightfall the last goatherd must be brought in and the gate barred. At dawn we go out to face the new day. That is how we live.',
          zh: '野蛮人在夜间出没。天黑之前，最后一个牧羊人必须被带进来，大门必须闩上。黎明时分我们出去迎接新的一天。我们就是这样生活的。',
        },
        originalLang: 'en',
        source: { en: 'Waiting for the Barbarians', zh: '等待野蛮人' },
        year: 1980,
      },
      {
        text: {
          en: 'There is a great deal that I am not saying. I choose what I say. What I do not say I withhold because I judge it to be of no significance, or because I judge it to be the kind of thing that needs no saying.',
          zh: '有很多东西我没有说。我选择我说的话。我不说的东西，是因为我判断它无关紧要，或者因为我判断它是那种不需要说的东西。',
        },
        originalLang: 'en',
        source: { en: 'Elizabeth Costello', zh: '伊丽莎白·科斯特洛' },
        year: 2003,
      },
      {
        text: {
          en: 'If we are going to be kind, let it be out of simple generosity, not out of fear — not out of a desire to look good in the eyes of the world.',
          zh: '如果我们要善良，那就让它出于单纯的慷慨，而不是出于恐惧——不是出于想在世人眼中显得体面的欲望。',
        },
        originalLang: 'en',
        source: { en: 'Disgrace', zh: '耻' },
        year: 1999,
      },
      {
        text: {
          en: 'I was not, not any longer, parsing sounds into words, words into sentences, sentences into meanings. On the contrary, the entire rigmarole of language seemed to be falling away, and what I was hearing were simply sounds, sounds with no inherent sense.',
          zh: '我不再将声音解析为词语，将词语解析为句子，将句子解析为意义。恰恰相反，语言的全部繁文缛节似乎正在脱落，而我听到的不过是声音，没有任何内在意义的声音。',
        },
        originalLang: 'en',
        source: { en: 'Elizabeth Costello', zh: '伊丽莎白·科斯特洛' },
        year: 2003,
      },
      {
        text: {
          en: 'His whole inclination is to turn his face to the wall and forget about it. But it is not possible to forget, not possible to do nothing. He is in the grip of something that does not let go.',
          zh: '他全部的倾向是把脸转向墙壁，忘掉这一切。但遗忘是不可能的，无所作为也是不可能的。他被某种不肯放手的东西攫住了。',
        },
        originalLang: 'en',
        source: { en: 'Disgrace', zh: '耻' },
        year: 1999,
      },
    ],
  },
  {
    slug: 'doris-lessing',
    name: { en: 'Doris Lessing', zh: '多丽丝·莱辛' },
    years: '1919–2013',
    nationality: { en: 'British-Zimbabwean', zh: '英籍津巴布韦' },
    bio: {
      en: 'British-Zimbabwean novelist and Nobel laureate whose restless intelligence ranged from realist explorations of women\'s inner lives and political disillusionment to speculative fiction. Her work dissects the prisons of ideology, gender, and the self with unsparing honesty.',
      zh: '英籍津巴布韦裔小说家、诺贝尔文学奖得主，其不安分的智识从对女性内心生活与政治幻灭的现实主义探索延伸到推想小说。她的作品以毫不留情的坦诚剖析意识形态、性别和自我的牢笼。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Doris_Lessing',
      zh: 'https://zh.wikipedia.org/wiki/多丽丝·莱辛',
    },
    quotes: [
      {
        text: {
          en: 'Whatever you\'re meant to do, do it now. The conditions are always impossible.',
          zh: '无论你注定要做什么，现在就做。条件永远不会成熟。',
        },
        originalLang: 'en',
        source: { en: 'The Golden Notebook', zh: '金色笔记' },
        year: 1962,
      },
      {
        text: {
          en: 'In the writing process, the more the story cooks, the better. The brain works for you even when you are at rest. I find dreams particularly useful. I myself think a great deal before I go to sleep and the details sometimes unfold in the dream.',
          zh: '在写作过程中，故事酝酿得越久越好。大脑在你休息时也在为你工作。我发现梦特别有用。我自己在入睡前会想很多，细节有时会在梦中展开。',
        },
        originalLang: 'en',
        source: { en: 'Interview, The Paris Review', zh: '《巴黎评论》访谈' },
        year: 1988,
      },
      {
        text: {
          en: 'It is the mark of great people that they hand the world on a little better than they found it. And the mark of the mediocre is to keep things as they are.',
          zh: '伟大之人的标志是他们把世界交出去时比得到时好了一点。而平庸之人的标志是维持一切如旧。',
        },
        originalLang: 'en',
        source: { en: 'Prisons We Choose to Live Inside', zh: '我们选择居住的监狱' },
        year: 1987,
      },
      {
        text: {
          en: 'We spend our lives fighting to get people very slightly more stupid than ourselves to accept truths that the great men have always known. They have known for thousands of years that to lock a human being into solitary confinement can make a madman of him or an animal.',
          zh: '我们一生都在努力让那些比我们稍微愚钝一点的人接受伟人们早已知晓的真理。他们几千年前就知道，把一个人关进单独监禁室会把他变成疯子或畜生。',
        },
        originalLang: 'en',
        source: { en: 'The Golden Notebook', zh: '金色笔记' },
        year: 1962,
      },
      {
        text: {
          en: 'What is terrible is to pretend that the second-rate is first-rate. To pretend that you don\'t need love when you do; or you like your work when you know quite well you\'re capable of better.',
          zh: '可怕的是假装二流是一流。假装你不需要爱，其实你需要；假装你喜欢你的工作，其实你完全清楚自己能做得更好。',
        },
        originalLang: 'en',
        source: { en: 'The Golden Notebook', zh: '金色笔记' },
        year: 1962,
      },
      {
        text: {
          en: 'With a library you are free, not confined by temporary political climates. It is the most democratic of institutions, because no one — but no one at all — can tell you what to read and when and how.',
          zh: '有了图书馆你就是自由的，不受临时政治气候的束缚。它是最民主的机构，因为没有人——绝对没有人——能告诉你该读什么、何时读、怎么读。',
        },
        originalLang: 'en',
        source: { en: 'Prisons We Choose to Live Inside', zh: '我们选择居住的监狱' },
        year: 1987,
      },
      {
        text: {
          en: 'Ideally, what should be said to every child, repeatedly, throughout his or her school life is something like this: You are in the process of being indoctrinated. We have not yet evolved a system of education that is not a system of indoctrination.',
          zh: '理想情况下，在一个孩子的整个学校生涯中，应该反复对他或她说这样的话：你正在被灌输。我们尚未发展出一种不是灌输系统的教育系统。',
        },
        originalLang: 'en',
        source: { en: 'Prisons We Choose to Live Inside', zh: '我们选择居住的监狱' },
        year: 1987,
      },
    ],
  },
  {
    slug: 'yukio-mishima',
    name: { en: 'Yukio Mishima', zh: '三岛由纪夫' },
    years: '1925–1970',
    nationality: { en: 'Japanese', zh: '日本' },
    bio: {
      en: 'Japanese novelist, playwright, and essayist whose extravagant literary vision fused classical Japanese aesthetics with modernist intensity. Obsessed with beauty, death, and the body, his work charts Japan\'s spiritual crisis in the wake of tradition\'s collapse.',
      zh: '日本小说家、剧作家和散文家，其华丽的文学想象将日本古典美学与现代主义的强度融为一体。他痴迷于美、死亡和肉体，作品描绘了传统崩塌后日本的精神危机。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Yukio_Mishima',
      zh: 'https://zh.wikipedia.org/wiki/三岛由纪夫',
    },
    quotes: [
      {
        text: {
          en: 'What transforms this world is knowledge. Do you see what I mean? Nothing else can change anything in this world. Knowledge alone is capable of transforming the world, while at the same time leaving it exactly as it is.',
          zh: '改变这个世界的是知识。你明白我的意思吗？没有别的东西能改变这个世界上的任何事物。唯有知识能够改变世界，同时又使它完全保持原样。',
        },
        original: 'この世界を変えるのは認識だ。わかるかね。この世界のどんなことも変えることのできるのは認識だけだ。認識だけが、世界を変えると同時に、そのままにしておくことができるのだ。',
        originalLang: 'ja',
        source: { en: 'The Temple of the Golden Pavilion', zh: '金阁寺' },
        year: 1956,
      },
      {
        text: {
          en: 'The highest point at which human life and art meet is in the form of action. And the most exquisite of all forms of action is the beauty of the body in movement — the beauty of the running, fighting, or dancing body.',
          zh: '人生与艺术交汇的最高点在于行动。而一切行动形式中最精美的，是运动中的肉体之美——奔跑的、格斗的、舞蹈的肉体之美。',
        },
        original: '人間の生と芸術との最高の接点は行動の形をとる。そしてあらゆる行動の形式のうちで最も精妙なのは、運動する肉体の美——走り、闘い、踊る肉体の美である。',
        originalLang: 'ja',
        source: { en: 'Sun and Steel', zh: '太阳与铁' },
        year: 1968,
      },
      {
        text: {
          en: 'Perfect purity is possible if you turn your life into a line of poetry written with a splash of blood.',
          zh: '完美的纯洁是可能的，只要你把自己的生命变成一行以鲜血挥洒而成的诗。',
        },
        original: '完全な純粋さは、人生を一滴の血で書かれた一行の詩に変えるなら可能である。',
        originalLang: 'ja',
        source: { en: 'Runaway Horses', zh: '奔马' },
        year: 1969,
      },
      {
        text: {
          en: 'I still have no way to survive but to keep writing one line, one more line, one more line...',
          zh: '我仍然没有别的生存之道，只有不断写下一行、再一行、再一行……',
        },
        original: '私にはまだ一行、もう一行、もう一行と書きつづけてゆく以外に生きのびる方法がない。',
        originalLang: 'ja',
        source: { en: 'Confessions of a Mask', zh: '假面的告白' },
        year: 1949,
      },
      {
        text: {
          en: 'True beauty is something that attacks, overpowers, robs, and finally destroys.',
          zh: '真正的美是攻击、征服、掠夺，最终毁灭的东西。',
        },
        original: '真の美とは、人を襲い、圧倒し、奪い、ついには滅ぼすものである。',
        originalLang: 'ja',
        source: { en: 'The Temple of the Golden Pavilion', zh: '金阁寺' },
        year: 1956,
      },
      {
        text: {
          en: 'The cynicism that regards hero worship as comical is always shadowed by a sense of physical inferiority.',
          zh: '将英雄崇拜视为可笑的犬儒主义，其背后总有一种肉体自卑感的阴影。',
        },
        original: '英雄崇拝を滑稽と見るシニシズムには、常に肉体的劣等感の影がさしている。',
        originalLang: 'ja',
        source: { en: 'Sun and Steel', zh: '太阳与铁' },
        year: 1968,
      },
    ],
  },
  {
    slug: 'cormac-mccarthy',
    name: { en: 'Cormac McCarthy', zh: '科马克·麦卡锡' },
    years: '1933–2023',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American novelist whose biblical prose and unsparing vision of violence, landscape, and human extremity made him one of the supreme voices in American literature. His work moves at the border of language and silence, where moral certainty dissolves into the indifference of nature.',
      zh: '美国小说家，其圣经般的散文和对暴力、景观与人类极端状态的毫不留情的描绘使他成为美国文学中最卓越的声音之一。他的作品行走在语言与沉默的边界，道德确定性在自然的冷漠中消解。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Cormac_McCarthy',
      zh: 'https://zh.wikipedia.org/wiki/科马克·麦卡锡',
    },
    quotes: [
      {
        text: {
          en: 'Whatever in creation exists without my knowledge exists without my consent.',
          zh: '造物中凡不在我认知之内的，都不在我同意之内。',
        },
        originalLang: 'en',
        source: { en: 'Blood Meridian', zh: '血色子午线' },
        year: 1985,
      },
      {
        text: {
          en: 'He turned and looked back at the steps he had come down. Where you\'ve been is not important. Where you are is not important. The only thing that\'s important is where you\'re going.',
          zh: '他转身回望自己走下的台阶。你去过哪里并不重要。你在哪里也不重要。唯一重要的是你要去哪里。',
        },
        originalLang: 'en',
        source: { en: 'Suttree', zh: '萨特里' },
        year: 1979,
      },
      {
        text: {
          en: 'You never know what worse luck your bad luck has saved you from.',
          zh: '你永远不知道你的厄运使你免于遭受什么更大的厄运。',
        },
        originalLang: 'en',
        source: { en: 'No Country for Old Men', zh: '老无所依' },
        year: 2005,
      },
      {
        text: {
          en: 'If the rule you followed brought you to this, of what use was the rule?',
          zh: '如果你遵循的规则将你引到了这里，那规则还有什么用？',
        },
        originalLang: 'en',
        source: { en: 'No Country for Old Men', zh: '老无所依' },
        year: 2005,
      },
      {
        text: {
          en: 'He walked out in the gray light and stood and he saw for a brief moment the absolute truth of the world. The cold relentless circling of the intestate earth. Darkness implacable. The blind dogs of the sun in their running. The crushing black vacuum of the universe.',
          zh: '他走出去站在灰蒙蒙的光线中，在短暂的一瞬间看到了世界的绝对真相。无遗嘱之地球冷酷无情的运转。不可安抚的黑暗。太阳的盲目猎犬在奔跑。宇宙压碎一切的黑色真空。',
        },
        originalLang: 'en',
        source: { en: 'The Road', zh: '路' },
        year: 2006,
      },
      {
        text: {
          en: 'You forget what you want to remember, and you remember what you want to forget.',
          zh: '你忘记了你想记住的，你记住了你想忘记的。',
        },
        originalLang: 'en',
        source: { en: 'The Road', zh: '路' },
        year: 2006,
      },
      {
        text: {
          en: 'War was always here. Before man was, war waited for him. The ultimate trade awaiting its ultimate practitioner.',
          zh: '战争一直在这里。在人出现之前，战争就在等他了。终极的行当等待着它终极的从业者。',
        },
        originalLang: 'en',
        source: { en: 'Blood Meridian', zh: '血色子午线' },
        year: 1985,
      },
      {
        text: {
          en: 'Between the wish and the thing the world lies waiting.',
          zh: '在愿望与事物之间，世界静候着。',
        },
        originalLang: 'en',
        source: { en: 'All the Pretty Horses', zh: '骏马' },
        year: 1992,
      },
    ],
  },
  {
    slug: 'primo-levi',
    name: { en: 'Primo Levi', zh: '普里莫·莱维' },
    years: '1919–1987',
    nationality: { en: 'Italian', zh: '意大利' },
    bio: {
      en: 'Italian chemist, writer, and Holocaust survivor whose testimony from Auschwitz became one of the essential moral documents of the twentieth century. His lucid, precise prose explores the gray zone of human behavior under extreme duress, insisting that memory is both obligation and resistance.',
      zh: '意大利化学家、作家、大屠杀幸存者，其来自奥斯维辛的证词成为二十世纪最重要的道德文献之一。他清晰精确的散文探索了极端胁迫下人类行为的灰色地带，坚持认为记忆既是义务也是抵抗。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Primo_Levi',
      zh: 'https://zh.wikipedia.org/wiki/普里莫·莱维',
    },
    quotes: [
      {
        text: {
          en: 'It happened, therefore it can happen again: this is the core of what we have to say. It can happen, and it can happen everywhere.',
          zh: '它发生过，因此它可能再次发生：这就是我们要说的核心。它可能发生，而且可能发生在任何地方。',
        },
        original: 'È avvenuto, quindi può accadere di nuovo: questo è il nocciolo di quanto abbiamo da dire. Può accadere, e può accadere dappertutto.',
        originalLang: 'it',
        source: { en: 'The Drowned and the Saved', zh: '被淹没和被拯救的' },
        year: 1986,
      },
      {
        text: {
          en: 'Monsters exist, but they are too few in number to be truly dangerous. More dangerous are the common men, the functionaries ready to believe and to act without asking questions.',
          zh: '怪物是存在的，但它们数量太少，不足以真正构成危险。更危险的是普通人，那些随时准备相信并不加质疑地行动的公务人员。',
        },
        original: 'I mostri esistono, ma sono troppo pochi per essere veramente pericolosi. Sono più pericolosi gli uomini comuni, i funzionari pronti a credere e ad obbedire senza discutere.',
        originalLang: 'it',
        source: { en: 'If This Is a Man', zh: '这是不是一个人' },
        year: 1947,
      },
      {
        text: {
          en: 'The sea\'s only gifts are harsh blows and, occasionally, the chance to feel strong. Now, I don\'t know much about the sea, but I do know that that\'s the way it is here. And I also know how important it is in life not necessarily to be strong but to feel strong.',
          zh: '大海赐予的唯一礼物是猛烈的打击，偶尔是感到强大的机会。我对大海了解不多，但我知道这里就是这样。我也知道，在生活中重要的不一定是真的强大，而是感到强大。',
        },
        original: 'I doni del mare non sono che colpi violenti e, di tanto in tanto, la possibilità di sentirsi forti. Ora, non so molto del mare, ma so che qui è così. E so anche quanto sia importante nella vita non necessariamente essere forti, ma sentirsi forti.',
        originalLang: 'it',
        source: { en: 'The Periodic Table', zh: '元素周期表' },
        year: 1975,
      },
      {
        text: {
          en: 'We who survived the Camps are not true witnesses. We are those who, through prevarication, skill or luck, never touched bottom. Those who have, and who have seen the face of the Gorgon, did not return, or returned wordless.',
          zh: '我们这些从集中营幸存下来的人并非真正的见证者。我们是那些通过搪塞、技巧或运气从未触及底部的人。那些触及底部、看到了戈尔贡面孔的人，没有回来，或者哑然而归。',
        },
        original: 'Noi, toccati dalla sorte, abbiamo cercato di raccontare, con maggiore o minore saggezza, non solo il nostro destino, ma anche quello degli altri, dei sommersi appunto; ma è stato un discorso per conto di terzi, il racconto di cose viste da vicino, non sperimentate in proprio.',
        originalLang: 'it',
        source: { en: 'The Drowned and the Saved', zh: '被淹没和被拯救的' },
        year: 1986,
        comment: { en: 'The Italian text and English text are from different passages of the same work. The Italian describes survivors telling others\' stories; the English is the famous Gorgon metaphor.', zh: '意大利语文本和英文文本来自同一作品的不同段落。意大利语描述幸存者讲述他人故事，英文则是著名的戈耳工隐喻。' },
      },
      {
        text: {
          en: 'The bond between a man and his profession is similar to that which ties him to his country; it is just as complex, often ambivalent, and in general it is understood completely only when it is broken.',
          zh: '一个人与其职业之间的纽带类似于将他与祖国联系在一起的纽带；同样复杂，常常矛盾，通常只有在断裂时才被完全理解。',
        },
        original: 'Il legame fra un uomo e la sua professione è simile a quello che lo lega al suo paese; è altrettanto complesso, spesso ambivalente, e viene compreso appieno, in generale, solo quando si spezza.',
        originalLang: 'it',
        source: { en: 'The Periodic Table', zh: '元素周期表' },
        year: 1975,
      },
      {
        text: {
          en: 'Sooner or later in life everyone discovers that perfect happiness is unrealizable, but there are few who pause to consider the antithesis: that perfect unhappiness is equally unattainable.',
          zh: '人生中每个人迟早都会发现完美的幸福是不可实现的，但很少有人停下来思考其反题：完美的不幸同样不可企及。',
        },
        original: 'Prima o poi nella vita ognuno scopre che la felicità perfetta non è realizzabile, ma pochi si soffermano a considerare l\'antitesi: che anche l\'infelicità perfetta non lo è.',
        originalLang: 'it',
        source: { en: 'If This Is a Man', zh: '这是不是一个人' },
        year: 1947,
      },
      {
        text: {
          en: 'I am constantly amazed by man\'s inhumanity to man.',
          zh: '人对人的残忍不断地令我震惊。',
        },
        original: 'Non cesso di stupirmi dell\'inumanità dell\'uomo verso l\'uomo.',
        originalLang: 'it',
        source: { en: 'If This Is a Man', zh: '这是不是一个人' },
        year: 1947,
      },
      {
        text: {
          en: 'To destroy a man is difficult, almost as difficult as to create one: it has not been easy, nor quick, but you Germans have succeeded. Here we are, docile under your gaze; from our side you have nothing more to fear; no acts of violence, no words of defiance, not even a look of judgment.',
          zh: '摧毁一个人是困难的，几乎和创造一个人一样困难：这不容易，也不迅速，但你们德国人做到了。我们在这里，在你们的注视下驯服；从我们这边你们没有什么可怕的了——没有暴力行为，没有挑衅的话语，甚至没有审判的目光。',
        },
        original: 'Distruggere un uomo è difficile, quasi quanto crearlo: non è stato agevole, non è stato breve, ma ci siete riusciti, Tedeschi. Eccoci docili sotto i vostri sguardi: da parte nostra nulla più avete a temere: non atti di rivolta, non parole di sfida, neppure uno sguardo giudicante.',
        originalLang: 'it',
        source: { en: 'If This Is a Man', zh: '这是不是一个人' },
        year: 1947,
      },
    ],
  },
  {
    slug: 'aleksandr-solzhenitsyn',
    name: { en: 'Aleksandr Solzhenitsyn', zh: '亚历山大·索尔仁尼琴' },
    years: '1918–2008',
    nationality: { en: 'Russian', zh: '俄罗斯' },
    bio: {
      en: 'Russian novelist, historian, and Nobel laureate who documented the Soviet labor camp system with monumental moral force. His work stands as testimony against totalitarianism, insisting that the line between good and evil runs through every human heart.',
      zh: '俄罗斯小说家、历史学家、诺贝尔文学奖得主，以巨大的道德力量记录了苏联劳改营体系。他的作品是对极权主义的见证，坚持善与恶的界线穿过每一颗人心。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Aleksandr_Solzhenitsyn',
      zh: 'https://zh.wikipedia.org/wiki/亚历山大·索尔仁尼琴',
    },
    quotes: [
      {
        text: {
          en: 'The line separating good and evil passes not through states, nor between classes, nor between political parties either — but right through every human heart — and through all human hearts.',
          zh: '善与恶的分界线不是穿过国家之间，不是穿过阶级之间，也不是穿过政党之间——而是正好穿过每一颗人心——穿过所有人的心。',
        },
        original: 'Линия, разделяющая добро и зло, проходит не между государствами, не между классами, не между партиями — она проходит через каждое человеческое сердце — и через все человеческие сердца.',
        originalLang: 'ru',
        source: { en: 'The Gulag Archipelago', zh: '古拉格群岛' },
        year: 1973,
      },
      {
        text: {
          en: 'You can resolve to live your life with integrity. Let your credo be this: Let the lie come into the world, let it even triumph. But not through me.',
          zh: '你可以决心正直地生活。让你的信条是这样的：让谎言来到这个世界，让它甚至获胜。但不要通过我。',
        },
        original: 'Ты можешь решить жить с достоинством. Пусть твоё кредо будет таким: пусть ложь приходит в мир, пусть даже торжествует. Но не через меня.',
        originalLang: 'ru',
        source: { en: 'The Gulag Archipelago', zh: '古拉格群岛' },
        year: 1973,
      },
      {
        text: {
          en: 'If only it were all so simple! If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart?',
          zh: '要是一切都这么简单就好了！要是在某处有坏人在阴险地做坏事，只需把他们与我们其余的人分开并消灭就行了。但善与恶的分界线穿过每一个人的心。谁又愿意毁掉自己心灵的一部分呢？',
        },
        original: 'Если бы это было так просто! — что где-то есть чёрные люди, злокозненно творящие чёрные дела, и надо только отличить их от остальных и уничтожить. Но линия, разделяющая добро и зло, пересекает сердце каждого человека. И кто уничтожит кусок своего собственного сердца?',
        originalLang: 'ru',
        source: { en: 'The Gulag Archipelago', zh: '古拉格群岛' },
        year: 1973,
      },
      {
        text: {
          en: 'One word of truth shall outweigh the whole world.',
          zh: '一句真话比整个世界的分量都重。',
        },
        original: 'Одно слово правды весь мир перетянет.',
        originalLang: 'ru',
        source: { en: 'Nobel Lecture', zh: '诺贝尔文学奖演讲' },
        year: 1970,
      },
      {
        text: {
          en: 'Gradually it was disclosed to me that the line separating good and evil passes not through states, nor between classes, nor between political parties either — but right through every human heart. This line shifts. Inside us, it oscillates with the years. And even within hearts overwhelmed by evil, one small bridgehead of good is retained.',
          zh: '渐渐地我领悟到，善与恶的分界线不是穿过国家之间，不是穿过阶级之间，也不是穿过政党之间——而是正好穿过每一颗人心。这条线在移动。在我们内心，它随着岁月而摆动。即使在被恶所淹没的心中，也保留着善的一小块桥头堡。',
        },
        original: 'Постепенно открылось мне, что линия, разделяющая добро и зло, проходит не между государствами, не между классами, не между партиями — она проходит через каждое человеческое сердце. Линия эта подвижна. Она колеблется в нас с годами. И даже в сердце, объятом злом, она удерживает маленький плацдарм добра.',
        originalLang: 'ru',
        source: { en: 'The Gulag Archipelago', zh: '古拉格群岛' },
        year: 1973,
      },
      {
        text: {
          en: 'How can you expect a man who\'s warm to understand one who\'s cold?',
          zh: '你怎能指望一个温暖的人理解一个寒冷的人？',
        },
        original: 'Как тёплому понять холодного?',
        originalLang: 'ru',
        source: { en: 'One Day in the Life of Ivan Denisovich', zh: '伊凡·杰尼索维奇的一天' },
        year: 1962,
      },
      {
        text: {
          en: 'Own only what you can always carry with you: know languages, know countries, know people. Let your memory be your travel bag.',
          zh: '只拥有你随时能随身携带的东西：懂得语言，了解国家，认识人。让你的记忆成为你的旅行包。',
        },
        original: 'Владей только тем, что можешь всегда унести с собой: знай языки, знай страны, знай людей. Пусть память будет твоей дорожной сумкой.',
        originalLang: 'ru',
        source: { en: 'The Gulag Archipelago', zh: '古拉格群岛' },
        year: 1973,
      },
      {
        text: {
          en: 'It is not the level of prosperity that makes for happiness but the kinship of heart to heart and the way we look at the world. Both determination and contentment come from within.',
          zh: '带来幸福的不是富裕的程度，而是心与心的亲近以及我们看待世界的方式。决心与满足都来自内心。',
        },
        original: 'Счастье не в уровне благополучия, а в родстве сердец и в том, как мы смотрим на мир. И решимость, и довольство идут изнутри.',
        originalLang: 'ru',
        source: { en: 'Cancer Ward', zh: '癌症楼' },
        year: 1968,
      },
    ],
  },
];
