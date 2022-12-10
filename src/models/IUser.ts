export interface IUser {
  id?: number,
  phone: number,
  username: string,
  email: string,
  password: string,
  name?: {
    firstname: string,
    lastname: string,
  },
  address?: {
    city: string,
    street: string,
    number: number
  }
}