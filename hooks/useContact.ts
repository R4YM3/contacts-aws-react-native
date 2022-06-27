import { useQuery } from "react-query"
import { fetchContact, IFetchContactQueryKey } from "../api/contacts";

export const useContact = (userId: number) => {
  const queryKey: IFetchContactQueryKey = ['contact', { userId }];
  return useQuery(queryKey, fetchContact);
}
