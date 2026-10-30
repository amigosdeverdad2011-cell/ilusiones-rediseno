// Cálculo de las próximas fechas especiales a partir de las reglas de config.js.

function nthWeekdayOfMonth(year, monthIndex, weekday, n) {
  const first = new Date(year, monthIndex, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  return new Date(year, monthIndex, 1 + offset + (n - 1) * 7);
}

function resolveDate(rule, year) {
  if (rule.nthWeekday) return nthWeekdayOfMonth(year, rule.month - 1, rule.nthWeekday.weekday, rule.nthWeekday.n);
  return new Date(year, rule.month - 1, rule.day);
}

export function upcomingDates(list, from = new Date(), limit = 4) {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  return list
    .map((item) => {
      let date = resolveDate(item.rule, today.getFullYear());
      if (date < today) date = resolveDate(item.rule, today.getFullYear() + 1);
      const days = Math.round((date - today) / 86400000);
      return { ...item, date, days };
    })
    .sort((a, b) => a.date - b.date)
    .slice(0, limit);
}

export function formatDay(date) {
  return new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'long' }).format(date);
}

export function daysLabel(days) {
  if (days === 0) return 'Es hoy';
  if (days === 1) return 'Es mañana';
  return `Faltan ${days} días`;
}
