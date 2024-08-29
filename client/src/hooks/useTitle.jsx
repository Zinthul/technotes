import { useEffect } from "react";
import React from 'react'

const useTitle = (title) => {

    useEffect(() => {
        const prevtitle = document.title
        document.title = title

        return () => document.title = prevtitle
    }, [title])

}

export default useTitle
