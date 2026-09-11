// Todo o copy da landing vive aqui, separado do JSX, para facilitar
// iteração de texto sem mexer em componentes.

export const hero = {
  headline: "O copiloto da sua família para uma infância mais saudável.",
  subheadline:
    "Sono, rotina e brincar sem carregar tudo na cabeça. Um copiloto de parentalidade no WhatsApp que transforma o que você já sabe em pequenas decisões práticas do dia a dia.",
  ctaPrimary: "Entrar na lista de espera",
  ctaSecondary: "Como funciona",
  credibility:
    "Baseado em recomendações da SBP e da OMS sobre sono, brincar livre e desenvolvimento infantil.",
  chat: [
    { from: "parent" as const, text: "A Laura acabou de acordar." },
    {
      from: "system" as const,
      text: "Dormiu 40 minutos a menos hoje. Vamos deixar a tarde mais leve — nada de estímulo pesado até o almoço.",
    },
    { from: "parent" as const, text: "Perfeito, obrigada 🙂" },
  ],
};

export const painPoints = {
  title: "Se você é pai ou mãe, provavelmente já pensou algo assim:",
  quotes: [
    "Meu filho dormiu mal. Como organizo o dia?",
    "Ele está entediado. O que faço sem colocar uma tela?",
    "Será que estou estimulando demais?",
    "Que brincadeira faz sentido para a idade dele?",
    "Como criar uma rotina que funcione para a nossa família?",
    "Estou fazendo o suficiente pelo desenvolvimento dele?",
    "Como evitar ou diminuir o uso de telas?",
    "Como encaixar momentos para meu autocuidado na rotina?",
  ],
  closing: "O problema não é falta de informação. É transformar tudo isso em comportamento cotidiano.",
};

export const bigIdea = {
  statement:
    "Não queremos que você faça mais coisas pelo seu filho. Queremos ajudar você a fazer menos coisas, mas melhores.",
  support:
    "Em vez de 50 atividades para estimular, uma brincadeira simples que permite que ele explore sozinho. Em vez de uma rotina perfeita, uma adaptada ao dia que vocês estão vivendo. Em vez de mais culpa, mais tranquilidade.",
};

export type Pillar = {
  id: "sono" | "rotina" | "brincar" | "desenvolvimento";
  index: string;
  icon: "moon" | "clock" | "sparkle" | "blocks";
  title: string;
  description: string;
  example: string;
};

export const pillars: Pillar[] = [
  {
    id: "sono",
    index: "01",
    icon: "moon",
    title: "Sono",
    description: "Ajuda a entender e organizar padrões, sem virar \"polícia do sono\".",
    example: "A Laura dormiu 40 minutos a menos. Vamos adaptar o restante do dia.",
  },
  {
    id: "rotina",
    index: "02",
    icon: "clock",
    title: "Rotina",
    description: "Blocos e ritmos, não agenda rígida. Adapta ao dia real.",
    example: "Manhã pesada? Aqui está uma tarde mais leve.",
  },
  {
    id: "brincar",
    index: "03",
    icon: "sparkle",
    title: "Livre brincar",
    description:
      "Cria oportunidades para a criança brincar com autonomia, sem lista de atividades educativas.",
    example: "Você tem 30 minutos e caixas de papelão. Faça isso.",
  },
  {
    id: "desenvolvimento",
    index: "04",
    icon: "blocks",
    title: "Desenvolvimento",
    description: "Organiza conhecimento por idade em oportunidades cotidianas de brincar.",
    example: "Nesta fase, ele pode explorar coordenação. Aqui vão 3 formas simples.",
  },
];

export const howItWorks = {
  title: "Como funciona",
  steps: [
    {
      number: "01",
      title: "Você conta.",
      detail: "O sistema entende o momento.",
    },
    {
      number: "02",
      title: "O sistema aprende.",
      detail: "Registra padrões de sono, brincadeiras recentes, interesses da criança.",
    },
    {
      number: "03",
      title: "Você recebe sugestões.",
      detail: "Pequenas decisões, no momento em que você precisa delas.",
    },
  ],
  closing: "Sem app novo. Sem aprender ferramenta. É só WhatsApp.",
};

