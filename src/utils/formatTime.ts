import {parseISO, formatDistanceToNowStrict, formatRelative} from 'date-fns';

export default (time: string) => {
  const relative = formatRelative(
    parseISO(time),
    parseISO(new Date().toISOString()),
  );

  if (relative.includes('/')) {
    return relative;
  }

  const [timespan, unit] = formatDistanceToNowStrict(parseISO(time)).split(' ');
  return `${timespan}${unit[0]}`;
};
