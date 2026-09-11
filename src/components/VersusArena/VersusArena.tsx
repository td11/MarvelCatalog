import React, { useState, useMemo } from 'react';
import { MARVEL_CHARACTERS_DATA, MarvelCharacter, MarvelPowerGrid } from '../../data/marvelCharacters';
import { Swords, Zap, Shield, Sparkles, Trophy, Brain, Flame, Award } from 'lucide-react';
import './VersusArena.css';

interface VersusArenaProps {
  initialContenderA?: MarvelCharacter;
  initialContenderB?: MarvelCharacter;
}

const STAT_LABELS: { key: keyof MarvelPowerGrid; label: string; icon: string }[] = [
  { key: 'intelligence', label: 'Inteligencia', icon: '🧠' },
  { key: 'strength', label: 'Fuerza', icon: '💪' },
  { key: 'speed', label: 'Velocidad', icon: '⚡' },
  { key: 'durability', label: 'Resistencia', icon: '🛡️' },
  { key: 'energyProjection', label: 'Energía', icon: '🔮' },
  { key: 'fightingSkills', label: 'Combate', icon: '⚔️' },
];

const PRESETS: { label: string; heroA: number; heroB: number }[] = [
  { label: '⚔️ Civil War (Iron Man vs Cap)', heroA: 1009368, heroB: 1009610 },
  { label: '⚡ Duelo de Titanes (Hulk vs Thor)', heroA: 1009189, heroB: 1009664 },
  { label: '🩸 Factor Curativo (Wolverine vs Deadpool)', heroA: 1009718, heroB: 1009268 },
  { label: '👑 Dominación Absoluta (Thanos vs Doctor Doom)', heroA: 1009652, heroB: 1009281 },
  { label: '🕷️ Clásico Arácnido (Spider-Man vs Venom)', heroA: 1009220, heroB: 1010788 },
  { label: '🌌 Juicio Universal (Galactus vs Silver Surfer)', heroA: 1009312, heroB: 1009592 },
  { label: '🧬 Ideología Mutante (Profesor X vs Magneto)', heroA: 1009504, heroB: 1009417 },
];

function calcTotalStats(stats?: MarvelPowerGrid): number {
  if (!stats) return 0;
  return (
    stats.intelligence +
    stats.strength +
    stats.speed +
    stats.durability +
    stats.energyProjection +
    stats.fightingSkills
  );
}

