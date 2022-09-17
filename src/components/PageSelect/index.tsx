import React from "react";
import styles from "./PageSelect.module.scss";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface PokeProps {

    page: number;
    totalPages: any;
    setPage: any;
  }

export default function PageSelect ({ page, totalPages, setPage}: PokeProps) {


    function handlePrevious() {
        if (page > 0) {
            setPage(page-1)
        } 
    }

    function handleNext() {
        if (page !== totalPages) {
            setPage(page+1)
        }
    }

    return (

        <div className={styles.container}>
            <div className={styles.pageSelect}>
                

                    <div onClick={handlePrevious} >
                        <HiOutlineChevronLeft/>
                    </div>

                <div>
                    {page} de {totalPages}
                </div>

                    <div onClick={handleNext}>
                    <HiOutlineChevronRight/>
                    </div>

            </div>
        </div>

  )
}