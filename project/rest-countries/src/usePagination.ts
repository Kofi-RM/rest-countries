
type PaginationProps = {
    totalItems:number;
    itemsPerPage:number; 
    initialPage:number;
}

import { useState } from "react";

export default function usePagination({totalItems, itemsPerPage, initialPage}:PaginationProps) {

const [currentPage, setCurrentPage] = useState(initialPage);

const startIndex = 0 + ((currentPage - 1) * itemsPerPage)
const endIndex = -1 + (currentPage * itemsPerPage)


const totalPages = Math.ceil(totalItems/itemsPerPage)    

const itemsOnCurrentPage = currentPage === totalPages ? totalItems % itemsPerPage : itemsPerPage
const canNextPage = currentPage < totalPages;
const canPrevPage = currentPage > 1;

const setPageNumber = (currentPage:number) => {
    setCurrentPage(currentPage);
}

const nextPage = () => {
    setCurrentPage(currentPage + 1)
}

const prevPage = () => {
    setCurrentPage(currentPage - 1)
}

console.log(currentPage);
return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPageNumber,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage

    

}
}