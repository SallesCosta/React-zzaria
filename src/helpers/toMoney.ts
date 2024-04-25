type CurrencyFormat = {
  a: string
  c: string
}

const currencyFormats = (lang: string): CurrencyFormat | undefined => {
  const formats: Record<string, CurrencyFormat> = {
    pt: {
      a: 'pt-BR',
      c: 'BRL',
    },
    fr: {
      a: 'fr-FR',
      c: 'EUR',
    },
    en: {
      a: 'en-US',
      c: 'USD',
    },
    it: {
      a: 'it-IT',
      c: 'EUR',
    },
    es: {
      a: 'es-ES',
      c: 'EUR',
    },
  }
  return formats[lang]
}

export const toMoney = (value: number, language: string): string => {
  const format = currencyFormats(language)
  if (!format) {
    throw new Error(`Formato de moeda para o idioma '${language}' não foi encontrado.`)
  }
  const { a, c } = format
  return value.toLocaleString(a, {
    style: 'currency',
    currency: c,
  })
}
