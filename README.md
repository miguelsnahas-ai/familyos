# Quintal — Landing page

Landing de smoke test para o Quintal (produto anteriormente chamado Family
OS): waitlist com formulário de qualificação, email de confirmação e
analytics para testar as 3 hipóteses de demanda (ver prompt original do
produto). Design system: Quintal Design System (peach/plum/lilac/clay/
butter, Gabarito + Hanken Grotesk + JetBrains Mono).

## Stack

- **Next.js 16 (App Router)** + TypeScript + Tailwind CSS v4
- **React Hook Form + Zod** para o formulário
- **Supabase** para armazenar os leads (tabela `waitlist_leads`)
- **Resend** para o email de confirmação
- **Vercel Analytics + Plausible + Meta Pixel** para os eventos de funil

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as chaves (veja abaixo)
npm run dev
```

Sem nenhuma variável de ambiente configurada, o formulário ainda funciona:
o lead simplesmente não é persistido e o email não é enviado (um aviso
aparece no console do servidor). Isso é proposital, para permitir testar a
UI sem depender de infra externa.

## Configurando as integrações

### Supabase (armazenamento dos leads)

Usa o projeto Supabase `familyos` (id `izattwaiqjzhydzhxlns`, organização
"miguelsnahas-ai's Org") — o mesmo projeto do backend do produto. A
landing só grava na tabela `waitlist_leads`; as demais tabelas
(`families`, `children`, `caregivers`, `messages`, `events`,
`ai_settings`) são do produto e não devem ser tocadas por este projeto.

`waitlist_leads` tem uma policy de RLS que permite **apenas INSERT** com
a chave anon/publishable — ela nunca consegue ler, atualizar ou apagar
leads existentes (nem tocar nas outras tabelas), então é segura mesmo
sendo uma chave "pública". Para ler os leads, use o SQL editor do
Supabase (dashboard) ou a service_role key manualmente.

⚠️ Existe um projeto Supabase antigo (`swfavmvtkcflkkirmxat`, org "Link
Ventures") de uma iteração anterior — não é mais usado. Se `SUPABASE_URL`
na Vercel não bater com `izattwaiqjzhydzhxlns`, é por isso que os envios
falham.

Se precisar recriar do zero: rode `supabase/schema.sql` no SQL editor de
um novo projeto e preencha `SUPABASE_URL` / `SUPABASE_ANON_KEY` com a
Project URL e a chave anon/publishable (Project Settings → Data API /
API Keys).

### Resend (email de confirmação)

1. Crie uma conta em [resend.com](https://resend.com) e gere uma API key.
2. Verifique um domínio de envio (ou use o domínio de sandbox deles para
   testar).
3. Preencha `RESEND_API_KEY` e `RESEND_FROM_EMAIL`.

### Analytics

- **Vercel Analytics**: ativa sozinho ao fazer deploy na Vercel (habilite
  em Project → Analytics no dashboard).
- **Plausible**: defina `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` com o domínio
  cadastrado no Plausible.
- **Meta Pixel**: defina `NEXT_PUBLIC_META_PIXEL_ID` com o ID do pixel.

Eventos instrumentados: `page_view`, `scroll_50`, `scroll_90`,
`pilar_click`, `waitlist_start`, `waitlist_submit_success`,
`family_setup_interest`.

### Calendly (opcional, página /obrigado)

Defina `NEXT_PUBLIC_CALENDLY_URL` para mostrar um botão de agendamento na
página de agradecimento.

## Editando o copy

Todo o texto da landing vive em `content.ts`, separado dos componentes —
edite ali para iterar headline, copy dos pilares, FAQ, etc. sem tocar em
JSX.

## Rate limiting e anti-spam

`/api/waitlist` tem um honeypot (campo invisível) e um rate limit básico
em memória (5 submissões por IP por hora). O rate limit é por instância
serverless — para produção com tráfego real, considere trocar por um
armazenamento compartilhado (Upstash Redis, por exemplo).

## Deploy

```bash
npm run build
```

Deploy recomendado: [Vercel](https://vercel.com/new). Configure as
variáveis de ambiente do `.env.example` no dashboard do projeto antes do
primeiro deploy.
