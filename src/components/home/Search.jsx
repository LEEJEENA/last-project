import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';

const Search = () => {

    const [radioProp, setRadioProp] = useState({
        label: "진행중",
        checked: true
    });
    const radioHandle = (e) => {
        if (e.target.checked) {
            setRadioProp({
                label: "진행중",
                checked: true
            });
        } else {
            setRadioProp({
                label: "마감",
                checked: false
            });
        }
    }

    return (
        <StSearchWrap>
            <StSearchBox>
                <button><FiSearch /></button>
                <input />
            </StSearchBox>
            <StTagBox>
                <button>#전국</button>
                <button>#서울</button>
                <button>#강원도</button>
                <button>#경기도</button>
                <button>#충청도</button>
                <button>#전라도</button>
                <button>#경상도</button>
                <button>#제주도</button>
            </StTagBox>
            <StFilterBox>
                <div>
                    <select>
                        <option value="">전체</option>
                        <option value="">인기</option>
                    </select>
                </div>
                <div>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        checked={radioProp.checked}
                        onChange={radioHandle}
                        label={radioProp.label}
                    />
                </div>
            </StFilterBox>
        </StSearchWrap>
    );
};

export default Search;

const StSearchWrap = styled.div`
    height : 140px;
    background-color : pink;
    display:flex;
    flex-direction: column;
    justify-content : space-evenly
`

const StSearchBox = styled.div`
    input{
        border : none;
        border-radius : 0 50px 50px 0;
    }
    button{
        border : none;
        border-radius :  50px 0 0 50px ;
        background-color : white;
    }
`

const StTagBox = styled.div`
    display :flex;
    flex-direction : row;
    flex-wrap:wrap;
    gap : 5px;
    button{
        border : none;
        border-radius :  50px ;
        background-color : white;
    }
`

const StFilterBox = styled.div`
    display :flex;
    flex-direction : row;
    justify-content : space-between;
`