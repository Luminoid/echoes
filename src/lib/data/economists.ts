import type { PersonData } from './types';

export const economistData: PersonData[] = [
  {
    slug: 'adam-smith',
    name: { en: 'Adam Smith', zh: '亚当·斯密' },
    years: '1723–1790',
    nationality: { en: 'Scottish', zh: '苏格兰' },
    bio: {
      en: 'Scottish economist and moral philosopher, author of The Wealth of Nations and The Theory of Moral Sentiments, widely regarded as the father of modern economics.',
      zh: '苏格兰经济学家和道德哲学家，《国富论》和《道德情操论》作者，被广泛视为现代经济学之父。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Adam_Smith',
      zh: 'https://zh.wikipedia.org/wiki/亚当·斯密',
    },
    quotes: [
      {
        text: {
          en: 'It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.',
          zh: '我们的晚餐并非来自屠夫、酿酒师或面包师的善心，而是来自他们对自身利益的关切。',
        },
        originalLang: 'en',
        source: { en: 'The Wealth of Nations', zh: '国富论' },
        year: 1776,
      },
      {
        text: {
          en: 'Every individual necessarily labours to render the annual revenue of the society as great as he can. He generally, indeed, neither intends to promote the public interest, nor knows how much he is promoting it. He intends only his own gain, and he is in this, as in many other cases, led by an invisible hand to promote an end which was no part of his intention.',
          zh: '每个人都必然竭力使社会的年收入尽可能地增大。诚然，他通常既无意促进公共利益，也不知道自己在多大程度上促进了它。他所追求的仅仅是自己的利益，而在这一过程中，他被一只看不见的手引导去促进一个并非出自其本意的目标。',
        },
        originalLang: 'en',
        source: { en: 'The Wealth of Nations', zh: '国富论' },
        year: 1776,
      },
      {
        text: {
          en: 'No society can surely be flourishing and happy, of which the far greater part of the members are poor and miserable.',
          zh: '一个社会若其大部分成员贫困而悲惨，那这个社会就决不可能繁荣幸福。',
        },
        originalLang: 'en',
        source: { en: 'The Wealth of Nations', zh: '国富论' },
        year: 1776,
      },
      {
        text: {
          en: 'How selfish soever man may be supposed, there are evidently some principles in his nature, which interest him in the fortune of others, and render their happiness necessary to him, though he derives nothing from it except the pleasure of seeing it.',
          zh: '无论人被认为有多么自私，其天性中显然存在某些本能，使他关心他人的命运，并视他人的幸福为自身之必需，尽管他从中除了看到他人幸福时的愉悦之外一无所获。',
        },
        originalLang: 'en',
        source: { en: 'The Theory of Moral Sentiments', zh: '道德情操论' },
        year: 1759,
      },
      {
        text: {
          en: 'The division of labour, so far as it can be introduced, occasions, in every art, a proportionable increase of the productive powers of labour.',
          zh: '分工一旦被引入，便会在每一种技艺中带来劳动生产力的相应增长。',
        },
        originalLang: 'en',
        source: { en: 'The Wealth of Nations', zh: '国富论' },
        year: 1776,
      },
      {
        text: {
          en: 'The man of system is apt to be very wise in his own conceit, and is often so enamoured with the supposed beauty of his own ideal plan of government, that he cannot suffer the smallest deviation from any part of it. He seems to imagine that he can arrange the different members of a great society with as much ease as the hand arranges the different pieces upon a chess-board.',
          zh: '体制之人往往自视甚高，常常沉醉于其理想政府方案的假想之美，以至于不容许丝毫偏离。他似乎以为自己能如同棋手摆弄棋子般轻松地安排一个大社会中的不同成员。',
        },
        originalLang: 'en',
        source: { en: 'The Theory of Moral Sentiments', zh: '道德情操论' },
        year: 1759,
      },
    ],
  },
  {
    slug: 'john-maynard-keynes',
    name: { en: 'John Maynard Keynes', zh: '约翰·梅纳德·凯恩斯' },
    years: '1883–1946',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British economist whose ideas on government spending and monetary policy during downturns fundamentally changed macroeconomics and economic policy worldwide.',
      zh: '英国经济学家，其关于衰退期政府支出与货币政策的思想从根本上改变了全球宏观经济学与经济政策。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/John_Maynard_Keynes',
      zh: 'https://zh.wikipedia.org/wiki/约翰·梅纳德·凯恩斯',
    },
    quotes: [
      {
        text: {
          en: 'The difficulty lies not so much in developing new ideas as in escaping from old ones.',
          zh: '困难不在于产生新思想，而在于摆脱旧思想的束缚。',
        },
        originalLang: 'en',
        source: { en: 'The General Theory of Employment, Interest and Money', zh: '就业、利息和货币通论' },
        year: 1936,
      },
      {
        text: {
          en: 'Practical men, who believe themselves to be quite exempt from any intellectual influences, are usually the slaves of some defunct economist. Madmen in authority, who hear voices in the air, are distilling their frenzy from some academic scribbler of a few years back.',
          zh: '实干家们自以为完全不受任何学术影响，实则往往是某个已故经济学家的奴隶。当权的狂人们在空中听到的声音，不过是从数年前某个学术涂鸦者那里蒸馏出的狂热。',
        },
        originalLang: 'en',
        source: { en: 'The General Theory of Employment, Interest and Money', zh: '就业、利息和货币通论' },
        year: 1936,
      },
      {
        text: {
          en: 'The long run is a misleading guide to current affairs. In the long run we are all dead. Economists set themselves too easy, too useless a task if in tempestuous seasons they can only tell us that when the storm is long past the ocean is flat again.',
          zh: '长期是对当前事务的误导。从长期看我们都已死去。如果经济学家在风暴季节只能告诉我们，风暴过去很久之后海面又会恢复平静，那他们给自己设定的任务未免太轻松、太无用了。',
        },
        originalLang: 'en',
        source: { en: 'A Tract on Monetary Reform', zh: '货币改革论' },
        year: 1923,
      },
      {
        text: {
          en: 'A study of the history of opinion is a necessary preliminary to the emancipation of the mind.',
          zh: '研究舆论的历史，是解放思想的必要前提。',
        },
        originalLang: 'en',
        source: { en: 'The End of Laissez-Faire', zh: '自由放任主义的终结' },
        year: 1926,
      },
      {
        text: {
          en: 'The outstanding faults of the economic society in which we live are its failure to provide for full employment and its arbitrary and inequitable distribution of wealth and incomes.',
          zh: '我们所处的经济社会的突出缺陷，在于它未能提供充分就业，以及财富和收入分配的任意性与不公正。',
        },
        originalLang: 'en',
        source: { en: 'The General Theory of Employment, Interest and Money', zh: '就业、利息和货币通论' },
        year: 1936,
      },
      {
        text: {
          en: 'Words ought to be a little wild, for they are the assault of thoughts on the unthinking.',
          zh: '文字应当带点野性，因为它们是思想对不思之人的冲击。',
        },
        originalLang: 'en',
        source: { en: 'New Statesman and Nation', zh: '《新政治家与民族》杂志' },
        year: 1933,
      },
      {
        text: {
          en: 'The decadent international but individualistic capitalism, in the hands of which we found ourselves after the War, is not a success. It is not intelligent, it is not beautiful, it is not just, it is not virtuous — and it doesn\'t deliver the goods.',
          zh: '战后我们身处其中的那种颓废的、国际化却又个人主义的资本主义并不成功。它不聪明，不美丽，不公正，也不高尚——而且它也交不出货。',
        },
        originalLang: 'en',
        source: { en: 'National Self-Sufficiency', zh: '国家自给自足' },
        year: 1933,
      },
    ],
  },
  {
    slug: 'friedrich-hayek',
    name: { en: 'Friedrich Hayek', zh: '弗里德里希·哈耶克' },
    years: '1899–1992',
    nationality: { en: 'Austrian-British', zh: '奥地利裔英国人' },
    bio: {
      en: 'Austrian-British economist and political philosopher, Nobel laureate, known for his defense of classical liberalism and critique of central planning.',
      zh: '奥地利裔英国经济学家与政治哲学家，诺贝尔经济学奖得主，以捍卫古典自由主义和批判中央计划著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Friedrich_Hayek',
      zh: 'https://zh.wikipedia.org/wiki/弗里德里希·哈耶克',
    },
    quotes: [
      {
        text: {
          en: 'The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.',
          zh: '经济学的奇特使命在于向人们证明，对于自以为能够设计的事物，他们实际上知之甚少。',
        },
        originalLang: 'en',
        source: { en: 'The Fatal Conceit', zh: '致命的自负' },
        year: 1988,
      },
      {
        text: {
          en: 'The argument for liberty is not an argument against organization, which is one of the most powerful tools human reason can employ, but an argument against all exclusive, privileged, monopolistic organization, against the use of coercion to prevent others from doing better.',
          zh: '自由的论证并非反对组织——组织是人类理性所能运用的最强大工具之一——而是反对一切排他的、特权的、垄断的组织，反对用强制手段阻止他人做得更好。',
        },
        originalLang: 'en',
        source: { en: 'The Road to Serfdom', zh: '通往奴役之路' },
        year: 1944,
      },
      {
        text: {
          en: 'Perhaps the fact that we have seen millions voting themselves into complete dependence on a tyrant has made our generation understand that to choose one\'s government is not necessarily to secure freedom.',
          zh: '也许正因为我们目睹了数百万人投票使自己完全依附于暴君，我们这一代人才明白，选择自己的政府未必就能确保自由。',
        },
        originalLang: 'en',
        source: { en: 'The Constitution of Liberty', zh: '自由秩序原理' },
        year: 1960,
      },
      {
        text: {
          en: 'The more the state plans, the more difficult planning becomes for the individual.',
          zh: '国家计划得越多，个人的规划就越困难。',
        },
        originalLang: 'en',
        source: { en: 'The Road to Serfdom', zh: '通往奴役之路' },
        year: 1944,
      },
      {
        text: {
          en: 'The knowledge of the circumstances of which we must make use never exists in concentrated or integrated form but solely as the dispersed bits of incomplete and frequently contradictory knowledge which all the separate individuals possess.',
          zh: '我们必须利用的关于环境的知识，从不以集中或整合的形式存在，而是仅仅作为分散的、不完整的、且常常相互矛盾的碎片知识，分布在所有个人手中。',
        },
        originalLang: 'en',
        source: { en: 'The Use of Knowledge in Society', zh: '知识在社会中的运用' },
        year: 1945,
      },
      {
        text: {
          en: 'If we wish to preserve a free society, it is essential that we recognize that the desirability of a particular object is not sufficient justification for the use of coercion.',
          zh: '如果我们希望保存一个自由社会，就必须认识到，一个特定目标的可取性并不足以构成使用强制手段的正当理由。',
        },
        originalLang: 'en',
        source: { en: 'The Constitution of Liberty', zh: '自由秩序原理' },
        year: 1960,
      },
      {
        text: {
          en: 'We shall not grow wiser before we learn that much that we have done was very foolish.',
          zh: '我们不会变得更聪明，除非我们认识到自己过去做的许多事是非常愚蠢的。',
        },
        originalLang: 'en',
        source: { en: 'The Road to Serfdom', zh: '通往奴役之路' },
        year: 1944,
      },
    ],
  },
  {
    slug: 'joseph-schumpeter',
    name: { en: 'Joseph Schumpeter', zh: '约瑟夫·熊彼特' },
    years: '1883–1950',
    nationality: { en: 'Austrian-American', zh: '奥地利裔美国人' },
    bio: {
      en: 'Austrian-American economist and political scientist, known for his theory of creative destruction and his analysis of innovation, entrepreneurship, and the dynamics of capitalism.',
      zh: '奥地利裔美国经济学家和政治学家，以创造性破坏理论及对创新、企业家精神和资本主义动态的分析著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Joseph_Schumpeter',
      zh: 'https://zh.wikipedia.org/wiki/约瑟夫·熊彼特',
    },
    quotes: [
      {
        text: {
          en: 'The process of Creative Destruction is the essential fact about capitalism. It is what capitalism consists in and what every capitalist concern has got to live in.',
          zh: '创造性破坏的过程是关于资本主义的根本事实。它是资本主义的本质所在，也是每个资本主义企业必须置身其中的现实。',
        },
        originalLang: 'en',
        source: { en: 'Capitalism, Socialism and Democracy', zh: '资本主义、社会主义与民主' },
        year: 1942,
      },
      {
        text: {
          en: 'The opening up of new markets, foreign or domestic, and the organizational development from the craft shop to such concerns as U.S. Steel illustrate the same process of industrial mutation that incessantly revolutionizes the economic structure from within, incessantly destroying the old one, incessantly creating a new one.',
          zh: '新市场的开拓，无论国内或国外，以及从手工作坊到美国钢铁公司这样的企业的组织演变，都说明了同一个产业突变过程——它不停地从内部革新经济结构，不停地摧毁旧结构，不停地创造新结构。',
        },
        originalLang: 'en',
        source: { en: 'Capitalism, Socialism and Democracy', zh: '资本主义、社会主义与民主' },
        year: 1942,
      },
      {
        text: {
          en: 'Capitalism, then, is by nature a form or method of economic change and not only never is but never can be stationary.',
          zh: '因此，资本主义在本质上是一种经济变革的形式或方法，它不仅从来不是静止的，而且永远不可能是静止的。',
        },
        originalLang: 'en',
        source: { en: 'Capitalism, Socialism and Democracy', zh: '资本主义、社会主义与民主' },
        year: 1942,
      },
      {
        text: {
          en: 'The entrepreneur is essentially a man of action, driven not by hedonistic motives but by the dream and the will to found a private kingdom, the will to conquer, and the joy of creating.',
          zh: '企业家本质上是行动者，驱动他的不是享乐动机，而是建立私人王国的梦想与意志、征服的意志以及创造的喜悦。',
        },
        originalLang: 'de',
        source: { en: 'The Theory of Economic Development', zh: '经济发展理论' },
        year: 1911,
      },
      {
        text: {
          en: 'Can capitalism survive? No. I do not think it can.',
          zh: '资本主义能存续吗？不能。我认为它不能。',
        },
        originalLang: 'en',
        source: { en: 'Capitalism, Socialism and Democracy', zh: '资本主义、社会主义与民主' },
        year: 1942,
      },
      {
        text: {
          en: 'The typical entrepreneur is more self-centred than other types, because he relies less than they do on tradition and connection and because his characteristic task — theoretically as well as historically — consists precisely in breaking up old, and creating new, tradition.',
          zh: '典型的企业家比其他类型的人更为自我中心，因为他比他们更少依赖传统和人脉关系，而且他的特征性任务——无论在理论上还是在历史上——恰恰在于打破旧传统、创造新传统。',
        },
        originalLang: 'de',
        source: { en: 'The Theory of Economic Development', zh: '经济发展理论' },
        year: 1911,
      },
      {
        text: {
          en: 'The history of capitalism is studded with violent bursts and catastrophes. The process not only destroys firms and industries that have become obsolete, but also sweeps away whole institutional frameworks and cultural values.',
          zh: '资本主义的历史布满了猛烈的爆发和灾变。这一过程不仅摧毁了已经过时的企业和产业，还横扫了整个制度框架和文化价值。',
        },
        originalLang: 'en',
        source: { en: 'Capitalism, Socialism and Democracy', zh: '资本主义、社会主义与民主' },
        year: 1942,
      },
    ],
  },
  {
    slug: 'amartya-sen',
    name: { en: 'Amartya Sen', zh: '阿马蒂亚·森' },
    years: '1933–',
    nationality: { en: 'Indian', zh: '印度' },
    bio: {
      en: 'Indian economist and philosopher, Nobel laureate, known for his work on welfare economics, social choice theory, and the capabilities approach to development.',
      zh: '印度经济学家和哲学家，诺贝尔经济学奖得主，以其在福利经济学、社会选择理论和能力方法论方面的研究著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Amartya_Sen',
      zh: 'https://zh.wikipedia.org/wiki/阿马蒂亚·森',
    },
    quotes: [
      {
        text: {
          en: 'Famines are easy to prevent if there is a serious effort to do so, and a democratic government, facing elections and criticism from opposition parties and independent newspapers, cannot help but make such an effort. No famine has ever taken place in the history of the world in a functioning democracy.',
          zh: '如果真有诚意去防止饥荒，它是容易防止的。面临选举以及来自反对党和独立报纸的批评的民主政府，不可能不做出这样的努力。在世界历史上，从未有一个正常运转的民主国家发生过饥荒。',
        },
        originalLang: 'en',
        source: { en: 'Development as Freedom', zh: '以自由看待发展' },
        year: 1999,
      },
      {
        text: {
          en: 'Development consists of the removal of various types of unfreedoms that leave people with little choice and little opportunity of exercising their reasoned agency.',
          zh: '发展就是消除各种不自由——这些不自由使人们几乎没有选择，也几乎没有机会去行使其理性的能动性。',
        },
        originalLang: 'en',
        source: { en: 'Development as Freedom', zh: '以自由看待发展' },
        year: 1999,
      },
      {
        text: {
          en: 'The income-centred view of poverty is seriously flawed. What matters is not income itself but the capabilities that income makes possible — and these vary enormously depending on personal circumstances, social conditions, and natural environment.',
          zh: '以收入为中心的贫困观是有严重缺陷的。重要的不是收入本身，而是收入所能实现的能力——而这些能力因个人境遇、社会条件和自然环境的不同而差异巨大。',
        },
        originalLang: 'en',
        source: { en: 'Development as Freedom', zh: '以自由看待发展' },
        year: 1999,
      },
      {
        text: {
          en: 'Justice is not merely about trying to achieve — or dreaming about achieving — some perfectly just society or institution, but about preventing manifestly severe injustice.',
          zh: '正义不仅仅在于试图实现——或梦想实现——某种完美公正的社会或制度，更在于防止明显严重的不正义。',
        },
        originalLang: 'en',
        source: { en: 'The Idea of Justice', zh: '正义的理念' },
        year: 2009,
      },
      {
        text: {
          en: 'The central issue is not the old theme of having or not having markets. It is rather what institutions and arrangements can most effectively serve the aspirations and rights of the deprived.',
          zh: '核心问题不是要不要市场这个老话题，而是什么样的制度和安排能够最有效地服务于弱势群体的诉求和权利。',
        },
        originalLang: 'en',
        source: { en: 'Development as Freedom', zh: '以自由看待发展' },
        year: 1999,
      },
      {
        text: {
          en: 'The freedom to live the way one would like is, it can be argued, deeply enriched by the ability to scrutinize and choose in an informed way.',
          zh: '按自己意愿生活的自由，可以说，因具备知情审视和选择的能力而得到深刻的丰富。',
        },
        originalLang: 'en',
        source: { en: 'Rationality and Freedom', zh: '理性与自由' },
        year: 2002,
      },
      {
        text: {
          en: 'Poverty is not just a lack of money; it is not having the capability to realize one\'s full potential as a human being.',
          zh: '贫困不仅仅是缺钱，更是缺乏作为人实现自身全部潜能的能力。',
        },
        originalLang: 'en',
        source: { en: 'Development as Freedom', zh: '以自由看待发展' },
        year: 1999,
      },
    ],
  },
  {
    slug: 'john-kenneth-galbraith',
    name: { en: 'John Kenneth Galbraith', zh: '约翰·肯尼斯·加尔布雷思' },
    years: '1908–2006',
    nationality: { en: 'Canadian-American', zh: '加拿大裔美国人' },
    bio: {
      en: 'Canadian-American economist, public intellectual, and diplomat, known for his critique of consumer capitalism and the role of large corporations in the modern economy.',
      zh: '加拿大裔美国经济学家、公共知识分子和外交家，以其对消费资本主义和大企业在现代经济中作用的批判著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/John_Kenneth_Galbraith',
      zh: 'https://zh.wikipedia.org/wiki/约翰·肯尼斯·加尔布雷思',
    },
    quotes: [
      {
        text: {
          en: 'The conventional view serves to protect us from the painful job of thinking.',
          zh: '传统观点的用处在于使我们免于思考这件苦差事。',
        },
        originalLang: 'en',
        source: { en: 'The Affluent Society', zh: '丰裕社会' },
        year: 1958,
      },
      {
        text: {
          en: 'The modern conservative is not even combative. He has become a peaceful combatant in a war he has already won. He does not engage the old arguments but simply assumes them to be settled.',
          zh: '现代保守主义者甚至不好斗。他已成为一场自己已经赢了的战争中的和平斗士。他不参与旧的论争，只是假定它们已经解决。',
        },
        originalLang: 'en',
        source: { en: 'The Affluent Society', zh: '丰裕社会' },
        year: 1958,
      },
      {
        text: {
          en: 'In a community where public services have failed to keep abreast of private consumption, things are very different. Here, in an atmosphere of private opulence and public squalor, the private goods have full sway.',
          zh: '在一个公共服务未能跟上私人消费步伐的社会里，情况截然不同。在这里，在私人富裕与公共贫困并存的氛围中，私人物品完全占据主导地位。',
        },
        originalLang: 'en',
        source: { en: 'The Affluent Society', zh: '丰裕社会' },
        year: 1958,
      },
      {
        text: {
          en: 'The salary of the chief executive of a large corporation is not a market award for achievement. It is frequently in the nature of a warm personal gesture by the individual to himself.',
          zh: '大公司首席执行官的薪酬并非市场对其成就的奖赏，它常常不过是个人对自己的一种温情脉脉的私人表示。',
        },
        originalLang: 'en',
        source: { en: 'Annals of an Abiding Liberal', zh: '一个坚定自由派的纪事' },
        year: 1979,
      },
      {
        text: {
          en: 'Under capitalism, man exploits man. Under communism, it\'s just the opposite.',
          zh: '在资本主义下，人剥削人。在共产主义下，恰恰相反。',
        },
        comment: { en: 'Classic Soviet-era joke that Galbraith is said to have repeated, not originally his.', zh: '这是一则经典的苏联时代笑话，据说加尔布雷思曾引用过，并非原创。' },
        originalLang: 'en',
        source: { en: 'Attributed', zh: '格言' },
      },
      {
        text: {
          en: 'The greater the wealth, the thicker will be the dirt. This indubitably describes a tendency of our time.',
          zh: '财富越多，污垢越厚。这无疑描述了我们这个时代的一种趋势。',
        },
        originalLang: 'en',
        source: { en: 'The Affluent Society', zh: '丰裕社会' },
        year: 1958,
      },
      {
        text: {
          en: 'Nothing so gives the illusion of intelligence as personal association with large sums of money.',
          zh: '没有什么比与大量金钱的私人关联更能制造智慧的幻觉了。',
        },
        originalLang: 'en',
        source: { en: 'Attributed', zh: '格言' },
      },
    ],
  },
  {
    slug: 'karl-polanyi',
    name: { en: 'Karl Polanyi', zh: '卡尔·波兰尼' },
    years: '1886–1964',
    nationality: { en: 'Hungarian-Canadian', zh: '匈牙利裔加拿大人' },
    bio: {
      en: 'Hungarian-Canadian economic historian and social scientist, best known for The Great Transformation, his analysis of the rise and consequences of the self-regulating market.',
      zh: '匈牙利裔加拿大经济史学家和社会科学家，以《大转型》一书闻名，深入分析了自我调节市场的兴起及其后果。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Karl_Polanyi',
      zh: 'https://zh.wikipedia.org/wiki/卡尔·波兰尼',
    },
    quotes: [
      {
        text: {
          en: 'To allow the market mechanism to be sole director of the fate of human beings and their natural environment would result in the demolition of society.',
          zh: '允许市场机制成为人类命运及其自然环境的唯一主宰，将导致社会的毁灭。',
        },
        originalLang: 'en',
        source: { en: 'The Great Transformation', zh: '大转型' },
        year: 1944,
      },
      {
        text: {
          en: 'The idea of a self-adjusting market implied a stark utopia. Such an institution could not exist for any length of time without annihilating the human and natural substance of society.',
          zh: '自我调节的市场这一理念意味着一个赤裸裸的乌托邦。这样一种制度不可能长期存在，而不毁灭社会的人力与自然基础。',
        },
        originalLang: 'en',
        source: { en: 'The Great Transformation', zh: '大转型' },
        year: 1944,
      },
      {
        text: {
          en: 'The economic system is, in effect, a mere function of social organization. Laissez-faire was planned; planning was not.',
          zh: '经济体系实际上只是社会组织的一个功能。自由放任是规划出来的；而规划本身却不是。',
        },
        originalLang: 'en',
        source: { en: 'The Great Transformation', zh: '大转型' },
        year: 1944,
      },
      {
        text: {
          en: 'Labor is only another name for a human activity which goes with life itself, which in its turn is not produced for sale but for entirely different reasons, nor can that activity be detached from the rest of life, be stored or mobilized.',
          zh: '劳动不过是人类活动的另一个名称，这种活动与生命本身相伴，而生命并非为了出售而被生产出来的，它出于完全不同的原因存在，这种活动也不能与生活的其他部分分离，不能被储存或调动。',
        },
        originalLang: 'en',
        source: { en: 'The Great Transformation', zh: '大转型' },
        year: 1944,
      },
      {
        text: {
          en: 'Robbed of the protective covering of cultural institutions, human beings would perish from the effects of social exposure; they would die as the victims of acute social dislocation through vice, perversion, crime, and starvation.',
          zh: '一旦被剥去文化制度的保护外衣，人类将因暴露于社会之中而灭亡；他们将作为急剧社会错位的受害者，死于堕落、变态、犯罪和饥饿。',
        },
        originalLang: 'en',
        source: { en: 'The Great Transformation', zh: '大转型' },
        year: 1944,
      },
      {
        text: {
          en: 'The true criticism of market society is not that it was based on economics — in a sense, every society must be — but that its economy was based on self-interest.',
          zh: '对市场社会的真正批判不在于它以经济为基础——从某种意义上说，每个社会都必须如此——而在于它的经济以自利为基础。',
        },
        originalLang: 'en',
        source: { en: 'The Great Transformation', zh: '大转型' },
        year: 1944,
      },
      {
        text: {
          en: 'Nineteenth-century civilization rested on four institutions. The first was the balance-of-power system. The second was the international gold standard. The third was the self-regulating market. The fourth was the liberal state. Of these institutions the gold standard proved crucial; its fall was the proximate cause of the catastrophe.',
          zh: '十九世纪文明建立在四个制度之上。第一是均势体系，第二是国际金本位，第三是自我调节的市场，第四是自由主义国家。在这些制度中，金本位证明是关键性的；它的崩溃是这场灾难的直接原因。',
        },
        originalLang: 'en',
        source: { en: 'The Great Transformation', zh: '大转型' },
        year: 1944,
      },
    ],
  },
  {
    slug: 'thorstein-veblen',
    name: { en: 'Thorstein Veblen', zh: '托斯丹·凡勃伦' },
    years: '1857–1929',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American economist and sociologist, known for his critique of consumer culture and his concepts of conspicuous consumption and the leisure class.',
      zh: '美国经济学家和社会学家，以其对消费文化的批判以及炫耀性消费和有闲阶级等概念著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Thorstein_Veblen',
      zh: 'https://zh.wikipedia.org/wiki/托斯丹·凡勃伦',
    },
    quotes: [
      {
        text: {
          en: 'Conspicuous consumption of valuable goods is a means of reputability to the gentleman of leisure.',
          zh: '对贵重商品的炫耀性消费，是有闲绅士获取声望的手段。',
        },
        originalLang: 'en',
        source: { en: 'The Theory of the Leisure Class', zh: '有闲阶级论' },
        year: 1899,
      },
      {
        text: {
          en: 'In order to gain and to hold the esteem of men it is not sufficient merely to possess wealth or power. The wealth or power must be put in evidence, for esteem is awarded only on evidence.',
          zh: '要获得并保持他人的尊重，仅仅拥有财富或权力是不够的。财富或权力必须被展示出来，因为尊重只会授予有据可查者。',
        },
        originalLang: 'en',
        source: { en: 'The Theory of the Leisure Class', zh: '有闲阶级论' },
        year: 1899,
      },
      {
        text: {
          en: 'The basis on which good repute in any highly organized industrial community ultimately rests is pecuniary strength; and the means of showing pecuniary strength, and so of gaining or retaining a good name, are leisure and a conspicuous consumption of goods.',
          zh: '在任何高度组织化的工业社会中，良好声誉最终依赖的基础是金钱实力；而展示金钱实力、从而获取或保持好名声的手段，就是有闲和对商品的炫耀性消费。',
        },
        originalLang: 'en',
        source: { en: 'The Theory of the Leisure Class', zh: '有闲阶级论' },
        year: 1899,
      },
      {
        text: {
          en: 'Invention is the mother of necessity.',
          zh: '发明是需求之母。',
        },
        originalLang: 'en',
        source: { en: 'The Instinct of Workmanship', zh: '做工的本能' },
        year: 1914,
      },
      {
        text: {
          en: 'The outcome of any serious research can only be to make two questions grow where only one grew before.',
          zh: '任何严肃研究的结果，只能是使原来的一个问题变成两个。',
        },
        originalLang: 'en',
        source: { en: 'The Place of Science in Modern Civilisation', zh: '科学在现代文明中的地位' },
        year: 1906,
      },
      {
        text: {
          en: 'All business sagacity reduces itself in the last analysis to a judicious use of sabotage.',
          zh: '一切商业精明，归根结底不过是对蓄意破坏的审慎运用。',
        },
        originalLang: 'en',
        source: { en: 'The Nature of Peace', zh: '和平的本质' },
        year: 1917,
      },
      {
        text: {
          en: 'The habit of distinguishing and classifying the various purposes and directions of activity prevails of necessity always and everywhere; for it is indispensable in reaching a working theory or scheme of life.',
          zh: '区分和归类各种活动目的与方向的习惯，必然始终且处处盛行；因为它是达成一套可行的生活理论或方案不可或缺的条件。',
        },
        originalLang: 'en',
        source: { en: 'The Theory of the Leisure Class', zh: '有闲阶级论' },
        year: 1899,
      },
    ],
  },
  {
    slug: 'joan-robinson',
    name: { en: 'Joan Robinson', zh: '琼·罗宾逊' },
    years: '1903–1983',
    nationality: { en: 'British', zh: '英国' },
    bio: {
      en: 'British economist, a central figure in post-Keynesian economics, known for her work on imperfect competition and her sharp critiques of orthodox economic theory.',
      zh: '英国经济学家，后凯恩斯主义经济学的核心人物，以其对不完全竞争的研究和对正统经济理论的犀利批判著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Joan_Robinson',
      zh: 'https://zh.wikipedia.org/wiki/琼·罗宾逊',
    },
    quotes: [
      {
        text: {
          en: 'The purpose of studying economics is not to acquire a set of ready-made answers to economic questions, but to learn how to avoid being deceived by economists.',
          zh: '学习经济学的目的不是获得一套经济问题的现成答案，而是学会如何不被经济学家所欺骗。',
        },
        originalLang: 'en',
        source: { en: 'Marx, Marshall and Keynes', zh: '马克思、马歇尔与凯恩斯' },
        year: 1955,
      },
      {
        text: {
          en: 'The misery of being exploited by capitalists is nothing compared to the misery of not being exploited at all.',
          zh: '被资本家剥削的痛苦，与根本不被剥削的痛苦相比，算不了什么。',
        },
        originalLang: 'en',
        source: { en: 'Economic Philosophy', zh: '经济哲学' },
        year: 1962,
      },
      {
        text: {
          en: 'Any government which had both the power and the will to remedy the major defects of the capitalist system would have the will and the power to abolish it altogether.',
          zh: '任何既有权力又有意愿矫正资本主义制度重大缺陷的政府，都会有意愿和权力将其彻底废除。',
        },
        originalLang: 'en',
        source: { en: 'Economic Philosophy', zh: '经济哲学' },
        year: 1962,
      },
      {
        text: {
          en: 'Economics limps along with one foot in untested hypotheses and the other in untestable slogans.',
          zh: '经济学一瘸一拐地前行，一只脚踩在未经检验的假说上，另一只脚踩在无法检验的口号上。',
        },
        originalLang: 'en',
        source: { en: 'Economic Philosophy', zh: '经济哲学' },
        year: 1962,
      },
      {
        text: {
          en: 'There is no such thing as a normal period of history. Normality is a fiction of economic textbooks.',
          zh: '历史上不存在所谓的正常时期。常态不过是经济学教科书中的虚构。',
        },
        originalLang: 'en',
        source: { en: 'Economic Philosophy', zh: '经济哲学' },
        year: 1962,
      },
      {
        text: {
          en: 'Marx, however much he may have been wrong in detail, understood the nature of capitalism better than anyone else. His central theme — that private property in the means of production is a social relation, not a natural fact — remains as valid as ever.',
          zh: '马克思尽管在细节上可能有误，但他对资本主义本质的理解超过任何人。他的核心主题——生产资料的私有制是一种社会关系，而非自然事实——一如既往地正确。',
        },
        originalLang: 'en',
        source: { en: 'An Essay on Marxian Economics', zh: '论马克思主义经济学' },
        year: 1942,
      },
    ],
  },
  {
    slug: 'albert-hirschman',
    name: { en: 'Albert O. Hirschman', zh: '阿尔伯特·赫希曼' },
    years: '1915–2012',
    nationality: { en: 'German-American', zh: '德裔美国人' },
    bio: {
      en: 'German-American economist and social theorist, known for his concepts of exit, voice, and loyalty, and for his nuanced analysis of economic development and political change.',
      zh: '德裔美国经济学家和社会理论家，以退出、呼吁与忠诚的概念以及对经济发展和政治变革的精细分析著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Albert_O._Hirschman',
      zh: 'https://zh.wikipedia.org/wiki/阿尔伯特·赫希曼',
    },
    quotes: [
      {
        text: {
          en: 'The customer who, dissatisfied with the product of one firm, shifts to that of another, uses the market to defend his welfare or to improve his position; and he also sets in motion market forces which may induce recovery on the part of the firm that has declined. This is the exit option.',
          zh: '对某家企业的产品不满意而转向另一家的顾客，利用市场来维护自己的福利或改善自己的处境；他同时也启动了可能促使衰落企业复苏的市场力量。这就是退出选项。',
        },
        originalLang: 'en',
        source: { en: 'Exit, Voice, and Loyalty', zh: '退出、呼吁与忠诚' },
        year: 1970,
      },
      {
        text: {
          en: 'Voice is political action par excellence. The decision to voice one\'s dissatisfaction rather than exit is the decision to attempt to change practices from within.',
          zh: '呼吁是卓越的政治行动。选择表达不满而非退出，就是决定从内部改变现行做法。',
        },
        originalLang: 'en',
        source: { en: 'Exit, Voice, and Loyalty', zh: '退出、呼吁与忠诚' },
        year: 1970,
      },
      {
        text: {
          en: 'Creativity always comes as a surprise to us; therefore we can never count on it and we dare not believe in it until it has happened.',
          zh: '创造力总是出人意料地到来；因此我们永远不能指望它，也不敢在它发生之前相信它。',
        },
        originalLang: 'en',
        source: { en: 'Essays in Trespassing', zh: '越界随笔' },
        year: 1981,
      },
      {
        text: {
          en: 'The Hiding Hand principle suggests that ignorance of the difficulties ahead can be a blessing in disguise — people start projects they would never have begun had they known the full cost, and then find creative ways to overcome the unexpected obstacles.',
          zh: '遮蔽之手原理表明，对前方困难的无知可能是因祸得福——人们开始了那些若知道全部代价便永远不会启动的项目，然后找到了克服意外障碍的创造性方法。',
        },
        originalLang: 'en',
        source: { en: 'Development Projects Observed', zh: '发展项目观察' },
        year: 1967,
      },
      {
        text: {
          en: 'There is a certain sterility in the manner of thinking that contrasts reform with revolution. In the first place, revolutionary change has often been preceded by attempts at reform. And second, reform can be so fundamental as to deserve being called revolutionary.',
          zh: '将改良与革命对立的思维方式有一种不毛之感。首先，革命性变革之前往往有过改良的尝试。其次，改良可以如此根本，以至于值得被称为革命。',
        },
        originalLang: 'en',
        source: { en: 'A Bias for Hope', zh: '偏向希望' },
        year: 1971,
      },
      {
        text: {
          en: 'Having encountered serious problems and setbacks, I now know that these difficulties, which I would never have wished for and which my opponents foretold with much relish, were in fact essential to whatever success the project eventually achieved.',
          zh: '在遇到严重问题和挫折之后，我现在知道这些困难——我从未希望遇到、而我的对手们幸灾乐祸地预言了的——实际上对这个项目最终取得的任何成就都至关重要。',
        },
        originalLang: 'en',
        source: { en: 'Development Projects Observed', zh: '发展项目观察' },
        year: 1967,
      },
      {
        text: {
          en: 'The rhetoric of reaction claims that any purposive action to improve the political, social, or economic order only serves to exacerbate the condition one wishes to remedy. This is the perversity thesis.',
          zh: '反动的修辞声称，任何旨在改善政治、社会或经济秩序的有目的行动，只会加剧人们想要纠正的状况。这就是悖谬论题。',
        },
        originalLang: 'en',
        source: { en: 'The Rhetoric of Reaction', zh: '反动的修辞' },
        year: 1991,
      },
    ],
  },
  {
    slug: 'daron-acemoglu',
    name: { en: 'Daron Acemoglu', zh: '达龙·阿杰姆奥卢' },
    years: '1967–',
    nationality: { en: 'Turkish-American', zh: '土耳其裔美国人' },
    bio: {
      en: 'Turkish-American economist, Nobel laureate, known for his research on the role of institutions in economic development and the political economy of technology and inequality.',
      zh: '土耳其裔美国经济学家，诺贝尔经济学奖得主，以其关于制度在经济发展中的作用以及技术与不平等的政治经济学研究著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Daron_Acemoglu',
      zh: 'https://zh.wikipedia.org/wiki/达龙·阿杰姆奥卢',
    },
    quotes: [
      {
        text: {
          en: 'Nations fail because their extractive economic institutions do not create the incentives needed for people to save, invest, and innovate. Extractive political institutions support these economic institutions by cementing the power of those who benefit from the extraction.',
          zh: '国家之所以失败，是因为其榨取性经济制度没有创造出激励人们储蓄、投资和创新的动力。榨取性政治制度通过巩固那些从榨取中获益者的权力来支撑这些经济制度。',
        },
        originalLang: 'en',
        source: { en: 'Why Nations Fail', zh: '国家为什么会失败' },
        year: 2012,
      },
      {
        text: {
          en: 'Inclusive economic institutions are forged on foundations laid by inclusive political institutions, which broadly distribute power in society and constrain its arbitrary exercise. Such political institutions also make it harder for others to usurp power and undermine the foundations of inclusive institutions.',
          zh: '包容性经济制度建立在包容性政治制度所奠定的基础之上，后者在社会中广泛分配权力并约束其任意行使。这种政治制度也使他人更难篡夺权力和破坏包容性制度的根基。',
        },
        originalLang: 'en',
        source: { en: 'Why Nations Fail', zh: '国家为什么会失败' },
        year: 2012,
      },
      {
        text: {
          en: 'Growth under extractive institutions differs in nature from growth under inclusive institutions. Most importantly, it is not sustained. By their very nature, extractive institutions do not foster creative destruction and generate at best only a limited amount of technological progress.',
          zh: '榨取性制度下的增长与包容性制度下的增长在本质上不同。最重要的是，它不可持续。从本质上说，榨取性制度不会促进创造性破坏，充其量只能产生有限的技术进步。',
        },
        originalLang: 'en',
        source: { en: 'Why Nations Fail', zh: '国家为什么会失败' },
        year: 2012,
      },
      {
        text: {
          en: 'There is no necessity for a society to develop or adopt the institutions that are best for economic growth or the welfare of its citizens, because other institutions may be even better for those who control politics and political institutions.',
          zh: '一个社会没有必然理由去发展或采纳最有利于经济增长或公民福祉的制度，因为其他制度对于那些控制政治和政治制度的人来说可能更为有利。',
        },
        originalLang: 'en',
        source: { en: 'Why Nations Fail', zh: '国家为什么会失败' },
        year: 2012,
      },
      {
        text: {
          en: 'Technology is not destiny. The choices that societies and their leaders make about technology determine whether it leads to shared prosperity or deepens inequality and erodes democracy.',
          zh: '技术不是宿命。社会及其领导者对技术做出的选择，决定了技术是通向共同繁荣，还是加深不平等并侵蚀民主。',
        },
        originalLang: 'en',
        source: { en: 'Power and Progress', zh: '权力与进步' },
        year: 2023,
      },
      {
        text: {
          en: 'The history of technology is not one of relentless progress benefiting everyone. It is a history of choices, contested visions, and struggles over who gains and who loses.',
          zh: '技术的历史并非一部惠及所有人的不懈进步史。它是一部关于选择、对立愿景以及谁得谁失的斗争史。',
        },
        originalLang: 'en',
        source: { en: 'Power and Progress', zh: '权力与进步' },
        year: 2023,
      },
      {
        text: {
          en: 'The central problem of politics in many developing countries is that those in power have strong incentives to maintain extractive institutions — not because they are unaware of the costs to society but because they reap personal benefits.',
          zh: '许多发展中国家的核心政治问题在于，当权者有强烈的激励去维持榨取性制度——并非因为他们不知道这对社会的代价，而是因为他们从中获取了个人利益。',
        },
        originalLang: 'en',
        source: { en: 'Why Nations Fail', zh: '国家为什么会失败' },
        year: 2012,
      },
    ],
  },
  {
    slug: 'ha-joon-chang',
    name: { en: 'Ha-Joon Chang', zh: '张夏准' },
    years: '1963–',
    nationality: { en: 'South Korean-British', zh: '韩裔英国人' },
    bio: {
      en: 'South Korean-British economist, known for his critique of free-market orthodoxy and his advocacy for heterodox economic policies, including the role of industrial policy in development.',
      zh: '韩裔英国经济学家，以批判自由市场正统观念和倡导异端经济政策（包括产业政策在发展中的作用）著称。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Ha-Joon_Chang',
      zh: 'https://zh.wikipedia.org/wiki/张夏准',
    },
    quotes: [
      {
        text: {
          en: 'Virtually all of today\'s rich countries used protectionist policies and other forms of government intervention to develop their economies. Having climbed to the top, they then kicked away the ladder by which they had risen, preaching free trade and free markets to developing nations.',
          zh: '几乎所有当今的富裕国家都曾使用保护主义政策和其他形式的政府干预来发展经济。在攀上顶峰之后，他们便踢掉了自己赖以攀升的梯子，转而向发展中国家鼓吹自由贸易和自由市场。',
        },
        originalLang: 'en',
        source: { en: 'Kicking Away the Ladder', zh: '富国的伪善' },
        year: 2002,
      },
      {
        text: {
          en: 'There is no such thing as a free market. Every market has some rules and boundaries that restrict freedom of choice. A market looks free only because we so unconditionally accept its underlying restrictions that we fail to see them.',
          zh: '不存在所谓的自由市场。每个市场都有限制选择自由的某些规则和边界。一个市场看起来自由，只是因为我们如此无条件地接受了其背后的限制，以至于看不到它们。',
        },
        originalLang: 'en',
        source: { en: '23 Things They Don\'t Tell You About Capitalism', zh: '资本主义的真相' },
        year: 2010,
      },
      {
        text: {
          en: 'People \'over-invest\' in a college degree because the \'torture premium\' in the labour market correctly penalizes them for not having what is, in effect, a very expensive signalling device.',
          zh: '人们对大学文凭"过度投资"，是因为劳动力市场中的"折磨溢价"正确地惩罚了他们没有拥有这一实际上非常昂贵的信号装置。',
        },
        originalLang: 'en',
        source: { en: '23 Things They Don\'t Tell You About Capitalism', zh: '资本主义的真相' },
        year: 2010,
      },
      {
        text: {
          en: 'Making rich people richer doesn\'t make the rest of us richer. Despite the fact that we now have the richest people in history, the vast majority in the rich countries have seen their incomes stagnate.',
          zh: '让富人更富并不会让我们其余人更富。尽管我们现在拥有历史上最富有的人，但富裕国家的绝大多数人已看到自己的收入停滞不前。',
        },
        originalLang: 'en',
        source: { en: '23 Things They Don\'t Tell You About Capitalism', zh: '资本主义的真相' },
        year: 2010,
      },
      {
        text: {
          en: 'Once you realize that trickle-down economics does not work, you will see the excessive tax cuts for the rich as what they are — a simple upward redistribution of income, rather than a way to make us all richer.',
          zh: '一旦你认识到涓滴经济学不管用，你就会看清对富人的过度减税的本质——它只是一种简单的收入向上再分配，而非让我们所有人都更富有的方式。',
        },
        originalLang: 'en',
        source: { en: '23 Things They Don\'t Tell You About Capitalism', zh: '资本主义的真相' },
        year: 2010,
      },
      {
        text: {
          en: 'The free market doesn\'t exist. What we have are different degrees of regulation, different ways of organizing economic activity. The question is not whether to regulate, but how.',
          zh: '自由市场并不存在。我们所拥有的是不同程度的监管、不同的经济活动组织方式。问题不在于是否监管，而在于如何监管。',
        },
        originalLang: 'en',
        source: { en: '23 Things They Don\'t Tell You About Capitalism', zh: '资本主义的真相' },
        year: 2010,
      },
      {
        text: {
          en: 'Economics is a political argument. It is not — and can never be — a science; there are no objective truths in economics that can be established independently of political, and frequently moral, judgements.',
          zh: '经济学是一种政治论辩。它不是——也永远不可能是——一门科学；经济学中没有可以独立于政治判断（而且往往是道德判断）而确立的客观真理。',
        },
        originalLang: 'en',
        source: { en: 'Economics: The User\'s Guide', zh: '经济学使用指南' },
        year: 2014,
      },
    ],
  },
  {
    slug: 'thomas-piketty',
    name: { en: 'Thomas Piketty', zh: '托马斯·皮凯蒂' },
    years: '1971–',
    nationality: { en: 'French', zh: '法国' },
    bio: {
      en: 'French economist, known for his work on wealth and income inequality, particularly the argument that the rate of return on capital tends to exceed the rate of economic growth.',
      zh: '法国经济学家，以其关于财富和收入不平等的研究闻名，尤其是资本收益率倾向于超过经济增长率这一论点。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Thomas_Piketty',
      zh: 'https://zh.wikipedia.org/wiki/托马斯·皮凯蒂',
    },
    quotes: [
      {
        text: {
          en: 'When the rate of return on capital exceeds the rate of growth of output and income, as it did in the nineteenth century and seems quite likely to do again in the twenty-first, capitalism automatically generates arbitrary and unsustainable inequalities that radically undermine the meritocratic values on which democratic societies are based.',
          zh: '当资本收益率超过产出和收入增长率时——正如十九世纪的情况，而且在二十一世纪似乎很可能再次出现——资本主义就会自动产生任意的、不可持续的不平等，从根本上损害民主社会赖以立足的精英价值观。',
        },
        original: 'Quand le taux de rendement du capital dépasse durablement le taux de croissance de la production et du revenu — ce qui était le cas jusqu\'au XIXe siècle, et risque fort de redevenir la norme au XXIe siècle —, le capitalisme produit mécaniquement des inégalités insoutenables, arbitraires, remettant radicalement en cause les valeurs méritocratiques sur lesquelles se fondent nos sociétés démocratiques.',
        originalLang: 'fr',
        source: { en: 'Capital in the Twenty-First Century', zh: '二十一世纪资本论' },
        year: 2013,
      },
      {
        text: {
          en: 'The history of inequality is shaped by the way economic, social, and political actors view what is just and what is not, as well as by the relative power of those actors and the collective choices that result.',
          zh: '不平等的历史是由经济、社会和政治行动者对何为公正、何为不公正的看法，以及这些行动者的相对权力和由此产生的集体选择所塑造的。',
        },
        original: 'L\'histoire de la répartition des richesses est toujours une histoire profondément politique, et elle ne saurait se résumer aux seuls mécanismes économiques.',
        originalLang: 'fr',
        source: { en: 'Capital in the Twenty-First Century', zh: '二十一世纪资本论' },
        year: 2013,
      },
      {
        text: {
          en: 'Social distinctions can be based only on common utility.',
          zh: '社会差别只能以共同利益为基础。',
        },
        originalLang: 'en',
        source: { en: 'Capital in the Twenty-First Century', zh: '二十一世纪资本论' },
        year: 2013,
        comment: {
          en: 'Piketty quotes Article 1 of the 1789 Declaration of the Rights of Man to frame his argument.',
          zh: '皮凯蒂引用1789年《人权宣言》第一条来构建其论证框架。',
        },
      },
      {
        text: {
          en: 'The principal destabilizing force has to do with the fact that the private rate of return on capital, r, can be significantly higher for long periods of time than the rate of growth of income and output, g. The inequality r > g implies that wealth accumulated in the past grows more rapidly than output and wages.',
          zh: '主要的不稳定力量与以下事实有关：私人资本收益率 r 可以在长时期内显著高于收入和产出增长率 g。不等式 r > g 意味着过去积累的财富比产出和工资增长得更快。',
        },
        original: 'La force de déstabilisation principale est liée au fait que le taux de rendement privé du capital r peut être durablement et significativement plus élevé que le taux de croissance du revenu et de la production g.',
        originalLang: 'fr',
        source: { en: 'Capital in the Twenty-First Century', zh: '二十一世纪资本论' },
        year: 2013,
      },
      {
        text: {
          en: 'Refusing to deal with numbers rarely serves the interests of the least well-off. It is hardly surprising that the wealthiest members of society often prefer not to talk about distribution.',
          zh: '拒绝面对数字很少能服务于最弱势群体的利益。最富有的社会成员往往不愿谈论分配问题，这毫不奇怪。',
        },
        original: 'Le refus des chiffres sert rarement les intérêts des plus modestes.',
        originalLang: 'fr',
        source: { en: 'Capital in the Twenty-First Century', zh: '二十一世纪资本论' },
        year: 2013,
      },
      {
        text: {
          en: 'Over a long period of time, the main force in favor of greater equality has been the diffusion of knowledge and skills.',
          zh: '从长期来看，推动更大平等的主要力量是知识和技能的传播。',
        },
        original: 'Sur le long terme, la force principale en faveur d\'une plus grande égalité a été la diffusion des connaissances et des compétences.',
        originalLang: 'fr',
        source: { en: 'Capital in the Twenty-First Century', zh: '二十一世纪资本论' },
        year: 2013,
      },
      {
        text: {
          en: 'Every human society must justify its inequalities: unless reasons for them are found, the whole political and social edifice threatens to collapse.',
          zh: '每个人类社会都必须为其不平等提供正当理由：如果找不到理由，整个政治和社会大厦就有坍塌的危险。',
        },
        original: 'Toute société humaine doit justifier ses inégalités : il faut leur trouver des raisons, faute de quoi c\'est l\'ensemble de l\'édifice politique et social qui menace de s\'effondrer.',
        originalLang: 'fr',
        source: { en: 'Capital and Ideology', zh: '资本与意识形态' },
        year: 2019,
      },
    ],
  },
  {
    slug: 'hyman-minsky',
    name: { en: 'Hyman Minsky', zh: '海曼·明斯基' },
    years: '1919–1996',
    nationality: { en: 'American', zh: '美国' },
    bio: {
      en: 'American economist known for his financial instability hypothesis, which argues that stability in financial markets inevitably leads to speculation, over-leveraging, and eventual crisis.',
      zh: '美国经济学家，以其金融不稳定假说闻名，该假说认为金融市场的稳定不可避免地导致投机、过度杠杆化和最终的危机。',
    },
    wikipedia: {
      en: 'https://en.wikipedia.org/wiki/Hyman_Minsky',
      zh: 'https://zh.wikipedia.org/wiki/海曼·明斯基',
    },
    quotes: [
      {
        text: {
          en: 'Stability is destabilizing. The more stable things become and the longer things are stable, the more unstable they will be when the crisis hits.',
          zh: '稳定本身就是不稳定的根源。事情越稳定、稳定的时间越长，危机到来时就会越不稳定。',
        },
        originalLang: 'en',
        source: { en: 'Stabilizing an Unstable Economy', zh: '稳定不稳定的经济' },
        year: 1986,
      },
      {
        text: {
          en: 'Success breeds a disregard of the possibility of failure; the absence of serious financial difficulties over a substantial period leads to the development of a euphoric economy in which increasing short-term financing of long positions becomes a normal way of life.',
          zh: '成功滋生了对失败可能性的漠视；相当长一段时期内严重金融困难的缺席，导致了一种亢奋经济的发展——在其中，以越来越多的短期融资来支撑长期头寸成为一种正常的生活方式。',
        },
        originalLang: 'en',
        source: { en: 'Stabilizing an Unstable Economy', zh: '稳定不稳定的经济' },
        year: 1986,
      },
      {
        text: {
          en: 'There is no final solution to the problems of organizing economic life. There is nothing to do but to keep trying.',
          zh: '组织经济生活的问题没有最终解决方案。我们能做的只是不断尝试。',
        },
        originalLang: 'en',
        source: { en: 'Stabilizing an Unstable Economy', zh: '稳定不稳定的经济' },
        year: 1986,
      },
      {
        text: {
          en: 'A fundamental characteristic of our economy is that the financial system swings between robustness and fragility and these swings are an integral part of the process that generates business cycles.',
          zh: '我们经济的一个根本特征是，金融体系在稳健与脆弱之间摇摆，而这些摇摆是产生经济周期的过程的有机组成部分。',
        },
        originalLang: 'en',
        source: { en: 'Can "It" Happen Again?', zh: '"它"会再次发生吗？' },
        year: 1982,
      },
      {
        text: {
          en: 'The first theorem of the financial instability hypothesis is that the economy has financing regimes under which it is stable, and financing regimes in which it is unstable. The second theorem is that over periods of prolonged prosperity, the economy transits from financial relations that make for a stable system to financial relations that make for an unstable system.',
          zh: '金融不稳定假说的第一定理是：经济存在使其稳定的融资体制，也存在使其不稳定的融资体制。第二定理是：在长期繁荣中，经济会从有利于系统稳定的金融关系过渡到有利于系统不稳定的金融关系。',
        },
        originalLang: 'en',
        source: { en: 'The Financial Instability Hypothesis', zh: '金融不稳定假说' },
        year: 1992,
      },
      {
        text: {
          en: 'In Ponzi finance, the cash flows from operations are not sufficient to fulfill either the repayment of principal or the interest due on outstanding debts by their cash flows from operations. Such units can sell assets or borrow. Borrowing to pay interest is Ponzi finance.',
          zh: '在庞氏融资中，经营性现金流不足以偿还未偿债务的本金或利息。这类单位可以出售资产或借款。以借款支付利息就是庞氏融资。',
        },
        originalLang: 'en',
        source: { en: 'Stabilizing an Unstable Economy', zh: '稳定不稳定的经济' },
        year: 1986,
      },
      {
        text: {
          en: 'The processes of a capitalist economy are essentially financial. Money is not just a veil. The financial structure is a central determinant of the behavior of a capitalist economy.',
          zh: '资本主义经济的过程本质上是金融性的。货币不仅仅是一层面纱。金融结构是资本主义经济行为的核心决定因素。',
        },
        originalLang: 'en',
        source: { en: 'Stabilizing an Unstable Economy', zh: '稳定不稳定的经济' },
        year: 1986,
      },
    ],
  },
];
