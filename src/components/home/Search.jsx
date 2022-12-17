import React, { useRef } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { FiSearch } from 'react-icons/fi';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

//const Search = ({ updateSearchInfo, searchState }) => {
const Search = ({ searchState, setSearchState, search, searchHandle }) => {

    const tagList = ['서울', '인천', '세종', '대구', '부산', '울산', '광주', '대전', '제주도', '경기도', '강원도', '충청도', '경상도', '전라도'];

    //진행중 마감 핸들
    const stateHandle = (e) => {
        if (e.target.checked) {
            setSearchState({ ...searchState, progress: "진행중" });
        } else {
            setSearchState({ ...searchState, progress: "마감" });
        }
    }
    //태그 핸들
    const tagHandle = (val) => {
        setSearchState({ ...searchState, tag: val });
    }
    //정렬 핸들
    const sortHandle = (e) => {
        setSearchState({ ...searchState, [e.target.name]: e.target.value });
    }
    const scrollRef = useRef(null);
    const onHomeClick = () => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <StSearchWrap>
            <StSearchBox>
                <button onClick={() => setSearchState({ ...searchState, search: search.search })}>
                    <FiSearch style={{ width: '24px', height: '24px', color: '#3556E1' }} />
                </button>
                <input name='search' placeholder="검색어를 입력해주세요" value={search.search || ""} onChange={searchHandle}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            setSearchState({ ...searchState, search: search.search })
                        }
                    }} />
            </StSearchBox>
            <StTagBox ref={scrollRef}>
                <ToggleButtonGroup type="checkbox" value={searchState.tag} onChange={tagHandle}>
                    {searchState.main !== 'ask' &&
                        tagList.map((tag, i) => {
                            return (
                                <ToggleButton id={`tbg-btn-${i + 1}`} onClick={onHomeClick} value={tag} key={i}>
                                    #{tag}
                                </ToggleButton>
                            )
                        })}
                </ToggleButtonGroup>
            </StTagBox>
            <StFilterBox>
                <div>
                    <select name='sort' onChange={sortHandle}>
                        <option value="최신순">최신순</option>
                        <option value="인기순">인기순</option>
                    </select>
                </div>
                <StRadioBox>
                    {searchState.main !== 'ask' &&
                        <>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                checked={searchState.progress === '진행중' ? true : false}
                                onChange={stateHandle}
                            />
                            <label>{searchState.progress}</label>
                        </>
                    }
                </StRadioBox>
            </StFilterBox>
        </StSearchWrap>
    );
};

export default Search;

const StSearchWrap = styled.div`
    height : 140px;    
    display:flex;
    flex-direction: column;
    justify-content : space-evenly
`

const StSearchBox = styled.div`
    background: #E1E3EC;
    border-radius : 30px;
    display : flex;
    flex-direction : row;
    margin : 0px 10px;
    height : 36px;

    input{
        margin-right : 20px;
        width : 100%;
        background-color : transparent;
        border : none;
        border-radius : 0 30px 30px 0;
    }
    input:focus {outline: none;}
    button{
        margin : 0 10px;
        background-color : transparent;
        border : none;
        border-radius :  30px 0 0 30px ;
        
    }`


const StTagBox = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none; 
  }
  @media all and (min-width:769px) {
    ::-webkit-scrollbar {
    display: block; 
    height: 7px;
  }
  ::-webkit-scrollbar-tranck {
    background-color: #e4e4e4;
    border-radius: 100px;
    /* background-color:#dce0f1; */
  }
  ::-webkit-scrollbar-thumb {
    /* border-radius: 100px;
    background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%); */
    background-color:#dce0f1; /*스크롤바의 색상*/
    border-radius: 50px;
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }
}

  .btn-group {
    gap: 5px;
    margin: 5px 0 ;
  }
  .btn-primary {
    font-weight: bold;
    color: black;
    --bs-btn-color: black;
    --bs-btn-bg: #dce0f1;
    --bs-btn-border-color: #dce0f1;
    /*  */
    --bs-btn-active-bg: #2d4fda;
    --bs-btn-active-color: white;
  }
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
    border: none;
    border-radius: 50px;
    z-index: 0;
  }
  .btn-group > :not(.btn-check:first-child) + .btn {
    border: none;
    border-radius: 50px;
    z-index: 0;
  }
`;

const StFilterBox = styled.div`
    display :flex;
    flex-direction : row;
    margin : 0px 10px;
    justify-content : space-between;
    select {
        width: 75px;
        height: 32px;
        color : white;
        background: #2D4FDA;
        border-radius: 8px;
        border : none;
    }
    select:focus {outline: none;}
`

const StRadioBox = styled.div`
    width : 110px;
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 10px;
    label {
        font-family : 'Pretendard Variable';
    }
    .form-check-input:checked {
        background-color : #2D4FDA;
    }
    .form-switch .form-check-input {
        width : 52px;
        height : 32px;
        background-image : url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e");
    }
    .form-check-input{
        background-color : #B8C4FF;
        box-shadow : none;
        border : none;
    }
`