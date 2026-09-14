/**
 * Regra 14 — uma palavra-chave principal por página.
 * Todo route registra aqui a palavra-chave que ataca. Em dev, um registro
 * duplicado lança erro imediatamente (build/lint local), evitando canibalização.
 *
 * Ao criar uma página nova: adicione a rota e o termo aqui primeiro.
 */

export const KEYWORD_MAP = {
  "/": "hipnoterapia para ansiedade em Sinop",
  "/sobre": "quem é Júlio Dechante hipnoterapeuta",
  "/metodo-ser": "Método SER hipnoterapia avançada",
  "/servicos": "serviços de hipnoterapia em Sinop",
  "/servicos/hipnoterapia-para-traumas": "hipnoterapia para traumas",
  "/servicos/hipnoterapia-para-fobias-e-medos": "hipnoterapia para fobias e medos",
  "/servicos/hipnoterapia-para-bloqueios-emocionais": "hipnoterapia para bloqueios emocionais",
  "/servicos/hipnoterapia-online": "hipnoterapia online",
  "/contato": "agendar sessão de hipnoterapia em Sinop",
  "/blog": "blog sobre ansiedade e hipnoterapia",
  "/libertar-minha-mente": "hipnoterapia avançada libertar a mente",
  "/privacidade": "política de privacidade Julio Dechante",
  "/termos": "termos de uso Julio Dechante",
} as const;

export type KnownRoute = keyof typeof KEYWORD_MAP;

function assertNoDuplicateKeywords(map: Record<string, string>) {
  const seen = new Map<string, string>();
  for (const [route, keyword] of Object.entries(map)) {
    const normalized = keyword.trim().toLowerCase();
    const existingRoute = seen.get(normalized);
    if (existingRoute) {
      throw new Error(
        `[Regra 14] Palavra-chave duplicada "${keyword}" em "${route}" e "${existingRoute}". ` +
          `Cada página precisa de uma palavra-chave exclusiva.`,
      );
    }
    seen.set(normalized, route);
  }
}

assertNoDuplicateKeywords(KEYWORD_MAP);

export function keywordFor(route: KnownRoute): string {
  return KEYWORD_MAP[route];
}
