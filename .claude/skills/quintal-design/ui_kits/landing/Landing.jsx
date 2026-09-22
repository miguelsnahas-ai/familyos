/* Quintal — landing page recreation. Loaded by index.html via Babel standalone.
   Composes the design-system components; no export (kit file, not a primitive). */
const NS = window[Object.keys(window).find(k => /^DesignSystem_/.test(k))] || {};
const { Button, Input, Chip, Card, PillarCard, ChatThread, ChatBubble, ChildProfileCard, StepItem, HighlightStat, Icon, ChalkMark, ChalkDefs } = NS;

const PILLARS = [
  { index: "01", icon: "moon", title: "Sono", description: "Ajuda a entender e organizar padrões, sem virar polícia do sono.", example: "A Laura dormiu 40 minutos a menos. Vamos adaptar o restante do dia." },
  { index: "02", icon: "clock", title: "Rotina", description: "Blocos e ritmos, não agenda rígida. Adapta ao dia real.", example: "Manhã pesada? Aqui está uma tarde mais leve." },
  { index: "03", icon: "sparkle", title: "Livre brincar", description: "Cria oportunidades para a criança brincar com autonomia, sem lista de atividades educativas.", example: "Você tem 30 minutos e caixas de papelão. Faça isso." },
  { index: "04", icon: "blocks", title: "Desenvolvimento", description: "Organiza conhecimento por idade em oportunidades cotidianas de brincar.", example: "Nesta fase, ele pode explorar coordenação. Aqui vão 3 formas simples." },
];

const NOT = [
  "Não substitui pediatra, psicólogo ou nutricionista.",
  "Não faz diagnóstico.",
  "Não é uma lista infinita de tarefas para você cumprir.",
  "Não vai te dizer que você não está fazendo o suficiente.",
];

function Section({ children, style }) {
  return <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", ...style }}>{children}</section>;
}

