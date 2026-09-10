# Family OS — Landing page

Landing de smoke test para o Family OS: waitlist com formulário de qualificação,
email de confirmação e analytics para testar as 3 hipóteses de demanda (ver
prompt original do produto).

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

1. Crie um projeto em [supabase.com](https://supabase.com).
2. No SQL editor do projeto, rode o conteúdo de `supabase/schema.sql`.
3. Em Project Settings → API, copie a **Project URL** e a **service_role
   key** para `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`.
4. A tabela tem RLS habilitado sem policies públicas — só a service role
   key (usada no servidor, nunca no cliente) consegue gravar.

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
