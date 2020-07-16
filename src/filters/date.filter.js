export default function filterDate(value, format) {
  const options = {};
  const date = new Date(value);

  if (format.includes('date')) {
    options.day = '2-digit';
    options.month = 'long';
    options.year = 'numeric';
  }

  if (format.includes('time')) {
    options.second = '2-digit';
    options.minute = '2-digit';
    options.hour = '2-digit';
  }

  const locale = 'en-EN';

  return new Intl.DateTimeFormat(locale, options).format(date);
}
