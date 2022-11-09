import React from 'react';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Comment = () => {
    return (
        <StCommentWrap>
            <StCommentBox>
                <div>댓글</div>
                <div>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="댓글 달기"
                            aria-label="댓글 달기"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            등록
                        </Button>
                    </InputGroup>
                </div>
            </StCommentBox>
            <StListBox>
                <div>닉네임</div>
                <div>내용</div>
                <div style={{ borderTop: `1px solid grey` }} />
                <div>방금전</div>
            </StListBox>
        </StCommentWrap>
    );
};

export default Comment;

const StCommentWrap = styled.div`
    border-top : 1px solid grey;    
    display : flex;
    flex-direction : column;
    gap : 5px;
`
const StCommentBox = styled.div`
    display : flex;
    flex-direction : column;
    gap : 5px;
    background-color : pink;
`

const StListBox = styled.div`
    background-color : pink;
`