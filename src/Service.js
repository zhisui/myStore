export const OrdersService = {
  getPreviousOrders: (orders) => {
    return orders.filter((ord) => ord.isPaymentCompleted === true);
  },
  getCart: (orders) => {
    return orders.filter((ord) => ord.isPaymentCompleted === false);
  },
};

export const ProductsService = {
  getProductByProductId: (products, productId) => {
    return products.find((prod) => prod.id === productId);
  },
  fetchProducts: () => {
    return fetch("http://localhost:5000/products", {
      method: "GET",
    });
  },
};

export const BrandsService = {
  fetchBrands: () => {
    return fetch("http://localhost:5000/brands", {
      method: "GET",
    });
  },
  getBrandByBrandId: (brands, brandId) => {
    return brands.find((brand) => brand.id === brandId);
  },
};

export const CategoriesService = {
  fetchCategories: () => {
    return fetch("http://localhost:5000/categories", {
      method: "GET",
    });
  },
  getCategoryByCategoryId: (categories, categoryId) => {
    return categories.find((category) => category.id === categoryId);
  },
};

export const SortService = {
  getSortedArray: (elements, sortBy, sortOrder) => {
    if (!elements) return elements;

    let array = [...elements];

    array.sort((a, b) => {
      //a = cat
      //b = dog
      //c = 99
      //d = 100
      //return 99 - 100 = -1
      //a comes first; and then b
      //cat comes first; and then dog
      if (a[sortBy] && b[sortBy])
        return (
          a[sortBy].toString().toLowerCase() -
          b[sortBy].toString().toLowerCase()
        );
      else return 0;
    });

    if (sortOrder === "DESC") array.reverse();

    return array;
  },
};

export const PagingService = {
  getPagesArray: (elements, pageSize) => {
    let noOfPages = Math.ceil(elements.length / pageSize); //Example: 23 / 5 = 4.6 = 5 pages
    let pagesArray = [];
    for (let i = 0; i < noOfPages; i++) {
      pagesArray.push({ pageIndex: i });
    }

    //Example: [ { pageIndex: 0 }, { pageIndex: 1 }, { pageIndex: 2 } ]
    return pagesArray;
  },
  getRowsByPageIndex: (elements, currentPageIndex, pageSize) => {
    /*Example
      elements = [ 20 elements ]
      currentPageIndex = 2
      pageSize = 5
      return [ 10, 11, 12, 13, 14 ]
    */

    if (!elements) return elements;

    let array = [...elements];
    let resultArray = [];
    for (
      let i = currentPageIndex * pageSize;
      i < (currentPageIndex + 1) * pageSize;
      i++
    ) {
      if (array[i]) resultArray.push(array[i]);
    }

    return resultArray;
  },
};
