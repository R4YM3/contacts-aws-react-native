export interface IContact {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  },
  phone: string
  website: string,
  company: {
    name: String
    catchPhrase: string
    bs: string
  }
}

type IContacts = IContact[];

export async function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}

export const fetchContacts = async () => {
  return await api<IContacts>("https://jsonplaceholder.typicode.com/users");
}

export type IFetchContactQueryKey = ['contact', { userId: number }];
export const fetchContact = ({ queryKey: [, params] }: { queryKey: IFetchContactQueryKey; }): Promise<IContact> =>
  api<IContact>(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
