import styled from 'styled-components'

export const FestivalWrap = styled.div`
    padding: 20px 10px;
`

export const SelBottom = styled.div`
    .mb-3 {
    display: flex;
    justify-content : space-between;
     --bs-gutter-x : 0;
     gap : 10px;
    .dateform {
        border-radius : 10px;
        height : 48px;
        flex : 1;
        border: none;
    }


}
`

export const STSelect = styled.select`
    width : 100%;
    height : 48px;
    font-size: 16px;
    background-color: #FFF;
    border-radius: 10px;
    padding:12px 16px;
    border: none;
    option {
       padding: 0 10px ;
    }
`

export const StSearchBox = styled.div`
    background: #EEEAE3;
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius : 30px;
    display : flex;
    flex-direction : row;
    margin : 10px 0;
    height : 36px;
    padding: 0 10px;
    button{
        background-color : transparent;
        border : none;
        border-radius :  30px 0 0 30px ; 
    }
`
export const AddressBox = styled.div`
    margin : 20px 20px 20px 20px;
    /* margin : 20px 10px; */
`

export const AllButton = styled.button`
    width : 100%;
    height: 48px;
    border: transparent;
`

export const AllTextarea = styled.textarea`
border-radius: 5px;
border: 1px solid #C8C9CA;
height: 200px;
width: 100%;
border: none;
padding: 10px;
margin-bottom: 14px;
`

export const STAddressButton = styled.div`
    width: 64px;
    height: 36px;
    background-color: #DCE0F1;
    border-radius: 30px;
    text-align: center;
    padding-top: 6px;
`


export const STInput = styled.input`
    width: 100%;
    height: 48px;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    padding-top: 6px;
    padding-left: 6px;
    padding-bottom: 6px;
    border:transparent;
    margin-top: 8px;
`

export const ModalWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 425px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 0 15px;
  box-sizing: border-box;

`;
//--------------
export const STDiv = styled.div`
    height : 48px;
    font-size: 14px;
    background-color: #FFF;
    border-radius: 5px;
    border: transparent;
    position: relative;
    width: 50%;
`

export const STInput2 = styled.input`
    height : 48px;
    background-color: #FFF;
    border-radius: 5px;
    padding:12px 16px;
    border: transparent;
`

export const STInput3 = styled.div`
    width: 100%;
    background: white;
    border-radius: 5px;
    font-weight: 500;
    padding-top: 6px;
    padding-left: 6px;
    border : transparent;
    height:48px;
`
export const STSelectButton = styled.div`
    margin-right: 8px;
`
export const STButton = styled.button`
    background-color: #E1E3EC;
    font-size: 20px;
    border-radius: 20px;
    border:transparent;
    /* vertical-align: middle; */
    height : 30px;
    position : absolute;
    transform: translateY(-50%);
    top : 50%;
    padding-left: 10px;
    padding-right : 10px;
`