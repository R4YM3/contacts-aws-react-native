import { useQuery } from "react-query"
import { fetchContacts } from "../api/contacts";

export const useContacts = () => {
  return useQuery('contacts', fetchContacts);
}