function Landing() {
  const [joined, setJoined] = React.useState(false);
  return (
    <div style={{ background: "var(--pessego)", paddingBottom: "80px" }}>
      <ChalkDefs />

      <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,242,236,0.92)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(6px)" }}>
        <Section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "24px", letterSpacing: "-0.03em" }}>Quintal</span>
          <Button size="sm" onClick={() => setJoined(true)}>Entrar na lista</Button>
        </Section>
      </header>

      <Section style={{ paddingTop: "64px", paddingBottom: "64px", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)", gap: "48px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span className="q-eyebrow">Para famílias com crianças de 0 a 6 anos</span>
          <h1 style={{ fontSize: "var(--type-display-size)", fontWeight: 900, lineHeight: 0.98, letterSpacing: "-0.035em" }}>
            O copiloto da sua família para uma infância mais saudável.
          </h1>
          <p style={{ fontSize: "19px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0, maxWidth: "52ch" }}>
            Sono, rotina e brincar sem carregar tudo na cabeça. Um copiloto de parentalidade no WhatsApp que transforma o que você já sabe em pequenas decisões práticas do dia a dia.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Button onClick={() => setJoined(true)}>Entrar na lista de espera</Button>
            <Button variant="secondary">Como funciona <Icon name="arrowDown" size={16} /></Button>
          </div>
          <p style={{ fontSize: "13px", color: "var(--text-tertiary)", margin: 0, maxWidth: "46ch" }}>
            Baseado em recomendações da SBP e da OMS sobre sono, brincar livre e desenvolvimento infantil.
          </p>
        </div>
        <Card tone="dark" padding="24px" style={{ display: "flex", flexDirection: "column", gap: "14px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-10px", top: "-6px", opacity: 0.9 }}><ChalkMark mark="sun" scale={0.8} /></div>
          <ChatThread style={{ background: "rgba(253,242,236,0.06)" }}>
            <ChatBubble>A Laura acabou de acordar. Dormiu 40 minutos a menos hoje — vamos deixar a tarde mais leve, nada de estímulo pesado até o almoço.</ChatBubble>
            <ChatBubble from="family">Perfeito, obrigada</ChatBubble>
          </ChatThread>
          <span style={{ fontSize: "13px", color: "var(--text-on-dark-muted)" }}>Sem app novo. Sem aprender ferramenta. É só WhatsApp.</span>
        </Card>
      </Section>

      <Section style={{ paddingBottom: "64px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 style={{ fontSize: "var(--type-title-size)", fontWeight: 700, lineHeight: 1.1 }}>Se você é pai ou mãe, provavelmente já pensou algo assim:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Meu filho dormiu mal. Como organizo o dia?", "Ele está entediado. O que faço sem colocar uma tela?", "Será que estou estimulando demais?", "Que brincadeira faz sentido para a idade dele?", "Como criar uma rotina que funcione para a nossa família?", "Estou fazendo o suficiente pelo desenvolvimento dele?"].map((q) => (
            <Chip key={q} style={{ fontSize: "14px", fontWeight: 500, padding: "10px 16px" }}>{q}</Chip>
          ))}
        </div>
        <p style={{ fontSize: "19px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0, maxWidth: "62ch" }}>
          O problema não é falta de informação. É transformar tudo isso em comportamento cotidiano. Não queremos que você faça mais coisas pelo seu filho. Queremos ajudar você a fazer menos coisas, mas melhores.
        </p>
      </Section>

      <Section style={{ paddingBottom: "64px", display: "flex", flexDirection: "column", gap: "20px" }} id="pilares">
        <span className="q-eyebrow">Os quatro pilares</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
          {PILLARS.map((p) => <PillarCard key={p.title} {...p} icon={<Icon name={p.icon} />} />)}
        </div>
      </Section>

      <Section style={{ paddingBottom: "64px" }} id="como-funciona">
        <Card tone="dark" padding="36px" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ fontSize: "30px", fontWeight: 700, color: "var(--text-on-dark)" }}>Como funciona</h2>
            <ChalkMark mark="wave" color="var(--lilas)" scale={0.9} />
          </div>
          {[["01", "Você conta.", "O sistema entende o momento."], ["02", "O sistema aprende.", "Registra padrões de sono, brincadeiras recentes, interesses da criança."], ["03", "Você recebe sugestões.", "Pequenas decisões, no momento em que você precisa delas."]].map(([n, t, d]) => (
            <div key={n} style={{ display: "flex", gap: "14px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "34px", lineHeight: 1, color: "var(--manteiga)" }}>{n}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "19px", color: "var(--text-on-dark)" }}>{t}</span>
                <span style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--text-on-dark-muted)" }}>{d}</span>
              </span>
            </div>
          ))}
        </Card>
      </Section>

      <Section style={{ paddingBottom: "64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2 style={{ fontSize: "var(--type-title-size)", fontWeight: 700, lineHeight: 1.1 }}>Cada criança tem um perfil. As sugestões ficam cada vez mais suas.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {NOT.map((n) => (
              <div key={n} style={{ display: "flex", gap: "10px", fontSize: "15px", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--barro)" }}>—</span>{n}
              </div>
            ))}
          </div>
        </div>
        <ChildProfileCard name="Laura" age="2 anos e 3 meses" rows={[
          { label: "Rotina", value: "Acorda 7h · soneca 13h–14h30 · dorme 20h" },
          { label: "Interesses", value: "Caixas, água, empilhar objetos, música" },
          { label: "Brincadeira recente", value: "Brincou de encaixar potes na cozinha (ontem, 25min)" },
          { label: "Observação dos pais", value: "Ela anda muito seletiva com comida essa semana." },
        ]} />
      </Section>

      <Section style={{ paddingBottom: "64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "14px", alignItems: "start" }}>
        <Card style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span className="q-eyebrow">Family Setup</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "24px" }}>Para famílias que querem começar com o pé direito.</h3>
          <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
            Um especialista em parentalidade ajuda vocês a estruturar a rotina inicial, organizar o ambiente, definir prioridades e configurar o sistema. Um bate-papo de 60–90 minutos, um documento de setup, e acompanhamento nas primeiras 2 semanas.
          </p>
          <HighlightStat value="A partir de R$ 500" label="Estamos ajustando o preço com as primeiras famílias." />
          <Button variant="secondary">Quero começar pelo Family Setup</Button>
        </Card>
        <Card tone="dark" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "24px", color: "var(--text-on-dark)" }}>Estamos abrindo as primeiras 100 famílias.</h3>
          <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--text-on-dark-muted)", margin: 0 }}>
            Preço especial de fundador para quem entrar agora. Não vamos escalar antes de fazer certo com vocês.
          </p>
          {joined ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--manteiga)", fontWeight: 600 }}>
              <Icon name="check" /> Pronto. A gente te chama.
            </div>
          ) : (
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", flexWrap: "wrap" }}>
              <Input label="" placeholder="(11) 99999-9999" style={{ minWidth: "200px" }} />
              <Button onClick={() => setJoined(true)}>Entrar na lista</Button>
            </div>
          )}
        </Card>
      </Section>

      <Section style={{ borderTop: "1px solid var(--border)", paddingTop: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "20px" }}>Quintal</span>
        <span style={{ fontSize: "14px", color: "var(--text-tertiary)" }}>Um copiloto de parentalidade no WhatsApp. · ola@quintal.com.br</span>
      </Section>
    </div>
  );
}

window.Landing = Landing;
