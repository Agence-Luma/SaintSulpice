export const letterDate = (date: string) => {
  const [year, month, day] = date.split("-");
  const dateObj = new Date(parseInt(year), parseInt(month) - 1);
  const monthName = dateObj.toLocaleString('fr', { month: 'long' });
  return `${Number(day)} ${monthName} ${year}`;
};