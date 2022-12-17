import styled from 'styled-components';

export const StCarouselWrap = styled.div`
    .carousel-indicators [data-bs-target]{
        width:3px;
        border-radius : 50%;
    }
`
export const STUploadButton = styled.button`
    margin-left:10px;
    width : 60px;
    height : 60px;
    background-color: #F4F4F4;
    color : #5E5E5E;
    float : left;
    font-size: 40px;
    vertical-align : middle;
    height : 100%;
    border-radius: 10px;
    border : transparent;
`

export const StTypeBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const STIng = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    justify-content : space-between;
    width: 100%;
    height: 44px;
`

export const STIngDiv = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    vertical-align: center;
    /* padding: 14px 16px 14px 18px; */
    /* gap: 10px; */
    justify-content: center;
    width: 85px;
    height: 44px;
    background: #15DD95;
    color: #FFFFFF;
    /* line-height: 44px; */
`
export const STUsername = styled.span`
    color : #424754;
    margin-left: 12px;
`
export const STInput = styled.div`
    width: 100%;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    padding : 12px 0px 6px 6px;
    margin-bottom: 14px ;
    a { text-decoration:none; }
    /* height: 48px; */
`

export const STButton = styled.p`
    background: #DDE1FF;
    border-radius: 100px;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color :#00105C;
`

export const STBox2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 100%;
    height: 44px;
    font-size: 17px;
`

export const StContent = styled.textarea`
    width: 100%;
    min-height : 144px;
    border : transparent;
    background: #FFFFFF;
    padding : 6px 10px;
    border-radius: 5px;
    resize: none;
`

export const STAddressButton = styled.div`
    width: 64px;
    height: 36px;
    background-color: #DCE0F1;
    border-radius: 30px;
    text-align: center;
    padding-top: 6px;
`

export const STEditButton = styled.button`
    width: 67px;
    height: 40px;
    background: #B8C4FF;
    border-radius: 100px;
    float: right;
    
    border : transparent;
`


export const STImg = styled.div`
    width : 68%;
    display : flex;
    justify-content : space-between;
    //background-color: black;
    position: absolute;
    left : 90px;

`
export const STImg2 = styled.div`
    width : 68%;
    display : flex;
    justify-content : space-between;
    left: 0px;
    /* position: absolute; */
    background-color: white;
     width: 90px;
      height: 45px;
`

export const SelTop = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom : 10px;
`

export const SelBottom = styled.div`
    display: flex;
    justify-content : space-between;
    gap: 15px;
`

export const STSelect = styled.select`
    height : 48px;
    font-size: 16px;
    background-color: #FFF;
    border-radius: 30px;
    padding:12px 16px;
    border: none;
    flex : 1;
`

export const STDateInput = styled.input`
    height : 48px;
    font-size: 16px;
    background-color: #FFF;
    border-radius: 30px;
    padding:12px 16px;
    border: none;
    flex : 1;
`
export const STTitleInput = styled.input`
    width: 100%;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    padding: 6px 10px;
    border: transparent;
    margin: 14px 0;
    height: 48px;
`
export const STLinkTextarea = styled.textarea`
    width: 100%;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    padding: 6px 10px;
    border: transparent;
    margin: 7px 0;
`
export const STContentTextarea = styled.textarea`
    border-radius: 5px;
    border: transparent;
    width :100%;
    background-color: white;
    padding: 6px 10px;
    margin-top: 10px;
`
export const StSearchBox = styled.div`
    background: #EEEAE3;
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius : 30px;
    display : flex;
    flex-direction : row;
    margin : 0px 10px;
    height : 36px;
    button{
        background-color : transparent;
        border : none;
        border-radius :  30px 0 0 30px ; 
    }
 `
export const STAddressDiv = styled.div`
 width: 64px;
 height: 36px;
 background-color: #DCE0F1;
 border-radius: 30px;
 text-align: center;
 padding-top: 6px;
`
export const StWrap = styled.div`
    width : 95%;
    display:flex;
    flex-direction : column;
    margin : 0 auto;
    gap : 5px;
`
export const ModalWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 425px;
  height: 100%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 0 15px;
  box-sizing: border-box;
`
//---------------------------------
export const AllTextarea = styled.textarea`
    border-radius: 10px;
    border: transparent;
    width :100%;
    background-color: white;
    padding-left: 10px;
    padding-top:10px;
`

export const STButton2 = styled.p`
    background: white;
    border-radius: 100px;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #424754; 
`
export const SelectWrap = styled.div`
width: 100%;
height: auto;

`
export const STInput2 = styled.input`
    height : 48px;
    font-size: 16px;
    background-color: #FFF;
    border-radius: 30px;
    padding:12px 16px;
    border: none;
    flex : 1;
`
export const STInput3 = styled.input`
    width: 100%;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    padding-top: 6px;
    padding-left: 6px;
    padding-bottom: 6px;
    border:transparent;
    `


export const StRadioBox = styled.div`
    width : 110px;
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 10px;
    label {
        font-family : 'Pretendard Variable';
    }
    .form-check-input:checked {
        background-color : #15DD95;
    }
    .form-switch .form-check-input {
        width : 52px;
        height : 32px;
        background-image : url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e");
    }
    .form-check-input{
        background-color : #aff5db;
        box-shadow : none;
        border : none;
    }
`
export const STDiv = styled.div`
    height : 48px;
    font-size: 14px;
    background-color: #FFF;
    border-radius: 30px;
    border: transparent;
    position: relative;
    line-height: 40px; 
`
export const STCountButton = styled.button`
    background-color: #E1E3EC;
    font-size: 20px;
    border-radius: 20px;
    border:transparent;
    height : 30px;
    position : absolute;
    transform: translateY(-50%);
    top : 50%;
    padding-left: 10px;
    padding-right : 10px;
`