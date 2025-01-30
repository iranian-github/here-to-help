export const toFarsiNumber = (n: number): string => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  return n
    .toString()
    .split('')
    .map((x) => farsiDigits[parseInt(x)] || x)
    .join('')
}
