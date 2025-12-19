import { formatDistanceToNow, parseISO } from "date-fns";

export function formatTimeComment(date: string) {
  return formatDistanceToNow(parseISO(date), { addSuffix: true });
}
