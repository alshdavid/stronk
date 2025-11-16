import { format, parseISO } from 'date-fns';

export function formatDate(isoDateString: string): string {
  const date = parseISO(isoDateString);
  return format(date, "EEEE, MMMM d, yyyy 'at' h:mm a");
}
