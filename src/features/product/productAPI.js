export function fetchProductsById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/" + id);
    const data = await response.json();
    console.log({ data });
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "/products/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  let query = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    //is se sari categories ajaye gi
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      query += `${key}=${lastCategoryValue}&`;
    }
    // is se last saved value ajaye gi
    // ye hum ne is liye kiya hai take last jab multiple categories allow kare tou use kar sake
  }
  //& is liye use kiya hai lyu take aik se zyada objects ko bhi handle kar sake

  for (let key in sort) {
    query += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    query += `${key}=${pagination[key]}&`;
  }

  if (admin) {
    query += `admin=true`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/products?" + query);
    const data = await response.json();
    //X-Total-Count json server provide karta hai or ya btata hai ke total kitne responses/documents hai
    //Inspect->Network=>Header->X-Total-Count
    const totalItems = await response.headers.get("X-Total-Count");

    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("/brands");
    const data = await response.json();
    resolve({ data });
  });
}
