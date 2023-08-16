export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort) {
  let query = "";
  for (let key in filter) {
    const categoryValues=filter[key];
    //is se sari categories ajaye gi
    if(categoryValues.length)
    {
      const lastCategoryValue=categoryValues[categoryValues.length-1]
      query += `${key}=${lastCategoryValue}&`;
    }
    // is se last saved value ajaye gi
    // ye hum ne is liye kiya hai take last jab multiple categories allow kare tou use kar sake
  }
  //& is liye use kiya hai lyu take aik se zyada objects ko bhi handle kar sake

  for(let key in sort)
  {
    query+=`${key}=${sort[key]}&`
  }
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products?" + query);
    const data = await response.json();
    resolve({ data });
  });
}
