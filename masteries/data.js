var data = [
    // Ferocity
    [
        {
            index: 1,
            name: "Ярость",
			tier: 0,
            ranks: 5,
            desc: "+#% скорости атаки",
            rankInfo: [0.8, 1.6, 2.4, 3.2, 4.0],
        },
        {
            index: 3,
            name: "Колдовство",
			tier: 0,
            ranks: 5,
            desc: "Урон от заклинаний увеличен на +#%",
            rankInfo: [0.4, 0.8, 1.2, 1.6, 2.0],
        },
        {
            index: 5,
            name: "Палка о двух концах",
			tier: 1,
            ranks: 1,
            desc: "В ближнем бою: Вы наносите на 3% больше урона и получаете на 1.5% больше урона. В дальнем бою: Вы наносите и получаете на 2% больше урона.",
            rankInfo: [],
        },
        {
            index: 6,
            name: "Пир",
			tier: 1,
            ranks: 1,
            desc: "При убийстве бойца восстанавливает 20 Здоровья (20 секунд перезарядки)",
            rankInfo: [],
        },
        {
            index: 9,
            name: "Вампиризм",
			tier: 2,
            ranks: 5,
            desc: "+#% вампиризма и магического вампиризма",
            rankInfo: [0.5, 1.0, 1.5, 2, 2.5],
        },
        {
            index: 11,
            name: "Врожденный талант",
			tier: 2,
            ranks: 5,
            desc: "# Силы атаки и # Силы умений на 18 уровне (# Силы атаки и # Силы умений за уровень)",
            rankInfo: [2, 4, 6, 8, 10],
			rankInfo2: [3, 6, 9, 12, 15],
			perLevel: [.11, .22, .33, .44, .55],
			perLevel2: [.16, .32, .5, .66, .88],
        },
        {
            index: 13,
            name: "Охотник за головами",
			tier: 3,
            ranks: 1,
            desc: "На 1% больше урона за каждого уникального убитого чемпиона.",
            rankInfo: [],
        },
        {
            index: 14,
            name: "Угнетатель",
			tier: 3,
            ranks: 1,
            desc: "На 2.5% больше урона по целям находящимся под эффектом контроля (замедление, оглушение, сковывание, провокация и т.д)",
            rankInfo: [],
        },
		{
            index: 17,
            name: "Удары грома",
			tier: 4,
            ranks: 5,
            desc: "+#% Пробивания брони",
            rankInfo: [1.4, 2.8, 4.2, 5.6, 7],
        },
        {
            index: 19,
            name: "Пронзающие мысли",
			tier: 4,
            ranks: 5,
            desc: "+#% магического пробивания",
            rankInfo: [1.4, 2.8, 4.2, 5.6, 7],
        },
        {
            index: 21,
            name: "Кровожадность",
			tier: 5,
            ranks: 1,
            desc: "Критические удары восстанавливают на 15% от нанесенного урона и дают 20% скорости атаки на 4 секунды (2 секунд перезарядки).",
            rankInfo: [],
        },
        {
            index: 22,
            name: "Жажда битв",
			tier: 5,
            ranks: 1,
            desc: "Автоатаки и заклинания дают заряд Жажды на 5 секунд (до 10 зарядов). Каждый заряд Жажды добавляет 1-8 дополнительного физического урона к автоатакам против чемпионов.",
            rankInfo: [],
        },
		{
            index: 23,
            name: "Прикосновение Смерти",
			tier: 5,
            ranks: 1,
            desc: "Заклинания наносящие урон наносят вражеским чемпионам 6 + 50% от дополнительной силы атаки и 20% от силы заклинаний магическим уроном за 3 секунд (Заклинания наносящие урон по площади и переодический урон нанесут половину этого урона за 1.5 секунды).",
            rankInfo: [],
        },
    ],
	// Cunning
    [
        {
            index: 1,
            name: "Странник",
			tier: 0,
            ranks: 5,
            desc: "+#% к скорости передвижения вне боя",
            rankInfo: [0.6, 1.2, 1.8, 2.4, 3],
        },
        {
            index: 3,
            name: "Свирепость",
			tier: 0,
            ranks: 5,
            desc: "Автоатаки и заклинания направленные на одну цель наносят # дополнительного урона по миньонам и монстрам",
            rankInfo: [1, 2, 3, 4, 5],
        },
        {
            index: 5,
            name: "Руническое Родство",
			tier: 1,
            ranks: 1,
            desc: "Усиления с монстров в лесу длятся на 15% дольше, включая эпичных монстров и краба.",
            rankInfo: [],
        },
        {
            index: 6,
            name: "Секретный тайник",
			tier: 1,
            ranks: 1,
            desc: "Зелья, фляги и эликсиры длятся на 10% дольше. Зелья заменяются бисквитами, которые восстанавливают 20 Здоровья и 10 Маны сразу после использования.",
            rankInfo: [],
        },
        {
            index: 9,
            name: "Беспощадность",
			tier: 2,
            ranks: 5,
            desc: "Наносит на #% больше урона по чемпионам, чье здоровье ниже 40% Здоровья.",
            rankInfo: [1, 2, 3, 4, 5],
        },
        {
            index: 11,
            name: "Медитация",
			tier: 2,
            ranks: 5,
            desc: "Раз в 5 секунд, восстанавливает #% недостающей маны.",
            rankInfo: [0.3, 0.6, 0.9, 1.2, 1.5],
        },
        {
            index: 13,
            name: "Бандит",
			tier: 3,
            ranks: 1,
            desc: "Дает 1 золото за ближайших миньонов убитых союзниками. Дает 3 золота (или 10, если Ваш чемпион ближнего боя) при ударе вражеского чемпиона автоатакой (Перезаряжается каждые 5 секунд).",
            rankInfo: [],
        },
        {
            index: 14,
            name: "Опасная игра",
			tier: 3,
            ranks: 1,
            desc: "Убийство чемпиона или содействие восстанавливает 5% недостающего здоровья и маны.",
            rankInfo: [],
        },
		{
            index: 17,
            name: "Аскетизм",
			tier: 4,
            ranks: 5,
            desc: "# Пробивания брони и # Магического пробивания за уровень",
            rankInfo: [0.6, 1.2, 1.8, 2.4, 3.0],
			rankInfo2: [0.06, 0.12, 0.18, 0.24, 0.3],
        },
        {
            index: 19,
            name: "Интеллект",
			tier: 4,
            ranks: 5,
            desc: "Ваше максимальное сокращение перезарядки увеличено на #% (макс. 45%), дает #% Сокращения Перезарядки.",
            rankInfo: [1, 2, 3, 4, 5],
			rankInfo2: [1, 2, 3, 4, 5],
        },
        {
            index: 21,
            name: "Штормовой порыв",
			tier: 5,
            ranks: 1,
            desc: "Нанесение 30% урона от максимального здоровья чемпиона за 2 секунды дает 35% скорости передвижения на 3 секунды (10 секунд перезарядки).",
            rankInfo: [],
        },
        {
            index: 22,
            name: "Приказ Громоборца",
			tier: 5,
            ranks: 1,
            desc: "Каждая третья автоатака или заклинание по вражескому чемпиону наносит 10 урона за уровень + 20% дополнительной силы атаки и 10% силы заклинаний в виде магического урона врагам по области вокруг чемпиона (30 секунд перезарядки).",
            rankInfo: [],
        },
		{
            index: 23,
            name: "Благословение Ветра",
			tier: 5,
            ranks: 1,
            desc: "Лечение и щиты на 10% сильнее. Щиты и лечение повышают сопротивление цели на 15% на 3 секунды (не действует при применении на себя).",
            rankInfo: [],
        },
    ],
	    // Resolve
    [
        {
            index: 1,
            name: "Восстановление",
			tier: 0,
            ranks: 5,
            desc: "+# регенерации здоровья за 5 секунд",
            rankInfo: [0.4, 0.8, 1.2, 1.6, 2.0],
        },
        {
            index: 3,
            name: "Стойкость",
			tier: 0,
            ranks: 5,
            desc: "+#% дополнительной брони и магического сопротивления",
            rankInfo: [1.2, 2.4, 3.6, 4.8, 6],
        },
        {
            index: 5,
            name: "Исследователь",
			tier: 1,
            ranks: 1,
            desc: "+12 Скорости передвижения при движении по кустам или реке",
            rankInfo: [],
        },
        {
            index: 6,
            name: "Жесткая кожа",
			tier: 1,
            ranks: 1,
            desc: "На 2 меньше урона от автоатак чемпионов и монстров.",
            rankInfo: [],
        },
        {
            index: 9,
            name: "Руническая броня",
			tier: 2,
            ranks: 5,
            desc: "Добавляет +#% к прочности щитов и к исцелению (включая вампиризм и регенерацию)",
            rankInfo: [1.6, 3.2, 4.8, 6.4, 8],
        },
        {
            index: 11,
            name: "Ветеранские шрамы",
			tier: 2,
            ranks: 5,
            desc: "+#% максимального здоровья",
            rankInfo: [0.8, 1.6, 2.4, 3.6, 4],
        },
        {
            index: 13,
            name: "Проницательность",
			tier: 3,
            ranks: 1,
            desc: "Перезарядка заклинаний призывателя сокращена на 15%.",
            rankInfo: [],
        },
        {
            index: 14,
            name: "Упорство",
			tier: 3,
            ranks: 1,
            desc: "+50% регенерации здоровья, увеличивается до +200%, когда здоровье ниже 20%",
            rankInfo: [],
        },
		{
            index: 17,
            name: "Стремительность",
			tier: 4,
            ranks: 5,
            desc: "Снижает длительность эффектов контроля на +#%",
            rankInfo: [3, 6, 9, 12, 15],
        },
        {
            index: 19,
            name: "Легендарный страж",
			tier: 4,
            ranks: 5,
            desc: "+# брони и магического сопротивления за каждого вражеского чемпиона поблизости",
            rankInfo: [0.4, 0.8, 1.2, 1.6, 2],
        },
        {
            index: 21,
            name: "Осознание бессмертия",
			tier: 5,
            ranks: 1,
            desc: "Каждые 4 секунды в бою автоатака по вражескому чемпиону крадет 3% от вашего максимального здоровья (в 2 раза меньше для чемпионов дальнего боя).",
            rankInfo: [],
        },
        {
            index: 22,
            name: "Сила Древних",
			tier: 5,
            ranks: 1,
            desc: "Осадные миньоны и большие монстры, убитые вами или вашими союзниками, которые находились недалеко от вас, даруют вам 20 и 10 постоянного здоровья соответственно (300 здоровья - максимум). При достижении порога, следующий убитый недалеко от вас Осадный миньон восстановит вам 100 здоровья.",
            rankInfo: [],
        },
		{
            index: 23,
            name: "Каменные узы",
			tier: 5,
            ranks: 1,
            desc: "Уменьшение входящего урона на 4%. Когда вы находитесь недалеко от союзника этот бонус удваивается. 8% урона получаемого союзниками, наносится вам вместо них (не сработает, если у вас останется менее 15% здоровья)",
            rankInfo: [],
        },
    ]
];
