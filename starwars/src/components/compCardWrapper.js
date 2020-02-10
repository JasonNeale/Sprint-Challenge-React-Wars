// Package Imports
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from "styled-components";

// Component Imports
import People from "./compPeople"

// Styled Components
const CardWrapperCSS = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
    overflow: hidden;
    border-radius: .5rem;
    border: thin solid #aaa;
    min-width: 1200px;
    max-width: 1200px;
    min-height: 650px;
    max-height: 650px;
    background-color: rgba(255, 255, 255, .9);
`

const PageTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 65px;
    justify-content: center;
    border-bottom: thin solid #ccc;
    color: #555;
`

const PageTitleLeft = styled.div`
    display:flex;
    flex-direction: column;
    width: 75%;
`

const PageTitleRight = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    border-left: thin solid #aaa;
    padding: 10px;
`

const PageTitle = styled.h2`
    text-align: center;
`

const PageTitleSearch = styled.input`
    text-align: center;
    height: 25px;
    width: 250px;
    border: thin solid #aaa;
`

const PageContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 543px;
    padding: 20px;
    color: #555;
`

const CardBottomRowCSS = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 25px;
    justify-content: center;
    border-top: thin solid #ccc;
    padding: 16px;
`

const CardBottomRowBtnCSS = styled.a`
    margin: 0 10px 0 10px;
`

const CardWrapperData = () => {
    const [SWAPI, setSWAPI] = useState([])
    // const [SWAPIPrev, setSWAPIPrev] = useState([])
    // const [SWAPINext, setSWAPINext] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(res => {setSWAPI(res.data.results)})
        .catch(err => { console.log("Axios Error:", err); });
    }, []);
        
    console.log('SWAPI Results', SWAPI)

    return (
        <CardWrapperCSS>
            <PageTitleWrapper>
                <PageTitleLeft>
                    <PageTitle>SWAPI Results</PageTitle>
                </PageTitleLeft>
                <PageTitleRight>
                    <PageTitleSearch id="filter-input" name="filter-input" placeholder="Filter Results..."/>
                </PageTitleRight>
            </PageTitleWrapper>
            <PageContentWrapper>
                {SWAPI.map(item => {
                    return <People key={item} data={item}/>
                })}
            </PageContentWrapper>
            <CardBottomRowCSS>
                {
                /*
                <CardBottomRowBtnCSS>Previous</CardBottomRowBtnCSS>
                <CardBottomRowBtnCSS>Next</CardBottomRowBtnCSS>
                */    
                }
            </CardBottomRowCSS>
        </CardWrapperCSS>
    )
}

// Export
export default CardWrapperData