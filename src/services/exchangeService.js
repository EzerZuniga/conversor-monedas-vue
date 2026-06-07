const FALLBACK_RATES = Object.freeze({
  PEN: 1,
  USD: 0.27,
  EUR: 0.25,
  GBP: 0.21,
  JPY: 42.25,
  BRL: 1.44,
})

const SUPPORTED_CURRENCIES = Object.freeze([
  { code: 'PEN', name: 'Sol peruano', symbol: 'S/' },
  { code: 'USD', name: 'Dolar estadounidense', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'Libra esterlina', symbol: '£' },
  { code: 'JPY', name: 'Yen japones', symbol: '¥' },
  { code: 'BRL', name: 'Real brasileno', symbol: 'R$' },
])

const simulateNetworkLatency = () => new Promise((resolve) => setTimeout(resolve, 250))

/**
 * Punto unico para obtener tasas de cambio.
 * Luego puede reemplazarse por fetch/axios sin tocar componentes.
 */
export async function getExchangeRates() {
  await simulateNetworkLatency()

  return {
    base: 'PEN',
    rates: { ...FALLBACK_RATES },
    updatedAt: new Date().toISOString(),
  }
}

export function getSupportedCurrencies() {
  return [...SUPPORTED_CURRENCIES]
}

export function calculateConversion({ amount, fromCurrency, toCurrency, rates }) {
  const sourceRate = rates[fromCurrency]
  const targetRate = rates[toCurrency]

  if (!sourceRate || !targetRate) {
    throw new Error('La moneda seleccionada no esta disponible.')
  }

  const amountInBaseCurrency = Number(amount) / sourceRate
  const convertedAmount = amountInBaseCurrency * targetRate

  return Number(convertedAmount.toFixed(2))
}

export function calculateExchangeRate({ fromCurrency, toCurrency, rates }) {
  return calculateConversion({
    amount: 1,
    fromCurrency,
    toCurrency,
    rates,
  })
}
