// Package Imports
import React from 'react'
import styled from "styled-components";

// Styled Components
const PeopleRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 0 16px 10px;
    min-width: 100%;
    max-height: 25px;
    border-bottom: thin solid #aaa;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: 0;
    }
`

const ThisData = (props) => {
    return (
        <PeopleRow>
            {props.data.name} | Gender: {props.data.gender} |
        </PeopleRow>
    )
}

// Export
export default ThisData