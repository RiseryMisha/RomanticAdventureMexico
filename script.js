        // ==========================================================================
        // ЛОКАЦИИ МАРШРУТА
        // Только описание точки на карте: заголовок, текст-легенда, резервный пароль.
        // Задание (квиз/шифры/маджонг/что-то новое) сюда НЕ пишем — оно отдельно, в tasksData ниже.
        //
        // Чтобы добавить новую локацию БЕЗ мини-игры (просто открыть по кнопке/паролю):
        //   1. Добавь запись { title, history, password } с новым номером step.
        //   2. Положи иконку Icons/<step>.png.
        //   3. Добавь в styles.css класс .cp-<step> { top: ...%; left: ...%; } — точку на карте.
        //   Всё, в tasksData ничего писать не нужно — сработает кнопка "Complete Stage".
        // ==========================================================================
        const locationsData = {
            1: { title: "1. Mexico City", history: "The heart of the capital is the Zócalo, one of the largest public squares on Earth, built directly atop the ceremonial center of the Aztec capital Tenochtitlan. Mexico City sits on a drained lakebed at over 2,200 meters of altitude, which is why the whole city sinks a little more every year, and it's also home to the largest concentration of museums of any city in the world.", password: "mx-zocalo-777" },
            2: { title: "2. Iztaccihuatl Volcano", history: "Aztec legend tells of the warrior Popocatépetl and the princess Iztaccíhuatl, whose tragic love story turned them into the two volcanoes that still watch over the Valley of Mexico. Seen from a distance, Iztaccíhuatl's silhouette is often called 'La Mujer Dormida' — the Sleeping Woman — because its four peaks trace out a woman's head, chest, knees and feet. Test your focus with a special Mahjong challenge to conquer this snowy peak!", password: "volcano-izta-404" },
            3: { title: "3. Pico de Orizaba", history: "Known to the Aztecs as Citlaltépetl, the 'Star Mountain,' this dormant volcano is Mexico's highest peak at 5,636 meters and the third-highest summit in North America. Its snowy cone is visible from ships out on the Gulf of Mexico on a clear day, which is exactly how early Spanish sailors used it for centuries as a natural lighthouse. Solve the 4 secret ciphers to conquer its slopes!", password: "puebla-talavera-91" },
            4: { title: "4. El Mirador del Cuervo", history: "Perched atop a cliff inside Hidalgo's El Chico National Park, this natural lookout rewards the climb with sweeping views over the pine forests and rock formations of the Pueblo Mágico of Mineral del Chico. The whole park was Mexico's very first protected forest reserve, and its jagged rock towers are a favorite training ground for rock climbers from all over the country.", password: "oaxaca-mezcal-55" },
            5: { title: "5. Teotihuacan Pyramids", history: "Already ancient by the time the Aztecs found it, this vast city was so awe-inspiring they named it 'the place where the gods were created,' anchored by the towering Pyramid of the Sun and the Avenue of the Dead. At its peak around 500 AD, Teotihuacan may have housed over 100,000 people, making it one of the largest cities on the planet at the time — and to this day, no one is entirely sure what language its builders spoke.", password: "canyon-sumi-888" },
            6: { title: "6. San Miguel de Allende", history: "This UNESCO World Heritage colonial town takes its name from independence hero Ignacio Allende, and is famed for the pink-stone spires of its Parroquia church and its thriving community of artists. Its cobblestone streets have made it a magnet for painters, writers and expats for decades, and it regularly tops lists of the best small cities in the world. Slip into something pink and send a special photo to unlock the next chapter of our journey!", password: "sancris-colors-12" },
            7: { title: "7. Guanajuato", history: "Built on silver-mining fortunes, Guanajuato's winding alleys and underground tunnels hide the birthplace of muralist Diego Rivera and host the world-renowned Cervantino arts festival every year. The city has almost no straight streets at all — it grew organically along a riverbed that was later diverted underground, which is why its tunnels double as roads today.", password: "palenque-jungle-33" },
            8: { title: "8. Zacatecas", history: "Carved from rose-colored quarry stone, this UNESCO-listed silver capital is crowned by the hilltop La Bufa lookout, reachable by a cable car strung high above the historic center. For much of the colonial era its silver mines were among the richest in the entire world, funding much of the ornate baroque architecture still standing in the city center.", password: "campeche-fort-99" },
            9: { title: "9. Guadalajara", history: "Considered the birthplace of both mariachi music and tequila, Guadalajara pairs a grand baroque cathedral with the sweeping murals of José Clemente Orozco inside the Hospicio Cabañas. It's also Mexico's second-largest metro area and the country's tech hub, earning it the nickname 'Mexico's Silicon Valley.'", password: "merida-maya-707" },
            10: { title: "10. Tequila", history: "This small Jalisco town gave its name to Mexico's most famous spirit; its blue agave fields form a UNESCO World Heritage landscape dotted with historic distilleries like Jose Cuervo. An agave plant takes anywhere from 6 to 10 years to mature before it can be harvested for tequila, and by law the spirit can only legally be called 'tequila' if it's made in this region.", password: "chichen-pyramid-1" },
            11: { title: "11. La Quemada Ruins", history: "Also known as Chicomoztoc, this mysterious hilltop fortress-city thrived between roughly 500 and 900 AD; early chroniclers linked it to the legendary place where the Aztecs paused for nine years on their journey south. Nobody knows for certain who built it or why it was eventually burned and abandoned — its very name, 'La Quemada,' means 'the burned one.'", password: "tulum-sea-822" },
            12: { title: "12. Durango", history: "Nicknamed the 'Mexican Hollywood,' Durango's rugged desert scenery has hosted hundreds of Western films, while its colonial center still centers on a striking 18th-century baroque cathedral. Stars like John Wayne filmed here so often that the city built a permanent film-set town, Chupaderos, which still stands as a tourist attraction today.", password: "cozumel-reef-44" },
            13: { title: "13. Torreon", history: "Born from the railroad boom of the late 1800s, Torreón grew rapidly into the heart of La Comarca Lagunera, once one of the world's leading cotton-growing regions. Unusually for a major Mexican city, it barely existed before the 1900s — it was essentially built from scratch around a single railway station. Pack your bags — a round-the-world Flag Quiz awaits before you can leave the station!", password: "cancun-beach-303" },
            14: { title: "14. Coahuila Plains", history: "These vast desert grasslands once carried travelers along the historic Camino Real, and still shelter Cuatro Ciénegas, an extraordinary pool-dotted basin whose isolated waters hold species found nowhere else on Earth. Scientists have compared its blue-green pools to ancient Earth's earliest oceans, since some contain the same kind of living bacterial mats that existed billions of years ago. But a little chef-in-training has gotten lost out here — help Remy sniff his way through the plains to a wedge of cheese!", password: "veracruz-port-611" },
            15: { title: "15. Casas Grandes", history: "Also known as Paquimé, this UNESCO World Heritage site was a major multi-story adobe trading city that linked the cultures of the U.S. Southwest with Mesoamerica between the 13th and 15th centuries. Its people built elaborate water systems and even raised scarlet macaws — imported from hundreds of kilometers away — for their prized feathers.", password: "eltajin-niche-90" },
            16: { title: "16. Ciudad Juarez", history: "Founded as Paso del Norte, this historic border city was renamed in honor of President Benito Juárez, who took refuge here during the French intervention, and remains one of Mexico's busiest gateways to the United States. It sits directly across the Rio Grande from El Paso, Texas, together forming one of the largest binational metro areas anywhere in the world. Before you cross the border, an old fortune-teller's ritual awaits: a Book Divination. Ten hidden love-phrases sleep inside five novels — find them, word by word, page by page.", password: "monterrey-peak-5" },
            17: { title: "17. Sonora Desert", history: "One of the most biologically diverse deserts on Earth, the Sonoran Desert is home to towering saguaro cacti and has long been the homeland of the Tohono O'odham and Seri peoples. A single saguaro can live for over 150 years and doesn't even grow its first arm until it's around 75 — making them older, in places, than Mexico's independence itself. A karaoke stage has popped up out here in the sand — step up for a round of Guess the Melody!", password: "zacatecas-silver-7" },
            18: { title: "18. Hermosillo", history: "The capital of Sonora grew up around the Cerro de la Campana hill, and today the surrounding orchards make it one of Mexico's top orange-growing regions. It's also one of the sunniest, driest state capitals in the country, with a modern economy built heavily around car manufacturing. Beneath the desert stars, five ancient stone dials await — align the Planet, the Sign, and the House to unlock the way forward.", password: "guadalajara-mariachi" },
            19: { title: "19. Guaymas & San Carlos", history: "Founded in 1769 on a bay early Spanish sailors called 'the port of ports,' this Seri and Yaqui homeland still watches over San Carlos's Tetakawi hill, named by the Yaqui for its distinctive shape. Its dramatic desert-meets-sea coastline of red-rock coves has made it a favorite filming backdrop and a popular sport-fishing destination. But tonight the wind over the bay carries something stranger than salt and cactus — a lone owl is circling overhead, and it's carrying a letter with your name on it...", password: "guanajuato-alley-8" },
            20: { title: "20. Puerto Peñasco", history: "Nicknamed 'Rocky Point' after the English name given by a British naval officer charting the coast in 1826, this shrimp-fishing town on the Sea of Cortez only grew into a real settlement in the 1920s. It sits so close to Arizona that it's become a favorite weekend beach getaway for Americans from Phoenix and Tucson, earning it the nickname 'Arizona's beach.' An old neon arcade cabinet hums on the boardwalk here — beat its high score in a round of Tetris to keep moving north!", password: "mazatlan-malecon-3" },
            21: { title: "21. San Felipe", history: "Named after the bay a Jesuit missionary charted in 1746, San Felipe grew from scattered fishing camps into a town in the 1920s and still experiences one of the world's largest tidal ranges. At low tide the water can retreat hundreds of meters from shore, turning the beach into a vast stretch of hard-packed sand popular with off-road racers.", password: "cabo-arch-101" },
            22: { title: "22. Guadalupe Valley", history: "Often called Mexico's Napa Valley, this wine region owes many of its vineyards to Russian Molokan settlers who arrived in 1905, fleeing religious persecution and conscription back home. It now produces the large majority of all Mexican wine, and its warm days and cool nights turned out to be nearly perfect for growing grapes.", password: "lapaz-whale-456" },
            23: { title: "23. Guerrero Negro, BCS", history: "Named after the Black Warrior, a whaling ship wrecked here in 1858, this town now guards the Ojo de Liebre lagoon, a protected gray whale nursery, alongside one of the largest saltworks on Earth. Every winter, gray whales swim over 8,000 kilometers from Alaska to give birth in these warm, shallow waters — one of the longest migrations of any mammal on the planet.", password: "coppercanyon-train" },
            24: { title: "24. Rosarito", history: "Once a glamorous getaway for 1920s Hollywood stars at the historic Rosarito Beach Hotel, this coastal town marks the grand finale of our journey! It's also home to the Fox Studios Baja lot, where the ship from Titanic was built for filming, right beside the very ocean it was sailing toward on screen.", password: "rosarito-finish-999" }
        };

        // ==========================================================================
        // ЗАДАНИЯ ЛОКАЦИЙ
        // Ключ объекта = номер локации (step), тот же, что в locationsData.
        // Поле "type" определяет, какой движок мини-игры запускать: "quiz" | "mahjong" | "ciphers" | "passwords" | "drawing".
        // Поле "theme" (необязательное) — тематическое оформление модалки: "fiesta" | "ice" | "talavera" | "oaxaca" | "disney"
        //   или своё новое (тогда нужен свой CSS-класс .theme-<имя> в styles.css). Без поля theme
        //   модалка остаётся в обычном "пергаментном" стиле сайта.
        // "buttonLabel" — подпись на кнопке в сайдбаре ("Start <buttonLabel> ➔").
        //
        // Чтобы добавить задание существующего типа в НОВУЮ локацию — ничего не программировать,
        // просто добавить новый блок с тем же "type" и своими данными. Например ещё один квиз:
        //   5: { type: 'quiz', buttonLabel: 'Quiz', modalTitle: 'Stage 5 Quiz', questions: [ ... ] }
        // или ещё один набор шифров:
        //   7: { type: 'ciphers', buttonLabel: 'Ciphers', modalTitle: 'Stage 7 Ciphers',
        //        intro: 'Текст-подводка', items: [ { id, name, encrypted, hint, answer, solved:false }, ... ] }
        // или ещё один маджонг:
        //   9: { type: 'mahjong', buttonLabel: 'Mahjong', modalTitle: 'Stage 9 Mahjong' }
        // или ещё один набор "паролей за победы" (несколько независимых полей ввода):
        //   6: { type: 'passwords', buttonLabel: 'Games', modalTitle: 'Stage 6 Games', intro: 'Текст-подводка',
        //        items: [ { id, game: 'Название', password: '...', solved:false }, ... ] }
        // "drawing" — задание с одним полем пароля и особым оформлением модалки (см. .theme-disney
        //   в styles.css). Для НОВОГО такого же задания просто добавь новый блок:
        //   8: { type: 'drawing', buttonLabel: 'Drawing', modalTitle: '...', intro: '...', password: '...', solved:false }
        //
        // Локация БЕЗ записи здесь — это обычная остановка без мини-игры (кнопка "Complete Stage").
        //
        // Чтобы добавить задание СОВСЕМ НОВОГО типа (не квиз/шифры/маджонг) — единственное место,
        // где нужно писать код-развилку, это функция startTaskForStep() ниже: там добавляется
        // одна новая ветка `else if (task.type === 'мойтип') startМойТип(step);`, плюс сама пара
        // функций startМойТип/renderМойТип по аналогии с существующими блоками ниже.
        // ==========================================================================
        const PERIODIC_ELEMENTS = [
            {n:1,s:"H",name:"Hydrogen",r:1,c:1,cat:"nonmetal"},
            {n:2,s:"He",name:"Helium",r:1,c:18,cat:"noble"},
            {n:3,s:"Li",name:"Lithium",r:2,c:1,cat:"alkali"},
            {n:4,s:"Be",name:"Beryllium",r:2,c:2,cat:"alkaline"},
            {n:5,s:"B",name:"Boron",r:2,c:13,cat:"metalloid"},
            {n:6,s:"C",name:"Carbon",r:2,c:14,cat:"nonmetal"},
            {n:7,s:"N",name:"Nitrogen",r:2,c:15,cat:"nonmetal"},
            {n:8,s:"O",name:"Oxygen",r:2,c:16,cat:"nonmetal"},
            {n:9,s:"F",name:"Fluorine",r:2,c:17,cat:"halogen"},
            {n:10,s:"Ne",name:"Neon",r:2,c:18,cat:"noble"},
            {n:11,s:"Na",name:"Sodium",r:3,c:1,cat:"alkali"},
            {n:12,s:"Mg",name:"Magnesium",r:3,c:2,cat:"alkaline"},
            {n:13,s:"Al",name:"Aluminium",r:3,c:13,cat:"postmetal"},
            {n:14,s:"Si",name:"Silicon",r:3,c:14,cat:"metalloid"},
            {n:15,s:"P",name:"Phosphorus",r:3,c:15,cat:"nonmetal"},
            {n:16,s:"S",name:"Sulfur",r:3,c:16,cat:"nonmetal"},
            {n:17,s:"Cl",name:"Chlorine",r:3,c:17,cat:"halogen"},
            {n:18,s:"Ar",name:"Argon",r:3,c:18,cat:"noble"},
            {n:19,s:"K",name:"Potassium",r:4,c:1,cat:"alkali"},
            {n:20,s:"Ca",name:"Calcium",r:4,c:2,cat:"alkaline"},
            {n:21,s:"Sc",name:"Scandium",r:4,c:3,cat:"transition"},
            {n:22,s:"Ti",name:"Titanium",r:4,c:4,cat:"transition"},
            {n:23,s:"V",name:"Vanadium",r:4,c:5,cat:"transition"},
            {n:24,s:"Cr",name:"Chromium",r:4,c:6,cat:"transition"},
            {n:25,s:"Mn",name:"Manganese",r:4,c:7,cat:"transition"},
            {n:26,s:"Fe",name:"Iron",r:4,c:8,cat:"transition"},
            {n:27,s:"Co",name:"Cobalt",r:4,c:9,cat:"transition"},
            {n:28,s:"Ni",name:"Nickel",r:4,c:10,cat:"transition"},
            {n:29,s:"Cu",name:"Copper",r:4,c:11,cat:"transition"},
            {n:30,s:"Zn",name:"Zinc",r:4,c:12,cat:"transition"},
            {n:31,s:"Ga",name:"Gallium",r:4,c:13,cat:"postmetal"},
            {n:32,s:"Ge",name:"Germanium",r:4,c:14,cat:"metalloid"},
            {n:33,s:"As",name:"Arsenic",r:4,c:15,cat:"metalloid"},
            {n:34,s:"Se",name:"Selenium",r:4,c:16,cat:"nonmetal"},
            {n:35,s:"Br",name:"Bromine",r:4,c:17,cat:"halogen"},
            {n:36,s:"Kr",name:"Krypton",r:4,c:18,cat:"noble"},
            {n:37,s:"Rb",name:"Rubidium",r:5,c:1,cat:"alkali"},
            {n:38,s:"Sr",name:"Strontium",r:5,c:2,cat:"alkaline"},
            {n:39,s:"Y",name:"Yttrium",r:5,c:3,cat:"transition"},
            {n:40,s:"Zr",name:"Zirconium",r:5,c:4,cat:"transition"},
            {n:41,s:"Nb",name:"Niobium",r:5,c:5,cat:"transition"},
            {n:42,s:"Mo",name:"Molybdenum",r:5,c:6,cat:"transition"},
            {n:43,s:"Tc",name:"Technetium",r:5,c:7,cat:"transition"},
            {n:44,s:"Ru",name:"Ruthenium",r:5,c:8,cat:"transition"},
            {n:45,s:"Rh",name:"Rhodium",r:5,c:9,cat:"transition"},
            {n:46,s:"Pd",name:"Palladium",r:5,c:10,cat:"transition"},
            {n:47,s:"Ag",name:"Silver",r:5,c:11,cat:"transition"},
            {n:48,s:"Cd",name:"Cadmium",r:5,c:12,cat:"transition"},
            {n:49,s:"In",name:"Indium",r:5,c:13,cat:"postmetal"},
            {n:50,s:"Sn",name:"Tin",r:5,c:14,cat:"postmetal"},
            {n:51,s:"Sb",name:"Antimony",r:5,c:15,cat:"metalloid"},
            {n:52,s:"Te",name:"Tellurium",r:5,c:16,cat:"metalloid"},
            {n:53,s:"I",name:"Iodine",r:5,c:17,cat:"halogen"},
            {n:54,s:"Xe",name:"Xenon",r:5,c:18,cat:"noble"},
            {n:55,s:"Cs",name:"Caesium",r:6,c:1,cat:"alkali"},
            {n:56,s:"Ba",name:"Barium",r:6,c:2,cat:"alkaline"},
            {n:57,s:"La",name:"Lanthanum",r:6,c:3,cat:"lanthanide"},
            {n:58,s:"Ce",name:"Cerium",r:8,c:4,cat:"lanthanide"},
            {n:59,s:"Pr",name:"Praseodymium",r:8,c:5,cat:"lanthanide"},
            {n:60,s:"Nd",name:"Neodymium",r:8,c:6,cat:"lanthanide"},
            {n:61,s:"Pm",name:"Promethium",r:8,c:7,cat:"lanthanide"},
            {n:62,s:"Sm",name:"Samarium",r:8,c:8,cat:"lanthanide"},
            {n:63,s:"Eu",name:"Europium",r:8,c:9,cat:"lanthanide"},
            {n:64,s:"Gd",name:"Gadolinium",r:8,c:10,cat:"lanthanide"},
            {n:65,s:"Tb",name:"Terbium",r:8,c:11,cat:"lanthanide"},
            {n:66,s:"Dy",name:"Dysprosium",r:8,c:12,cat:"lanthanide"},
            {n:67,s:"Ho",name:"Holmium",r:8,c:13,cat:"lanthanide"},
            {n:68,s:"Er",name:"Erbium",r:8,c:14,cat:"lanthanide"},
            {n:69,s:"Tm",name:"Thulium",r:8,c:15,cat:"lanthanide"},
            {n:70,s:"Yb",name:"Ytterbium",r:8,c:16,cat:"lanthanide"},
            {n:71,s:"Lu",name:"Lutetium",r:8,c:17,cat:"lanthanide"},
            {n:72,s:"Hf",name:"Hafnium",r:6,c:4,cat:"transition"},
            {n:73,s:"Ta",name:"Tantalum",r:6,c:5,cat:"transition"},
            {n:74,s:"W",name:"Tungsten",r:6,c:6,cat:"transition"},
            {n:75,s:"Re",name:"Rhenium",r:6,c:7,cat:"transition"},
            {n:76,s:"Os",name:"Osmium",r:6,c:8,cat:"transition"},
            {n:77,s:"Ir",name:"Iridium",r:6,c:9,cat:"transition"},
            {n:78,s:"Pt",name:"Platinum",r:6,c:10,cat:"transition"},
            {n:79,s:"Au",name:"Gold",r:6,c:11,cat:"transition"},
            {n:80,s:"Hg",name:"Mercury",r:6,c:12,cat:"transition"},
            {n:81,s:"Tl",name:"Thallium",r:6,c:13,cat:"postmetal"},
            {n:82,s:"Pb",name:"Lead",r:6,c:14,cat:"postmetal"},
            {n:83,s:"Bi",name:"Bismuth",r:6,c:15,cat:"postmetal"},
            {n:84,s:"Po",name:"Polonium",r:6,c:16,cat:"postmetal"},
            {n:85,s:"At",name:"Astatine",r:6,c:17,cat:"halogen"},
            {n:86,s:"Rn",name:"Radon",r:6,c:18,cat:"noble"},
            {n:87,s:"Fr",name:"Francium",r:7,c:1,cat:"alkali"},
            {n:88,s:"Ra",name:"Radium",r:7,c:2,cat:"alkaline"},
            {n:89,s:"Ac",name:"Actinium",r:7,c:3,cat:"actinide"},
            {n:90,s:"Th",name:"Thorium",r:9,c:4,cat:"actinide"},
            {n:91,s:"Pa",name:"Protactinium",r:9,c:5,cat:"actinide"},
            {n:92,s:"U",name:"Uranium",r:9,c:6,cat:"actinide"},
            {n:93,s:"Np",name:"Neptunium",r:9,c:7,cat:"actinide"},
            {n:94,s:"Pu",name:"Plutonium",r:9,c:8,cat:"actinide"},
            {n:95,s:"Am",name:"Americium",r:9,c:9,cat:"actinide"},
            {n:96,s:"Cm",name:"Curium",r:9,c:10,cat:"actinide"},
            {n:97,s:"Bk",name:"Berkelium",r:9,c:11,cat:"actinide"},
            {n:98,s:"Cf",name:"Californium",r:9,c:12,cat:"actinide"},
            {n:99,s:"Es",name:"Einsteinium",r:9,c:13,cat:"actinide"},
            {n:100,s:"Fm",name:"Fermium",r:9,c:14,cat:"actinide"},
            {n:101,s:"Md",name:"Mendelevium",r:9,c:15,cat:"actinide"},
            {n:102,s:"No",name:"Nobelium",r:9,c:16,cat:"actinide"},
            {n:103,s:"Lr",name:"Lawrencium",r:9,c:17,cat:"actinide"},
            {n:104,s:"Rf",name:"Rutherfordium",r:7,c:4,cat:"transition"},
            {n:105,s:"Db",name:"Dubnium",r:7,c:5,cat:"transition"},
            {n:106,s:"Sg",name:"Seaborgium",r:7,c:6,cat:"transition"},
            {n:107,s:"Bh",name:"Bohrium",r:7,c:7,cat:"transition"},
            {n:108,s:"Hs",name:"Hassium",r:7,c:8,cat:"transition"},
            {n:109,s:"Mt",name:"Meitnerium",r:7,c:9,cat:"transition"},
            {n:110,s:"Ds",name:"Darmstadtium",r:7,c:10,cat:"transition"},
            {n:111,s:"Rg",name:"Roentgenium",r:7,c:11,cat:"transition"},
            {n:112,s:"Cn",name:"Copernicium",r:7,c:12,cat:"transition"},
            {n:113,s:"Nh",name:"Nihonium",r:7,c:13,cat:"postmetal"},
            {n:114,s:"Fl",name:"Flerovium",r:7,c:14,cat:"postmetal"},
            {n:115,s:"Mc",name:"Moscovium",r:7,c:15,cat:"postmetal"},
            {n:116,s:"Lv",name:"Livermorium",r:7,c:16,cat:"postmetal"},
            {n:117,s:"Ts",name:"Tennessine",r:7,c:17,cat:"halogen"},
            {n:118,s:"Og",name:"Oganesson",r:7,c:18,cat:"noble"}
        ];

        // ===================================================================
        // labTask "periodic" (локация 22, второе задание лаборатории) —
        // интерактивная таблица Менделеева. 3 фазы по 5 заданий:
        //   identify — найти элемент(ы) по описанию (без формулы);
        //   formula  — найти элементы и собрать из них молекулярную формулу;
        //   equation — найти два элемента-реагента для готового продукта.
        // Каждый item хранит need (нужные символы), found (что уже найдено
        // в текущей попытке) и solved. Описания НЕ называют порядковый номер
        // элемента впрямую — только его свойства/положение в таблице.
        // ===================================================================
        const PERIODIC_LAB_TASK = {
            key: 'periodic',
            name: 'The Periodic Table',
            subtitle: 'Find the elements of us',
            emoji: '\ud83d\udd2c',
            done: false,
            phases: [
                {
                    key: 'identify',
                    title: 'Phase 1 \u2014 Identify the Elements',
                    instructions: 'Read the clue, then tap every element it describes on the table below.',
                    items: [
                        {
                            id: 1,
                            title: 'Task 1: The Spark of First Sight',
                            subtitle: '(Dopamine)',
                            description: 'To spark this feeling, you need three key nonmetals working together. The first is the backbone of all organic life on Earth. The second is the most abundant gas in our atmosphere. The third is a colorless gas that forms part of every water molecule. Find their symbols on the table \u2014 together they make up the molecule that makes my heart race at the sight of you.',
                            need: ['C', 'N', 'H'],
                            resultName: 'Dopamine',
                            resultLabel: 'Passion / Falling in Love',
                            found: [],
                            solved: false
                        },
                        {
                            id: 2,
                            title: 'Task 2: Attraction of Opposites',
                            subtitle: '(Ferromagnetic Trio)',
                            description: 'In chemistry, some metals carry a rare gift \u2014 they build an invisible field around themselves and pull other objects close. Find three metal neighbors sitting side by side in the very same row of the table. Their natural superpower is attraction \u2014 exactly like what grew between us.',
                            need: ['Fe', 'Co', 'Ni'],
                            resultName: 'Iron, Cobalt & Nickel',
                            resultLabel: 'Irresistible Attraction',
                            found: [],
                            solved: false
                        },
                        {
                            id: 3,
                            title: 'Task 3: The Strength of Us',
                            subtitle: '(Diamond)',
                            description: "Find the element that, in nature, can be as soft as the graphite inside a pencil \u2014 easy to smudge, easy to break. But put that very same element under enormous pressure and heat, and it becomes the hardest mineral on the planet, something nothing can shatter. That's exactly the strength I wish for our bond.",
                            need: ['C'],
                            resultName: 'Carbon \u2192 Diamond',
                            resultLabel: 'A Strong, Unbreakable Bond',
                            found: [],
                            solved: false
                        },
                        {
                            id: 4,
                            title: 'Task 4: You Are My Light',
                            subtitle: '(Noble Neon)',
                            description: 'Find the noble gas sitting in the very last column of the table, just one row down from the top. On its own it is invisible and reacts with nothing at all. But send an electric current through it, and it glows beautifully in the dark, lighting up everything around it \u2014 just like you light up my life.',
                            need: ['Ne'],
                            resultName: 'Neon',
                            resultLabel: 'Bright Emotions / Light in My Life',
                            found: [],
                            solved: false
                        },
                        {
                            id: 5,
                            title: 'Task 5: An Elixir of Eternal Value',
                            subtitle: '(Noble Gold)',
                            description: 'Find the element humankind has treasured above almost everything else for thousands of years. It never rusts from water, never dulls with time, never fears acid, and always stays flawless and pure \u2014 the symbol of the highest value between us.',
                            need: ['Au'],
                            resultName: 'Gold',
                            resultLabel: 'Precious and Pure Feelings',
                            found: [],
                            solved: false
                        }
                    ]
                },
                {
                    key: 'formula',
                    title: 'Phase 2 \u2014 Build the Formula',
                    instructions: 'Find the right elements and watch them snap into the formula below.',
                    items: [
                        {
                            id: 6,
                            title: 'Task 1: The Formula of a Sweet Life',
                            subtitle: '',
                            description: "They say love is a sweet feeling. Let's build the formula of what makes our life truly sweet. Find three elements: the backbone of all organic matter, the very first element of the whole Universe, and the gas that we breathe.",
                            need: ['C', 'H', 'O'],
                            subs: [12, 22, 11],
                            compoundName: 'Sucrose',
                            resultLabel: 'Sweet Moments',
                            found: [],
                            solved: false
                        },
                        {
                            id: 7,
                            title: 'Task 2: The Formula of Energy and Long Talks',
                            subtitle: '',
                            description: 'For us to wander until sunrise and talk all night long, we need this natural energizer. Find four elements: the element of life, the lightest gas there is, the atmosphere\u2019s main gas, and the life-giving gas we breathe.',
                            need: ['C', 'H', 'N', 'O'],
                            subs: [8, 10, 4, 2],
                            compoundName: 'Caffeine',
                            resultLabel: 'Long Nights of Conversation',
                            found: [],
                            solved: false
                        },
                        {
                            id: 8,
                            title: 'Task 3: The Formula of Absolute Calm',
                            subtitle: '',
                            description: 'When you\u2019re near, every worry disappears and total calm sets in. Find three elements: a soft metal from the very first column that paints a flame a deep carmine-red, a pale, light halogen gas added to toothpaste for strength, and our already-familiar element of life.',
                            need: ['Li', 'F', 'C'],
                            subs: [null, null, 3],
                            compoundName: 'Lithium \u00b7 Fluorine \u00b7 Carbon',
                            resultLabel: 'A mood-stabilizing calm, like the medicine lithium carbonate soothing a storm',
                            found: [],
                            solved: false
                        },
                        {
                            id: 9,
                            title: 'Task 4: The Formula of Storms and Tears of Joy',
                            subtitle: '',
                            description: "Sometimes feelings overflow so much they can't be held back. Let's encode what oceans, summer raindrops, and our own happy tears are made of. Find two elements: the most abundant element in the whole Universe, and the one most essential for breathing.",
                            need: ['H', 'O'],
                            subs: [2, null],
                            compoundName: 'Water',
                            resultLabel: 'The Base of Life, Purity, and Sincere Emotion',
                            found: [],
                            solved: false
                        },
                        {
                            id: 10,
                            title: 'Task 5: The Formula of the Spark Between Us',
                            subtitle: '',
                            description: 'When we touch, a spark seems to jump between us. Let\u2019s build the conductor for that spark. Find two elements: the soft main metal found in ordinary table salt, and a poisonous, yellow-green halogen gas.',
                            need: ['Na', 'Cl'],
                            subs: [null, null],
                            compoundName: 'Sodium Chloride',
                            resultLabel: 'The Electric Spark of Feeling',
                            found: [],
                            solved: false
                        }
                    ]
                },
                {
                    key: 'equation',
                    title: 'Phase 3 \u2014 Complete the Equation',
                    instructions: 'Find the two elements that react together to form the product shown.',
                    items: [
                        {
                            id: 11,
                            title: 'Equation 1: The Reaction of Warmth',
                            subtitle: '',
                            description: 'Find two elements: a light, silvery-white metal that burns with a blindingly bright flame and releases enormous heat, and the gas without which that fire could never burn at all.',
                            need: ['Mg', 'O'],
                            product: 'MgO',
                            meaning: 'The Fire of Our Passion (and a trail of white ash)',
                            found: [],
                            solved: false
                        },
                        {
                            id: 12,
                            title: 'Equation 2: The Reaction of Pure Energy',
                            subtitle: '',
                            description: "When we're together, our energy goes off the charts. Find two elements: the lightest metal in the whole world, and the most reactive, yellow-green oxidizing gas there is.",
                            need: ['Li', 'F'],
                            product: 'LiF',
                            meaning: 'A Battery That Charges Us for Reckless Adventures',
                            found: [],
                            solved: false
                        },
                        {
                            id: 13,
                            title: 'Equation 3: Building Something Eternal',
                            subtitle: '',
                            description: "Fleeting infatuations burn out fast \u2014 but we're building something that lasts. Find two elements: a soft, dark element that's the foundation of all organic chemistry, and a heavy, gleaming metal that makes alloys incredibly hard and heat-resistant.",
                            need: ['C', 'Hf'],
                            product: 'HfC',
                            meaning: 'The Strongest Alloy in the World, One Nothing Can Break',
                            found: [],
                            solved: false
                        },
                        {
                            id: 14,
                            title: 'Equation 4: Clarity and Honesty',
                            subtitle: '',
                            description: 'There are no secrets between us \u2014 our bond is clear and transparent. Find two nonmetals: the element that forms the basis of every grain of sand on Earth, and our beloved element of life and breath.',
                            need: ['Si', 'O'],
                            product: 'SiO2',
                            meaning: 'Rock Crystal \u2014 the Clarity and Sincerity of Our Thoughts',
                            found: [],
                            solved: false
                        },
                        {
                            id: 15,
                            title: 'Equation 5: A Reaction of Tenderness',
                            subtitle: '',
                            description: "A relationship isn't only fire \u2014 it's also soft, enveloping tenderness. Find two elements: a metal that, in its pure form, is soft as butter, and a gas that's dangerous alone but indispensable once it finds its match.",
                            need: ['Na', 'Cl'],
                            product: 'NaCl',
                            meaning: 'A Pinch of Coziness That Makes Life Taste Better',
                            found: [],
                            solved: false
                        }
                    ]
                }
            ]
        };

        // ===================================================================
        // Задание лаборатории (location 22) 'rebus' — "Chemical Rebus".
        // Каждый item — картинка-ребус: последовательность "кусочков" (pieces),
        // где кусочек либо { icon: 'ключ_из_REBUS_ICONS' } — большая SVG-иконка,
        // либо { op: 'minus', label: 'O' } — знак минус и зачёркнутая буква/цифра,
        // либо { op: 'plus' } — просто большой плюс между картинками.
        // Ответ — просто символы элементов подряд (без пробелов, регистр не
        // важен), см. answer (массив принимаемых вариантов написания/порядка).
        // Финальные "лишние" индексы получившегося вещества сознательно НЕ
        // требуются от игрока (см. answer у item 5 — CaCO, а не CaCO3);
        // а вот цифра, которая была видна ДО решения как часть картинки
        // (напр. "2" у Br2 в item 2), наоборот входит в ответ как обычный
        // "минус"-кусочек ребуса, а не как часть самого answer.
        // ===================================================================
        const REBUS_LAB_TASK = {
            key: 'rebus',
            name: 'Chemical Rebus',
            subtitle: 'Picture puzzles',
            emoji: '\ud83e\udde9',
            done: false,
            items: [
                {
                    id: 201,
                    title: 'Rebus 1: Something We Can\u2019t Live Without',
                    flavor: 'Solve this to see what our relationship can\u2019t exist without:',
                    pieces: [
                        { icon: 'water' },
                        { op: 'minus', label: 'O' },
                        { op: 'plus' },
                        { icon: 'balloon' }
                    ],
                    hint: 'Water hides a familiar two-letter formula. Take away one letter \u2014 then look at what really fills a balloon that floats up into the sky.',
                    elements: ['H', 'He'],
                    answer: ['h2he'],
                    resultName: 'H\u2082He',
                    resultLabel: '\u2728 \u201cAitch-two-helium\u201d \u2014 something we simply can\u2019t do without',
                    solved: false
                },
                {
                    id: 202,
                    title: 'Rebus 2: What Keeps a Memory Forever',
                    flavor: 'Solve this to see what makes a memory of us last forever:',
                    pieces: [
                        { icon: 'wave' },
                        { op: 'minus', label: '2' },
                        { op: 'plus' },
                        { icon: 'film' }
                    ],
                    hint: 'The sea holds a reddish-brown element that always travels in identical pairs. Remove the pair, then add the precious metal that makes an old photograph come alive.',
                    elements: ['Br', 'Ag'],
                    answer: ['brag', 'agbr'],
                    resultName: 'AgBr',
                    resultLabel: '\u2728 Silver bromide \u2014 the compound that captures light and keeps a moment forever',
                    solved: false
                },
                {
                    id: 203,
                    title: 'Rebus 3: What Our Bond Is Forged From',
                    flavor: 'Solve this to see what our bond is forged from:',
                    pieces: [
                        { icon: 'soldier' },
                        { op: 'plus' },
                        { icon: 'coin' }
                    ],
                    hint: 'One is the soft, steadfast metal toy soldiers were once cast from. The other is warm and reddish \u2014 older than coins and wires alike.',
                    elements: ['Sn', 'Cu'],
                    answer: ['sncu', 'cusn'],
                    resultName: 'Sn + Cu \u2192 Bronze',
                    resultLabel: '\u2728 An alloy humanity has trusted for thousands of years \u2014 unbreakable through the ages',
                    solved: false
                },
                {
                    id: 204,
                    title: 'Rebus 4: What Fills the Room When We Laugh',
                    flavor: 'Solve this to see what fills the air every time we can\u2019t stop laughing:',
                    pieces: [
                        { icon: 'clouds' },
                        { op: 'plus' },
                        { icon: 'spark' }
                    ],
                    hint: 'One gas makes up most of the sky above us, always found in identical pairs. The other, alone, is the very thing every flame and every breath depends on.',
                    elements: ['N', 'O'],
                    answer: ['n2o'],
                    resultName: 'N\u2082O',
                    resultLabel: '\u2728 Nicknamed \u201claughing gas\u201d \u2014 the air we breathe when we\u2019re together',
                    solved: false
                },
                {
                    id: 205,
                    title: 'Rebus 5: What Our Story Is Turning Into',
                    flavor: 'Solve this to see what our story is slowly turning into:',
                    pieces: [
                        { icon: 'shell' },
                        { op: 'plus' },
                        { icon: 'bubbles' }
                    ],
                    hint: 'One is what the sea quietly leaves behind inside every shell. The other fizzes up and escapes the moment you open the bottle.',
                    elements: ['Ca', 'C', 'O'],
                    answer: ['caco'],
                    resultName: 'CaCO\u2083 (simplified)',
                    resultLabel: '\u2728 Calcium carbonate \u2014 a treasure slowly shaped by time, just like us',
                    solved: false
                }
            ]
        };


        const tasksData = {
            1: {
                type: 'quiz',
                theme: 'fiesta',
                buttonLabel: 'Quiz',
                modalTitle: 'Stage 1 Quiz',
                questions: [
            {
                id: 1,
                question: "1. On which day did we start communicating closely in game time?",
                type: "radio",
                options: [
                    { text: "04.01.2026", correct: false, emoji: "📅" },
                    { text: "05.01.2026", correct: true, emoji: "✨" },
                    { text: "06.01.2026", correct: false, emoji: "🌙" },
                    { text: "07.01.2026", correct: false, emoji: "⭐" }
                ]
            },
            {
                id: 2,
                question: "2. Misha's date of birth:",
                type: "radio",
                options: [
                    { text: "15 April 1982", correct: false, emoji: "📜" },
                    { text: "16 September 1810", correct: false, emoji: "🏛️" },
                    { text: "28 March 2020", correct: false, emoji: "🧸" },
                    { text: "27 March 1998", correct: true, emoji: "🎂" }
                ]
            },
            {
                id: 3,
                question: "3. Which type of units does Misha use in the game?",
                type: "radio",
                options: [
                    { text: "Infantry", correct: true, emoji: "🛡️" },
                    { text: "Archers", correct: false, emoji: "🏹" },
                    { text: "Cavalry", correct: false, emoji: "🐎" },
                    { text: "Catapults", correct: false, emoji: "🧱" }
                ]
            },
            {
                id: 4,
                question: "4. Which movie did we watch on our first date?",
                type: "radio",
                options: [
                    { text: "The Secret Life of Walter Mitty", correct: false, emoji: "🏔️" },
                    { text: "Harry Potter", correct: false, emoji: "⚡" },
                    { text: "A Dog's Journey", correct: true, emoji: "🐶" },
                    { text: "Garfield", correct: false, emoji: "🐱" }
                ]
            },
            {
                id: 5,
                question: "5. Misha's 4 favorite movies (Select all that apply):",
                type: "checkbox",
                options: [
                    { text: "Harry Potter", correct: false, emoji: "🪄" },
                    { text: "Into the Wild", correct: true, emoji: "🌲" },
                    { text: "Ratatouille", correct: false, emoji: "🐀" },
                    { text: "Whiplash", correct: true, emoji: "🥁" },
                    { text: "Videos you make for me", correct: true, emoji: "😉" },
                    { text: "What Dreams May Come", correct: false, emoji: "🌌" },
                    { text: "Manchester by the Sea", correct: true, emoji: "🌊" },
                    { text: "Avengers", correct: false, emoji: "🦸" }
                ]
            },
            {
                id: 6,
                question: "6. What was the first song Misha recorded and sent to you?",
                type: "radio",
                options: [
                    { text: "Sleeping at Last - 500 miles", correct: false, emoji: "🎶" },
                    { text: "Bruno Mars - When I Was Your Man", correct: true, emoji: "🎤" },
                    { text: "Goo Goo Dolls - Iris", correct: false, emoji: "🎸" },
                    { text: "Nothing but Thieves - Impossible", correct: false, emoji: "🎧" }
                ]
            },
            {
                id: 7,
                question: "7. Misha's favorite football teams (Select 2 answers):",
                type: "checkbox",
                options: [
                    { text: "Bayern Munich", correct: false, emoji: "⚽" },
                    { text: "Barcelona", correct: true, emoji: "🔵🔴" },
                    { text: "Real Madrid", correct: false, emoji: "👑" },
                    { text: "Manchester United", correct: false, emoji: "😈" },
                    { text: "PSG", correct: false, emoji: "🗼" },
                    { text: "Arsenal", correct: true, emoji: "🔴⚪" },
                    { text: "AC Milan", correct: false, emoji: "🖤❤️" },
                    { text: "Liverpool", correct: false, emoji: "🦅" }
                ]
            },
            {
                id: 8,
                question: "8. When did our first 'non-date' happen?",
                type: "radio",
                options: [
                    { text: "10 March", correct: true, emoji: "🌷" },
                    { text: "18 March", correct: false, emoji: "🗓️" },
                    { text: "5 January", correct: false, emoji: "❄️" },
                    { text: "15 April", correct: false, emoji: "🌸" }
                ]
            },
            {
                id: 9,
                question: "9. Which cake did you order for my birthday?",
                type: "radio",
                options: [
                    { text: "Mascarpone", correct: false, emoji: "🧀" },
                    { text: "Red Velvet", correct: false, emoji: "❤️" },
                    { text: "Acapulco", correct: false, emoji: "🏖️" },
                    { text: "Three Chocolates", correct: true, emoji: "🍫" }
                ]
            },
            {
                id: 10,
                question: "10. When did we first listen to music together on Spotify?",
                type: "radio",
                options: [
                    { text: "9 May", correct: false, emoji: "🎧" },
                    { text: "18 May", correct: false, emoji: "🎵" },
                    { text: "8 June", correct: false, emoji: "🎶" },
                    { text: "9 June", correct: true, emoji: "💚" }
                ]
            },
            {
                id: 11,
                question: "11. When did we confess our love to each other?",
                type: "radio",
                options: [
                    { text: "26 February", correct: false, emoji: "💌" },
                    { text: "27 February", correct: false, emoji: "🌹" },
                    { text: "28 February", correct: true, emoji: "💖" },
                    { text: "29 February", correct: false, emoji: "⏳" }
                ]
            },
            {
                id: 12,
                question: "12. In which Minsk establishment did Misha try pizza for the first time?",
                type: "radio",
                options: [
                    { text: "Pizza Tempo", correct: false, emoji: "🍕" },
                    { text: "Fairytale Castle", correct: true, emoji: "🏰" },
                    { text: "Domino's Pizza", correct: false, emoji: "🛵" },
                    { text: "Papa John's", correct: false, emoji: "🧀" }
                ]
            },
            {
                id: 13,
                question: "13. Misha's favorite book:",
                type: "radio",
                options: [
                    { text: "Shantaram - Gregory David Roberts", correct: true, emoji: "📖" },
                    { text: "The Fountainhead - Ayn Rand", correct: false, emoji: "🏙️" },
                    { text: "The Picture of Dorian Gray - Oscar Wilde", correct: false, emoji: "🖼️" },
                    { text: "One Hundred Years of Solitude", correct: false, emoji: "🦋" }
                ]
            },
            {
                id: 14,
                question: "14. Which movie did Misha watch during his very first cinema visit?",
                type: "radio",
                options: [
                    { text: "The Little Mermaid", correct: false, emoji: "🧜‍♀️" },
                    { text: "Harry Potter", correct: false, emoji: "🏆" },
                    { text: "Garfield", correct: true, emoji: "🐾" },
                    { text: "Ice Age", correct: false, emoji: "🌰" }
                ]
            },
            {
                id: 15,
                question: "15. What flowers did Misha give you for your birthday?",
                type: "radio",
                options: [
                    { text: "Tulips", correct: false, emoji: "🌷" },
                    { text: "Roses", correct: true, emoji: "🌹" },
                    { text: "Daisies", correct: false, emoji: "🌼" },
                    { text: "Chrysanthemums", correct: false, emoji: "💐" }
                ]
            },
            {
                id: 16,
                question: "16. Misha's totem animal in the game:",
                type: "radio",
                options: [
                    { text: "Lion", correct: false, emoji: "🦁" },
                    { text: "Tiger", correct: false, emoji: "🐅" },
                    { text: "Eagle", correct: false, emoji: "🦅" },
                    { text: "Rat", correct: true, emoji: "🐀" }
                ]
            },
            {
                id: 17,
                question: "17. In which restaurant did Misha work?",
                type: "radio",
                options: [
                    { text: "McDonald's", correct: false, emoji: "🍔" },
                    { text: "Paul", correct: true, emoji: "🥐" },
                    { text: "KFC", correct: false, emoji: "🍗" },
                    { text: "Burger King", correct: false, emoji: "👑" }
                ]
            },
            {
                id: 18,
                question: "18. How old were you when Misha was born?",
                type: "radio",
                options: [
                    { text: "14", correct: false, emoji: "🔢" },
                    { text: "15", correct: true, emoji: "✨" },
                    { text: "16", correct: false, emoji: "🔢" },
                    { text: "17", correct: false, emoji: "🔢" }
                ]
            },
            {
                id: 19,
                question: "19. In which alliance did Misha first pay attention to you?",
                type: "radio",
                options: [
                    { text: "WAR", correct: false, emoji: "⚔️" },
                    { text: "SDT", correct: false, emoji: "🛡️" },
                    { text: "TRA", correct: false, emoji: "🦅" },
                    { text: "Kor", correct: true, emoji: "👑" }
                ]
            },
            {
                id: 20,
                question: "20. Misha's favorite dog breed:",
                type: "radio",
                options: [
                    { text: "Golden Retriever", correct: false, emoji: "🐕" },
                    { text: "Husky", correct: false, emoji: "🐺" },
                    { text: "Corgi", correct: true, emoji: "🦊" },
                    { text: "Chihuahua", correct: false, emoji: "🐾" }
                ]
            },
            {
                id: 21,
                question: "21. Misha's favorite coffee drink:",
                type: "radio",
                options: [
                    { text: "Cappuccino", correct: false, emoji: "☕" },
                    { text: "Latte", correct: false, emoji: "🥛" },
                    { text: "Americano", correct: false, emoji: "⬛" },
                    { text: "Flat White", correct: true, emoji: "🤎" }
                ]
            },
            {
                id: 22,
                question: "22. What congenital physical health condition does Misha have?",
                type: "radio",
                options: [
                    { text: "ADHD", correct: false, emoji: "⚡" },
                    { text: "Migraines", correct: true, emoji: "🤕" },
                    { text: "Pompitas issues", correct: false, emoji: "🍑" },
                    { text: "Stubbornness", correct: false, emoji: "🐐" }
                ]
            },
            {
                id: 23,
                question: "23. Who does Misha love most in the world?",
                type: "radio",
                options: [
                    { text: "Messi", correct: false, emoji: "⚽" },
                    { text: "Messi", correct: false, emoji: "🐐" },
                    { text: "Lizzy", correct: true, emoji: "💖" },
                    { text: "Ronaldo", correct: false, emoji: "💪" }
                ]
            },
            {
                id: 24,
                question: "24. What is Misha's sexual orientation?",
                type: "radio",
                options: [
                    { text: "Straight", correct: false, emoji: "👤" },
                    { text: "Bisexual", correct: false, emoji: "🏳️‍🌈" },
                    { text: "Gay", correct: true, emoji: "❤️‍🔥" },
                    { text: "Trans", correct: false, emoji: "⚧️" }
                ]
            },
            {
                id: 25,
                question: "25. Which song became associated with you in Misha's mind?",
                type: "radio",
                options: [
                    { text: "500 miles", correct: false, emoji: "🛤️" },
                    { text: "It's You", correct: true, emoji: "🎵" },
                    { text: "Impossible", correct: false, emoji: "💫" },
                    { text: "Turning Page", correct: false, emoji: "📖" }
                ]
            },
            {
                id: 26,
                question: "26. Which musical instruments did Misha learn to play at a high level? (Select 2):",
                type: "checkbox",
                options: [
                    { text: "Piano", correct: false, emoji: "🎹" },
                    { text: "Violin", correct: false, emoji: "🎻" },
                    { text: "Cello", correct: true, emoji: "🎼" },
                    { text: "Guitar", correct: false, emoji: "🎸" },
                    { text: "Cymbaly", correct: true, emoji: "🥁" }
                ]
            },
            {
                id: 27,
                question: "27. Which university subject was the most interesting for Misha?",
                type: "radio",
                options: [
                    { text: "Physics", correct: false, emoji: "⚛️" },
                    { text: "Programming", correct: false, emoji: "💻" },
                    { text: "Philosophy", correct: true, emoji: "🧠" },
                    { text: "Mathematics", correct: false, emoji: "📐" }
                ]
            },
            {
                id: 28,
                question: "28. Misha's favorite music band?",
                type: "radio",
                options: [
                    { text: "Queen", correct: false, emoji: "👑" },
                    { text: "Falling in Reverse", correct: false, emoji: "🔥" },
                    { text: "Linkin Park", correct: true, emoji: "⚡" },
                    { text: "Coldplay", correct: false, emoji: "🌟" }
                ]
            },
            {
                id: 29,
                question: "29. Misha's favorite game?",
                type: "radio",
                options: [
                    { text: "World of Warcraft", correct: false, emoji: "⚔️" },
                    { text: "Dota 2", correct: false, emoji: "🔮" },
                    { text: "Minecraft", correct: true, emoji: "⛏️" },
                    { text: "Counter-Strike", correct: false, emoji: "🎯" }
                ]
            },
            {
                id: 30,
                question: "30. Which sport did Misha start playing earlier than the others?",
                type: "radio",
                options: [
                    { text: "Football", correct: false, emoji: "⚽" },
                    { text: "Basketball", correct: true, emoji: "🏀" },
                    { text: "Hockey", correct: false, emoji: "🏒" }
                ]
            },
            {
                id: 31,
                question: "31. How many general education schools did Misha attend in his life?",
                type: "radio",
                options: [
                    { text: "1", correct: false, emoji: "🏫" },
                    { text: "2", correct: true, emoji: "📚" },
                    { text: "3", correct: false, emoji: "🎒" },
                    { text: "4", correct: false, emoji: "✏️" }
                ]
            },
            {
                id: 32,
                question: "32. What's Misha's small dream for the future?",
                type: "radio",
                options: [
                    { text: "Attend a Linkin Park concert", correct: false, emoji: "🎸" },
                    { text: "Climb Everest", correct: false, emoji: "🏔️" },
                    { text: "Open his own small bar/café", correct: true, emoji: "☕" },
                    { text: "Become a millionaire", correct: false, emoji: "💰" }
                ]
            },
            {
                id: 33,
                question: "33. How many pets lived together with Misha?",
                type: "radio",
                options: [
                    { text: "1", correct: true, emoji: "🐾" },
                    { text: "2", correct: false, emoji: "🐕" },
                    { text: "3", correct: false, emoji: "🐈" },
                    { text: "4", correct: false, emoji: "🐦" }
                ]
            },
            {
                id: 34,
                question: "34. What's Misha's favorite fast food?",
                type: "radio",
                options: [
                    { text: "McDonald's", correct: false, emoji: "🍟" },
                    { text: "Burger King", correct: false, emoji: "🍔" },
                    { text: "Pizza (any)", correct: false, emoji: "🍕" },
                    { text: "KFC", correct: true, emoji: "🍗" }
                ]
            },
            {
                id: 35,
                question: "35. How many relationships has Misha had in his life?",
                type: "radio",
                note: "😉 because you and Misha are already together.",
                options: [
                    { text: "1", correct: false, emoji: "💔" },
                    { text: "2", correct: true, emoji: "❤️" },
                    { text: "3", correct: false, emoji: "💕" },
                    { text: "4", correct: false, emoji: "💞" }
                ]
            }
                ]
            },
            2: {
                type: 'mahjong',
                theme: 'ice',
                buttonLabel: 'Mahjong',
                modalTitle: 'Stage 2: Iztaccihuatl Volcano Mahjong',
                // Персонаж-ведущий этого задания (картинка лежит в mood_chars/anger.png).
                charImg: 'mood_chars/anger.png',
                charName: 'Anger',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до первого уровня маджонга (полностью аналогично dialogue у duel/whale).
                dialogue: [
                    { text: "Well, well... hello, Lizzy." },
                    { text: "We've actually met before — through movie screens and laptop screens." },
                    { text: "I can see the future, you know. And in it... you're absolutely FURIOUS at this quest." },
                    { text: "Mahjong should already be haunting your nightmares after Puzzles & Chaos." },
                    { text: "So — angrily wishing you good luck. And angrily hoping you DON'T make it through!" }
                ],
                // Финальные реплики — показываются один раз после того, как пройдены
                // все уровни маджонга, перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "...Fine. Angrily congratulating you." },
                    { text: "Good luck in the next stages. We won't be seeing each other again!" }
                ]
            },
            3: {
                type: 'ciphers',
                theme: 'talavera',
                buttonLabel: 'Ciphers',
                modalTitle: 'Stage 3: Pico de Orizaba Secret Ciphers',
                // Персонаж-ведущий этого задания (картинка лежит в sherlock_chars/sherlock.png).
                charImg: 'sherlock_chars/sherlock.png',
                charName: 'Sherlock Holmes',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самих шифров (полностью аналогично dialogue у mahjong/duel/whale).
                dialogue: [
                    { text: "Lizzy. Late twenties — no, don't tell me, I already know. Currently mid-scavenger-hunt, slightly nervous, and standing far too close to a phone screen. Obvious." },
                    { text: "I'm told you've reached the ciphers. Good. Finally, something in this app resembling actual work." },
                    { text: "Four messages, four disguises. A Caesar shift, a reflection, a numbers game, and one more I won't spoil — that would be dull, and I am never dull." },
                    { text: "People assume decryption is about mathematics. It isn't. It's about pattern, patience, and refusing to accept the first wrong answer as the last word." },
                    { text: "Somewhere in Orizaba's thin air, Misha left four truths in disguise. Strip away the code, and sentiment is all that's left underneath — which, I admit, is not entirely my area." },
                    { text: "Still. The game, as they say, is on. Don't disappoint me." }
                ],
                // Финальные реплики — показываются один раз после решения всех 4 шифров,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Four for four. No hesitation, no lucky guesses — I was watching. That was deduction, properly done." },
                    { text: "Ordinary people would call this romantic. I call it well-constructed. Either way — congratulations, Lizzy. Orizaba's summit won't climb itself. Off you go." }
                ],
                intro: 'Decode all 4 secret phrases to conquer the summit of Pico de Orizaba:',
                items: [
            {
                id: 1,
                name: "Cipher 1",
                encrypted: "L Oryh Brx Yhub Pxch",
                hint: "“Think of a Roman emperor who loved shifting things forward.”",
                answer: "I Love You Very Much",
                solved: false
            },
            {
                id: 2,
                name: "Cipher 2",
                encrypted: "BLF ZIV NLHG YVZFGRUFO TRIO RM GSRH FMREVIHV",
                hint: "“Sometimes the truth appears only in the mirror.”",
                answer: "You are most beautiful girl in this universe",
                solved: false
            },
            {
                id: 3,
                name: "Cipher 3",
                encrypted: "12 9 26 26 25 8 1 22 5 2 5 19 20 16 15 13 16 9 20 1 19 9 14 20 8 5 23 15 18 12 4",
                hint: "“Every letter has its number — count your way to the secret.”",
                answer: "Lizzy have best pompitas in the world",
                solved: false
            },
            {
                id: 4,
                name: "Cipher 4",
                encrypted: "Tq xzoh xlev mci vspc",
                hint: "“Love is the key — literally.”",
                answer: "I’m glad that you here",
                solved: false
            }
                ]
            },
            4: {
                type: 'passwords',
                theme: 'oaxaca',
                buttonLabel: 'Games',
                modalTitle: 'Stage 4: El Mirador del Cuervo - Beat Misha in 5 Games',
                // Персонаж-ведущий этого задания (картинка лежит в saw_chars/billy.png).
                charImg: 'saw_chars/billy.png',
                charName: 'Billy',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самих 5 игр (полностью аналогично dialogue у ciphers/mahjong/whale).
                dialogue: [
                    { text: "Hello, Lizzy. We meet again." },
                    { text: "Let's play a game. Perhaps you will survive it…" }
                ],
                // Финальные реплики — показываются один раз после ввода всех 5 паролей,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Well then. Today was your lucky day. Live, and move on." }
                ],
                intro: 'Beat Misha in each of these 5 games in another app. He will give you a secret passcode for every win — enter them all below to continue:',
                items: [
                    { id: 1, game: '1. Monopoly', password: 'monopoly-tycoon-214', solved: false },
                    { id: 2, game: '2. Battleship', password: 'battleship-torpedo-58', solved: false },
                    { id: 3, game: '3. Uno', password: 'uno-wildcard-903', solved: false },
                    { id: 4, game: '4. Dominoes', password: 'domino-tiles-47', solved: false },
                    { id: 5, game: '5. Chess', password: 'chess-checkmate-16', solved: false }
                ]
            },
            5: {
                type: 'drawing',
                theme: 'disney',
                buttonLabel: 'Drawing',
                modalTitle: 'Stage 5: Draw Your Disney Hero',
                // Персонаж-ведущая этого задания (картинка лежит в disney_chars/elsa.png).
                charImg: 'disney_chars/elsa.png',
                charName: 'Elsa',
                charClass: 'elsa',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого задания на рисунок (полностью аналогично dialogue у ciphers/passwords).
                dialogue: [
                    { text: "Hello, traveler. Welcome to my kingdom of ice and snow." },
                    { text: "I'm hosting a little art contest today — draw your favorite Disney hero for me." },
                    { text: "And if you happen to draw... me? Well. Perhaps I won't freeze you. No promises." }
                ],
                // Финальные реплики — показываются один раз после ввода пароля,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Your drawing melted my heart. I won't freeze you — now, go on, continue your journey." }
                ],
                intro: 'Draw your favorite Disney cartoon character and send Misha a photo of your drawing. He will give you a magic passcode once he sees your masterpiece!',
                password: 'disney-magic-521',
                solved: false
            },
            6: {
                type: 'drawing',
                theme: 'blossom',
                icon: '👗',
                sparkleIcon: '🌸',
                buttonLabel: 'Photo',
                modalTitle: 'Stage 6: San Miguel de Allende - Pink Dress Photo',
                // Персонаж-ведущая этого задания. Для вступления и прощания — разные картинки
                // (charImg — Рапунцель выглядывает сбоку; outroCharImg — крупный портрет).
                charImg: 'disney_chars/rapunzel_peek.png',
                outroCharImg: 'disney_chars/rapunzel_close.png',
                charName: 'Rapunzel',
                charClass: 'rapunzel',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого задания на фото (полностью аналогично dialogue у ciphers/passwords/elsa).
                dialogue: [
                    { text: "Oh, hi Lizzy! I heard you've got a gorgeous pink dress too." },
                    { text: "Maybe you should show it to Misha?" }
                ],
                // Финальные реплики — показываются один раз после ввода пароля,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Ohh, you look absolutely gorgeous and sexy in that dress." },
                    { text: "Beauty like that shouldn't be sitting in a tower... you should be sitting on Misha's tower instead. …Oh." }
                ],
                intro: 'Put on your prettiest pink dress and send Misha a full-length photo of you standing in it. The moment he sees how beautiful you look, he\'ll give you the secret passcode to continue our journey!',
                placeholder: 'Enter the secret passcode...',
                unlockLabel: '🌷 Unlock 🌷',
                completeMessage: '🌸 Absolutely stunning! Your pink dress photo unlocked the next chapter!',
                password: 'sanmiguel-rose-608',
                solved: false
            },
            // ===================================================================
            // ЛОКАЦИЯ 7: Guanajuato — "The Interrogation" (тип 'truthlie')
            // Детективный квиз "правда/ложь". Игрок отвечает Yes/No на каждый
            // вопрос: верный ответ +4 очка, неверный -2. Нужно набрать 100 очков,
            // чтобы локация засчиталась. После достижения 100 очков игроку
            // предлагается выбор — закрыть дело сразу или пройти оставшиеся файлы
            // (доп. ответы после 100 очков на счёт уже не влияют).
            // Движок: startTruthLieGame() и связанные функции ниже в файле.
            // ===================================================================
            7: {
                type: 'truthlie',
                theme: 'detective',
                buttonLabel: 'Interrogation',
                modalTitle: 'Stage 7: Guanajuato — The Interrogation',
                // Персонаж-ведущий этого задания (картинка лежит в sherlock_chars/sherlock.png,
                // тот же Шерлок, что и в шифрах Pico de Orizaba — переиспользуем charClass 'sherlock'
                // и его CSS-палитру/анимацию из стадии 3).
                charImg: 'sherlock_chars/sherlock.png',
                charName: 'Sherlock Holmes',
                charClass: 'sherlock',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого допроса (полностью аналогично dialogue у ciphers/passwords/drawing).
                dialogue: [
                    { text: "Ah, Lizzy. Guanajuato — mines, tunnels, secrets. My favorite kind of city." },
                    { text: "Let's find out the whole truth about Misha, shall we? Every rumor, every alibi, every carefully rehearsed 'fact'." },
                    { text: "I'll read the claims. You tell me true or false. Try not to bore me with hesitation — I can always tell." }
                ],
                // Финальные реплики — показываются один раз после того, как дело закрыто
                // (набрано 100 очков), перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Case closed. Every file examined, every lie exposed — you have a detective's instincts, Lizzy." },
                    { text: "Misha, I trust, has no secrets left worth keeping from you. Off to the next mystery, then." }
                ],
                intro: "Welcome to the underground tunnels of Guanajuato, detective. Somewhere in these silver-mine passages is the real Misha file — but it's been mixed with false leads. I'll read you a claim; you decide if it's TRUE or FALSE. Answer sharp, and the case will close itself.",
                questions: [
                    { id: 1, question: "Case File #1: Is it true that Misha's height is over 180 cm?", answer: true, fact: "True. Misha is 184 cm tall." },
                    { id: 2, question: "Case File #2: Is it true that Misha can play, even at a very basic level, 5 different musical instruments?", answer: false, fact: "False. It's 4 instruments — cello, piano, guitar, and cimbalom." },
                    { id: 3, question: "Case File #3: Is it true that Misha loves spicy food and would definitely fall in love with Mexican cuisine?", answer: true, fact: "True. Misha adores spicy food! Though he does worry about his pompitas while eating it." },
                    { id: 4, question: "Case File #4: Is it true that Misha never kissed anyone while he was still in school?", answer: true, fact: "True. Misha had his first kiss only at the end of his first year of university." },
                    { id: 5, question: "Case File #5: Is it true that, as a 7th grader, Misha earned $500 over a couple weeks of summer break?", answer: true, fact: "True. Misha built a website for a construction company, and they paid him $500 for it." },
                    { id: 6, question: "Case File #6: Is it true that Misha never drank alcohol before his high school graduation?", answer: false, fact: "False. At New Year's and big family gatherings (when it wasn't just him and his parents), from around age 11 he was sometimes given a glass of champagne or white wine." },
                    { id: 7, question: "Case File #7: Is it true that Misha was never close to being expelled from university?", answer: false, fact: "False. In the middle of his second year, having completely neglected his studies, if he hadn't passed his Electricity Physics test, he could have been sent to a review committee — and failing that could have meant expulsion." },
                    { id: 8, question: "Case File #8: Is it true that Misha never smoked before finishing school?", answer: true, fact: "True. Misha tried his first cigarette only at a friend's birthday party, during the summer between his last year of school and his first year of university. Before that he was strictly against smoking." },
                    { id: 9, question: "Case File #9: Is it true that before the age of 13, Misha had never masturbated?", answer: true, fact: "True. Misha only found out what that was in the summer of 2011, and that's when he first started trying it." },
                    { id: 10, question: "Case File #10: Is it true that Misha was always an excellent music school student?", answer: false, fact: "False. From 2nd to 3rd grade Misha studied terribly, never practiced, and always got bad grades on subjects and exams. His attitude only changed after he reconsidered his relationship with music." },
                    { id: 11, question: "Case File #11: Is it true that Messi was Misha's first favorite football player?", answer: false, fact: "False. Misha's first favorite football player was the Frenchman Thierry Henry." },
                    { id: 12, question: "Case File #12: Is it true that Misha once watched a person die right in front of him?", answer: true, fact: "True. In the summer of 2019, a car struck and killed a person right in front of Misha." },
                    { id: 13, question: "Case File #13: Is it true that Misha's favorite drink is beer?", answer: false, fact: "False. Misha's favorite drink is coffee-based — an Espresso Tonic." },
                    { id: 14, question: "Case File #14: Is it true that Linkin Park was the first band Misha ever listened to?", answer: false, fact: "False. The first band was Europe, with the song \"The Final Countdown.\"" },
                    { id: 15, question: "Case File #15: Is it true that Misha can't eat mushrooms?", answer: true, fact: "True. Only in very small amounts, like on pizza and finely chopped — otherwise he gets a gag reflex." },
                    { id: 16, question: "Case File #16: Is it true that Misha once traveled to Italy for a music competition?", answer: true, fact: "True. In 7th grade of music school, Misha qualified for a festival in the city of Padua and went there, though he barely got to see the city." },
                    { id: 17, question: "Case File #17: Is it true that Misha is afraid of flying?", answer: true, fact: "True. Misha's favorite way to travel is by train." },
                    { id: 18, question: "Case File #18: Is it true that Misha started learning programming in 8th grade, earlier than most people who start in university?", answer: true, fact: "True. Misha started attending programming courses that were organized at his school." },
                    { id: 19, question: "Case File #19: Is it true that Misha has an almost phenomenal memory?", answer: true, fact: "True. Misha has a very good memory, with one exception — names. He tends to forget a person's name after meeting them the first time, and only remembers it the second time." },
                    { id: 20, question: "Case File #20: Is it true that all 32 of Misha's teeth grew in without any problems?", answer: true, fact: "True. Even his wisdom teeth grew in without needing removal — though he's self-conscious about his teeth since they're not straight and he never wore braces, so he prefers to smile with his mouth closed." },
                    { id: 21, question: "Case File #21: Is it true that Zidane was Misha's favorite player at the 2006 World Cup?", answer: false, fact: "False. His favorite player of that specific World Cup was Buffon, for his incredible penalty saves in the final." },
                    { id: 22, question: "Case File #22: Is it true that Misha once shaved his head completely bald?", answer: false, fact: "False. Only once did he go very, very short — he doesn't like the shape of his head, so he's never done it again." },
                    { id: 23, question: "Case File #23: Is it true that Misha has worn makeup?", answer: true, fact: "True. Once, for a photoshoot for a university contest." },
                    { id: 24, question: "Case File #24: Is it true that Misha has never broken any bones?", answer: true, fact: "True. Misha has never had any bone fractures." },
                    { id: 25, question: "Case File #25: Is it true that Misha is gay?", answer: true, fact: "True. But Lizzy's incredible sexiness changed his mind." },
                    { id: 26, question: "Case File #26: Is it true that the first computer game Misha ever played was Counter-Strike?", answer: false, fact: "False. The first game was Spider-Man. A classmate lent him the disc, and he played it on his dad's laptop." },
                    { id: 27, question: "Case File #27: Is it true that Misha has never had a serious burn?", answer: false, fact: "False. While visiting his grandparents in Russia with his parents, Misha touched a hot iron for some reason — it was a very painful burn on his finger that took a whole month to heal." },
                    { id: 28, question: "Case File #28: Is it true that Misha is afraid of heights?", answer: false, fact: "False. Misha loves heights, and especially the views from up high — he used to love sneaking illegally into tall buildings in Minsk to enjoy the view and take a nice photo." },
                    { id: 29, question: "Case File #29: Is it true that Misha was once stung by a wasp?", answer: false, fact: "False. Misha has never been stung by bees, wasps, hornets, or anything like that." },
                    { id: 30, question: "Case File #30: Is it true that Misha once nearly drowned while swimming in a river?", answer: false, fact: "False. Misha learned to swim well from a young age." },
                    { id: 31, question: "Case File #31: Is it true that Misha has never sung in public?", answer: false, fact: "False. Misha had to perform at concerts at his music school." },
                    { id: 32, question: "Case File #32: Is it true that Misha has never been anywhere outside the European continent?", answer: true, fact: "True. Most of Misha's travels happened during his school years, with his parents, and they were all trips within Europe." },
                    { id: 33, question: "Case File #33: Is it true that Misha once ate an insect on a dare?", answer: false, fact: "False. Misha has never intentionally eaten an insect." },
                    { id: 34, question: "Case File #34: Is it true that Misha once nearly died during a rainstorm?", answer: true, fact: "True. This happened in 2024 — Misha went out for a walk in a park, a powerful storm started, and strong winds nearly caused a tree to fall on him, but he managed to run out of the way just in time." },
                    { id: 35, question: "Case File #35: Is it true that Misha has never kissed a guy?", answer: false, fact: "False. Once, after losing a game of spin-the-bottle — but it wasn't a real kiss." },
                    { id: 36, question: "Case File #36: Is it true that Misha has never used drugs?", answer: false, fact: "False. He has, but strictly marijuana." },
                    { id: 37, question: "Case File #37: Is it true that Misha has never been in jail?", answer: false, fact: "False. Misha spent 15 days in jail because of his political stance." },
                    { id: 38, question: "Case File #38: Is it true that Misha has never had surgery?", answer: true, fact: "True. Misha has never had any surgical operations." },
                    { id: 39, question: "Case File #39: Is it true that Misha has never gambled at a casino?", answer: true, fact: "True. Misha only ever went into a casino when he couldn't buy cigarettes anywhere else, since casinos are open 24/7 and always have cigarettes." },
                    { id: 40, question: "Final File #40: Is it true that Misha loves Lizzy very much?", answer: true, fact: "True. So much — he's never loved anyone the way he loves you! Good luck on the next stages, mi amor <3" }
                ]
            },
            // ===================================================================
            // ЛОКАЦИЯ 8: Zacatecas — "The Serenade" (тип 'drawing', тема 'music')
            // Переиспользуем движок startDrawingGame()/checkDrawingPassword() —
            // одно поле пароля, задание выполняется вне сайта (запись двух песен
            // отправляется в чат), здесь только выдача пароля после выполнения.
            // ===================================================================
            8: {
                type: 'drawing',
                theme: 'music',
                icon: '🎤',
                sparkleIcon: '🎵',
                buttonLabel: 'Serenade',
                modalTitle: 'Stage 8: Zacatecas — The Serenade',
                // Персонаж-ведущая этого задания (картинка лежит в music_chars/sia.png).
                charImg: 'music_chars/sia.png',
                charName: 'Sia',
                charClass: 'sia',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого задания на серенаду (полностью аналогично dialogue у ciphers/
                // passwords/drawing/truthlie).
                dialogue: [
                    { text: "Well hello there, Lizzy. I have to say — you've arrived in this town at exactly the right moment." },
                    { text: "A karaoke contest is just about to start! And from everything Misha's told me about you… I'd say you have every chance of winning." },
                    { text: "So go on — sing your heart out, and continue your adventure." }
                ],
                // Финальные реплики — показываются один раз после ввода пароля,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Wow. You… you actually outsang me. That voice of yours is pure velvet — sweet, warm, unforgettable." },
                    { text: "Good luck out there, Lizzy. Wherever this romantic adventure takes you next." }
                ],
                intro: "High above Zacatecas, with the whole rose-stone city glowing below, it's time for a serenade. Record yourself singing two songs and send both recordings to me in our chat: one song in English, and one song in Spanish. The moment I've listened to both, I'll send you the secret passcode to unlock the next stage.",
                placeholder: 'Enter the secret passcode...',
                unlockLabel: '🎶 Unlock 🎶',
                completeMessage: '🎶 Beautiful! Your English and Spanish serenades unlocked the next chapter of our journey!',
                password: 'zacatecas-serenade-19',
                solved: false
            },
            // ===================================================================
            // ЛОКАЦИЯ 9: Tecate — "The Border Town Quest" (тип 'drawing', тема 'tecate')
            // Чек-лист из 4 фото в реальном городе Текате + одно поле пароля,
            // который ты выдаёшь вручную после получения всех 4 фото в чате.
            // Есть кнопка "пропустить", если локация покажется небезопасной.
            // ===================================================================
            9: {
                type: 'drawing',
                theme: 'tecate',
                icon: '📸',
                sparkleIcon: '🌶️',
                buttonLabel: 'Photo Quest',
                modalTitle: 'Stage 9: Tecate — The Border Town Quest',
                // Два персонажа-ведущих этого задания — сначала на сцене только McQueen,
                // Snappy присоединяется позже (см. поле onStage у нужных реплик dialogue/
                // outroDialogue ниже). Картинки: tecate_chars/mcqueen.png, tecate_chars/snappy.png.
                characters: {
                    mcqueen: { img: 'tecate_chars/mcqueen.png', name: 'Lightning McQueen', charClass: 'mcqueen' },
                    snappy: { img: 'tecate_chars/snappy.png', name: 'Snappy', charClass: 'snappy' }
                },
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого фото-квеста (полностью аналогично dialogue у ciphers/passwords/drawing).
                dialogue: [
                    { speaker: 'mcqueen', onStage: ['mcqueen'], text: "Well hey there, Lizzy! Ka-chow — good to see you." },
                    { speaker: 'mcqueen', onStage: ['mcqueen'], text: "You ready for a little adventure? I've got four wheels and zero patience for waiting around." },
                    { speaker: 'mcqueen', onStage: ['mcqueen'], text: "Time to get out of the house, hop in the car, and take a little road trip around Tecate." },
                    { speaker: 'mcqueen', onStage: ['mcqueen'], text: "Oh — right, almost forgot. Grab my buddy Snappy too. You just saw him at the movies, in Toy Story 5!" },
                    { speaker: 'snappy', onStage: ['mcqueen', 'snappy'], text: "Hey there! Wanna cruise around Tecate with us?" }
                ],
                // Финальные реплики — показываются один раз после ввода пароля,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { speaker: 'mcqueen', onStage: ['mcqueen', 'snappy'], text: "That was one fun ride, Lizzy. Thanks for letting us tag along." },
                    { speaker: 'snappy', onStage: ['mcqueen', 'snappy'], text: "And I got some great shots! These memories are keepers." },
                    { speaker: 'mcqueen', onStage: ['mcqueen', 'snappy'], text: "Good luck out there. Ka-chow!" }
                ],
                introActionLabel: '🚗 Let\'s hit the road ➔',
                intro: "Time for a little border-town adventure! Take 4 photos around Tecate and send them all to me in our chat. Once I've got all 4, I'll send you the secret passcode to unlock the next stage.",
                checklist: [
                    { icon: '🥐', text: "A photo with the tastiest pastry (your pick!) from El Mejor Pan de Tecate. If Nahuel is with you, get him a treat too!" },
                    { icon: '☕', text: "A photo with a delicious coffee from Kilolibra Cafe." },
                    { icon: '🎨', text: "A photo in front of the colorful letters in Tecate Park." },
                    { icon: '🍺', text: "A photo in front of Cervecería Tecate." }
                ],
                safetyNote: "⚠️ If this location doesn't feel safe to visit, that's completely okay — just message me and we'll figure it out together.",
                placeholder: 'Enter the secret passcode...',
                unlockLabel: '🌵 Unlock 🌵',
                completeMessage: '🌶️ Amazing! Your Tecate photo quest unlocked the next chapter of our journey!',
                password: 'tecate-quest-24',
                solved: false
            },
            // ===================================================================
            // ЛОКАЦИЯ 10: Tequila — "Aguas Frescas Challenge" (тип 'drinks', тема 'aguas')
            // 3 карточки с напитками, каждая переворачивается по клику (CSS 3D flip),
            // показывая ингредиенты и рецепт. Нужно приготовить ОДИН из трёх на выбор,
            // прислать фото в чат, затем ввести один общий пароль внизу.
            // ===================================================================
            10: {
                type: 'drinks',
                theme: 'aguas',
                icon: '🍹',
                sparkleIcon: '🌺',
                buttonLabel: 'Drink Challenge',
                modalTitle: 'Stage 10: Tequila — Aguas Frescas Challenge',
                // Персонажи-ведущие этого задания (картинка лежит в
                // beauty_beast_chars/potts_chip.png — Миссис Поттс и Чип уже вместе на одной картинке).
                charImg: 'beauty_beast_chars/potts_chip.png',
                charName: 'Mrs. Potts & Chip',
                charClass: 'potts',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого задания на напиток (полностью аналогично dialogue у ciphers/passwords/drawing).
                dialogue: [
                    { text: "Oh, hello there, dearie! You must be Lizzy." },
                    { text: "We're just having ourselves a little tea party over here — would you like to join us with a drink of your own?" }
                ],
                // Финальные реплики — показываются один раз после ввода пароля,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Ooh, what a lovely drink you've made!" },
                    { text: "Perhaps you should pour it right into us, dearie…" }
                ],
                intro: "Every Mexican fiesta needs a great drink! Pick ONE of the three classic non-alcoholic recipes below (tap a card to flip it and read the recipe), make it, and send me a photo. Once I've seen it, I'll send you the secret passcode to unlock the next stage.",
                drinks: [
                    {
                        id: 1,
                        name: "Agua de Jamaica",
                        subtitle: "Classic hibiscus cooler",
                        emoji: "🌺",
                        ingredients: [
                            "Dried hibiscus flowers (flor de jamaica) — 1 cup",
                            "Water — 8 cups (2 liters)",
                            "Sugar — 1/2 to 3/4 cup (to taste)",
                            "Ice — plenty",
                            "Lime — 1, for serving"
                        ],
                        steps: [
                            "Bring 4 cups of water, the hibiscus flowers and the sugar to a boil in a pot.",
                            "Lower the heat, simmer 2–3 minutes, then remove from heat. Cover and let steep for 20 minutes.",
                            "Strain the syrup through a sieve into a large pitcher; discard the flowers.",
                            "Stir in the remaining 4 cups of cold water.",
                            "Chill well and serve over plenty of ice with a squeeze of fresh lime."
                        ]
                    },
                    {
                        id: 2,
                        name: "Mangonada",
                        subtitle: "Icy mango & chamoy treat",
                        emoji: "🥭",
                        ingredients: [
                            "Frozen mango chunks — 2–3 cups",
                            "Lime juice — from 2 fresh limes",
                            "Water or mango nectar — 1/2 cup (to help blend)",
                            "Sugar or honey — 1–2 tbsp (if the mango isn't sweet enough)",
                            "Chamoy sauce — to taste",
                            "Tajín seasoning — to taste",
                            "Tamarind candy straw (tarugo) — optional"
                        ],
                        steps: [
                            "Blend the frozen mango, lime juice, sugar and a splash of water/nectar into a thick, smooth puree.",
                            "Drizzle Chamoy sauce down the inside walls of a clear glass; sprinkle a little Tajín on the bottom.",
                            "Pour in mango puree halfway, add another drizzle of Chamoy and a pinch of Tajín, then top off with more puree.",
                            "Garnish with extra Chamoy and Tajín, and add a tamarind straw or a regular straw and spoon."
                        ]
                    },
                    {
                        id: 3,
                        name: "Agua de Tamarindo",
                        subtitle: "Deep, tangy-sweet cooler",
                        emoji: "🟤",
                        ingredients: [
                            "Fresh tamarind pods — 15–20 (about 250–300 g)",
                            "Water — 8 cups (2 liters)",
                            "Sugar, ideally brown sugar or piloncillo — 1/2 to 1 cup (adjust to taste)",
                            "Ice"
                        ],
                        steps: [
                            "Peel the tamarind pods, removing the brittle shell and the tough fibrous strings.",
                            "Put the pulp (with pits) in a pot with 4 cups of water and the sugar; boil, then simmer 10–15 minutes until very soft.",
                            "Remove from heat and mash the pulp with a spoon or gloved hands to separate it from the pits.",
                            "Push the mixture through a coarse sieve into a pitcher, leaving pits and fibers behind.",
                            "Stir in the remaining 4 cups of cold water, chill, and serve with plenty of ice."
                        ]
                    }
                ],
                placeholder: 'Enter the secret passcode...',
                unlockLabel: '🍹 Unlock 🍹',
                completeMessage: '🌺 Salud! Your homemade agua fresca unlocked the next chapter of our journey!',
                password: 'tequila-agua-fresca',
                solved: false
            },
            // ===================================================================
            // ЛОКАЦИЯ 11: La Quemada Ruins — "Belarusian Feast Challenge"
            // (тип 'drinks' — движок переиспользуется, он универсальный: карточки-рецепты
            // + одно поле пароля. Тема оформления новая — 'blini', уютные домашние цвета.)
            // 3 карточки-рецепта, каждая переворачивается по клику, показывая ингредиенты
            // и рецепт. Нужно приготовить ОДИН из трёх на выбор, прислать фото в чат,
            // затем ввести общий пароль внизу.
            // ===================================================================
            11: {
                type: 'drinks',
                theme: 'blini',
                icon: '🥔',
                sparkleIcon: '🧈',
                buttonLabel: 'Feast Challenge',
                modalTitle: 'Stage 11: La Quemada — Belarusian Feast Challenge',
                // Персонажи-ведущие этого задания — сначала на сцене только Remy, брат Emile
                // присоединяется позже (см. поле onStage у нужных реплик outroDialogue ниже).
                // Картинки: ratatouille_chars/remy.png, ratatouille_chars/emile.png.
                characters: {
                    remy: { img: 'ratatouille_chars/remy.png', name: 'Remy', charClass: 'remy' },
                    emile: { img: 'ratatouille_chars/emile.png', name: 'Emile', charClass: 'emile' }
                },
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого кулинарного задания (полностью аналогично dialogue у ciphers/passwords/drawing/drinks).
                dialogue: [
                    { speaker: 'remy', onStage: ['remy'], text: "Hola, hermosa. It all started with me, didn't it?" },
                    { speaker: 'remy', onStage: ['remy'], text: "I'm so happy to see you again." },
                    { speaker: 'remy', onStage: ['remy'], text: "I think it's time to fill that stomach of yours with something truly special — at least according to Belarusian food connoisseurs." }
                ],
                // Финальные реплики — показываются один раз после ввода пароля, перед тем как
                // локация засчитается пройденной. Emile присоединяется на второй реплике.
                outroDialogue: [
                    { speaker: 'remy', onStage: ['remy'], text: "Ooh, what a wonderful dish you've made… Te amo mucho, mi amor." },
                    { speaker: 'emile', onStage: ['remy', 'emile'], text: "Oops, sorry — everything was so delicious that while you two were busy with your romance… I ate it all. Hic. Oops…" }
                ],
                intro: "Time to bring a taste of Belarus to the table! Pick ONE of the three classic recipes below (tap a card to flip it and read the recipe), make it, and send me a photo. Once I've seen it, I'll send you the secret passcode to unlock the next stage.",
                drinks: [
                    {
                        id: 1,
                        name: "Draniki",
                        subtitle: "Classic potato pancakes",
                        emoji: "🥔",
                        ingredients: [
                            "Potatoes (starchy varieties) — 1 kg",
                            "Onion — 1 large",
                            "Egg — 1",
                            "Salt — to taste",
                            "Vegetable oil — for frying",
                            "Sour cream — for serving"
                        ],
                        steps: [
                            "Grate the peeled potatoes and onion on the finest grater into a fine pulp, alternating potato and onion — the onion juice keeps the batter from turning dark.",
                            "If there's too much liquid, drain briefly through a sieve, but don't squeeze it dry — the batter should stay juicy.",
                            "Mix in the egg and salt; stir quickly and thoroughly.",
                            "Heat oil well in a pan. Spoon out small pancakes and fry over medium heat until golden, about 3–4 minutes per side.",
                            "Serve straight from the pan, hot, with a generous scoop of sour cream."
                        ]
                    },
                    {
                        id: 2,
                        name: "Holodnik",
                        subtitle: "Chilled beet & kefir soup",
                        emoji: "🍲",
                        ingredients: [
                            "Beets (boiled or roasted) — 2 medium",
                            "Fresh cucumbers — 2–3",
                            "Hard-boiled eggs — 3–4",
                            "Green onion and fresh dill — a big bunch",
                            "Kefir (2.5% or 3.2% fat) — 1 liter",
                            "Cold boiled water — 0.5 liter",
                            "Salt, lemon juice — to taste"
                        ],
                        steps: [
                            "Finely chop the green onion and dill, put them in a pot, salt lightly, and gently press with a spoon to release their juice and aroma.",
                            "Grate the boiled beets and fresh cucumbers on a coarse grater (or cut into thin strips) and add to the pot.",
                            "Finely chop the eggs and add them too (save a few halves for garnish).",
                            "Pour in the cold kefir and water, stir well; adjust with salt and a splash of lemon juice if you want more tang.",
                            "Chill for at least 30–40 minutes. Serve cold, traditionally with a side of hot boiled potatoes and dill."
                        ]
                    },
                    {
                        id: 3,
                        name: "Nalistniki with Cottage Cheese",
                        subtitle: "Baked crepes, Polesye style",
                        emoji: "🥞",
                        ingredients: [
                            "Crepes: milk — 500 ml, eggs — 3, flour — 1 cup, vegetable oil — 2 tbsp, sugar — 1 tbsp, pinch of salt",
                            "Filling: full-fat cottage cheese (tvorog) — 500 g, egg — 1, sugar — 2–3 tbsp, vanilla sugar — 1 tsp",
                            "For baking: butter — 70 g, sour cream — 2–3 tbsp"
                        ],
                        steps: [
                            "Blend all the crepe ingredients until smooth with no lumps — the batter should be thin. Fry very thin crepes.",
                            "Push the cottage cheese through a sieve or blend until creamy; mix with the egg, sugar, and vanilla sugar.",
                            "Spread a thin layer of filling on each crepe, roll into a tight tube, and cut each tube diagonally into 2–3 pieces.",
                            "Butter the bottom of a baking dish and layer in the nalistniki, tucking pieces of butter and dabs of sour cream between layers.",
                            "Cover with foil or a lid and bake at 150°C (300°F) for 30–40 minutes, until soaked in butter, silky soft, and melt-in-the-mouth."
                        ]
                    }
                ],
                placeholder: 'Enter the secret passcode...',
                unlockLabel: '🥔 Unlock 🥔',
                completeMessage: '🧈 Delicious! Your homemade Belarusian feast unlocked the next chapter of our journey!',
                password: 'draniki-holodnik-11',
                solved: false
            },
            // ===================================================================
            // ЛОКАЦИЯ 12: Durango — "Movie Still Quiz" (тип 'moviequiz', тема 'cinema')
            // На каждый вопрос — кадр из фильма (картинка) и текстовое поле для ответа
            // (полное английское название фильма; если это часть серии — с номером/
            // подзаголовком). Есть кнопка-подсказка, раскрывающая скрытый хинт.
            // Правильный ответ → следующий вопрос; неверный → показывается ошибка.
            // ===================================================================
            12: {
                type: 'moviequiz',
                theme: 'cinema',
                modalTitle: 'Stage 12: Durango — Movie Still Quiz',
                // Персонаж-ведущий этого задания — Homer Simpson, прибывающий через
                // портал в стиле Doctor Strange (картинка лежит в homer_chars/homer.png).
                charImg: 'homer_chars/homer.png',
                charName: 'Homer Simpson',
                charClass: 'homer',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самой викторины (полностью аналогично dialogue у mahjong/duel/whale).
                // Гомер появляется из портала в стиле Doctor Strange (см. .duel-char-homer
                // и @keyframes homerPortalIn/portalSpin в styles.css).
                dialogue: [
                    { text: "Mmm... portal travel. Almost as dizzying as the time I fell down Springfield Gorge." },
                    { text: "Homer Simpson, at your service! Word on the street — well, word through a swirling orange portal — is that Lizzy here is a total geek and nerd." },
                    { text: "And not just any nerd — apparently you know your movies inside and out. That's my kind of people. I once watched a movie so many times I forgot to eat a donut. Once." },
                    { text: "Let's see if that reputation holds up, Durango-style. Ready when you are." }
                ],
                // Финальные реплики — показываются один раз после того, как пройдены все
                // вопросы викторины, перед тем как локация засчитается пройденной. На последней
                // реплике Гомер уходит обратно в портал (см. .portal-exit / @keyframes homerPortalOut).
                outroDialogue: [
                    { text: "Mmm-hm. Mmm-hm. Okay, WOW. You actually knew all of those." },
                    { text: "I'm not easily impressed — I once thought 'Homer' was directed by a guy named Homer — but that was genuinely impressive movie knowledge." },
                    { text: "Alright, this portal's not gonna hold itself open forever. Duty calls back in Springfield — probably a donut emergency." },
                    { text: "Nerd on, Lizzy. Nerd on." }
                ],
                intro: "Each round shows a still from a movie we both know. Type the full movie title in English — if it's part of a series, add the number or subtitle too. Stuck? Tap the hint button below the picture.",
                placeholder: "Type the full movie title...",
                questions: [
                    { image: 'films/film1.jpg', hint: "You're supposed to know where this may come from.", answers: ["what dreams may come"] },
                    { image: 'films/film2.jpg', hint: "Fat and orange.", answers: ["garfield", "the garfield movie"] },
                    { image: 'films/film3.jpg', hint: "Is this English city having a sea?", answers: ["manchester by the sea"] },
                    { image: 'films/film4.jpg', hint: "Aren't you the one who offered to watch it?", answers: ["project hail mary"] },
                    { image: 'films/film5.jpg', hint: "You really need a clue? O_O", answers: ["the lake house", "lake house"] },
                    { image: 'films/film6.jpg', hint: "Kaleo.", answers: ["the secret life of walter mitty", "secret life of walter mitty"] },
                    { image: 'films/film7.jpg', hint: "?????????????????????????HINT????????????????", answers: ["house of the dragon"] },
                    { image: 'films/film8.jpg', hint: "I'm glad that you're here.", answers: ["the boy the mole the fox and the horse", "boy the mole the fox and the horse"] },
                    { image: 'films/film9.jpg', hint: "How dare you stand where he stood two parts of movies ago?", answers: ["harry potter and the half blood prince", "harry potter and the half-blood prince"] },
                    { image: 'films/film10.jpg', hint: "Can you really not make this choice of movie?", answers: ["mr nobody", "mister nobody"] },
                    { image: 'films/film11.jpg', hint: "Hermosa, we watched a k-drama with almost the same name.", answers: ["beauty and the beast"] },
                    { image: 'films/film12.jpg', hint: "Really? Look at the details.", answers: ["spider man into the spider verse", "spiderman into the spiderverse"] },
                    { image: 'films/film13.jpg', hint: "Your movie.", answers: ["17 again", "seventeen again"] },
                    { image: 'films/film14.jpg', hint: "Clue on the poster.", answers: ["zootopia 2", "zootopia ii"] },
                    { image: 'films/film15.jpg', hint: "Oh, come on, get out of your tower.", answers: ["tangled"] },
                    { image: 'films/film16.jpg', hint: "You're gonna be freezing in Belarusian weather.", answers: ["frozen"] },
                    { image: 'films/film17.jpg', hint: "Birds flying high...", answers: ["the boy and the heron", "boy and the heron"] },
                    { image: 'films/film18.jpg', hint: "That is our first date.", answers: ["a dogs purpose", "dogs purpose"] },
                    { image: 'films/film19.jpg', hint: "-_-", answers: ["miss night and day"] },
                    { image: 'films/film20.jpg', hint: "Not this time — why have I been sending you so much from this movie if you still can't guess it?", answers: ["ratatouille"] }
                ],
                completeMessage: "🎬 That's a wrap! You know our movie nights better than IMDb.",
                solved: false
            },
            13: {
                type: 'flagquiz',
                theme: 'travel',
                buttonLabel: 'Flag Quiz',
                modalTitle: 'Stage 13: Flag Quiz — World Tour',
                // Персонаж-ведущий этого задания — искатель приключений в стиле Indiana Jones
                // (картинка лежит в indy_chars/indy.png).
                charImg: 'indy_chars/indy.png',
                charName: 'Indiana Jones',
                charClass: 'indy',
                // Вступительные реплики — показываются один раз при открытии задания, до
                // экрана с правилами (полностью аналогично dialogue у mahjong/duel/whale).
                dialogue: [
                    { text: "Well, well. Lizzy, right? Heh — you've got the same look in your eye that I do right before a good adventure." },
                    { text: "Word gets around, you know. I've heard just how much you've traveled — more stamps in your passport than half the guys I meet in dusty old libraries." },
                    { text: "But here's the real question: after all those trips, do you actually remember the places you've been — and which flag belongs to which?" },
                    { text: "Let's find out. Grab your hat. We're doing this the old-fashioned way." }
                ],
                // Финальные реплики — показываются один раз после завершения викторины
                // (кнопка "Finish the Journey" / "Leave for Coahuila Plains"), перед тем как
                // локация засчитается пройденной.
                outroDialogue: [
                    { text: "Ha! I'll admit, I'm impressed. Really impressed — and that doesn't happen often in my line of work." },
                    { text: "You know, with knowledge like that at my side, I bet we'd have found the Holy Grail in half the time. Maybe skipped a boulder or two." },
                    { text: "Good luck out there on the rest of this adventure, Lizzy. Something tells me you're going to need a lot less luck than most." }
                ],
                intro: "Before the train leaves Torreón, let's see how well you know the world! A flag will appear — pick the country it belongs to from four options.",
                goal: 172,
                // Каждая страна даёт 3/2/1 очко за угадывание с 1-й/2-й/3-й попытки (0, если не угадано за 3 попытки).
                // Варианты ответа (4 штуки, включая верный) собираются случайно из этого же списка при рендере вопроса —
                // отдельно вручную прописывать неверные варианты не нужно.
                // Цель (goal) держится равной числу стран в списке — как и было в исходной
                // версии (100 стран → 100 очков), пропорционально увеличена вместе со
                // списком (было 100 стран, стало 172).
                countries: [
                    // Северная Америка
                    { name: "Canada", code: "ca" },
                    { name: "United States", code: "us" },
                    // Центральная Америка и Карибы
                    { name: "Mexico", code: "mx" },
                    { name: "Guatemala", code: "gt" },
                    { name: "Belize", code: "bz" },
                    { name: "Honduras", code: "hn" },
                    { name: "El Salvador", code: "sv" },
                    { name: "Nicaragua", code: "ni" },
                    { name: "Costa Rica", code: "cr" },
                    { name: "Panama", code: "pa" },
                    { name: "Cuba", code: "cu" },
                    { name: "Jamaica", code: "jm" },
                    { name: "Haiti", code: "ht" },
                    { name: "Dominican Republic", code: "do" },
                    { name: "Bahamas", code: "bs" },
                    { name: "Trinidad and Tobago", code: "tt" },
                    // Южная Америка
                    { name: "Brazil", code: "br" },
                    { name: "Argentina", code: "ar" },
                    { name: "Chile", code: "cl" },
                    { name: "Colombia", code: "co" },
                    { name: "Peru", code: "pe" },
                    { name: "Ecuador", code: "ec" },
                    { name: "Bolivia", code: "bo" },
                    { name: "Venezuela", code: "ve" },
                    { name: "Uruguay", code: "uy" },
                    { name: "Paraguay", code: "py" },
                    { name: "Guyana", code: "gy" },
                    { name: "Suriname", code: "sr" },
                    // Европа
                    { name: "United Kingdom", code: "gb" },
                    { name: "France", code: "fr" },
                    { name: "Germany", code: "de" },
                    { name: "Italy", code: "it" },
                    { name: "Spain", code: "es" },
                    { name: "Portugal", code: "pt" },
                    { name: "Netherlands", code: "nl" },
                    { name: "Belgium", code: "be" },
                    { name: "Switzerland", code: "ch" },
                    { name: "Austria", code: "at" },
                    { name: "Poland", code: "pl" },
                    { name: "Czech Republic", code: "cz" },
                    { name: "Slovakia", code: "sk" },
                    { name: "Hungary", code: "hu" },
                    { name: "Romania", code: "ro" },
                    { name: "Bulgaria", code: "bg" },
                    { name: "Greece", code: "gr" },
                    { name: "Sweden", code: "se" },
                    { name: "Norway", code: "no" },
                    { name: "Denmark", code: "dk" },
                    { name: "Finland", code: "fi" },
                    { name: "Iceland", code: "is" },
                    { name: "Ireland", code: "ie" },
                    { name: "Ukraine", code: "ua" },
                    { name: "Belarus", code: "by" },
                    { name: "Croatia", code: "hr" },
                    { name: "Serbia", code: "rs" },
                    { name: "Slovenia", code: "si" },
                    { name: "Bosnia and Herzegovina", code: "ba" },
                    { name: "Albania", code: "al" },
                    { name: "North Macedonia", code: "mk" },
                    { name: "Montenegro", code: "me" },
                    { name: "Estonia", code: "ee" },
                    { name: "Latvia", code: "lv" },
                    { name: "Lithuania", code: "lt" },
                    { name: "Moldova", code: "md" },
                    { name: "Luxembourg", code: "lu" },
                    { name: "Malta", code: "mt" },
                    { name: "Cyprus", code: "cy" },
                    { name: "Monaco", code: "mc" },
                    // Ближний Восток / арабские страны
                    { name: "Saudi Arabia", code: "sa" },
                    { name: "United Arab Emirates", code: "ae" },
                    { name: "Qatar", code: "qa" },
                    { name: "Kuwait", code: "kw" },
                    { name: "Bahrain", code: "bh" },
                    { name: "Oman", code: "om" },
                    { name: "Jordan", code: "jo" },
                    { name: "Lebanon", code: "lb" },
                    { name: "Iraq", code: "iq" },
                    { name: "Egypt", code: "eg" },
                    { name: "Morocco", code: "ma" },
                    { name: "Algeria", code: "dz" },
                    { name: "Tunisia", code: "tn" },
                    { name: "Syria", code: "sy" },
                    // Азия
                    { name: "China", code: "cn" },
                    { name: "Japan", code: "jp" },
                    { name: "South Korea", code: "kr" },
                    { name: "India", code: "in" },
                    { name: "Indonesia", code: "id" },
                    { name: "Thailand", code: "th" },
                    { name: "Vietnam", code: "vn" },
                    { name: "Philippines", code: "ph" },
                    { name: "Malaysia", code: "my" },
                    { name: "Singapore", code: "sg" },
                    { name: "Pakistan", code: "pk" },
                    { name: "Bangladesh", code: "bd" },
                    { name: "Sri Lanka", code: "lk" },
                    { name: "Nepal", code: "np" },
                    { name: "Mongolia", code: "mn" },
                    { name: "Kazakhstan", code: "kz" },
                    { name: "Turkey", code: "tr" },
                    { name: "Israel", code: "il" },
                    // Кавказ / Центральная Азия / доп. Азия
                    { name: "Russia", code: "ru" },
                    { name: "Armenia", code: "am" },
                    { name: "Georgia", code: "ge" },
                    { name: "Azerbaijan", code: "az" },
                    { name: "Uzbekistan", code: "uz" },
                    { name: "Turkmenistan", code: "tm" },
                    { name: "Kyrgyzstan", code: "kg" },
                    { name: "Tajikistan", code: "tj" },
                    { name: "Afghanistan", code: "af" },
                    { name: "Iran", code: "ir" },
                    { name: "Yemen", code: "ye" },
                    { name: "Taiwan", code: "tw" },
                    { name: "North Korea", code: "kp" },
                    { name: "Bhutan", code: "bt" },
                    { name: "Cambodia", code: "kh" },
                    { name: "Laos", code: "la" },
                    { name: "Myanmar", code: "mm" },
                    { name: "Brunei", code: "bn" },
                    { name: "Maldives", code: "mv" },
                    // Африка
                    { name: "Nigeria", code: "ng" },
                    { name: "Kenya", code: "ke" },
                    { name: "South Africa", code: "za" },
                    { name: "Ghana", code: "gh" },
                    { name: "Ethiopia", code: "et" },
                    { name: "Tanzania", code: "tz" },
                    { name: "Uganda", code: "ug" },
                    { name: "Senegal", code: "sn" },
                    { name: "Mali", code: "ml" },
                    { name: "Ivory Coast", code: "ci" },
                    { name: "Cameroon", code: "cm" },
                    { name: "Zambia", code: "zm" },
                    { name: "Zimbabwe", code: "zw" },
                    { name: "Botswana", code: "bw" },
                    { name: "Namibia", code: "na" },
                    { name: "Mozambique", code: "mz" },
                    { name: "Madagascar", code: "mg" },
                    { name: "Rwanda", code: "rw" },
                    { name: "Somalia", code: "so" },
                    { name: "Sudan", code: "sd" },
                    { name: "South Sudan", code: "ss" },
                    { name: "Libya", code: "ly" },
                    { name: "Angola", code: "ao" },
                    { name: "DR Congo", code: "cd" },
                    { name: "Republic of the Congo", code: "cg" },
                    { name: "Gabon", code: "ga" },
                    { name: "Chad", code: "td" },
                    { name: "Niger", code: "ne" },
                    { name: "Burkina Faso", code: "bf" },
                    { name: "Guinea", code: "gn" },
                    { name: "Sierra Leone", code: "sl" },
                    { name: "Liberia", code: "lr" },
                    { name: "Benin", code: "bj" },
                    { name: "Togo", code: "tg" },
                    { name: "Malawi", code: "mw" },
                    { name: "Lesotho", code: "ls" },
                    { name: "Eswatini", code: "sz" },
                    { name: "Gambia", code: "gm" },
                    { name: "Mauritania", code: "mr" },
                    { name: "Djibouti", code: "dj" },
                    { name: "Eritrea", code: "er" },
                    { name: "Central African Republic", code: "cf" },
                    { name: "Equatorial Guinea", code: "gq" },
                    { name: "Cape Verde", code: "cv" },
                    { name: "Comoros", code: "km" },
                    { name: "Seychelles", code: "sc" },
                    { name: "Mauritius", code: "mu" },
                    { name: "Burundi", code: "bi" },
                    // Океания
                    { name: "Australia", code: "au" },
                    { name: "New Zealand", code: "nz" },
                    { name: "Fiji", code: "fj" },
                    { name: "Papua New Guinea", code: "pg" },
                    { name: "Samoa", code: "ws" }
                ]
            },
            14: {
                type: 'maze',
                theme: 'ratatouille',
                buttonLabel: 'Maze',
                modalTitle: "Stage 14: Remy's Cheese Chase",
                intro: "Somewhere out on the Coahuila plains, our favorite little chef has followed his nose a bit too far from the kitchen. Guide Remy through the maze with the arrow keys \u2190\u2191\u2192\u2193 and help him reach the cheese! There are 5 mazes to clear — the first three grow bigger, and the last two hold their ground but hide trickier turns and false paths than the one before.",
                // Уровни 1-3: каждый крупнее предыдущего (больше клеток → длиннее путь и
                // больше тупиков → сложнее), а размер клетки чуть уменьшается, чтобы лабиринт
                // помещался в модалку.
                // Уровни 4-5: размер клеток не растёт (тот же, что у уровня 3), сложность
                // растёт за счёт самой генерации — см. параметры straightBias и braid в
                // mzGenerateMaze(): straightBias вытягивает длинные прямые коридоры (сложнее
                // на глаз понять, где была развилка), а braid прорезает часть тупиков в петли
                // и ложные ходы, из-за чего правило "иди вдоль стены" перестаёт надёжно
                // приводить к сыру. Лабиринт всегда полностью проходим (см. mzGenerateMaze).
                levels: [
                    { cols: 15, rows: 11, cell: 32, name: "Level 1: Behind the Bistro" },
                    { cols: 23, rows: 17, cell: 26, name: "Level 2: Across the Market Square" },
                    { cols: 31, rows: 23, cell: 20, name: "Level 3: Over the Paris Rooftops" },
                    { cols: 31, rows: 23, cell: 20, name: "Level 4: Down Into the Sewers", braid: 0.35 },
                    { cols: 31, rows: 23, cell: 20, name: "Level 5: Gusteau's Midnight Kitchen", straightBias: 0.45, braid: 0.55 }
                ],
                solved: false
            },
            15: {
                type: 'liquidsort',
                theme: 'alchemy',
                buttonLabel: 'Alchemy',
                modalTitle: "Stage 15: The Alchemist's Vials",
                // Персонаж-ведущий этого задания (картинка лежит в walter_chars/walter.png).
                charImg: 'walter_chars/walter.png',
                charName: 'Walter',
                charClass: 'walter',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самой игры с колбами (полностью аналогично dialogue у drawing/drinks/truthlie).
                dialogue: [
                    { text: "Well. Look who wandered into my lab." },
                    { text: "Lizzy, is it? This isn't exactly a place people find by accident — you took a wrong turn somewhere back there, didn't you." },
                    { text: "Here's the thing — you're in luck. I happen to be short a lab partner today. Jesse's... indisposed. Let's just say he wandered off and hasn't wandered back." },
                    { text: "So. You help me set this shelf of mine back in order — every color exactly where it belongs — and I let you walk right out that door. No hard feelings." },
                    { text: "Goggles are on the shelf behind you. Welcome to the lab." }
                ],
                // Финальные реплики — показываются один раз после прохождения всех уровней,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Huh. Steady hands, clean moves, not a single wasted pour. I don't say this often." },
                    { text: "You're a hell of a chemist, Lizzy. If you ever want to go into business together... you know exactly where to find me." }
                ],
                intro: "Deep beneath the adobe walls of Paquimé, a forgotten alchemist's workshop still hums with old magic. Someone has knocked every shelf of potions into a jumbled mess of colors — and only a steady hand (and a clever eye) can set them right again. Tap a vial to draw out its top potion, then tap another vial to pour it in: a potion can only be poured onto an empty vial or onto one already crowned with the same color. Untangle all 7 shelves to earn the philosopher's secret.",
                // Сложность растёт числом цветов (4→8, значит больше зелий и колб) и
                // глубиной перемешивания (shuffle). Свободных колб всегда 2 — с одной
                // свободной колбой генератор эмпирически даёт нерешаемые головоломки
                // намного чаще (мало места для манёвра), см. lsGeneratePuzzle ниже,
                // где решаемость каждой раскладки ещё и явно проверяется солвером.
                levels: [
                    { colors: 4, empty: 2, capacity: 4, shuffle: 40, name: "Shelf 1: Novice's Corner" },
                    { colors: 5, empty: 2, capacity: 4, shuffle: 55, name: "Shelf 2: Apprentice's Cabinet" },
                    { colors: 6, empty: 2, capacity: 4, shuffle: 70, name: "Shelf 3: Journeyman's Vault" },
                    { colors: 7, empty: 2, capacity: 4, shuffle: 90, name: "Shelf 4: Master's Sanctum" },
                    { colors: 8, empty: 2, capacity: 4, shuffle: 110, name: "Shelf 5: The Philosopher's Secret" },
                    { colors: 8, empty: 2, capacity: 5, shuffle: 130, name: "Shelf 6: The Forbidden Archive" },
                    { colors: 9, empty: 2, capacity: 5, shuffle: 160, name: "Shelf 7: The Chemist's Masterwork" }
                ],
                solved: false
            },
            16: {
                type: 'bookdivination',
                theme: 'library',
                buttonLabel: 'Book Divination',
                modalTitle: 'Stage 16: Book Divination',
                // Персонаж-ведущий этого задания (картинка лежит в spongebob_chars/spongebob.png).
                charImg: 'spongebob_chars/spongebob.png',
                charName: 'SpongeBob',
                charClass: 'spongebob',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самого книжного гадания (полностью аналогично dialogue у ciphers/drawing/drinks).
                dialogue: [
                    { text: "Oh boy, oh boy, Lizzy! Am I glad to see you!" },
                    { text: "I got myself stuck in the trickiest puzzle — ten fortunes, hidden word by word across five whole novels! My brain is currently made of jelly." },
                    { text: "The sponges back in Bikini Bottom, well... let's just say we're not exactly known for our reading. Patrick tried to eat one of the books." },
                    { text: "But you? You're smart AND well-read! Would you help me crack these books and find every last fortune?" }
                ],
                // Финальные реплики — показываются один раз после прохождения всех уровней,
                // перед тем как локация засчитается пройденной.
                outroDialogue: [
                    { text: "Ohhh, that is BEAUTIFULLY written! Look at those words, all lined up in order like little soldiers of love!" },
                    { text: "By our next meeting, I'm gonna study SO hard, so I can read fortunes from books just like you! Is this krabby patty a bookmark now? ...it is now." }
                ],
                intro: "Five old novels are waiting for you on the shelf: <b>The Picture of Dorian Gray</b>, <b>1984</b>, <b>The Catcher in the Rye</b>, <b>The Fountainhead</b> and <b>One Hundred Years of Solitude</b> \u2014 open the very same PDFs he gave you. Ten fortunes are hidden inside them, torn into single words and scattered through the pages. For each word you will get only four numbers: the <b>page</b>, the <b>paragraph</b> on that page, the <b>line</b> inside that paragraph, and the <b>word</b> in that line \u2014 nothing else. You will not be told which of the five books to open: that is for you to feel out. Collect every word of a fortune in order and it will burn itself, in beautiful handwriting, into your book of memories below. When all ten fortunes are gathered, the shelf will let you pass.",
                bookList: [
                    "The Picture of Dorian Gray",
                    "1984",
                    "The Catcher in the Rye",
                    "The Fountainhead",
                    "One Hundred Years of Solitude"
                ],
                phrases: [
                    {
                        id: 1,
                        book: "The Fountainhead",
                        text: "I chose you the same way I choose everything without asking anyone",
                        clues: [
                            { answer: "I", page: 57, para: 11, line: 1, word: 1 },
                            { answer: "chose", page: 72, para: 8, line: 2, word: 10 },
                            { answer: "you", page: 140, para: 5, line: 4, word: 19 },
                            { answer: "the", page: 158, para: 8, line: 7, word: 1 },
                            { answer: "same", page: 217, para: 3, line: 4, word: 2 },
                            { answer: "way", page: 235, para: 21, line: 1, word: 12 },
                            { answer: "I", page: 277, para: 11, line: 7, word: 22 },
                            { answer: "choose", page: 325, para: 1, line: 1, word: 13 },
                            { answer: "everything", page: 349, para: 15, line: 3, word: 7 },
                            { answer: "without", page: 419, para: 2, line: 3, word: 1 },
                            { answer: "asking", page: 370, para: 2, line: 5, word: 3 },
                            { answer: "anyone", page: 514, para: 4, line: 1, word: 12 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 2,
                        book: "1984",
                        text: "In a world built on lies our love stands true",
                        clues: [
                            { answer: "In", page: 2, para: 2, line: 8, word: 15 },
                            { answer: "a", page: 21, para: 6, line: 4, word: 7 },
                            { answer: "world", page: 34, para: 3, line: 2, word: 10 },
                            { answer: "built", page: 136, para: 2, line: 8, word: 13 },
                            { answer: "on", page: 70, para: 2, line: 12, word: 5 },
                            { answer: "lies", page: 77, para: 3, line: 1, word: 12 },
                            { answer: "our", page: 142, para: 9, line: 3, word: 12 },
                            { answer: "love", page: 115, para: 3, line: 1, word: 10 },
                            { answer: "stands", page: 136, para: 2, line: 8, word: 6 },
                            { answer: "true", page: 141, para: 1, line: 23, word: 6 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 3,
                        book: "The Picture of Dorian Gray",
                        text: "Time will never touch this kind of love",
                        clues: [
                            { answer: "Time", page: 6, para: 13, line: 9, word: 2 },
                            { answer: "will", page: 21, para: 13, line: 2, word: 10 },
                            { answer: "never", page: 45, para: 2, line: 21, word: 2 },
                            { answer: "touch", page: 72, para: 8, line: 2, word: 13 },
                            { answer: "this", page: 76, para: 3, line: 6, word: 5 },
                            { answer: "kind", page: 96, para: 9, line: 8, word: 7 },
                            { answer: "of", page: 124, para: 3, line: 3, word: 2 },
                            { answer: "love", page: 133, para: 1, line: 1, word: 1 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 4,
                        book: "One Hundred Years of Solitude",
                        text: "Across a hundred years I would still find my way back to you",
                        clues: [
                            { answer: "Across", page: 12, para: 3, line: 1, word: 9 },
                            { answer: "a", page: 13, para: 4, line: 11, word: 4 },
                            { answer: "hundred", page: 31, para: 2, line: 2, word: 2 },
                            { answer: "years", page: 46, para: 1, line: 7, word: 4 },
                            { answer: "I", page: 57, para: 3, line: 1, word: 17 },
                            { answer: "would", page: 66, para: 3, line: 6, word: 10 },
                            { answer: "still", page: 81, para: 2, line: 6, word: 3 },
                            { answer: "find", page: 89, para: 9, line: 1, word: 12 },
                            { answer: "my", page: 101, para: 3, line: 1, word: 7 },
                            { answer: "way", page: 109, para: 1, line: 22, word: 17 },
                            { answer: "back", page: 126, para: 3, line: 7, word: 5 },
                            { answer: "to", page: 137, para: 1, line: 45, word: 6 },
                            { answer: "you", page: 149, para: 3, line: 1, word: 18 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 5,
                        book: "The Catcher in the Rye",
                        text: "I would catch you before you ever had to fall",
                        clues: [
                            { answer: "I", page: 4, para: 5, line: 5, word: 7 },
                            { answer: "would", page: 25, para: 2, line: 4, word: 3 },
                            { answer: "catch", page: 69, para: 3, line: 11, word: 3 },
                            { answer: "you", page: 43, para: 10, line: 2, word: 11 },
                            { answer: "before", page: 59, para: 18, line: 1, word: 11 },
                            { answer: "you", page: 76, para: 1, line: 13, word: 3 },
                            { answer: "ever", page: 84, para: 1, line: 13, word: 19 },
                            { answer: "had", page: 97, para: 11, line: 1, word: 4 },
                            { answer: "to", page: 108, para: 3, line: 5, word: 2 },
                            { answer: "fall", page: 126, para: 17, line: 3, word: 18 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 6,
                        book: "The Picture of Dorian Gray",
                        text: "Every mirror I look into only shows your eyes",
                        clues: [
                            { answer: "Every", page: 15, para: 6, line: 4, word: 9 },
                            { answer: "mirror", page: 97, para: 3, line: 5, word: 3 },
                            { answer: "I", page: 36, para: 5, line: 1, word: 7 },
                            { answer: "look", page: 65, para: 12, line: 8, word: 9 },
                            { answer: "into", page: 69, para: 4, line: 6, word: 8 },
                            { answer: "only", page: 85, para: 1, line: 1, word: 9 },
                            { answer: "shows", page: 112, para: 4, line: 8, word: 1 },
                            { answer: "your", page: 129, para: 12, line: 1, word: 8 },
                            { answer: "eyes", page: 145, para: 10, line: 2, word: 7 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 7,
                        book: "The Catcher in the Rye",
                        text: "In this whole world you are the only real thing I know",
                        clues: [
                            { answer: "In", page: 3, para: 2, line: 2, word: 4 },
                            { answer: "this", page: 15, para: 3, line: 1, word: 3 },
                            { answer: "whole", page: 56, para: 1, line: 5, word: 7 },
                            { answer: "world", page: 36, para: 11, line: 9, word: 11 },
                            { answer: "you", page: 44, para: 4, line: 1, word: 4 },
                            { answer: "are", page: 57, para: 18, line: 2, word: 9 },
                            { answer: "the", page: 70, para: 3, line: 25, word: 13 },
                            { answer: "only", page: 78, para: 13, line: 3, word: 14 },
                            { answer: "real", page: 75, para: 8, line: 23, word: 15 },
                            { answer: "thing", page: 101, para: 7, line: 1, word: 8 },
                            { answer: "I", page: 115, para: 10, line: 3, word: 3 },
                            { answer: "know", page: 127, para: 3, line: 6, word: 16 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 8,
                        book: "1984",
                        text: "Even the Party could never reach the place where I keep you",
                        clues: [
                            { answer: "Even", page: 11, para: 1, line: 4, word: 5 },
                            { answer: "the", page: 24, para: 7, line: 7, word: 10 },
                            { answer: "Party", page: 33, para: 3, line: 8, word: 6 },
                            { answer: "could", page: 39, para: 2, line: 13, word: 7 },
                            { answer: "never", page: 56, para: 2, line: 22, word: 7 },
                            { answer: "reach", page: 37, para: 2, line: 4, word: 2 },
                            { answer: "the", page: 87, para: 4, line: 6, word: 4 },
                            { answer: "place", page: 93, para: 1, line: 1, word: 11 },
                            { answer: "where", page: 104, para: 9, line: 4, word: 2 },
                            { answer: "I", page: 120, para: 3, line: 3, word: 2 },
                            { answer: "keep", page: 126, para: 3, line: 16, word: 1 },
                            { answer: "you", page: 145, para: 8, line: 2, word: 4 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 9,
                        book: "One Hundred Years of Solitude",
                        text: "Even after every season passes my love for you does not fade",
                        clues: [
                            { answer: "Even", page: 8, para: 2, line: 16, word: 11 },
                            { answer: "after", page: 17, para: 13, line: 2, word: 3 },
                            { answer: "every", page: 30, para: 1, line: 5, word: 14 },
                            { answer: "season", page: 9, para: 1, line: 21, word: 10 },
                            { answer: "passes", page: 65, para: 4, line: 1, word: 8 },
                            { answer: "my", page: 64, para: 3, line: 1, word: 1 },
                            { answer: "love", page: 83, para: 6, line: 6, word: 3 },
                            { answer: "for", page: 99, para: 2, line: 8, word: 4 },
                            { answer: "you", page: 104, para: 3, line: 26, word: 17 },
                            { answer: "does", page: 120, para: 3, line: 1, word: 2 },
                            { answer: "not", page: 137, para: 1, line: 9, word: 17 },
                            { answer: "fade", page: 69, para: 3, line: 14, word: 7 },
                        ],
                        progress: 0,
                        solved: false
                    },
                    {
                        id: 10,
                        book: "The Fountainhead",
                        text: "My whole life was quietly building toward the day I found you",
                        clues: [
                            { answer: "My", page: 51, para: 11, line: 1, word: 7 },
                            { answer: "whole", page: 103, para: 3, line: 2, word: 7 },
                            { answer: "life", page: 118, para: 10, line: 7, word: 4 },
                            { answer: "was", page: 160, para: 15, line: 1, word: 2 },
                            { answer: "quietly", page: 209, para: 2, line: 6, word: 7 },
                            { answer: "building", page: 261, para: 9, line: 2, word: 1 },
                            { answer: "toward", page: 308, para: 10, line: 1, word: 4 },
                            { answer: "the", page: 330, para: 4, line: 4, word: 9 },
                            { answer: "day", page: 370, para: 11, line: 6, word: 7 },
                            { answer: "I", page: 438, para: 7, line: 1, word: 10 },
                            { answer: "found", page: 464, para: 3, line: 4, word: 11 },
                            { answer: "you", page: 505, para: 9, line: 1, word: 13 },
                        ],
                        progress: 0,
                        solved: false
                    },
                ]
            },
            // ===================================================================
            // ЛОКАЦИЯ 17: Sonora Desert — "Guess the Melody" (тип 'drawing', тема 'karaoke')
            // Сама игра проходит ОТДЕЛЬНО в Discord (голосом/по звонку), сайт не
            // проигрывает никакие фрагменты — здесь только описание правил и
            // ОДНО поле пароля, который выдаётся вручную по итогу игры.
            // Переиспользуем движок startDrawingGame()/checkDrawingPassword().
            // ===================================================================
            17: {
                type: 'drawing',
                theme: 'karaoke',
                icon: '🎤',
                sparkleIcon: '🎶',
                buttonLabel: 'Guess the Melody',
                modalTitle: 'Stage 17: Sonora Desert — Guess the Melody',
                // Персонаж-ведущий этого задания — Миша (картинка лежит в misha_finale.png,
                // переиспользуем charClass 'misha' и его CSS-палитру/анимацию из локации 24).
                charImg: 'misha_finale.png',
                charName: 'Misha',
                charClass: 'misha',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самой игры (полностью аналогично dialogue у ciphers/passwords/drinks).
                // На испанском, как и попросили.
                dialogue: [
                    { text: "¡Hola, mi amor! Veo que has avanzado muchísimo en esta aventura." },
                    { text: "Decidí venir a verte un ratito, antes de que sigas tu camino." },
                    { text: "¿Jugamos juntos a Adivina la Melodía?" }
                ],
                // Финальные реплики — показываются один раз после ввода пароля,
                // перед тем как локация засчитается пройденной. También en español.
                outroDialogue: [
                    { text: "Te amo. Lo hiciste increíble, como siempre." },
                    { text: "Te espero en la meta, mi amor." }
                ],
                intro: "Somewhere out in the Sonoran Desert, a karaoke stage has appeared out of nowhere — spotlight, mic and all. This round we play live together in Discord: I'll play you a song, and you have to guess it. Get us to <b>30 points</b> together and the desert will let us through.",
                checklist: [
                    { icon: '⏱️', text: 'Guess from a 10-second snippet — 3 points.' },
                    { icon: '⏱️', text: 'Guess from a 20-second snippet — 2 points.' },
                    { icon: '⏱️', text: 'Guess from a 30-second snippet — 1 point.' },
                    { icon: '❌', text: "Didn't guess the song at all — 0 points." },
                    { icon: '🔁', text: 'Each snippet can be replayed a maximum of 3 times.' },
                    { icon: '🏆', text: 'Reach 30 points together and I\'ll give you the secret passcode below!' }
                ],
                placeholder: 'Enter the secret passcode...',
                unlockLabel: '🎤 Unlock 🎤',
                completeMessage: '🎶 Encore! You hit 30 points and unlocked the next chapter of our journey!',
                password: 'sonora-karaoke-61',
                solved: false
            },
            // ===================================================================
            // ЛОКАЦИЯ 18: Hermosillo — "The Astral Lock" (тип 'zodiaclock', тема 'zodiac')
            // Пять древних каменных дисков-колец. У каждого раунда своя загадка-
            // подсказка (planet + sign + house), она крутит три кольца (внешнее —
            // планета, среднее — знак зодиака, внутреннее — дом), пока комбинация
            // не встанет напротив указателя. Раунды идут строго по очереди —
            // решённый "замок" уходит в полосу открытых, следующий появляется
            // под ним (анимация как в Book Divination).
            // ВНИМАНИЕ: 1-й раунд (Mars + Aries + House I) — подобранная заглушка
            // под "недостающий 5-й шифр"; текст/комбинацию легко поменять ниже.
            // ===================================================================
            18: {
                type: 'zodiaclock',
                theme: 'zodiac',
                buttonLabel: 'Astral Lock',
                modalTitle: 'Stage 18: Hermosillo — The Astral Lock',
                // Персонаж-ведущий этого задания (картинка лежит в oogway_chars/oogway.png).
                charImg: 'oogway_chars/oogway.png',
                charName: 'Master Oogway',
                charClass: 'oogway',
                // Вступительные реплики — показываются один раз при открытии задания,
                // до самих замков (полностью аналогично dialogue у ciphers/drawing/liquidsort).
                dialogue: [
                    { text: "Ah. A traveler who has walked so very far to reach this desert of stars." },
                    { text: "One who has come this far, through so many trials, surely already carries the ancient wisdom of spirit and sky within her." },
                    { text: "These stone locks hold riddles as old as the heavens themselves. Many have tried and turned away — but I sense only you have the clarity of heart to read them true." },
                    { text: "Turn the rings. Listen not with your ears, but with what you already know. The path will open for you." }
                ],
                // Финальные реплики — показываются один раз после того, как все замки открыты,
                // перед специальной анимацией растворения в воздухе (см. zcDissolveMaster()
                // в script.js) и переходом на следующий этап.
                outroDialogue: [
                    { text: "It is done. The stars themselves bow to the clarity of your spirit, young one." },
                    { text: "My time here has passed. It is time for me to return to the wise spirits who wait for me beyond the stars." },
                    { text: "There are no accidents, Lizzy. Walk on." }
                ],
                intro: "Four ancient stone dials rest here beneath the desert stars, each carved with the language of the sky. Turn the rings — Planet, Sign, House — until each riddle is answered, and every lock will open on its own.",
                rounds: [
                    {
                        id: 1,
                        phrase: "The planet that rules love itself. The sign of the one who couldn\u2019t stay silent first. The house where romance lives \u2014 and where we ended up.",
                        planet: 'venus',
                        signs: ['aries'],
                        house: 5,
                        solved: false
                    },
                    {
                        id: 2,
                        phrase: "The planet of comfort and quiet evenings. The sign that burns in both of you as one flame. The house where the feeling of \u2018together\u2019 is born \u2014 even across the distance.",
                        planet: 'moon',
                        signs: ['aries'],
                        house: 4,
                        solved: false
                    },
                    {
                        id: 3,
                        phrase: "The planet of words and messages past midnight. A sign of air \u2014 not earth, not fire, not water. The house where our endless conversations live.",
                        planet: 'mercury',
                        signs: ['gemini', 'libra', 'aquarius'],
                        house: 3,
                        solved: false
                    },
                    {
                        id: 4,
                        phrase: "The planet of luck and far horizons. A sign that isn\u2019t yours or mine \u2014 the sign of ambition and the climb to the summit. The house of long roads, where the next part of our journey begins.",
                        planet: 'jupiter',
                        signs: ['capricorn'],
                        house: 9,
                        solved: false
                    }
                ]
            },
            // ===================================================================
            // ЛОКАЦИЯ 19: Guaymas & San Carlos — "The Hogwarts Letter" (тип 'hogwarts')
            // Вводная часть магической ветки: сова доставляет письмо из Хогвартса
            // (адаптированный текст оригинала под имя Lizzy), играет тема Хедвиг,
            // после согласия сцена меняется на Распределяющую шляпу с диалогом
            // и выбором факультета (вместо надписей — животные-символы).
            // Дальнейшие этапы (угадывание локаций Хогвартса) будут добавлены
            // отдельными обновлениями — сейчас после выбора факультета показывается
            // экран-заглушка "продолжение следует".
            // Выбранный факультет сохраняется в localStorage('hogwartsHouse'),
            // чтобы при повторном входе не проходить письмо и шляпу заново.
            // ===================================================================
            19: {
                type: 'hogwarts',
                theme: 'hogwarts',
                buttonLabel: 'Answer the Owl',
                modalTitle: 'Hogwarts School of Witchcraft and Wizardry',
                recipientName: 'Lizzy',
                letterBody: [
                    "HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY",
                    "Headmaster: Albus Dumbledore",
                    "(Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)",
                    "",
                    "Dear Lizzy,",
                    "We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.",
                    "Term begins on September 1. We await your owl by no later than July 31.",
                    "",
                    "Yours sincerely,",
                    "Minerva McGonagall",
                    "Deputy Headmistress."
                ],
                hatDialogue: [
                    "Ah\u2026 another mind to sort. Curious, curious\u2026",
                    "Plenty of courage in here \u2014 and a heart that's already found its way into someone else's story.",
                    "Well then, my dear. It's time. Reach out, and let's see where you truly belong.",
                    "Touch the one that calls to you\u2026"
                ],
                houses: [
                    { key: 'gryffindor', name: 'Gryffindor', animal: 'The Lion', emoji: '\uD83E\uDD81' },
                    { key: 'ravenclaw', name: 'Ravenclaw', animal: 'The Raven', emoji: '\uD83D\uDC26\u200D\u2B1B' },
                    { key: 'slytherin', name: 'Slytherin', animal: 'The Snake', emoji: '\uD83D\uDC0D' },
                    { key: 'hufflepuff', name: 'Hufflepuff', animal: 'The Badger', emoji: '\uD83E\uDDA1' }
                ],
                houseMessages: {
                    gryffindor: "GRYFFINDOR! Where dwell the brave at heart, whose daring, nerve and chivalry set Gryffindors apart.",
                    ravenclaw: "RAVENCLAW! Where those of wit and learning will always find their kind \u2014 if you've a ready mind.",
                    slytherin: "SLYTHERIN! You'll make your real friends among those cunning folk who use any means to achieve their ends.",
                    hufflepuff: "HUFFLEPUFF! Where they are just and loyal, patient, true, and unafraid of toil."
                },
                // Уроки после распределения. Порядок прохождения не важен — она выбирает
                // сама, любой урок в любой момент. "done" — временный флаг только на время
                // сессии (страница не перезагружена), настоящее сохранение прогресса и
                // содержимое самих уроков добавим отдельными следующими обновлениями.
                lessons: [
                    { key: 'geography', name: 'Magical Geography', subtitle: 'Name the location from the illustration', emoji: '\uD83D\uDDFA\uFE0F', theme: 'marauders', done: false },
                    { key: 'charms', name: 'Charms', subtitle: 'Guess the spell from its description', emoji: '\uD83E\uDE84', theme: 'charms', done: false },
                    { key: 'history', name: 'Historical Figures', subtitle: 'Recognize them from the films', emoji: '\uD83D\uDDBC\uFE0F', theme: 'history', done: false },
                    { key: 'artifacts', name: 'Magical Artifacts', subtitle: 'Identify the artifact', emoji: '\uD83D\uDD2E', theme: 'artifacts', done: false }
                ]
            },

            // --- ЗАДАНИЕ 'tetris' (локация 20, Puerto Peñasco) ---
            // Встраивается в то же .modal-window, что и остальные локации (не отдельная
            // страница). Своя тема theme: 'tetris' — ретро неоновая аркада (см. .theme-tetris
            // в styles.css). Вместо одного раунда — 3 раунда подряд (task.levels), каждый
            // следующий сложнее предыдущего: выше targetScore и выше стартовый уровень
            // (startLevel), из-за чего фигуры с самого начала падают быстрее (см.
            // tetrisComputeSpeed). Движок ниже в разделе "ДВИЖОК: ТЕТРИС".
            20: {
                type: 'tetris',
                theme: 'tetris',
                buttonLabel: 'Tetris',
                modalTitle: 'Rocky Point Arcade — Tetris',
                intro: "A dusty old arcade cabinet glows on the boardwalk at Rocky Point, its screen flickering with neon light. A hand-written sign taped to the glass reads: \"Beat my high score and the road north is yours.\" Only one way to find out what's waiting on the other side of the score counter\u2026",
                levels: [
                    { targetScore: 700, startLevel: 1, name: "Round 1: Warm-Up" },
                    { targetScore: 1500, startLevel: 3, name: "Round 2: Picking Up Speed" },
                    { targetScore: 2600, startLevel: 5, name: "Round 3: Arcade Master" }
                ]
            },

            // ===================================================================
            // ЛОКАЦИЯ 21: San Felipe — "The Olympic Witch" (тип 'duel')
            // Два мини-этапа внутри одной модалки:
            //   1) duelStage 'dialogue' — Ведьма и Kratos выезжают слева по очереди,
            //      короткая перепалка (реплики кликом по бабблу), затем кнопка
            //      "Begin the Duel" переключает duelStage в 'task'.
            //   2) duelStage 'task' — текст всех правил + два независимых поля
            //      пароля (Kratos / Witch, переиспользуем .cipher-* стили).
            // Сами 6 загадок задаются вне сайта (в чате/лично) — здесь только
            // выдача паролей после того, как оба персонажа их вручную сообщат.
            // Картинки персонажей: duel_chars/witch.png и duel_chars/kratos.png
            // (нужно добавить эти 2 файла в проект — см. комментарий у CSS).
            // ===================================================================
            21: {
                type: 'duel',
                theme: 'duel',
                buttonLabel: 'The Olympic Witch',
                modalTitle: 'Stage 21: San Felipe — The Olympic Witch',
                dialogue: [
                    { speaker: 'witch', name: 'Witch', text: "Well, well. San Felipe. Perfect spot for a witch's riddles, don't you think?" },
                    { speaker: 'kratos', name: 'Kratos', text: "Ay no, bruja, \u00bfotra vez t\u00fa primero? Mis acertijos son de guerrero. Los tuyos son puro cuento de hadas." },
                    { speaker: 'witch', name: 'Witch', text: "Cuento de hadas? Sweetheart, my riddles have layers. Yours are just \"guess which axe comes back.\"" },
                    { speaker: 'kratos', name: 'Kratos', text: "\u00a1J\u00e1! Al menos mi hacha no se llama \"Leviat\u00e1n\" nom\u00e1s pa' decoraci\u00f3n. Ella se pone su sombrerito y ya se cree muy misteriosa." },
                    { speaker: 'witch', name: 'Witch', text: "Enough talking, tough guy. Let's see if she can outsmart the both of us. Three riddles each \u2014 no mercy." },
                    { speaker: 'kratos', name: 'Kratos', text: "Eso s\u00ed, \u00a1de acuerdo! Mi amor, prep\u00e1rate \u2014 si fallas un acertijo, ya sabr\u00e1s lo que te toca cumplir. Cada quien elige su deseo, jeje." },
                    { speaker: 'witch', name: 'Witch', text: "Careful what you wish for\u2026 literally. Go on then \u2014 earn both passwords, or you're not getting past San Felipe." }
                ],
                intro: "<strong>\ud83c\udfdb\ufe0f THE OLYMPIC WITCH \u2014 Rules:</strong><br><br>" +
                       "Two old friends from the game are waiting for you here \u2014 <strong>Kratos</strong> and <strong>Witch</strong>. Each of them has prepared 3 riddles just for you, and they won't be posted here \u2014 go find them and ask.<br><br>" +
                       "1\ufe0f\u20e3 Kratos will give you 3 riddles. Witch will give you 3 riddles \u2014 6 in total.<br>" +
                       "2\ufe0f\u20e3 Guess all 3 riddles from one of them, and that character hands you their secret passcode.<br>" +
                       "3\ufe0f\u20e3 For every riddle you fail to guess, you owe that character <strong>one wish</strong> \u2014 and they, not you, get to decide what it is.<br>" +
                       "4\ufe0f\u20e3 Once you're holding both passcodes \u2014 from Kratos <em>and</em> from Witch \u2014 enter them below to continue north.",
                kratos: { password: 'kratos-olympus-108', solved: false },
                witch: { password: 'witch-hex-451', solved: false }
            },

            // ===================================================================
            // ЛОКАЦИЯ 22: Guadalupe Valley — "The Chemist's Lab" (тип 'chemistry')
            // Хаб-меню в стиле "уроков" Хогвартса (см. локация 19, task.lessons):
            // task.labTasks — список заданий лаборатории. Сейчас реализовано только
            // одно — 'equations' (расстановка коэффициентов). Когда появятся новые
            // задания локации 22, добавляй новый объект в массив labTasks (свой key,
            // name, subtitle, emoji) и пиши для него отдельную ветку рендера —
            // единственное место с веткой по типу задания внутри локации это
            // renderChemLabTask() ниже (аналогично hpStage === 'lesson' в Хогвартсе).
            // Локация считается пройденной (advanceStep), когда done === true
            // у ВСЕХ элементов labTasks.
            // ===================================================================
            22: {
                type: 'chemistry',
                theme: 'chemistry',
                buttonLabel: 'Enter the Lab',
                modalTitle: "Stage 22: Guadalupe Valley — The Chemist's Lab",
                intro: "*burp* Well, well \u2014 look who wandered into my lab. Lizzy! Come on in, take a seat, let an old genius drag you back through his wild scientific youth for a minute. Grab some goggles, kid, 'cause we're diving headfirst into chemistry \u2014 and, uh, love, which, turns out, run on pretty much the exact same molecules. Three little experiments stand between you and the rest of this valley: balance my equations, read the periodic table like it's the two of you, and crack a few picture-riddles I left lying around the place. Solve 'em all, and I've got something special waiting for you at the end. Now go on \u2014 science waits for no one.",
                labTasks: [
                    {
                        key: 'equations',
                        name: 'Balance the Equations',
                        subtitle: 'Find the missing coefficients',
                        emoji: '\u2696\ufe0f',
                        done: false,
                        items: [
                            {
                                id: 1,
                                title: "Equation 1: The Balance of Mad Love",
                                subtitle: "(Dopamine Rush)",
                                description: "Falling in love is when dopamine and adrenaline go off the charts, and critical thinking drops. Try to balance this biochemical process.",
                                parts: ["C8H11NO2", "C9H13NO3", "C17H24N2O5"],
                                footnote: "(Dopamine + Adrenaline \u27f6 Mad Passion)",
                                hint: "Count the nitrogen (N) or carbon (C) first.",
                                answer: [1, 1, 1],
                                solved: false
                            },
                            {
                                id: 2,
                                title: "Equation 2: The Long-Term Family Happiness Cocktail",
                                subtitle: "",
                                description: "Here romance grows into deep attachment. Oxytocin, the tenderness hormone, and serotonin, the joy hormone, are responsible for it.",
                                parts: ["C43H66N12O12S2", "C10H12N2O", "C53H78N14O13S2"],
                                footnote: "(Oxytocin + Serotonin \u27f6 Harmonious Marriage)",
                                hint: "Pay attention to sulfur (S) and oxygen (O).",
                                answer: [1, 1, 1],
                                solved: false
                            },
                            {
                                id: 3,
                                title: "Equation 3: The Recipe for Sexual Arousal",
                                subtitle: "(Libido)",
                                description: "In this reaction, the male and female sex hormones (testosterone and estradiol) combine in a perfect ratio, triggering strong physical attraction.",
                                parts: ["C19H28O2", "C18H24O2", "C56H80O6"],
                                footnote: "(Testosterone + Estradiol \u27f6 Sexual Attraction)",
                                hint: "Start balancing with carbon (C), then check oxygen (O).",
                                answer: [2, 1, 1],
                                solved: false
                            },
                            {
                                id: 4,
                                title: "Equation 4: Overcoming a Relationship Crisis",
                                subtitle: "(Endorphin Healing)",
                                description: "When a couple fights, the stress hormone cortisol floods the blood. To bring back happiness, the brain must produce endorphins (natural painkillers) after making up.",
                                parts: ["C21H30O5", "C45H66N10O15S", "C87H126N10O25S"],
                                footnote: "(Cortisol + \u03b2-Endorphin (fragment) \u27f6 Healing After a Fight)",
                                hint: "Look at the carbon (C) on the right side. What number goes in front of cortisol?",
                                answer: [2, 1, 1],
                                solved: false
                            },
                            {
                                id: 5,
                                title: "Equation 5: Pure Platonic Happiness",
                                subtitle: "(Serotonin + GABA)",
                                description: "Sometimes it's simply good, calm, and safe to be near someone. In the brain, serotonin (satisfaction) and gamma-aminobutyric acid, GABA (calm), come together.",
                                parts: ["C10H12N2O", "C4H9NO2", "C18H30N4O4"],
                                footnote: "(Serotonin + GABA \u27f6 Peace of Mind)",
                                hint: "Count the nitrogen (N) atoms on the right side of the equation.",
                                answer: [1, 2, 1],
                                solved: false
                            }
                        ]
                    },
                    PERIODIC_LAB_TASK,
                    REBUS_LAB_TASK
                ]
            },

            // ===================================================================
            // ЛОКАЦИЯ 23: Guerrero Negro, BCS — "Rizzy the Whale" (тип 'whale')
            // Один персонаж (кит Rizzy) "выныривает" в сцене, реплики на испанском
            // листаются кликом по бабблу — переиспользуем .duel-scene/.duel-char/
            // .duel-speech-bubble из движка 'duel' (локация 21), но с одним
            // персонажем и новым модификатором duel-speech-rizzy/duel-name-rizzy
            // (см. styles.css). После диалога — экран задания в стиле 'drawing'
            // (чек-лист шагов + одно поле пароля, который выдаётся вручную после
            // того, как письмо реально написано в жизни). Картинка кита ожидается
            // по пути whale_rizzy.png (см. комментарий у CSS .duel-char-rizzy).
            // ===================================================================
            23: {
                type: 'whale',
                theme: 'whale',
                buttonLabel: 'Meet Rizzy',
                modalTitle: 'Stage 23: Ojo de Liebre Lagoon',
                charName: 'Rizzy',
                charImg: 'whale_rizzy.png',
                dialogue: [
                    { text: "¡Hola, hola, Lizzy! Bienvenida a mi laguna. Me llamo Rizzy, y llevo un ratito esperándote aquí, meciéndome entre las olas." },
                    { text: "Mírate nada más… mira todo el camino que has recorrido para llegar hasta mí. ¡Qué viaje tan enorme!" },
                    { text: "Ciudad de México, volcanes nevados, desiertos interminables, ciudades enteras, acertijos, laberintos, duelos… hasta una carta de un colegio de magos. ¡Y aquí sigues, nadando hacia adelante!" },
                    { text: "Cruzaste fronteras. Resolviste enigmas que harían llorar a cualquiera. Te reíste, cantaste, seguro también extrañaste tu casa un poquito… y aun así, no te detuviste ni un solo día." },
                    { text: "Eso no lo hace cualquiera. Eres realmente increíble, ¿lo sabías? De verdad, de verdad." },
                    { text: "Y como ya casi llegas al final de este viaje tan enorme, quiero proponerte algo especial antes de seguir nadando hacia Rosarito." },
                    { text: "Algo que no es un juego ni un acertijo… es de verdad. Es para ti, y para Misha, del futuro." },
                    { text: "¿Lista? Ven, deja que te cuente…" }
                ],
                intro: "<strong>🐋 Rizzy's Task — A Letter to the Future:</strong><br><br>" +
                       "Take a piece of paper and write a letter — to yourself, and to Misha — for exactly one year from today. Your plans, your wishes for life, the dreams you hope will come true.<br><br>" +
                       "Don't put it off for later. Write it right now, here, today.",
                checklist: [
                    { icon: '✍️', text: "Write the letter, addressed to both of you, one year from today — plans, wishes, dreams you hope come true." },
                    { icon: '📄', text: "Make a copy, so you end up with two identical letters." },
                    { icon: '🍾', text: "Put one copy inside a glass bottle and send it sailing out to sea from a beach in Rosarito. This part can happen a little later, once you're there — but you must film the bottle being sent off, on video." },
                    { icon: '🔒', text: "Keep the second copy for yourself. Set a reminder somewhere it truly won't get lost, and open it in exactly one year from the day it was written (hopefully together, with Misha)." },
                    { icon: '🐋', text: "Once it's written, sign the pledge below to let Rizzy know — and he'll let you swim on to the very last stop in Rosarito, where the bottle needs to go, and where the coordinates of your surprise for finishing this whole adventure through Mexico are waiting." }
                ],
                pledgeText: "I promise I will write this letter today, keep a copy safe with a reminder to open it in exactly one year, and send the other copy sailing out to sea in a bottle from Rosarito, recorded on video.",
                signaturePlaceholder: 'Type your name to sign…',
                signLabel: '🐋 Sign the Pledge 🐋',
                completeMessage: '🐋 Rizzy gives a happy splash and a big whale smile — the way to Rosarito is open!',
                solved: false
            },

            // ===================================================================
            // ЛОКАЦИЯ 24: Rosarito — ФИНАЛ (тип 'finale')
            // Четыре экрана в одной модалке (finaleStage переключает их):
            //   'dialogue1' — Миша встречает её на берегу (реплики RU/ES кликом по бабблу,
            //                 переиспользуем .duel-scene/.duel-char/.duel-speech-bubble,
            //                 как и в локации 23, но с модификатором duel-*-misha);
            //   'task'      — квадратное уравнение (условие оформлено как HTML, не
            //                 картинкой — устойчивее к масштабированию), два поля под
            //                 корни x₁/x₂, порядок ввода не важен, проверка с допуском
            //                 (корни иррациональные: 112.4606…/131.5394…);
            //   'dialogue2' — Миша снова, после верного ответа;
            //   'final'     — финальный экран с поздравлением и координатами.
            // Портрет — misha_finale.png (см. комментарий у CSS .duel-char-misha).
            // ===================================================================
            24: {
                type: 'finale',
                theme: 'finale',
                buttonLabel: 'A Voice on the Beach',
                modalTitle: 'Stage 24: Rosarito — The Finish Line',
                charName: 'Misha',
                charImg: 'misha_finale.png',
                dialogue1: [
                    { text: "Hey, my love. I'm so glad you made it all the way here." },
                    { text: "I really hope you loved this whole adventure — and more than anything, that it was fun." },
                    { text: "As a reward for finishing this romantic quest, you're about to get something. But it's not that simple." },
                    { text: "One last push — time to remember some school math…" }
                ],
                equationLabel: "x² − 244x + 14793 = 0",
                taskIntro: "This equation has two irrational roots, so round both of them using standard rounding rules. And the order matters: enter the smaller root first, then the larger one.",
                roots: [112, 132],
                dialogue2: [
                    { text: "These coordinates are where your reward for this whole incredible adventure is waiting." },
                    { text: "I love you so, so much." }
                ],
                finalTitle: "🎉 Congratulations! 🎉",
                finalSubtitle: "You made it all the way through — the whole adventure across Mexico, start to finish.",
                finalCoordsLabel: "📍 Coordinates",
                solved: false
            }

        };

        // ===================================================================
        // УРОК "MAGICAL GEOGRAPHY" (Хогвартс, урок 'geography') — 14 локаций.
        // Порядок строго соответствует иллюстрациям, которые прислал пользователь.
        // answers — принимаемые варианты ответа (сверяются через hpGeoNormalize,
        // так что регистр/пунктуация/апострофы/артикли значения не имеют).
        // hint — ровно та фраза, которую пользователь задал в скобках для этой локации.
        // ===================================================================
        const geoLocations = [
            { id: 'hogwarts', img: 'locations/loc_hogwarts.svg', name: 'Hogwarts',
              answers: ['hogwarts', 'hogwarts school of witchcraft and wizardry'],
              hint: "You're studying here." },
            { id: 'platform934', img: 'locations/loc_platform934.svg', name: 'Platform 9¾',
              answers: ['platform 9 3/4', 'platform nine and three quarters', 'platform 9 34', 'platform 93 4', 'kings cross platform 9 3/4'],
              hint: "I'm sure you know where the train starts its adventure." },
            { id: 'gringotts', img: 'locations/loc_gringotts.svg', name: 'Gringotts',
              answers: ['gringotts', 'gringotts bank', 'gringotts wizarding bank'],
              hint: "A rich Latina would keep her money here \u2014 the safest place in the wizarding world." },
            { id: 'quidditch', img: 'locations/loc_quidditch.svg', name: 'Quidditch Pitch',
              answers: ['quidditch pitch', 'quidditch stadium', 'quidditch field'],
              hint: "O_O this one's easy!" },
            { id: 'graveyard', img: 'locations/loc_graveyard.svg', name: 'Little Hangleton Graveyard',
              answers: ['little hangleton graveyard', 'little hangleton', 'graveyard', 'the graveyard', 'riddle graveyard'],
              hint: "I can't say his name, but this is where he was reborn." },
            { id: 'burrow', img: 'locations/loc_burrow.svg', name: 'The Burrow',
              answers: ['the burrow', 'burrow'],
              hint: "Isn't the biggest family supposed to live here?" },
            { id: 'privet-drive', img: 'locations/loc_privet_drive.svg', name: 'Privet Drive',
              answers: ['privet drive', '4 privet drive', 'number 4 privet drive', 'the dursleys house', 'dursleys house'],
              hint: "The house of the Muggles who took in a wizard." },
            { id: 'chamber', img: 'locations/loc_chamber.svg', name: 'Chamber of Secrets',
              answers: ['chamber of secrets', 'the chamber of secrets'],
              hint: "I just wanted to use the bathroom \u2014 how did I end up here?" },
            { id: 'whomping-willow', img: 'locations/loc_whomping_willow.svg', name: 'Whomping Willow',
              answers: ['whomping willow', 'the whomping willow'],
              hint: "Come on, you know this tree." },
            { id: 'hogsmeade', img: 'locations/loc_hogsmeade.svg', name: 'Hogsmeade',
              answers: ['hogsmeade', 'hogsmeade village'],
              hint: "They definitely sell Butterbeer here!" },
            { id: 'hagrid-hut', img: 'locations/loc_hagrid_hut.svg', name: "Hagrid's Hut",
              answers: ['hagrids hut', 'hagrids cabin', 'hagrid hut'],
              hint: "A big house that belongs to someone big and bearded." },
            { id: 'azkaban', img: 'locations/loc_azkaban.svg', name: 'Azkaban',
              answers: ['azkaban', 'azkaban prison'],
              hint: "It's terrifying here \u2014 they'll suck your soul right out." },
            { id: 'room-of-requirement', img: 'locations/loc_room_of_requirement.svg', name: 'Room of Requirement',
              answers: ['room of requirement', 'the room of requirement'],
              hint: "Behind this door, you'll always find exactly what you need." },
            { id: 'joke-shop', img: 'locations/loc_joke_shop.svg', name: "Weasleys' Wizard Wheezes",
              answers: ['weasleys wizard wheezes', 'weasley wizard wheezes', 'the joke shop', 'joke shop'],
              hint: "Things got pretty grim after he came back, but this little shop still shines bright." }
        ];

        // Прогресс по уроку geography — сбрасывается при новом запуске всей игры
        // Хогвартса (startHogwartsGame), но сохраняется, пока модалка не закрыта целиком,
        // так что "Back to Lessons" и возврат в урок не теряют отвеченное.
        let geoState = { current: 0, solved: new Array(geoLocations.length).fill(false), hintShown: false };

        function hpGeoReset() {
            geoState = { current: 0, solved: new Array(geoLocations.length).fill(false), hintShown: false };
        }

        // Римские цифры для подписи локации в духе старой карты (I..XIV).
        function hpToRoman(num) {
            const table = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
            let res = '';
            table.forEach(([v, s]) => { while (num >= v) { res += s; num -= v; } });
            return res;
        }

        // Нормализация для сверки свободного текстового ответа: нижний регистр, ¾ -> "3/4",
        // апострофы и прочая пунктуация убираются, артикль "the"/"a" в начале не важен.
        function hpGeoNormalize(str) {
            return String(str)
                .toLowerCase()
                .replace(/¾/g, ' 3/4')
                .replace(/[’‘]/g, "'")
                .replace(/[^a-z0-9]+/g, ' ')
                .trim()
                .replace(/^(the|a) /, '')
                .replace(/\s+/g, ' ');
        }

        function hpGeoCheckAnswer(input, answers) {
            const norm = hpGeoNormalize(input);
            if (!norm) return false;
            return answers.some(a => hpGeoNormalize(a) === norm);
        }

        // Плитки маджонга (общие для любой локации типа "mahjong")
        const mjIcons = ['🌸', '💖', '✨', '☕', '🏔️', '🌋', '🍫', '🌹', '🎧', '⚽'];

        let currentStep = parseInt(localStorage.getItem('mexicoRouteProgress')) || 1;
        let selectedStep = currentStep;
        let currentQuizIndex = 0;
        let typewriterTimeout = null;

        // Какая локация сейчас открыта в модалке — нужно, чтобы движки заданий
        // знали, с какими данными из tasksData[...] работать и куда засчитать прохождение.
        let activeTaskStep = null;

        let mjTilesData = [];

        // Состояние диалоговых стадий движка 'ciphers' (локация 3 — Sherlock): 'dialogue' —
        // вступительные реплики персонажа (task.dialogue), 'task' — сами шифры, 'outro' —
        // прощальные реплики (task.outroDialogue) перед advanceStep. Если у задания нет
        // task.dialogue/outroDialogue — соответствующая стадия пропускается (старые/будущие
        // ciphers-задания без персонажа продолжают работать как раньше).
        let cphStage = 'task';
        let cphDialogueLineIndex = 0;

        // Состояние движка Тетриса (локация 20) и id таймера падения — вынесены на верхний
        // уровень по тому же принципу, что mjTilesData/mzGrid и т.д. у остальных движков.
        let tetrisState = null;
        // Индекс текущего раунда в task.levels (0-based) — сколько раундов Тетриса
        // из 3-х уже начато/пройдено в этой попытке (см. tasksData[20].levels).
        let trLevelIndex = 0;
        let tetrisDropTimerId = null;
        let mjSelectedTile = null;
        let mjShuffleUsed = false;
        // Стадия движка маджонга: 'dialogue' (вступление персонажа) -> 'game' (сам
        // маджонг) -> 'outro' (финальная реплика персонажа перед advanceStep).
        // Если у задания нет task.dialogue — стадия 'dialogue' просто пропускается.
        let mjStage = 'dialogue';
        let mjDialogueLineIndex = 0;
        // 3 уровня с разной раскладкой плиток за одно задание (mjLevel: 0..2, всего MJ_TOTAL_LEVELS).
        let mjLevel = 0;
        const MJ_TOTAL_LEVELS = 3;
        // Фактический размер "арены" текущей раскладки — считается в generateSolvableMahjong()
        // по bounding box сгенерированных плиток, чтобы .mahjong-board мог отцентровать
        // доску по-настоящему (а не просто центрировать фиксированный 710px контейнер
        // с левоприжатым содержимым внутри, как было раньше).
        let mjArenaWidth = 710;
        let mjArenaHeight = 350;

        // Пароль хранится не в открытом виде, а как SHA-256 хэш — так пароль
        // не виден просто при просмотре исходного кода страницы. Это не
        // "настоящая" защита (сайт статический, при желании хэш можно
        // подобрать/сбрутить), но полностью исключает случайный сброс.
        const RESET_PASSWORD_HASH = '1e5dc05b1f27f6f19aa7bde007d9f62bc67e1de63ac57c9be28a12fb557db3fc';

        async function sha256Hex(str) {
            const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
            return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
        }

        async function promptResetPassword() {
            const entered = prompt('This will reset all progress back to stage 1.\nEnter the password to continue:');
            if (entered === null) return;
            let hash;
            try {
                hash = await sha256Hex(entered);
            } catch (e) {
                // crypto.subtle недоступен (например, страница открыта не по https/localhost) —
                // без него безопасно сверить хэш нельзя, поэтому просто отказываем.
                alert('Cannot verify password in this context (page must be served over https).');
                return;
            }
            if (hash !== RESET_PASSWORD_HASH) {
                alert('❌ Incorrect password.');
                return;
            }
            resetProgress();
        }

        function resetProgress() {
            localStorage.removeItem('mexicoRouteProgress');
            localStorage.removeItem('mexicoRouteTaskState');
            currentStep = 1;
            selectedStep = 1;
            closeModal();
            updateProgressUI();
            updateMapDisplay();
            selectLocation(currentStep);
        }

        // ===================================================================
        // --- АВТОСОХРАНЕНИЕ ПРОГРЕССА ВНУТРИ ДОЛГИХ ЗАДАНИЙ ---
        // Прохождение самих локаций (currentStep) уже сохраняется в localStorage
        // при каждом advanceStep(), так что оно не теряется при перезагрузке страницы
        // в любом случае. Ниже — ДОПОЛНИТЕЛЬНОЕ сохранение промежуточного состояния
        // ВНУТРИ текущего (ещё не пройденного) задания — только для тех типов заданий,
        // которые реально многосессионные и долгие: bookdivination (16), hogwarts (19),
        // chemistry (22), mahjong и tetris. Для остальных (более коротких) заданий
        // случайное закрытие/обновление страницы просто откатывает к началу именно
        // этого задания — прежний пройденный путь по локациям при этом не страдает.
        //
        // Для tetris сохраняется только то, на каком из 3 раундов остановились —
        // сам "живой" раунд с падающей фигурой не сериализуется (пересоздаётся заново),
        // это игра реального времени, и точное восстановление кадра было бы хрупким.
        // Для hogwarts сохраняется факультет и то, какие из 4 уроков уже пройдены —
        // если случайно закрыли посреди самого урока, при возврате видно меню уроков
        // (готовые отмечены), прерванный урок просто начинается заново.
        // ===================================================================
        function isAutosaveTaskType(type) {
            return type === 'bookdivination' || type === 'hogwarts' || type === 'chemistry'
                || type === 'mahjong' || type === 'tetris';
        }

        function saveTaskProgress() {
            // Сохраняем только для реально текущего незавершённого этапа — если задание
            // уже засчитано (advanceStep продвинул currentStep дальше), сохранять нечего.
            if (!activeTaskStep || activeTaskStep !== currentStep) return;
            const task = tasksData[activeTaskStep];
            if (!task || !isAutosaveTaskType(task.type)) return;

            const data = { step: activeTaskStep, type: task.type };

            if (task.type === 'bookdivination') {
                data.bkStage = bkStage;
                data.bkDialogueLineIndex = bkDialogueLineIndex;
                data.phrases = task.phrases.map(p => ({ solved: !!p.solved, filled: p.clues.map(c => !!c.filled) }));
            } else if (task.type === 'hogwarts') {
                data.hpStage = (hpStage === 'lesson') ? 'lessons' : hpStage;
                data.hpChosenHouseKey = hpChosenHouseKey;
                data.lessonsDone = task.lessons.map(l => !!l.done);
            } else if (task.type === 'chemistry') {
                data.chemStage = (chemStage === 'diploma') ? 'diploma' : 'hub';
                data.labTasksDone = task.labTasks.map(lt => !!lt.done);
                data.labTasksItemsSolved = task.labTasks.map(lt => (lt.items || []).map(it => !!it.solved));
            } else if (task.type === 'mahjong') {
                data.mjStage = mjStage;
                data.mjLevel = mjLevel;
                data.mjDialogueLineIndex = mjDialogueLineIndex;
                data.mjShuffleUsed = mjShuffleUsed;
                data.mjTilesData = (mjStage === 'game') ? mjTilesData : null;
            } else if (task.type === 'tetris') {
                data.trLevelIndex = trLevelIndex;
            }

            try {
                localStorage.setItem('mexicoRouteTaskState', JSON.stringify(data));
            } catch (e) { /* напр. переполнение хранилища — тихо игнорируем */ }
        }

        function loadTaskProgress(step, type) {
            try {
                const raw = localStorage.getItem('mexicoRouteTaskState');
                if (!raw) return null;
                const data = JSON.parse(raw);
                if (data && data.step === step && data.type === type) return data;
            } catch (e) { /* повреждённые/неожиданные данные — начинаем заново */ }
            return null;
        }

        function clearTaskProgress() {
            localStorage.removeItem('mexicoRouteTaskState');
        }

        // Перезагрузка страницы и закрытие вкладки не всегда доходят до closeModal(),
        // поэтому сохраняемся ещё и по этим системным событиям.
        window.addEventListener('beforeunload', saveTaskProgress);
        window.addEventListener('pagehide', saveTaskProgress);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') saveTaskProgress();
        });

        function updateProgressUI() {
            let completedCount = currentStep - 1;
            let percent = Math.round((completedCount / 24) * 100);
            document.getElementById('progressText').innerText = `Completed: ${completedCount} of 24 (${percent}%)`;
            document.getElementById('progressBarFill').style.width = `${percent}%`;
        }

        function typeWriterEffect(text, elementId, i = 0) {
            if (i === 0) {
                document.getElementById(elementId).innerText = "";
            }
            if (i < text.length) {
                document.getElementById(elementId).innerText += text.charAt(i);
                typewriterTimeout = setTimeout(() => typeWriterEffect(text, elementId, i + 1), 15);
            }
        }

        // --- Мобильный bottom sheet боковой панели ---
        function isMobileLayout() {
            return window.matchMedia('(max-width: 768px)').matches;
        }

        function toggleMobileSidebar() {
            document.getElementById('sidebarPanel').classList.toggle('expanded');
        }

        function expandMobileSidebar() {
            if (isMobileLayout()) {
                document.getElementById('sidebarPanel').classList.add('expanded');
            }
        }

        function selectLocation(step) {
            selectedStep = step;
            const data = locationsData[step];
            if (!data) return;

            expandMobileSidebar();

            document.getElementById('sidebar-title').innerText = data.title;

            const sidebarImg = document.getElementById('sidebar-img');
            sidebarImg.style.display = 'block';
            sidebarImg.src = `Icons/${step}.png`;

            if (typewriterTimeout) clearTimeout(typewriterTimeout);
            typeWriterEffect(data.history, 'sidebar-desc', 0);

            let actionHTML = "";
            if (step === currentStep && currentStep <= 24) {
                const task = tasksData[step];
                if (task) {
                    actionHTML = `<button class="action-btn" onclick="startTaskForStep(${step})">Start ${task.buttonLabel} ➔</button>`;
                } else {
                    actionHTML = `<button class="action-btn" onclick="completeStepDirectly(${step})">Complete Stage ➔</button>`;
                }
                actionHTML += `<button class="action-btn secondary-btn" onclick="promptPassword(${step})">🔑 Enter Password</button`;
            } else if (step < currentStep) {
                actionHTML = `<button class="action-btn completed-status">✅ Stage Completed</button>`;
            } else {
                actionHTML = `<button class="action-btn locked-status">🔒 Stage Locked</button>`;
                if (step === currentStep) {
                    actionHTML += `<button class="action-btn secondary-btn" onclick="promptPassword(${step})">🔑 Enter Password</button`;
                }
            }
            document.getElementById('sidebar-action').innerHTML = actionHTML;
        }

        function promptPassword(step) {
            const entered = prompt("Enter the secret password for this location:");
            if (entered === null) return;
            if (entered.trim() === locationsData[step].password) {
                alert("🎉 Correct password! Stage complete.");
                advanceStep(step);
            } else {
                alert("❌ Incorrect password. Try again!");
            }
        }

        // Единая точка завершения этапа: используется и заданиями, и вводом пароля.
        // step — какую локацию засчитать пройденной (продвигаем currentStep, только если
        // это и есть текущий незавершённый шаг — так нельзя случайно "перепрыгнуть" вперёд).
        function advanceStep(step) {
            if (step === currentStep && currentStep < 24) {
                currentStep++;
                localStorage.setItem('mexicoRouteProgress', currentStep);
            }
            clearTaskProgress();
            closeModal();
            updateProgressUI();
            updateMapDisplay();
            selectLocation(currentStep);
        }

        // Единственное место, где нужно дописать ветку при появлении НОВОГО типа задания
        // (не quiz/mahjong/ciphers). Для новых локаций с УЖЕ существующим типом менять
        // здесь ничего не нужно — доставай данные из tasksData.
        function startTaskForStep(step) {
            const task = tasksData[step];
            if (!task) return;
            activeTaskStep = step;

            // Применяем тематическое оформление модалки (см. .theme-* в styles.css) по полю
            // task.theme — при отсутствии темы модалка остаётся в обычном "пергаментном" стиле.
            document.getElementById('modalWindow').className = 'modal-window' + (task.theme ? ' theme-' + task.theme : '');

            if (task.type === 'quiz') {
                startQuiz();
            } else if (task.type === 'mahjong') {
                startMahjongGame();
            } else if (task.type === 'ciphers') {
                startCiphersGame();
            } else if (task.type === 'passwords') {
                startPasswordsGame();
            } else if (task.type === 'drawing') {
                startDrawingGame();
            } else if (task.type === 'truthlie') {
                startTruthLieGame();
            } else if (task.type === 'drinks') {
                startDrinksGame();
            } else if (task.type === 'moviequiz') {
                startMovieQuiz();
            } else if (task.type === 'flagquiz') {
                startFlagQuiz();
            } else if (task.type === 'maze') {
                startMazeGame();
            } else if (task.type === 'liquidsort') {
                startLiquidSortGame();
            } else if (task.type === 'bookdivination') {
                startBookDivinationGame();
            } else if (task.type === 'zodiaclock') {
                startZodiacLockGame();
            } else if (task.type === 'hogwarts') {
                startHogwartsGame();
            } else if (task.type === 'tetris') {
                startTetrisGame();
            } else if (task.type === 'duel') {
                startDuelGame();
            } else if (task.type === 'chemistry') {
                startChemistryGame();
            } else if (task.type === 'whale') {
                startWhaleGame();
            } else if (task.type === 'finale') {
                startFinaleGame();
            }
        }

        // --- ДВИЖОК: КВИЗ (тип 'quiz') ---
        // ===================================================================
        // ОВЁЛ-ХОСТ ВИКТОРИНЫ (локация 1): "quiz owl". Три фазы, переключаемые
        // quizOwlStage: 'dialogue' (сова здоровается, крупный портрет + белый
        // баббл, реиспользует .duel-scene/.duel-char/.duel-speech-bubble как и
        // остальные диалоговые сцены сайта) -> 'quiz' (сам квиз; сова уменьшается
        // и "перелетает" в шапку модалки — .quiz-owl-mini-wrap с анимацией входа
        // только на первом вопросе — и там же показывает реакции на ответы через
        // #quizOwlReaction, см. verifyCurrentQuestion) -> 'outro' (сова снова
        // крупная, финальная реплика, кнопка передаёт управление в advanceStep).
        // ===================================================================
        const quizOwlIntroLines = [
            "Hello, Lizzy — welcome to the quiz. Here you'll need to correctly answer questions about Misha, and about the two of you together.",
            "I hope your Alzheimer's hasn't progressed so far that you need a hint already, on the very first stage.",
            "Good luck getting through it."
        ];
        const quizOwlOutroLine = "Well done — time to move on. Maybe there's still a chance to beat Alzheimer's.";
        let quizOwlStage = 'dialogue';
        let quizOwlLineIndex = 0;

        function startQuiz() {
            quizOwlStage = 'dialogue';
            quizOwlLineIndex = 0;
            renderQuizOwlDialogue();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function renderQuizOwlDialogue() {
            document.getElementById('modal-title').innerText = tasksData[activeTaskStep].modalTitle;
            const isLast = quizOwlLineIndex === quizOwlIntroLines.length - 1;
            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-owl">
                            <img src="owl_quiz.png" alt="Owl" onerror="this.style.display='none';">
                        </div>
                    </div>
                    <div class="intro-bubble" onclick="quizOwlNextIntroLine()">${quizOwlIntroLines[quizOwlLineIndex]}</div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            const actionHtml = isLast
                ? `<button class="action-btn" onclick="quizOwlBeginQuestions()">Start the Quiz ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="quizOwlNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function quizOwlNextIntroLine() {
            if (quizOwlLineIndex < quizOwlIntroLines.length - 1) {
                quizOwlLineIndex++;
                renderQuizOwlDialogue();
            }
        }

        function quizOwlBeginQuestions() {
            quizOwlStage = 'quiz';
            currentQuizIndex = 0;
            document.getElementById('modal-action').innerHTML = '';
            renderQuizQuestion();
        }

        function renderQuizOwlOutro() {
            document.getElementById('modal-title').innerText = tasksData[activeTaskStep].modalTitle;
            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-owl">
                            <img src="owl_quiz.png" alt="Owl" onerror="this.style.display='none';">
                        </div>
                    </div>
                    <div class="intro-bubble">${quizOwlOutroLine}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('modal-action').innerHTML =
                `<button class="action-btn" onclick="advanceStep(activeTaskStep)">Continue ➔</button>`;
        }

        function renderQuizQuestion() {
            const task = tasksData[activeTaskStep];
            const q = task.questions[currentQuizIndex];
            document.getElementById('modal-title').innerText = `${task.modalTitle} (Question ${currentQuizIndex + 1} of ${task.questions.length})`;

            let htmlContent = `
                <div class="quiz-owl-mini-wrap${currentQuizIndex === 0 ? ' quiz-owl-enter' : ''}" id="quizOwlMiniWrap">
                    <img src="owl_quiz.png" class="quiz-owl-mini" alt="Owl" onerror="this.style.display='none';">
                    <div class="quiz-owl-reaction-bubble" id="quizOwlReaction" style="display:none;"></div>
                </div>
            `;
            htmlContent += `<div class="quiz-question-block">`;
            htmlContent += `<p>${q.question}</p>`;
            if (q.note) {
                htmlContent += `<p class="quiz-question-note">${q.note}</p>`;
            }
            htmlContent += `<div class="quiz-options">`;

            q.options.forEach((opt, idx) => {
                let inputId = `q_opt_${idx}`;
                htmlContent += `<label for="${inputId}"><input type="${q.type}" name="currentQuizOpt" value="${idx}" id="${inputId}"> ${opt.emoji} ${opt.text}</label>`;
            });

            htmlContent += `</div></div>`;

            document.getElementById('modal-content').innerHTML = htmlContent;
            document.getElementById('errorMsg').style.display = 'none';

            let btnText = (currentQuizIndex === task.questions.length - 1) ? "Finish Quiz ➔" : "Next Question ➔";
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="verifyCurrentQuestion()">${btnText}</button>`;
        }

        function verifyCurrentQuestion() {
            const task = tasksData[activeTaskStep];
            const q = task.questions[currentQuizIndex];
            const inputs = document.querySelectorAll(`[name="currentQuizOpt"]`);
            let isCorrect = true;

            if (q.type === 'radio') {
                let answeredCorrectly = false;
                inputs.forEach((input, idx) => {
                    if (input.checked && q.options[idx].correct) answeredCorrectly = true;
                });
                if (!answeredCorrectly) isCorrect = false;
            } else if (q.type === 'checkbox') {
                inputs.forEach((input, idx) => {
                    let shouldBeChecked = q.options[idx].correct;
                    if (input.checked !== shouldBeChecked) isCorrect = false;
                });
            }

            // Реакции совы-хоста заменяют собой общий #errorMsg для этой викторины —
            // он держится скрытым (сбрасывается в начале renderQuizQuestion).
            const reaction = document.getElementById('quizOwlReaction');
            const actionBtn = document.querySelector('#modal-action .action-btn');

            if (!isCorrect) {
                if (reaction) {
                    reaction.innerText = "Looks like you need some Alzheimer's pills.";
                    reaction.className = 'quiz-owl-reaction-bubble quiz-owl-reaction-wrong';
                    reaction.style.display = 'block';
                }
                return;
            }

            if (reaction) {
                reaction.innerText = "¡Bien hecho, Lizzy!";
                reaction.className = 'quiz-owl-reaction-bubble quiz-owl-reaction-correct';
                reaction.style.display = 'block';
            }
            if (actionBtn) actionBtn.disabled = true;

            // Небольшая пауза, чтобы реплика совы успела прочитаться, прежде чем
            // перейти к следующему вопросу или к финальной сцене (renderQuizOwlOutro).
            setTimeout(() => {
                currentQuizIndex++;
                if (currentQuizIndex < task.questions.length) {
                    renderQuizQuestion();
                } else {
                    renderQuizOwlOutro();
                }
            }, 900);
        }

        // --- ДВИЖОК: ДОПРОС "ПРАВДА/ЛОЖЬ" (тип 'truthlie', локация 7) ---
        // Игрок отвечает Yes/No на каждый вопрос. Верно = +4 очка, неверно = -2.
        // Нужно набрать 100 очков, чтобы локация засчиталась. При первом достижении
        // 100 очков предлагается выбор: закрыть дело сразу или пройти все файлы до конца
        // (доп. ответы после 100 очков уже не меняют счёт). Каждый ответ показывает,
        // прав ли игрок, и всегда открывает настоящий факт.
        let tlIndex = 0;
        let tlScore = 0;
        let tlGoalReached = false;
        let tlChoiceMade = null; // null | 'continue'
        // tlStage: 'dialogue' (вступительные реплики Шерлока, task.dialogue) → 'intro'
        // (правила допроса, как и раньше) → 'question'/'outro' (прощальные реплики,
        // task.outroDialogue, перед закрытием дела). Если у задания нет task.dialogue/
        // outroDialogue — соответствующая стадия просто пропускается (аналогично ciphers/
        // passwords/drawing).
        let tlStage = 'dialogue';
        let tlDialogueLineIndex = 0;

        function startTruthLieGame() {
            tlIndex = 0;
            tlScore = 0;
            tlGoalReached = false;
            tlChoiceMade = null;
            tlDialogueLineIndex = 0;
            const task = tasksData[activeTaskStep];
            tlStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'intro';
            renderTruthLieModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / правила допроса+вопросы / диалог-прощание ---
        function renderTruthLieModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (tlStage === 'dialogue') {
                renderTlIntroDialogueStage(task);
            } else if (tlStage === 'outro') {
                renderTlOutroStage(task);
            } else {
                renderTruthLieIntro();
            }
        }

        // --- Стадия 'dialogue': вступительные реплики Шерлока (переиспользует
        // .duel-scene/.duel-char/.duel-speech-bubble движков duel/whale/mahjong/ciphers/
        // passwords/drawing, свои цвета — через charClass в CSS). ---
        function renderTlIntroDialogueStage(task) {
            const line = task.dialogue[tlDialogueLineIndex];
            const isLast = tlDialogueLineIndex === task.dialogue.length - 1;
            const cls = task.charClass || 'sherlock';

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-${cls}">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-${cls}" onclick="tlNextIntroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="tlBeginRulesIntro()">🔍 The game is on ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="tlNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function tlNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (tlDialogueLineIndex < task.dialogue.length - 1) {
                tlDialogueLineIndex++;
                renderTlIntroDialogueStage(task);
            }
        }

        function tlBeginRulesIntro() {
            tlStage = 'intro';
            renderTruthLieModal();
        }

        // --- Стадия 'outro': прощальные реплики Шерлока после закрытия дела. ---
        function renderTlOutroStage(task) {
            const line = task.outroDialogue[tlDialogueLineIndex];
            const isLast = tlDialogueLineIndex === task.outroDialogue.length - 1;
            const cls = task.charClass || 'sherlock';

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-${cls}">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-${cls}" onclick="tlNextOutroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="tlFinish()">✅ Continue Journey ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="tlNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function tlNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (tlDialogueLineIndex < task.outroDialogue.length - 1) {
                tlDialogueLineIndex++;
                renderTlOutroStage(task);
            }
        }

        function tlFinish() {
            advanceStep(activeTaskStep);
        }

        // --- Закрытие дела: если у задания есть outroDialogue — сперва показываем
        // прощальные реплики, иначе переходим дальше сразу (как и раньше). ---
        function tlCloseCase() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                tlStage = 'outro';
                tlDialogueLineIndex = 0;
                renderTruthLieModal();
            } else {
                advanceStep(activeTaskStep);
            }
        }

        function renderTruthLieIntro() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;

            let html = `
                <div class="tl-intro">
                    <div class="tl-intro-icon">🕵️‍♀️</div>
                    <p class="tl-intro-text">${task.intro}</p>
                    <div class="tl-intro-rules">
                        <div>✔️ Correct answer: <b>+4 points</b></div>
                        <div>✘ Wrong answer: <b>&minus;2 points</b></div>
                        <div>🎯 Reach <b>100 points</b> to close the case</div>
                    </div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="renderTruthLieQuestion()">🔦 Begin Interrogation ➔</button>`;
        }

        function tlProgressBarHTML() {
            const shown = Math.max(0, tlScore);
            const pct = Math.min(100, shown);
            return `
                <div class="tl-progress-wrap">
                    <div class="tl-progress-label"><span>CASE PROGRESS</span><span>${shown} / 100 pts</span></div>
                    <div class="tl-progress-bar-bg">
                        <div class="tl-progress-bar-fill" style="width:${pct}%"></div>
                        <div class="tl-progress-marker" style="left:${pct}%">🔍</div>
                    </div>
                </div>
            `;
        }

        function renderTruthLieQuestion() {
            const task = tasksData[activeTaskStep];
            const q = task.questions[tlIndex];
            document.getElementById('modal-title').innerText = `${task.modalTitle} (${tlIndex + 1} / ${task.questions.length})`;

            let html = tlProgressBarHTML();
            html += `
                <div class="tl-question-block">
                    <div class="tl-question-num">EVIDENCE #${tlIndex + 1}</div>
                    <p class="tl-question-text">${q.question}</p>
                    <div class="tl-answer-buttons">
                        <button class="tl-btn tl-btn-yes" onclick="answerTruthLie(true)">YES</button>
                        <button class="tl-btn tl-btn-no" onclick="answerTruthLie(false)">NO</button>
                    </div>
                </div>
                <div id="tl-feedback"></div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = '';
        }

        function answerTruthLie(userSaysTrue) {
            const task = tasksData[activeTaskStep];
            const q = task.questions[tlIndex];
            const isCorrect = (userSaysTrue === q.answer);

            // Очки не меняются, если цель уже достигнута и игрок выбрал "продолжить".
            if (!(tlGoalReached && tlChoiceMade === 'continue')) {
                tlScore += isCorrect ? 4 : -2;
                if (tlScore < 0) tlScore = 0;
                if (tlScore >= 100 && !tlGoalReached) {
                    tlGoalReached = true;
                }
            }

            document.querySelectorAll('.tl-btn').forEach(b => b.disabled = true);

            let fbHtml = `<div class="tl-feedback ${isCorrect ? 'tl-correct' : 'tl-wrong'}">`;
            fbHtml += `<div class="tl-stamp">${isCorrect ? '✅ CONFIRMED' : '❌ FALSE LEAD'}</div>`;
            fbHtml += `<div class="tl-fact"><b>Case file states:</b> ${q.fact}</div>`;
            fbHtml += `</div>`;
            document.getElementById('tl-feedback').innerHTML = fbHtml;

            const wrap = document.querySelector('.tl-progress-wrap');
            if (wrap) wrap.outerHTML = tlProgressBarHTML();

            const isLastQuestion = (tlIndex === task.questions.length - 1);
            const actionEl = document.getElementById('modal-action');

            if (tlGoalReached && tlChoiceMade === null) {
                // Только что набрали 100 очков впервые — предлагаем выбор.
                if (isLastQuestion) {
                    actionEl.innerHTML = `<button class="action-btn" onclick="tlCloseCase()">🏁 Close the Case ➔</button>`;
                } else {
                    actionEl.innerHTML = `
                        <button class="action-btn" onclick="tlCloseCase()">🏁 Close the Case Now ➔</button>
                        <button class="action-btn secondary-btn" onclick="tlContinueInvestigating()">🔍 Keep Investigating (all files) ➔</button>
                    `;
                }
            } else if (isLastQuestion) {
                if (tlGoalReached) {
                    actionEl.innerHTML = `<button class="action-btn" onclick="tlCloseCase()">🏁 Close the Case ➔</button>`;
                } else {
                    actionEl.innerHTML = `<button class="action-btn" onclick="startTruthLieGame()">🔄 Not Enough Evidence — Restart Investigation ➔</button>`;
                }
            } else {
                actionEl.innerHTML = `<button class="action-btn" onclick="tlNextQuestion()">Next File ➔</button>`;
            }
        }

        function tlNextQuestion() {
            tlIndex++;
            renderTruthLieQuestion();
        }

        function tlContinueInvestigating() {
            tlChoiceMade = 'continue';
            tlNextQuestion();
        }

        // --- ДВИЖОК: ВИКТОРИНА ФЛАГОВ (тип 'flagquiz', локация 13) ---
        // Флаг → 4 варианта страны. Верно с 1-й попытки = +3 очка, со 2-й = +2, с 3-й = +1,
        // не угадано за 3 попытки = 0 очков (правильный ответ показывается). Нужно набрать
        // task.goal очков (100), чтобы локация засчиталась. При первом достижении цели —
        // выбор: закончить путешествие сейчас или продолжать угадывать флаги дальше
        // (доп. очки после достижения цели больше не считаются, как и в допросе локации 7).
        // ВАЖНО: после того как цель достигнута, кнопка "Finish the Journey / Leave for
        // Coahuila Plains" остаётся доступной на КАЖДОМ следующем экране (не только на
        // последнем флаге) — так можно выйти в локацию 14 в любой момент, даже продолжая
        // угадывать флаги просто для удовольствия.
        let fqOrder = [];
        let fqIndex = 0;
        let fqScore = 0;
        let fqAttempts = 0;
        let fqGoalReached = false;
        let fqChoiceMade = null; // null | 'continue'
        let fqAnswered = false;
        // Стадии (fqStage): 'dialogue' — вступительные реплики персонажа (task.dialogue,
        // см. локацию 13 — искатель приключений, встречающий Lizzy перед стартом),
        // 'intro' — экран с правилами (renderFlagQuizIntro), 'quiz' — сама викторина,
        // 'outro' — прощальные реплики (task.outroDialogue) перед advanceStep. Если у
        // задания нет task.dialogue/outroDialogue — соответствующая стадия просто
        // пропускается, так что старые/будущие flagquiz-задания без персонажа продолжат
        // работать как раньше.
        let fqStage = 'intro';
        let fqDialogueLineIndex = 0;

        function fqShuffleArray(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        function startFlagQuiz() {
            const task = tasksData[activeTaskStep];
            fqDialogueLineIndex = 0;
            fqStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'intro';
            document.getElementById('modalOverlay').classList.add('active');
            if (fqStage === 'dialogue') {
                renderFqIntroDialogueStage(task);
            } else {
                fqBeginRound();
            }
        }

        // --- Стадия 'dialogue': вступительные реплики персонажа (переиспользует
        // .duel-scene/.duel-char/.duel-speech-bubble движков duel/whale/mahjong, свои
        // цвета и анимация появления — через модификаторы
        // duel-char-indy/duel-name-indy/duel-speech-indy в CSS). ---
        function renderFqIntroDialogueStage(task) {
            const line = task.dialogue[fqDialogueLineIndex];
            const isLast = fqDialogueLineIndex === task.dialogue.length - 1;
            const cls = task.charClass || 'indy';

            document.getElementById('modal-title').innerText = task.modalTitle;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-${cls}">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-${cls}" onclick="fqNextIntroDialogueLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="fqBeginRound()">🗺️ Let's begin ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="fqNextIntroDialogueLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function fqNextIntroDialogueLine() {
            const task = tasksData[activeTaskStep];
            if (fqDialogueLineIndex < task.dialogue.length - 1) {
                fqDialogueLineIndex++;
                renderFqIntroDialogueStage(task);
            }
        }

        // Сброс и запуск самого раунда викторины (правила → вопросы). Отдельно от
        // startFlagQuiz(), чтобы кнопка "Restart the Trip" могла запускать раунд заново,
        // не показывая вступительные реплики персонажа повторно.
        function fqBeginRound() {
            const task = tasksData[activeTaskStep];
            fqOrder = fqShuffleArray(task.countries.map((c, i) => i));
            fqIndex = 0;
            fqScore = 0;
            fqAttempts = 0;
            fqGoalReached = false;
            fqChoiceMade = null;
            fqStage = 'quiz';
            renderFlagQuizIntro();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function renderFlagQuizIntro() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;

            let html = `
                <div class="fq-intro">
                    <div class="fq-intro-icon">🌍</div>
                    <p class="fq-intro-text">${task.intro}</p>
                    <div class="fq-intro-rules">
                        <div>🥇 Guessed on the 1st try: <b>+3 points</b></div>
                        <div>🥈 Guessed on the 2nd try: <b>+2 points</b></div>
                        <div>🥉 Guessed on the 3rd try: <b>+1 point</b></div>
                        <div>🎯 Reach <b>${task.goal} points</b> to complete the journey</div>
                    </div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="renderFlagQuizQuestion()">✈️ Start the Journey ➔</button>`;
        }

        function fqProgressBarHTML() {
            const task = tasksData[activeTaskStep];
            const shown = Math.min(task.goal, fqScore);
            const pct = Math.round((shown / task.goal) * 100);
            return `
                <div class="fq-progress-wrap">
                    <div class="fq-progress-label"><span>TRAVEL PROGRESS</span><span>${fqScore} / ${task.goal} pts</span></div>
                    <div class="fq-progress-bar-bg">
                        <div class="fq-progress-bar-fill" style="width:${pct}%"></div>
                        <div class="fq-progress-marker" style="left:${pct}%">✈️</div>
                    </div>
                </div>
            `;
        }

        function fqBuildOptions(correctIdx) {
            const task = tasksData[activeTaskStep];
            const pool = task.countries.map((c, i) => i).filter(i => i !== correctIdx);
            const wrong = fqShuffleArray(pool).slice(0, 3);
            return fqShuffleArray([correctIdx, ...wrong]);
        }

        function renderFlagQuizQuestion() {
            const task = tasksData[activeTaskStep];
            const total = fqOrder.length;
            const countryIdx = fqOrder[fqIndex];
            const country = task.countries[countryIdx];
            fqAttempts = 0;
            fqAnswered = false;
            const options = fqBuildOptions(countryIdx);

            document.getElementById('modal-title').innerText = `${task.modalTitle} (${fqIndex + 1} / ${total})`;

            let html = fqProgressBarHTML();
            html += `
                <div class="fq-question-block">
                    <div class="fq-postcard"><img class="fq-flag-icon" src="https://flagcdn.com/${country.code}.svg" alt="flag"></div>
                    <p class="fq-question-text">Which country does this flag belong to?</p>
                    <div class="fq-options" id="fqOptions">
            `;
            options.forEach(idx => {
                html += `<button class="fq-option-btn" id="fqOpt${idx}" onclick="answerFlag(${idx}, ${countryIdx})">${task.countries[idx].name}</button>`;
            });
            html += `</div></div><div id="fq-feedback"></div>`;

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = '';
        }

        function answerFlag(selectedIdx, correctIdx) {
            if (fqAnswered) return;
            const task = tasksData[activeTaskStep];
            const clickedBtn = document.getElementById(`fqOpt${selectedIdx}`);

            if (selectedIdx === correctIdx) {
                fqAnswered = true;
                const points = 3 - fqAttempts;
                if (!(fqGoalReached && fqChoiceMade === 'continue')) {
                    fqScore += points;
                    if (fqScore >= task.goal && !fqGoalReached) fqGoalReached = true;
                }
                document.querySelectorAll('.fq-option-btn').forEach(b => b.disabled = true);
                clickedBtn.classList.add('fq-correct');

                const wrap = document.querySelector('.fq-progress-wrap');
                if (wrap) wrap.outerHTML = fqProgressBarHTML();

                document.getElementById('fq-feedback').innerHTML =
                    `<div class="fq-feedback fq-feedback-correct"><div class="fq-stamp">✅ ${task.countries[correctIdx].name} — +${points} pts!</div></div>`;

                fqShowNextAction();
            } else {
                fqAttempts++;
                clickedBtn.classList.add('fq-wrong');
                clickedBtn.disabled = true;

                if (fqAttempts >= 3) {
                    fqAnswered = true;
                    document.querySelectorAll('.fq-option-btn').forEach(b => b.disabled = true);
                    const correctBtn = document.getElementById(`fqOpt${correctIdx}`);
                    if (correctBtn) correctBtn.classList.add('fq-correct');

                    const wrap = document.querySelector('.fq-progress-wrap');
                    if (wrap) wrap.outerHTML = fqProgressBarHTML();

                    document.getElementById('fq-feedback').innerHTML =
                        `<div class="fq-feedback fq-feedback-wrong"><div class="fq-stamp">❌ It was ${task.countries[correctIdx].name} — 0 pts</div></div>`;

                    fqShowNextAction();
                }
            }
        }

        function fqShowNextAction() {
            const isLast = (fqIndex === fqOrder.length - 1);
            const actionEl = document.getElementById('modal-action');

            if (fqGoalReached) {
                // Цель уже достигнута (100+ очков) — на любом экране после этого момента
                // держим доступной кнопку выхода/завершения, чтобы можно было уйти на
                // следующую локацию в любой момент, даже продолжая угадывать флаги дальше.
                if (isLast) {
                    actionEl.innerHTML = `<button class="action-btn" onclick="fqFinishJourney()">🏁 Finish the Journey ➔</button>`;
                } else if (fqChoiceMade === null) {
                    actionEl.innerHTML = `
                        <button class="action-btn" onclick="fqFinishJourney()">🏁 Finish the Journey ➔</button>
                        <button class="action-btn secondary-btn" onclick="fqContinueJourney()">🧭 Keep Exploring More Flags ➔</button>
                    `;
                } else {
                    actionEl.innerHTML = `
                        <button class="action-btn secondary-btn" onclick="fqNextQuestion()">Next Flag ➔</button>
                        <button class="action-btn" onclick="fqFinishJourney()">🚪 Leave for Coahuila Plains ➔</button>
                    `;
                }
            } else if (isLast) {
                actionEl.innerHTML = `<button class="action-btn" onclick="fqBeginRound()">🔄 Not Enough Points — Restart the Trip ➔</button>`;
            } else {
                actionEl.innerHTML = `<button class="action-btn" onclick="fqNextQuestion()">Next Flag ➔</button>`;
            }
        }

        function fqNextQuestion() {
            fqIndex++;
            renderFlagQuizQuestion();
        }

        function fqContinueJourney() {
            fqChoiceMade = 'continue';
            fqNextQuestion();
        }

        // Прощальные реплики персонажа (task.outroDialogue) перед тем, как локация
        // засчитается пройденной. Если у задания их нет — сразу advanceStep, как раньше.
        function fqFinishJourney() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                fqStage = 'outro';
                fqDialogueLineIndex = 0;
                renderFqOutroStage(task);
            } else {
                advanceStep(activeTaskStep);
            }
        }

        function renderFqOutroStage(task) {
            const line = task.outroDialogue[fqDialogueLineIndex];
            const isLast = fqDialogueLineIndex === task.outroDialogue.length - 1;
            const cls = task.charClass || 'indy';

            document.getElementById('modal-title').innerText = task.modalTitle;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-${cls}">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-${cls}" onclick="fqNextOutroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="advanceStep(activeTaskStep)">🏆 Onward to Coahuila ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="fqNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function fqNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (fqDialogueLineIndex < task.outroDialogue.length - 1) {
                fqDialogueLineIndex++;
                renderFqOutroStage(task);
            }
        }

        // --- ДВИЖОК: ЛАБИРИНТ РЕМИ (тип 'maze', локация 14) ---
        // Идеальный лабиринт (единственный путь между любыми двумя клетками) строится
        // алгоритмом recursive backtracker — он ВСЕГДА даёт полностью проходимый лабиринт.
        // Управление — стрелки клавиатуры. Remy стартует в левом верхнем углу, сыр — в
        // правом нижнем. Уровни берутся из tasksData[14].levels — каждый следующий крупнее
        // предыдущего (больше клеток → длиннее путь и больше тупиков → сложнее проходить).
        let mzGrid = [];
        let mzCols = 0;
        let mzRows = 0;
        let mzCellSize = 30;
        let mzPlayerR = 0;
        let mzPlayerC = 0;
        let mzMoves = 0;
        let mzTotalMoves = 0;
        let mzLevelIndex = 0;
        let mzWon = false;
        let mzFacing = 'right'; // визуальный разворот Реми по направлению движения

        // opts.straightBias (0..1) — вероятность, с которой при развилке движок
        // предпочтёт продолжить в том же направлении, что и на предыдущем шаге (когда
        // это возможно). Даёт длинные прямые коридоры вместо частых поворотов — лабиринт
        // того же размера визуально "путает" сильнее, потому что развилки встречаются
        // реже, но неожиданнее.
        // opts.braid (0..1) — доля тупиков, в которых прорезается дополнительный проём
        // в соседнюю клетку. Каждый такой проём превращает тупик в петлю: у лабиринта
        // остаётся полностью проходимая структура, но появляются ложные развилки и
        // короткие обманные пути, поэтому механическое "иди, касаясь одной стены" уже
        // не гарантированно приводит к сыру.
        function mzGenerateMaze(cols, rows, opts) {
            opts = opts || {};
            const straightBias = opts.straightBias || 0;
            const braid = opts.braid || 0;

            const grid = [];
            for (let r = 0; r < rows; r++) {
                const row = [];
                for (let c = 0; c < cols; c++) {
                    row.push({ N: true, S: true, E: true, W: true, visited: false });
                }
                grid.push(row);
            }
            const dirs = [
                { dr: -1, dc: 0, self: 'N', opp: 'S' },
                { dr: 1, dc: 0, self: 'S', opp: 'N' },
                { dr: 0, dc: 1, self: 'E', opp: 'W' },
                { dr: 0, dc: -1, self: 'W', opp: 'E' }
            ];
            const stack = [[0, 0]];
            const dirStack = [null]; // направление, которым пришли в клетку на вершине stack
            grid[0][0].visited = true;
            while (stack.length) {
                const r = stack[stack.length - 1][0];
                const c = stack[stack.length - 1][1];
                const curDir = dirStack[dirStack.length - 1];
                const candidates = [];
                dirs.forEach(d => {
                    const nr = r + d.dr, nc = c + d.dc;
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !grid[nr][nc].visited) {
                        candidates.push({ nr, nc, d });
                    }
                });
                if (candidates.length === 0) {
                    stack.pop();
                    dirStack.pop();
                } else {
                    let pick = null;
                    if (curDir && straightBias > 0 && Math.random() < straightBias) {
                        pick = candidates.find(cand => cand.d.self === curDir) || null;
                    }
                    if (!pick) {
                        pick = candidates[Math.floor(Math.random() * candidates.length)];
                    }
                    grid[r][c][pick.d.self] = false;
                    grid[pick.nr][pick.nc][pick.d.opp] = false;
                    grid[pick.nr][pick.nc].visited = true;
                    stack.push([pick.nr, pick.nc]);
                    dirStack.push(pick.d.self);
                }
            }

            if (braid > 0) {
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        const cell = grid[r][c];
                        const openCount = [cell.N, cell.S, cell.E, cell.W].filter(w => !w).length;
                        if (openCount !== 1) continue; // трогаем только настоящие тупики
                        if (Math.random() >= braid) continue;

                        const closable = dirs.filter(d => {
                            if (!cell[d.self]) return false; // проём уже есть
                            const nr = r + d.dr, nc = c + d.dc;
                            return nr >= 0 && nr < rows && nc >= 0 && nc < cols;
                        });
                        if (closable.length === 0) continue;
                        const d = closable[Math.floor(Math.random() * closable.length)];
                        const nr = r + d.dr, nc = c + d.dc;
                        grid[r][c][d.self] = false;
                        grid[nr][nc][d.opp] = false;
                    }
                }
            }

            return grid;
        }

        function startMazeGame() {
            mzLevelIndex = 0;
            mzTotalMoves = 0;
            renderMazeIntro();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function renderMazeIntro() {
            const task = tasksData[activeTaskStep];
            const totalLevels = task.levels.length;
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('modal-content').innerHTML = `
                <div class="rat-intro">
                    <div class="rat-intro-icon">🐀🧀</div>
                    <p class="rat-intro-text">${task.intro}</p>
                    <div class="rat-intro-rules">
                        <div>⬆️⬇️⬅️➡️ Move Remy with the arrow keys</div>
                        <div>🧀 Reach the cheese to clear each level</div>
                        <div>📈 ${totalLevels} levels, each bigger &amp; trickier than the last</div>
                    </div>
                </div>
            `;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="startMazeLevel()">👨‍🍳 Start Cooking ➔</button>`;
        }

        function startMazeLevel() {
            const task = tasksData[activeTaskStep];
            const level = task.levels[mzLevelIndex];
            mzCols = level.cols;
            mzRows = level.rows;
            mzCellSize = level.cell || 30;
            mzGrid = mzGenerateMaze(mzCols, mzRows, { straightBias: level.straightBias || 0, braid: level.braid || 0 });
            mzPlayerR = 0;
            mzPlayerC = 0;
            mzMoves = 0;
            mzWon = false;
            mzFacing = 'right';
            renderMazeBoard();
        }

        function renderMazeBoard() {
            const task = tasksData[activeTaskStep];
            const level = task.levels[mzLevelIndex];
            const totalLevels = task.levels.length;
            document.getElementById('modal-title').innerText = `${task.modalTitle} — ${level.name} (${mzLevelIndex + 1}/${totalLevels})`;

            let html = `
                <div class="rat-stats">
                    <span>📍 Steps: <b id="mzMoves">${mzMoves}</b></span>
                    <span class="rat-stats-hint">Use ↑ ↓ ← ➔ to move</span>
                </div>
                <div class="rat-maze-wrap">
                    <div class="rat-maze-grid" id="mazeGrid" style="grid-template-columns: repeat(${mzCols}, ${mzCellSize}px); grid-template-rows: repeat(${mzRows}, ${mzCellSize}px);">
            `;
            for (let r = 0; r < mzRows; r++) {
                for (let c = 0; c < mzCols; c++) {
                    const cell = mzGrid[r][c];
                    const wallClasses = [
                        cell.N ? 'rw-n' : '',
                        cell.E ? 'rw-e' : '',
                        cell.S ? 'rw-s' : '',
                        cell.W ? 'rw-w' : ''
                    ].filter(Boolean).join(' ');
                    let extra = '';
                    if (r === 0 && c === 0) extra = 'rat-cell-start';
                    if (r === mzRows - 1 && c === mzCols - 1) extra = 'rat-cell-goal';
                    html += `<div class="rat-cell ${wallClasses} ${extra}"></div>`;
                }
            }
            html += `
                    <div class="rat-cheese" id="mazeCheese" style="width:${mzCellSize}px;height:${mzCellSize}px; top:${(mzRows - 1) * mzCellSize}px; left:${(mzCols - 1) * mzCellSize}px;">🧀</div>
                    <div class="rat-remy" id="mazePlayer" style="width:${mzCellSize}px;height:${mzCellSize}px; top:0px; left:0px;">
                        <div class="rat-remy-body">
                            <div class="rat-remy-hat"></div>
                            <div class="rat-remy-face">🐀</div>
                        </div>
                    </div>
                </div>
                <div id="mazeWinBanner"></div>
            `;

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = `<button class="action-btn secondary-btn" onclick="mzRestartLevel()">🔄 Generate a New Maze</button>`;

            document.removeEventListener('keydown', mzKeyHandler);
            document.addEventListener('keydown', mzKeyHandler);
        }

        function mzKeyHandler(e) {
            if (mzWon) return;
            if (!document.getElementById('modalOverlay').classList.contains('active')) return;
            if (!document.getElementById('mazeGrid')) return;

            let dr = 0, dc = 0, dir = null;
            if (e.key === 'ArrowUp') { dr = -1; dc = 0; dir = 'N'; mzFacing = 'up'; }
            else if (e.key === 'ArrowDown') { dr = 1; dc = 0; dir = 'S'; mzFacing = 'down'; }
            else if (e.key === 'ArrowLeft') { dr = 0; dc = -1; dir = 'W'; mzFacing = 'left'; }
            else if (e.key === 'ArrowRight') { dr = 0; dc = 1; dir = 'E'; mzFacing = 'right'; }
            else return;

            e.preventDefault();
            mzMovePlayer(dr, dc, dir);
        }

        function mzMovePlayer(dr, dc, dir) {
            const cell = mzGrid[mzPlayerR][mzPlayerC];
            if (cell[dir]) return; // стена — идти нельзя

            const newR = mzPlayerR + dr;
            const newC = mzPlayerC + dc;
            if (newR < 0 || newR >= mzRows || newC < 0 || newC >= mzCols) return;

            mzPlayerR = newR;
            mzPlayerC = newC;
            mzMoves++;

            const playerEl = document.getElementById('mazePlayer');
            if (playerEl) {
                playerEl.style.top = `${mzPlayerR * mzCellSize}px`;
                playerEl.style.left = `${mzPlayerC * mzCellSize}px`;
                playerEl.classList.toggle('facing-left', mzFacing === 'left');
            }
            const movesEl = document.getElementById('mzMoves');
            if (movesEl) movesEl.innerText = mzMoves;

            if (mzPlayerR === mzRows - 1 && mzPlayerC === mzCols - 1) {
                mzWinLevel();
            }
        }

        function mzWinLevel() {
            mzWon = true;
            mzTotalMoves += mzMoves;
            document.removeEventListener('keydown', mzKeyHandler);

            const task = tasksData[activeTaskStep];
            const level = task.levels[mzLevelIndex];
            const isLastLevel = (mzLevelIndex === task.levels.length - 1);
            const banner = document.getElementById('mazeWinBanner');

            if (isLastLevel) {
                if (banner) {
                    banner.innerHTML = `<div class="rat-win">🎉 "Anyone can cook" — and Remy just proved it! All ${task.levels.length} mazes cleared in ${mzTotalMoves} steps total.</div>`;
                }
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="advanceStep(activeTaskStep)">🏁 Complete the Stage ➔</button>`;
            } else {
                const nextLevel = task.levels[mzLevelIndex + 1];
                if (banner) {
                    banner.innerHTML = `<div class="rat-win">🧀 ${level.name} cleared in ${mzMoves} steps! Next up: ${nextLevel.name} — bigger and trickier.</div>`;
                }
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="mzNextLevel()">➡️ Next Maze</button>`;
            }
        }

        function mzNextLevel() {
            mzLevelIndex++;
            startMazeLevel();
        }

        function mzRestartLevel() {
            document.removeEventListener('keydown', mzKeyHandler);
            startMazeLevel();
        }

        // --- ДВИЖОК: АЛХИМИЧЕСКИЕ КОЛБЫ (тип 'liquidsort', локация 15) ---
        // Классический "water sort": в каждой полной колбе намешаны случайные слои
        // зелий, часть колб пустые. Переливать можно только зелье с ВЕРХА одной колбы
        // на пустую колбу или на колбу, где сверху зелье того же цвета. Цель — развести
        // все цвета по отдельным колбам.
        //
        // Генерация ГАРАНТИРОВАННО решаемых головоломок: вместо случайной раскладки
        // "с нуля" (которая может оказаться нерешаемой), мы стартуем из УЖЕ решённого
        // состояния (каждая колба — один сплошной цвет) и делаем shuffle-шагов случайных
        // "обратных переливаний" — переносим верхний кусок одного цвета на другую колбу,
        // НЕ проверяя совпадение цвета сверху (это разрешено только на этапе генерации).
        // Это ровно обратная операция к обычному ходу игрока, поэтому решение всегда
        // существует — присутствует хотя бы последовательность ходов, отменяющая шаффл.
        const lsColorDefs = [
            { name: 'Ruby Elixir', grad: 'linear-gradient(180deg, #ff6b6b, #a4001f)' },
            { name: 'Sapphire Potion', grad: 'linear-gradient(180deg, #6bb7ff, #0b3d91)' },
            { name: 'Emerald Tonic', grad: 'linear-gradient(180deg, #7ee89a, #0b6e3a)' },
            { name: 'Amethyst Brew', grad: 'linear-gradient(180deg, #c58bff, #5b1e91)' },
            { name: 'Golden Nectar', grad: 'linear-gradient(180deg, #ffe27a, #c98a00)' },
            { name: 'Rose Philtre', grad: 'linear-gradient(180deg, #ffa3c7, #c2185b)' },
            { name: 'Moonlit Silver', grad: 'linear-gradient(180deg, #cfeef0, #2f8f96)' },
            { name: 'Venomous Chartreuse', grad: 'linear-gradient(180deg, #e4ff7a, #8bb400)' },
            { name: 'Onyx Draught', grad: 'linear-gradient(180deg, #4a4a4a, #0d0d0d)' }
        ];

        let lsLevelIndex = 0;
        let lsTubes = [];
        let lsCapacity = 4;
        let lsSelected = null;
        let lsMoves = 0;
        let lsTotalMoves = 0;
        let lsWon = false;
        // Стадии (lsStage): 'dialogue' — вступительные реплики персонажа (task.dialogue),
        // 'intro' — экран с правилами (renderLiquidSortIntro), 'game' — сами колбы,
        // 'outro' — прощальные реплики (task.outroDialogue) перед advanceStep. Если у
        // задания нет task.dialogue/outroDialogue — соответствующая стадия просто
        // пропускается (полностью аналогично движкам 'drawing'/'drinks'/'truthlie').
        let lsStage = 'dialogue';
        let lsDialogueLineIndex = 0;

        function lsRandomShuffle(numColors, numEmpty, capacity, shuffleSteps) {
            let tubes = [];
            for (let c = 0; c < numColors; c++) tubes.push(new Array(capacity).fill(c));
            for (let e = 0; e < numEmpty; e++) tubes.push([]);

            for (let step = 0; step < shuffleSteps; step++) {
                const nonEmpty = tubes.map((t, i) => i).filter(i => tubes[i].length > 0);
                if (nonEmpty.length === 0) break;
                const a = nonEmpty[Math.floor(Math.random() * nonEmpty.length)];
                const candidates = tubes.map((t, i) => i).filter(i => i !== a && tubes[i].length < capacity);
                if (candidates.length === 0) continue;
                const b = candidates[Math.floor(Math.random() * candidates.length)];

                const srcTube = tubes[a];
                const topColor = srcTube[srcTube.length - 1];
                let contiguous = 0;
                for (let k = srcTube.length - 1; k >= 0; k--) {
                    if (srcTube[k] === topColor) contiguous++; else break;
                }
                const room = capacity - tubes[b].length;
                const maxK = Math.min(contiguous, room);
                if (maxK <= 0) continue;
                const k = 1 + Math.floor(Math.random() * maxK);

                tubes[a] = srcTube.slice(0, srcTube.length - k);
                for (let m = 0; m < k; m++) tubes[b].push(topColor);
            }
            return tubes;
        }

        function lsIsSolved(tubes, capacity) {
            return tubes.every(t => t.length === 0 || (t.length === capacity && t.every(c => c === t[0])));
        }

        function lsLegalMove(tubes, capacity, i, j) {
            if (i === j) return 0;
            const src = tubes[i], dst = tubes[j];
            if (src.length === 0) return 0;
            const color = src[src.length - 1];
            if (dst.length > 0 && dst[dst.length - 1] !== color) return 0;
            let contiguous = 0;
            for (let k = src.length - 1; k >= 0; k--) {
                if (src[k] === color) contiguous++; else break;
            }
            const room = capacity - dst.length;
            return Math.min(contiguous, room);
        }

        // Колбы взаимозаменяемы (какая физическая колба держит какой цвет — неважно для
        // победы), поэтому для дедупликации состояний в поиске решения сортируем их
        // содержимое — это резко сокращает пространство состояний перебора.
        function lsCanonicalKey(tubes) {
            return tubes.map(t => t.join(',')).sort().join('|');
        }

        // DFS с посещёнными состояниями и лимитом на число шагов — на досках такого
        // размера (до 8 цветов, 10 колб) быстро подтверждает решаемость или доказывает
        // её отсутствие, перебрав всё достижимое пространство состояний.
        function lsIsSolvable(initialTubes, capacity, budget) {
            const start = initialTubes.map(t => t.slice());
            const visited = new Set([lsCanonicalKey(start)]);
            const stack = [start];
            let steps = 0;
            while (stack.length && steps < budget) {
                const cur = stack.pop();
                steps++;
                if (lsIsSolved(cur, capacity)) return true;
                for (let i = 0; i < cur.length; i++) {
                    for (let j = 0; j < cur.length; j++) {
                        if (i === j) continue;
                        const mv = lsLegalMove(cur, capacity, i, j);
                        if (!mv) continue;
                        const next = cur.map(t => t.slice());
                        const color = next[i][next[i].length - 1];
                        next[i].length -= mv;
                        for (let k = 0; k < mv; k++) next[j].push(color);
                        const key = lsCanonicalKey(next);
                        if (!visited.has(key)) {
                            visited.add(key);
                            stack.push(next);
                        }
                    }
                }
            }
            return false;
        }

        // Перемешивание "обратными переливаниями" даёт решаемую головоломку почти всегда,
        // но не строго в 100% случаев (эмпирически реже при большом числе цветов) — поэтому
        // каждая раскладка ещё и явно прогоняется через солвер; если не решаема — пробуем
        // заново. На досках этого размера проверка практически мгновенная.
        function lsGeneratePuzzle(numColors, numEmpty, capacity, shuffleSteps) {
            for (let attempt = 0; attempt < 40; attempt++) {
                const tubes = lsRandomShuffle(numColors, numEmpty, capacity, shuffleSteps);
                if (!lsIsSolved(tubes, capacity) && lsIsSolvable(tubes, capacity, 150000)) {
                    return tubes;
                }
            }
            // Крайне маловероятный запасной вариант — отдаём последнюю раскладку как есть.
            return lsRandomShuffle(numColors, numEmpty, capacity, shuffleSteps);
        }

        function startLiquidSortGame() {
            const task = tasksData[activeTaskStep];
            lsLevelIndex = 0;
            lsTotalMoves = 0;
            lsDialogueLineIndex = 0;
            lsStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'intro';
            renderLiquidSortDispatcher();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / экран правил / сама игра / диалог-прощание ---
        function renderLiquidSortDispatcher() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (lsStage === 'dialogue') {
                renderLsIntroDialogueStage(task);
            } else if (lsStage === 'outro') {
                renderLsOutroDialogueStage(task);
            } else if (lsStage === 'game') {
                renderLiquidSortBoard();
            } else {
                renderLiquidSortIntro();
            }
        }

        // --- Стадия 'dialogue': вступительные реплики (переиспользует drawSceneHtml() из
        // движка 'drawing', см. ниже по файлу). ---
        function renderLsIntroDialogueStage(task) {
            const line = task.dialogue[lsDialogueLineIndex];
            const isLast = lsDialogueLineIndex === task.dialogue.length - 1;

            const html = drawSceneHtml(task, line, 'lsNextIntroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="lsBeginIntro()">⚗️ Show me the shelf ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="lsNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function lsNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (lsDialogueLineIndex < task.dialogue.length - 1) {
                lsDialogueLineIndex++;
                renderLsIntroDialogueStage(task);
            }
        }

        function lsBeginIntro() {
            lsStage = 'intro';
            renderLiquidSortDispatcher();
        }

        // --- Стадия 'outro': прощальные реплики после прохождения всех уровней. ---
        function renderLsOutroDialogueStage(task) {
            const line = task.outroDialogue[lsDialogueLineIndex];
            const isLast = lsDialogueLineIndex === task.outroDialogue.length - 1;

            const html = drawSceneHtml(task, line, 'lsNextOutroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="advanceStep(activeTaskStep)">🏁 Complete the Stage ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="lsNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function lsNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (lsDialogueLineIndex < task.outroDialogue.length - 1) {
                lsDialogueLineIndex++;
                renderLsOutroDialogueStage(task);
            }
        }

        function renderLiquidSortIntro() {
            const task = tasksData[activeTaskStep];
            const totalLevels = task.levels.length;
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('modal-content').innerHTML = `
                <div class="ls-intro">
                    <div class="ls-intro-icon">⚗️🔮</div>
                    <p class="ls-intro-text">${task.intro}</p>
                    <div class="ls-intro-rules">
                        <div>🧪 Tap a vial to draw its top potion, tap another to pour</div>
                        <div>✨ Pour only onto an empty vial or a matching color on top</div>
                        <div>📜 ${totalLevels} shelves, each a trickier tangle than the last</div>
                    </div>
                </div>
            `;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="startLiquidSortLevel()">⚗️ Begin the Ritual ➔</button>`;
        }

        function startLiquidSortLevel() {
            const task = tasksData[activeTaskStep];
            const level = task.levels[lsLevelIndex];
            lsCapacity = level.capacity || 4;
            lsTubes = lsGeneratePuzzle(level.colors, level.empty, lsCapacity, level.shuffle || 40);
            lsSelected = null;
            lsMoves = 0;
            lsWon = false;
            lsStage = 'game';
            renderLiquidSortBoard();
        }

        function renderLiquidSortBoard() {
            const task = tasksData[activeTaskStep];
            const level = task.levels[lsLevelIndex];
            const totalLevels = task.levels.length;
            document.getElementById('modal-title').innerText = `${task.modalTitle} — ${level.name} (${lsLevelIndex + 1}/${totalLevels})`;

            let html = `
                <div class="ls-stats">
                    <span>🥄 Pours: <b id="lsMoves">${lsMoves}</b></span>
                    <span class="ls-stats-hint">Tap a vial, then tap where to pour</span>
                </div>
                <div class="ls-tubes-wrap" id="lsTubesWrap">
            `;
            lsTubes.forEach((tube, idx) => {
                html += `<div class="ls-tube ${lsSelected === idx ? 'ls-tube-selected' : ''}" data-idx="${idx}" onclick="lsSelectTube(${idx})">`;
                html += `<div class="ls-tube-glass" style="--ls-cap:${lsCapacity}">`;
                for (let slot = lsCapacity - 1; slot >= 0; slot--) {
                    if (tube[slot] !== undefined) {
                        const def = lsColorDefs[tube[slot]];
                        html += `<div class="ls-liquid" style="background:${def.grad}" title="${def.name}"></div>`;
                    } else {
                        html += `<div class="ls-liquid ls-liquid-empty"></div>`;
                    }
                }
                html += `</div></div>`;
            });
            html += `</div><div id="lsWinBanner"></div>`;

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = `<button class="action-btn secondary-btn" onclick="lsRestartLevel()">🔄 Brew a New Shelf</button>`;
        }

        function lsSelectTube(idx) {
            if (lsWon) return;
            if (lsSelected === null) {
                if (lsTubes[idx].length === 0) return;
                lsSelected = idx;
                renderLiquidSortBoard();
                return;
            }
            if (lsSelected === idx) {
                lsSelected = null;
                renderLiquidSortBoard();
                return;
            }
            const moveCount = lsLegalMove(lsTubes, lsCapacity, lsSelected, idx);
            if (moveCount > 0) {
                const color = lsTubes[lsSelected][lsTubes[lsSelected].length - 1];
                lsTubes[lsSelected] = lsTubes[lsSelected].slice(0, lsTubes[lsSelected].length - moveCount);
                for (let m = 0; m < moveCount; m++) lsTubes[idx].push(color);
                lsMoves++;
                lsSelected = null;
                renderLiquidSortBoard();
                if (lsIsSolved(lsTubes, lsCapacity)) {
                    lsWinLevel();
                }
            } else {
                // Нельзя перелить — просто переключаем выбор на новую колбу (если в ней есть зелье).
                lsSelected = lsTubes[idx].length > 0 ? idx : null;
                renderLiquidSortBoard();
            }
        }

        function lsWinLevel() {
            lsWon = true;
            lsTotalMoves += lsMoves;

            const task = tasksData[activeTaskStep];
            const level = task.levels[lsLevelIndex];
            const isLastLevel = (lsLevelIndex === task.levels.length - 1);
            const banner = document.getElementById('lsWinBanner');

            if (isLastLevel) {
                if (banner) {
                    banner.innerHTML = `<div class="ls-win">✨ The philosopher's secret is yours! All ${task.levels.length} shelves untangled in ${lsTotalMoves} pours total.</div>`;
                }
                if (task.outroDialogue && task.outroDialogue.length) {
                    document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="lsBeginOutro()">🏁 Finish ➔</button>`;
                } else {
                    document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="advanceStep(activeTaskStep)">🏁 Complete the Stage ➔</button>`;
                }
            } else {
                const nextLevel = task.levels[lsLevelIndex + 1];
                if (banner) {
                    banner.innerHTML = `<div class="ls-win">🧪 ${level.name} untangled in ${lsMoves} pours! Next up: ${nextLevel.name} — trickier still.</div>`;
                }
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="lsNextLevel()">➡️ Next Shelf</button>`;
            }
        }

        function lsNextLevel() {
            lsLevelIndex++;
            startLiquidSortLevel();
        }

        function lsRestartLevel() {
            startLiquidSortLevel();
        }

        function lsBeginOutro() {
            const task = tasksData[activeTaskStep];
            lsDialogueLineIndex = 0;
            lsStage = 'outro';
            renderLsOutroDialogueStage(task);
        }

        // --- ДВИЖОК: КНИЖНОЕ ГАДАНИЕ (тип 'bookdivination', локация 16) ---
        // task.phrases — 10 фраз (перемешаны, книга не показывается заранее).
        // Каждая фраза = task.phrases[i].clues — массив слов, у каждого свои
        // {page, para, line, word, answer}. Прогресс НЕ сбрасывается при повторном
        // открытии модалки (в отличие от шифров/маджонга) — это долгий квест,
        // терять собранное при случайном закрытии было бы обидно.
        // Стадии (bkStage): 'dialogue' — вступительные реплики персонажа (task.dialogue),
        // 'task' — сами книги/фразы, 'outro' — прощальные реплики (task.outroDialogue)
        // перед advanceStep. Если у задания нет task.dialogue/outroDialogue — соответствующая
        // стадия просто пропускается (полностью аналогично движкам 'ciphers'/'drawing'/'drinks').
        let bkStage = 'dialogue';
        let bkDialogueLineIndex = 0;

        function startBookDivinationGame() {
            const task = tasksData[activeTaskStep];
            const saved = loadTaskProgress(activeTaskStep, 'bookdivination');
            if (saved) {
                bkDialogueLineIndex = saved.bkDialogueLineIndex || 0;
                bkStage = saved.bkStage || 'task';
                if (saved.phrases && saved.phrases.length === task.phrases.length) {
                    task.phrases.forEach((p, i) => {
                        p.solved = !!saved.phrases[i].solved;
                        p.clues.forEach((c, j) => { c.filled = !!(saved.phrases[i].filled && saved.phrases[i].filled[j]); });
                    });
                }
            } else {
                bkDialogueLineIndex = 0;
                bkStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'task';
            }
            renderBookDivinationDispatcher();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / сами книги / диалог-прощание ---
        function renderBookDivinationDispatcher() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (bkStage === 'dialogue') {
                renderBkIntroStage(task);
            } else if (bkStage === 'outro') {
                renderBkOutroStage(task);
            } else {
                renderBookDivinationModal();
            }
        }

        // --- Стадия 'dialogue': вступительные реплики (переиспользует drawSceneHtml()
        // из движка 'drawing'). ---
        function renderBkIntroStage(task) {
            const line = task.dialogue[bkDialogueLineIndex];
            const isLast = bkDialogueLineIndex === task.dialogue.length - 1;

            const html = drawSceneHtml(task, line, 'bkNextIntroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="beginBookDivinationTask()">📖 Let's find those fortunes ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="bkNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function bkNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (bkDialogueLineIndex < task.dialogue.length - 1) {
                bkDialogueLineIndex++;
                renderBkIntroStage(task);
            }
        }

        function beginBookDivinationTask() {
            bkStage = 'task';
            renderBookDivinationDispatcher();
        }

        // --- Стадия 'outro': прощальные реплики после того, как все 10 фраз собраны. ---
        function renderBkOutroStage(task) {
            const line = task.outroDialogue[bkDialogueLineIndex];
            const isLast = bkDialogueLineIndex === task.outroDialogue.length - 1;

            const html = drawSceneHtml(task, line, 'bkNextOutroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="advanceStep(activeTaskStep)">✅ Continue Journey ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="bkNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function bkNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (bkDialogueLineIndex < task.outroDialogue.length - 1) {
                bkDialogueLineIndex++;
                renderBkOutroStage(task);
            }
        }

        function bkCurrentPhrase(task) {
            return task.phrases.find(p => !p.solved) || null;
        }

        function renderBookDivinationModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;

            const solvedPhrases = task.phrases.filter(p => p.solved);
            const current = bkCurrentPhrase(task);

            let html = '';

            if (solvedPhrases.length === 0) {
                html += `<div class="book-intro">
                    <p>${task.intro}</p>
                    <div class="book-shelf-list">
                        ${task.bookList.map(b => `<span class="book-chip">📖 ${b}</span>`).join('')}
                    </div>
                </div>`;
            }

            html += `<div class="book-progress">Fortunes told: <b>${solvedPhrases.length}</b> / ${task.phrases.length}</div>`;

            if (solvedPhrases.length > 0) {
                html += `<div class="book-saved-shelf">`;
                solvedPhrases.forEach(p => {
                    html += `
                        <div class="book-saved-card">
                            <div class="book-saved-text">${p.text}</div>
                            <div class="book-saved-source">— found within <i>${p.book}</i></div>
                        </div>`;
                });
                html += `</div>`;
            }

            if (current) {
                const idxInAll = task.phrases.indexOf(current) + 1;
                html += `
                    <div class="book-active-card" id="bookActiveCard">
                        <div class="book-active-title">Fortune ${solvedPhrases.length + 1} of ${task.phrases.length}</div>
                        <div class="book-active-hint">Somewhere in one of the five books... find each word by its address.</div>
                        <div class="book-clue-grid">
                            ${current.clues.map((c, i) => `
                                <div class="book-clue-tile ${c.filled ? 'is-filled' : ''}" id="bookClue-${current.id}-${i}">
                                    <div class="book-clue-coords">
                                        <span>p.${c.page}</span><span>¶${c.para}</span><span>ln.${c.line}</span><span>w.${c.word}</span>
                                    </div>
                                    ${c.filled
                                        ? `<div class="book-clue-word">${c.answer}</div>`
                                        : `<input type="text" class="book-clue-input" id="bookInput-${current.id}-${i}"
                                             placeholder="word..." autocomplete="off"
                                             onkeydown="if(event.key==='Enter'){checkBookWord(${current.id}, ${i});}">`
                                    }
                                </div>
                            `).join('')}
                        </div>
                        <button class="book-check-btn" onclick="checkBookAll(${current.id})">Verify Fortune</button>
                        <div class="book-active-status" id="bookStatus-${current.id}"></div>
                    </div>
                `;
            } else {
                html += `<div class="book-complete-msg">✨ All ten fortunes have been told. The shelf grows quiet, and the path ahead opens. ✨</div>`;
            }

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            const allSolved = task.phrases.every(p => p.solved);
            document.getElementById('modal-action').innerHTML = allSolved
                ? `<button class="action-btn" onclick="completeBookDivinationStage()">Cross the Border ➔</button>`
                : `<button class="action-btn locked-status">🔒 Tell all ten fortunes to proceed</button>`;

            // Автопрокрутка к активной карточке, чтобы было видно "смещение вниз"
            const activeCard = document.getElementById('bookActiveCard');
            if (activeCard) {
                setTimeout(() => activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
            }
        }

        function bkNormalize(str) {
            return str.toLowerCase().replace(/[^a-zà-ÿ']/gi, '').trim();
        }

        // Проверка одного слова (по Enter в конкретном поле) — просто подсвечивает
        // конкретную клетку, без полной проверки всей фразы.
        function checkBookWord(phraseId, clueIndex) {
            const task = tasksData[activeTaskStep];
            const phrase = task.phrases.find(p => p.id === phraseId);
            const clue = phrase.clues[clueIndex];
            const input = document.getElementById(`bookInput-${phraseId}-${clueIndex}`);
            if (!input) return;

            if (bkNormalize(input.value) === bkNormalize(clue.answer)) {
                clue.filled = true;
                renderBookDivinationModal();
                bkMaybeAutoComplete(phrase);
            } else {
                const tile = document.getElementById(`bookClue-${phraseId}-${clueIndex}`);
                if (tile) {
                    tile.classList.add('book-shake');
                    setTimeout(() => tile.classList.remove('book-shake'), 400);
                }
            }
        }

        // Кнопка "Verify Fortune" — проверяет разом все ещё не отмеченные поля фразы.
        function checkBookAll(phraseId) {
            const task = tasksData[activeTaskStep];
            const phrase = task.phrases.find(p => p.id === phraseId);
            let allOk = true;

            phrase.clues.forEach((clue, i) => {
                if (clue.filled) return;
                const input = document.getElementById(`bookInput-${phraseId}-${i}`);
                if (input && bkNormalize(input.value) === bkNormalize(clue.answer)) {
                    clue.filled = true;
                } else {
                    allOk = false;
                    const tile = document.getElementById(`bookClue-${phraseId}-${i}`);
                    if (tile && input && input.value.trim() !== '') {
                        tile.classList.add('book-shake');
                        setTimeout(() => tile.classList.remove('book-shake'), 400);
                    }
                }
            });

            renderBookDivinationModal();

            const statusEl = document.getElementById(`bookStatus-${phraseId}`);
            if (!allOk && statusEl) {
                statusEl.className = 'book-active-status error';
                statusEl.innerText = 'Not quite — some words are still missing or mistaken. Keep searching!';
            }

            bkMaybeAutoComplete(phrase);
        }

        function bkMaybeAutoComplete(phrase) {
            if (phrase.clues.every(c => c.filled)) {
                bkBurnPhrase(phrase);
            }
        }

        // Анимация "выжигания" собранной фразы — временно показываем готовое
        // предложение крупным каллиграфическим шрифтом с эффектом тления, затем
        // помечаем фразу решённой и перерисовываем модалку (она уходит на полку
        // сохранённых фраз, а новое задание "сдвигается вниз").
        function bkBurnPhrase(phrase) {
            const card = document.getElementById('bookActiveCard');
            if (!card) return;

            card.innerHTML = `
                <div class="book-burn-stage">
                    <div class="book-burn-text">${phrase.text}</div>
                </div>
            `;

            setTimeout(() => {
                phrase.solved = true;
                renderBookDivinationModal();
            }, 1700);
        }

        function completeBookDivinationStage() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                bkDialogueLineIndex = 0;
                bkStage = 'outro';
                renderBkOutroStage(task);
            } else {
                alert("🔮 The book of fortunes is complete. Every word has found its place — and so will you.");
                advanceStep(activeTaskStep);
            }
        }

        // --- ДВИЖОК: ШИФРЫ (тип 'ciphers') ---
        function startCiphersGame() {
            const task = tasksData[activeTaskStep];
            task.items.forEach(c => c.solved = false); // сбрасываем статус при каждом открытии
            cphDialogueLineIndex = 0;
            cphStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'task';
            renderCiphersModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / сами шифры / диалог-прощание ---
        function renderCiphersModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (cphStage === 'dialogue') {
                renderCphIntroStage(task);
            } else if (cphStage === 'outro') {
                renderCphOutroStage(task);
            } else {
                renderCiphersTaskStage(task);
            }
        }

        // --- Стадия 'dialogue': вступительные реплики Шерлока (переиспользует
        // .duel-scene/.duel-char/.duel-speech-bubble движков duel/whale/mahjong, свои
        // цвета — через модификаторы duel-char-sherlock/duel-name-sherlock/
        // duel-speech-sherlock в CSS). ---
        function renderCphIntroStage(task) {
            const line = task.dialogue[cphDialogueLineIndex];
            const isLast = cphDialogueLineIndex === task.dialogue.length - 1;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-sherlock">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-sherlock">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-sherlock" onclick="cphNextIntroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="beginCiphersTask()">🔍 The game is on ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="cphNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function cphNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (cphDialogueLineIndex < task.dialogue.length - 1) {
                cphDialogueLineIndex++;
                renderCphIntroStage(task);
            }
        }

        function beginCiphersTask() {
            cphStage = 'task';
            renderCiphersModal();
        }

        // --- Стадия 'outro': прощальные реплики Шерлока после решения всех шифров. ---
        function renderCphOutroStage(task) {
            const line = task.outroDialogue[cphDialogueLineIndex];
            const isLast = cphDialogueLineIndex === task.outroDialogue.length - 1;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-sherlock">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-sherlock">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-sherlock" onclick="cphNextOutroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="finishCiphersTask()">✅ Continue Journey ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="cphNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function cphNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (cphDialogueLineIndex < task.outroDialogue.length - 1) {
                cphDialogueLineIndex++;
                renderCphOutroStage(task);
            }
        }

        function finishCiphersTask() {
            advanceStep(activeTaskStep);
        }

        // --- Стадия 'task': собственно карточки шифров (как и раньше). ---
        function renderCiphersTaskStage(task) {
            let html = `<p style="margin-bottom: 15px; font-style: italic; color: #5c1d1d;">${task.intro}</p>`;

            task.items.forEach((item) => {
                html += `
                    <div class="cipher-card" id="cipher-card-${item.id}">
                        <h3>${item.name}</h3>
                        <div class="cipher-text">${item.encrypted}</div>
                        <div class="cipher-hint">Hint: ${item.hint}</div>
                        <div class="cipher-input-group">
                            <input type="text" class="cipher-input" id="cipher-input-${item.id}" placeholder="Type decoded phrase..." ${item.solved ? 'value="' + item.answer + '" disabled' : ''}>
                            <button class="cipher-check-btn" onclick="checkCipher(${item.id})" ${item.solved ? 'style="display:none;"' : ''}>Verify</button>
                        </div>
                        <div class="cipher-status" id="cipher-status-${item.id}">${item.solved ? '✅ Solved!' : ''}</div>
                    </div>
                `;
            });

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            let allSolved = task.items.every(c => c.solved);
            let actionBtnHtml = allSolved ? `<button class="action-btn" onclick="completeCiphersStage()">Continue Journey ➔</button>` : `<button class="action-btn locked-status">🔓 Solve all ciphers to proceed</button>`;
            document.getElementById('modal-action').innerHTML = actionBtnHtml;
        }

        function checkCipher(id) {
            const task = tasksData[activeTaskStep];
            const item = task.items.find(c => c.id === id);
            const inputVal = document.getElementById(`cipher-input-${id}`).value.trim();
            const statusEl = document.getElementById(`cipher-status-${id}`);

            // Нормализуем сравнение (игнорируем регистр, лишние пробелы и апострофы —
            // "I'm" и "Im" при сверке считаются одинаковыми, апостроф можно не печатать)
            const normalize = str => str.toLowerCase().replace(/['‘’]/g, "").replace(/\s+/g, ' ').trim();

            if (normalize(inputVal) === normalize(item.answer)) {
                item.solved = true;
                statusEl.className = "cipher-status success";
                statusEl.innerText = "✅ Solved!";

                document.getElementById(`cipher-input-${id}`).disabled = true;
                const btn = document.querySelector(`#cipher-card-${id} .cipher-check-btn`);
                if (btn) btn.style.display = 'none';

                if (task.items.every(c => c.solved)) {
                    document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="completeCiphersStage()">Continue Journey ➔</button>`;
                }
            } else {
                statusEl.className = "cipher-status error";
                statusEl.innerText = "❌ Incorrect, try again!";
            }
        }

        function completeCiphersStage() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                cphStage = 'outro';
                cphDialogueLineIndex = 0;
                renderCiphersModal();
            } else {
                alert("🎉 Incredible! All ciphers successfully solved!");
                advanceStep(activeTaskStep);
            }
        }

        // --- ДВИЖОК: ПАРОЛИ ЗА ПОБЕДЫ (тип 'passwords') ---
        // Список отдельных паролей (по одному на пункт, например на игру/испытание вне сайта).
        // Каждый items[].password вводится в свой собственный инпут.
        // Три стадии (pwStage): 'dialogue' — вступительные реплики персонажа (task.dialogue),
        // 'task' — сами пароли, 'outro' — прощальные реплики (task.outroDialogue) перед
        // advanceStep. Если у задания нет task.dialogue/outroDialogue — соответствующая
        // стадия просто пропускается (полностью аналогично движку 'ciphers').
        let pwStage = 'dialogue';
        let pwDialogueLineIndex = 0;

        function startPasswordsGame() {
            const task = tasksData[activeTaskStep];
            task.items.forEach(c => c.solved = false); // сбрасываем статус при каждом открытии
            pwDialogueLineIndex = 0;
            pwStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'task';
            renderPasswordsModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / сами пароли / диалог-прощание ---
        function renderPasswordsModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (pwStage === 'dialogue') {
                renderPwIntroStage(task);
            } else if (pwStage === 'outro') {
                renderPwOutroStage(task);
            } else {
                renderPasswordsTaskStage(task);
            }
        }

        // --- Стадия 'dialogue': вступительные реплики Billy (переиспользует
        // .duel-scene/.duel-char/.duel-speech-bubble движков duel/whale/mahjong/ciphers, свои
        // цвета — через модификаторы duel-char-saw/duel-name-saw/duel-speech-saw в CSS). ---
        function renderPwIntroStage(task) {
            const line = task.dialogue[pwDialogueLineIndex];
            const isLast = pwDialogueLineIndex === task.dialogue.length - 1;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-saw">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-saw">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-saw" onclick="pwNextIntroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="beginPasswordsTask()">🎮 Let's play ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="pwNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function pwNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (pwDialogueLineIndex < task.dialogue.length - 1) {
                pwDialogueLineIndex++;
                renderPwIntroStage(task);
            }
        }

        function beginPasswordsTask() {
            pwStage = 'task';
            renderPasswordsModal();
        }

        // --- Стадия 'outro': прощальные реплики Billy после ввода всех паролей. ---
        function renderPwOutroStage(task) {
            const line = task.outroDialogue[pwDialogueLineIndex];
            const isLast = pwDialogueLineIndex === task.outroDialogue.length - 1;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-saw">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-saw">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-saw" onclick="pwNextOutroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="finishPasswordsTask()">✅ Continue Journey ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="pwNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function pwNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (pwDialogueLineIndex < task.outroDialogue.length - 1) {
                pwDialogueLineIndex++;
                renderPwOutroStage(task);
            }
        }

        function finishPasswordsTask() {
            advanceStep(activeTaskStep);
        }

        // --- Стадия 'task': собственно карточки паролей (как и раньше). ---
        function renderPasswordsTaskStage(task) {
            let html = `<p style="margin-bottom: 15px; font-style: italic; color: #5c1d1d;">${task.intro}</p>`;

            task.items.forEach((item) => {
                html += `
                    <div class="cipher-card" id="pw-card-${item.id}">
                        <h3>${item.game}</h3>
                        <div class="cipher-input-group">
                            <input type="text" class="cipher-input" id="pw-input-${item.id}" placeholder="Enter passcode..." ${item.solved ? 'value="' + item.password + '" disabled' : ''}>
                            <button class="cipher-check-btn" onclick="checkGamePassword(${item.id})" ${item.solved ? 'style="display:none;"' : ''}>Verify</button>
                        </div>
                        <div class="cipher-status" id="pw-status-${item.id}">${item.solved ? '✅ Solved!' : ''}</div>
                    </div>
                `;
            });

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            let allSolved = task.items.every(c => c.solved);
            let actionBtnHtml = allSolved ? `<button class="action-btn" onclick="completePasswordsStage()">Continue Journey ➔</button>` : `<button class="action-btn locked-status">🔓 Enter all passcodes to proceed</button>`;
            document.getElementById('modal-action').innerHTML = actionBtnHtml;
        }

        function checkGamePassword(id) {
            const task = tasksData[activeTaskStep];
            const item = task.items.find(c => c.id === id);
            const inputVal = document.getElementById(`pw-input-${id}`).value.trim();
            const statusEl = document.getElementById(`pw-status-${id}`);

            if (inputVal === item.password) {
                item.solved = true;
                statusEl.className = "cipher-status success";
                statusEl.innerText = "✅ Solved!";

                document.getElementById(`pw-input-${id}`).disabled = true;
                const btn = document.querySelector(`#pw-card-${id} .cipher-check-btn`);
                if (btn) btn.style.display = 'none';

                if (task.items.every(c => c.solved)) {
                    document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="completePasswordsStage()">Continue Journey ➔</button>`;
                }
            } else {
                statusEl.className = "cipher-status error";
                statusEl.innerText = "❌ Incorrect, try again!";
            }
        }

        function completePasswordsStage() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                pwStage = 'outro';
                pwDialogueLineIndex = 0;
                renderPasswordsModal();
            } else {
                alert("🎉 Amazing! You beat Misha in every game!");
                advanceStep(activeTaskStep);
            }
        }

        // --- ДВИЖОК: ДУЭЛЬ ЗАГАДОК (тип 'duel', локация 21 — "The Olympic Witch") ---
        // Этап 1 (duelStage 'dialogue'): Ведьма и Kratos "выезжают" слева по очереди,
        // реплики листаются кликом по баблу/кнопке. Этап 2 (duelStage 'task'): текст
        // правил + два независимых поля пароля (Kratos / Witch). Обе загадочные тройки
        // задаются вне сайта — здесь только приём итоговых паролей.
        let duelStage = 'dialogue';
        let duelLineIndex = 0;

        function startDuelGame() {
            const task = tasksData[activeTaskStep];
            task.kratos.solved = false;
            task.witch.solved = false;
            duelStage = 'dialogue';
            duelLineIndex = 0;
            renderDuelModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function renderDuelModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (duelStage === 'dialogue') {
                renderDuelDialogueStage(task);
            } else {
                renderDuelTaskStage(task);
            }
        }

        function renderDuelDialogueStage(task) {
            const line = task.dialogue[duelLineIndex];
            const isLast = duelLineIndex === task.dialogue.length - 1;

            // Оба персонажа уже "на сцене" с первой реплики — выезжают слева по очереди,
            // Kratos с небольшой задержкой, чтобы было видно, что он появился вторым.
            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-witch">
                            <img src="duel_chars/witch.png" alt="Witch" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-witch">Witch</div>
                        </div>
                        <div class="duel-char duel-char-kratos">
                            <img src="duel_chars/kratos.png" alt="Kratos" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-kratos">Kratos</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-${line.speaker}" onclick="duelNextLine()">
                        <span class="duel-speaker-label">${line.name}:</span> ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="startDuelChallenge()">⚔️ Begin the Duel ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="duelNextLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function duelNextLine() {
            const task = tasksData[activeTaskStep];
            if (duelLineIndex < task.dialogue.length - 1) {
                duelLineIndex++;
                renderDuelDialogueStage(task);
            }
        }

        function startDuelChallenge() {
            duelStage = 'task';
            renderDuelModal();
        }

        function renderDuelTaskStage(task) {
            const html = `
                <p style="margin-bottom: 15px;">${task.intro}</p>

                <div class="cipher-card" id="duel-card-kratos">
                    <h3>⚔️ Kratos's Passcode</h3>
                    <div class="cipher-input-group">
                        <input type="text" class="cipher-input" id="duel-input-kratos" placeholder="Enter Kratos's passcode..." ${task.kratos.solved ? 'value="' + task.kratos.password + '" disabled' : ''}>
                        <button class="cipher-check-btn" onclick="checkDuelPassword('kratos')" ${task.kratos.solved ? 'style="display:none;"' : ''}>Verify</button>
                    </div>
                    <div class="cipher-status" id="duel-status-kratos">${task.kratos.solved ? '✅ Solved!' : ''}</div>
                </div>

                <div class="cipher-card" id="duel-card-witch">
                    <h3>🔮 Witch's Passcode</h3>
                    <div class="cipher-input-group">
                        <input type="text" class="cipher-input" id="duel-input-witch" placeholder="Enter Witch's passcode..." ${task.witch.solved ? 'value="' + task.witch.password + '" disabled' : ''}>
                        <button class="cipher-check-btn" onclick="checkDuelPassword('witch')" ${task.witch.solved ? 'style="display:none;"' : ''}>Verify</button>
                    </div>
                    <div class="cipher-status" id="duel-status-witch">${task.witch.solved ? '✅ Solved!' : ''}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const bothSolved = task.kratos.solved && task.witch.solved;
            const actionBtnHtml = bothSolved
                ? `<button class="action-btn" onclick="completeDuelStage()">Continue Journey ➔</button>`
                : `<button class="action-btn locked-status">🔓 Enter both passcodes to proceed</button>`;
            document.getElementById('modal-action').innerHTML = actionBtnHtml;
        }

        function checkDuelPassword(who) {
            const task = tasksData[activeTaskStep];
            const entry = task[who];
            const inputVal = document.getElementById(`duel-input-${who}`).value.trim();
            const statusEl = document.getElementById(`duel-status-${who}`);

            if (inputVal === entry.password) {
                entry.solved = true;
                statusEl.className = "cipher-status success";
                statusEl.innerText = "✅ Solved!";

                document.getElementById(`duel-input-${who}`).disabled = true;
                const btn = document.querySelector(`#duel-card-${who} .cipher-check-btn`);
                if (btn) btn.style.display = 'none';

                if (task.kratos.solved && task.witch.solved) {
                    document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="completeDuelStage()">Continue Journey ➔</button>`;
                }
            } else {
                statusEl.className = "cipher-status error";
                statusEl.innerText = "❌ Incorrect, try again!";
            }
        }

        function completeDuelStage() {
            alert("🎉 Kratos and Witch both nod in respect — you've earned your way past San Felipe!");
            advanceStep(activeTaskStep);
        }

        // --- ДВИЖОК: КИТ RIZZY (тип 'whale', локация 23 — Ojo de Liebre Lagoon) ---
        // Этап 1 (whaleStage 'dialogue'): Rizzy "выныривает" на сцену, реплики на
        // испанском листаются кликом по бабблу (переиспользуем .duel-scene/.duel-char/
        // .duel-speech-bubble из движка 'duel', один персонаж вместо двух). Этап 2
        // (whaleStage 'task'): текст задания (письмо в реальной жизни) + чек-лист шагов
        // + одно поле пароля — пароль выдаётся вручную, когда письмо реально написано.
        let whaleStage = 'dialogue';
        let whaleLineIndex = 0;

        function startWhaleGame() {
            const task = tasksData[activeTaskStep];
            task.solved = false;
            whaleStage = 'dialogue';
            whaleLineIndex = 0;
            renderWhaleModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function renderWhaleModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (whaleStage === 'dialogue') {
                renderWhaleDialogueStage(task);
            } else {
                renderWhaleTaskStage(task);
            }
        }

        function renderWhaleDialogueStage(task) {
            const line = task.dialogue[whaleLineIndex];
            const isLast = whaleLineIndex === task.dialogue.length - 1;

            const html = `
                <div class="duel-scene whale-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-rizzy">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-rizzy">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-rizzy" onclick="whaleNextLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'toca la burbuja para continuar…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="startWhaleTask()">🐋 Escuchar la propuesta ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="whaleNextLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function whaleNextLine() {
            const task = tasksData[activeTaskStep];
            if (whaleLineIndex < task.dialogue.length - 1) {
                whaleLineIndex++;
                renderWhaleDialogueStage(task);
            }
        }

        function startWhaleTask() {
            whaleStage = 'task';
            renderWhaleModal();
        }

        function renderWhaleTaskStage(task) {
            const checklistHtml = task.checklist && task.checklist.length
                ? `<div class="tecate-checklist">` + task.checklist.map(item => `
                    <div class="tecate-checklist-item">
                        <span class="tecate-checklist-icon">${item.icon}</span>
                        <span class="tecate-checklist-text">${item.text}</span>
                    </div>
                `).join('') + `</div>`
                : '';

            const html = `
                <div class="disney-content">
                    <div class="disney-sparkle" style="top: -6px; left: 6px;">💧</div>
                    <div class="disney-sparkle" style="top: 4px; right: 10px; animation-delay: 0.7s;">🌊</div>
                    <div class="disney-sparkle" style="bottom: -4px; left: 40px; animation-delay: 1.3s;">💧</div>
                    <div class="disney-sparkle" style="bottom: 2px; right: 50px; animation-delay: 0.4s;">🌊</div>
                    <div class="disney-icon">🐋</div>
                    <p class="disney-intro">${task.intro}</p>
                    ${checklistHtml}
                    <div class="whale-pledge-box">
                        <p class="whale-pledge-text">${task.pledgeText}</p>
                        <label class="whale-pledge-check-label">
                            <input type="checkbox" id="whale-pledge-check" ${task.solved ? 'checked disabled' : ''}>
                            I agree to do everything exactly as described above.
                        </label>
                        <div class="disney-input-group">
                            <input type="text" class="disney-input" id="whale-signature-input" placeholder="${task.signaturePlaceholder}" ${task.solved ? 'value="' + task.signature + '" disabled' : ''}>
                            ${task.solved ? '' : `<button class="disney-btn" onclick="signWhalePledge()">${task.signLabel}</button>`}
                        </div>
                        <div class="disney-status" id="whale-status">${task.solved ? '✅ Signed!' : ''}</div>
                    </div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('modal-action').innerHTML = task.solved
                ? `<button class="action-btn" onclick="completeWhaleStage()">Continue Journey ➔</button>`
                : '';
        }

        function signWhalePledge() {
            const task = tasksData[activeTaskStep];
            const nameVal = document.getElementById('whale-signature-input').value.trim();
            const isChecked = document.getElementById('whale-pledge-check').checked;
            const statusEl = document.getElementById('whale-status');

            if (!isChecked || !nameVal) {
                statusEl.className = 'disney-status error';
                statusEl.innerText = '❌ Check the box and sign your name to continue.';
                return;
            }

            task.signature = nameVal;
            task.solved = true;
            renderWhaleTaskStage(task);
        }

        function completeWhaleStage() {
            const task = tasksData[activeTaskStep];
            alert(task.completeMessage || "🐋 Rizzy is happy — the way forward is open!");
            advanceStep(activeTaskStep);
        }

        // --- ДВИЖОК: ФИНАЛ (тип 'finale', локация 24 — Rosarito) ---
        // Один персонаж (Миша) на берегу, четыре экрана внутри одной модалки, которые
        // переключает finaleStage: 'dialogue1' -> 'task' -> 'dialogue2' -> 'final'.
        // Диалоговые экраны переиспользуют .duel-scene/.duel-char/.duel-speech-bubble
        // (как в локации 23), но с модификатором duel-*-misha (см. styles.css).
        // Финал не вызывает advanceStep() — currentStep и так упирается в потолок 24
        // (см. advanceStep), поэтому это просто последний экран внутри той же модалки,
        // закрывается обычной кнопкой "Закрыть" (closeModal).
        let finaleStage = 'dialogue1';
        let finaleLineIndex = 0;

        function startFinaleGame() {
            const task = tasksData[activeTaskStep];
            task.solved = false;
            finaleStage = 'dialogue1';
            finaleLineIndex = 0;
            renderFinaleModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function renderFinaleModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (finaleStage === 'dialogue1') {
                renderFinaleDialogueStage(task, task.dialogue1, 'task', '🧮 Solve the puzzle ➔');
            } else if (finaleStage === 'task') {
                renderFinaleTaskStage(task);
            } else if (finaleStage === 'dialogue2') {
                renderFinaleDialogueStage(task, task.dialogue2, 'final', '📍 See the coordinates ➔');
            } else {
                renderFinaleFinalStage(task);
            }
        }

        function renderFinaleDialogueStage(task, lines, nextStage, nextLabel) {
            const line = lines[finaleLineIndex];
            const isLast = finaleLineIndex === lines.length - 1;

            const html = `
                <div class="duel-scene finale-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-misha">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-misha">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-misha" onclick="finaleNextLine(${lines.length})">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="goFinaleStage('${nextStage}')">${nextLabel}</button>`
                : `<button class="action-btn secondary-btn" onclick="finaleNextLine(${lines.length})">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function finaleNextLine(linesLength) {
            if (finaleLineIndex < linesLength - 1) {
                finaleLineIndex++;
                renderFinaleModal();
            }
        }

        function goFinaleStage(stage) {
            finaleStage = stage;
            finaleLineIndex = 0;
            renderFinaleModal();
        }

        function renderFinaleTaskStage(task) {
            const html = `
                <div class="disney-content finale-task-content">
                    <div class="disney-icon">📐</div>
                    <p class="disney-intro">${task.taskIntro}</p>
                    <div class="finale-equation-card">${task.equationLabel}</div>
                    <div class="finale-roots-row">
                        <input type="text" class="disney-input finale-root-input" id="finale-root-a" placeholder="x₁ = ? (smaller)">
                        <input type="text" class="disney-input finale-root-input" id="finale-root-b" placeholder="x₂ = ? (larger)">
                    </div>
                    <button class="disney-btn" onclick="checkFinaleRoots()">Check ✔</button>
                    <div class="disney-status" id="finale-status"></div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('modal-action').innerHTML = '';
        }

        function checkFinaleRoots() {
            const task = tasksData[activeTaskStep];
            const statusEl = document.getElementById('finale-status');
            const a = parseFloat(document.getElementById('finale-root-a').value.replace(',', '.'));
            const b = parseFloat(document.getElementById('finale-root-b').value.replace(',', '.'));

            if (isNaN(a) || isNaN(b)) {
                statusEl.className = 'disney-status error';
                statusEl.innerText = '❌ Enter both roots as numbers.';
                return;
            }

            // Оба корня — целые числа после округления, и порядок важен:
            // сначала МЕНЬШИЙ корень, затем БОЛЬШИЙ (см. task.taskIntro).
            const isMatch = a === task.roots[0] && b === task.roots[1];

            if (isMatch) {
                task.solved = true;
                goFinaleStage('dialogue2');
            } else if (a > b) {
                statusEl.className = 'disney-status error';
                statusEl.innerText = '❌ Remember: the smaller root goes first, then the larger one.';
            } else {
                statusEl.className = 'disney-status error';
                statusEl.innerText = '❌ Not quite — check your rounding and try again!';
            }
        }

        function renderFinaleFinalStage(task) {
            const coords = task.roots.join(',  ');

            const html = `
                <div class="disney-content finale-final-content">
                    <div class="disney-sparkle" style="top: -6px; left: 10px;">🎉</div>
                    <div class="disney-sparkle" style="top: 2px; right: 12px; animation-delay: 0.6s;">💖</div>
                    <div class="disney-sparkle" style="bottom: -4px; left: 50px; animation-delay: 1.1s;">🎉</div>
                    <div class="disney-sparkle" style="bottom: 2px; right: 60px; animation-delay: 0.4s;">💖</div>
                    <h3 class="finale-final-title">${task.finalTitle}</h3>
                    <p class="finale-final-subtitle">${task.finalSubtitle}</p>
                    <div class="finale-coords-card">
                        <div class="finale-coords-label">${task.finalCoordsLabel}</div>
                        <div class="finale-coords-value">${coords}</div>
                    </div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="closeModal()">Close ➔</button>`;
        }

        // ===================================================================
        // --- ДВИЖОК: ХИМИЧЕСКАЯ ЛАБОРАТОРИЯ (тип 'chemistry', локация 22) ---
        // Хаб-меню в стиле "уроков" Хогвартса: task.labTasks — список заданий,
        // каждое со своим key/done. Сейчас реализовано только labTask 'equations'
        // (расстановка коэффициентов, движок похож на 'zodiaclock' — уравнения
        // появляются по одному, решённые уходят в полосу "чипов" сверху).
        // Чтобы добавить НОВОЕ задание лаборатории:
        //   1. Добавь объект в tasksData[22].labTasks (свой key/name/subtitle/emoji/done).
        //   2. Впиши ветку for(labTask.key === 'твой_key') в renderChemLabTask() ниже,
        //      по образцу renderChemEquationsTask().
        // Локация считается пройденной, когда done === true у ВСЕХ labTasks —
        // тогда в хабе появляется кнопка "Continue the Journey".
        // ===================================================================
        let chemActiveTaskKey = null;   // ключ открытого сейчас labTask ('equations', ...) или null (хаб)
        let chemEqActiveId = null;      // id уравнения, которое сейчас активно (для сброса подсказки при смене)
        let chemStage = 'hub';          // 'hub' (обычный хаб/задания) или 'diploma' (финальный экран с дипломом)

        function startChemistryGame() {
            const task = tasksData[activeTaskStep];
            const saved = loadTaskProgress(activeTaskStep, 'chemistry');
            chemActiveTaskKey = null;
            if (saved) {
                chemStage = saved.chemStage || 'hub';
                if (saved.labTasksDone && saved.labTasksDone.length === task.labTasks.length) {
                    task.labTasks.forEach((lt, i) => {
                        lt.done = !!saved.labTasksDone[i];
                        const solvedArr = saved.labTasksItemsSolved && saved.labTasksItemsSolved[i];
                        if (solvedArr && lt.items) {
                            lt.items.forEach((item, j) => { item.solved = !!solvedArr[j]; });
                        }
                    });
                }
            } else {
                chemStage = 'hub';
            }
            renderChemistryModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // Диалоговое облачко Рика — единая "рамка" для описания текущего раздела/задания,
        // которая используется на хабе и внутри всех трёх заданий лаборатории.
        // bodyHTML — уже готовый HTML (обычно один или несколько <p>), noteHTML — необязательная
        // мелкая курсивная строка-подсказка НАД основным текстом (напр. общее вступление раздела).
        function chemRickBubble(bodyHTML, noteHTML) {
            return `
                <div class="chem-rick-banner">
                    <div class="chem-rick-bubble">
                        ${noteHTML ? `<div class="chem-rick-note">${noteHTML}</div>` : ''}
                        ${bodyHTML}
                    </div>
                    <div class="chem-rick-portrait"><img src="rick.png" alt="Rick"></div>
                </div>
            `;
        }

        function chemAllLabTasksDone(task) {
            return task.labTasks.every(t => t.done);
        }

        // Превращает молекулярную формулу вида "C8H11NO2" в HTML с подстрочными
        // индексами: буквы (и группы заглавная+строчная, напр. "Na") без изменений,
        // числа после них — в <sub>.
        function chemFormula(formula) {
            return formula.replace(/([A-Z][a-z]?)(\d+)?/g, (match, el, num) => {
                return num ? `${el}<sub>${num}</sub>` : el;
            });
        }

        function renderChemistryModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('errorMsg').style.display = 'none';

            if (chemStage === 'diploma') {
                renderChemDiploma(task);
            } else if (chemActiveTaskKey === null) {
                renderChemHub(task);
            } else {
                renderChemLabTask(task);
            }
        }

        // --- Экран-хаб: карточки заданий лаборатории ---
        function renderChemHub(task) {
            document.getElementById('modal-title').innerText = task.modalTitle;
            const doneCount = task.labTasks.filter(t => t.done).length;

            const cards = task.labTasks.map(t => `
                <div class="chem-task-card${t.done ? ' chem-task-done' : ''}" onclick="chemOpenTask('${t.key}')">
                    <div class="chem-task-icon">${t.emoji}</div>
                    <div class="chem-task-name">${t.name}</div>
                    <div class="chem-task-sub">${t.subtitle}</div>
                    <div class="chem-task-status">${t.done ? '✓ Completed' : 'Start'}</div>
                </div>
            `).join('');

            document.getElementById('modal-content').innerHTML = `
                <div class="chem-hub-scene">
                    <span class="chem-bg-icon" style="top:6%; left:5%; animation-delay:0s;">🧪</span>
                    <span class="chem-bg-icon" style="top:12%; right:6%; animation-delay:0.6s;">⚛️</span>
                    <span class="chem-bg-icon" style="bottom:14%; left:8%; animation-delay:1.1s;">🧬</span>
                    <span class="chem-bg-icon" style="bottom:8%; right:9%; animation-delay:1.7s;">🔬</span>
                    <span class="chem-bg-icon" style="top:45%; left:2%; animation-delay:2.2s;">📐</span>
                    <span class="chem-bg-icon" style="top:38%; right:3%; animation-delay:2.8s;">🧫</span>
                    ${chemRickBubble(`<p>${task.intro}</p>`)}
                    <p class="chem-hub-progress">${doneCount} of ${task.labTasks.length} experiments completed</p>
                    <div class="chem-task-grid">${cards}</div>
                </div>
            `;

            document.getElementById('modal-action').innerHTML = chemAllLabTasksDone(task)
                ? `<button class="action-btn" onclick="chemGoToDiploma()">🎓 Claim Your Diploma ➔</button>`
                : `<button class="action-btn locked-status">🔒 Complete every experiment to proceed</button>`;
        }

        function chemOpenTask(key) {
            chemActiveTaskKey = key;
            chemEqActiveId = null;
            renderChemistryModal();
        }

        function chemBackToHub() {
            chemActiveTaskKey = null;
            renderChemistryModal();
        }

        // --- Роутинг по заданиям лаборатории (сейчас только 'equations') ---
        function renderChemLabTask(task) {
            const labTask = task.labTasks.find(t => t.key === chemActiveTaskKey);
            if (labTask.key === 'equations') {
                renderChemEquationsTask(task, labTask);
            } else if (labTask.key === 'periodic') {
                renderChemPeriodicTask(task, labTask);
            } else if (labTask.key === 'rebus') {
                renderChemRebusTask(task, labTask);
            }
        }

        // --- Задание "Balance the Equations" ---
        function chemCurrentEquation(labTask) {
            return labTask.items.find(eq => !eq.solved) || null;
        }

        function renderChemEquationsTask(task, labTask) {
            document.getElementById('modal-title').innerText = labTask.name;

            const solved = labTask.items.filter(eq => eq.solved);
            const current = chemCurrentEquation(labTask);

            let html = `<button class="chem-back-btn" onclick="chemBackToHub()">← Back to the lab</button>`;

            if (current) {
                if (chemEqActiveId !== current.id) chemEqActiveId = current.id;

                const note = solved.length === 0
                    ? 'Balance each reaction below by finding the missing coefficients — one equation at a time.'
                    : '';
                html += chemRickBubble(`<p>${current.description}</p>`, note);
            }

            html += `<div class="chem-progress">Reactions balanced: <b>${solved.length}</b> / ${labTask.items.length}</div>`;

            if (solved.length > 0) {
                html += `<div class="chem-solved-row">`;
                solved.forEach((eq, i) => {
                    html += `<div class="chem-solved-chip">🧪 Eq. ${i + 1}</div>`;
                });
                html += `</div>`;
            }

            if (current) {
                html += `
                    <div class="chem-eq-card" id="chemEqCard">
                        <div class="chem-eq-title">${current.title}</div>
                        ${current.subtitle ? `<div class="chem-eq-subtitle">${current.subtitle}</div>` : ''}

                        <div class="chem-equation-row">
                            <input type="number" min="1" class="chem-coef-input" id="chem-coef-${current.id}-0" placeholder="?">
                            <span class="chem-formula">${chemFormula(current.parts[0])}</span>
                            <span class="chem-plus">+</span>
                            <input type="number" min="1" class="chem-coef-input" id="chem-coef-${current.id}-1" placeholder="?">
                            <span class="chem-formula">${chemFormula(current.parts[1])}</span>
                            <span class="chem-arrow">⟶</span>
                            <input type="number" min="1" class="chem-coef-input" id="chem-coef-${current.id}-2" placeholder="?">
                            <span class="chem-formula">${chemFormula(current.parts[2])}</span>
                        </div>

                        <div class="chem-eq-footnote">${current.footnote}</div>

                        <button class="chem-hint-toggle" onclick="chemToggleHint(${current.id})">💡 Show hint</button>
                        <div class="chem-hint-text" id="chem-hint-${current.id}" style="display:none;">${current.hint}</div>

                        <button class="chem-check-btn" onclick="chemCheckEquation(${current.id})">Verify</button>
                        <div class="chem-eq-status" id="chem-eq-status-${current.id}"></div>
                    </div>
                `;
            } else {
                html += `<div class="chem-complete-msg">⚗️ All reactions are perfectly balanced. ⚗️</div>`;
            }

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            const allSolved = labTask.items.every(eq => eq.solved);
            document.getElementById('modal-action').innerHTML = allSolved
                ? `<button class="action-btn" onclick="chemFinishEquationsTask()">Return to the Lab ➔</button>`
                : `<button class="action-btn locked-status">🔒 Balance all ${labTask.items.length} reactions to proceed</button>`;

            const activeCard = document.getElementById('chemEqCard');
            if (activeCard) {
                setTimeout(() => activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
            }
        }

        function chemToggleHint(id) {
            const hintEl = document.getElementById(`chem-hint-${id}`);
            if (!hintEl) return;
            hintEl.style.display = hintEl.style.display === 'none' ? 'block' : 'none';
        }

        function chemCheckEquation(id) {
            const task = tasksData[activeTaskStep];
            const labTask = task.labTasks.find(t => t.key === 'equations');
            const eq = labTask.items.find(e => e.id === id);
            const statusEl = document.getElementById(`chem-eq-status-${id}`);

            const vals = [0, 1, 2].map(i => parseInt(document.getElementById(`chem-coef-${id}-${i}`).value, 10));

            if (vals.some(v => isNaN(v) || v < 1)) {
                statusEl.className = "chem-eq-status error";
                statusEl.innerText = "❌ Fill in all three coefficients first!";
                return;
            }

            const isCorrect = vals[0] === eq.answer[0] && vals[1] === eq.answer[1] && vals[2] === eq.answer[2];

            if (isCorrect) {
                eq.solved = true;
                statusEl.className = "chem-eq-status success";
                statusEl.innerText = "✅ Balanced!";
                setTimeout(() => renderChemEquationsTask(task, labTask), 700);
            } else {
                statusEl.className = "chem-eq-status error";
                statusEl.innerText = "❌ Not balanced yet, try again!";
                const card = document.getElementById('chemEqCard');
                if (card) {
                    card.classList.remove('chem-shake');
                    void card.offsetWidth;
                    card.classList.add('chem-shake');
                }
            }
        }

        function chemFinishEquationsTask() {
            const task = tasksData[activeTaskStep];
            const labTask = task.labTasks.find(t => t.key === 'equations');
            labTask.done = true;
            chemActiveTaskKey = null;
            renderChemistryModal();
        }

        function completeChemistryStage() {
            advanceStep(activeTaskStep);
        }

        // --- Финальный экран: "Smart Chemist" диплом от Рика ---
        // Открывается кнопкой "🎓 Claim Your Diploma" на хабе, когда все 3 labTasks
        // решены. Структура/паттерн печати в PDF полностью повторяет hpDiplomaHTML
        // (см. #hpDiplomaCard) — window.print() + правило @media print для
        // #chemDiplomaCard в styles.css, так что итоговый файл выходит чистым,
        // без фона игры и рамки модалки.
        function chemGoToDiploma() {
            chemStage = 'diploma';
            renderChemistryModal();
        }

        function renderChemDiploma(task) {
            document.getElementById('modalWindow').classList.add('chem-modal-diploma');
            document.getElementById('modal-title').innerText = 'Diploma of a Brilliant Chemist';
            document.getElementById('modal-content').innerHTML = `
                ${chemRickBubble('<p>*burp* Not bad, Lizzy. Not bad at all. Every equation balanced, every element found, every riddle cracked \u2014 turns out you\u2019ve got the mind of a real chemist. Made you something to prove it.</p>')}
                ${chemDiplomaHTML()}
            `;
            document.getElementById('modal-action').innerHTML = `
                <button class="action-btn secondary-btn" onclick="window.print()">⬇️ Save as PDF</button>
                <button class="action-btn" onclick="completeChemistryStage()">Continue the Journey ➔</button>
            `;
        }

        function chemDiplomaHTML() {
            const today = new Date();
            const dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
            return `
                <div class="hp-diploma-wrap">
                    <div class="hp-diploma-card" id="chemDiplomaCard">
                        ${chemDiplomaBorderSVG()}
                        <div class="hp-diploma-inner">
                            <div class="hp-diploma-crest">✨ 🧪 ✨</div>
                            <div class="hp-diploma-school">Guadalupe Valley Laboratory</div>
                            <div class="hp-diploma-title">Diploma of a Brilliant Chemist</div>
                            <div class="hp-diploma-divider">✦ ✦ ✦</div>
                            <p class="hp-diploma-body">
                                This is to certify that
                            </p>
                            <div class="hp-diploma-name">Lizzet Cruz</div>
                            <p class="hp-diploma-body">
                                has balanced every equation, decoded every element on the periodic table, and solved
                                every chemical rebus set before her in the old chemist's lab of Guadalupe Valley, and is
                                hereby named a <b>Master Chemist</b>, first class, with full honors in the Chemistry of Us.
                            </p>
                            <p class="hp-diploma-personal">
                                Turns out love holds up pretty well under the microscope: dopamine for the spark,
                                oxytocin for the staying, carbon for the strength that never breaks. No formula on that
                                table ever needed proving, though \u2014 I've known since the first equation that whatever
                                we've got, it reacts in exactly the right way. Here's to every experiment still ahead of us.
                            </p>
                            <div class="hp-diploma-signatures">
                                <div class="hp-diploma-sig">
                                    <div class="hp-diploma-sig-line">Rick Sanchez</div>
                                    <div class="hp-diploma-sig-role">Chief Scientist</div>
                                </div>
                                <div class="hp-diploma-sig">
                                    <div class="hp-diploma-sig-line hp-diploma-sig-cursive">With all my heart</div>
                                    <div class="hp-diploma-sig-role">Your own mad scientist</div>
                                </div>
                            </div>
                            <div class="hp-diploma-date">${dateStr}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Декоративная рамка диплома химика — та же схема, что и у hpDiplomaBorderSVG
        // (тонкая прямоугольная гирлянда + 4 звезды по углам), но вместо волшебной
        // палочки/книги/зелья/совы — колба, атом, спираль ДНК и молекула по углам.
        function chemDiplomaBorderSVG() {
            return `
                <svg class="hp-diploma-border" viewBox="0 0 600 760" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="14" width="572" height="732" fill="none" stroke="#8a5a30" stroke-width="3"/>
                    <rect x="22" y="22" width="556" height="716" fill="none" stroke="#c68a48" stroke-width="1.2"/>
                    <g fill="#c68a48">
                        <path d="M40 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(0,0) scale(0.9)"/>
                        <path d="M560 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(520,0) scale(0.9)"/>
                        <path d="M40 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(0,690) scale(0.9)"/>
                        <path d="M560 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(520,690) scale(0.9)"/>
                    </g>
                    <!-- колба, левый верх -->
                    <g transform="translate(40, 46)" fill="none" stroke="#8a5a30" stroke-width="2.6" stroke-linejoin="round">
                        <path d="M18 0 h10 v14 l12 22 a12 12 0 0 1 -11 18 h-12 a12 12 0 0 1 -11 -18 l12 -22 z"/>
                        <path d="M9 42 a12 12 0 0 0 8 10 h12 a12 12 0 0 0 8 -10 z" fill="#c68a48" opacity="0.55" stroke="none"/>
                        <line x1="14" y1="0" x2="32" y2="0" stroke-width="3"/>
                    </g>
                    <!-- атом, правый верх -->
                    <g transform="translate(534, 62)" fill="none" stroke="#a5730c" stroke-width="2">
                        <ellipse cx="14" cy="14" rx="16" ry="6"/>
                        <ellipse cx="14" cy="14" rx="16" ry="6" transform="rotate(60 14 14)"/>
                        <ellipse cx="14" cy="14" rx="16" ry="6" transform="rotate(120 14 14)"/>
                        <circle cx="14" cy="14" r="3.2" fill="#a5730c" stroke="none"/>
                    </g>
                    <!-- спираль ДНК, левый низ -->
                    <g transform="translate(34, 678)" fill="none" stroke="#8a5a30" stroke-width="2.2" stroke-linecap="round">
                        <path d="M0 0 C10 8 10 16 0 24 C-10 32 -10 40 0 48"/>
                        <path d="M20 0 C10 8 10 16 20 24 C30 32 30 40 20 48"/>
                        <line x1="1" y1="6" x2="19" y2="6"/>
                        <line x1="-2" y1="18" x2="22" y2="18"/>
                        <line x1="1" y1="30" x2="19" y2="30"/>
                        <line x1="-2" y1="42" x2="22" y2="42"/>
                    </g>
                    <!-- молекула, правый низ -->
                    <g transform="translate(538, 686)" fill="#c68a48" stroke="#8a5a30" stroke-width="1.6">
                        <line x1="8" y1="8" x2="22" y2="6" stroke="#8a5a30"/>
                        <line x1="8" y1="8" x2="10" y2="24" stroke="#8a5a30"/>
                        <line x1="10" y1="24" x2="24" y2="26" stroke="#8a5a30"/>
                        <circle cx="8" cy="8" r="5"/>
                        <circle cx="22" cy="6" r="4"/>
                        <circle cx="10" cy="24" r="4"/>
                        <circle cx="24" cy="26" r="4"/>
                    </g>
                </svg>
            `;
        }

        // --- Задание "The Periodic Table" (labTask.key === 'periodic') ---
        // 3 фазы (identify / formula / equation) по 5 заданий. Каждое задание —
        // это объект { need: [...symbols], found: [...], solved }. Игрок кликает
        // по клеткам таблицы; верный символ уходит в found, неверный — просто
        // "встряхивает" клетку. Когда found покрывает need — item.solved = true
        // и через паузу открывается следующее задание/фаза.

        // Строит подстрочную HTML-формулу из списка символов и (опционально)
        // индексов той же длины, напр. (['C','H','O'], [12,22,11]) -> "C₁₂H₂₂O₁₁".
        function chemPeriodicFormula(symbols, subs) {
            return symbols.map((s, i) => {
                const sub = subs && subs[i] != null ? `<sub>${subs[i]}</sub>` : '';
                return `${s}${sub}`;
            }).join('');
        }

        // Первая незавершённая фаза + первое незавершённое задание внутри неё.
        // Возвращает null, если вся лабораторная работа с таблицей решена.
        function chemPeriodicCurrent(labTask) {
            for (let p = 0; p < labTask.phases.length; p++) {
                const phase = labTask.phases[p];
                const item = phase.items.find(it => !it.solved);
                if (item) return { phase, item, phaseIdx: p };
            }
            return null;
        }

        function chemPeriodicCellClass(cat) {
            return `chem-pt-cell cat-${cat}`;
        }

        // Рисует саму таблицу Менделеева (основная сетка r1-7 + отдельная
        // сетка-сноска для лантаноидов/актиноидов r8-9), подсвечивая клетки,
        // уже найденные в текущем задании.
        function chemPeriodicTableHTML(item) {
            const main = PERIODIC_ELEMENTS.filter(e => e.r <= 7);
            const foot = PERIODIC_ELEMENTS.filter(e => e.r >= 8);

            const cell = (e) => {
                const found = item.found.includes(e.s);
                return `<div class="${chemPeriodicCellClass(e.cat)}${found ? ' chem-pt-found' : ''}"
                    style="grid-row:${e.r};grid-column:${e.c};"
                    id="chem-pt-${e.s}"
                    title="${e.name}"
                    onclick="chemPeriodicElementClick('${e.s}')">
                    <span class="chem-pt-num">${e.n}</span>
                    <span class="chem-pt-sym">${e.s}</span>
                </div>`;
            };

            const mainHTML = main.map(cell).join('');
            const footHTML = foot.map(e => {
                const found = item.found.includes(e.s);
                return `<div class="${chemPeriodicCellClass(e.cat)}${found ? ' chem-pt-found' : ''}"
                    style="grid-row:${e.r - 7};grid-column:${e.c};"
                    id="chem-pt-${e.s}"
                    title="${e.name}"
                    onclick="chemPeriodicElementClick('${e.s}')">
                    <span class="chem-pt-num">${e.n}</span>
                    <span class="chem-pt-sym">${e.s}</span>
                </div>`;
            }).join('');

            return `
                <div class="chem-ptable-scroll">
                    <div class="chem-ptable-grid">${mainHTML}</div>
                    <div class="chem-ptable-footnote">${footHTML}</div>
                </div>
            `;
        }

        // Панель "твой набор" под таблицей: пока задание не решено — просто
        // отдельные найденные символы; как только все найдены — они сразу же
        // складываются в готовую формулу/уравнение с итоговым названием.
        // Живая подстрочная формула для фазы 'formula' пока задание не решено:
        // рисует ВСЕ нужные слоты в правильном порядке (need), а не в порядке
        // кликов — найденные символы подсвечиваются, остальные ждут своей
        // очереди пустым слотом с подчёркиванием.
        function chemPeriodicFormulaLiveHTML(item) {
            const slots = item.need.map((s, i) => {
                const filled = item.found.includes(s);
                if (!filled) {
                    return `<span class="chem-pt-formula-slot empty">_</span>`;
                }
                const sub = item.subs && item.subs[i] != null ? `<sub>${item.subs[i]}</sub>` : '';
                return `<span class="chem-pt-formula-slot filled">${s}${sub}</span>`;
            }).join('');
            return `<div class="chem-pt-formula-live">${slots}</div>`;
        }

        // Живое уравнение для фазы 'equation' пока задание не решено: показывает
        // "_ + _ ⟶ <смысл-подсказка>" — реагенты открываются по мере находки,
        // а итоговая формула продукта остаётся загадкой до полного решения
        // (вместо неё виден только романтический смысл реакции, item.meaning).
        function chemPeriodicEquationLiveHTML(item) {
            const reactants = item.need.map(s => {
                const filled = item.found.includes(s);
                return filled
                    ? `<span class="chem-pt-formula-slot filled">${s}</span>`
                    : `<span class="chem-pt-formula-slot empty">_</span>`;
            }).join(' <span class="chem-pt-plus">+</span> ');
            return `<div class="chem-pt-formula-live">${reactants} <span class="chem-pt-arrow">⟶</span> <span class="chem-pt-eq-target">${item.meaning}</span></div>`;
        }

        function chemPeriodicResultHTML(phase, item) {
            if (!item.solved) {
                if (phase.key === 'formula') {
                    return chemPeriodicFormulaLiveHTML(item);
                }
                if (phase.key === 'equation') {
                    return chemPeriodicEquationLiveHTML(item);
                }
                if (item.found.length === 0) {
                    return `<div class="chem-pt-hint-empty">Tap the elements described above — they'll appear here.</div>`;
                }
                const chips = item.found.map(s => `<span class="chem-pt-chip">${s}</span>`).join('');
                return `<div class="chem-pt-found-row">${chips}</div>`;
            }

            if (phase.key === 'identify') {
                const chips = item.need.map(s => `<span class="chem-pt-chip chem-pt-chip-done">${s}</span>`).join('');
                return `
                    <div class="chem-pt-found-row">${chips}</div>
                    <div class="chem-pt-reveal">
                        <div class="chem-pt-reveal-name">${item.resultName}</div>
                        <div class="chem-pt-reveal-label">✨ ${item.resultLabel}</div>
                    </div>
                `;
            }

            if (phase.key === 'formula') {
                const formula = chemPeriodicFormula(item.need, item.subs);
                return `
                    <div class="chem-pt-formula-final">${formula}</div>
                    <div class="chem-pt-reveal">
                        <div class="chem-pt-reveal-name">${item.compoundName}</div>
                        <div class="chem-pt-reveal-label">✨ ${item.resultLabel}</div>
                    </div>
                `;
            }

            // phase.key === 'equation'
            const reactants = item.need.map(s => `<span class="chem-pt-chip chem-pt-chip-done">${s}</span>`).join(' <span class="chem-pt-plus">+</span> ');
            return `
                <div class="chem-pt-eq-final">${reactants} <span class="chem-pt-arrow">⟶</span> <span class="chem-pt-product">${chemFormula(item.product)}</span></div>
                <div class="chem-pt-reveal">
                    <div class="chem-pt-reveal-label">✨ ${item.meaning}</div>
                </div>
            `;
        }


        // forcedCurrent (необязательный { phase, item }) позволяет отрисовать
        // КОНКРЕТНОЕ задание, а не то, что вернёт chemPeriodicCurrent — нужно
        // сразу после решения последнего элемента задания, чтобы игрок успел
        // увидеть панель-открытие (reveal), прежде чем экран переключится на
        // следующее задание/фазу (см. chemPeriodicElementClick).
        // justSolved (необязательный флаг) — true в тот самый момент, когда forcedCurrent
        // передаёт ТОЛЬКО ЧТО решённое задание: тогда вместо "🔒 заблокировано" в
        // modal-action показывается кнопка "Далее", чтобы игрок сам решал, когда
        // переходить дальше, вместо автоматического таймера.
        function renderChemPeriodicTask(task, labTask, forcedCurrent, justSolved) {
            document.getElementById('modal-title').innerText = labTask.name;

            const totalItems = labTask.phases.reduce((sum, p) => sum + p.items.length, 0);
            const solvedItems = labTask.phases.reduce((sum, p) => sum + p.items.filter(it => it.solved).length, 0);
            const current = forcedCurrent || chemPeriodicCurrent(labTask);

            let html = `<button class="chem-back-btn" onclick="chemBackToHub()">← Back to the lab</button>`;

            if (current) {
                const { phase, item } = current;
                html += `<div class="chem-pt-phase-title">${phase.title}</div>`;
                html += chemRickBubble(`<p>${item.description}</p>`, phase.instructions);
            }

            html += `<div class="chem-progress">Elements decoded: <b>${solvedItems}</b> / ${totalItems}</div>`;

            if (current) {
                const { phase, item } = current;
                html += `
                    <div class="chem-pt-card" id="chemPtCard">
                        <div class="chem-eq-title">${item.title}</div>
                        ${item.subtitle ? `<div class="chem-eq-subtitle">${item.subtitle}</div>` : ''}
                    </div>
                `;

                html += chemPeriodicTableHTML(item);

                html += `<div class="chem-pt-result-panel" id="chemPtResult">${chemPeriodicResultHTML(phase, item)}</div>`;
            } else {
                html += `<div class="chem-complete-msg">🔬 Every element has found its place. 🔬</div>`;
            }

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            if (!current) {
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="chemFinishPeriodicTask()">Return to the Lab ➔</button>`;
            } else if (justSolved) {
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="chemPeriodicAdvance()">Continue ➔</button>`;
            } else {
                document.getElementById('modal-action').innerHTML = `<button class="action-btn locked-status">🔒 Decode all ${totalItems} elements to proceed</button>`;
            }
        }

        // Вызывается кнопкой "Continue ➔", которая появляется вместо старого
        // автоматического таймера сразу после того, как задание решено — игрок сам
        // решает, когда уходить с романтического объяснения на следующий элемент.
        function chemPeriodicAdvance() {
            const task = tasksData[activeTaskStep];
            const labTask = task.labTasks.find(t => t.key === 'periodic');
            renderChemPeriodicTask(task, labTask);
        }

        function chemPeriodicElementClick(symbol) {
            const task = tasksData[activeTaskStep];
            const labTask = task.labTasks.find(t => t.key === 'periodic');
            const current = chemPeriodicCurrent(labTask);
            if (!current) return;
            const { item } = current;

            if (item.found.includes(symbol)) return;

            if (item.need.includes(symbol)) {
                item.found.push(symbol);
                if (item.found.length === item.need.length) {
                    item.solved = true;
                    // Показываем reveal-панель ЭТОГО решённого задания и кнопку
                    // "Continue" вместо немедленного автоперехода — иначе
                    // chemPeriodicCurrent() тут же вернёт уже СЛЕДУЮЩЕЕ задание
                    // и игрок не успеет прочитать романтическое объяснение.
                    renderChemPeriodicTask(task, labTask, { phase: current.phase, item }, true);
                } else {
                    renderChemPeriodicTask(task, labTask);
                }
            } else {
                const cellEl = document.getElementById(`chem-pt-${symbol}`);
                if (cellEl) {
                    cellEl.classList.remove('chem-pt-wrong');
                    void cellEl.offsetWidth;
                    cellEl.classList.add('chem-pt-wrong');
                }
            }
        }

        function chemFinishPeriodicTask() {
            const task = tasksData[activeTaskStep];
            const labTask = task.labTasks.find(t => t.key === 'periodic');
            labTask.done = true;
            chemActiveTaskKey = null;
            renderChemistryModal();
        }

        // --- Задание "Chemical Rebus" (labTask.key === 'rebus') ---
        // Простые самодельные SVG-иконки (без внешних картинок) в тёплой
        // пергаментной палитре, чтобы визуально перекликаться с таблицей
        // Менделеева этой же локации. viewBox 0 0 100 100 у каждой — так их
        // можно свободно масштабировать через .chem-rebus-icon-box.
        const REBUS_ICONS = {
            water: `<svg viewBox="0 0 100 100"><path d="M30 18 H70 L62 78 Q50 88 38 78 Z" fill="#eaf6fb" stroke="#3a6a7a" stroke-width="3" stroke-linejoin="round"/><path d="M35 55 Q50 62 65 55 L61 78 Q50 87 39 78 Z" fill="#8fd0e6"/><circle cx="47" cy="40" r="3" fill="#bfe7f4"/><circle cx="55" cy="47" r="2" fill="#bfe7f4"/></svg>`,
            balloon: `<svg viewBox="0 0 100 100"><path d="M50 12 C30 12 22 30 26 46 C29 60 40 68 46 70 L44 76 L56 76 L54 70 C60 68 71 60 74 46 C78 30 70 12 50 12 Z" fill="#f6c8d8" stroke="#8a3a55" stroke-width="3"/><path d="M46 76 Q50 80 54 76 L53 84 Q50 88 47 84 Z" fill="#8a3a55"/><path d="M50 88 Q56 92 50 96" fill="none" stroke="#8a3a55" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="41" cy="32" rx="6" ry="10" fill="#ffffff" opacity="0.55"/></svg>`,
            wave: `<svg viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" rx="10" fill="#dff2f7"/><path d="M8 50 Q22 38 36 50 T64 50 T92 50 V80 Q78 92 64 80 T36 80 T8 80 Z" fill="#4fa3c4"/><path d="M8 62 Q22 52 36 62 T64 62 T92 62" fill="none" stroke="#2c7391" stroke-width="3" stroke-linecap="round"/><circle cx="66" cy="26" r="10" fill="#ffd873"/></svg>`,
            film: `<svg viewBox="0 0 100 100"><rect x="14" y="24" width="72" height="52" rx="6" fill="#3a3a42" stroke="#1c1c22" stroke-width="3"/><circle cx="30" cy="34" r="4" fill="#e8e8ec"/><circle cx="30" cy="66" r="4" fill="#e8e8ec"/><circle cx="70" cy="34" r="4" fill="#e8e8ec"/><circle cx="70" cy="66" r="4" fill="#e8e8ec"/><circle cx="42" cy="50" r="13" fill="#cfe8f2" stroke="#1c1c22" stroke-width="3"/><path d="M55 42 L74 50 L55 58 Z" fill="#e8e8ec"/></svg>`,
            soldier: `<svg viewBox="0 0 100 100"><rect x="40" y="12" width="20" height="18" rx="6" fill="#e7c9a3" stroke="#5c3a18" stroke-width="2.5"/><rect x="32" y="30" width="36" height="34" rx="5" fill="#c73b3b" stroke="#5c3a18" stroke-width="2.5"/><rect x="24" y="32" width="10" height="26" rx="4" fill="#c73b3b" stroke="#5c3a18" stroke-width="2.5"/><rect x="66" y="32" width="10" height="26" rx="4" fill="#c73b3b" stroke="#5c3a18" stroke-width="2.5"/><rect x="36" y="64" width="12" height="24" rx="3" fill="#2c3e6b" stroke="#5c3a18" stroke-width="2.5"/><rect x="52" y="64" width="12" height="24" rx="3" fill="#2c3e6b" stroke="#5c3a18" stroke-width="2.5"/><rect x="30" y="86" width="40" height="6" rx="3" fill="#5c3a18"/></svg>`,
            coin: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="38" fill="#d38a5f" stroke="#7a4420" stroke-width="4"/><circle cx="50" cy="50" r="27" fill="none" stroke="#7a4420" stroke-width="2.5" stroke-dasharray="3 4"/><path d="M50 33 A17 17 0 1 0 50 67" fill="none" stroke="#7a4420" stroke-width="5" stroke-linecap="round"/></svg>`,
            clouds: `<svg viewBox="0 0 100 100"><rect x="6" y="6" width="88" height="88" rx="10" fill="#dcecf7"/><path d="M22 62 Q14 62 14 53 Q14 45 22 45 Q23 34 35 34 Q46 34 48 45 Q60 43 62 55 Q72 55 72 64 Q72 72 62 72 H24 Q22 72 22 62 Z" fill="#ffffff" stroke="#8fb4cf" stroke-width="2.5"/><path d="M38 60 Q30 60 30 52 Q30 45 38 45 Q39 36 49 36 Q59 36 61 46 Q71 46 72 55 Q80 56 80 64 Q80 71 71 71 H40 Q38 71 38 60 Z" fill="#ffffff" stroke="#8fb4cf" stroke-width="2.5" opacity="0.9"/></svg>`,
            spark: `<svg viewBox="0 0 100 100"><rect x="6" y="6" width="88" height="88" rx="10" fill="#fdf1d6"/><path d="M56 10 L30 56 H48 L42 92 L72 42 H54 Z" fill="#ffcf3f" stroke="#a8760f" stroke-width="3" stroke-linejoin="round"/></svg>`,
            shell: `<svg viewBox="0 0 100 100"><path d="M50 14 C74 14 88 34 84 56 C80 78 60 88 44 84 C30 80 22 68 24 56 C18 58 12 54 12 46 C12 38 20 34 26 38 C28 26 38 14 50 14 Z" fill="#f3d9c0" stroke="#8a5a30" stroke-width="3"/><path d="M50 22 C50 40 44 58 30 66" fill="none" stroke="#b5825a" stroke-width="2.5"/><path d="M52 22 C58 38 62 54 56 74" fill="none" stroke="#b5825a" stroke-width="2.5"/><circle cx="46" cy="54" r="7" fill="#fef6ef" stroke="#c9a26a" stroke-width="2"/></svg>`,
            bubbles: `<svg viewBox="0 0 100 100"><path d="M32 16 H68 L60 82 Q50 90 40 82 Z" fill="#eafaf1" stroke="#2c7a55" stroke-width="3" stroke-linejoin="round"/><path d="M37 50 Q50 56 63 50 L58 82 Q50 88 42 82 Z" fill="#a7e6c2"/><circle cx="46" cy="66" r="3" fill="#ffffff"/><circle cx="55" cy="72" r="2.5" fill="#ffffff"/><circle cx="49" cy="38" r="2.5" fill="#2c7a55"/><circle cx="56" cy="30" r="2" fill="#2c7a55"/><circle cx="44" cy="26" r="1.8" fill="#2c7a55"/></svg>`
        };

        function chemRebusPieceHTML(piece) {
            if (piece.icon) {
                return `<div class="chem-rebus-icon-box">${REBUS_ICONS[piece.icon] || ''}</div>`;
            }
            if (piece.op === 'minus') {
                return `<div class="chem-rebus-op-wrap"><span class="chem-rebus-op">\u2212</span><span class="chem-rebus-letter">${piece.label}</span></div>`;
            }
            // op === 'plus'
            return `<span class="chem-rebus-op">+</span>`;
        }

        function chemCurrentRebus(labTask) {
            return labTask.items.find(it => !it.solved) || null;
        }

        function renderChemRebusTask(task, labTask) {
            document.getElementById('modal-title').innerText = labTask.name;

            const solved = labTask.items.filter(it => it.solved);
            const current = chemCurrentRebus(labTask);

            let html = `<button class="chem-back-btn" onclick="chemBackToHub()">\u2190 Back to the lab</button>`;

            if (current) {
                if (chemEqActiveId !== current.id) chemEqActiveId = current.id;

                const note = solved.length === 0
                    ? "Solve the picture riddle below \u2014 remove a letter, add an element, and see what's left."
                    : '';
                html += chemRickBubble(`<p>${current.flavor}</p>`, note);
            }

            html += `<div class="chem-progress">Rebuses solved: <b>${solved.length}</b> / ${labTask.items.length}</div>`;

            if (solved.length > 0) {
                html += `<div class="chem-solved-row">`;
                solved.forEach((it, i) => { html += `<div class="chem-solved-chip">\ud83e\udde9 Rebus ${i + 1}</div>`; });
                html += `</div>`;
            }

            if (current) {
                const piecesHTML = current.pieces.map(chemRebusPieceHTML).join('');
                const inputsHTML = current.elements.map((el, idx) =>
                    `<input type="text" class="chem-rebus-input-single" id="chem-rebus-input-${current.id}-${idx}" maxlength="2" placeholder="?" autocomplete="off">`
                ).join('');

                html += `
                    <div class="chem-eq-card chem-rebus-card" id="chemEqCard">
                        <div class="chem-eq-title">${current.title}</div>

                        <div class="chem-rebus-row">${piecesHTML}</div>

                        <button class="chem-hint-toggle" onclick="chemToggleHint(${current.id})">\ud83d\udca1 Show hint</button>
                        <div class="chem-hint-text" id="chem-hint-${current.id}" style="display:none;">${current.hint}</div>

                        <div class="chem-rebus-inputs-row">${inputsHTML}</div>
                        <button class="chem-check-btn" onclick="chemCheckRebus(${current.id})">Verify</button>
                        <div class="chem-eq-status" id="chem-eq-status-${current.id}"></div>
                    </div>
                `;
            } else {
                html += `<div class="chem-complete-msg">\ud83e\udde9 Every rebus is solved. \ud83e\udde9</div>`;
            }

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            const allSolved = labTask.items.every(it => it.solved);
            document.getElementById('modal-action').innerHTML = allSolved
                ? `<button class="action-btn" onclick="chemFinishRebusTask()">Return to the Lab \u27a4</button>`
                : `<button class="action-btn locked-status">\ud83d\udd12 Solve all ${labTask.items.length} rebuses to proceed</button>`;

            const activeCard = document.getElementById('chemEqCard');
            if (activeCard) {
                setTimeout(() => activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
            }

            if (current) {
                current.elements.forEach((el, idx) => {
                    const inputEl = document.getElementById(`chem-rebus-input-${current.id}-${idx}`);
                    if (!inputEl) return;
                    inputEl.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') chemCheckRebus(current.id);
                    });
                });
            }
        }

        function chemNormalizeRebusAnswer(str) {
            return String(str).toLowerCase().replace(/\s+/g, '');
        }

        function chemCheckRebus(id) {
            const task = tasksData[activeTaskStep];
            const labTask = task.labTasks.find(t => t.key === 'rebus');
            const item = labTask.items.find(it => it.id === id);
            const statusEl = document.getElementById(`chem-eq-status-${id}`);

            const vals = item.elements.map((el, idx) => {
                const inputEl = document.getElementById(`chem-rebus-input-${id}-${idx}`);
                return chemNormalizeRebusAnswer(inputEl ? inputEl.value : '');
            });

            if (vals.some(v => !v)) {
                statusEl.className = "chem-eq-status error";
                statusEl.innerText = "\u274c Fill in every element field first!";
                return;
            }

            const isCorrect = item.elements.every((el, idx) => chemNormalizeRebusAnswer(el) === vals[idx]);

            if (isCorrect) {
                item.solved = true;
                statusEl.className = "chem-eq-status success";
                statusEl.innerText = `\u2705 ${item.resultName} \u2014 ${item.resultLabel}`;
                setTimeout(() => renderChemRebusTask(task, labTask), 1400);
            } else {
                statusEl.className = "chem-eq-status error";
                statusEl.innerText = "\u274c Not quite \u2014 try again!";
                const card = document.getElementById('chemEqCard');
                if (card) {
                    card.classList.remove('chem-shake');
                    void card.offsetWidth;
                    card.classList.add('chem-shake');
                }
            }
        }

        function chemFinishRebusTask() {
            const task = tasksData[activeTaskStep];
            const labTask = task.labTasks.find(t => t.key === 'rebus');
            labTask.done = true;
            chemActiveTaskKey = null;
            renderChemistryModal();
        }

        // --- ДВИЖОК: РИСУНОК (тип 'drawing') ---
        // Одно поле пароля в особом "дисней" оформлении (.theme-disney в styles.css).
        // Сам рисунок отправляется вне сайта (например в мессенджер) — здесь только выдача пароля.
        // Три стадии (drawStage): 'dialogue' — вступительные реплики персонажа (task.dialogue),
        // 'task' — само поле пароля, 'outro' — прощальные реплики (task.outroDialogue) перед
        // advanceStep. Если у задания нет task.dialogue/outroDialogue — соответствующая стадия
        // просто пропускается (полностью аналогично движкам 'ciphers'/'passwords') — поэтому
        // локация 6 (без dialogue) продолжает работать как раньше.
        let drawStage = 'dialogue';
        let drawDialogueLineIndex = 0;

        function startDrawingGame() {
            const task = tasksData[activeTaskStep];
            task.solved = false;
            drawDialogueLineIndex = 0;
            drawStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'task';
            renderDrawingModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / само задание / диалог-прощание ---
        function renderDrawingModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (drawStage === 'dialogue') {
                renderDrawIntroStage(task);
            } else if (drawStage === 'outro') {
                renderDrawOutroStage(task);
            } else {
                renderDrawingTaskStage(task);
            }
        }

        // --- Стадия 'dialogue': вступительные реплики (переиспользует .duel-scene/.duel-char/
        // .duel-speech-bubble движков duel/whale/mahjong/ciphers/passwords). Поддерживает как
        // одного персонажа (task.charImg/charName/charClass — Эльза, Рапунцель, Sia), так и
        // сцену с несколькими персонажами, появляющимися по очереди (task.characters — карта
        // персонажей + у каждой реплики task.dialogue[i].speaker и .onStage, см. локацию 9). ---
        function drawSceneHtml(task, line, onNext) {
            let charsHtml, bubbleClass, speakerLabel;
            if (task.characters) {
                const onStage = line.onStage || [line.speaker];
                charsHtml = onStage.map(key => {
                    const c = task.characters[key];
                    return `
                        <div class="duel-char duel-char-${c.charClass}">
                            <img src="${c.img}" alt="${c.name}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${c.charClass}">${c.name}</div>
                        </div>
                    `;
                }).join('');
                const speakerChar = task.characters[line.speaker];
                bubbleClass = speakerChar.charClass;
                speakerLabel = `<span class="duel-speaker-label">${speakerChar.name}:</span> `;
            } else {
                const cls = task.charClass || 'elsa';
                charsHtml = `
                    <div class="duel-char duel-char-${cls}">
                        <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                        <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                    </div>
                `;
                bubbleClass = cls;
                speakerLabel = '';
            }

            return `
                <div class="duel-scene">
                    <div class="duel-char-row">${charsHtml}</div>
                    <div class="duel-speech-bubble duel-speech-${bubbleClass}" onclick="${onNext}">
                        ${speakerLabel}${line.text}
                    </div>
            `;
        }

        function renderDrawIntroStage(task) {
            const line = task.dialogue[drawDialogueLineIndex];
            const isLast = drawDialogueLineIndex === task.dialogue.length - 1;

            const html = drawSceneHtml(task, line, 'drawNextIntroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionLabel = task.introActionLabel || '❄️ Show me your art ➔';
            const actionHtml = isLast
                ? `<button class="action-btn" onclick="beginDrawingTask()">${actionLabel}</button>`
                : `<button class="action-btn secondary-btn" onclick="drawNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function drawNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (drawDialogueLineIndex < task.dialogue.length - 1) {
                drawDialogueLineIndex++;
                renderDrawIntroStage(task);
            }
        }

        function beginDrawingTask() {
            drawStage = 'task';
            renderDrawingModal();
        }

        // --- Стадия 'outro': прощальные реплики после ввода пароля. ---
        function renderDrawOutroStage(task) {
            const line = task.outroDialogue[drawDialogueLineIndex];
            const isLast = drawDialogueLineIndex === task.outroDialogue.length - 1;

            // Для однoперсонажных сцен прощальная картинка может отличаться от вступительной
            // (task.outroCharImg) — подменяем её прямо в task на время рендера этой стадии.
            let restoreImg = null;
            if (!task.characters && task.outroCharImg) {
                restoreImg = task.charImg;
                task.charImg = task.outroCharImg;
            }

            const html = drawSceneHtml(task, line, 'drawNextOutroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;

            if (restoreImg !== null) {
                task.charImg = restoreImg;
            }

            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="finishDrawingTask()">✅ Continue Journey ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="drawNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function drawNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (drawDialogueLineIndex < task.outroDialogue.length - 1) {
                drawDialogueLineIndex++;
                renderDrawOutroStage(task);
            }
        }

        function finishDrawingTask() {
            advanceStep(activeTaskStep);
        }

        // --- Стадия 'task': собственно поле пароля (как и раньше). ---
        function renderDrawingTaskStage(task) {

            const icon = task.icon || '🏰';
            const placeholder = task.placeholder || 'Enter the magic passcode...';
            const unlockLabel = task.unlockLabel || '✨ Unlock ✨';
            const sparkle = task.sparkleIcon || '✨';

            // Необязательный чек-лист заданий (например список фото) — если task.checklist задан,
            // рисуем список карточек между вступительным текстом и полем пароля.
            let checklistHtml = '';
            if (task.checklist && task.checklist.length) {
                checklistHtml = `<div class="tecate-checklist">` + task.checklist.map(item => `
                    <div class="tecate-checklist-item">
                        <span class="tecate-checklist-icon">${item.icon}</span>
                        <span class="tecate-checklist-text">${item.text}</span>
                    </div>
                `).join('') + `</div>`;
            }

            // Необязательная кнопка "пропустить, если небезопасно" — если task.allowSkip = true.
            let skipHtml = '';
            if (task.allowSkip && !task.solved) {
                skipHtml = `<button class="action-btn secondary-btn tecate-skip-btn" onclick="skipUnsafeLocation()">${task.skipLabel || '🚫 Skip This Location'}</button>`;
            }

            let html = `
                <div class="disney-content">
                    <div class="disney-sparkle" style="top: -6px; left: 6px;">${sparkle}</div>
                    <div class="disney-sparkle" style="top: 4px; right: 10px; animation-delay: 0.7s;">${sparkle}</div>
                    <div class="disney-sparkle" style="bottom: -4px; left: 40px; animation-delay: 1.3s;">${sparkle}</div>
                    <div class="disney-sparkle" style="bottom: 2px; right: 50px; animation-delay: 0.4s;">${sparkle}</div>
                    <div class="disney-icon">${icon}</div>
                    <p class="disney-intro">${task.intro}</p>
                    ${checklistHtml}
                    <div class="disney-input-group">
                        <input type="text" class="disney-input" id="disney-password-input" placeholder="${placeholder}" ${task.solved ? 'value="' + task.password + '" disabled' : ''}>
                        ${task.solved ? '' : `<button class="disney-btn" onclick="checkDrawingPassword()">${unlockLabel}</button>`}
                    </div>
                    <div class="disney-status" id="disney-status">${task.solved ? '✅ Solved!' : ''}</div>
                    ${task.safetyNote && !task.solved ? `<div class="tecate-safety-note">${task.safetyNote}</div>` : ''}
                    ${skipHtml}
                </div>
            `;

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = task.solved ? `<button class="action-btn" onclick="completeDrawingStage()">Continue Journey ➔</button>` : '';
        }

        function skipUnsafeLocation() {
            const task = tasksData[activeTaskStep];
            if (!confirm(task.skipConfirmText || 'Skip this location? It will be marked as completed without doing the task.')) return;
            advanceStep(activeTaskStep);
        }

        function checkDrawingPassword() {
            const task = tasksData[activeTaskStep];
            const inputVal = document.getElementById('disney-password-input').value.trim();
            const statusEl = document.getElementById('disney-status');

            if (inputVal === task.password) {
                task.solved = true;
                renderDrawingModal();
            } else {
                statusEl.className = 'disney-status error';
                statusEl.innerText = '❌ Incorrect, try again!';
            }
        }

        function completeDrawingStage() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                drawStage = 'outro';
                drawDialogueLineIndex = 0;
                renderDrawingModal();
            } else {
                alert(task.completeMessage || "🎉 Magical! Your Disney masterpiece unlocked the next chapter!");
                advanceStep(activeTaskStep);
            }
        }

        // --- ДВИЖОК: НАПИТКИ (тип 'drinks') ---
        // 3 карточки-рецепта, каждая переворачивается по клику (CSS 3D flip) и
        // показывает ингредиенты + шаги приготовления. Нужно сделать только ОДИН
        // напиток на выбор, прислать фото в чат — здесь только выдача пароля.
        // Три стадии (drinksStage): 'dialogue' — вступительные реплики персонажа
        // (task.dialogue), 'task' — сама карточная часть, 'outro' — прощальные реплики
        // (task.outroDialogue) перед advanceStep. Если у задания нет task.dialogue/
        // outroDialogue — соответствующая стадия просто пропускается (полностью аналогично
        // движкам 'ciphers'/'passwords'/'drawing'/'truthlie'). Переиспользует drawSceneHtml()
        // из движка 'drawing' для отрисовки сцены с персонажем(-ами).
        let drinksStage = 'dialogue';
        let drinksDialogueLineIndex = 0;

        function startDrinksGame() {
            const task = tasksData[activeTaskStep];
            task.solved = false;
            drinksDialogueLineIndex = 0;
            drinksStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'task';
            renderDrinksDispatcher();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / сама задача / диалог-прощание ---
        function renderDrinksDispatcher() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (drinksStage === 'dialogue') {
                renderDrinksIntroStage(task);
            } else if (drinksStage === 'outro') {
                renderDrinksOutroStage(task);
            } else {
                renderDrinksModal();
            }
        }

        function renderDrinksIntroStage(task) {
            const line = task.dialogue[drinksDialogueLineIndex];
            const isLast = drinksDialogueLineIndex === task.dialogue.length - 1;

            const html = drawSceneHtml(task, line, 'drinksNextIntroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="beginDrinksTask()">🍹 Let's make a drink ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="drinksNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function drinksNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (drinksDialogueLineIndex < task.dialogue.length - 1) {
                drinksDialogueLineIndex++;
                renderDrinksIntroStage(task);
            }
        }

        function beginDrinksTask() {
            drinksStage = 'task';
            renderDrinksDispatcher();
        }

        function renderDrinksOutroStage(task) {
            const line = task.outroDialogue[drinksDialogueLineIndex];
            const isLast = drinksDialogueLineIndex === task.outroDialogue.length - 1;

            const html = drawSceneHtml(task, line, 'drinksNextOutroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="finishDrinksTask()">✅ Continue Journey ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="drinksNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function drinksNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (drinksDialogueLineIndex < task.outroDialogue.length - 1) {
                drinksDialogueLineIndex++;
                renderDrinksOutroStage(task);
            }
        }

        function finishDrinksTask() {
            advanceStep(activeTaskStep);
        }

        function toggleDrinkCard(id) {
            const card = document.getElementById(`agua-card-${id}`);
            if (card) card.classList.toggle('flipped');
        }

        function renderDrinksModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;

            const icon = task.icon || '🍹';
            const placeholder = task.placeholder || 'Enter the secret passcode...';
            const unlockLabel = task.unlockLabel || '🍹 Unlock 🍹';
            const sparkle = task.sparkleIcon || '🌺';

            const cardsHtml = `<div class="agua-cards">` + task.drinks.map(drink => `
                <div class="agua-card" id="agua-card-${drink.id}" onclick="toggleDrinkCard(${drink.id})">
                    <div class="agua-card-inner">
                        <div class="agua-card-face agua-card-front">
                            <div class="agua-card-emoji">${drink.emoji}</div>
                            <div class="agua-card-name">${drink.name}</div>
                            <div class="agua-card-subtitle">${drink.subtitle || ''}</div>
                            <div class="agua-card-hint">Tap to reveal recipe</div>
                        </div>
                        <div class="agua-card-face agua-card-back">
                            <h4>${drink.emoji} ${drink.name}</h4>
                            <div class="agua-recipe-block">
                                <strong>Ingredients:</strong>
                                <ul>${drink.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
                            </div>
                            <div class="agua-recipe-block">
                                <strong>Steps:</strong>
                                <ol>${drink.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('') + `</div>`;

            let html = `
                <div class="disney-content">
                    <div class="disney-sparkle" style="top: -6px; left: 6px;">${sparkle}</div>
                    <div class="disney-sparkle" style="top: 4px; right: 10px; animation-delay: 0.7s;">${sparkle}</div>
                    <div class="disney-sparkle" style="bottom: -4px; left: 40px; animation-delay: 1.3s;">${sparkle}</div>
                    <div class="disney-sparkle" style="bottom: 2px; right: 50px; animation-delay: 0.4s;">${sparkle}</div>
                    <div class="disney-icon">${icon}</div>
                    <p class="disney-intro">${task.intro}</p>
                    ${cardsHtml}
                    <div class="disney-input-group">
                        <input type="text" class="disney-input" id="disney-password-input" placeholder="${placeholder}" ${task.solved ? 'value="' + task.password + '" disabled' : ''}>
                        ${task.solved ? '' : `<button class="disney-btn" onclick="checkDrinksPassword()">${unlockLabel}</button>`}
                    </div>
                    <div class="disney-status" id="disney-status">${task.solved ? '✅ Solved!' : ''}</div>
                </div>
            `;

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = task.solved ? `<button class="action-btn" onclick="completeDrinksStage()">Continue Journey ➔</button>` : '';
        }

        function checkDrinksPassword() {
            const task = tasksData[activeTaskStep];
            const inputVal = document.getElementById('disney-password-input').value.trim();
            const statusEl = document.getElementById('disney-status');

            if (inputVal === task.password) {
                task.solved = true;
                renderDrinksModal();
            } else {
                statusEl.className = 'disney-status error';
                statusEl.innerText = '❌ Incorrect, try again!';
            }
        }

        function completeDrinksStage() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                drinksStage = 'outro';
                drinksDialogueLineIndex = 0;
                renderDrinksDispatcher();
            } else {
                alert(task.completeMessage || "🍹 Amazing! Your homemade drink unlocked the next chapter!");
                advanceStep(activeTaskStep);
            }
        }

        // --- ДВИЖОК: КИНО-ВИКТОРИНА (тип 'moviequiz') ---
        // На каждый вопрос — картинка (кадр из фильма) + текстовое поле для ответа.
        // Ответ сверяется после нормализации (нижний регистр, без пунктуации/лишних
        // пробелов). Кнопка-подсказка показывает/прячет task.questions[i].hint ДО ответа.
        // После правильного ответа: если подсказку не открывали — показываем её
        // автоматически (это шутки/отсылки, ей стоит их увидеть), инпут блокируется,
        // и появляется кнопка "Next Question ➔" — переход только вручную.
        let mqIndex = 0;
        let mqHintShown = false;
        let mqAnswered = false;
        // Стадии (mqStage): 'dialogue' — вступительные реплики персонажа (task.dialogue,
        // см. локацию 12 — Homer Simpson, прибывающий через портал), 'quiz' — сама
        // кино-викторина, 'outro' — прощальные реплики (task.outroDialogue) перед
        // advanceStep, на последней реплике которых персонаж уходит обратно в портал.
        // Если у задания нет task.dialogue/outroDialogue — соответствующая стадия
        // просто пропускается, так что старые/будущие moviequiz-задания без персонажа
        // продолжат работать как раньше.
        let mqStage = 'quiz';
        let mqDialogueLineIndex = 0;

        function normalizeMovieAnswer(str) {
            return str
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, ' ')
                .trim()
                .replace(/\s+/g, ' ');
        }

        function startMovieQuiz() {
            const task = tasksData[activeTaskStep];
            mqIndex = 0;
            mqHintShown = false;
            mqAnswered = false;
            mqDialogueLineIndex = 0;
            mqStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'quiz';
            if (mqStage === 'dialogue') {
                renderMqIntroStage(task);
            } else {
                renderMovieQuizQuestion();
            }
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Стадия 'dialogue': вступительные реплики персонажа (переиспользует
        // .duel-scene/.duel-char/.duel-speech-bubble движков duel/whale/mahjong, свои
        // цвета и портальная анимация появления — через модификаторы
        // duel-char-homer/duel-name-homer/duel-speech-homer в CSS). ---
        function renderMqIntroStage(task) {
            const line = task.dialogue[mqDialogueLineIndex];
            const isLast = mqDialogueLineIndex === task.dialogue.length - 1;
            const cls = task.charClass || 'homer';

            document.getElementById('modal-title').innerText = task.modalTitle;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-${cls}">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-${cls}" onclick="mqNextIntroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="beginMovieQuizQuestions()">🎬 Let's play ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="mqNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function mqNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (mqDialogueLineIndex < task.dialogue.length - 1) {
                mqDialogueLineIndex++;
                renderMqIntroStage(task);
            }
        }

        function beginMovieQuizQuestions() {
            mqStage = 'quiz';
            mqIndex = 0;
            mqHintShown = false;
            mqAnswered = false;
            renderMovieQuizQuestion();
        }

        function renderMovieQuizQuestion() {
            const task = tasksData[activeTaskStep];
            const q = task.questions[mqIndex];
            document.getElementById('modal-title').innerText = `${task.modalTitle} (${mqIndex + 1} / ${task.questions.length})`;

            let answerRowHtml;
            if (mqAnswered) {
                answerRowHtml = `<div class="cinema-correct-msg">✅ Correct!</div>`;
            } else {
                answerRowHtml = `
                    <div class="cinema-input-row">
                        <input type="text" class="cinema-input" id="cinema-answer-input" placeholder="${task.placeholder || 'Type the full movie title...'}" autocomplete="off">
                        <button class="cinema-btn" onclick="checkMovieAnswer()">Submit ▶</button>
                    </div>
                `;
            }

            let html = `
                <div class="cinema-content">
                    ${mqIndex === 0 ? `<p class="cinema-intro">${task.intro}</p>` : ''}
                    <div class="cinema-screen">
                        <img src="${q.image}" alt="Movie still" class="cinema-still">
                    </div>
                    ${answerRowHtml}
                    <div class="cinema-hint-row">
                        ${mqAnswered ? '' : `<button class="cinema-hint-btn" onclick="toggleMovieHint()">💡 ${mqHintShown ? 'Hide Hint' : 'Show Hint'}</button>`}
                        <div class="cinema-hint-box" id="cinema-hint-box" style="display: ${mqHintShown ? 'block' : 'none'};">${q.hint}</div>
                    </div>
                </div>
            `;

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            if (mqAnswered) {
                const isLast = mqIndex === task.questions.length - 1;
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="proceedToNextMovieQuestion()">${isLast ? 'Finish Quiz ➔' : 'Next Question ➔'}</button>`;
            } else {
                document.getElementById('modal-action').innerHTML = '';
                const input = document.getElementById('cinema-answer-input');
                input.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter') checkMovieAnswer();
                });
                input.focus();
            }
        }

        function toggleMovieHint() {
            mqHintShown = !mqHintShown;
            const box = document.getElementById('cinema-hint-box');
            const btn = document.querySelector('.cinema-hint-btn');
            if (box) box.style.display = mqHintShown ? 'block' : 'none';
            if (btn) btn.innerText = `💡 ${mqHintShown ? 'Hide Hint' : 'Show Hint'}`;
        }

        function checkMovieAnswer() {
            const task = tasksData[activeTaskStep];
            const q = task.questions[mqIndex];
            const raw = document.getElementById('cinema-answer-input').value;
            const normalized = normalizeMovieAnswer(raw);
            const errorMsg = document.getElementById('errorMsg');

            const isCorrect = q.answers.some(ans => normalizeMovieAnswer(ans) === normalized);

            if (!raw.trim() || !isCorrect) {
                errorMsg.style.display = 'block';
                errorMsg.innerText = "❌ Not quite — try again!";
                return;
            }

            errorMsg.style.display = 'none';
            mqAnswered = true;
            mqHintShown = true; // раскрываем подсказку в любом случае — там весёлые отсылки
            renderMovieQuizQuestion();
        }

        function proceedToNextMovieQuestion() {
            const task = tasksData[activeTaskStep];
            mqIndex++;
            mqHintShown = false;
            mqAnswered = false;

            if (mqIndex < task.questions.length) {
                renderMovieQuizQuestion();
            } else if (task.outroDialogue && task.outroDialogue.length) {
                mqStage = 'outro';
                mqDialogueLineIndex = 0;
                renderMqOutroStage(task);
            } else {
                alert(task.completeMessage || "🎬 That's a wrap! Great job with the movie quiz!");
                advanceStep(activeTaskStep);
            }
        }

        // --- Стадия 'outro': прощальные реплики персонажа после последнего вопроса
        // викторины. На последней реплике кнопка запускает анимацию ухода обратно в
        // портал (.portal-exit / @keyframes homerPortalOut в styles.css) и только
        // после неё засчитывает локацию. ---
        function renderMqOutroStage(task) {
            const line = task.outroDialogue[mqDialogueLineIndex];
            const isLast = mqDialogueLineIndex === task.outroDialogue.length - 1;
            const cls = task.charClass || 'homer';

            document.getElementById('modal-title').innerText = task.modalTitle;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-${cls}" id="mqOutroChar">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-${cls}" onclick="mqNextOutroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="finishMovieQuizTask()">✨ Farewell ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="mqNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function mqNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (mqDialogueLineIndex < task.outroDialogue.length - 1) {
                mqDialogueLineIndex++;
                renderMqOutroStage(task);
            }
        }

        // Запускает анимацию ухода персонажа обратно в портал, отключает кнопку
        // (чтобы нельзя было нажать дважды) и лишь по завершении анимации засчитывает
        // локацию — те же 650мс, что и длительность @keyframes homerPortalOut.
        function finishMovieQuizTask() {
            const charEl = document.getElementById('mqOutroChar');
            if (charEl) {
                charEl.classList.add('portal-exit');
                document.getElementById('modal-action').innerHTML = '';
                setTimeout(() => { advanceStep(activeTaskStep); }, 650);
            } else {
                advanceStep(activeTaskStep);
            }
        }

        // --- ДВИЖОК: МАДЖОНГ (тип 'mahjong') ---
        // Три стадии (mjStage): 'dialogue' — вступительные реплики персонажа (task.dialogue),
        // 'game' — сам маджонг, 3 уровня подряд с разными раскладками (mjLayoutBuilders),
        // 'outro' — финальные реплики персонажа (task.outroDialogue) перед advanceStep.
        // Если у задания нет task.dialogue/outroDialogue — соответствующая стадия просто
        // пропускается, так что старые/будущие mahjong-задания без персонажа продолжат работать.
        function startMahjongGame() {
            const task = tasksData[activeTaskStep];
            const saved = loadTaskProgress(activeTaskStep, 'mahjong');
            mjSelectedTile = null;
            if (saved) {
                mjShuffleUsed = !!saved.mjShuffleUsed;
                mjLevel = saved.mjLevel || 0;
                mjDialogueLineIndex = saved.mjDialogueLineIndex || 0;
                mjStage = saved.mjStage || 'dialogue';
                if (mjStage === 'game') {
                    if (saved.mjTilesData && saved.mjTilesData.length) {
                        mjTilesData = saved.mjTilesData;
                        const tileW = 40, tileH = 50;
                        mjArenaWidth = Math.max(...mjTilesData.map(t => t.x)) + tileW;
                        mjArenaHeight = Math.max(...mjTilesData.map(t => t.y)) + tileH;
                    } else {
                        generateSolvableMahjong(mjLevel);
                    }
                }
            } else {
                mjShuffleUsed = false;
                mjLevel = 0;
                mjDialogueLineIndex = 0;
                mjStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'game';
                if (mjStage === 'game') generateSolvableMahjong(mjLevel);
            }
            renderMahjongModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // Правило блокировки плитки (единое и для генерации, и для игры — это и даёт гарантию прохождения):
        // 1) плитка закрыта, если сверху лежит другая непройденная плитка;
        // 2) плитка закрыта, если она зажата ОДНОВРЕМЕННО и слева, и справа соседними плитками (классическое маджонг-правило).
        function isBlockedAmong(tile, tiles) {
            for (let i = 0; i < tiles.length; i++) {
                const other = tiles[i];
                if (other.id === tile.id) continue;
                if (other.layer > tile.layer && Math.abs(other.x - tile.x) < 32 && Math.abs(other.y - tile.y) < 42) {
                    return true;
                }
            }
            let leftBlocked = false;
            let rightBlocked = false;
            for (let i = 0; i < tiles.length; i++) {
                const other = tiles[i];
                if (other.id === tile.id) continue;
                if (other.layer < tile.layer) continue;
                if (Math.abs(other.y - tile.y) < 20) {
                    const dx = other.x - tile.x;
                    if (dx < 0 && dx > -44) leftBlocked = true;
                    if (dx > 0 && dx < 44) rightBlocked = true;
                }
            }
            return leftBlocked && rightBlocked;
        }

        // Строит последовательность "снятия" плиток по геометрии tiles (id/x/y/layer)
        // и раздаёт парные символы в этом порядке — так пара всегда становится доступной одновременно.
        function assignSolvableSymbols(tiles) {
            let pool = tiles.map(t => ({ id: t.id, x: t.x, y: t.y, layer: t.layer }));
            let removalOrder = [];

            while (pool.length > 0) {
                let freeIdx = [];
                for (let i = 0; i < pool.length; i++) {
                    if (!isBlockedAmong(pool[i], pool)) freeIdx.push(i);
                }
                if (freeIdx.length === 0) freeIdx = pool.map((_, idx) => idx);
                let i1 = freeIdx[Math.floor(Math.random() * freeIdx.length)];
                let t1 = pool[i1];
                pool.splice(i1, 1);

                let freeIdx2 = [];
                for (let i = 0; i < pool.length; i++) {
                    if (!isBlockedAmong(pool[i], pool)) freeIdx2.push(i);
                }
                if (freeIdx2.length === 0) freeIdx2 = pool.map((_, idx) => idx);
                let i2 = freeIdx2[Math.floor(Math.random() * freeIdx2.length)];
                let t2 = pool[i2];
                pool.splice(i2, 1);

                removalOrder.push(t1.id, t2.id);
            }

            let symbolMap = {};
            let iconIdx = 0;
            for (let i = 0; i < removalOrder.length; i += 2) {
                const symbol = mjIcons[iconIdx % mjIcons.length];
                iconIdx++;
                symbolMap[removalOrder[i]] = symbol;
                symbolMap[removalOrder[i + 1]] = symbol;
            }
            return symbolMap;
        }

        // Уровень 1 (исходная раскладка, без изменений): 4 слоя "лесенкой" со сдвигом по
        // диагонали (r * 6) — несимметричная пирамида. Возвращает "сырые" позиции плиток.
        function mjLayoutLevel0() {
            let rawPositions = [];
            let index = 0;
            const tileW = 40;
            const tileH = 50;

            let layersConfig = [
                { rows: 6, colsBase: 9, startX: 20,  startY: 10 },
                { rows: 5, colsBase: 7, startX: 50,  startY: 35 },
                { rows: 3, colsBase: 5, startX: 90,  startY: 60 },
                { rows: 2, colsBase: 2, startX: 130, startY: 85 }
            ];

            layersConfig.forEach((cfg, layerIdx) => {
                let currentCols = cfg.colsBase;
                for (let r = 0; r < cfg.rows; r++) {
                    for (let c = 0; c < currentCols; c++) {
                        if (index < 80) {
                            rawPositions.push({
                                id: index,
                                x: cfg.startX + c * (tileW + 2) + (r * 6),
                                y: cfg.startY + r * (tileH + 2),
                                layer: layerIdx
                            });
                            index++;
                        }
                    }
                    if (currentCols > 2) currentCols--;
                }
            });

            while (index < 80) {
                rawPositions.push({ id: index, x: 250 + (index % 5) * 42, y: 120 + Math.floor(index / 5) * 52, layer: 0 });
                index++;
            }
            return rawPositions;
        }

        // Общий строитель для симметричных раскладок: каждый ряд центрируется внутри своего
        // слоя относительно самого широкого ряда этого слоя — так получаются "ромб" и "бабочка"
        // (в отличие от лесенки level0, которая всегда прижата к левому краю каждого ряда).
        function mjBuildCenteredLayout(layersSpec) {
            let rawPositions = [];
            let index = 0;
            const tileW = 40;
            const tileH = 50;

            layersSpec.forEach((layer, layerIdx) => {
                const maxCols = Math.max(...layer.rows);
                layer.rows.forEach((cols, r) => {
                    const rowOffsetX = ((maxCols - cols) / 2) * (tileW + 2);
                    for (let c = 0; c < cols; c++) {
                        if (index < 80) {
                            rawPositions.push({
                                id: index,
                                x: layer.startX + rowOffsetX + c * (tileW + 2) + r * (layer.diagStep || 0),
                                y: layer.startY + r * (tileH + 2),
                                layer: layerIdx
                            });
                            index++;
                        }
                    }
                });
            });

            while (index < 80) {
                rawPositions.push({ id: index, x: 250 + (index % 5) * 42, y: 120 + Math.floor(index / 5) * 52, layer: 0 });
                index++;
            }
            return rawPositions;
        }

        // Уровень 2: "ромб" — два слоя, каждый расширяется к середине и сужается к краям.
        function mjLayoutLevel1() {
            return mjBuildCenteredLayout([
                { rows: [6, 9, 12, 12, 9, 6], startX: 0,  startY: 0 },
                { rows: [5, 8, 8, 5],         startX: 40, startY: 40 }
            ]);
        }

        // Уровень 3: "бабочка"/песочные часы — зеркальная противоположность ромбу
        // (сужается к середине, расширяется к краям), плюс лёгкий диагональный сдвиг слоя.
        function mjLayoutLevel2() {
            return mjBuildCenteredLayout([
                { rows: [12, 9, 6, 6, 9, 12], startX: 0,  startY: 0, diagStep: 4 },
                { rows: [8, 5, 5, 8],         startX: 50, startY: 40 }
            ]);
        }

        const mjLayoutBuilders = [mjLayoutLevel0, mjLayoutLevel1, mjLayoutLevel2];

        function generateSolvableMahjong(levelIdx) {
            const rawPositions = mjLayoutBuilders[levelIdx]();
            const symbolMap = assignSolvableSymbols(rawPositions);

            let tiles = rawPositions.map(p => ({
                id: p.id,
                x: p.x,
                y: p.y,
                layer: p.layer,
                symbol: symbolMap[p.id] || mjIcons[0],
                matched: false
            }));

            // Нормализуем координаты по фактическому bounding box этой раскладки и подгоняем
            // размер "арены" вплотную под неё — тогда flex-центрирование .mahjong-board
            // центрирует именно саму доску, а не фиксированный контейнер с содержимым,
            // прижатым к одному краю (как было раньше).
            const tileW = 40;
            const tileH = 50;
            const xs = tiles.map(t => t.x);
            const ys = tiles.map(t => t.y);
            const minX = Math.min(...xs);
            const minY = Math.min(...ys);
            tiles.forEach(t => { t.x -= minX; t.y -= minY; });
            mjArenaWidth = Math.max(...tiles.map(t => t.x)) + tileW;
            mjArenaHeight = Math.max(...tiles.map(t => t.y)) + tileH;

            mjTilesData = tiles;
        }

        function isTileBlocked(tile) {
            if (tile.matched) return true;
            const activeTiles = mjTilesData.filter(t => !t.matched);
            return isBlockedAmong(tile, activeTiles);
        }

        // --- Диспетчер стадий: диалог-вступление / сам маджонг / диалог-прощание ---
        function renderMahjongModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (mjStage === 'dialogue') {
                renderMjIntroStage(task);
            } else if (mjStage === 'outro') {
                renderMjOutroStage(task);
            } else {
                renderMahjongBoard(task);
            }
        }

        // --- Стадия 'dialogue': вступительные реплики персонажа (переиспользует
        // .duel-scene/.duel-char/.duel-speech-bubble движков duel/whale, свои цвета —
        // через модификаторы duel-char-anger/duel-name-anger/duel-speech-anger в CSS). ---
        function renderMjIntroStage(task) {
            const line = task.dialogue[mjDialogueLineIndex];
            const isLast = mjDialogueLineIndex === task.dialogue.length - 1;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-anger">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-anger">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-anger" onclick="mjNextIntroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="beginMahjongLevels()">😠 Bring it on ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="mjNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function mjNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (mjDialogueLineIndex < task.dialogue.length - 1) {
                mjDialogueLineIndex++;
                renderMjIntroStage(task);
            }
        }

        function beginMahjongLevels() {
            mjStage = 'game';
            mjLevel = 0;
            mjShuffleUsed = false;
            mjSelectedTile = null;
            generateSolvableMahjong(mjLevel);
            renderMahjongModal();
        }

        // --- Стадия 'game': сама доска, рендерится по текущему mjLevel/mjTilesData. ---
        function renderMahjongBoard(task) {
            let remaining = mjTilesData.filter(t => !t.matched).length;

            let html = `
                <div class="mahjong-info">
                    <span>Level ${mjLevel + 1}/${MJ_TOTAL_LEVELS} — Tiles remaining: <span id="mjCount">${remaining}</span> / 80</span>
                    <button class="action-btn secondary-btn" style="width: auto; padding: 6px 12px;" onclick="shuffleMahjongTiles()" ${mjShuffleUsed ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>🔀 Shuffle (${mjShuffleUsed ? 0 : 1})</button>
                </div>
                <div class="mahjong-board">
                    <div class="mahjong-arena" id="mjArena" style="width: ${mjArenaWidth}px; height: ${mjArenaHeight}px;">
            `;

            mjTilesData.forEach(tile => {
                let blocked = isTileBlocked(tile);
                let classes = `mj-tile ${tile.matched ? 'matched' : ''} ${blocked && !tile.matched ? 'blocked' : ''}`;
                html += `<div class="${classes}" style="left: ${tile.x}px; top: ${tile.y}px; z-index: ${tile.layer * 10};" onclick="handleTileClick(${tile.id})">${tile.symbol}</div>`;
            });

            html += `</div></div>`;

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('modal-action').innerHTML = ``;
        }

        function handleTileClick(id) {
            let tile = mjTilesData.find(t => t.id === id);
            if (!tile || tile.matched || isTileBlocked(tile)) return;

            let el = document.querySelectorAll('.mj-tile')[id];

            if (mjSelectedTile === null) {
                mjSelectedTile = tile;
                el.classList.add('selected');
            } else if (mjSelectedTile.id === tile.id) {
                mjSelectedTile = null;
                el.classList.remove('selected');
            } else {
                if (mjSelectedTile.symbol === tile.symbol) {
                    mjSelectedTile.matched = true;
                    tile.matched = true;
                    mjSelectedTile = null;

                    renderMahjongModal();

                    let leftOver = mjTilesData.filter(t => !t.matched).length;
                    if (leftOver === 0) {
                        setTimeout(() => { completeMahjongLevel(); }, 300);
                    }
                } else {
                    let prevEl = document.querySelectorAll('.mj-tile')[mjSelectedTile.id];
                    if (prevEl) prevEl.classList.remove('selected');
                    mjSelectedTile = tile;
                    el.classList.add('selected');
                }
            }
        }

        // Уровень очищен: либо переходим к следующей раскладке, либо (после последнего
        // уровня) показываем прощальные реплики персонажа, либо, если у задания их нет,
        // сразу засчитываем локацию — так старые/будущие mahjong-задания без
        // outroDialogue продолжают работать как раньше.
        function completeMahjongLevel() {
            const task = tasksData[activeTaskStep];

            if (mjLevel < MJ_TOTAL_LEVELS - 1) {
                mjLevel++;
                mjShuffleUsed = false;
                mjSelectedTile = null;
                generateSolvableMahjong(mjLevel);
                alert(`🎉 Level ${mjLevel} complete! On to level ${mjLevel + 1}...`);
                renderMahjongModal();
            } else if (task.outroDialogue && task.outroDialogue.length) {
                mjStage = 'outro';
                mjDialogueLineIndex = 0;
                renderMahjongModal();
            } else {
                alert("🎉 Wonderful! Mahjong complete!");
                advanceStep(activeTaskStep);
            }
        }

        // --- Стадия 'outro': прощальные реплики персонажа после 3-го уровня. ---
        function renderMjOutroStage(task) {
            const line = task.outroDialogue[mjDialogueLineIndex];
            const isLast = mjDialogueLineIndex === task.outroDialogue.length - 1;

            const html = `
                <div class="duel-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-anger">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-anger">${task.charName}</div>
                        </div>
                    </div>
                    <div class="duel-speech-bubble duel-speech-anger" onclick="mjNextOutroLine()">
                        ${line.text}
                    </div>
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="finishMahjongTask()">✅ Continue Journey ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="mjNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function mjNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (mjDialogueLineIndex < task.outroDialogue.length - 1) {
                mjDialogueLineIndex++;
                renderMjOutroStage(task);
            }
        }

        function finishMahjongTask() {
            advanceStep(activeTaskStep);
        }

        function shuffleMahjongTiles() {
            if (mjShuffleUsed) return;
            mjShuffleUsed = true;
            mjSelectedTile = null;

            let unmatched = mjTilesData.filter(t => !t.matched);
            const symbolMap = assignSolvableSymbols(unmatched.map(t => ({ id: t.id, x: t.x, y: t.y, layer: t.layer })));
            unmatched.forEach(t => {
                t.symbol = symbolMap[t.id];
            });

            renderMahjongModal();
        }

        // --- ОБЩЕЕ ---
        function completeStepDirectly(step) {
            advanceStep(step);
        }

        function closeModal() {
            saveTaskProgress();
            document.getElementById('modalOverlay').classList.remove('active');
            document.removeEventListener('keydown', mzKeyHandler);
            document.removeEventListener('keydown', tetrisKeyHandler);
            if (tetrisDropTimerId) {
                clearInterval(tetrisDropTimerId);
                tetrisDropTimerId = null;
            }
            hpStopMusic();
        }

        function closeModalOutside(event) {
            if (event.target.id === 'modalOverlay') {
                closeModal();
            }
        }

        // Реальные пропорции BingAIGC.jpg (1248×832 = 3:2) — держим карту без искажений
        // при любом размере окна: .map-section всегда получает от fitMapToViewport()
        // именно эти пропорции, а не просто "занимает всё доступное место", как раньше
        // (что растягивало object-fit:fill картинку и портило её при несовпадающих
        // пропорциях экрана).
        const MAP_ASPECT_RATIO = 1248 / 832;

        function fitMapToViewport() {
            const viewport = document.getElementById('mapViewport');
            const mapEl = document.getElementById('mapContainer');
            if (!viewport || !mapEl) return;
            const vw = viewport.clientWidth;
            const vh = viewport.clientHeight;
            if (!vw || !vh) return;
            let w, h;
            if (isMobileLayout()) {
                // На мобильных экранах (узких и высоких) обычный "contain" оставлял
                // огромный пустой промежуток снизу карты, т.к. её пропорции (3:2)
                // сильно отличаются от портретного экрана телефона. Поэтому здесь
                // "cover" — карта всегда заполняет экран целиком по высоте, а лишнее
                // по бокам уходит за пределы viewport (доступно через пинч/панораму,
                // см. IIFE с pinch-zoom ниже).
                w = vh * MAP_ASPECT_RATIO;
                h = vh;
                if (w < vw) {
                    w = vw;
                    h = vw / MAP_ASPECT_RATIO;
                }
            } else {
                w = vw;
                h = vw / MAP_ASPECT_RATIO;
                if (h > vh) {
                    h = vh;
                    w = vh * MAP_ASPECT_RATIO;
                }
            }
            mapEl.style.width = w + 'px';
            mapEl.style.height = h + 'px';
        }

        function updateMapDisplay() {
            fitMapToViewport();
            const container = document.getElementById('mapContainer');
            const rect = container.getBoundingClientRect();
            let allPoints = [];

            for (let i = 1; i <= 24; i++) {
                const cp = container.querySelector(`.cp-${i}`);
                if (cp) {
                    const cpRect = cp.getBoundingClientRect();
                    const x = (cpRect.left + cpRect.width / 2) - rect.left;
                    const y = (cpRect.top + cpRect.height / 2) - rect.top;
                    allPoints.push({ x, y });

                    cp.classList.remove('locked');
                    if (i > currentStep) {
                        cp.classList.add('locked');
                    }
                }
            }

            let pendingStr = allPoints.map(p => `${p.x},${p.y}`).join(' ');
            document.getElementById('routePending').setAttribute('points', pendingStr);

            let completedPoints = allPoints.slice(0, currentStep);
            let completedStr = completedPoints.map(p => `${p.x},${p.y}`).join(' ');
            document.getElementById('routeCompleted').setAttribute('points', completedStr);
        }

        // --- ДВИЖОК: ЗВЁЗДНЫЙ ЗАМОК (тип 'zodiaclock') ---
        // Три концентрических вращающихся кольца-диска: внешнее — планета,
        // среднее — знак зодиака, внутреннее — дом. Символы позиционируются
        // вручную через тригонометрию (без CSS-rotate на контейнере), поэтому
        // текст на камнях всегда стоит ровно, а вращается только их положение
        // по кругу. Раунды (task.rounds) решаются строго по очереди — как в
        // Book Divination: решённый диск "гаснет" в полосу открытых замков,
        // следующая загадка выезжает под ним.
        const zcPlanets = [
            { key: 'sun', symbol: '\u2609', label: 'Sun' },
            { key: 'moon', symbol: '\u263D', label: 'Moon' },
            { key: 'mercury', symbol: '\u263F', label: 'Mercury' },
            { key: 'venus', symbol: '\u2640', label: 'Venus' },
            { key: 'mars', symbol: '\u2642', label: 'Mars' },
            { key: 'jupiter', symbol: '\u2643', label: 'Jupiter' },
            { key: 'saturn', symbol: '\u2644', label: 'Saturn' },
            { key: 'uranus', symbol: '\u2645', label: 'Uranus' },
            { key: 'neptune', symbol: '\u2646', label: 'Neptune' },
            { key: 'pluto', symbol: '\u2647', label: 'Pluto' }
        ];
        const zcSigns = [
            { key: 'aries', symbol: '\u2648', label: 'Aries' },
            { key: 'taurus', symbol: '\u2649', label: 'Taurus' },
            { key: 'gemini', symbol: '\u264A', label: 'Gemini' },
            { key: 'cancer', symbol: '\u264B', label: 'Cancer' },
            { key: 'leo', symbol: '\u264C', label: 'Leo' },
            { key: 'virgo', symbol: '\u264D', label: 'Virgo' },
            { key: 'libra', symbol: '\u264E', label: 'Libra' },
            { key: 'scorpio', symbol: '\u264F', label: 'Scorpio' },
            { key: 'sagittarius', symbol: '\u2650', label: 'Sagittarius' },
            { key: 'capricorn', symbol: '\u2651', label: 'Capricorn' },
            { key: 'aquarius', symbol: '\u2652', label: 'Aquarius' },
            { key: 'pisces', symbol: '\u2653', label: 'Pisces' }
        ];
        const zcHouses = [
            { key: 1, symbol: 'I', label: 'House I' },
            { key: 2, symbol: 'II', label: 'House II' },
            { key: 3, symbol: 'III', label: 'House III' },
            { key: 4, symbol: 'IV', label: 'House IV' },
            { key: 5, symbol: 'V', label: 'House V' },
            { key: 6, symbol: 'VI', label: 'House VI' },
            { key: 7, symbol: 'VII', label: 'House VII' },
            { key: 8, symbol: 'VIII', label: 'House VIII' },
            { key: 9, symbol: 'IX', label: 'House IX' },
            { key: 10, symbol: 'X', label: 'House X' },
            { key: 11, symbol: 'XI', label: 'House XI' },
            { key: 12, symbol: 'XII', label: 'House XII' }
        ];
        const zcRingRadius = { planet: 205, sign: 138, house: 72 };
        let zcRingState = { planetIdx: 0, signIdx: 0, houseIdx: 0 };
        let zcActiveRoundId = null;
        // Стадии (zcStage): 'dialogue' — вступительные реплики персонажа (task.dialogue),
        // 'task' — сами звёздные замки, 'outro' — прощальные реплики (task.outroDialogue)
        // перед специальной анимацией растворения (см. zcDissolveMaster()). Если у задания
        // нет task.dialogue/outroDialogue — соответствующая стадия просто пропускается
        // (полностью аналогично движкам 'ciphers'/'drawing'/'liquidsort').
        let zcStage = 'dialogue';
        let zcDialogueLineIndex = 0;

        function zcListFor(ringName) {
            return ringName === 'planet' ? zcPlanets : ringName === 'sign' ? zcSigns : zcHouses;
        }

        function startZodiacLockGame() {
            const task = tasksData[activeTaskStep];
            zcDialogueLineIndex = 0;
            zcStage = (task.dialogue && task.dialogue.length) ? 'dialogue' : 'task';
            renderZodiacLockDispatcher();
            document.getElementById('modalOverlay').classList.add('active');
        }

        // --- Диспетчер стадий: диалог-вступление / сами замки / диалог-прощание ---
        function renderZodiacLockDispatcher() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;
            document.getElementById('errorMsg').style.display = 'none';

            if (zcStage === 'dialogue') {
                renderZcIntroStage(task);
            } else if (zcStage === 'outro') {
                renderZcOutroStage(task);
            } else {
                renderZodiacLockModal();
            }
        }

        // --- Стадия 'dialogue': вступительные реплики (переиспользует drawSceneHtml()
        // из движка 'drawing'). ---
        function renderZcIntroStage(task) {
            const line = task.dialogue[zcDialogueLineIndex];
            const isLast = zcDialogueLineIndex === task.dialogue.length - 1;

            const html = drawSceneHtml(task, line, 'zcNextIntroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="zcBeginTask()">🔮 Read the Stars ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="zcNextIntroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function zcNextIntroLine() {
            const task = tasksData[activeTaskStep];
            if (zcDialogueLineIndex < task.dialogue.length - 1) {
                zcDialogueLineIndex++;
                renderZcIntroStage(task);
            }
        }

        function zcBeginTask() {
            zcStage = 'task';
            renderZodiacLockDispatcher();
        }

        // --- Стадия 'outro': прощальные реплики после того, как все замки открыты. ---
        function renderZcOutroStage(task) {
            const line = task.outroDialogue[zcDialogueLineIndex];
            const isLast = zcDialogueLineIndex === task.outroDialogue.length - 1;

            const html = drawSceneHtml(task, line, 'zcNextOutroLine()') + `
                    <div class="duel-hint">${isLast ? '' : 'tap the bubble to continue…'}</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            const actionHtml = isLast
                ? `<button class="action-btn" onclick="zcDissolveMaster()">🕊️ Farewell, Master ➔</button>`
                : `<button class="action-btn secondary-btn" onclick="zcNextOutroLine()">Next ➔</button>`;
            document.getElementById('modal-action').innerHTML = actionHtml;
        }

        function zcNextOutroLine() {
            const task = tasksData[activeTaskStep];
            if (zcDialogueLineIndex < task.outroDialogue.length - 1) {
                zcDialogueLineIndex++;
                renderZcOutroStage(task);
            }
        }

        // Финальная анимация: персонаж рассыпается лепестками и растворяется в воздухе
        // (класс .zc-dissolving на .duel-char + плавающие лепестки .zc-petal, см. CSS),
        // после чего локация засчитывается пройденной.
        function zcDissolveMaster() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-action').innerHTML = '';
            const cls = task.charClass || 'oogway';
            const html = `
                <div class="duel-scene zc-dissolve-scene">
                    <div class="duel-char-row">
                        <div class="duel-char duel-char-${cls} zc-dissolving">
                            <img src="${task.charImg}" alt="${task.charName}" onerror="this.style.display='none';">
                            <div class="duel-name-tag duel-name-${cls}">${task.charName}</div>
                            <span class="zc-petal" style="--zc-x:-45px; --zc-delay:0s;">🌸</span>
                            <span class="zc-petal" style="--zc-x:30px; --zc-delay:0.25s;">🌸</span>
                            <span class="zc-petal" style="--zc-x:-15px; --zc-delay:0.5s;">🌸</span>
                            <span class="zc-petal" style="--zc-x:55px; --zc-delay:0.15s;">🌸</span>
                            <span class="zc-petal" style="--zc-x:-65px; --zc-delay:0.4s;">🌸</span>
                        </div>
                    </div>
                    <div class="zc-dissolve-text">✨ Master Oogway fades into the wind, returning to the spirits among the stars... ✨</div>
                </div>
            `;
            document.getElementById('modal-content').innerHTML = html;

            setTimeout(() => {
                advanceStep(activeTaskStep);
            }, 2200);
        }

        function zcCurrentRound(task) {
            return task.rounds.find(r => !r.solved) || null;
        }

        function renderZodiacLockModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('modal-title').innerText = task.modalTitle;

            const solvedRounds = task.rounds.filter(r => r.solved);
            const current = zcCurrentRound(task);

            let html = '';

            if (solvedRounds.length === 0) {
                html += `<div class="zc-intro"><p>${task.intro}</p></div>`;
            }

            html += `<div class="zc-progress">Locks opened: <b>${solvedRounds.length}</b> / ${task.rounds.length}</div>`;

            if (solvedRounds.length > 0) {
                html += `<div class="zc-solved-row">`;
                solvedRounds.forEach((r, i) => {
                    html += `<div class="zc-solved-chip">\u2728 Lock ${i + 1}</div>`;
                });
                html += `</div>`;
            }

            if (current) {
                const isNewRound = zcActiveRoundId !== current.id;
                if (isNewRound) {
                    zcActiveRoundId = current.id;
                    zcRingState = { planetIdx: 0, signIdx: 0, houseIdx: 0 };
                }

                html += `
                    <div class="zc-active-card" id="zcActiveCard">
                        <div class="zc-round-title">Lock ${solvedRounds.length + 1} of ${task.rounds.length}</div>
                        <div class="zc-phrase">${current.phrase}</div>

                        <div class="zc-lock-rings">
                            <div class="zc-pointer"></div>
                            <div class="zc-ring zc-ring-planet" id="zcRingPlanet"></div>
                            <div class="zc-ring zc-ring-sign" id="zcRingSign"></div>
                            <div class="zc-ring zc-ring-house" id="zcRingHouse"></div>
                        </div>

                        <div class="zc-controls">
                            <div class="zc-control-group">
                                <button class="zc-arrow" onclick="zcRotate('planet', -1)">\u25C0</button>
                                <span class="zc-control-label">Planet</span>
                                <button class="zc-arrow" onclick="zcRotate('planet', 1)">\u25B6</button>
                            </div>
                            <div class="zc-control-group">
                                <button class="zc-arrow" onclick="zcRotate('sign', -1)">\u25C0</button>
                                <span class="zc-control-label">Sign</span>
                                <button class="zc-arrow" onclick="zcRotate('sign', 1)">\u25B6</button>
                            </div>
                            <div class="zc-control-group">
                                <button class="zc-arrow" onclick="zcRotate('house', -1)">\u25C0</button>
                                <span class="zc-control-label">House</span>
                                <button class="zc-arrow" onclick="zcRotate('house', 1)">\u25B6</button>
                            </div>
                        </div>

                        <button class="zc-check-btn" onclick="zcCheckCombo()">Align the Stars</button>
                        <div class="zc-status" id="zcStatus-${current.id}"></div>
                    </div>
                `;
            } else {
                html += `<div class="zc-complete-msg">\u2728 All four celestial locks are open. The sky has cleared the way forward. \u2728</div>`;
            }

            document.getElementById('modal-content').innerHTML = html;
            document.getElementById('errorMsg').style.display = 'none';

            if (current) {
                zcRenderRings();
            }

            const allSolved = task.rounds.every(r => r.solved);
            document.getElementById('modal-action').innerHTML = allSolved
                ? `<button class="action-btn" onclick="completeZodiacLockStage()">Continue the Journey \u2794</button>`
                : `<button class="action-btn locked-status">\uD83D\uDD12 Align all ${task.rounds.length} locks to proceed</button>`;

            const activeCard = document.getElementById('zcActiveCard');
            if (activeCard) {
                setTimeout(() => activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
            }
        }

        // Создаёт (или пересоздаёт) DOM-символы всех трёх колец и расставляет
        // их по кругу согласно текущим индексам в zcRingState.
        function zcRenderRings() {
            ['planet', 'sign', 'house'].forEach(ringName => {
                const container = document.getElementById('zcRing' + ringName.charAt(0).toUpperCase() + ringName.slice(1));
                if (!container) return;
                const list = zcListFor(ringName);

                container.innerHTML = '';
                list.forEach((item, i) => {
                    const el = document.createElement('div');
                    el.className = 'zc-symbol';
                    el.dataset.index = i;
                    el.innerHTML = `<span class="zc-symbol-glyph">${item.symbol}</span><span class="zc-symbol-label">${item.label}</span>`;
                    container.appendChild(el);
                });

                zcPositionRing(ringName);
            });
        }

        // Пересчитывает left/top каждого символа кольца по текущему индексу
        // (тот символ, что сейчас "наверху", встаёт напротив указателя zc-pointer).
        // Радиус берём из реального размера DOM-контейнера (а не из константы),
        // чтобы позиционирование само подстраивалось под мобильную CSS-адаптацию.
        function zcPositionRing(ringName) {
            const container = document.getElementById('zcRing' + ringName.charAt(0).toUpperCase() + ringName.slice(1));
            if (!container) return;
            const list = zcListFor(ringName);
            const idxKey = ringName + 'Idx';
            const activeIdx = zcRingState[idxKey];
            const radius = (container.clientWidth || zcRingRadius[ringName] * 2) / 2;

            Array.from(container.children).forEach(el => {
                const i = parseInt(el.dataset.index, 10);
                const angleDeg = ((i - activeIdx) / list.length) * 360;
                const rad = angleDeg * Math.PI / 180;
                const x = radius + radius * Math.sin(rad);
                const y = radius - radius * Math.cos(rad);
                el.style.left = x + 'px';
                el.style.top = y + 'px';

                const norm = ((angleDeg % 360) + 360) % 360;
                const halfSegment = 180 / list.length;
                const isActive = norm < halfSegment || norm > 360 - halfSegment;
                el.classList.toggle('zc-symbol-active', isActive);
            });
        }

        function zcRotate(ringName, dir) {
            const list = zcListFor(ringName);
            const idxKey = ringName + 'Idx';
            zcRingState[idxKey] = (zcRingState[idxKey] + dir + list.length) % list.length;
            zcPositionRing(ringName);
        }

        function zcCheckCombo() {
            const task = tasksData[activeTaskStep];
            const round = zcCurrentRound(task);
            if (!round) return;

            const planetKey = zcPlanets[zcRingState.planetIdx].key;
            const signKey = zcSigns[zcRingState.signIdx].key;
            const houseKey = zcHouses[zcRingState.houseIdx].key;

            const ok = (planetKey === round.planet) && round.signs.includes(signKey) && (houseKey === round.house);

            if (ok) {
                zcOpenLock(round);
            } else {
                const statusEl = document.getElementById('zcStatus-' + round.id);
                if (statusEl) {
                    statusEl.className = 'zc-status error';
                    statusEl.innerText = 'The stars do not align yet\u2026 look at the riddle again.';
                }
                const card = document.getElementById('zcActiveCard');
                if (card) {
                    card.classList.add('zc-shake');
                    setTimeout(() => card.classList.remove('zc-shake'), 400);
                }
            }
        }

        // Анимация "открытия" каменного замка — стонхендж-камни вспыхивают
        // синим сиянием, затем раунд помечается решённым и модалка
        // перерисовывается: этот замок уходит в полосу открытых, следующая
        // загадка "выезжает" под ним (как выгорание фразы в Book Divination).
        function zcOpenLock(round) {
            const card = document.getElementById('zcActiveCard');
            if (!card) return;

            card.innerHTML = `
                <div class="zc-open-stage">
                    <div class="zc-open-glow"></div>
                    <div class="zc-open-text">\u2728 The stars align\u2026 \u2728</div>
                </div>
            `;

            setTimeout(() => {
                round.solved = true;
                renderZodiacLockModal();
            }, 1700);
        }

        function completeZodiacLockStage() {
            const task = tasksData[activeTaskStep];
            if (task.outroDialogue && task.outroDialogue.length) {
                zcDialogueLineIndex = 0;
                zcStage = 'outro';
                renderZodiacLockDispatcher();
            } else {
                alert("\u2728 All four celestial locks are open \u2014 the sky itself has cleared the way forward. \u2728");
                advanceStep(activeTaskStep);
            }
        }

        // ===================================================================
        // --- ДВИЖОК: HOGWARTS (тип 'hogwarts') — Локация 19 ---
        // Сцены идут строго по порядку: letter -> dialogue -> choice -> result -> lessons.
        // Из lessons она выбирает любой урок в любом порядке (lesson), возвращается
        // обратно в lessons по завершении, и когда пройдены все 4 — попадает на
        // graduation. Сами уроки (геймплей внутри каждого) и сертификат — это то,
        // что мы сейчас договорились делать отдельными следующими обновлениями;
        // здесь только меню, навигация между экранами и заглушка для каждого урока.
        // Прогресс (факультет + пройденные уроки) не сохраняется между открытиями —
        // с сохранением разберёмся, когда весь раздел будет готов.
        // ===================================================================
        let hpAudio = null;
        let hpStage = 'letter';
        let hpDialogueIndex = 0;
        let hpChosenHouseKey = null;
        let hpActiveLessonKey = null;

        function hpPlayMusic() {
            try {
                if (!hpAudio) {
                    hpAudio = new Audio('audio/Hedwigs_Theme.mp3');
                    hpAudio.loop = true;
                    hpAudio.volume = 0.55;
                }
                hpAudio.currentTime = 0;
                hpAudio.play().catch(() => {});
            } catch (e) { /* тихо игнорируем, если браузер заблокировал автозапуск */ }
        }

        function hpStopMusic() {
            if (hpAudio) {
                hpAudio.pause();
                hpAudio.currentTime = 0;
            }
        }

        function startHogwartsGame() {
            const task = tasksData[activeTaskStep];
            const saved = loadTaskProgress(activeTaskStep, 'hogwarts');
            hpActiveLessonKey = null;
            hpGeoReset();
            hpCharmsReset();
            hpHistoryReset();
            hpArtifactsReset();
            if (saved) {
                hpChosenHouseKey = saved.hpChosenHouseKey || null;
                hpStage = saved.hpStage || 'letter';
                hpDialogueIndex = 0;
                if (saved.lessonsDone && saved.lessonsDone.length === task.lessons.length) {
                    task.lessons.forEach((l, i) => { l.done = !!saved.lessonsDone[i]; });
                }
            } else {
                hpChosenHouseKey = null;
                hpStage = 'letter';
                hpDialogueIndex = 0;
            }
            hpPlayMusic();
            renderHogwartsModal();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function hpAllLessonsDone(task) {
            return task.lessons.every(l => l.done);
        }

        function renderHogwartsModal() {
            const task = tasksData[activeTaskStep];
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-content').classList.add('hp-content');
            // Каждый рендер сбрасывает тематический класс окна к базовому — так стадийные
            // "скины" (факультетный фон на весь экран уроков, пергамент карты мародёров)
            // никогда не остаются висеть на других экранах.
            document.getElementById('modalWindow').className = 'modal-window theme-hogwarts';

            if (hpStage === 'letter') {
                document.getElementById('modal-title').innerText = 'An Owl at the Window';
                const letterHTML = task.letterBody.map(line =>
                    line === '' ? '' : `<p>${line}</p>`
                ).join('');
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-letter-scene">
                        <div class="hp-owl">\uD83E\uDD89</div>
                        <div class="hp-letter" id="hpLetter">
                            <div class="hp-letter-seal">HH</div>
                            <div class="hp-letter-text">${letterHTML}</div>
                        </div>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML =
                    `<button class="action-btn hp-btn" onclick="hpAcceptInvitation()">Yes \u2014 take me to Hogwarts \u2728</button>`;

            } else if (hpStage === 'dialogue') {
                document.getElementById('modal-title').innerText = 'The Sorting Hat';
                const line = task.hatDialogue[hpDialogueIndex];
                const isLast = hpDialogueIndex >= task.hatDialogue.length - 1;
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-hall-scene">
                        <div class="hp-hat">\uD83C\uDFA9</div>
                        <div class="hp-speech-bubble" id="hpBubble">${line}</div>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML =
                    `<button class="action-btn hp-btn" onclick="hpAdvanceDialogue()">${isLast ? 'Choose your house' : 'Continue'} \u2794</button>`;

            } else if (hpStage === 'choice') {
                document.getElementById('modal-title').innerText = 'Choose Your House';
                const cards = task.houses.map(h => `
                    <div class="hp-house-card hp-house-${h.key}" onclick="hpChooseHouse('${h.key}')">
                        <div class="hp-house-animal">${h.emoji}</div>
                        <div class="hp-house-name">${h.name}</div>
                        <div class="hp-house-sub">${h.animal}</div>
                    </div>
                `).join('');
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-choice-scene">
                        <p class="hp-choice-hint">Reach out\u2026 which one calls to you?</p>
                        <div class="hp-house-grid">${cards}</div>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML = '';

            } else if (hpStage === 'result') {
                const house = task.houses.find(h => h.key === hpChosenHouseKey);
                document.getElementById('modal-title').innerText = 'The Hat Has Spoken';
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-result-scene hp-house-${house.key}">
                        <div class="hp-result-animal">${house.emoji}</div>
                        <div class="hp-result-shout">${house.name.toUpperCase()}!</div>
                        <p class="hp-result-msg">${task.houseMessages[house.key]}</p>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML =
                    `<button class="action-btn hp-btn" onclick="hpGoToLessons()">Continue the Adventure \u2794</button>`;

            } else if (hpStage === 'lessons') {
                const house = task.houses.find(h => h.key === hpChosenHouseKey);
                const doneCount = task.lessons.filter(l => l.done).length;
                document.getElementById('modal-title').innerText = 'Lessons at Hogwarts';
                // Факультетный цвет теперь заливает всё окно модалки целиком (см. CSS
                // .hp-lessons-house-<key>) — только на этом экране выбора урока.
                document.getElementById('modalWindow').classList.add('hp-lessons-house-' + house.key);
                const cards = task.lessons.map(l => `
                    <div class="hp-lesson-card hp-lesson-${l.theme}${l.done ? ' hp-lesson-done' : ''}" onclick="hpOpenLesson('${l.key}')">
                        <div class="hp-lesson-icon">${l.emoji}</div>
                        <div class="hp-lesson-name">${l.name}</div>
                        <div class="hp-lesson-sub">${l.subtitle}</div>
                        <div class="hp-lesson-status">${l.done ? '\u2713 Completed' : 'Start'}</div>
                    </div>
                `).join('');
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-lessons-scene hp-house-${house.key}">
                        <div class="hp-lessons-intro">
                            <div class="hp-result-animal hp-lessons-crest">${house.emoji}</div>
                            <p>Welcome, ${house.name} student. Choose a lesson to begin \u2014 the order is entirely up to you.</p>
                            <p class="hp-lessons-progress">${doneCount} of ${task.lessons.length} lessons completed</p>
                        </div>
                        <div class="hp-lesson-grid">${cards}</div>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML = hpAllLessonsDone(task)
                    ? `<button class="action-btn hp-btn" onclick="hpGoToGraduation()">Complete Your Studies \u2794</button>`
                    : `<button class="action-btn hp-btn" onclick="closeModal()">Close for now \u2794</button>`;

            } else if (hpStage === 'lesson') {
                const lesson = task.lessons.find(l => l.key === hpActiveLessonKey);
                if (lesson.key === 'geography') {
                    renderGeographyLesson();
                    return;
                }
                if (lesson.key === 'charms') {
                    renderCharmsLesson();
                    return;
                }
                if (lesson.key === 'history') {
                    renderHistoryLesson();
                    return;
                }
                if (lesson.key === 'artifacts') {
                    renderArtifactsLesson();
                    return;
                }
                document.getElementById('modal-title').innerText = lesson.name;
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-lesson-stub hp-lesson-theme-${lesson.theme}">
                        <div class="hp-lesson-stub-icon">${lesson.emoji}</div>
                        <p class="hp-lesson-stub-text">${lesson.subtitle}.<br>This lesson's game is still being written \u2014 it'll appear here in one of the next updates.</p>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML = `
                    <button class="action-btn hp-btn hp-btn-secondary" onclick="hpCompleteLesson('${lesson.key}')">\u2713 Mark complete (dev test)</button>
                    <button class="action-btn hp-btn" onclick="hpBackToLessons()">\u2190 Back to Lessons</button>
                `;

            } else if (hpStage === 'graduation') {
                const house = task.houses.find(h => h.key === hpChosenHouseKey);
                document.getElementById('modal-title').innerText = 'Graduation Day';
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-result-scene hp-house-${house.key} hp-fireworks-scene">
                        <div class="hp-fireworks-layer" id="hpFireworksLayer"></div>
                        <div class="hp-result-animal">\uD83C\uDF93</div>
                        <div class="hp-result-shout">Congratulations!</div>
                        <p class="hp-result-msg">You've completed every lesson and proven yourself a fully qualified witch of ${house.name}, ${task.recipientName}.</p>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML =
                    `<button class="action-btn hp-btn" onclick="hpGoToDiploma()">\uD83D\uDCDC See Your Diploma \u2794</button>`;
                hpLaunchFireworks();

            } else if (hpStage === 'diploma') {
                document.getElementById('modalWindow').classList.add('hp-modal-diploma');
                document.getElementById('modal-title').innerText = 'Diploma of Outstanding Wizardry';
                document.getElementById('modal-content').innerHTML = hpDiplomaHTML(task);
                document.getElementById('modal-action').innerHTML = `
                    <button class="action-btn hp-btn hp-btn-secondary" onclick="window.print()">\u2B07\uFE0F Save as PDF</button>
                    <button class="action-btn hp-btn" onclick="hpFinishHogwarts()">Continue the Journey \u2794</button>
                `;
            }
        }

        // ===================================================================
        // ФЕЙЕРВЕРК на экране graduation — лёгкая CSS-анимация без canvas: несколько
        // "залпов", каждый из которых создаёт кольцо цветных искр в случайной точке
        // сцены. Чисто декоративно, вызывается один раз при входе в hpStage === 'graduation'.
        // ===================================================================
        function hpLaunchFireworks() {
            const layer = document.getElementById('hpFireworksLayer');
            if (!layer) return;
            const colors = ['#ffd766', '#e0526b', '#4fd67a', '#7fb8ff', '#b98cf0', '#ff9f43'];
            const burstCount = 6;
            for (let b = 0; b < burstCount; b++) {
                setTimeout(() => {
                    if (!document.getElementById('hpFireworksLayer')) return;
                    const cx = 15 + Math.random() * 70;
                    const cy = 15 + Math.random() * 55;
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const sparkCount = 14;
                    for (let s = 0; s < sparkCount; s++) {
                        const angle = (s / sparkCount) * Math.PI * 2;
                        const dist = 40 + Math.random() * 30;
                        const spark = document.createElement('span');
                        spark.className = 'hp-firework-spark';
                        spark.style.left = cx + '%';
                        spark.style.top = cy + '%';
                        spark.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
                        spark.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
                        spark.style.background = color;
                        spark.style.boxShadow = `0 0 6px 1px ${color}`;
                        layer.appendChild(spark);
                        setTimeout(() => spark.remove(), 1300);
                    }
                }, b * 450);
            }
        }

        function hpGoToDiploma() {
            hpStage = 'diploma';
            renderHogwartsModal();
        }

        // Диплом — романтичный текст + декоративная векторная рамка с магическими
        // штуками (нарисована прямо в SVG, без внешних картинок), плюс кнопка печати
        // в PDF через window.print() (см. @media print в styles.css — на печать уходит
        // только #hpDiplomaCard, остальной интерфейс скрывается).
        function hpDiplomaHTML(task) {
            const house = task.houses.find(h => h.key === hpChosenHouseKey);
            const today = new Date();
            const dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
            return `
                <div class="hp-diploma-wrap">
                    <div class="hp-diploma-card" id="hpDiplomaCard">
                        ${hpDiplomaBorderSVG()}
                        <div class="hp-diploma-inner">
                            <div class="hp-diploma-crest">\u2728 \uD83E\uDDD9\u200D\u2642\uFE0F \u2728</div>
                            <div class="hp-diploma-school">Hogwarts School of Witchcraft and Wizardry</div>
                            <div class="hp-diploma-title">Diploma of Outstanding Wizardry</div>
                            <div class="hp-diploma-divider">\u2726 \u2726 \u2726</div>
                            <p class="hp-diploma-body">
                                This is to certify that
                            </p>
                            <div class="hp-diploma-name">Lizzet Cruz</div>
                            <p class="hp-diploma-body">
                                of the House of ${house.name}, has completed every trial set before her \u2014 Magical Geography,
                                Charms, the History of Magic, and Magical Artifacts \u2014 and is hereby named an
                                <b>Outstanding Witch</b> of Hogwarts, first class.
                            </p>
                            <p class="hp-diploma-personal">
                                But no lesson here could teach what you already carry: the kind of magic that finds
                                someone, keeps them close, and makes ordinary days feel enchanted. Every letter typed
                                into this small adventure was written with one wish \u2014 to make you smile the way you
                                make everyone around you smile. Wherever this next chapter takes us, I'll be right there,
                                wand in hand, choosing you. Every single time.
                            </p>
                            <div class="hp-diploma-signatures">
                                <div class="hp-diploma-sig">
                                    <div class="hp-diploma-sig-line">Albus Dumbledore</div>
                                    <div class="hp-diploma-sig-role">Headmaster</div>
                                </div>
                                <div class="hp-diploma-sig">
                                    <div class="hp-diploma-sig-line hp-diploma-sig-cursive">With all my love</div>
                                    <div class="hp-diploma-sig-role">Your own wizard</div>
                                </div>
                            </div>
                            <div class="hp-diploma-date">${dateStr}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Рамка диплома: тонкая векторная гирлянда с волшебной палочкой, звёздами,
        // книгой, зельем и совой по углам/сторонам — рисуется как inline SVG (не
        // растровые файлы), чтобы отлично печаталась в PDF в любом разрешении.
        function hpDiplomaBorderSVG() {
            return `
                <svg class="hp-diploma-border" viewBox="0 0 600 760" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="14" width="572" height="732" fill="none" stroke="#8a5a30" stroke-width="3"/>
                    <rect x="22" y="22" width="556" height="716" fill="none" stroke="#c68a48" stroke-width="1.2"/>
                    <!-- звёзды по краям -->
                    <g fill="#c68a48">
                        <path d="M40 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(0,0) scale(0.9)"/>
                        <path d="M560 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(520,0) scale(0.9)"/>
                        <path d="M40 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(0,690) scale(0.9)"/>
                        <path d="M560 40 l4 10 10 1 -7.5 7 2 10 -8.5 -5.5 -8.5 5.5 2 -10 -7.5 -7 10 -1 z" transform="translate(520,690) scale(0.9)"/>
                    </g>
                    <!-- волшебная палочка со звёздной пылью, левый верх -->
                    <g transform="translate(46, 60) rotate(20)" stroke="#a5730c" stroke-width="4" stroke-linecap="round">
                        <line x1="0" y1="30" x2="46" y2="0"/>
                        <circle cx="4" cy="27" r="3.4" fill="#a5730c" stroke="none"/>
                    </g>
                    <g fill="#dcb17a">
                        <circle cx="30" cy="46" r="2"/>
                        <circle cx="20" cy="55" r="1.6"/>
                        <circle cx="40" cy="60" r="1.4"/>
                    </g>
                    <!-- книга, правый верх -->
                    <g transform="translate(534, 44)">
                        <path d="M0 6 Q10 -2 20 6 L20 26 Q10 18 0 26 Z" fill="#7a5628"/>
                        <path d="M20 6 Q30 -2 40 6 L40 26 Q30 18 20 26 Z" fill="#8a5a30"/>
                    </g>
                    <!-- зелье, левый низ -->
                    <g transform="translate(30, 686)">
                        <path d="M14 0 h10 v10 l9 16 a10 10 0 0 1 -9 15 h-10 a10 10 0 0 1 -9 -15 l9 -16 z"
                              fill="none" stroke="#8a5a30" stroke-width="2.4"/>
                        <path d="M7 34 a10 10 0 0 0 6 7 h10 a10 10 0 0 0 6 -7 z" fill="#c68a48" opacity="0.55"/>
                    </g>
                    <!-- сова, правый низ -->
                    <g transform="translate(536, 690)">
                        <ellipse cx="12" cy="14" rx="12" ry="14" fill="#8a5a30"/>
                        <circle cx="7" cy="10" r="3" fill="#f3e6c4"/>
                        <circle cx="17" cy="10" r="3" fill="#f3e6c4"/>
                        <circle cx="7" cy="10" r="1.3" fill="#3a2410"/>
                        <circle cx="17" cy="10" r="1.3" fill="#3a2410"/>
                        <path d="M12 12 l-3 4 h6 z" fill="#c68a48"/>
                    </g>
                </svg>
            `;
        }

        function hpFinishHogwarts() {
            hpStopMusic();
            advanceStep(activeTaskStep);
        }

        function hpAcceptInvitation() {
            hpStage = 'dialogue';
            hpDialogueIndex = 0;
            renderHogwartsModal();
        }

        function hpAdvanceDialogue() {
            const task = tasksData[activeTaskStep];
            if (hpDialogueIndex < task.hatDialogue.length - 1) {
                hpDialogueIndex++;
                renderHogwartsModal();
            } else {
                hpStage = 'choice';
                renderHogwartsModal();
            }
        }

        function hpChooseHouse(key) {
            hpChosenHouseKey = key;
            hpStage = 'result';
            renderHogwartsModal();
        }

        function hpGoToLessons() {
            hpStage = 'lessons';
            hpActiveLessonKey = null;
            renderHogwartsModal();
        }

        function hpOpenLesson(key) {
            hpActiveLessonKey = key;
            hpStage = 'lesson';
            renderHogwartsModal();
        }

        function hpBackToLessons() {
            hpStage = 'lessons';
            hpActiveLessonKey = null;
            renderHogwartsModal();
        }

        // ===================================================================
        // УРОК "MAGICAL GEOGRAPHY" — своя мини-игра поверх общего меню уроков.
        // Она подставляется вместо стандартной заглушки, когда hpActiveLessonKey === 'geography'
        // (см. renderHogwartsModal, ветка hpStage === 'lesson'). Своя схема экрана
        // (иллюстрация + текстовое поле ответа + подсказка + точки навигации по 14 локациям),
        // и своё оформление окна "под карту мародёров" (класс hp-modal-marauders в CSS).
        // ===================================================================
        function renderGeographyLesson() {
            const loc = geoLocations[geoState.current];
            const solvedCount = geoState.solved.filter(Boolean).length;
            const isSolved = geoState.solved[geoState.current];
            const allDone = solvedCount === geoLocations.length;

            document.getElementById('modal-title').innerText = 'Magical Geography';
            document.getElementById('modalWindow').classList.add('hp-modal-marauders');

            const dots = geoLocations.map((l, i) => `
                <span class="hp-geo-dot${geoState.solved[i] ? ' hp-geo-dot-solved' : ''}${i === geoState.current ? ' hp-geo-dot-active' : ''}"
                      onclick="hpGeoGoTo(${i})"
                      title="${geoState.solved[i] ? l.name : 'Location ' + (i + 1)}">${geoState.solved[i] ? '\u2713' : (i + 1)}</span>
            `).join('');

            const answerBlockHTML = isSolved ? `
                <div class="hp-geo-solved-name">\u2713 ${loc.name}</div>
            ` : `
                <div class="hp-geo-answer-row">
                    <input type="text" id="hpGeoInput" class="hp-geo-input" placeholder="Name this place\u2026" autocomplete="off"
                           onkeydown="if (event.key === 'Enter') { hpGeoSubmit(); }">
                    <button class="hp-geo-submit-btn" onclick="hpGeoSubmit()">Reveal</button>
                </div>
                <div class="hp-geo-feedback" id="hpGeoFeedback"></div>
                <button class="hp-geo-hint-btn" onclick="hpGeoToggleHint()">\uD83D\uDD0D I need a clue\u2026</button>
                <div class="hp-geo-hint-text" id="hpGeoHintText" style="display:${geoState.hintShown ? 'block' : 'none'};">${loc.hint}</div>
            `;

            document.getElementById('modal-content').innerHTML = `
                <div class="hp-geo-scene">
                    <div class="hp-geo-topline">
                        <span class="hp-geo-kicker">I solemnly swear that I am up to no good</span>
                        <span class="hp-geo-progress">${solvedCount} / ${geoLocations.length} found</span>
                    </div>
                    <div class="hp-geo-frame">
                        <img src="${loc.img}" class="hp-geo-img" alt="Magical location illustration">
                        <span class="hp-geo-number">${hpToRoman(geoState.current + 1)}</span>
                    </div>
                    ${answerBlockHTML}
                    <div class="hp-geo-nav">
                        <button class="hp-geo-nav-btn" onclick="hpGeoStep(-1)" ${geoState.current === 0 ? 'disabled' : ''}>\u25C4</button>
                        <div class="hp-geo-dots">${dots}</div>
                        <button class="hp-geo-nav-btn" onclick="hpGeoStep(1)" ${geoState.current === geoLocations.length - 1 ? 'disabled' : ''}>\u25BA</button>
                    </div>
                    ${allDone ? `<p class="hp-geo-complete-note">\u2728 All fourteen locations found \u2014 well mapped, witch! \u2728</p>` : ''}
                </div>
            `;

            if (allDone) {
                const task = tasksData[activeTaskStep];
                const lesson = task.lessons.find(l => l.key === 'geography');
                if (lesson) lesson.done = true;
            }

            document.getElementById('modal-action').innerHTML =
                `<button class="action-btn hp-btn hp-btn-secondary" onclick="hpBackToLessons()">\u2190 Back to Lessons</button>`;
        }

        function hpGeoSubmit() {
            const input = document.getElementById('hpGeoInput');
            if (!input) return;
            const val = input.value.trim();
            if (!val) return;
            const loc = geoLocations[geoState.current];

            if (hpGeoCheckAnswer(val, loc.answers)) {
                geoState.solved[geoState.current] = true;
                geoState.hintShown = false;
                renderGeographyLesson();
            } else {
                const feedback = document.getElementById('hpGeoFeedback');
                if (feedback) {
                    feedback.className = 'hp-geo-feedback hp-geo-feedback-wrong';
                    feedback.innerText = '\u2717 Not quite \u2014 try again.';
                }
                input.focus();
            }
        }

        function hpGeoToggleHint() {
            geoState.hintShown = !geoState.hintShown;
            const el = document.getElementById('hpGeoHintText');
            if (el) el.style.display = geoState.hintShown ? 'block' : 'none';
        }

        function hpGeoStep(delta) {
            const next = geoState.current + delta;
            if (next < 0 || next >= geoLocations.length) return;
            geoState.current = next;
            geoState.hintShown = false;
            renderGeographyLesson();
        }

        function hpGeoGoTo(i) {
            if (i < 0 || i >= geoLocations.length || i === geoState.current) return;
            geoState.current = i;
            geoState.hintShown = false;
            renderGeographyLesson();
        }

        // Временный помощник для теста меню, пока сами уроки не реализованы —
        // отмечает урок пройденным и возвращает к меню. Уберём/заменим настоящей
        // логикой прохождения, когда будем делать каждый урок по отдельности.
        function hpCompleteLesson(key) {
            const task = tasksData[activeTaskStep];
            const lesson = task.lessons.find(l => l.key === key);
            if (lesson) lesson.done = true;
            hpBackToLessons();
        }

        function hpGoToGraduation() {
            hpStage = 'graduation';
            renderHogwartsModal();
        }

        // ===================================================================
        // УРОК "CHARMS" — викторина по заклинаниям. Своя мини-игра поверх общего
        // меню уроков, подставляется вместо стандартной заглушки, когда
        // hpActiveLessonKey === 'charms' (см. renderHogwartsModal, ветка
        // hpStage === 'lesson'). 16 заклинаний, по одному описанию на каждое,
        // 4 варианта ответа (1 верный + 3 случайных отвлекающих из того же
        // списка). Верный ответ — слева появляется Дамблдор и начисляет +10
        // очков факультета; неверный — справа появляется Снейп с едкой репликой.
        // Порядок заклинаний и варианты ответов перемешиваются один раз при
        // старте (hpCharmsReset), чтобы не менялись при повторном рендере одного
        // и того же вопроса (например, после выбора ответа).
        // ===================================================================
        const charmsSpellBank = [
            { name: 'Expecto Patronum', desc: "A radiant guardian, shaped from your happiest memory, bursts from your wand to drive back the coldest, most soul-hungry of dark creatures." },
            { name: 'Accio', desc: "Speak this with a lazy flick of the wrist, and whatever you desire \u2014 however far across the room, or the castle \u2014 comes sailing obediently into your open hand." },
            { name: 'Wingardium Leviosa', desc: "With a precise swish-and-flick (mind the pronunciation), this first-year favourite sends feathers, books, or heavier things drifting gently into the air." },
            { name: 'Lumos', desc: "A small, steady flame of light blooms at your wand's tip, turning even the darkest corridor into somewhere you can actually see." },
            { name: 'Imperio', desc: "Forbidden by every law of magic, this curse slips into another's mind and bends their will entirely to yours, leaving them certain the choice was always their own." },
            { name: 'Protego', desc: "Cast this and an invisible wall of force springs up before you, deflecting hexes and curses back the way they came \u2014 a duelist's first and best defence." },
            { name: 'Stupefy', desc: "A jet of red light streaks from the wand and drops its target instantly, leaving them senseless on the floor until someone thinks to revive them." },
            { name: 'Expelliarmus', desc: "A famous duelist's signature move, this spell sends an opponent's wand spinning out of their grip and straight into yours." },
            { name: 'Alohomora', desc: "Whisper this at a stubborn door and the tumblers click obligingly open \u2014 though the sturdiest enchanted locks have been known to resist it." },
            { name: 'Crucio', desc: "The second of the three curses no decent witch or wizard should ever utter, it floods its victim with agony so total that nothing physical was ever touched." },
            { name: 'Sectumsempra', desc: "Scrawled by a clever but troubled student beside the words 'for enemies,' this curse slices deep, invisible wounds as though by an unseen sword." },
            { name: 'Reparo', desc: "Point your wand at whatever's shattered, cracked, or torn and watch the pieces knit themselves back together as if nothing ever broke." },
            { name: 'Obliviate', desc: "Cast carefully, it plucks a memory clean out of someone's mind, leaving a convenient gap where an inconvenient truth used to be." },
            { name: 'Riddikulus', desc: "The trick isn't strength but imagination: picture whatever haunts you turned laughably absurd, say the word, and watch your worst fear collapse into a joke." },
            { name: 'Avada Kedavra', desc: "There is no shield, no counter-curse, and no coming back from this flash of green light \u2014 the most feared of the three unforgivable curses." },
            { name: 'Petrificus Totalus', desc: "Arms snap to your sides, legs lock together, and you topple over stiff as a board \u2014 conscious the whole time, but utterly unable to move a muscle." }
        ];

        const hpDumbledorePhrases = [
            "Excellent work. Ten points, and a small bow of respect from a very old wizard.",
            "Just as I suspected \u2014 a natural talent for Charms. Ten points, well earned.",
            "Splendid! It is our choices that show what we truly are, and you chose correctly. Ten points.",
            "Ah, precisely right. I do enjoy being right about people. Ten points to you."
        ];
        const hpSnapePhrases = [
            "Wrong. Evidently fame isn't everything.",
            "No. I'd suggest reading ahead \u2014 unless dunderheadedness is simply your natural state.",
            "Incorrect. Try not to be so pleased with your ignorance next time.",
            "Wrong answer. Five points from... well, whatever house lets you in this term."
        ];

        let charmsState = { order: [], optionsByQ: [], current: 0, score: 0, answered: false, selectedIndex: null };

        function hpShuffleArray(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        function hpCharmsBuildOptions(spellIdx) {
            const correct = charmsSpellBank[spellIdx].name;
            const pool = charmsSpellBank.map(s => s.name).filter(n => n !== correct);
            const distractors = hpShuffleArray(pool).slice(0, 3);
            return hpShuffleArray([correct, ...distractors]);
        }

        function hpCharmsReset() {
            const order = hpShuffleArray(charmsSpellBank.map((_, i) => i));
            charmsState = {
                order,
                optionsByQ: order.map(idx => hpCharmsBuildOptions(idx)),
                current: 0,
                score: 0,
                answered: false,
                selectedIndex: null
            };
        }

        function renderCharmsLesson() {
            const task = tasksData[activeTaskStep];
            const house = task.houses.find(h => h.key === hpChosenHouseKey);
            document.getElementById('modalWindow').classList.add('hp-modal-charms');
            document.getElementById('modal-title').innerText = 'Charms';

            const total = charmsSpellBank.length;
            const isLastQuestion = charmsState.current === total - 1;

            if (charmsState.current >= total) {
                // Пройдены все вопросы — экран завершения урока.
                const task2 = tasksData[activeTaskStep];
                const lesson = task2.lessons.find(l => l.key === 'charms');
                if (lesson) lesson.done = true;
                document.getElementById('modal-content').innerHTML = `
                    <div class="hp-charms-complete">
                        <div class="hp-charms-complete-icon">\uD83E\uDE84\u2728</div>
                        <div class="hp-charms-complete-title">Charms, Mastered</div>
                        <p class="hp-charms-complete-text">
                            You answered every spell in the lesson and earned
                            <b>${charmsState.score}</b> points for ${house.name}.
                            The professors are, on the whole, impressed.
                        </p>
                    </div>
                `;
                document.getElementById('modal-action').innerHTML =
                    `<button class="action-btn hp-btn hp-btn-secondary" onclick="hpBackToLessons()">\u2190 Back to Lessons</button>`;
                return;
            }

            const spell = charmsSpellBank[charmsState.order[charmsState.current]];
            const options = charmsState.optionsByQ[charmsState.current];

            const optionsHTML = options.map((opt, i) => {
                let cls = 'hp-charms-opt';
                if (charmsState.answered) {
                    if (opt === spell.name) cls += ' hp-charms-opt-correct';
                    else if (i === charmsState.selectedIndex) cls += ' hp-charms-opt-wrong';
                    else cls += ' hp-charms-opt-dim';
                }
                return `<button class="${cls}" ${charmsState.answered ? 'disabled' : ''} onclick="hpCharmsSelect(${i})">
                            <span class="hp-charms-opt-wand">\uD83E\uDE84</span><span>${opt}</span>
                        </button>`;
            }).join('');

            let reactionHTML = '';
            if (charmsState.answered) {
                const wasCorrect = options[charmsState.selectedIndex] === spell.name;
                if (wasCorrect) {
                    const line = hpDumbledorePhrases[charmsState.current % hpDumbledorePhrases.length];
                    reactionHTML = `
                        <div class="hp-charms-reaction hp-charms-reaction-dumbledore">
                            <div class="hp-charms-avatar hp-charms-avatar-dumbledore">
                                <div class="hp-charms-avatar-icon">\uD83E\uDDD9\u200D\u2642\uFE0F</div>
                                <div class="hp-charms-avatar-name">Dumbledore</div>
                            </div>
                            <div class="hp-charms-bubble hp-charms-bubble-correct">
                                <span class="hp-charms-points-gain">+10 ${house.name} points!</span>
                                ${line}
                            </div>
                        </div>
                    `;
                } else {
                    const line = hpSnapePhrases[charmsState.current % hpSnapePhrases.length];
                    reactionHTML = `
                        <div class="hp-charms-reaction hp-charms-reaction-snape">
                            <div class="hp-charms-avatar hp-charms-avatar-snape">
                                <div class="hp-charms-avatar-icon">\uD83E\uDDD9</div>
                                <div class="hp-charms-avatar-name">Snape</div>
                            </div>
                            <div class="hp-charms-bubble hp-charms-bubble-wrong">
                                <span class="hp-charms-points-gain">The correct spell was ${spell.name}.</span>
                                ${line}
                            </div>
                        </div>
                    `;
                }
            }

            document.getElementById('modal-content').innerHTML = `
                <div class="hp-charms-scene">
                    <div class="hp-charms-topline">
                        <span class="hp-charms-kicker">Which spell is this?</span>
                        <span class="hp-charms-progress">Spell ${charmsState.current + 1} / ${total}
                            <span class="hp-charms-points">${charmsState.score} ${house.name} points earned</span>
                        </span>
                    </div>
                    <div class="hp-charms-card">
                        <div class="hp-charms-card-icon">\uD83D\uDCDC\u2728</div>
                        <p class="hp-charms-desc">${spell.desc}</p>
                    </div>
                    <div class="hp-charms-options">${optionsHTML}</div>
                    ${reactionHTML}
                    ${charmsState.answered ? `
                        <div class="hp-charms-continue-wrap">
                            <button class="hp-charms-continue-btn" onclick="hpCharmsNext()">${isLastQuestion ? 'Finish the lesson \u2794' : 'Next spell \u2794'}</button>
                        </div>
                    ` : ''}
                </div>
            `;

            document.getElementById('modal-action').innerHTML =
                `<button class="action-btn hp-btn hp-btn-secondary" onclick="hpBackToLessons()">\u2190 Back to Lessons</button>`;
        }

        function hpCharmsSelect(i) {
            if (charmsState.answered) return;
            const spell = charmsSpellBank[charmsState.order[charmsState.current]];
            const options = charmsState.optionsByQ[charmsState.current];
            charmsState.answered = true;
            charmsState.selectedIndex = i;
            if (options[i] === spell.name) charmsState.score += 10;
            renderCharmsLesson();
        }

        function hpCharmsNext() {
            charmsState.current++;
            charmsState.answered = false;
            charmsState.selectedIndex = null;
            renderCharmsLesson();
        }

        // ===================================================================
        // УРОК "HISTORICAL FIGURES" — узнавание персонажей по портрету. Своя
        // мини-игра поверх общего меню уроков, подставляется вместо стандартной
        // заглушки, когда hpActiveLessonKey === 'history' (см. renderHogwartsModal,
        // ветка hpStage === 'lesson'). Кабинет истории магии: старые портреты,
        // свечи, потёртая карта вместо камня Хогвартса (класс hp-modal-history в CSS).
        // 25 портретов, по 4 варианта ответа. В отличие от Charms, здесь нет
        // "одной попытки" — неверный вариант просто гаснет и выбывает из игры, а
        // студент пробует снова, пока не угадает; следующий портрет открывается
        // только после верного ответа. Порядок портретов перемешивается один раз
        // при старте (hpHistoryReset), варианты ответа — тоже, и не меняются при
        // повторном рендере одного и того же портрета. Реакции Дамблдора и Снейпа
        // используют ровно те же классы аватара/облачка, что и в Charms, для
        // единого стиля этих двух персонажей по всему сайту.
        // ===================================================================
        const historyCharacters = [
            { id: 'harry',      name: 'Harry Potter',              img: 'history_chars/1.png' },
            { id: 'bellatrix',  name: 'Bellatrix Lestrange',       img: 'history_chars/2.png' },
            { id: 'ron',        name: 'Ron Weasley',               img: 'history_chars/3.png' },
            { id: 'umbridge',   name: 'Dolores Umbridge',          img: 'history_chars/4.png' },
            { id: 'dumbledore', name: 'Albus Dumbledore',          img: 'history_chars/5.png' },
            { id: 'voldemort',  name: 'Lord Voldemort',            img: 'history_chars/6.png' },
            { id: 'snape',      name: 'Severus Snape',             img: 'history_chars/7.png' },
            { id: 'mcgonagall', name: 'Minerva McGonagall',        img: 'history_chars/8.png' },
            { id: 'hagrid',     name: 'Rubeus Hagrid',             img: 'history_chars/9.png' },
            { id: 'hedwig',     name: 'Hedwig',                    img: 'history_chars/10.png' },
            { id: 'twins',      name: 'The Weasley Twins',         img: 'history_chars/11.png' },
            { id: 'moody',      name: 'Alastor "Mad-Eye" Moody',   img: 'history_chars/12.png' },
            { id: 'lupin',      name: 'Remus Lupin',               img: 'history_chars/13.png' },
            { id: 'cedric',     name: 'Cedric Diggory',            img: 'history_chars/14.png' },
            { id: 'luna',       name: 'Luna Lovegood',             img: 'history_chars/15.png' },
            { id: 'ginny',      name: 'Ginny Weasley',             img: 'history_chars/16.png' },
            { id: 'cho',        name: 'Cho Chang',                 img: 'history_chars/17.png' },
            { id: 'trelawney',  name: 'Sybill Trelawney',          img: 'history_chars/18.png' },
            { id: 'lockhart',   name: 'Gilderoy Lockhart',         img: 'history_chars/19.png' },
            { id: 'draco',      name: 'Draco Malfoy',              img: 'history_chars/20.png' },
            { id: 'sirius',     name: 'Sirius Black',              img: 'history_chars/21.png' },
            { id: 'hermione',   name: 'Hermione Granger',          img: 'history_chars/22.png' },
            { id: 'neville',    name: 'Neville Longbottom',        img: 'history_chars/23.png' },
            { id: 'kingsley',   name: 'Kingsley Shacklebolt',      img: 'history_chars/24.png' },
            { id: 'dobby',      name: 'Dobby',                     img: 'history_chars/25.png' }
        ];

        const hpHistoryDumbledorePhrases = [
            "Just so. History remembers faces as well as deeds \u2014 ten points for remembering both.",
            "Correct. It is a rare gift, to look at a portrait and see the person truly. Ten points.",
            "Well recognised. I find I am rather fond of this particular face myself. Ten points.",
            "Quite right. Ten points \u2014 the frame seemed pleased to be identified correctly."
        ];
        const hpHistorySnapePhrases = [
            "Wrong. I'd have thought a face was hard to forget \u2014 evidently not for you.",
            "No. Do try looking at the portrait itself, rather than guessing at random.",
            "Incorrect. History, like Potions, punishes carelessness.",
            "Wrong again. The portrait is, if anything, unimpressed."
        ];

        let historyState = { order: [], optionsByQ: [], wrongByQ: [], solved: [], current: 0, score: 0, lastResult: null };

        function hpHistoryBuildOptions(charIdx) {
            const correct = historyCharacters[charIdx].name;
            const pool = historyCharacters.map(c => c.name).filter(n => n !== correct);
            const distractors = hpShuffleArray(pool).slice(0, 3);
            return hpShuffleArray([correct, ...distractors]);
        }

        function hpHistoryReset() {
            const order = hpShuffleArray(historyCharacters.map((_, i) => i));
            historyState = {
                order,
                optionsByQ: order.map(idx => hpHistoryBuildOptions(idx)),
                wrongByQ: order.map(() => []),
                solved: order.map(() => false),
                current: 0,
                score: 0,
                lastResult: null
            };
        }

        function renderHistoryLesson() {
            const task = tasksData[activeTaskStep];
            const house = task.houses.find(h => h.key === hpChosenHouseKey);
            document.getElementById('modalWindow').classList.add('hp-modal-history');
            document.getElementById('modal-title').innerText = 'History of Magic';

            const total = historyCharacters.length;
            const solvedCount = historyState.solved.filter(Boolean).length;
            const allDone = solvedCount === total;

            const charIdx = historyState.order[historyState.current];
            const char = historyCharacters[charIdx];
            const options = historyState.optionsByQ[historyState.current];
            const wrongTried = historyState.wrongByQ[historyState.current];
            const isSolved = historyState.solved[historyState.current];
            const isLastQuestion = historyState.current === total - 1;

            const optionsHTML = options.map((opt, i) => {
                let cls = 'hp-history-opt';
                let disabled = false;
                if (isSolved) {
                    disabled = true;
                    if (opt === char.name) cls += ' hp-history-opt-correct';
                    else if (wrongTried.includes(i)) cls += ' hp-history-opt-wrong';
                    else cls += ' hp-history-opt-dim';
                } else if (wrongTried.includes(i)) {
                    disabled = true;
                    cls += ' hp-history-opt-wrong';
                }
                return `<button class="${cls}" ${disabled ? 'disabled' : ''} onclick="hpHistorySelect(${i})">
                            <span class="hp-history-opt-quill">\uD83E\uDEB6</span><span>${opt}</span>
                        </button>`;
            }).join('');

            const dots = historyState.order.map((idx, pos) => `
                <span class="hp-history-dot${historyState.solved[pos] ? ' hp-history-dot-solved' : ''}${pos === historyState.current ? ' hp-history-dot-active' : ''}"
                      onclick="hpHistoryGoTo(${pos})"
                      title="${historyState.solved[pos] ? historyCharacters[idx].name : 'Portrait ' + (pos + 1)}">${historyState.solved[pos] ? '\u2713' : (pos + 1)}</span>
            `).join('');

            let reactionHTML = '';
            if (historyState.lastResult === 'correct') {
                const line = hpHistoryDumbledorePhrases[historyState.current % hpHistoryDumbledorePhrases.length];
                reactionHTML = `
                    <div class="hp-charms-reaction hp-charms-reaction-dumbledore">
                        <div class="hp-charms-avatar hp-charms-avatar-dumbledore">
                            <div class="hp-charms-avatar-icon">\uD83E\uDDD9\u200D\u2642\uFE0F</div>
                            <div class="hp-charms-avatar-name">Dumbledore</div>
                        </div>
                        <div class="hp-charms-bubble hp-charms-bubble-correct">
                            <span class="hp-charms-points-gain">+10 ${house.name} points!</span>
                            ${line}
                        </div>
                    </div>
                `;
            } else if (historyState.lastResult === 'wrong') {
                const line = hpHistorySnapePhrases[wrongTried.length % hpHistorySnapePhrases.length];
                reactionHTML = `
                    <div class="hp-charms-reaction hp-charms-reaction-snape">
                        <div class="hp-charms-avatar hp-charms-avatar-snape">
                            <div class="hp-charms-avatar-icon">\uD83E\uDDD9</div>
                            <div class="hp-charms-avatar-name">Snape</div>
                        </div>
                        <div class="hp-charms-bubble hp-charms-bubble-wrong">
                            <span class="hp-charms-points-gain">Not this one. Try again.</span>
                            ${line}
                        </div>
                    </div>
                `;
            }

            document.getElementById('modal-content').innerHTML = `
                <div class="hp-history-scene">
                    <div class="hp-history-wall-frame hp-history-wall-frame-1">\uD83C\uDF93</div>
                    <div class="hp-history-wall-frame hp-history-wall-frame-2">\uD83D\uDCDC</div>
                    <span class="hp-history-candle hp-history-candle-left">\uD83D\uDD6F\uFE0F</span>
                    <span class="hp-history-candle hp-history-candle-right">\uD83D\uDD6F\uFE0F</span>
                    <div class="hp-history-topline">
                        <span class="hp-history-kicker">Who is this witch or wizard?</span>
                        <span class="hp-history-progress">Portrait ${historyState.current + 1} / ${total}
                            <span class="hp-history-points">${historyState.score} ${house.name} points earned</span>
                        </span>
                    </div>
                    <div class="hp-history-portrait-wrap">
                        <div class="hp-history-frame">
                            <img src="${char.img}" class="hp-history-img" alt="A portrait from the History of Magic archive">
                        </div>
                        <div class="hp-history-nameplate">${isSolved ? char.name : '\u2022 \u2022 \u2022'}</div>
                    </div>
                    <div class="hp-history-options">${optionsHTML}</div>
                    ${reactionHTML}
                    ${isSolved ? `
                        <div class="hp-charms-continue-wrap">
                            <button class="hp-charms-continue-btn" onclick="hpHistoryNext()">${isLastQuestion ? 'Finish the lesson \u2794' : 'Next portrait \u2794'}</button>
                        </div>
                    ` : ''}
                    <div class="hp-history-dots">${dots}</div>
                    ${allDone ? `<p class="hp-history-complete-note">\u2728 All twenty-five portraits identified \u2014 a true student of history! \u2728</p>` : ''}
                </div>
            `;

            document.getElementById('modal-action').innerHTML =
                `<button class="action-btn hp-btn hp-btn-secondary" onclick="hpBackToLessons()">\u2190 Back to Lessons</button>`;
        }

        function hpHistorySelect(i) {
            const charIdx = historyState.order[historyState.current];
            const char = historyCharacters[charIdx];
            const options = historyState.optionsByQ[historyState.current];
            if (historyState.solved[historyState.current]) return;
            if (historyState.wrongByQ[historyState.current].includes(i)) return;

            if (options[i] === char.name) {
                historyState.solved[historyState.current] = true;
                historyState.score += 10;
                historyState.lastResult = 'correct';
            } else {
                historyState.wrongByQ[historyState.current].push(i);
                historyState.lastResult = 'wrong';
            }
            renderHistoryLesson();
        }

        function hpHistoryNext() {
            const total = historyCharacters.length;
            if (historyState.current >= total - 1) {
                const task = tasksData[activeTaskStep];
                const lesson = task.lessons.find(l => l.key === 'history');
                if (lesson) lesson.done = true;
                hpBackToLessons();
                return;
            }
            historyState.current++;
            historyState.lastResult = null;
            renderHistoryLesson();
        }

        function hpHistoryGoTo(pos) {
            const total = historyCharacters.length;
            if (pos < 0 || pos >= total || pos === historyState.current) return;
            historyState.current = pos;
            historyState.lastResult = null;
            renderHistoryLesson();
        }

        // ===================================================================
        // УРОК "MAGICAL ARTIFACTS" — узнавание артефакта по вырезанной иконке.
        // Своя мини-игра поверх общего меню уроков, подставляется вместо стандартной
        // заглушки, когда hpActiveLessonKey === 'artifacts' (см. renderHogwartsModal,
        // ветка hpStage === 'lesson'). Механика 1-в-1 как в History: 4 варианта ответа,
        // неверный вариант гаснет и выбывает, следующий артефакт открывается только
        // после верного ответа. Оформление — "Комната Наград" (тёмный стеклянный
        // стенд-витрина вместо портретной рамы, класс hp-modal-artifacts в CSS).
        // Реакции Дамблдора/Снейпа переиспользуют те же классы .hp-charms-avatar/
        // .hp-charms-bubble, что Charms и History, для единого стиля персонажей.
        // ===================================================================
        const artifactsBank = [
            { id: 'sword',        name: "Sword of Godric Gryffindor",   img: 'Icons_artifacts/1.png',
              answers: ['sword of godric gryffindor', 'godric gryffindors sword', 'gryffindors sword', 'sword of gryffindor'] },
            { id: 'elderwand',    name: 'The Elder Wand',                img: 'Icons_artifacts/2.png',
              answers: ['elder wand', 'the elder wand', 'deathstick', 'the deathstick', 'wand of destiny'] },
            { id: 'hufflecup',    name: "Hufflepuff's Cup",              img: 'Icons_artifacts/3.png',
              answers: ['hufflepuffs cup', 'cup of hufflepuff', 'helga hufflepuffs cup'] },
            { id: 'dobbysock',    name: "Dobby's Sock",                  img: 'Icons_artifacts/4.png',
              answers: ['dobbys sock', 'the sock', 'sock'] },
            { id: 'locket',       name: "Slytherin's Locket",            img: 'Icons_artifacts/5.png',
              answers: ['slytherins locket', 'salazar slytherins locket', 'the locket', 'locket'] },
            { id: 'diadem',       name: "Ravenclaw's Diadem",            img: 'Icons_artifacts/6.png',
              answers: ['ravenclaws diadem', 'diadem of ravenclaw', 'lost diadem', 'lost diadem of ravenclaw', 'diadem'] },
            { id: 'gauntring',    name: 'The Gaunt Ring',                img: 'Icons_artifacts/7.png',
              answers: ['gaunt ring', 'the gaunt ring', 'marvolo gaunts ring', 'gaunts ring'] },
            { id: 'diary',        name: "Riddle's Diary",                img: 'Icons_artifacts/8.png',
              answers: ['riddles diary', 'tom riddles diary', 'the diary', 'diary'] },
            { id: 'triwizard',    name: 'Triwizard Tournament Cup',      img: 'Icons_artifacts/9.png',
              answers: ['triwizard tournament cup', 'triwizard cup', 'the triwizard cup'] },
            { id: 'cloak',        name: 'The Invisibility Cloak',        img: 'Icons_artifacts/10.png',
              answers: ['invisibility cloak', 'the invisibility cloak', 'cloak of invisibility'] },
            { id: 'resstone',     name: 'The Resurrection Stone',        img: 'Icons_artifacts/11.png',
              answers: ['resurrection stone', 'the resurrection stone'] },
            { id: 'snitch',       name: 'The Golden Snitch',             img: 'Icons_artifacts/12.png',
              answers: ['golden snitch', 'the golden snitch', 'snitch'] },
            { id: 'philstone',    name: "The Philosopher's Stone",       img: 'Icons_artifacts/13.png',
              answers: ['philosophers stone', 'the philosophers stone', 'sorcerers stone', 'the sorcerers stone'] },
            { id: 'timeturner',   name: 'The Time-Turner',               img: 'Icons_artifacts/14.png',
              answers: ['time turner', 'the time turner', 'time-turner'] },
            { id: 'felix',        name: 'Felix Felicis',                 img: 'Icons_artifacts/15.png',
              answers: ['felix felicis', 'liquid luck'] },
            { id: 'maraudermap',  name: "The Marauder's Map",            img: 'Icons_artifacts/16.png',
              answers: ['marauders map', 'the marauders map'] },
            { id: 'pensieve',     name: 'The Pensieve',                  img: 'Icons_artifacts/17.png',
              answers: ['pensieve', 'the pensieve'] },
            { id: 'gobletoffire', name: 'The Goblet of Fire',            img: 'Icons_artifacts/18.png',
              answers: ['goblet of fire', 'the goblet of fire'] },
            { id: 'sortinghat',   name: 'The Sorting Hat',                img: 'Icons_artifacts/19.png',
              answers: ['sorting hat', 'the sorting hat'] },
            { id: 'erised',       name: 'The Mirror of Erised',          img: 'Icons_artifacts/20.png',
              answers: ['mirror of erised', 'the mirror of erised'] }
        ];

        const hpArtifactsDumbledorePhrases = [
            "Quite right. Every object in this room has a story \u2014 I'm glad you know this one. Ten points.",
            "Correct. It takes a keen eye to know magic by sight alone. Ten points to you.",
            "Just so. Some artifacts are best admired from a respectful distance \u2014 well identified. Ten points.",
            "Precisely. I confess I'm fond of this particular case myself. Ten points, well earned."
        ];
        const hpArtifactsSnapePhrases = [
            "Wrong. I'd expect a first-year to know that much.",
            "No. Perhaps spend less time daydreaming and more time reading.",
            "Incorrect. Not everything gleaming is what you think it is \u2014 clearly.",
            "Wrong again. Do try to look properly before guessing."
        ];

        let artifactsState = { order: [], wrongCount: [], solved: [], current: 0, score: 0, lastResult: null };

        function hpArtifactsReset() {
            const order = hpShuffleArray(artifactsBank.map((_, i) => i));
            artifactsState = {
                order,
                wrongCount: order.map(() => 0),
                solved: order.map(() => false),
                current: 0,
                score: 0,
                lastResult: null
            };
        }

        function renderArtifactsLesson() {
            const task = tasksData[activeTaskStep];
            const house = task.houses.find(h => h.key === hpChosenHouseKey);
            document.getElementById('modalWindow').classList.add('hp-modal-artifacts');
            document.getElementById('modal-title').innerText = 'Magical Artifacts';

            const total = artifactsBank.length;
            const solvedCount = artifactsState.solved.filter(Boolean).length;
            const allDone = solvedCount === total;

            const artIdx = artifactsState.order[artifactsState.current];
            const art = artifactsBank[artIdx];
            const isSolved = artifactsState.solved[artifactsState.current];
            const wrongCount = artifactsState.wrongCount[artifactsState.current];
            const isLastQuestion = artifactsState.current === total - 1;

            const answerBlockHTML = isSolved ? '' : `
                <div class="hp-artifact-answer-row">
                    <input type="text" id="hpArtifactInput" class="hp-artifact-input" placeholder="Name this artifact\u2026" autocomplete="off"
                           onkeydown="if (event.key === 'Enter') { hpArtifactsSubmit(); }">
                    <button class="hp-artifact-submit-btn" onclick="hpArtifactsSubmit()">Reveal</button>
                </div>
            `;

            const dots = artifactsState.order.map((idx, pos) => `
                <span class="hp-artifact-dot${artifactsState.solved[pos] ? ' hp-artifact-dot-solved' : ''}${pos === artifactsState.current ? ' hp-artifact-dot-active' : ''}"
                      onclick="hpArtifactsGoTo(${pos})"
                      title="${artifactsState.solved[pos] ? artifactsBank[idx].name : 'Artifact ' + (pos + 1)}">${artifactsState.solved[pos] ? '\u2713' : (pos + 1)}</span>
            `).join('');

            let reactionHTML = '';
            if (artifactsState.lastResult === 'correct') {
                const line = hpArtifactsDumbledorePhrases[artifactsState.current % hpArtifactsDumbledorePhrases.length];
                reactionHTML = `
                    <div class="hp-charms-reaction hp-charms-reaction-dumbledore">
                        <div class="hp-charms-avatar hp-charms-avatar-dumbledore">
                            <div class="hp-charms-avatar-icon">\uD83E\uDDD9\u200D\u2642\uFE0F</div>
                            <div class="hp-charms-avatar-name">Dumbledore</div>
                        </div>
                        <div class="hp-charms-bubble hp-charms-bubble-correct">
                            <span class="hp-charms-points-gain">+10 ${house.name} points!</span>
                            ${line}
                        </div>
                    </div>
                `;
            } else if (artifactsState.lastResult === 'wrong') {
                const line = hpArtifactsSnapePhrases[wrongCount % hpArtifactsSnapePhrases.length];
                reactionHTML = `
                    <div class="hp-charms-reaction hp-charms-reaction-snape">
                        <div class="hp-charms-avatar hp-charms-avatar-snape">
                            <div class="hp-charms-avatar-icon">\uD83E\uDDD9</div>
                            <div class="hp-charms-avatar-name">Snape</div>
                        </div>
                        <div class="hp-charms-bubble hp-charms-bubble-wrong">
                            <span class="hp-charms-points-gain">Not this one. Try again.</span>
                            ${line}
                        </div>
                    </div>
                `;
            }

            document.getElementById('modal-content').innerHTML = `
                <div class="hp-artifact-scene">
                    <div class="hp-artifact-topline">
                        <span class="hp-artifact-kicker">What is this artifact?</span>
                        <span class="hp-artifact-progress">Object ${artifactsState.current + 1} / ${total}
                            <span class="hp-artifact-points">${artifactsState.score} ${house.name} points earned</span>
                        </span>
                    </div>
                    <div class="hp-artifact-case-wrap">
                        <div class="hp-artifact-case">
                            <img src="${art.img}" class="hp-artifact-img" alt="A magical artifact on display">
                        </div>
                        <div class="hp-artifact-nameplate">${isSolved ? art.name : '\u2022 \u2022 \u2022'}</div>
                    </div>
                    ${answerBlockHTML}
                    ${reactionHTML}
                    ${isSolved ? `
                        <div class="hp-charms-continue-wrap">
                            <button class="hp-charms-continue-btn" onclick="hpArtifactsNext()">${isLastQuestion ? 'Finish the lesson \u2794' : 'Next artifact \u2794'}</button>
                        </div>
                    ` : ''}
                    <div class="hp-artifact-dots">${dots}</div>
                    ${allDone ? `<p class="hp-artifact-complete-note">\u2728 All twenty artifacts identified \u2014 the Room of Requirement holds no secrets from you! \u2728</p>` : ''}
                </div>
            `;

            document.getElementById('modal-action').innerHTML =
                `<button class="action-btn hp-btn hp-btn-secondary" onclick="hpBackToLessons()">\u2190 Back to Lessons</button>`;
        }

        function hpArtifactsSubmit() {
            const input = document.getElementById('hpArtifactInput');
            if (!input) return;
            const val = input.value.trim();
            if (!val) return;
            const artIdx = artifactsState.order[artifactsState.current];
            const art = artifactsBank[artIdx];
            if (artifactsState.solved[artifactsState.current]) return;

            if (hpGeoCheckAnswer(val, art.answers)) {
                artifactsState.solved[artifactsState.current] = true;
                artifactsState.score += 10;
                artifactsState.lastResult = 'correct';
                renderArtifactsLesson();
            } else {
                artifactsState.wrongCount[artifactsState.current]++;
                artifactsState.lastResult = 'wrong';
                renderArtifactsLesson();
                const freshInput = document.getElementById('hpArtifactInput');
                if (freshInput) freshInput.focus();
            }
        }

        function hpArtifactsNext() {
            const total = artifactsBank.length;
            if (artifactsState.current >= total - 1) {
                const task = tasksData[activeTaskStep];
                const lesson = task.lessons.find(l => l.key === 'artifacts');
                if (lesson) lesson.done = true;
                hpBackToLessons();
                return;
            }
            artifactsState.current++;
            artifactsState.lastResult = null;
            renderArtifactsLesson();
        }

        function hpArtifactsGoTo(pos) {
            const total = artifactsBank.length;
            if (pos < 0 || pos >= total || pos === artifactsState.current) return;
            artifactsState.current = pos;
            artifactsState.lastResult = null;
            renderArtifactsLesson();
        }

        // ===================================================================
        // ДВИЖОК: ТЕТРИС (тип 'tetris', локация 20 — Puerto Peñasco)
        // Классический Тетрис прямо внутри общей .modal-window (своя тема .theme-tetris —
        // ретро неоновая аркада, см. styles.css). Условие открытия следующей локации —
        // не решённая головоломка, а набранный счёт за раунд (task.levels[i].targetScore,
        // см. tasksData[20]) — раундов теперь 3, каждый следующий сложнее предыдущего.
        // Начисление очков — классическая система:
        //   1 линия = 100×level, 2 = 300×level, 3 = 500×level, 4 (тетрис) = 800×level,
        //   мягкий дроп (ArrowDown / кнопка SOFT) = +1 очко за каждую пройденную клетку.
        // 7 фигур раздаются "мешком" (bag-randomizer, hpShuffleArray) — без длинных серий
        // одной и той же фигуры подряд. Скорость падения растёт вместе с level (level
        // растёт каждые 3 очищенные линии). Управление — клавиатура (← → ↓ ↑/Z SPACE) и
        // крупные неоновые тач-кнопки под полем (см. tetrisTouch*). Game Over не обнуляет
        // прогресс по сайту — просто предлагает пересыграть (tetrisBeginRound()).
        // ===================================================================
        const TETRIS_COLS = 10;
        const TETRIS_ROWS = 20;

        // Все 4 состояния поворота для каждой фигуры — координаты [row, col] внутри
        // условного бокса 4×4. Не полноценный SRS с кик-таблицами, а упрощённая, но
        // рабочая система поворота с базовым wall-kick (см. tetrisRotate).
        const TETROMINOES = {
            I: { color: '#00f0ff', rotations: [
                [[1,0],[1,1],[1,2],[1,3]],
                [[0,2],[1,2],[2,2],[3,2]],
                [[2,0],[2,1],[2,2],[2,3]],
                [[0,1],[1,1],[2,1],[3,1]]
            ]},
            O: { color: '#ffe600', rotations: [
                [[0,1],[0,2],[1,1],[1,2]],
                [[0,1],[0,2],[1,1],[1,2]],
                [[0,1],[0,2],[1,1],[1,2]],
                [[0,1],[0,2],[1,1],[1,2]]
            ]},
            T: { color: '#b026ff', rotations: [
                [[0,1],[1,0],[1,1],[1,2]],
                [[0,1],[1,1],[1,2],[2,1]],
                [[1,0],[1,1],[1,2],[2,1]],
                [[0,1],[1,0],[1,1],[2,1]]
            ]},
            S: { color: '#39ff14', rotations: [
                [[0,1],[0,2],[1,0],[1,1]],
                [[0,1],[1,1],[1,2],[2,2]],
                [[0,1],[0,2],[1,0],[1,1]],
                [[0,1],[1,1],[1,2],[2,2]]
            ]},
            Z: { color: '#ff2965', rotations: [
                [[0,0],[0,1],[1,1],[1,2]],
                [[0,2],[1,1],[1,2],[2,1]],
                [[0,0],[0,1],[1,1],[1,2]],
                [[0,2],[1,1],[1,2],[2,1]]
            ]},
            J: { color: '#2979ff', rotations: [
                [[0,0],[1,0],[1,1],[1,2]],
                [[0,1],[0,2],[1,1],[2,1]],
                [[1,0],[1,1],[1,2],[2,2]],
                [[0,1],[1,1],[2,0],[2,1]]
            ]},
            L: { color: '#ff9500', rotations: [
                [[0,2],[1,0],[1,1],[1,2]],
                [[0,1],[1,1],[2,1],[2,2]],
                [[1,0],[1,1],[1,2],[2,0]],
                [[0,0],[0,1],[1,1],[2,1]]
            ]}
        };

        function startTetrisGame() {
            const task = tasksData[activeTaskStep];
            const saved = loadTaskProgress(activeTaskStep, 'tetris');
            trLevelIndex = (saved && typeof saved.trLevelIndex === 'number') ? saved.trLevelIndex : 0;
            document.getElementById('modal-title').innerText = task.modalTitle;
            renderTetrisIntro();
            document.getElementById('modalOverlay').classList.add('active');
        }

        function renderTetrisIntro() {
            const task = tasksData[activeTaskStep];
            const level = task.levels[trLevelIndex];
            const totalLevels = task.levels.length;
            document.getElementById('modal-content').innerHTML = `
                <div class="tetris-intro">
                    <div class="tetris-intro-icon">\uD83D\uDC7E</div>
                    <p class="tetris-intro-text">${task.intro}</p>
                    <div class="tetris-intro-rules">
                        <div>\u2190 \u2192 move \u00B7 \u2193 soft drop (+1 pt / cell) \u00B7 \u2191 or Z rotate \u00B7 SPACE hard drop</div>
                        <div>1 line = 100\u00D7level \u00B7 2 lines = 300\u00D7level \u00B7 3 lines = 500\u00D7level \u00B7 TETRIS = 800\u00D7level</div>
                        <div>\uD83C\uDFAE ${level.name} (${trLevelIndex + 1}/${totalLevels})</div>
                        <div>\uD83C\uDFC6 Reach ${level.targetScore} points to clear this round</div>
                    </div>
                </div>
            `;
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="tetrisBeginRound()">\uD83D\uDD79\uFE0F Insert Coin \u2014 Start ➔</button>`;
        }

        function tetrisBeginRound() {
            const task = tasksData[activeTaskStep];
            const level = task.levels[trLevelIndex];
            const startLevel = level.startLevel || 1;
            tetrisState = {
                grid: Array.from({ length: TETRIS_ROWS }, () => new Array(TETRIS_COLS).fill(null)),
                bag: hpShuffleArray(Object.keys(TETROMINOES)),
                current: null,
                next: null,
                score: 0,
                level: startLevel,
                levelOffset: startLevel - 1,
                linesCleared: 0,
                targetScore: level.targetScore || 1800,
                gameOver: false,
                won: false
            };
            tetrisState.next = tetrisState.bag.shift();
            tetrisSpawnPiece();

            document.removeEventListener('keydown', tetrisKeyHandler);
            document.addEventListener('keydown', tetrisKeyHandler);

            document.getElementById('modal-action').innerHTML = `<button class="action-btn secondary-btn" style="width:auto; padding:6px 14px;" onclick="tetrisBeginRound()">\uD83D\uDD04 Restart</button>`;
            document.getElementById('errorMsg').style.display = 'none';

            tetrisRestartTimer();
            renderTetrisModal();
        }

        function tetrisSpawnPiece() {
            const type = tetrisState.next;
            if (tetrisState.bag.length === 0) tetrisState.bag = hpShuffleArray(Object.keys(TETROMINOES));
            tetrisState.next = tetrisState.bag.shift();
            tetrisState.current = { type, rotation: 0, row: 0, col: 3, color: TETROMINOES[type].color };
        }

        function tetrisGetCells(piece) {
            return TETROMINOES[piece.type].rotations[piece.rotation].map(([r, c]) => [piece.row + r, piece.col + c]);
        }

        function tetrisCollides(cells) {
            return cells.some(([r, c]) => {
                if (c < 0 || c >= TETRIS_COLS || r >= TETRIS_ROWS) return true;
                if (r < 0) return false; // ещё выше поля — разрешаем (используется при спавне/повороте)
                return tetrisState.grid[r][c] !== null;
            });
        }

        function tetrisTryMove(dr, dc) {
            const piece = tetrisState.current;
            const trial = { ...piece, row: piece.row + dr, col: piece.col + dc };
            if (tetrisCollides(tetrisGetCells(trial))) return false;
            piece.row = trial.row;
            piece.col = trial.col;
            return true;
        }

        function tetrisRotate() {
            if (!tetrisState || tetrisState.gameOver || tetrisState.won) return;
            const piece = tetrisState.current;
            const newRotation = (piece.rotation + 1) % 4;
            const kicks = [0, -1, 1, -2, 2]; // базовый wall-kick: пробуем сдвиг влево/вправо, если поворот на месте не влезает
            for (const dx of kicks) {
                const trial = { ...piece, rotation: newRotation, col: piece.col + dx };
                if (!tetrisCollides(tetrisGetCells(trial))) {
                    piece.rotation = newRotation;
                    piece.col = trial.col;
                    renderTetrisModal();
                    return;
                }
            }
        }

        function tetrisComputeLevel(linesTotal) {
            const offset = (tetrisState && tetrisState.levelOffset) || 0;
            return Math.floor(linesTotal / 3) + 1 + offset;
        }

        function tetrisComputeSpeed(level) {
            return Math.max(120, 800 - (level - 1) * 65);
        }

        function tetrisRestartTimer() {
            if (tetrisDropTimerId) clearInterval(tetrisDropTimerId);
            tetrisDropTimerId = setInterval(tetrisTick, tetrisComputeSpeed(tetrisState.level));
        }

        function tetrisTick() {
            if (!tetrisState || tetrisState.gameOver || tetrisState.won) return;
            if (tetrisTryMove(1, 0)) {
                renderTetrisModal();
            } else {
                tetrisLockPiece();
            }
        }

        function tetrisSoftDropStep() {
            if (!tetrisState || tetrisState.gameOver || tetrisState.won) return;
            if (tetrisTryMove(1, 0)) {
                tetrisState.score += 1; // мягкий дроп — 1 очко за клетку
                renderTetrisModal();
            } else {
                tetrisLockPiece();
            }
        }

        function tetrisHardDrop() {
            if (!tetrisState || tetrisState.gameOver || tetrisState.won) return;
            while (tetrisTryMove(1, 0)) { /* падаем до упора */ }
            tetrisLockPiece();
        }

        function tetrisClearLines() {
            let cleared = 0;
            for (let r = TETRIS_ROWS - 1; r >= 0; r--) {
                if (tetrisState.grid[r].every(cell => cell !== null)) {
                    tetrisState.grid.splice(r, 1);
                    tetrisState.grid.unshift(new Array(TETRIS_COLS).fill(null));
                    cleared++;
                    r++; // после сдвига вниз проверяем ту же строку заново
                }
            }
            return cleared;
        }

        function tetrisLockPiece() {
            tetrisGetCells(tetrisState.current).forEach(([r, c]) => {
                if (r >= 0 && r < TETRIS_ROWS && c >= 0 && c < TETRIS_COLS) {
                    tetrisState.grid[r][c] = tetrisState.current.color;
                }
            });

            const clearedCount = tetrisClearLines();
            if (clearedCount > 0) {
                const pointsTable = [0, 100, 300, 500, 800];
                tetrisState.score += pointsTable[clearedCount] * tetrisState.level;
                tetrisState.linesCleared += clearedCount;
                tetrisState.level = tetrisComputeLevel(tetrisState.linesCleared);
            }

            if (tetrisState.score >= tetrisState.targetScore) {
                tetrisWin();
                return;
            }

            tetrisSpawnPiece();
            if (tetrisCollides(tetrisGetCells(tetrisState.current))) {
                tetrisGameOver();
                return;
            }

            tetrisRestartTimer();
            renderTetrisModal();
        }

        function tetrisWin() {
            const task = tasksData[activeTaskStep];
            const isLastLevel = (trLevelIndex === task.levels.length - 1);
            tetrisState.won = true;
            clearInterval(tetrisDropTimerId);
            tetrisDropTimerId = null;
            document.removeEventListener('keydown', tetrisKeyHandler);
            renderTetrisModal();
            const banner = document.getElementById('tetrisMessageBanner');
            if (isLastLevel) {
                if (banner) banner.innerHTML = `<div class="tetris-win-msg">\uD83C\uDF89 HIGH SCORE! ${tetrisState.score} points \u2014 all ${task.levels.length} rounds cleared! The road north is yours!</div>`;
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="advanceStep(activeTaskStep)">\uD83C\uDFC1 Complete the Stage ➔</button>`;
            } else {
                const nextLevel = task.levels[trLevelIndex + 1];
                if (banner) banner.innerHTML = `<div class="tetris-win-msg">\uD83C\uDF89 ${task.levels[trLevelIndex].name} cleared with ${tetrisState.score} points! Next up: ${nextLevel.name}.</div>`;
                document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="trNextRound()">➡\uFE0F Next Round</button>`;
            }
        }

        function trNextRound() {
            trLevelIndex++;
            renderTetrisIntro();
        }

        function tetrisGameOver() {
            tetrisState.gameOver = true;
            clearInterval(tetrisDropTimerId);
            tetrisDropTimerId = null;
            document.removeEventListener('keydown', tetrisKeyHandler);
            renderTetrisModal();
            const banner = document.getElementById('tetrisMessageBanner');
            if (banner) banner.innerHTML = `<div class="tetris-gameover-msg">\uD83D\uDC80 GAME OVER \u2014 ${tetrisState.score} / ${tetrisState.targetScore} points</div>`;
            document.getElementById('modal-action').innerHTML = `<button class="action-btn" onclick="tetrisBeginRound()">\uD83D\uDD04 Try Again</button>`;
        }

        function tetrisKeyHandler(e) {
            if (!tetrisState || tetrisState.gameOver || tetrisState.won) return;
            if (!document.getElementById('modalOverlay').classList.contains('active')) return;
            if (!document.getElementById('tetrisBoard')) return;

            if (e.key === 'ArrowLeft') { e.preventDefault(); if (tetrisTryMove(0, -1)) renderTetrisModal(); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); if (tetrisTryMove(0, 1)) renderTetrisModal(); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); tetrisSoftDropStep(); }
            else if (e.key === 'ArrowUp' || e.key === 'z' || e.key === 'Z') { e.preventDefault(); tetrisRotate(); }
            else if (e.key === ' ') { e.preventDefault(); tetrisHardDrop(); }
        }

        // Тач-кнопки под полем — те же действия, что и клавиатура, для телефона/планшета.
        function tetrisTouchLeft() { if (!tetrisState || tetrisState.gameOver || tetrisState.won) return; if (tetrisTryMove(0, -1)) renderTetrisModal(); }
        function tetrisTouchRight() { if (!tetrisState || tetrisState.gameOver || tetrisState.won) return; if (tetrisTryMove(0, 1)) renderTetrisModal(); }
        function tetrisTouchRotate() { tetrisRotate(); }
        function tetrisTouchSoftDrop() { tetrisSoftDropStep(); }
        function tetrisTouchHardDrop() { tetrisHardDrop(); }

        function tetrisBuildDisplayGrid() {
            const disp = tetrisState.grid.map(row => row.slice());
            const piece = tetrisState.current;
            if (piece) {
                tetrisGetCells(piece).forEach(([r, c]) => {
                    if (r >= 0 && r < TETRIS_ROWS && c >= 0 && c < TETRIS_COLS) disp[r][c] = piece.color;
                });
            }
            return disp;
        }

        function renderTetrisModal() {
            const task = tasksData[activeTaskStep];
            const level = task.levels[trLevelIndex];
            document.getElementById('modal-title').innerText = `${task.modalTitle} — ${level.name} (${trLevelIndex + 1}/${task.levels.length})`;

            const disp = tetrisBuildDisplayGrid();
            let cellsHtml = '';
            disp.forEach(row => {
                row.forEach(color => {
                    cellsHtml += `<div class="tetris-cell${color ? ' filled' : ''}"${color ? ` style="--cell-color:${color}"` : ''}></div>`;
                });
            });

            const nextType = tetrisState.next;
            const nextShape = TETROMINOES[nextType].rotations[0];
            let nextHtml = '';
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    const on = nextShape.some(([sr, sc]) => sr === r && sc === c);
                    nextHtml += `<div class="tetris-next-cell${on ? ' filled' : ''}"${on ? ` style="--cell-color:${TETROMINOES[nextType].color}"` : ''}></div>`;
                }
            }

            const progressPct = Math.min(100, Math.round((tetrisState.score / tetrisState.targetScore) * 100));

            document.getElementById('modal-content').innerHTML = `
                <div class="tetris-arcade">
                    <div class="tetris-scanlines"></div>
                    <div class="tetris-hud">
                        <div class="tetris-hud-block">
                            <span class="tetris-hud-label">SCORE</span>
                            <span class="tetris-hud-value">${tetrisState.score}</span>
                        </div>
                        <div class="tetris-hud-block">
                            <span class="tetris-hud-label">LEVEL</span>
                            <span class="tetris-hud-value">${tetrisState.level}</span>
                        </div>
                        <div class="tetris-hud-block">
                            <span class="tetris-hud-label">NEXT</span>
                            <div class="tetris-next-grid">${nextHtml}</div>
                        </div>
                    </div>
                    <div class="tetris-goal-bar">
                        <div class="tetris-goal-fill" style="width:${progressPct}%"></div>
                        <span class="tetris-goal-text">${tetrisState.score} / ${tetrisState.targetScore}</span>
                    </div>
                    <div class="tetris-board" id="tetrisBoard">${cellsHtml}</div>
                    <div id="tetrisMessageBanner"></div>
                    <div class="tetris-touch-controls">
                        <button class="tetris-btn" onclick="tetrisTouchLeft()" aria-label="Left">\u25C0</button>
                        <button class="tetris-btn" onclick="tetrisTouchRotate()" aria-label="Rotate">\u27F3</button>
                        <button class="tetris-btn" onclick="tetrisTouchRight()" aria-label="Right">\u25B6</button>
                        <button class="tetris-btn tetris-btn-soft" onclick="tetrisTouchSoftDrop()">\u21D3 SOFT</button>
                        <button class="tetris-btn tetris-btn-hard" onclick="tetrisTouchHardDrop()">\u23EC HARD DROP</button>
                    </div>
                    <div class="tetris-key-hint">\u2190 \u2192 move \u00B7 \u2193 soft drop \u00B7 \u2191 / Z rotate \u00B7 SPACE hard drop</div>
                </div>
            `;
            document.getElementById('errorMsg').style.display = 'none';
        }

        window.addEventListener('load', () => {
            localStorage.removeItem('hogwartsHouse');
            updateProgressUI();
            updateMapDisplay();
            selectLocation(currentStep);
        });
        window.addEventListener('resize', updateMapDisplay);
        setTimeout(updateMapDisplay, 150);

        // ===================================================================
        // --- PINCH-ZOOM / PAN КАРТЫ (только в мобильной раскладке, <=768px) ---
        // Работает через CSS-transform на #mapContainer поверх уже правильно
        // пропорционированного (см. fitMapToViewport()) блока карты. Клики по
        // чекпоинтам продолжают работать как обычно — CSS-transform не мешает
        // hit-тестингу браузера. На десктопе жесты не активируются (сначала
        // проверяем isMobileLayout()), так что обычная мышь не затронута.
        // ===================================================================
        (function () {
            let scale = 1, panX = 0, panY = 0;
            let startDist = 0, startScale = 1;
            let lastX = 0, lastY = 0;
            let isPanning = false;
            let lastTapTime = 0;

            function applyTransform() {
                const el = document.getElementById('mapContainer');
                if (el) el.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${scale})`;
            }

            function clamp() {
                const viewport = document.getElementById('mapViewport');
                const el = document.getElementById('mapContainer');
                if (!viewport || !el) return;
                const vw = viewport.clientWidth, vh = viewport.clientHeight;
                const w = el.offsetWidth * scale, h = el.offsetHeight * scale;
                const maxX = Math.max(0, (w - vw) / 2);
                const maxY = Math.max(0, (h - vh) / 2);
                panX = Math.min(maxX, Math.max(-maxX, panX));
                panY = Math.min(maxY, Math.max(-maxY, panY));
            }

            function resetMapZoom() {
                scale = 1; panX = 0; panY = 0;
                applyTransform();
            }

            function dist(t1, t2) {
                return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
            }

            function onTouchStart(e) {
                if (!isMobileLayout()) return;
                if (e.touches.length === 2) {
                    startDist = dist(e.touches[0], e.touches[1]);
                    startScale = scale;
                    isPanning = false;
                } else if (e.touches.length === 1) {
                    const now = Date.now();
                    if (now - lastTapTime < 300) {
                        resetMapZoom();
                        lastTapTime = 0;
                        return;
                    }
                    lastTapTime = now;
                    const el = document.getElementById('mapContainer');
                    const vp = document.getElementById('mapViewport');
                    const overflowing = el && vp && (
                        el.offsetWidth * scale > vp.clientWidth + 1 ||
                        el.offsetHeight * scale > vp.clientHeight + 1
                    );
                    isPanning = scale > 1.01 || overflowing;
                    lastX = e.touches[0].clientX;
                    lastY = e.touches[0].clientY;
                }
            }

            function onTouchMove(e) {
                if (!isMobileLayout()) return;
                if (e.touches.length === 2) {
                    e.preventDefault();
                    const newDist = dist(e.touches[0], e.touches[1]);
                    scale = Math.min(4, Math.max(1, startScale * (newDist / startDist)));
                    clamp();
                    applyTransform();
                } else if (e.touches.length === 1 && isPanning) {
                    e.preventDefault();
                    const dx = e.touches[0].clientX - lastX;
                    const dy = e.touches[0].clientY - lastY;
                    lastX = e.touches[0].clientX;
                    lastY = e.touches[0].clientY;
                    panX += dx;
                    panY += dy;
                    clamp();
                    applyTransform();
                }
            }

            function onTouchEnd(e) {
                if (!isMobileLayout()) return;
                if (e.touches.length === 0) {
                    isPanning = false;
                    if (scale <= 1.02) resetMapZoom();
                }
            }

            const mapViewportEl = document.getElementById('mapViewport');
            if (mapViewportEl) {
                mapViewportEl.addEventListener('touchstart', onTouchStart, { passive: true });
                mapViewportEl.addEventListener('touchmove', onTouchMove, { passive: false });
                mapViewportEl.addEventListener('touchend', onTouchEnd, { passive: true });
            }

            window.addEventListener('resize', function () {
                if (!isMobileLayout()) resetMapZoom();
            });
        })();

        // ===================================================================
        // ИНТРО: жуткое видео -> Миша здоровается (misha_finale.png, белые
        // баблы, тот же паттерн "тап по баблу — следующая реплика", что и в
        // .duel-speech-bubble) -> правила квеста. Показывается один раз —
        // видимость #introOverlay уже решена синхронным inline-скриптом в
        // index.html (localStorage 'introSeen' / ?intro=1 в адресе).
        // ===================================================================
        const introLines = [
            "Hi, my love. Welcome to Mexico.",
            "This whole road trip — every stage of it — is something I built just for you. Some parts of it will be easy, just to let you catch your breath. Others... not so much.",
            "Either way, I really hope you have the time of your life going through it.",
            "And somewhere at the very end of this road, in Rosarito, I truly hope to meet you there — for real, this time."
        ];
        let introLineIndex = 0;

        function introStartVideo() {
            document.getElementById('introPreVideo').style.display = 'none';
            document.getElementById('introVideoWrap').style.display = 'flex';
            const video = document.getElementById('introVideo');
            video.onended = introShowRomance;
            video.onerror = introShowRomance;
            video.currentTime = 0;
            video.play().catch(() => {
                // Если автовоспроизведение со звуком заблокировано — не блокируем интро.
                introShowRomance();
            });
        }

        function introShowRomance() {
            document.getElementById('introStageVideo').style.display = 'none';
            document.getElementById('introStageRomance').style.display = 'flex';
            introLineIndex = 0;
            introRenderLine();
        }

        function introRenderLine() {
            document.getElementById('introBubble').innerText = introLines[introLineIndex];
            document.getElementById('introHint').innerText =
                introLineIndex === introLines.length - 1 ? '' : 'tap the bubble to continue…';
        }

        function introNextLine() {
            if (introLineIndex < introLines.length - 1) {
                introLineIndex++;
                introRenderLine();
            } else {
                document.getElementById('introStageRomance').style.display = 'none';
                document.getElementById('introStageRules').style.display = 'flex';
            }
        }

        function finishIntro() {
            // Ничего не пишем в localStorage здесь — видимость интро на СЛЕДУЮЩИХ
            // загрузках страницы решает сам прогресс (mexicoRouteProgress), см.
            // inline-скрипт в index.html. Пока этап 1 не пройден, интро вернётся
            // заново при следующем открытии/обновлении сайта.
            document.getElementById('introOverlay').style.display = 'none';
        }
