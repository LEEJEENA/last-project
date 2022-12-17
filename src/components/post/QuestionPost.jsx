import React, { useState, useRef } from 'react';
import Layout from '../layout/Layout';
import { FiSearch } from 'react-icons/fi'
import noImg from '../../assets/images/common/noImg.png'
import { STInput, AllTextarea, StSearchBox, STInput3, STAddressButton, ModalWrap, AddressBox, AllButton } from '../styles/AddPost.styled'
//kakao 주소 관련
import SearchAddress from './SearchAddress';
import KakaoMap from '../common/KakaoMap'
//부트스트랩
import Carousel from 'react-bootstrap/Carousel';

import useImgUpload from '../../hooks/useImgUpload';
import useInput from '../../hooks/useInput';
import { useMutation } from '@tanstack/react-query';
import { postApis } from '../../api/api-functions/postApis';

const QuestionPost = () => {

    // 주소 API 팝업창 상태 관리
    const [postAddress, setPostAddress] = useState("")
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const popupPostCode = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    //내용 onChange
    const [question, setQuestion, questionHandle] = useInput({
        title: "",
        content: "",
        postLink: "",
        detailAddress: ""
    })


    //이미지 업로드 훅
    const [files, fileUrls, uploadHandle] = useImgUpload(5, true, 0.5, 1000);

    //이미지 업로드 인풋돔 선택 훅
    const imgRef = useRef();

    //게시글 작성
    const insertAskPost = useMutation({
        mutationFn: (obj) => {
            return postApis.addAskPostAx(obj);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                window.location.replace(`/askposts/${res.data.data.postId}`);
            }
        },
    })

    const onSubmit = () => {

        // 제목, 내용 검사
        if (question.title === "") { return alert('제목을 입력하세요') }
        if (question.content === "") { return alert('내용을 입력하세요') }

        //관련 링크(필수 아님)
        const link = /(http|https):\/\//.test(question.postLink)
        if (question.postLink !== "") {
            if (link === false) {
                return alert("'http://' 또는 'https://'가 포함된 링크를 입력해주세요.")
            }
        }

        const formData = new FormData();

        if (files.length > 0) {
            files.forEach((file) => {
                formData.append("multipartFile", file);
            })
        } else {
            formData.append("multipartFile", null);
        }

        const obj = {
            title: question.title,
            content: question.content,
            postLink: question.postLink,
            postAddress: postAddress + question.detailAddress,
        }

        formData.append(
            "askPostRequestDto",
            new Blob([JSON.stringify(obj)], { type: "application/json" })
        );
        insertAskPost.mutate(formData);
    }

    //주소 앞에 두글자 따기
    const region = postAddress.split("")[0] + postAddress.split("")[1]

    return (
        <>
            {isPopupOpen && (
                <ModalWrap onClick={popupPostCode}>
                    <SearchAddress setPostAddres={setPostAddress} popupPostCode={popupPostCode} />
                </ModalWrap>
            )}

            <Layout>
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <h4 style={{ textAlign: "center", marginTop: "18px", marginBottom: "18px" }}>질문글</h4>

                    <STInput type="text" placeholder="제목" name="title" onChange={questionHandle}
                        style={{ width: "100%", marginBottom: "18px" }} />

                    {fileUrls.length === 0 && <img src={noImg} style={{ width: "100%" }} onClick={() => { imgRef.current.click() }} alt="no image" />}
                    <div>
                        <label htmlFor="files">
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="files"
                                onChange={uploadHandle}
                                accept="image/*"
                                ref={imgRef}
                                name="files"
                                multiple />
                        </label>

                        <Carousel>
                            {fileUrls && fileUrls.map((img, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={img} style={{ width: '396px', height: "396px", objectFit: "contain" }} onClick={() => { imgRef.current.click() }} alt={"upload image" + index} />
                                    </Carousel.Item>
                                )
                            })
                            }
                        </Carousel>
                    </div >

                    <div style={{ marginBottom: "10px" }}>*이미지를 다시 업로드 하려면 사진을 클릭해주세요.</div>

                    <AllTextarea type="text" placeholder="내용을 작성해주세요" name="content" onChange={questionHandle} style={{ width: "100%", height: "200px" }} />

                    <div style={{ marginBottom: "14px" }}>
                        <label>관련 링크</label>
                        <STInput type="text" placeholder="링크" name="postLink" onChange={questionHandle} style={{ width: "100%" }} />
                    </div>

                </div>

                {/*주소 부분 */}
                <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <StSearchBox onClick={popupPostCode} style={{ background: "#E1E3EC" }}>
                        <button style={{ color: "#8B909F" }}><FiSearch style={{ width: '20px', height: '20px', color: '#424754', marginLeft: "10px", marginRight: "10px" }} />주소검색</button>
                    </StSearchBox>

                    <AddressBox >
                        {
                            postAddress !== "" && (
                                <div>
                                    <div style={{ display: "flex", marginBottom: "5px" }}>
                                        <STAddressButton style={{ marginRight: "10px", flex: "2" }}>{"#" + region}</STAddressButton>
                                        <STInput3 type="text" defaultvalue={postAddress} placeholder='우편번호 검색을 클릭해주세요' style={{ flex: "8" }}>{postAddress}</STInput3>
                                    </div>
                                    <STInput type="text" name="detailAddress" placeholder='상세주소' onChange={questionHandle} style={{ width: "78%", float: "right", marginBottom: "10px" }} /><br />
                                    <KakaoMap address={postAddress} width="328px" height="300px" marginTop="10px" />
                                </div>)
                        }
                    </AddressBox >
                </div>

                <div>
                    <AllButton style={{ background: "#3556E1", color: "white" }} onClick={onSubmit}>작성</AllButton>
                </div>
            </Layout>

        </>
    )
}

export default QuestionPost;