import type { ColorInfo, TypographyInfo, TimingInfo, PlatformSpec, SoundInfo, Principle, Section } from '@/types';

export const sections: Section[] = [
  { id: 'introducao', title: 'Introdução', icon: 'BookOpen' },
  {
    id: 'fundacao', title: 'I. Fundação Visual', icon: 'Palette',
    subsections: [
      { id: 'paleta', title: 'Paleta de Cores' },
      { id: 'tipografia', title: 'Tipografia' },
      { id: 'movimento', title: 'Movimento e Ritmo' },
      { id: 'interface', title: 'Elementos de Interface' },
    ],
  },
  {
    id: 'estrutura', title: 'II. Estrutura de Edição', icon: 'Layout',
    subsections: [
      { id: 'canvas', title: 'Canvas e Proporções' },
      { id: 'edicao-padrao', title: 'Edição-Padrão' },
      { id: 'lower-third', title: 'Lower Third e Branding' },
    ],
  },
  {
    id: 'linguagem', title: 'III. Linguagem de Motion', icon: 'Video',
    subsections: [
      { id: 'demo', title: 'Demo de Ferramenta' },
      { id: 'comparativo', title: 'Comparativo' },
      { id: 'jornada', title: 'Jornada da Agência' },
      { id: 'autoridade', title: 'Autoridade de Mercado' },
      { id: 'prova-social', title: 'Prova Social' },
    ],
  },
  {
    id: 'som', title: 'IV. Som em Motion', icon: 'Volume2',
    subsections: [
      { id: 'trilha', title: 'Trilha de Fundo' },
      { id: 'sons-interface', title: 'Sons de Interface' },
      { id: 'narracao', title: 'Narração' },
    ],
  },
  {
    id: 'producao', title: 'V. Produção', icon: 'Settings',
    subsections: [
      { id: 'checklist', title: 'Checklist de Qualidade' },
      { id: 'exportacao', title: 'Especificações de Exportação' },
      { id: 'nomenclatura', title: 'Nomenclatura' },
      { id: 'workflow', title: 'Workflow Semanal' },
    ],
  },
  { id: 'principios', title: 'VI. Princípios', icon: 'Shield' },
  { id: 'exemplos', title: 'VII. Exemplos', icon: 'PlayCircle' },
];

export const colors: ColorInfo[] = [
  { name: 'Azul Primário', hex: '#0066FF', usage: 'Principal, CTAs, destaques', message: 'Tecnologia, confiança, segurança' },
  { name: 'Cinza Escuro', hex: '#1A1A1A', usage: 'Fundo, texto principal', message: 'Profissionalismo, seriedade' },
  { name: 'Branco', hex: '#FFFFFF', usage: 'Fundo limpo, separações', message: 'Clareza, organização' },
  { name: 'Verde Sucesso', hex: '#00CC66', usage: 'Confirmações, check-in, entrega', message: 'Ação completa, segurança' },
  { name: 'Laranja Alerta', hex: '#FF9900', usage: 'Avisos, notificações importantes', message: 'Atenção controlada' },
  { name: 'Cinza Neutro', hex: '#CCCCCC', usage: 'Elementos secundários, desativados', message: 'Hierarquia visual' },
];

export const typography: TypographyInfo[] = [
  { element: 'Títulos de vídeo', font: 'Poppins', weight: 'Bold (700)', size: '48–64px', usage: 'Abertura, hooks' },
  { element: 'Ações do sistema', font: 'Inter', weight: 'Semi-bold (600)', size: '28–36px', usage: '"Buscou", "Selecionou", "Emitiu"' },
  { element: 'Labels e contexto', font: 'Inter', weight: 'Regular (400)', size: '18–24px', usage: 'Legendas, dados' },
  { element: 'Dados/números', font: 'Roboto Mono', weight: 'Regular (400)', size: '16–20px', usage: 'Valores, tempos, IDs' },
  { element: 'Micro-copy', font: 'Inter', weight: 'Regular (400)', size: '12–16px', usage: 'CTAs pequenos, notas' },
];

export const timings: TimingInfo[] = [
  { action: 'Transições simples', duration: '200–300ms', easing: 'ease-out', description: 'Rápido, preciso' },
  { action: 'Animação de interface', duration: '400–600ms', easing: 'ease-out', description: 'Tempo de resposta natural' },
  { action: 'Reveal de informação', duration: '300–500ms', easing: 'ease-out', description: 'Descoberta orientada' },
  { action: 'Saída de cena', duration: '250–400ms', easing: 'ease-in', description: 'Limpo, sem demora' },
];

export const platforms: PlatformSpec[] = [
  { platform: 'Instagram Reels', ratio: '9:16', resolution: '1080 × 1920px', usage: 'Orgânico, primário' },
  { platform: 'Anúncio Insta Stories', ratio: '9:16', resolution: '1080 × 1920px', usage: 'Tráfego, remarketing' },
  { platform: 'Anúncio Feed', ratio: '1:1', resolution: '1080 × 1080px', usage: 'Feed ads' },
  { platform: 'YouTube Shorts', ratio: '9:16', resolution: '1080 × 1920px', usage: 'Distribuição' },
  { platform: 'Comercial interno', ratio: '16:9', resolution: '1920 × 1080px', usage: 'Reuniões, propostas' },
];

