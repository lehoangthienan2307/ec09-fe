import React, { useState,useEffect} from 'react'
import axios from 'axios'


const Category = (props) => {
  const [categoriesList, setCategoriesList] = useState([]);

  const getCategoryList = async () => {
    const response = await axios.get('category/getCategory');
    const data = response.data.categoriesList;
    localStorage.setItem("categoriesList", JSON.stringify(data));
    setCategoriesList(data);
  };


  useEffect(() => {
    getCategoryList();
  }, []);


  const renderCategories = (categoriesList) => {
    let myCategories = [];
   
    
    for (let category of categoriesList) { 
     
      myCategories.push(
        
        <li key={category.CatName}>
          {
            category.parentId ? <a
              href={`/products?page=1&sort=1&CatID=${category.CatID}`}>
              <h5>{category.CatName}</h5>
            </a> :
            <span >
            <img
							    src={category.categoryImg}
							    alt={category.categoryImg}
                  style={{
                    width:"120px" ,
                    height: "80px"
                }}
							    className='ml-2'
						/>
              <h5 className='ml-4'>{category.CatName}</h5>
              </span>
          }
          
            {category.listsub.length > 0 ?(<ul>{renderCategories(category.listsub)}</ul>) :null}
        </li>
      );
    }
    return myCategories;
  }

  return (
<div>
<div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
    <h2 >Categories</h2>
  </div>
<div className="menuHeader" style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
 
  <ul>
   {categoriesList.length > 0 ? renderCategories(categoriesList):null}
  </ul>
</div>
</div>
  )


 
}

export default Category