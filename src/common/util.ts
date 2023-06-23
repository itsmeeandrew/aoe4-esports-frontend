const dateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit" })
const dateTimeFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit"})

export function formatDateFromString(date: string): string {
  const dateObj = new Date(date)
  return dateFormatter.format(dateObj)
}

export function formatDateTimeFromString(date?: string, time?: string): string {
  if (date && time) {
    const dateObj = new Date(`${date}T${time}`)
    return dateTimeFormatter.format(dateObj)
  } else if (date) {
    return formatDateFromString(date)
  } else {
    return ""
  }
}