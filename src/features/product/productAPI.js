export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  let query = "";
  for (let key in filter) {
    query += `${key}=${filter[key]}&`;
  }
  //& is liye use kiya hai lyu take aik se zyada objects ko bhi handle kar sake
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products?" + query);
    const data = await response.json();
    resolve({ data });
  });
}