export const sounds: SoundInfo[] = [
  { action: 'Clique em botão', sound: 'Pop suave', tone: 'A4 (440hz)', duration: '100ms' },
  { action: 'Carregamento/espera', sound: 'Whoosh', tone: 'Glissando suave', duration: '400ms' },
  { action: 'Confirmação de sucesso', sound: 'Ping duplo', tone: 'E5 (659hz)', duration: '200ms' },
  { action: 'Notificação chegando', sound: 'Tink', tone: 'C5 (523hz)', duration: '300ms' },
  { action: 'Transição entre telas', sound: 'Sweep', tone: 'Glissando', duration: '250ms' },
  { action: 'Erro (raro)', sound: 'Buzz', tone: 'A#3 (233hz)', duration: '150ms' },
];

export const principles: Principle[] = [
  { number: 1, title: 'Funcionalidade antes de beleza', description: 'O vídeo existe para fazer agência entender e agir, não apenas ficar bonito.' },
  { number: 2, title: 'Produto é protagonista', description: 'Tela, sistema, ferramenta na frente. Efeitos em segundo plano.' },
  { number: 3, title: 'Clareza operacional', description: 'Cada ação tem resposta visível. Sem ambiguidade sobre o que está acontecendo.' },
  { number: 4, title: 'Velocidade sem sacrificar compreensão', description: 'Rápido, mas não acelerado. Tempo de assimilação respeitado.' },
  { number: 5, title: 'Consistência visual', description: 'Mesma paleta, mesma tipografia, mesmos sons. Identidade reconhecível em qualquer vídeo.' },
  { number: 6, title: 'Sem promises mágicas', description: 'Mostra o real. Não faz parecer mais fácil do que é. Segurança > dramatização.' },
  { number: 7, title: 'Reaproveitamento por design', description: 'Cada vídeo é pensado para virar múltiplos formatos (reel, ad, comercial, story).' },
  { number: 8, title: 'Legibilidade em qualquer tela', description: 'Testado em desktop, celular pequeno e grande. Sem ilegibilidade.' },
  { number: 9, title: 'Som a serviço da narrativa', description: 'Música não compete com visual, complementa. Sem poluição sonora.' },
  { number: 10, title: 'Sempre com CTA claro', description: 'Final nunca é ambíguo. "Use agora", "Conheça", "Solicite demo". Claro o que fazer depois.' },
];

export const editingStructure = [
  { phase: 'Abertura', timing: '0–0.5s', elements: ['Logo MilhasPix', 'Fade em cor de fundo', 'Tipografia de gancho'] },
  { phase: 'Estabelecimento', timing: '0.5–2s', elements: ['Contexto do problema', 'Tela inicial do sistema', 'Narração ou copy explicativo'] },
  { phase: 'Desenvolvimento', timing: '2–[X]s', elements: ['Captura de tela em ação', 'Transições entre etapas', 'Ações do usuário + resposta do sistema', 'Tipografia reforçando cada passo'] },
  { phase: 'Conclusão', timing: '[X]–[X+1]s', elements: ['Resultado final explícito', 'Checkmark ou indicador de sucesso', 'Copy final reforçando benefício'] },
  { phase: 'CTA', timing: '[X+1]–[X+2]s', elements: ['MilhasPix branding final', 'Frase final', 'Logo com sombra ou fundo'] },
];

export const exportSpecs = [
  { platform: 'Instagram Reels / Stories', format: 'MP4 (H.264)', ratio: '9:16', resolution: '1080 × 1920px', bitrate: '8–12 Mbps', fps: '24fps ou 30fps', audio: 'AAC, 128 kbps', duration: '15s a 90s' },
  { platform: 'Facebook / Instagram Ads', format: 'MP4 (H.264)', ratio: '9:16 ou 1:1', resolution: '1080 × 1920px', bitrate: '6–10 Mbps', fps: '24fps ou 30fps', audio: 'AAC, 128 kbps', duration: '15s (ótimo)' },
  { platform: 'YouTube Shorts', format: 'MP4 (H.264)', ratio: '9:16', resolution: '1080 × 1920px', bitrate: '10–15 Mbps', fps: '24fps ou 30fps', audio: 'AAC, 192 kbps', duration: 'máx 60s' },
  { platform: 'Comercial Interno', format: 'MP4 (H.264)', ratio: '16:9', resolution: '1920 × 1080px', bitrate: '12–20 Mbps', fps: '24fps ou 30fps', audio: 'AAC, 192 kbps', duration: '30–90s' },
];

export const workflow = [
  { day: 'Segunda (manhã)', title: 'Planejamento + Capturas', tasks: ['Definir 2–3 vídeos da semana', 'Preparar scripts/roteiros', 'Executar ações no sistema', 'Gravar screen em resolução máxima', 'Exportar e organizar em pasta'] },
  { day: 'Terça–Quarta', title: 'Motion + Edição', tasks: ['Abrir template de edição', 'Inserir screen captures', 'Animar transições e elementos', 'Adicionar tipografia', 'Sincronizar com trilha de fundo'] },
  { day: 'Quinta', title: 'Sound + Finalization', tasks: ['Revisar som', 'Adicionar efeitos de interface', 'Exportar preview em 720p', 'Testar legibilidade mobile', 'Fazer ajustes finos'] },
  { day: 'Sexta', title: 'Exportação + Upload', tasks: ['Exportar em múltiplas resoluções', 'Renomear e organizar', 'Fazer upload conforme calendário', 'Documentar performance'] },
];
