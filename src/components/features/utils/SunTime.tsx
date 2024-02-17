export function formatSunTime(
    sunriseTime : number,
    timeZone : number
  ): string {
    const time = new Date((sunriseTime + timeZone )* 1000)
    const formatTime = time.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    return formatTime
  }
  