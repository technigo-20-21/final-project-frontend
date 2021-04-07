import { useQuery } from 'react-query'
import { LOCALS_URL, LOCAL_URL, CATEGORIES_URL} from "../urls";

export const FetchCategoriesList = () => {
  return useQuery('categories',
    () => fetch(CATEGORIES_URL)
       .then(res => res.json())
      )
}

export const FetchLocalsList = (localCategory) => {
  return useQuery(['localslist', localCategory],
    () => fetch(`${LOCALS_URL}/${localCategory}`).then(res => res.json())
  )
};
  
export const FetchLocal = (localId) => {
  return useQuery(['single_local', localId],
    () => fetch(`${LOCAL_URL}/${localId}`).then(res => res.json()) 
  )
};
