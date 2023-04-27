export const singleOrPlural = (
  amount: number,
  singular: string,
  plural: string,
) => {
  return amount === 1 ? singular : plural
}
