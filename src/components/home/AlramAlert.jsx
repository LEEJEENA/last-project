import { useEffect } from "react";
import styled from "styled-components";
import { alramState } from "../../recoil/atoms";
import { useRecoilState } from 'recoil';
function AlramAlert() {

    const [alram, setAlram] = useRecoilState(alramState);

    useEffect(() => {
        if (alram.title !== undefined) {
            setTimeout(() => { setAlram({}) }, 4000);
        }
    }, [alram])

    return (
        <>
            {
                alram.title !== undefined ? (
                    <STBox>
                        💬 <b>{alram.title}</b>님이 댓글을 입력하셨습니다.
                    </STBox>
                ) : null
            }
        </>
    )
}
export default AlramAlert

const STBox = styled.div`
    position:absolute;
    background-color: rgba(220, 224, 241, 0.9);
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    //height: 50px;
    width: 250px;
    text-align: center;
    font-size:15px;
    color: black;
    top:50px;
    right:0px;
    margin-right:10px;
    z-index: 999;
    padding-top: 15px;
`