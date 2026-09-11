export interface MarvelSaga {
  id: string;
  title: string;
  year: number;
  badge: string;
  synopsis: string;
  keyIssues: string[];
  mainCharacters: string[];
  bannerGradient: string;
  impact: string;
}

export const MARVEL_SAGAS: MarvelSaga[] = [
  {
    id: 'infinity-gauntlet',
    title: 'The Infinity Gauntlet',
    year: 1991,
    badge: 'CÓSMICO / OMEGA',
    synopsis: 'Para complacer a la encarnación de la Muerte, Thanos el Titán Loco reúne las seis Gemas del Infinito en su guantelete y, con un simple chasquido de dedos, aniquila a la mitad de los seres vivos del universo.',
    keyIssues: ['The Infinity Gauntlet #1-#6', 'Silver Surfer #34-#38', 'Thanos Quest #1-#2'],
    mainCharacters: ['Thanos', 'Silver Surfer', 'Adam Warlock', 'Doctor Strange', 'Thor', 'Captain America'],
    bannerGradient: 'linear-gradient(135deg, #4c1d95 0%, #be185d 50%, #f59e0b 100%)',
    impact: 'El evento cósmico que definió la mitología del poder absoluto en Marvel y cimiento del clímax de Avengers: Infinity War y Endgame.',
  },
  {
    id: 'civil-war',
    title: 'Civil War',
    year: 2006,
    badge: 'POLÍTICO / CONFLICTO',
    synopsis: 'Tras una tragedia causada por jóvenes superhumanos en Stamford, el gobierno de EE. UU. aprueba el Acta de Registro de Superhumanos. La comunidad heroica se fractura: Iron Man lidera a los partidarios del registro y el Capitán América a la resistencia clandestina.',
    keyIssues: ['Civil War #1-#7', 'Amazing Spider-Man #532-#538', 'Captain America #22-#25', 'Civil War: Front Line #1-#11'],
    mainCharacters: ['Iron Man', 'Captain America', 'Spider-Man', 'Mister Fantastic', 'Black Panther', 'Punisher'],
    bannerGradient: 'linear-gradient(135deg, #b91c1c 0%, #1e3a8a 100%)',
    impact: 'Reestructuración total de la moral heroica en Marvel, desembocando en la muerte de Steve Rogers y el mandato de Tony Stark como director de S.H.I.E.L.D.',
  },
  {
    id: 'secret-wars',
    title: 'Secret Wars',
    year: 2015,
    badge: 'MULTIVERSAL',
    synopsis: 'Las Incursiones colapsan el multiverso Marvel. De los fragmentos de realidades destruidas, Doctor Doom utiliza el poder de los Beyonders para forjar Battleworld, donde reina como Dios Emperador omnipotente.',
    keyIssues: ['Secret Wars (2015) #1-#9', 'New Avengers Vol 3', 'Avengers Vol 5 (Time Runs Out)'],
    mainCharacters: ['Doctor Doom', 'Mister Fantastic', 'Black Panther', 'Thanos', 'Miles Morales', 'Thor'],
    bannerGradient: 'linear-gradient(135deg, #1e293b 0%, #047857 50%, #0f172a 100%)',
    impact: 'El evento multiversal definitivo escrito por Jonathan Hickman que unificó el Universo Ultimate con la continuidad principal 616.',
  },
  {
    id: 'planet-hulk',
    title: 'Planet Hulk & World War Hulk',
    year: 2006,
    badge: 'GLADIADOR / VENGANZA',
    synopsis: 'Considerado una amenaza incontrolable para la Tierra, los Illuminati exilian a Hulk al espacio exterior. El gigante aterriza en el salvaje planeta Sakaar, donde pasa de esclavo gladiador a Emperador libertador antes de regresar a la Tierra en busca de venganza.',
    keyIssues: ['Incredible Hulk #92-#105', 'World War Hulk #1-#5', 'World War Hulk: X-Men #1-#3'],
    mainCharacters: ['Hulk', 'Iron Man', 'Doctor Strange', 'Mister Fantastic', 'Black Bolt', 'The Sentry'],
    bannerGradient: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #78350f 100%)',
    impact: 'Consolidó a Hulk como la fuerza imparable definitiva de Marvel y fue adaptado parcialmente en la película Thor: Ragnarok.',
  },
  {
    id: 'house-of-m',
    title: 'House of M',
    year: 2005,
    badge: 'DISTOPÍA MUTANTE',
    synopsis: 'Wanda Maximoff (Scarlet Witch), devastada por el dolor psicológico, altera el tejido de la realidad creando un mundo utópico donde los mutantes son la especie dominante liderada por la dinastía de Magneto. Al derrumbarse la ilusión, pronuncia las infames palabras: «No More Mutants».',
    keyIssues: ['House of M #1-#8', 'Uncanny X-Men #462-#465', 'New X-Men: Academy X #16-#19'],
    mainCharacters: ['Scarlet Witch', 'Magneto', 'Wolverine', 'Professor X', 'Spider-Man', 'Emma Frost'],
    bannerGradient: 'linear-gradient(135deg, #881337 0%, #9f1239 50%, #4c0519 100%)',
    impact: 'El Día M redujo a la población mutante mundial de millones a solo 198, marcando una década de historias de supervivencia de los X-Men.',
  },
  {
    id: 'dark-phoenix',
    title: 'The Dark Phoenix Saga',
    year: 1980,
    badge: 'CÓSMICO / TRAGEDIA',
    synopsis: 'La Fuerza Fénix cósmica corrompe a Jean Grey tras ser manipulada por el Hellfire Club. Convertida en Fénix Oscura, consume una estrella matando a billones, lo que lleva al Imperio Shi’ar a exigir su ejecución en la Luna.',
    keyIssues: ['Uncanny X-Men #129-#138'],
    mainCharacters: ['Jean Grey', 'Cyclops', 'Wolverine', 'Storm', 'Professor X', 'Colossus'],
    bannerGradient: 'linear-gradient(135deg, #ea580c 0%, #b45309 50%, #7c2d12 100%)',
    impact: 'Considerada por la crítica como la cumbre narrativa de Chris Claremont y John Byrne, estableciendo el estándar del drama mutante.',
  },
  {
    id: 'spider-verse',
    title: 'Spider-Verse',
    year: 2014,
    badge: 'MULTIVERSO ARÁCNIDO',
    synopsis: 'Morlun y su familia de vampiros psíquicos, los Herederos, cazan a todos los tótems arácnidos a través del multiverso. Spider-Man (Peter Parker) debe reunir un ejército con todas las variantes arácnidas existentes para sobrevivir.',
    keyIssues: ['Amazing Spider-Man Vol 3 #9-#15', 'Edge of Spider-Verse #1-#5', 'Spider-Verse Team-Up #1-#3'],
    mainCharacters: ['Spider-Man', 'Miles Morales', 'Spider-Gwen', 'Spider-Man 2099', 'Silk', 'Carnage'],
    bannerGradient: 'linear-gradient(135deg, #0284c7 0%, #dc2626 50%, #1e1b4b 100%)',
    impact: 'Fenómeno cultural que originó a Spider-Gwen y sirvió de base a la trilogía cinematográfica oscarizada de Sony / Marvel.',
  },
  {
    id: 'born-again',
    title: 'Daredevil: Born Again',
    year: 1986,
    badge: 'NOIR / RESURRECCIÓN',
    synopsis: 'Karen Page vende la identidad secreta de Matt Murdock por una dosis de heroína. La información llega a Wilson Fisk (Kingpin), quien destruye sistemáticamente la vida, reputación, hogar y cordura de Daredevil.',
    keyIssues: ['Daredevil #227-#233'],
    mainCharacters: ['Daredevil', 'Kingpin', 'Captain America', 'Karen Page', 'Foggy Nelson'],
    bannerGradient: 'linear-gradient(135deg, #18181b 0%, #7f1d1d 70%, #000000 100%)',
    impact: 'La cumbre del cómic callejero y noir en Marvel por Frank Miller y David Mazzucchelli, inspirando la serie Daredevil de Netflix y Disney+.',
  },
];