export const VersusArena: React.FC<VersusArenaProps> = ({
  initialContenderA,
  initialContenderB,
}) => {
  const [fighterAId, setFighterAId] = useState<number>(
    initialContenderA?.id || 1009368 // Iron Man
  );
  const [fighterBId, setFighterBId] = useState<number>(
    initialContenderB?.id || 1009610 // Captain America
  );

  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  const fighterA = useMemo(
    () => MARVEL_CHARACTERS_DATA.find((c) => c.id === fighterAId) || MARVEL_CHARACTERS_DATA[0],
    [fighterAId]
  );
  const fighterB = useMemo(
    () => MARVEL_CHARACTERS_DATA.find((c) => c.id === fighterBId) || MARVEL_CHARACTERS_DATA[1],
    [fighterBId]
  );

  const totalA = useMemo(() => calcTotalStats(fighterA.stats), [fighterA]);
  const totalB = useMemo(() => calcTotalStats(fighterB.stats), [fighterB]);

  // Cálculo probabilístico basado en Power Grid ponderado
  const { probA, probB } = useMemo(() => {
    // Si los dos son idénticos
    if (fighterA.id === fighterB.id) {
      return { probA: 50, probB: 50 };
    }
    const scoreA =
      fighterA.stats.intelligence * 1.2 +
      fighterA.stats.strength * 1.5 +
      fighterA.stats.speed * 1.3 +
      fighterA.stats.durability * 1.4 +
      fighterA.stats.energyProjection * 1.4 +
      fighterA.stats.fightingSkills * 1.6;

    const scoreB =
      fighterB.stats.intelligence * 1.2 +
      fighterB.stats.strength * 1.5 +
      fighterB.stats.speed * 1.3 +
      fighterB.stats.durability * 1.4 +
      fighterB.stats.energyProjection * 1.4 +
      fighterB.stats.fightingSkills * 1.6;

    const total = scoreA + scoreB;
    const pA = Math.round((scoreA / total) * 100);
    const pB = 100 - pA;
    return { probA: pA, probB: pB };
  }, [fighterA, fighterB]);

  // Análisis táctico dinámico SHIELD
  const tacticalReport = useMemo(() => {
    if (fighterA.id === fighterB.id) {
      return `Simulación especular: Ambos combatientes disponen de los mismos atributos (${fighterA.name}). El combate se decidirá por microerrores o condiciones de entorno fortuito.`;
    }

    const deltas: string[] = [];
    if (fighterA.stats.intelligence > fighterB.stats.intelligence) {
      deltas.push(`La superioridad estratégica de ${fighterA.name} otorga control táctico de campo.`);
    } else if (fighterB.stats.intelligence > fighterA.stats.intelligence) {
      deltas.push(`La anticipación táctica de ${fighterB.name} contrarrestará ofensivas tempranas.`);
    }

    if (fighterA.stats.durability > fighterB.stats.durability) {
      deltas.push(`${fighterA.name} resistirá un combate de desgaste prolongado gracias a su absorción de daño.`);
    } else if (fighterB.stats.durability > fighterA.stats.durability) {
      deltas.push(`${fighterB.name} posee una ventaja defensiva clave en escenarios de asedio.`);
    }

    if (fighterA.stats.fightingSkills > fighterB.stats.fightingSkills) {
      deltas.push(`En corta distancia, la técnica marcial de ${fighterA.name} neutralizará acometidas directas.`);
    } else if (fighterB.stats.fightingSkills > fighterA.stats.fightingSkills) {
      deltas.push(`En el cuerpo a cuerpo, las destrezas bélicas de ${fighterB.name} decantan la ventaja.`);
    }

    const winnerName = probA > probB ? fighterA.name : fighterB.name;
    const loserName = probA > probB ? fighterB.name : fighterA.name;
    const diff = Math.abs(probA - probB);

    let conclusion = '';
    if (diff <= 6) {
      conclusion = `Conclusión S.H.I.E.L.D.: Choque ultracompetitivo de desenlace impredecible con ligera inclinación hacia ${winnerName}.`;
    } else if (diff <= 20) {
      conclusion = `Conclusión S.H.I.E.L.D.: ${winnerName} mantiene ventaja táctica sostenida, requiriendo que ${loserName} fuerce una brecha crítica en los primeros compases.`;
    } else {
      conclusion = `Conclusión S.H.I.E.L.D.: Superioridad cuantitativa categórica de ${winnerName}. Salvo intervención cósmica imprevista, ${winnerName} asegura la victoria.`;
    }

    return `${deltas.slice(0, 2).join(' ')} ${conclusion}`;
  }, [fighterA, fighterB, probA, probB]);

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      const winner = probA >= probB ? fighterA : fighterB;
      setSimulationResult(
        `¡Victoria estimada para ${winner.name.toUpperCase()} (${Math.max(probA, probB)}% probabilidad)!`
      );
    }, 1200);
  };

  const getCover = (char: MarvelCharacter) =>
    char.comicCover || `${char.thumbnail?.path}/portrait_incredible.${char.thumbnail?.extension || 'jpg'}`;

  return (
    <div className="versus-arena-wrapper">
      {/* Banner Versus Arena */}
      <section className="versus-hero-banner">
        <div className="versus-banner-pill">
          <Swords size={14} className="text-amber-400" />
          <span>SIMULADOR TÁCTICO DE COMBATE 1 VS 1</span>
        </div>
        <h2 className="versus-headline">VERSUS ARENA</h2>
        <p className="versus-subheadline">
          Enfrenta a dos iconos del Universo Marvel cara a cara. Analiza el cruce de sus Power Grids oficiales,
          ventajas de combate y probabilidades de victoria calculadas según los protocolos tácticos de S.H.I.E.L.D.
        </p>

        {/* Presets Rápidos */}
        <div className="versus-presets">
          <span className="versus-presets-title">Duelos Históricos:</span>
          <div className="versus-presets-scroll">
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                type="button"
                className="versus-preset-btn"
                onClick={() => {
                  setFighterAId(p.heroA);
                  setFighterBId(p.heroB);
                  setSimulationResult(null);
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selector de Contendientes */}
      <div className="versus-selectors-bar">
        <div className="versus-select-group">
          <label className="versus-label">Contendiente Alfa (Rojo)</label>
          <select
            value={fighterAId}
            onChange={(e) => {
              setFighterAId(Number(e.target.value));
              setSimulationResult(null);
            }}
            className="versus-select"
          >
            {MARVEL_CHARACTERS_DATA.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.teamLabel})
              </option>
            ))}
          </select>
        </div>

        <div className="versus-vs-badge">
          <Swords size={28} />
          <span>VS</span>
        </div>

        <div className="versus-select-group">
          <label className="versus-label">Contendiente Omega (Azul)</label>
          <select
            value={fighterBId}
            onChange={(e) => {
              setFighterBId(Number(e.target.value));
              setSimulationResult(null);
            }}
            className="versus-select"
          >
            {MARVEL_CHARACTERS_DATA.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.teamLabel})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tarjetas de Combate Cara a Cara */}
      <div className="versus-clash-container">
        {/* Contendiente A */}
        <div className="fighter-card fighter-a">
          <div className="fighter-badge">ALPHA CONTENDER</div>
          <div className="fighter-img-frame">
            <img
              src={getCover(fighterA)}
              alt={fighterA.name}
              className="fighter-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/generic_marvel_image.jpg';
              }}
            />
            <div className="fighter-prob-tag">{probA}%</div>
          </div>
          <div className="fighter-meta">
            <h3 className="fighter-name">{fighterA.name}</h3>
            <p className="fighter-sub">{fighterA.realName || fighterA.teamLabel}</p>
            <div className="fighter-score">
              <span>Total Grid:</span> <strong>{totalA}/42</strong>
            </div>
          </div>
        </div>

        {/* Panel Central de Probabilidades y Acción */}
        <div className="versus-center-action">
          <div className="versus-odds-meter">
            <div className="odds-label-row">
              <span className="text-red-400 font-bold">{probA}% {fighterA.name}</span>
              <span className="text-blue-400 font-bold">{fighterB.name} {probB}%</span>
            </div>
            <div className="odds-bar-track">
              <div
                className="odds-bar-fill-a"
                style={{ width: `${probA}%` }}
              />
              <div
                className="odds-bar-fill-b"
                style={{ width: `${probB}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSimulate}
            disabled={isSimulating}
            className={`versus-simulate-btn ${isSimulating ? 'simulating' : ''}`}
          >
            <Swords size={20} />
            <span>{isSimulating ? 'Analizando Combate...' : 'SIMULAR COMBATE'}</span>
          </button>

          {simulationResult && (
            <div className="versus-result-box">
              <Trophy size={20} className="text-yellow-400" />
              <span>{simulationResult}</span>
            </div>
          )}
        </div>

        {/* Contendiente B */}
        <div className="fighter-card fighter-b">
          <div className="fighter-badge">OMEGA CONTENDER</div>
          <div className="fighter-img-frame">
            <img
              src={getCover(fighterB)}
              alt={fighterB.name}
              className="fighter-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/generic_marvel_image.jpg';
              }}
            />
            <div className="fighter-prob-tag">{probB}%</div>
          </div>
          <div className="fighter-meta">
            <h3 className="fighter-name">{fighterB.name}</h3>
            <p className="fighter-sub">{fighterB.realName || fighterB.teamLabel}</p>
            <div className="fighter-score">
              <span>Total Grid:</span> <strong>{totalB}/42</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Comparativa Detallada de Estadísticas Atributo a Atributo */}
      <section className="versus-stats-comparison">
        <h3 className="comparison-title">
          <Zap size={18} className="text-amber-400" />
          <span>Comparativa Oficial de Power Grids (1 a 7)</span>
        </h3>

        <div className="comparison-table">
          {STAT_LABELS.map(({ key, label, icon }) => {
            const valA = fighterA.stats[key] || 1;
            const valB = fighterB.stats[key] || 1;
            const advantage = valA > valB ? 'a' : valB > valA ? 'b' : 'tie';

            return (
              <div key={key} className="comparison-row">
                <div className={`comp-val comp-val-a ${advantage === 'a' ? 'winner' : ''}`}>
                  <span>{valA}/7</span>
                  <div className="comp-bar-wrapper">
                    <div
                      className="comp-bar-a"
                      style={{ width: `${(valA / 7) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="comp-stat-center">
                  <span className="comp-icon">{icon}</span>
                  <span className="comp-name">{label}</span>
                </div>

                <div className={`comp-val comp-val-b ${advantage === 'b' ? 'winner' : ''}`}>
                  <div className="comp-bar-wrapper right-align">
                    <div
                      className="comp-bar-b"
                      style={{ width: `${(valB / 7) * 100}%` }}
                    />
                  </div>
                  <span>{valB}/7</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Informe Táctico S.H.I.E.L.D. */}
      <section className="versus-tactical-report">
        <div className="report-header">
          <Shield size={18} className="text-red-400" />
          <h4>INFORME TÁCTICO CLASIFICADO — S.H.I.E.L.D. PROTOCOL 88</h4>
        </div>
        <p className="report-content">{tacticalReport}</p>
      </section>
    </div>
  );
};
