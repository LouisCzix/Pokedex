import React from "react";
import styles from "./PageSelect.module.scss";

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
                
                <button onClick={handlePrevious}>
                    <div>
                        ❮
                    </div>
                </button>
                <div>
                    {page} de {totalPages}
                </div>
                <button onClick={handleNext}>
                    <div>
                    ❯
                    </div>
                </button>
            </div>
        </div>

  )
}