export const childProfile = {
  title: "Cada criança tem um perfil. As sugestões ficam cada vez mais suas.",
  children: [
    {
      name: "Laura",
      age: "2 anos e 3 meses",
      routine: "Acorda 7h · soneca 13h–14h30 · dorme 20h",
      interests: "Caixas, água, empilhar objetos, música",
      recentPlay: "Brincou de encaixar potes na cozinha (ontem, 25min)",
      parentNote: "\"Ela anda muito seletiva com comida essa semana.\"",
    },
    {
      name: "Théo",
      age: "4 anos e 8 meses",
      routine: "Acorda 6h30 · sem soneca · dorme 20h30",
      interests: "Dinossauros, bicicleta, desenho, quebra-cabeça",
      recentPlay: "Montou uma pista de carrinho com almofadas (hoje, 40min)",
      parentNote: "\"Ele tá numa fase de perguntar 'por quê' sobre tudo.\"",
    },
  ],
};

export const sharedAccess = {
  eyebrow: "Acesso compartilhado",
  title: "Mais de uma pessoa cuida? Todo mundo pode acessar.",
  body: "Cônjuge, avós, babá — quem participa da rotina da criança pode usar o mesmo perfil pra tirar dúvidas sobre cuidado ou buscar ideias de brincadeiras. Ninguém fica de fora, e a criança recebe a mesma orientação, não importa quem está perguntando.",
  roles: ["Cônjuge", "Avós", "Babá", "Escola"],
  chat: [
    { from: "parent" as const, text: "Avó: Que brincadeira faz sentido pra ela essa semana?" },
    {
      from: "system" as const,
      text: "Nessa fase ela tá explorando encaixe e equilíbrio. Que tal empilhar potes ou caixas?",
    },
  ],
};

export const whatItIsNot = {
  title: "O que o Quintal não é",
  items: [
    "Não substitui pediatra, psicólogo ou nutricionista.",
    "Não faz diagnóstico.",
    "Não é uma lista infinita de tarefas para você cumprir.",
    "Não vai te dizer que você não está fazendo o suficiente.",
  ],
  closing: "Se algum dia você já fez o bastante, o próprio sistema te diz.",
};

export const familySetup = {
  headline: "Family Setup — para famílias que querem começar com o pé direito.",
  description:
    "Um especialista em parentalidade ajuda vocês a estruturar a rotina inicial, organizar o ambiente, definir prioridades e configurar o sistema. Um bate-papo de 60–90 minutos, um documento de setup, e acompanhamento nas primeiras 2 semanas.",
  price: "A partir de R$ 500",
  priceNote: "Estamos ajustando o preço com as primeiras famílias.",
  cta: "Quero começar pelo Family Setup",
};

