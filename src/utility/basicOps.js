export default function basicOps(products, searchTerm, sortDir, currCategory, pageNum, pageSize) {

    if(products == null) {
        return;
    }
    
    // Searching -> is all about hiding the unwanted elements.
    let filteredArr = products;
    if (searchTerm != "") {
      filteredArr = filteredArr.filter((product) => {
        let lowerTitle = product.title.toLowerCase();
        let lowerSearchTerm = searchTerm.toLocaleLowerCase();
        return lowerTitle.includes(lowerSearchTerm)
      })
    }

    // Sorting -> re-arranging the products/elements.
    let filteredSortedArr = filteredArr;
    if (sortDir !== 0) {
      if (sortDir == 1) {
        filteredSortedArr = filteredSortedArr.sort(aO)
      }
      else {
        filteredSortedArr = filteredSortedArr.sort(dO)
      }
    }

    // Group By Categories
    let filteredSortedGroupByArr = filteredSortedArr;
    if (currCategory !== "All categories") {
      filteredSortedGroupByArr = filteredSortedGroupByArr.filter((product) => {
        return product.category == currCategory;
      })
    }

    // Pagination
    let totalPages = filteredSortedGroupByArr.length/pageSize;
    let sidx = (pageNum - 1) * pageSize;
    let eidx = sidx + pageSize;
    filteredSortedGroupByArr = filteredSortedGroupByArr.slice(sidx, eidx);

    return {filteredSortedGroupByArr, totalPages}
}

function aO(pro1, pro2) {
  if(pro1.price > pro2.price) {
    return 1
  }
  else {
    return -1
  }
}

function dO(pro1, pro2) {
  if(pro1.price < pro2.price) {
    return 1
  }
  else {
    return -1
  }
}