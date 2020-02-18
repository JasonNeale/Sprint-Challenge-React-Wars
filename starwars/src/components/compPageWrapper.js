// Package Imports
import React from "react"
import styled from "styled-components";

// Component Imports
import CardWrapper from "./compCardWrapper"

// Styled Components
const PageWrapperCSS = styled.div`
    display: flex;
    min-width: 100vw;
    max-width: 100vw;
    justify-content: center;
    margin-top: 40px;
`

const PageWrapperInner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-width: 1200px;
    max-width: 1200px;
`

const createPage = () => {
    return (
        <PageWrapperCSS>
            <PageWrapperInner>
                <CardWrapper />
            </PageWrapperInner>
        </PageWrapperCSS>
    )
}

// Export
export default createPage