export interface MarvelPowerGrid {
  intelligence: number; // 1-7
  strength: number;     // 1-7
  speed: number;        // 1-7
  durability: number;   // 1-7
  energyProjection: number; // 1-7
  fightingSkills: number;   // 1-7
}

export type MarvelTeam = 'avengers' | 'spider-verse' | 'x-men' | 'cosmic' | 'villains' | 'street';

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
    powers: ["Vuelo hipersónico", "Rayos repulsores", "Unibeam en el pecho", "Armaduras modulares nanotecnológicas", "Genio intelecto nivel 12"],
    stats: {
      intelligence: 6,
      strength: 6,
      speed: 5,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
      extension: "jpg"
    },
    comicCover: "/images/ironman-cover.jpg",
    notableComics: ["Demon in a Bottle (1979)", "Armor Wars (1987)", "Extremis (2005)", "Civil War (2006)"],
    mcuAppearances: ["Iron Man (2008)", "The Avengers (2012)", "Avengers: Endgame (2019)"],
  },
  {
    id: 1009220,
    name: "Spider-Man",
    realName: "Peter Benjamin Parker",
    team: "spider-verse",
    teamLabel: "Spider-Verse",
    description: "El icónico trepamuros de Queens. Mordido por una araña radiactiva, aprendió a través de la pérdida que un gran poder conlleva una gran responsabilidad.",
    biography: "Huérfano criado por sus tíos Ben y May, Peter Parker adquirió habilidades arácnidas a los 15 años. Inicialmente buscando fama, la trágica muerte de su tío Ben por un criminal que Peter dejó escapar lo marcó para siempre como el vigilante más noble y sacrificado de Nueva York.",
    firstAppearance: "Amazing Fantasy #15 (1962)",
    powers: ["Fuerza proporcional de araña", "Sentido arácnido precognitivo", "Adherencia a superficies", "Lanza-telarañas sintéticos", "Agilidad sobrehumana"],
    stats: {
      intelligence: 4,
      strength: 4,
      speed: 3,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 5,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
      extension: "jpg"
    },
    comicCover: "/images/spiderman-cover.jpg",
    notableComics: ["The Night Gwen Stacy Died (1973)", "Kraven's Last Hunt (1987)", "Spider-Verse (2014)"],
    mcuAppearances: ["Spider-Man: Homecoming (2017)", "Avengers: Infinity War (2018)", "Spider-Man: No Way Home (2021)"],
  },
  {
    id: 1009610,
    name: "Captain America",
    realName: "Steven Grant Rogers",
    team: "avengers",
    teamLabel: "Avengers",
    description: "El Centinela de la Libertad. Un soldado de la Segunda Guerra Mundial mejorado con el Suero del Súper Soldado y armado con un escudo de Vibranium indestructible.",
    biography: "Steve Rogers fue rechazado por el ejército debido a su fragilidad física. Voluntario para la Operación Renacer, el suero del Dr. Erskine lo elevó a la cúspide del potencial físico humano. Congelado en el hielo al final de la guerra, despertó décadas después para liderar a los Vengadores en la era moderna.",
    firstAppearance: "Captain America Comics #1 (1941)",
    powers: ["Físico humano máximo absoluto", "Maestría táctica militar sin igual", "Escudo de aleación Vibranium-Proto-Adamantium", "Resistencia sobrehumana"],
    stats: {
      intelligence: 3,
      strength: 3,
      speed: 2,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 6,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/3/60/5232158de5b16",
      extension: "jpg"
    },
    comicCover: "/images/capitan-america-cover.jpg",
    notableComics: ["The Winter Soldier (2005)", "Civil War (2006)", "Captain America Reborn (2009)"],
    mcuAppearances: ["Captain America: The First Avenger (2011)", "The Winter Soldier (2014)", "Avengers: Endgame (2019)"],
  },
  {
    id: 1009664,
    name: "Thor",
    realName: "Thor Odinson",
    team: "cosmic",
    teamLabel: "Avengers / Cósmico",
    description: "El Dios nórdico del Trueno, príncipe heredero de Asgard y portador del legendario martillo místico Mjölnir y el hacha Stormbreaker.",
    biography: "Hijo de Odín y protector de Midgard (la Tierra). Desterrado originalmente a la Tierra en el cuerpo del doctor mortal Donald Blake para aprender humildad, Thor recuperó su divinidad y se convirtió en miembro fundador de los Vengadores y baluarte cósmico del universo.",
    firstAppearance: "Journey into Mystery #83 (1962)",
    powers: ["Manipulación meteorológica del trueno y relámpago", "Fuerza divina colosal", "Inmortalidad asgardiana", "Vuelo y apertura de portales dimensionales", "Mjölnir y Stormbreaker"],
    stats: {
      intelligence: 2,
      strength: 7,
      speed: 6,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/b/f0/5202887448860",
      extension: "jpg"
    },
    comicCover: "/images/thor-cover.jpg",
    notableComics: ["The Ballad of Beta Ray Bill (1983)", "Ragnarok (2004)", "The God Butcher (2013)"],
    mcuAppearances: ["Thor (2011)", "Thor: Ragnarok (2017)", "Avengers: Infinity War (2018)"],
  },
  {
    id: 1009189,
    name: "Hulk",
    realName: "Dr. Robert Bruce Banner",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Un científico nuclear pacífico que, bombardeado por radiación gamma, se transforma en la masa de furia y fuerza destructiva más temida y querida del planeta.",
    biography: "Durante la prueba de una bomba gamma experimental, Bruce Banner corrió al campo de tiro para salvar a un adolescente. La explosión mutó su ADN: cuando su ritmo cardíaco y estrés se disparan, la bestia esmeralda toma el control con un nivel de fuerza que no tiene límite superior conocido.",
    firstAppearance: "The Incredible Hulk #1 (1962)",
    powers: ["Fuerza infinita escalable con la ira", "Factor de curación regenerativo hiperveloz", "Resistencia a temperaturas y explosiones atómicas", "Saltos que cruzan continentes"],
    stats: {
      intelligence: 6, // Como Banner
      strength: 7,
      speed: 3,
      durability: 7,
      energyProjection: 1,
      fightingSkills: 4,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
      extension: "jpg"
    },
    comicCover: "/images/hulk-cover.jpg",
    notableComics: ["Planet Hulk (2006)", "World War Hulk (2007)", "Immortal Hulk (2018)"],
    mcuAppearances: ["The Avengers (2012)", "Thor: Ragnarok (2017)", "Avengers: Endgame (2019)"],
  },
  {
    id: 1009546,
    name: "Black Widow",
    realName: "Natalia 'Natasha' Alianovna Romanoff",
    team: "avengers",
    teamLabel: "Avengers / Street",
    description: "Graduada de la infame Habitación Roja soviética, Natasha Romanoff es la maestra espía y asesina táctica definitiva, redimida como Vengadora central.",
    biography: "Sometida desde su infancia a un riguroso entrenamiento en artes marciales, infiltración y bioquímica en la Sala Roja, desertó a Occidente gracias a Clint Barton. Su maestría en guerra psicológica y combate la hacen peligrosa incluso frente a dioses y extraterrestres.",
    firstAppearance: "Tales of Suspense #52 (1964)",
    powers: ["Maestra en todas las artes marciales terrestres", "Aguijones de la Viuda (descargas bioeléctricas)", "Táctica de infiltración y hackeo de élite", "Envejecimiento biológico ralentizado"],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 3,
      fightingSkills: 6,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/20/5202887448860",
      extension: "jpg"
    },
    comicCover: "/images/blackwidow-cover.jpg",
    notableComics: ["The Itsy-Bitsy Spider (1999)", "The Name of the Rose (2010)", "Web of Intrigue"],
    mcuAppearances: ["Iron Man 2 (2010)", "The Winter Soldier (2014)", "Black Widow (2021)"],
  },
  {
    id: 1009718,
    name: "Wolverine",
    realName: "James 'Logan' Howlett",
    team: "x-men",
    teamLabel: "X-Men",
    description: "El mutante más letal de la historia. Esqueleto recubierto de Adamantium indestructible, garras retráctiles y un factor curativo milagroso.",
    biography: "Nacido en Canadá en el siglo XIX, Logan sobrevivió a guerras mundiales y tragedias antes de ser secuestrado por el programa militar Arma X, que fusionó el metal Adamantium a sus huesos. Rescatado por el Profesor Charles Xavier, se convirtió en el pilar más fiero de los X-Men.",
    firstAppearance: "The Incredible Hulk #181 (1974)",
    powers: ["Garras retráctiles de Adamantium puro", "Factor regenerativo biológico instantáneo", "Sentidos animales hiperagudos", "Inmunidad a casi todos los venenos y toxinas"],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 2,
      durability: 5,
      energyProjection: 1,
      fightingSkills: 7,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
      extension: "jpg"
    },
    comicCover: "/images/wolverine-cover.jpg",
    notableComics: ["Weapon X (1991)", "Old Man Logan (2008)", "Death of Wolverine (2014)"],
    mcuAppearances: ["X-Men (2000)", "Logan (2017)", "Deadpool & Wolverine (2024)"],
  },
  {
    id: 1009282,
    name: "Doctor Strange",
    realName: "Stephen Vincent Strange",
    team: "cosmic",
    teamLabel: "Avengers / Místico",
    description: "Antiguo neurocirujano de renombre que, tras perder la destreza de sus manos, descubrió las artes místicas y se convirtió en el Hechicero Supremo de la Tierra.",
    biography: "Guiado por el Anciano en Kamar-Taj, Stephen Strange dominó las energías extradimensionales para proteger el tejido del espacio-tiempo de entidades como Dormammu y Shuma-Gorath con el Ojo de Agamotto.",
    firstAppearance: "Strange Tales #110 (1963)",
    powers: ["Hechicería suprema multiversal", "Manipulación del tiempo y dimensiones", "Ojo de Agamotto y Capa de Levitación", "Proyección astral"],
    stats: {
      intelligence: 4,
      strength: 2,
      speed: 2,
      durability: 3,
      energyProjection: 6,
      fightingSkills: 3,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["A Separate Reality (1974)", "The Oath (2006)", "Damnation (2018)"],
    mcuAppearances: ["Doctor Strange (2016)", "Avengers: Infinity War (2018)", "Multiverse of Madness (2022)"],
  },
  {
    id: 1009562,
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    team: "cosmic",
    teamLabel: "Avengers / Místico",
    description: "Una de las entidades más poderosas del multiverso, capaz de reescribir la realidad mediante magia del caos y distorsión de probabilidades.",
    biography: "Nacida con poderes mutantes en Transia, Wanda fue bendecida y maldita con la Magia del Caos del dios ancestral Chthon. Con tres palabras ('No More Mutants'), despojó de poderes a millones en el evento House of M.",
    firstAppearance: "X-Men #4 (1964)",
    powers: ["Magia del Caos pura", "Manipulación de la probabilidad y la realidad", "Telequinesis y telepatía", "Vuelo y blast de energía mística"],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 6,
      fightingSkills: 3,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["House of M (2005)", "Avengers Disassembled (2004)", "The Vision and the Scarlet Witch"],
    mcuAppearances: ["Avengers: Age of Ultron (2015)", "WandaVision (2021)", "Multiverse of Madness (2022)"],
  },
  {
    id: 1009187,
    name: "Black Panther",
    realName: "T'Challa",
    team: "avengers",
    teamLabel: "Avengers",
    description: "Rey soberano de la tecnológicamente avanzada nación oculta de Wakanda, bendecido por la Diosa Pantera Bast con la Hierba de Corazón.",
    biography: "T'Challa es a la vez un estadista brillante con doctorado en física y el más temido guerrero protector de su pueblo. Portador del hábito de Pantera Negra con tejido de Vibranium que absorbe y redirige la energía cinética.",
    firstAppearance: "Fantastic Four #52 (1966)",
    powers: ["Físico sobrehumano por la Hierba de Corazón", "Traje de micromalla de Vibranium", "Garras de anti-metal", "Intelecto de nivel científico y estratega global"],
    stats: {
      intelligence: 5,
      strength: 3,
      speed: 2,
      durability: 3,
      energyProjection: 3,
      fightingSkills: 5,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["Panther's Rage (1973)", "Enemy of the State (1998)", "A Nation Under Our Feet (2016)"],
    mcuAppearances: ["Captain America: Civil War (2016)", "Black Panther (2018)", "Avengers: Endgame (2019)"],
  },
  {
    id: 1009268,
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    team: "x-men",
    teamLabel: "X-Men / Antihéroe",
    description: "El Mercenario Bocazas. Poseedor del factor de curación más ridículamente potente del universo y consciente de ser un personaje de cómic que rompe la cuarta pared.",
    biography: "Exmilitar canadiense diagnosticado con cáncer terminal que se sometió al programa Arma X para sobrevivir. El experimento le otorgó una regeneración superior a la de Wolverine pero desfiguró su cuerpo y desquició su mente.",
    firstAppearance: "The New Mutants #98 (1991)",
    powers: ["Regeneración infinita (inmortal)", "Ruptura constante de la cuarta pared", "Maestría en katanas, armas de fuego y explosivos", "Inmunidad a control mental"],
    stats: {
      intelligence: 2,
      strength: 4,
      speed: 2,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 6,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["Deadpool Kills the Marvel Universe (2012)", "The Good, The Bad and The Ugly (2013)"],
    mcuAppearances: ["Deadpool (2016)", "Deadpool 2 (2018)", "Deadpool & Wolverine (2024)"],
  },
  {
    id: 1009652,
    name: "Thanos",
    realName: "Thanos de Titán",
    team: "villains",
    teamLabel: "Villanos / Cósmico",
    description: "El Titán Loco. Filosofo nihilista y conquistador cósmico obsesionado con cortejar a la Muerte misma reuniendo las seis Gemas del Infinito.",
    biography: "Nacido en la luna Titán con el síndrome del Deviante, Thanos se convirtió en el azote de las galaxias. Con el Guantelete del Infinito completo, es capaz de borrar la mitad de la vida de un solo chasquido de dedos.",
    firstAppearance: "The Invincible Iron Man #55 (1973)",
    powers: ["Fisiología de Eterno / Deviante sobrehumana", "Intelecto genio cósmico", "Manipulación de energía cósmica", "Uso del Guantelete del Infinito"],
    stats: {
      intelligence: 6,
      strength: 7,
      speed: 3,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/40/5261a80a67e7d",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["The Infinity Gauntlet (1991)", "Thanos Quest (1990)", "Infinity (2013)"],
    mcuAppearances: ["Avengers: Infinity War (2018)", "Avengers: Endgame (2019)"],
  },
  {
    id: 1009407,
    name: "Loki",
    realName: "Loki Laufeyson",
    team: "villains",
    teamLabel: "Villanos / Místico",
    description: "El Dios de las Mentiras y la Discordia. Hijo biológico del rey de los Gigantes de Hielo Laufey y criado como hermano adoptivo de Thor.",
    biography: "Maestro del engaño, las ilusiones y la hechicería asgardiana. Siempre oscilando entre villano implacable y salvador del multiverso, su destino lo llevó a sostener el Árbol del Tiempo en el clímax de la TVA.",
    firstAppearance: "Venus #6 (1949) / Journey into Mystery #85 (1962)",
    powers: ["Ilusionismo perfecto y metamorfosis", "Teletransportación y hechicería nórdica", "Fuerza y longevidad de gigante de hielo", "Manipulación psicológica"],
    stats: {
      intelligence: 5,
      strength: 5,
      speed: 3,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 3,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f50928e",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["Loki: Agent of Asgard (2014)", "The Trials of Loki", "Siege (2010)"],
    mcuAppearances: ["The Avengers (2012)", "Thor: Ragnarok (2017)", "Loki Serie Disney+ (2021-2023)"],
  },
  {
    id: 1010338,
    name: "Captain Marvel",
    realName: "Carol Susan Jane Danvers",
    team: "cosmic",
    teamLabel: "Avengers / Cósmico",
    description: "Antigua piloto de la Fuerza Aérea de EE. UU. cuyo ADN fue fusionado con la tecnología Kree, convirtiéndola en una potencia cósmica de energía binaria.",
    biography: "Carol Danvers absorbió la energía del motor hiperespacial impulsado por el Teseracto. Como Capitana Marvel, vuela por el cosmos protegiendo mundos indefensos a través de las galaxias con poderes equivalentes a supernovas.",
    firstAppearance: "Marvel Super-Heroes #13 (1968)",
    powers: ["Absorción y proyección de energía fotónica", "Vuelo a velocidad luz en el vacío", "Forma Binaria estelar", "Resistencia extrema a vacío cósmico"],
    stats: {
      intelligence: 3,
      strength: 5,
      speed: 5,
      durability: 6,
      energyProjection: 5,
      fightingSkills: 4,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["In Pursuit of Flight (2012)", "Civil War II (2016)", "The Life of Captain Marvel"],
    mcuAppearances: ["Captain Marvel (2019)", "Avengers: Endgame (2019)", "The Marvels (2023)"],
  },
  {
    id: 1009262,
    name: "Daredevil",
    realName: "Matthew 'Matt' Michael Murdock",
    team: "street",
    teamLabel: "Street Level",
    description: "El Hombre sin Miedo. Abogado de día en Hell's Kitchen y justiciero de noche, privado de la vista pero con sus otros cuatro sentidos aumentados a niveles sobrehumanos.",
    biography: "Cegado por residuos radiactivos en su infancia mientras salvaba a un anciano, Matt Murdock entrenó con el maestro ciego Stick para convertir su sentido del radar en un arma infalible contra el crimen organizado y Kingpin.",
    firstAppearance: "Daredevil #1 (1964)",
    powers: ["Sentido del radar ecolocalizador de 360 grados", "Audición, olfato y tacto ultrasensibles", "Maestría en ninjutsu y artes marciales", "Bastón multifunción Billy Club"],
    stats: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 1,
      fightingSkills: 5,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["Born Again (1986)", "The Man Without Fear (1993)", "Guardian Devil (1998)"],
    mcuAppearances: ["Daredevil Serie Netflix (2015-2018)", "Spider-Man: No Way Home (2021)", "Daredevil: Born Again (2025)"],
  },
  {
    id: 1010788,
    name: "Venom",
    realName: "Edward 'Eddie' Charles Allan Brock",
    team: "spider-verse",
    teamLabel: "Spider-Verse / Antihéroe",
    description: "La temible unión simbiótica entre el periodista deshonrado Eddie Brock y el simbionte alienígena Klyntar rechazado por Spider-Man.",
    biography: "Con un rencor compartido hacia Peter Parker, el simbionte y Eddie se unieron para convertirse en Venom. Aunque iniciaron como los enemigos más despiadados de Spidey, evolucionaron hasta ser el Protector Letal que defiende a los inocentes.",
    firstAppearance: "The Amazing Spider-Man #300 (1988)",
    powers: ["Fuerza superior a la de Spider-Man", "Generación de zarcillos y telarañas orgánicas", "Camuflaje mimético invisible", "Inmunidad al sentido arácnido"],
    stats: {
      intelligence: 3,
      strength: 5,
      speed: 3,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 4,
    },
    thumbnail: {
      path: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
      extension: "jpg"
    },
    comicCover: "/images/generic_marvel_image.jpg",
    notableComics: ["Lethal Protector (1993)", "Donny Cates' Venom Run (2018)", "King in Black (2020)"],
    mcuAppearances: ["Venom (2018)", "Venom: Let There Be Carnage (2021)", "The Last Dance (2024)"],
  },
];
