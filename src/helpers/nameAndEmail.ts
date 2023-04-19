export const nameInEmail = (email: string) =>
  email.substring(0, email.indexOf('@'))

export const firstLetter = (name: string) => name.substring(0, 1).toUpperCase()