export const waitlist = {
  title: "Estamos abrindo as primeiras 100 famílias.",
  subtitle: "Preço especial de fundador para quem entrar agora. Não vamos escalar antes de fazer certo com vocês.",
  fields: {
    name: { label: "Nome", placeholder: "Seu nome" },
    email: { label: "Email", placeholder: "voce@email.com" },
    whatsapp: { label: "WhatsApp", placeholder: "(11) 99999-9999" },
    childCount: {
      label: "Quantos filhos você tem?",
      options: [
        { value: "gestante", label: "Estou gestante" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4+", label: "4 ou mais" },
      ],
    },
    childAge: {
      label: "Idade do(s) filho(s)",
      options: [
        { value: "0-6m", label: "0–6 meses" },
        { value: "6-12m", label: "6–12 meses" },
        { value: "1-2a", label: "1–2 anos" },
        { value: "2-3a", label: "2–3 anos" },
        { value: "3-4a", label: "3–4 anos" },
        { value: "4-6a", label: "4–6 anos" },
      ],
    },
    supportNetwork: {
      label: "Vocês possuem rede de apoio?",
      options: [
        { value: "avos", label: "Avós" },
        { value: "baba", label: "Babá ou cuidadora" },
        { value: "creche", label: "Creche ou escola" },
        { value: "amigos", label: "Amigos ou vizinhos" },
        { value: "nenhuma", label: "Não temos rede de apoio" },
        { value: "outra", label: "Outra" },
      ],
    },
    caregivers: {
      label: "Hoje quem participa ativamente na rotina de cuidado da(s) criança(s) além de você?",
      options: [
        { value: "conjuge", label: "Cônjuge ou parceiro(a)" },
        { value: "avos", label: "Avós" },
        { value: "baba", label: "Babá ou cuidadora" },
        { value: "escola", label: "Escola ou creche" },
        { value: "ninguem", label: "Ninguém, além de mim" },
        { value: "outra", label: "Outra" },
      ],
    },
    professionals: {
      label: "Você já contratou ou utiliza o serviço de quais profissionais hoje?",
      options: [
        { value: "pediatra", label: "Pediatra" },
        { value: "nutricionista", label: "Nutricionista" },
        { value: "sono", label: "Consultora de Sono" },
        { value: "amamentacao", label: "Consultora de Amamentação" },
        { value: "brincar-rotina", label: "Consultora de Brincar/Rotina" },
        { value: "enxoval", label: "Consultora de Enxoval" },
        { value: "nenhuma", label: "Nenhum" },
      ],
    },
    courseTaken: {
      label: "Você já contratou algum curso para ajudar na parentalidade?",
      options: [
        { value: "sim", label: "Sim" },
        { value: "nao", label: "Não" },
      ],
    },
    appUsed: {
      label: "Você utiliza ou já utilizou algum aplicativo para ajudar na parentalidade hoje?",
      options: [
        { value: "sim", label: "Sim" },
        { value: "nao", label: "Não" },
      ],
    },
    painPoint: {
      label: "Qual dessas dores é mais forte pra você hoje?",
      options: [
        { value: "sono-rotina", label: "Sono e rotina" },
        { value: "tempo-tela", label: "Reduzir tempo de tela" },
        { value: "brincar", label: "Ideias de brincar sem gastar" },
        { value: "desenvolvimento", label: "Desenvolvimento infantil" },
        { value: "outra", label: "Outra" },
      ],
    },
    challenges: {
      label: "O que é mais desafiador na rotina de cuidado hoje?",
      options: [
        { value: "sono", label: "Sono da criança" },
        { value: "rotina", label: "Rotina e organização do dia a dia" },
        { value: "tela", label: "Reduzir tempo de tela" },
        { value: "brincar", label: "Ideias de brincar e estímulo" },
        { value: "desenvolvimento", label: "Desenvolvimento infantil" },
        { value: "trabalho-cuidado", label: "Conciliar trabalho e cuidado" },
        { value: "tempo-para-si", label: "Falta de tempo para si mesma(o)" },
        { value: "cansaco", label: "Cansaço físico e mental" },
        { value: "outra", label: "Outra" },
      ],
    },
    howFound: {
      label: "Como você nos conheceu?",
      options: [
        { value: "instagram", label: "Instagram" },
        { value: "indicacao", label: "Indicação de amigo(a) ou família" },
        { value: "google", label: "Google" },
        { value: "tiktok", label: "TikTok" },
        { value: "grupo-whatsapp", label: "Grupo de WhatsApp" },
        { value: "outra", label: "Outra" },
      ],
    },
    expectation: {
      label: "Qual é a sua principal expectativa com o uso do Quintal?",
      placeholder: "Conta pra gente com suas palavras...",
    },
    familySetupInterest: "Também quero saber sobre o Family Setup (serviço R$ 500+)",
  },
  submit: "Entrar na lista de espera",
  submitting: "Enviando…",
  successToast: "Você está na lista! Redirecionando…",
  errorGeneric: "Algo deu errado. Tenta de novo em instantes?",
  errorRateLimit: "Muitas tentativas. Espera um pouco e tenta de novo.",
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    { question: "É um app?", answer: "Não. É WhatsApp." },
    { question: "Substitui pediatra?", answer: "Não. Complementa." },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim — seguimos LGPD, especialmente para dados de menores.",
    },
    {
      question: "Funciona para pai e mãe juntos?",
      answer: "Sim, o mesmo perfil da criança fica visível para os dois.",
    },
    {
      question: "Quanto vai custar depois?",
      answer:
        "Estamos definindo com as primeiras famílias. As primeiras terão preço de fundador para sempre.",
    },
    {
      question: "Vocês vão me lotar de tarefas?",
      answer: "Não. Se um dia você fez o suficiente, a gente te fala.",
    },
  ],
};

export const thankYou = {
  title: "Você está na lista.",
  message:
    "Vamos te contar tudo pelas próximas semanas — sem spam, sem enrolação. Fica de olho no seu email.",
  helpTitle: "Nos ajuda mais?",
  helpMessage: "Marca 15 minutos com a gente pra bater um papo.",
  calendlyCta: "Agendar conversa",
  backHome: "Voltar para o início",
};

export const footer = {
  name: "Quintal",
  tagline: "Um copiloto de parentalidade no WhatsApp.",
  email: "ola@quintal.com.br",
  instagram: "https://instagram.com/quintal",
  privacy: "/privacidade",
  terms: "/termos",
};
