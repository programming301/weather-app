export function buildDateString(timestamp: any): string {
  const date = new Date(Number(timestamp));
  const year = date.getFullYear();
  const month = processDatePart(date.getMonth() + 1);
  const day = processDatePart(date.getDate());
  const hours = processDatePart(date.getHours());
  const minutes = processDatePart(date.getMinutes());
  const seconds = processDatePart(date.getSeconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

function processDatePart(part: number): string | number {
  return part < 10 ? '0' + part : part;
}
