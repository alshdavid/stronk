import { format, parseISO } from 'date-fns';

export function formatDate(isoDateString: string): string {
  const date = parseISO(isoDateString);
  return format(date, "EEEE, MMMM d, yyyy 'at' h:mm a");
}

export function sortByDateDesc<T extends Record<string, any>>(array: T[], dateKey: keyof T): T[] {
  return [...array].sort((a, b) => {
    const dateA = new Date(a[dateKey] as string).getTime();
    const dateB = new Date(b[dateKey] as string).getTime();
    return dateB - dateA;
  });
}
