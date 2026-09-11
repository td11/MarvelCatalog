export interface MarvelPowerGrid {
  intelligence: number; // 1-7
  strength: number;     // 1-7
  speed: number;        // 1-7
  durability: number;   // 1-7
  energyProjection: number; // 1-7
  fightingSkills: number;   // 1-7
}

export type MarvelTeam = 'avengers' | 'spider-verse' | 'x-men' | 'cosmic' | 'villains' | 'street' | 'fantastic-four' | 'guardians';

export interface MarvelCharacter {
  id: number;
  name: string;
  realName: string;
  team: MarvelTeam;
  teamLabel: string;
  description: string;
  biography: string;
  firstAppearance: string;
  powers: string[];
  stats: MarvelPowerGrid;
  thumbnail: {
    path: string;
    extension: string;
  };
  comicCover?: string;
  notableComics: string[];
  mcuAppearances?: string[];
}

export const MARVEL_CHARACTERS_DATA: MarvelCharacter[] = [
  {
    id: 1009368,
    name: "Iron Man",
    realName: "Anthony 'Tony' Edward Stark",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Multimillonario, filántropo y genio inventor, Tony Stark diseñó una armadura cibernética de alta tecnología que lo convirtió en el pilar fundamental de los Vengadores.",
    biography: "Tras ser gravemente herido y capturado por terroristas, Tony Stark construyó una tosca armadura de hierro para salvar su corazón dañado y escapar. De regreso a su taller, perfeccionó la armadura con aleación de oro y titanio y reactores Arc, jurando proteger a la humanidad como el Vengador Blindado.",
    firstAppearance: "Tales of Suspense #39 (1963)",
    powers: [
      "Vuelo hipersónico",
      "Rayos repulsores",
      "Unibeam en el pecho",
      "Armaduras modulares nanotecnológicas",
      "Genio intelecto nivel 12"
    ],
    stats: {
      intelligence: 6,
      strength: 6,
      speed: 5,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
      extension: "jpg"
    },
    comicCover: "/images/ironman-cover.jpg",
    notableComics: [
      "Demon in a Bottle (1979)",
      "Armor Wars (1987)",
      "Extremis (2005)",
      "Civil War (2006)"
    ],
    mcuAppearances: [
      "Iron Man (2008)",
      "The Avengers (2012)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009220,
    name: "Spider-Man",
    realName: "Peter Benjamin Parker",
    team: "spider-verse",
    teamLabel: "Spider-Verse",
    description: "Picado por una araña radiactiva en su adolescencia, Peter Parker aprendió por la vía del dolor que un gran poder conlleva una gran responsabilidad, convirtiéndose en el amigable vecino de Nueva York.",
    biography: "Huérfano criado por sus tíos Ben y May en Queens, Peter adquirió fuerza proporcional a un arácnido y un prodigioso sentido arácnido. La trágica muerte del tío Ben a manos de un ladrón que Peter no detuvo forjó su código moral inquebrantable.",
    firstAppearance: "Amazing Fantasy #15 (1962)",
    powers: [
      "Sentido arácnido premonitorio",
      "Trepar muros y superficies",
      "Fuerza y agilidad sobrehumanas",
      "Lanzatelarañas biomecánicos",
      "Intelecto científico prodigio"
    ],
    stats: {
      intelligence: 4,
      strength: 4,
      speed: 3,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 5
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
      extension: "jpg"
    },
    comicCover: "/images/spiderman-cover.jpg",
    notableComics: [
      "The Night Gwen Stacy Died (1973)",
      "Kraven's Last Hunt (1987)",
      "Spider-Verse (2014)"
    ],
    mcuAppearances: [
      "Captain America: Civil War (2016)",
      "Spider-Man: No Way Home (2021)"
    ]
  },
  {
    id: 1009610,
    name: "Captain America",
    realName: "Steven 'Steve' Rogers",
    team: "avengers",
    teamLabel: "Avengers",
    description: "El centinela de la libertad. Transformado por el Suero del Súper Soldado durante la Segunda Guerra Mundial, Steve Rogers es el líder táctico y la brújula moral del Universo Marvel.",
    biography: "Rechazado por el ejército debido a su frágil complexión física, Steve Rogers se ofreció voluntario para el Proyecto Renacimiento. Congelado en el Ártico tras vencer a Hydra en 1945, despertó décadas después para liderar a los Vengadores en un mundo moderno.",
    firstAppearance: "Captain America Comics #1 (1941)",
    powers: [
      "Fuerza, velocidad y resistencia en el pináculo humano",
      "Maestría táctica inigualable",
      "Reflejos aumentados",
      "Escudo de vibranium indestructible"
    ],
    stats: {
      intelligence: 3,
      strength: 3,
      speed: 2,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
      extension: "jpg"
    },
    comicCover: "/images/capitan-america-cover.jpg",
    notableComics: [
      "Captain America Lives! (2005)",
      "The Winter Soldier (2005)",
      "Civil War (2006)"
    ],
    mcuAppearances: [
      "The First Avenger (2011)",
      "The Winter Soldier (2014)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009664,
    name: "Thor",
    realName: "Thor Odinson",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Dios del Trueno asgardiano y protector de los Nueve Reinos. Empuña el martillo místico Mjolnir y controla las tormentas cósmicas con furia divina.",
    biography: "Príncipe heredero de Asgard desterrado a la Tierra por su padre Odín para aprender la humildad como Donald Blake. Thor descubrió el verdadero valor del heroísmo y se convirtió en miembro fundador de los Vengadores.",
    firstAppearance: "Journey into Mystery #83 (1962)",
    powers: [
      "Fisiología divina asgardiana inmortal",
      "Control meteorológico y rayos místicos",
      "Fuerza clase 100+",
      "Vuelo y manipulación dimensional mediante Mjolnir/Stormbreaker"
    ],
    stats: {
      intelligence: 2,
      strength: 7,
      speed: 6,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 5
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
      extension: "jpg"
    },
    comicCover: "/images/thor-cover.jpg",
    notableComics: [
      "The Mighty Thor: Surtur Saga (1984)",
      "Thor: God of Thunder (2012)",
      "War of the Realms (2019)"
    ],
    mcuAppearances: [
      "Thor (2011)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)"
    ]
  },
  {
    id: 1009189,
    name: "Hulk",
    realName: "Robert Bruce Banner",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Científico nuclear expuesto a una letal detonación de rayos gamma. En momentos de ira, el apacible Dr. Banner se transforma en el coloso esmeralda, la fuerza física viva más demoledora de la Tierra.",
    biography: "Tras salvar al joven Rick Jones en una zona de pruebas militares, Bruce Banner absorbió una dosis masiva de radiación gamma. La adrenalina y el dolor desbloquean a Hulk, un alter ego guiado por la ira cuya fuerza aumenta sin límite teórico a medida que crece su furia.",
    firstAppearance: "The Incredible Hulk #1 (1962)",
    powers: [
      "Fuerza física potencialmente infinita",
      "Factor de curación regenerativo hiperacelerado",
      "Saltos transcontinentales",
      "Resistencia a temperaturas y ataques atómicos"
    ],
    stats: {
      intelligence: 6,
      strength: 7,
      speed: 3,
      durability: 7,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
      extension: "jpg"
    },
    comicCover: "/images/hulk-cover.jpg",
    notableComics: [
      "Planet Hulk (2006)",
      "World War Hulk (2007)",
      "Immortal Hulk (2018)"
    ],
    mcuAppearances: [
      "The Incredible Hulk (2008)",
      "The Avengers (2012)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009546,
    name: "Black Widow",
    realName: "Natalia Alianovna 'Natasha Romanoff'",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Antigua espía y asesina de élite graduada en la infame Sala Roja soviética. Natasha desertó a Occidente para convertirse en agente de S.H.I.E.L.D. y corazón estratégico de los Vengadores.",
    biography: "Entrenada desde la infancia en artes marciales letales, acrobacias y guerra psicológica en la Habitación Roja. Natasha redimió su oscuro pasado uniéndose a Clint Barton y Nick Fury, sacrificando todo por proteger a su nueva familia elegida.",
    firstAppearance: "Tales of Suspense #52 (1964)",
    powers: [
      "Maestra en artes marciales mixtas y asesinato táctico",
      "Condicionamiento físico al límite humano",
      "Experta en sigilo e interrogatorio",
      "Aguijones de Viuda (descargas eléctricas de 30.000V)"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 3,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f16e3",
      extension: "jpg"
    },
    comicCover: "/images/blackwidow-cover.jpg",
    notableComics: [
      "Black Widow: The Coldest War (1990)",
      "Black Widow: Deadly Origin (2009)",
      "The Name of the Rose (2010)"
    ],
    mcuAppearances: [
      "Iron Man 2 (2010)",
      "Captain America: The Winter Soldier (2014)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009718,
    name: "Wolverine",
    realName: "James 'Logan' Howlett",
    team: "x-men",
    teamLabel: "X-Men",
    description: "Mutante centenario dotado de sentidos animales aumentados, un potente factor de curación regenerativo y un esqueleto reforzado con adamantium indestructible.",
    biography: "Nacido a finales del siglo XIX en Canadá, Logan sobrevivió a guerras mundiales y a los atroces experimentos del programa Arma X, que fusionó adamantium molecular a sus huesos y garras retráctiles.",
    firstAppearance: "The Incredible Hulk #180 (1974)",
    powers: [
      "Factor de regeneración celular mutante",
      "Esqueleto y garras retráctiles de adamantium",
      "Sentidos olfativos y auditivos hiperagudos",
      "Longevidad extendida y resistencia a toxinas"
    ],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 2,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 7
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
      extension: "jpg"
    },
    comicCover: "/images/wolverine-cover.jpg",
    notableComics: [
      "Weapon X (1991)",
      "Wolverine: Origin (2001)",
      "Old Man Logan (2008)"
    ],
    mcuAppearances: [
      "X-Men (2000)",
      "Logan (2017)",
      "Deadpool & Wolverine (2024)"
    ]
  },
  {
    id: 1009282,
    name: "Doctor Strange",
    realName: "Stephen Vincent Strange",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Hechicero Supremo de la Tierra. Antiguo neurocirujano ególatra que dominó las artes místicas tras perder el control motriz de sus manos en un trágico accidente automovilístico.",
    biography: "Buscando sanar sus manos lesionadas en Kamar-Taj, Strange aprendió del Anciano que la realidad es solo una de infinitas dimensiones. Asumió el Ojo de Agamotto y la Capa de Levitación para defender el cosmos.",
    firstAppearance: "Strange Tales #110 (1963)",
    powers: [
      "Hechicería mística universal",
      "Manipulación del tiempo y las dimensiones",
      "Teletransportación y proyección astral",
      "Artefactos arcanos (Ojo de Agamotto, Capa de Levitación)"
    ],
    stats: {
      intelligence: 4,
      strength: 2,
      speed: 2,
      durability: 3,
      energyProjection: 6,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe",
      extension: "jpg"
    },
    comicCover: "/images/doctorstrange-cover.png",
    notableComics: [
      "Doctor Strange: The Oath (2006)",
      "A Separate Reality (1974)",
      "Damnation (2018)"
    ],
    mcuAppearances: [
      "Doctor Strange (2016)",
      "Avengers: Infinity War (2018)",
      "Multiverse of Madness (2022)"
    ]
  },
  {
    id: 1009562,
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Bruja de nivel Omega bendecida con la Magia del Caos pura y la habilidad de reescribir la realidad misma a escala planetaria y cósmica.",
    biography: "Nacida en las montañas de Wundagore junto a su hermano Pietro y marcada por el dios arcaico Chthon. Wanda pasó de la Hermandad de Mutantes Diabólicos a convertirse en una de las fuerzas arcanas más sobrecogedoras del universo.",
    firstAppearance: "X-Men #4 (1964)",
    powers: [
      "Magia del Caos primordial",
      "Deformación y alteración de la realidad",
      "Telequinesis y campos de fuerza",
      "Proyección psiónica y transmutación de materia"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 6,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b",
      extension: "jpg"
    },
    comicCover: "/images/scarletwitch-cover.png",
    notableComics: [
      "Avengers Disassembled (2004)",
      "House of M (2005)",
      "Scarlet Witch (2016)"
    ],
    mcuAppearances: [
      "Avengers: Age of Ultron (2015)",
      "WandaVision (2021)",
      "Multiverse of Madness (2022)"
    ]
  },
  {
    id: 1009187,
    name: "Black Panther",
    realName: "T'Challa",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Monarca y protector supremo del reino tecnológicamente avanzado de Wakanda. Imbuido con la Hierba en Forma de Corazón bendecida por la diosa Bast.",
    biography: "Heredero al trono tras el asesinato del rey T'Chaka, T'Challa dedicó su vida a equilibrar las milenarias tradiciones wakandianas con innovaciones nanotecnológicas de vibranium para liderar a los Vengadores e Illuminati.",
    firstAppearance: "Fantastic Four #52 (1966)",
    powers: [
      "Fisiología sobrehumana otorgada por la Hierba Corazón",
      "Hábito de combate tejido con microfibra de Vibranium",
      "Garras de anti-metal capaces de cortar cualquier sustancia",
      "Estratega político y científico nivel genio"
    ],
    stats: {
      intelligence: 5,
      strength: 3,
      speed: 2,
      durability: 3,
      energyProjection: 3,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/blackpanther-cover.png",
    notableComics: [
      "Panther's Rage (1973)",
      "Black Panther by Christopher Priest (1998)",
      "A Nation Under Our Feet (2016)"
    ],
    mcuAppearances: [
      "Captain America: Civil War (2016)",
      "Black Panther (2018)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009268,
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    team: "x-men",
    teamLabel: "X-Men",
    description: "El mercenario bocazas. Impredecible, armado hasta los dientes y consciente de que es un personaje ficticio en viñetas y pantallas.",
    biography: "Sometido al Departamento K para curar un cáncer terminal mediante células de Logan, Wade obtuvo una inmortalidad regenerativa grotesca unida a una demencia desternillante y letal.",
    firstAppearance: "The New Mutants #98 (1991)",
    powers: [
      "Factor de curación regenerativo extremo e inmortalidad",
      "Consciencia de la 4ª pared y omnisciencia de medios",
      "Tirador y espadachín de nivel maestro",
      "Inmunidad total a ataques telepáticos debido a su inestabilidad mental"
    ],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 2,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99",
      extension: "jpg"
    },
    comicCover: "/images/deadpool-cover.png",
    notableComics: [
      "Deadpool Kills the Marvel Universe (2012)",
      "The Good, The Bad and The Ugly (2013)",
      "Cable & Deadpool (2004)"
    ],
    mcuAppearances: [
      "Deadpool (2016)",
      "Deadpool 2 (2018)",
      "Deadpool & Wolverine (2024)"
    ]
  },
  {
    id: 1009652,
    name: "Thanos",
    realName: "Thanos de Titán",
    team: "villains",
    teamLabel: "Villanos",
    description: "El Titán Loco. Nacido en la luna titánica con el gen Desviante, Thanos es un señor de la guerra cósmico impulsado por su trágica y fanática devoción a la Señora Muerte.",
    biography: "Exiliado por sus propios congéneres celestiales, Thanos conquistó planetas enteros reuniendo las Gemas del Infinito para erradicar el 50% de la vida universal y equilibrar el cosmos.",
    firstAppearance: "The Invincible Iron Man #55 (1973)",
    powers: [
      "Fisiología de Eterno Titánico con invulnerabilidad extrema",
      "Manipulación de energía cósmica y mística",
      "Fuerza que rivaliza con Hulk y Thor juntos",
      "Maestría en el Guantelete del Infinito omnipotente"
    ],
    stats: {
      intelligence: 6,
      strength: 7,
      speed: 7,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/40/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/thanos-cover.png",
    notableComics: [
      "The Thanos Quest (1990)",
      "The Infinity Gauntlet (1991)",
      "Thanos Wins (2017)"
    ],
    mcuAppearances: [
      "The Avengers (2012)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009407,
    name: "Loki",
    realName: "Loki Laufeyson",
    team: "villains",
    teamLabel: "Villanos",
    description: "Dios asgardiano de las travesuras y la mentira. Hijo biológico del gigante de hielo Laufey adoptado por Odín, perpetuamente atrapado entre los celos y la redención.",
    biography: "Criado a la sombra del glorioso Thor, Loki recurrió a la brujería y a las intrigas palaciegas para ascender. Aunque lideró la invasión chitauri sobre la Tierra, evolucionó hacia el Dios de las Historias protector de la línea temporal.",
    firstAppearance: "Journey into Mystery #85 (1962)",
    powers: [
      "Ilusionismo e hipnosis de escala divina",
      "Hechicería y teletransportación asgardiana",
      "Fisiología de Gigante de Escarcha (resistencia y longevidad)",
      "Manipulación multiversal de líneas de tiempo"
    ],
    stats: {
      intelligence: 5,
      strength: 4,
      speed: 3,
      durability: 4,
      energyProjection: 6,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313",
      extension: "jpg"
    },
    comicCover: "/images/loki-cover.png",
    notableComics: [
      "Thor: The Trials of Loki (2010)",
      "Journey into Mystery by Kieron Gillen (2011)",
      "Loki: Agent of Asgard (2014)"
    ],
    mcuAppearances: [
      "Thor (2011)",
      "The Avengers (2012)",
      "Loki Serie Disney+ (2021-2023)"
    ]
  },
  {
    id: 1010338,
    name: "Captain Marvel",
    realName: "Carol Susan Jane Danvers",
    team: "cosmic",
    teamLabel: "Cósmico",
    description: "Antigua piloto de combate de la Fuerza Aérea imbuida de energía cósmica Kree tras la explosión del motor de velocidad de la luz, alcanzando la categoría de potencia estelar Binaria.",
    biography: "Tras fusionar su ADN humano con fisiología Kree en el Psiquemagnitrón, Carol sirvió como Ms. Marvel y más tarde asumió el manto de Capitana Marvel para patrullar la galaxia entera.",
    firstAppearance: "Marvel Super-Heroes #13 (1968)",
    powers: [
      "Manipulación y absorción de energía estelar fotónica",
      "Vuelo a velocidad relativista espacial",
      "Fuerza cósmica clase 100+",
      "Modo Binaria con capacidad destructiva supernova"
    ],
    stats: {
      intelligence: 3,
      strength: 5,
      speed: 5,
      durability: 6,
      energyProjection: 5,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4",
      extension: "jpg"
    },
    comicCover: "/images/captainmarvel-cover.png",
    notableComics: [
      "Captain Marvel: In Pursuit of Flight (2012)",
      "The Death of Captain Marvel (1982)",
      "Civil War II (2016)"
    ],
    mcuAppearances: [
      "Captain Marvel (2019)",
      "Avengers: Endgame (2019)",
      "The Marvels (2023)"
    ]
  },
  {
    id: 1009262,
    name: "Daredevil",
    realName: "Matthew Michael Murdock",
    team: "street",
    teamLabel: "Street Level",
    description: "El Hombre sin Miedo. Abogado ciego de día en Hell's Kitchen y vigilante acrobático implacable de noche, impulsado por una fe católica inquebrantable.",
    biography: "Cegado de niño por residuos químicos radiactivos que salvaron la vida de un anciano, Matt desarrolló sus cuatro sentidos restantes a niveles ecolocalizadores sobrehumanos bajo la tutela del ninja ciego Stick.",
    firstAppearance: "Daredevil #1 (1964)",
    powers: [
      "Sentido de radar 360 grados ecolocalizador",
      "Oído, tacto y olfato hiperagudos capaces de detectar pulsos cardíacos",
      "Maestro acróbata y pugilista ninja",
      "Bastón multifunción con cable de fibra de carbono"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 5
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
      extension: "jpg"
    },
    comicCover: "/images/daredevil-cover.png",
    notableComics: [
      "Born Again (1986)",
      "The Man Without Fear (1993)",
      "Guardian Devil (1998)",
      "Daredevil by Chip Zdarsky (2019)"
    ],
    mcuAppearances: [
      "Daredevil Serie Netflix (2015-2018)",
      "Spider-Man: No Way Home (2021)",
      "Daredevil: Born Again (2025)"
    ]
  },
  {
    id: 1010788,
    name: "Venom",
    realName: "Eddie Brock & Simbionte Klyntar",
    team: "villains",
    teamLabel: "Villanos",
    description: "La fusión letal entre el periodista caído en desgracia Eddie Brock y el simbionte alienígena alienado rechazado por Peter Parker. El Protector Letal del antihéroe urbano.",
    biography: "Amargados por sus derrotas compartidas frente a Spider-Man, Eddie y el Klyntar se fusionaron en la iglesia de Nuestra Señora de los Santos. Con el tiempo evolucionaron de némesis mortal a deidad cósmica King in Black.",
    firstAppearance: "The Amazing Spider-Man #300 (1988)",
    powers: [
      "Generación de zarcillos, telarañas oscuras y masa biológica",
      "Camuflaje mimético y sigilo",
      "Fuerza superior a Spider-Man e inmunidad al sentido arácnido",
      "Fauces y dientes afilados de alta letalidad"
    ],
    stats: {
      intelligence: 3,
      strength: 4,
      speed: 2,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
      extension: "jpg"
    },
    comicCover: "/images/venom-cover.png",
    notableComics: [
      "Venom: Lethal Protector (1993)",
      "Maximum Carnage (1993)",
      "Venom by Donny Cates (2018)",
      "King in Black (2020)"
    ],
    mcuAppearances: [
      "Spider-Man 3 (2007)",
      "Venom (2018)",
      "Spider-Man: No Way Home (2021)"
    ]
  },
  {
    id: 1009338,
    name: "Hawkeye",
    realName: "Clinton Francis Barton",
    team: "avengers",
    teamLabel: "Avengers",
    description: "El mejor arquero del mundo. Un atleta olímpico prodigioso con puntería infalible y un carcaj repleto de flechas con trucos tecnológicos.",
    biography: "Huérfano que creció en un circo donde fue instruido por espadachines y arqueros itinerantes. Clint se unió a los Vengadores y ha liderado tanto a los Vengadores de la Costa Oeste como a los Thunderbolts.",
    firstAppearance: "Tales of Suspense #57 (1964)",
    powers: [
      "Puntería perfecta e infalible",
      "Maestría en combate cuerpo a cuerpo y arquería táctica",
      "Arsenal de flechas trucadas (PEM, explosivas, sónicas, ácido)",
      "Estratega veterano de campo"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b",
      extension: "jpg"
    },
    comicCover: "/images/hawkeye-cover.png",
    notableComics: [
      "Hawkeye by Matt Fraction & David Aja (2012)",
      "Blindspot (2011)",
      "Old Man Hawkeye (2018)"
    ],
    mcuAppearances: [
      "The Avengers (2012)",
      "Captain America: Civil War (2016)",
      "Hawkeye Serie Disney+ (2021)"
    ]
  },
  {
    id: 1009297,
    name: "Falcon",
    realName: "Samuel Thomas Wilson",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Vanguardia aérea y sucesor del manto de Capitán América. Equipado con alas de vibranium holográficas y un vínculo telepático con aves rapaces.",
    biography: "Aliado leal de Steve Rogers desde Harlem. Sam Wilson voló como Falcon antes de empuñar el icónico escudo de vibranium para convertirse en el nuevo Capitán América de la era moderna.",
    firstAppearance: "Captain America #117 (1969)",
    powers: [
      "Arnés de vuelo con alas articuladas de vibranium",
      "Enlace empático y telepático con aves",
      "Maestría en combate aéreo y táctico",
      "Uso magistral del escudo del Capitán América"
    ],
    stats: {
      intelligence: 2,
      strength: 2,
      speed: 3,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/f/b0/5111505fb7009",
      extension: "jpg"
    },
    comicCover: "/images/falcon-cover.png",
    notableComics: [
      "Captain America and the Falcon (2004)",
      "All-New Captain America (2014)",
      "Captain America: Sam Wilson (2015)"
    ],
    mcuAppearances: [
      "Captain America: The Winter Soldier (2014)",
      "The Falcon and the Winter Soldier (2021)",
      "Captain America: Brave New World (2025)"
    ]
  },
  {
    id: 1009156,
    name: "Ant-Man",
    realName: "Scott Edward Harris Lang",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Experto en electrónica y ladrón reformado que adoptó las Partículas Pym inventadas por Hank Pym para reducirse a escala microscópica o crecer a tamaño colosal.",
    biography: "Robó el traje de Ant-Man originalmente para salvar a su hija Cassie, enferma de corazón. Hank Pym reconoció su nobleza y le legó el manto de Ant-Man como miembro clave de los Vengadores.",
    firstAppearance: "The Avengers #181 (1979)",
    powers: [
      "Manipulación de masa mediante Partículas Pym (micro a macro)",
      "Comunicación cibernética y control de colonias de hormigas",
      "Fuerza concentrada a escala insectil o de gigante",
      "Ingeniería electrónica"
    ],
    stats: {
      intelligence: 4,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/7/50/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/antman-cover.png",
    notableComics: [
      "Marvel Premiere #47 (1979)",
      "Ant-Man: Second-Chance Man (2015)",
      "Astonishing Ant-Man (2015)"
    ],
    mcuAppearances: [
      "Ant-Man (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009707,
    name: "Wasp",
    realName: "Janet van Dyne",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Miembro fundadora de los Vengadores que además ideó el nombre oficial del equipo. Diseñadora de alta costura y combatiente biomecánica letal.",
    biography: "Tras el asesinato de su padre Vernon van Dyne, Janet colaboró con Hank Pym para someterse a tratamientos bioquímicos que le otorgaron alas bioeléctricas y aguijones bioenergéticos destructivos.",
    firstAppearance: "Tales to Astonish #44 (1963)",
    powers: [
      "Reducción de tamaño con alas bioeléctricas de alta velocidad",
      "Ráfagas bioeléctricas Sting letales",
      "Comunicación insectoide",
      "Liderazgo carismático y estratega de combate"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 3,
      durability: 2,
      energyProjection: 4,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/5390dfa3424cb",
      extension: "jpg"
    },
    comicCover: "/images/wasp-cover.png",
    notableComics: [
      "Under Siege (Avengers #273-#277)",
      "Secret Invasion (2008)",
      "Uncanny Avengers (2012)"
    ],
    mcuAppearances: [
      "Ant-Man and the Wasp (2018)",
      "Avengers: Endgame (2019)",
      "Quantumania (2023)"
    ]
  },
  {
    id: 1009712,
    name: "War Machine",
    realName: "James Rupert 'Rhodey' Rhodes",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Coronel de la Fuerza Aérea de EE. UU. y el mejor amigo de Tony Stark. Pilota un arsenal andante blindado con cañones de asalto pesados y misiles guiados.",
    biography: "Rhodey asumió temporalmente la armadura de Iron Man cuando Stark sucumbió al alcoholismo. Posteriormente recibió su propia armadura blindada táctica conocida como War Machine.",
    firstAppearance: "Iron Man #118 (1979)",
    powers: [
      "Armadura táctica militar pesada con microcañón Gatling",
      "Misiles guiados 'Ex-Wife' y submuniciones perforantes",
      "Vuelo supersónico con reactores de combustible dual",
      "Entrenamiento de piloto y combate militar táctico"
    ],
    stats: {
      intelligence: 3,
      strength: 6,
      speed: 5,
      durability: 6,
      energyProjection: 5,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/60/537bb0c849187",
      extension: "jpg"
    },
    comicCover: "/images/warmachine-cover.png",
    notableComics: [
      "War Machine Vol 1 (1994)",
      "Iron Man: The Secret Origin of Tony Stark (2013)",
      "Civil War II (2016)"
    ],
    mcuAppearances: [
      "Iron Man 2 (2010)",
      "Captain America: Civil War (2016)",
      "Avengers: Endgame (2019)"
    ]
  },
  {
    id: 1009697,
    name: "Vision",
    realName: "Vision (Sintezoide)",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Sintezoide supremo creado originalmente por Ultrón con los patrones cerebrales de Wonder Man y la Gema de la Mente. Posee la mayor humanidad y nobleza del equipo.",
    biography: "Diseñado para infiltrarse y aniquilar a los Vengadores, Visión desafió la programación de Ultrón para salvar a la humanidad. Enamorado de Wanda Maximoff, construyó una vida familiar en busca del alma.",
    firstAppearance: "The Avengers #57 (1968)",
    powers: [
      "Manipulación de densidad molecular (desde intangible como humo hasta diamante ultra-denso)",
      "Rayo de energía solar a través de la gema frontal",
      "Fuerza y durabilidad cibernética sobrehumana",
      "Procesamiento computacional cuántico"
    ],
    stats: {
      intelligence: 5,
      strength: 5,
      speed: 3,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594",
      extension: "jpg"
    },
    comicCover: "/images/vision-cover.png",
    notableComics: [
      "The Vision and the Scarlet Witch (1982)",
      "Vision by Tom King (2015)",
      "Avengers #57 (1968)"
    ],
    mcuAppearances: [
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "WandaVision (2021)"
    ]
  },
  {
    id: 1010740,
    name: "Winter Soldier",
    realName: "James Buchanan 'Bucky' Barnes",
    team: "street",
    teamLabel: "Street Level",
    description: "Antiguo compañero de Steve Rogers dado por muerto en 1945, reprogramado por la KGB como el letal asesino cibernético Soldado de Invierno.",
    biography: "Recuperado de las aguas congeladas por agentes soviéticos, Bucky fue equipado con un brazo biónico de titanio y puesto en estasis criogénica entre misiones secretas durante la Guerra Fría.",
    firstAppearance: "Captain America Comics #1 (1941)",
    powers: [
      "Brazo biónico de titanio cibernético con fuerza sobrehumana e IEM",
      "Puntería de francotirador y artes marciales de asesinato",
      "Condicionamiento físico militar aumentado",
      "Especialista en guerra clandestina"
    ],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 2,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/03/5265470ecae6a",
      extension: "jpg"
    },
    comicCover: "/images/wintersoldier-cover.png",
    notableComics: [
      "Captain America: Winter Soldier (2005)",
      "Captain America: The Death of Captain America (2007)",
      "Winter Soldier by Ed Brubaker (2012)"
    ],
    mcuAppearances: [
      "The Winter Soldier (2014)",
      "Civil War (2016)",
      "Thunderbolts* (2025)"
    ]
  },
  {
    id: 1011005,
    name: "Shang-Chi",
    realName: "Shang-Chi",
    team: "street",
    teamLabel: "Street Level",
    description: "El Maestro del Kung-Fu. Heredero de los Diez Anillos y el mayor combatiente cuerpo a cuerpo de toda la mitología Marvel.",
    biography: "Hijo del legendario líder criminal Zheng Zu, Shang-Chi fue entrenado desde la cuna para ser el asesino perfecto. Tras rebelarse al conocer la maldad de su padre, juró combatir las sombras con el dominio de su Chi.",
    firstAppearance: "Special Marvel Edition #15 (1973)",
    powers: [
      "Maestría absoluta en todas las artes marciales del mundo",
      "Canalización y proyección del Chi vital",
      "Control místico de los Diez Anillos ancestrales",
      "Reflejos capaces de desviar ráfagas automáticas"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 7
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/shangchi-cover.png",
    notableComics: [
      "Master of Kung Fu #17-#125",
      "Shang-Chi: Brothers & Sisters (2020)",
      "Shang-Chi and the Ten Rings (2022)"
    ],
    mcuAppearances: [
      "Shang-Chi and the Legend of the Ten Rings (2021)"
    ]
  },
  {
    id: 1009583,
    name: "She-Hulk",
    realName: "Jennifer Susan Walters",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Brillante abogada de Los Ángeles y prima de Bruce Banner. Tras recibir una transfusión de sangre de emergencia de Bruce, retiene toda su personalidad e intelecto mientras luce como una amazona gamma verde de dos metros.",
    biography: "Baleada por mafiosos por defender un caso criminal, Jennifer fue salvada por la sangre gamma de Bruce. A diferencia de su primo, Jennifer adora su forma de She-Hulk y ejerce la abogacía de superhéroes con carisma implacable.",
    firstAppearance: "Savage She-Hulk #1 (1980)",
    powers: [
      "Fuerza gamma descomunal y resistencia titanio",
      "Intelecto legal y oratoria de primer nivel",
      "Ruptura habitual de la cuarta pared en los cómics",
      "Agilidad y flexibilidad atlética sobrehumana"
    ],
    stats: {
      intelligence: 4,
      strength: 6,
      speed: 3,
      durability: 6,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/7/20/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/shehulk-cover.png",
    notableComics: [
      "The Sensational She-Hulk by John Byrne (1989)",
      "She-Hulk by Dan Slott (2004)",
      "She-Hulk by Rainbow Rowell (2022)"
    ],
    mcuAppearances: [
      "She-Hulk: Attorney at Law (2022)"
    ]
  },
  {
    id: 1009452,
    name: "Moon Knight",
    realName: "Marc Spector / Steven Grant / Jake Lockley",
    team: "street",
    teamLabel: "Street Level",
    description: "El Puño de Khonshu. Exmercenario con trastorno de identidad disociativo resucitado al pie de la estatua del dios egipcio de la Luna como su protector de los viajeros nocturnos.",
    biography: "Traicionado y dejado morir en el desierto egipcio por Raoul Bushman, Marc Spector fue resucitado por Khonshu. Viste de blanco brillante para que sus enemigos le vean venir.",
    firstAppearance: "Werewolf by Night #32 (1975)",
    powers: [
      "Fuerza y reflejos modulados por las fases lunares",
      "Múltiples personalidades estratégicas (millonario, taxista, mercenario)",
      "Crecientes de adamantium y arsenal ceremonial egipcio",
      "Inmortalidad condicional como heraldo divino"
    ],
    stats: {
      intelligence: 3,
      strength: 3,
      speed: 2,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/30/520288b9e59ed",
      extension: "jpg"
    },
    comicCover: "/images/moonknight-cover.png",
    notableComics: [
      "Moon Knight by Warren Ellis (2014)",
      "Moon Knight by Jeff Lemire (2016)",
      "Moon Knight by Jed MacKay (2021)"
    ],
    mcuAppearances: [
      "Moon Knight Serie Disney+ (2022)"
    ]
  },
  {
    id: 1009310,
    name: "Ghost Rider",
    realName: "Jonathan 'Johnny' Blaze",
    team: "street",
    teamLabel: "Street Level",
    description: "El Espíritu de la Venganza. Acróbata de motocicletas que vendió su alma a Mephisto para salvar a su mentor, quedando ligado al demonio Zarathos.",
    biography: "Bajo la noche, su cráneo arde en fuego infernal mientras recorre carreteras malditas en su Hell Cycle, castigando a los pecadores con la Mirada de Penitencia.",
    firstAppearance: "Marvel Spotlight #5 (1972)",
    powers: [
      "Mirada de Penitencia (hace sentir a la víctima todo el dolor infringido a otros)",
      "Control de Fuego Infernal místico destructivo",
      "Cadenas encantadas indestructibles de metal místico",
      "Hell Cycle capaz de escalar rascacielos y rodar sobre el agua"
    ],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 3,
      durability: 5,
      energyProjection: 6,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/80/52695b7cd21a1",
      extension: "jpg"
    },
    comicCover: "/images/ghostrider-cover.png",
    notableComics: [
      "Ghost Rider: Road to Damnation (2005)",
      "Trail of Tears (2007)",
      "Ghost Rider by Benjamin Percy (2022)"
    ],
    mcuAppearances: [
      "Ghost Rider (2007)",
      "Agents of S.H.I.E.L.D. (2016)"
    ]
  },
  {
    id: 1009515,
    name: "Punisher",
    realName: "Francis 'Frank' Castle (Castiglione)",
    team: "street",
    teamLabel: "Street Level",
    description: "Ex marine condecorado que libra una guerra unipersonal a muerte contra el crimen organizado tras el brutal asesinato de su esposa e hijos en Central Park.",
    biography: "Frank Castle no toma rehenes ni cree en la rehabilitación criminal. Con su chaleco estampado con la icónica calavera blanca, utiliza tácticas de guerrilla militar para erradicar a los criminales de la faz de la tierra.",
    firstAppearance: "The Amazing Spider-Man #129 (1974)",
    powers: [
      "Maestro táctico militar, demoliciones y supervivencia extrema",
      "Puntería de nivel francotirador con todo tipo de armamento pesado",
      "Tolerancia inhumana al dolor físico y tortura",
      "Planificación estratégica de emboscadas letales"
    ],
    stats: {
      intelligence: 3,
      strength: 3,
      speed: 2,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/90/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/punisher-cover.png",
    notableComics: [
      "The Punisher: Welcome Back, Frank (2000)",
      "Punisher MAX: Born (2003)",
      "Punisher MAX: The Slavers (2005)"
    ],
    mcuAppearances: [
      "Daredevil Season 2 (2016)",
      "The Punisher Serie (2017-2019)",
      "Daredevil: Born Again (2025)"
    ]
  },
  {
    id: 1009417,
    name: "Magneto",
    realName: "Max Eisenhardt / Erik Lehnsherr",
    team: "villains",
    teamLabel: "Villanos",
    description: "El Amo del Magnetismo. Superviviente del Holocausto y líder revolucionario que cree fervientemente que el Homo Superior debe reinar para evitar su extinción a manos de la humanidad.",
    biography: "Habiendo visto el peor rostro de la intolerancia humana en Auschwitz, Erik juró proteger a su especie por cualquier medio necesario, oponiéndose ideológicamente a su viejo amigo Charles Xavier.",
    firstAppearance: "The X-Men #1 (1963)",
    powers: [
      "Manipulación total de campos electromagnéticos globales",
      "Vuelo y generación de escudos de fuerza magnéticos impenetrables",
      "Manipulación de metales ferrosos y sangre a nivel atómico",
      "Resistencia psíquica gracias a su casco helmético"
    ],
    stats: {
      intelligence: 5,
      strength: 2,
      speed: 4,
      durability: 2,
      energyProjection: 6,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/5261a7e53f827",
      extension: "jpg"
    },
    comicCover: "/images/magneto-cover.png",
    notableComics: [
      "God Loves, Man Kills (1982)",
      "Fatal Attractions (1993)",
      "House of M (2005)",
      "X-Men: Red (2022)"
    ],
    mcuAppearances: [
      "X-Men (2000)",
      "X-Men: First Class (2011)",
      "X-Men: Days of Future Past (2014)"
    ]
  },
  {
    id: 1009504,
    name: "Professor X",
    realName: "Charles Francis Xavier",
    team: "x-men",
    teamLabel: "X-Men",
    description: "El telépata más poderoso del planeta y fundador de la Escuela Xavier para Jóvenes Talentos y de los X-Men. Dedicado al sueño de la coexistencia pacífica entre humanos y mutantes.",
    biography: "Hijo de un científico nuclear, Charles desarrolló talentos telepáticos asombrosos en su juventud. Tras viajar por el mundo y perder la movilidad de sus piernas, construyó la máquina Cerebro para guiar a los mutantes.",
    firstAppearance: "The X-Men #1 (1963)",
    powers: [
      "Telepatía de nivel Alfa/Omega global",
      "Control mental, posesión psíquica y borrado de memorias",
      "Generación de ilusiones mentales y pernos psíquicos letales",
      "Intelecto genio en genética y biofísica"
    ],
    stats: {
      intelligence: 5,
      strength: 1,
      speed: 1,
      durability: 1,
      energyProjection: 5,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/60/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/professorx-cover.png",
    notableComics: [
      "X-Men: Second Genesis (Giant-Size #1 1975)",
      "Onslaught (1996)",
      "House of X / Powers of X (2019)"
    ],
    mcuAppearances: [
      "X-Men (2000)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ]
  },
  {
    id: 1009356,
    name: "Jean Grey",
    realName: "Jean Elaine Grey",
    team: "x-men",
    teamLabel: "X-Men",
    description: "Mutante de nivel Omega dotada de telepatía y telequinesis descomunales, y anfitriona predilecta de la Fuerza Fénix cósmica inmortal.",
    biography: "El despertar traumático de sus poderes conectó su mente con la de su mejor amiga moribunda. Charles Xavier la protegió hasta que la Fuerza Fénix la eligió como encarnación terrenal de la vida y el fuego.",
    firstAppearance: "The X-Men #1 (1963)",
    powers: [
      "Telepatía y telequinesis de nivel Omega",
      "Resurrección y transmutación cósmica mediante Phoenix Force",
      "Vuelo interestelar y manipulación de energía psiónica pura",
      "Control molecular de materia biológica"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 3,
      durability: 2,
      energyProjection: 7,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/f/d0/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/jeangrey-cover.png",
    notableComics: [
      "The Dark Phoenix Saga (1980)",
      "New X-Men by Grant Morrison (2001)",
      "Phoenix Resurrection (2018)"
    ],
    mcuAppearances: [
      "X-Men (2000)",
      "X-Men: The Last Stand (2006)",
      "Dark Phoenix (2019)"
    ]
  },
  {
    id: 1009257,
    name: "Cyclops",
    realName: "Scott Summers",
    team: "x-men",
    teamLabel: "X-Men",
    description: "El primer alumno de Charles Xavier y comandante táctico indiscutible de los X-Men. Dispara devastadores rayos ópticos de fuerza concusiva pura desde otra dimensión.",
    biography: "Un trauma craneal tras saltar de un avión en llamas impidió a Scott cerrar conscientemente su portal óptico, requiriendo un visor de cuarzo de rubí para canalizar su poder sin arrasar rascacielos.",
    firstAppearance: "The X-Men #1 (1963)",
    powers: [
      "Rayos ópticos concusivos capaces de pulverizar montañas",
      "Genio estratega militar y líder de escuadrones de combate",
      "Conciencia espacial geométrica impecable",
      "Inmunidad a los poderes de sus hermanos Havok y Vulcan"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 5,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/70/526547e2d90ad",
      extension: "jpg"
    },
    comicCover: "/images/cyclops-cover.png",
    notableComics: [
      "The Dark Phoenix Saga (1980)",
      "Astonishing X-Men by Joss Whedon (2004)",
      "Schism (2011)"
    ],
    mcuAppearances: [
      "X-Men (2000)",
      "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)"
    ]
  },
  {
    id: 1009629,
    name: "Storm",
    realName: "Ororo Munroe",
    team: "x-men",
    teamLabel: "X-Men",
    description: "Mutante de nivel Omega venerada como diosa en el Serengueti y reina de Wakanda. Controla los patrones climáticos terrestres y las atmósferas planetarias.",
    biography: "Huérfana de ladrona callejera en El Cairo que huyó hacia Kenia donde sus poderes atmosféricos nutrieron cosechas. Reclutada por Xavier, se convirtió en líder emblemática de los X-Men.",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    powers: [
      "Manipulación climática atmosférica a escala planetaria",
      "Invocación de rayos, tornados, granizo y vendavales",
      "Vuelo aerodinámico mediante corrientes térmicas",
      "Resistencia psíquica formidable y combate con cuchillos"
    ],
    stats: {
      intelligence: 2,
      strength: 2,
      speed: 3,
      durability: 2,
      energyProjection: 5,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/40/5261a7d7c394b",
      extension: "jpg"
    },
    comicCover: "/images/storm-cover.png",
    notableComics: [
      "Lifedeath (Uncanny X-Men #186)",
      "X-Men: Worlds Apart (2008)",
      "X-Men: Red (2022)"
    ],
    mcuAppearances: [
      "X-Men (2000)",
      "X-Men: Days of Future Past (2014)",
      "X-Men '97 (2024)"
    ]
  },
  {
    id: 1009549,
    name: "Rogue",
    realName: "Anna Marie LeBeau",
    team: "x-men",
    teamLabel: "X-Men",
    description: "Mutante cuyo tacto piel con piel drena recuerdos, fuerza vital y superpoderes ajenos. Adoptó de forma permanente el vuelo y fuerza sobrehumana de Ms. Marvel.",
    biography: "Criada por Mystique en la Hermandad de Mutantes, el dolor de absorber involuntariamente las almas de quienes amaba la llevó a pedir auxilio a Charles Xavier, ganándose un lugar indeleble en la Patrulla X.",
    firstAppearance: "Avengers Annual #10 (1981)",
    powers: [
      "Absorción táctil de memorias, energía vital y superpoderes",
      "Vuelo e invulnerabilidad permanente",
      "Fuerza sobrehumana colosal",
      "Adaptabilidad combativa polifacética"
    ],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 3,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/10/5261a7e53f827",
      extension: "jpg"
    },
    comicCover: "/images/rogue-cover.png",
    notableComics: [
      "Uncanny X-Men #171 (1983)",
      "Rogue Vol 1 (1995)",
      "Mr. and Mrs. X (2018)"
    ],
    mcuAppearances: [
      "X-Men (2000)",
      "X-Men: The Last Stand (2006)",
      "X-Men '97 (2024)"
    ]
  },
  {
    id: 1009313,
    name: "Gambit",
    realName: "Remy Etienne LeBeau",
    team: "x-men",
    teamLabel: "X-Men",
    description: "Ladrón cajún de Nueva Orleans capaz de cargar objetos inanimados con energía cinética pura explosiva, siendo sus cartas de póquer sus proyectiles favoritos.",
    biography: "Adoptado por el Gremio de Ladrones de Luisiana para sellar la paz con los Asesinos. Se unió a los X-Men donde su encanto pícaro y su romance con Rogue lo convirtieron en un favorito de los fans.",
    firstAppearance: "Uncanny X-Men #266 (1990)",
    powers: [
      "Conversión de energía potencial en energía cinética explosiva",
      "Lanzamiento acrobático de naipes de baraja cargados",
      "Maestría en bōjutsu con vara de bo telescópica",
      "Encanto hipnótico biofísico sutil"
    ],
    stats: {
      intelligence: 2,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 4,
      fightingSkills: 5
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/a/40/52696aa8a14f3",
      extension: "jpg"
    },
    comicCover: "/images/gambit-cover.png",
    notableComics: [
      "Gambit Vol 1 (1993)",
      "Mutant Massacre (1986)",
      "Deadpool & Wolverine (2024)"
    ],
    mcuAppearances: [
      "X-Men Origins: Wolverine (2009)",
      "Deadpool & Wolverine (2024)"
    ]
  },
  {
    id: 1009472,
    name: "Nightcrawler",
    realName: "Kurt Wagner",
    team: "x-men",
    teamLabel: "X-Men",
    description: "El acrobático elfo azul de la Patrulla X. De aspecto demoníaco pero corazón profundamente devoto y católico, se teletransporta en nubes de azufre con un distintivo ¡BAMF!",
    biography: "Hijo de Mystique y Azazel abandonado en los Alpes Bávaros y acogido por una caravana de circo. Xavier lo rescató de una turba enfurecida que lo confundió con un demonio real.",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    powers: [
      "Teletransportación instantánea a través de la dimensión de azufre (BAMF)",
      "Fisiología acrobática con cola prensil y camuflaje en sombras",
      "Maestro esgrimista con doble estoque",
      "Adherencia a superficies verticales"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 3,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/1/40/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/nightcrawler-cover.png",
    notableComics: [
      "Excalibur (1988)",
      "Nightcrawler by Roberto Sacasa (2004)",
      "Way of X (2021)"
    ],
    mcuAppearances: [
      "X2: X-Men United (2003)",
      "X-Men: Apocalypse (2016)",
      "X-Men: Dark Phoenix (2019)"
    ]
  },
  {
    id: 1009243,
    name: "Colossus",
    realName: "Piotr 'Peter' Nikolaievitch Rasputin",
    team: "x-men",
    teamLabel: "X-Men",
    description: "Gigante ruso de granja de alma sensible y pintor apasionado capaz de transformar su epidermis en acero orgánico indestructible.",
    biography: "Creció en una granja colectiva siberiana cerca del Lago Baikal. Reclutado por Charles Xavier para salvar a la primera generación de X-Men en Krakoa, Piotr se convirtió en el escudo de sus camaradas.",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    powers: [
      "Transformación completa en blindaje de acero osmio orgánico",
      "Fuerza colosal clase 100",
      "Invulnerabilidad casi absoluta al daño balístico y térmico",
      "Sin necesidad de respirar ni alimentarse en forma metálica"
    ],
    stats: {
      intelligence: 2,
      strength: 6,
      speed: 2,
      durability: 6,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/e0/51127cf3e2e44",
      extension: "jpg"
    },
    comicCover: "/images/colossus-cover.png",
    notableComics: [
      "Uncanny X-Men: Mutant Massacre (1986)",
      "Astonishing X-Men: Gifted (2004)",
      "Fear Itself (2011)"
    ],
    mcuAppearances: [
      "Deadpool (2016)",
      "Deadpool 2 (2018)",
      "Deadpool & Wolverine (2024)"
    ]
  },
  {
    id: 1009459,
    name: "Mr. Fantastic",
    realName: "Dr. Reed Richards",
    team: "fantastic-four",
    teamLabel: "4 Fantásticos",
    description: "Líder de Los 4 Fantásticos y la mente científica más brillante del multiverso Marvel. Su cuerpo posee una elasticidad molecular ilimitada.",
    biography: "Pionero de los vuelos espaciales civiles. Cuando su nave experimental fue bombardeada por rayos cósmicos, Reed y sus tres compañeros adquirieron poderes elementales y fundaron la Primera Familia de Marvel.",
    firstAppearance: "The Fantastic Four #1 (1961)",
    powers: [
      "Elasticidad y deformación celular hiperplástica",
      "Intelecto omnidisciplinar nivel 12 (descubridor de la Zona Negativa)",
      "Invulnerabilidad a impactos contundentes y balísticos",
      "Creación de portales dimensionales y computación cósmica"
    ],
    stats: {
      intelligence: 7,
      strength: 2,
      speed: 2,
      durability: 5,
      energyProjection: 1,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/c0/5269657a74350",
      extension: "jpg"
    },
    comicCover: "/images/mrfantastic-cover.png",
    notableComics: [
      "The Galactus Trilogy (Fantastic Four #48-#50)",
      "Fantastic Four by Jonathan Hickman (2009)",
      "Secret Wars (2015)"
    ],
    mcuAppearances: [
      "Fantastic Four (2005)",
      "Doctor Strange in the Multiverse of Madness (2022)",
      "The Fantastic Four: First Steps (2025)"
    ]
  },
  {
    id: 1009366,
    name: "Invisible Woman",
    realName: "Susan 'Sue' Storm-Richards",
    team: "fantastic-four",
    teamLabel: "4 Fantásticos",
    description: "Matriarca y el miembro de combate más poderoso de Los 4 Fantásticos. Capaz de manipular la luz para volverse invisible y proyectar campos de fuerza psiónicos indestructibles.",
    biography: "Afectada por la misma tormenta de rayos cósmicos que Reed, Sue evolucionó de Chica Invisible a la protectora más feroz y resolutiva de su familia y del edificio Baxter.",
    firstAppearance: "The Fantastic Four #1 (1961)",
    powers: [
      "Invisibilidad óptica total y camuflaje de terceros",
      "Generación de campos de fuerza hipersólidos",
      "Vuelo por levitación sobre plataformas de energía invisible",
      "Capacidad de generar microcampos de fuerza internos letales"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 5,
      energyProjection: 5,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/a0/52695bce37484",
      extension: "jpg"
    },
    comicCover: "/images/invisiblewoman-cover.png",
    notableComics: [
      "Fantastic Four: Malice (1985)",
      "Fantastic Four #280-#284",
      "Secret Wars (2015)"
    ],
    mcuAppearances: [
      "Fantastic Four (2005)",
      "Fantastic 4: Rise of the Silver Surfer (2007)",
      "The Fantastic Four: First Steps (2025)"
    ]
  },
  {
    id: 1009351,
    name: "Human Torch",
    realName: "Jonathan 'Johnny' Storm",
    team: "fantastic-four",
    teamLabel: "4 Fantásticos",
    description: "Hermano menor de Sue Storm, audaz piloto de carreras y buscador de emociones que puede envolverse en llamas vivientes al grito de «¡Flame On!»",
    biography: "Johnny absorbió una enorme dosis de radiación cósmica que le otorgó control absoluto sobre el fuego y el plasma. Su carisma y rivalidad amistosa con Spider-Man son legendarios.",
    firstAppearance: "The Fantastic Four #1 (1961)",
    powers: [
      "Envoltura de plasma ígneo con vuelo supersónico",
      "Proyección y absorción de bolas de fuego",
      "Llama Nova (liberación térmica de más de un millón de grados)",
      "Inmunidad total al calor y combustión"
    ],
    stats: {
      intelligence: 2,
      strength: 2,
      speed: 4,
      durability: 2,
      energyProjection: 5,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/1/00/537bb26456f4e",
      extension: "jpg"
    },
    comicCover: "/images/humantorch-cover.png",
    notableComics: [
      "Fantastic Four #587 (Three Saga)",
      "Spider-Man & Human Torch (2005)",
      "Fantastic Four by Mark Waid (2002)"
    ],
    mcuAppearances: [
      "Fantastic Four (2005)",
      "Deadpool & Wolverine (2024)",
      "The Fantastic Four: First Steps (2025)"
    ]
  },
  {
    id: 1009662,
    name: "The Thing",
    realName: "Benjamin Jacob 'Ben' Grimm",
    team: "fantastic-four",
    teamLabel: "4 Fantásticos",
    description: "Antiguo piloto de combate de la Fuerza Aérea de Yancy Street transformado en un titán de piel rocosa y corazón de oro. Famoso por su grito de combate: «¡Es la hora de las tortas!»",
    biography: "Ben pilotó la nave espacial de Reed Richards hacia el cinturón de radiación cósmica. La mutación lo convirtió en un coloso de piedra naranja de fuerza titánica que anhela secretamente recuperar su apariencia humana.",
    firstAppearance: "The Fantastic Four #1 (1961)",
    powers: [
      "Fuerza bruta titánica clase 100",
      "Epidermis rocosa ultra-resistente inmune al fuego y artillería",
      "Luchador de boxeo callejero indestructible",
      "Voluntad indomable que nunca retrocede"
    ],
    stats: {
      intelligence: 2,
      strength: 6,
      speed: 2,
      durability: 6,
      energyProjection: 1,
      fightingSkills: 5
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/e0/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/thething-cover.png",
    notableComics: [
      "This Man... This Monster! (Fantastic Four #51)",
      "Marvel Two-in-One (1974)",
      "The Thing: Freakshow (2002)"
    ],
    mcuAppearances: [
      "Fantastic Four (2005)",
      "Fantastic Four: Rise of the Silver Surfer (2007)",
      "The Fantastic Four: First Steps (2025)"
    ]
  },
  {
    id: 1009281,
    name: "Doctor Doom",
    realName: "Victor von Doom",
    team: "villains",
    teamLabel: "Villanos",
    description: "Monarca absoluto de Latveria, maestro supremo de las artes arcanas y genio tecnológico cibernético solo comparable a Reed Richards. Considera que solo bajo su mando la humanidad sobrevivirá.",
    biography: "Nacido en un campamento romaní de Latveria, Victor estudió ciencias en EE. UU. donde un experimento fallido le desfiguró el rostro. Coronándose tirano benévolo de Latveria, juró superar a Reed Richards.",
    firstAppearance: "The Fantastic Four #5 (1962)",
    powers: [
      "Intelecto científico genio (creador de la Plataforma del Tiempo y Doombots)",
      "Hechicería arcana de nivel casi supremo",
      "Armadura de titanio imbuida de escudos de energía cósmica",
      "Voluntad férrea inmune al control mental y dolor"
    ],
    stats: {
      intelligence: 6,
      strength: 4,
      speed: 2,
      durability: 5,
      energyProjection: 6,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/60/53176bb096d17",
      extension: "jpg"
    },
    comicCover: "/images/doctordoom-cover.png",
    notableComics: [
      "Books of Doom (2005)",
      "Triumph and Torment (1989)",
      "Secret Wars (2015)"
    ],
    mcuAppearances: [
      "Fantastic Four (2005)",
      "Avengers: Doomsday (2026)",
      "Avengers: Secret Wars (2027)"
    ]
  },
  {
    id: 1010733,
    name: "Star-Lord",
    realName: "Peter Jason Quill",
    team: "guardians",
    teamLabel: "Guardianes",
    description: "Líder de los Guardianes de la Galaxia. Mitad humano y mitad spartoi, forajido intergaláctico armado con pistolas de elementos cuádruples y devoto de los clásicos musicales de los 70 y 80.",
    biography: "Criado en el cosmos por los saqueadores de Yondu Udonta tras la muerte de su madre terrenal. Peter maduró de contrabandista descarado a salvador de la galaxia frente a Ronan y Thanos.",
    firstAppearance: "Marvel Preview #4 (1976)",
    powers: [
      "Pistolas de Elementos cuádruples (fuego, agua, aire, tierra)",
      "Casco espacial con HUD táctico y soporte vital autónomo",
      "Botas cohete de aceleración antigravitatoria",
      "Estratega militar improvisador y piloto estelar"
    ],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 2,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/a0/526547ec1512f",
      extension: "jpg"
    },
    comicCover: "/images/starlord-cover.png",
    notableComics: [
      "Annihilation: Conquest - Star-Lord (2007)",
      "Guardians of the Galaxy by Dan Abnett (2008)",
      "The Legendary Star-Lord (2014)"
    ],
    mcuAppearances: [
      "Guardians of the Galaxy (2014)",
      "Avengers: Infinity War (2018)",
      "Guardians of the Galaxy Vol 3 (2023)"
    ]
  },
  {
    id: 1010763,
    name: "Gamora",
    realName: "Gamora Zen Whoberi Ben Titan",
    team: "guardians",
    teamLabel: "Guardianes",
    description: "La mujer más peligrosa del universo. Última superviviente de la raza Zen-Whoberi, adoptada y mejorada biomecánicamente por Thanos como su asesina personal.",
    biography: "Entrenada sin piedad por el Titán Loco para derrocar al Magus. Gamora descubrió la atrocidad nihilista de su padre adoptivo y desertó uniéndose a los Guardianes de la Galaxia.",
    firstAppearance: "Strange Tales #180 (1975)",
    powers: [
      "Fuerza, agilidad y reflejos cibernéticamente aumentados",
      "Maestra en el 80% de estilos de combate armada y desarmada del cosmos",
      "Factor de curación aumentado",
      "Espada Godslayer capaz de cortar dioses"
    ],
    stats: {
      intelligence: 3,
      strength: 3,
      speed: 3,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 6
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/90/5260321257f80",
      extension: "jpg"
    },
    comicCover: "/images/gamora-cover.png",
    notableComics: [
      "Warlock by Jim Starlin (1975)",
      "Infinity Watch (1992)",
      "Gamora: Memento Mori (2017)"
    ],
    mcuAppearances: [
      "Guardians of the Galaxy (2014)",
      "Avengers: Infinity War (2018)",
      "Guardians of the Galaxy Vol 3 (2023)"
    ]
  },
  {
    id: 1010744,
    name: "Rocket Raccoon",
    realName: "Rocket (Sujeto 89P13)",
    team: "guardians",
    teamLabel: "Guardianes",
    description: "Genio de la ingeniería y demoliciones. Procarción antropomórfica genéticamente alterada en el planeta Halfworld con una pasión obsesiva por armas de plasma gigantes.",
    biography: "Torturado y mejorado cibernéticamente en crueles experimentos biológicos. Junto a su compañero árbol Groot, encontró una familia en los Guardianes y se convirtió en comandante del grupo.",
    firstAppearance: "Marvel Preview #7 (1976)",
    powers: [
      "Genio de ingeniería armamentística y balística espacial",
      "Puntería de precisión táctica con armamento pesado",
      "Sentidos animales hipersensibles",
      "Estratega de combate y demolición"
    ],
    stats: {
      intelligence: 4,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/b0/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/rocketraccoon-cover.png",
    notableComics: [
      "Rocket Raccoon Limited Series (1985)",
      "Annihilation: Conquest (2007)",
      "Rocket Raccoon by Skottie Young (2014)"
    ],
    mcuAppearances: [
      "Guardians of the Galaxy (2014)",
      "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol 3 (2023)"
    ]
  },
  {
    id: 1010743,
    name: "Groot",
    realName: "Groot del Planeta X",
    team: "guardians",
    teamLabel: "Guardianes",
    description: "Coloso Flora de la especie Ente Dendrónico del Planeta X. Un árbol inteligente de nobleza infinita cuyo vocabulario se resume en su inmortal frase: «I am Groot».",
    biography: "Exiliado de su mundo natal por salvar a niños humanos capturados, Groot vagó por el cosmos como cazarrecompensas junto a Rocket hasta dar su vida y renacer de una simple ramita para proteger a sus amigos.",
    firstAppearance: "Tales to Astonish #13 (1960)",
    powers: [
      "Regeneración completa a partir de una sola astilla o brote",
      "Manipulación de ramas, lianas espinosas y bioluminiscencia",
      "Fuerza titánica vegetal clase 100",
      "Elasticidad y ramificación táctica"
    ],
    stats: {
      intelligence: 3,
      strength: 6,
      speed: 1,
      durability: 6,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/10/526033c10fba4",
      extension: "jpg"
    },
    comicCover: "/images/groot-cover.png",
    notableComics: [
      "Annihilation: Conquest (2007)",
      "Guardians of the Galaxy (2008)",
      "Groot Limited Series (2015)"
    ],
    mcuAppearances: [
      "Guardians of the Galaxy (2014)",
      "Avengers: Infinity War (2018)",
      "Guardians of the Galaxy Vol 3 (2023)"
    ]
  },
  {
    id: 1009592,
    name: "Silver Surfer",
    realName: "Norrin Radd",
    team: "cosmic",
    teamLabel: "Cósmico",
    description: "Astrónomo pacífico de Zenn-La que sacrificó su libertad convirtiéndose en el Heraldo de Galactus para salvar a su planeta natal y a su amada Shalla-Bal.",
    biography: "Imbuido con el Poder Cósmico por el Devorador de Mundos, Norrin surca el vacío estelar sobre su tabla plateada hasta que la compasión humana de Alicia Masters y Los 4 Fantásticos lo inspiró a rebelarse contra su amo.",
    firstAppearance: "The Fantastic Four #48 (1966)",
    powers: [
      "Poder Cósmico (manipulación de energía y materia subatómica)",
      "Vuelo a hipervelocidad más rápida que la luz",
      "Sentidos cósmicos omnipresentes y empatía astral",
      "Invulnerabilidad absoluta al vacío espacial y supernovas"
    ],
    stats: {
      intelligence: 4,
      strength: 6,
      speed: 7,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/5269657a74350",
      extension: "jpg"
    },
    comicCover: "/images/silversurfer-cover.png",
    notableComics: [
      "The Galactus Trilogy (1966)",
      "Silver Surfer: Parable by Moebius & Stan Lee (1988)",
      "Silver Surfer: Requiem (2007)"
    ],
    mcuAppearances: [
      "Fantastic Four: Rise of the Silver Surfer (2007)",
      "The Fantastic Four: First Steps (2025)"
    ]
  },
  {
    id: 1009312,
    name: "Galactus",
    realName: "Galan de Taa",
    team: "cosmic",
    teamLabel: "Cósmico",
    description: "El Devorador de Mundos. Superviviente del universo anterior al Big Bang que existe como una fuerza fundamental de la naturaleza y equilibrio ecológico cósmico.",
    biography: "Último ser vivo del multiverso primigenio, renacido de la Matriz Cósmica como Galactus. Necesita drenar la energía biológica de planetas vivos para alimentar su hambre eterna y evitar el colapso del cosmos.",
    firstAppearance: "The Fantastic Four #48 (1966)",
    powers: [
      "Poder Cósmico absoluto de nivel cósmico primordial",
      "Creación de heraldos divinos y alteración de la realidad",
      "Inmortalidad y alteración de tamaño a escala colosal",
      "Conversión de energía planetaria"
    ],
    stats: {
      intelligence: 7,
      strength: 7,
      speed: 7,
      durability: 7,
      energyProjection: 7,
      fightingSkills: 2
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/03/537ba25608d08",
      extension: "jpg"
    },
    comicCover: "/images/galactus-cover.png",
    notableComics: [
      "The Coming of Galactus (1966)",
      "The Trial of Reed Richards (1982)",
      "Ultimates: Galactus Lifebringer (2016)"
    ],
    mcuAppearances: [
      "Fantastic Four: Rise of the Silver Surfer (2007)",
      "The Fantastic Four: First Steps (2025)"
    ]
  },
  {
    id: 1009323,
    name: "Green Goblin",
    realName: "Norman Osborn",
    team: "villains",
    teamLabel: "Villanos",
    description: "Multimillonario industrialista de Oscorp e implacable archienemigo de Spider-Man. Su fórmula del Duende aumentó su fuerza física e intelecto pero fragmentó su psique en la demencia más despiadada.",
    biography: "Obsesionado con destruir a Spider-Man tras deducir su identidad, Norman orquestó la fatídica muerte de Gwen Stacy en el puente George Washington y posteriormente se apoderó de SHIELD como director de H.A.M.M.E.R. durante el Dark Reign.",
    firstAppearance: "The Amazing Spider-Man #14 (1964)",
    powers: [
      "Fórmula del Duende (fuerza, resistencia y reflejos sobrehumanos)",
      "Planeador aerodeslizador artillado con cuchillas y misiles",
      "Bombas calabaza incendiarias y de gas somnífero",
      "Genio despiadado en química, finanzas y estrategia criminal"
    ],
    stats: {
      intelligence: 5,
      strength: 4,
      speed: 3,
      durability: 4,
      energyProjection: 3,
      fightingSkills: 3
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/e0/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/greengoblin-cover.png",
    notableComics: [
      "The Night Gwen Stacy Died (1973)",
      "Dark Reign (2008)",
      "Siege (2010)",
      "Red Goblin: Go Down Swinging (2018)"
    ],
    mcuAppearances: [
      "Spider-Man (2002)",
      "Spider-Man: No Way Home (2021)"
    ]
  },
  {
    id: 1009223,
    name: "Carnage",
    realName: "Cletus Cortland Kasady",
    team: "villains",
    teamLabel: "Villanos",
    description: "Asesino en serie psicópata fusionado a nivel sanguíneo con la descendencia mutada del simbionte Venom, formando un avatar de masacre indiscriminada y puro caos sangriento.",
    biography: "Compañero de celda de Eddie Brock en la prisión de Ryker's Island. Cuando el simbionte Venom rescató a Eddie, dejó una cría que ingresó en el torrente sanguíneo de Kasady a través de un corte, volviéndolo una máquina de matar imparable.",
    firstAppearance: "The Amazing Spider-Man #361 (1992)",
    powers: [
      "Generación de armas blancas, hachas y espinas desde su propia biomasa",
      "Fuerza superior a Spider-Man y Venom combinados",
      "Capacidad de camuflaje y regeneración celular extrema",
      "Inmunidad parcial a ataques sónicos gracias a su enlace sanguíneo"
    ],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 3,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 4
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/50/537ba313e6024",
      extension: "jpg"
    },
    comicCover: "/images/carnage-cover.png",
    notableComics: [
      "Maximum Carnage (1993)",
      "Carnage U.S.A. (2011)",
      "Absolute Carnage (2019)"
    ],
    mcuAppearances: [
      "Venom: Let There Be Carnage (2021)"
    ]
  }
];
