import { useNavigate, useLocation } from 'react-router-dom'

const useRouter = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const pushQuery = ({page, sort, category}) => {
    const query = {};

    if(page) query.page = page;
    if(sort) query.sort = sort;
    if(category) query.CatID = category;
    // if(word) query.word = word;
    const newQuery = new URLSearchParams(query).toString()

    navigate(`${pathname}?${newQuery}`)
  }
  
  return { pushQuery, pathname, navigate, search }
}

export default useRouter