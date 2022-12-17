import React, { useState, useRef } from 'react';
import {
    SelBottom, FestivalWrap, STSelect, StSearchBox, AddressBox, AllButton, AllTextarea, STAddressButton, STInput3, STInput, ModalWrap
} from '../styles/AddPost.styled'
import { FiSearch } from 'react-icons/fi'
//kakao 주소 관련
import SearchAddress from './SearchAddress';
import KakaoMap from '../../components/common/KakaoMap'
//부트스트랩
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Layout from '../layout/Layout'
import noImg from '../../assets/images/common/noImg.png'

import useImgUpload from '../../hooks/useImgUpload';
import useInput from '../../hooks/useInput';
import { useMutation } from '@tanstack/react-query';
import { postApis } from '../../api/api-functions/postApis';

const FestivalPost = () => {

    //주소 API useState
    const [postAddress, setPostAddress] = useState("")

    //이미지 업로드 훅
    const [files, fileUrls, uploadHandle, setImgFiles, setImgUrls, originFiles] = useImgUpload(5, true, 0.5, 1000);

    //이미지 업로드 인풋돔 선택 훅
    const imgRef = useRef();

    //행사글
    const [festival, setFestival, festivalHandle] = useInput({
        category: "",
        startPeriod: "",
        endPeriod: "",
        title: "",
        content: "",
        postLink: "",
        detailAddress: "" //상세 주소를 보내주기 위함
    })

    //게시글 작성
    const insertEventPost = useMutation({
        mutationFn: (obj) => {
            return postApis.addEventPostAx(obj);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                window.location.replace(`/eventposts/${res.data.data.postId}`);
            }
        },
    })

    //관리자글 작성
    const insertAdminPost = useMutation({
        mutationFn: (obj) => {
            return postApis.addAdminPostAX(obj);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                window.location.replace('/mypage');
            }
        },
    })

    const onSubmit = () => {
        const formData = new FormData();



        const obj = {
            category: festival.category,
            startPeriod: festival.startPeriod,
            endPeriod: festival.endPeriod,
            title: festival.title,
            content: festival.content,
            postAddress: postAddress + festival.detailAddress, //상세 주소 내용 추가
            postLink: festival.postLink,
        }


        const adminObj = {
            title: festival.title,
            postLink: festival.postLink,
        }

        if (isAdmin) {
            if (originFiles.length > 0) {
                originFiles.forEach((file) => {
                    formData.append("multipartFile", file);
                })
            } else {
                formData.append("multipartFile", null);
            }

            formData.append("adminPostReqDto", new Blob([JSON.stringify(adminObj)], { type: "application/json" }));
            insertAdminPost.mutate(formData);
        } else {
            //카테고리, 행사시작, 행사마감, 글작성, content 검사
            if (festival.category === "") { return alert('카테고리를 입력하세요') }
            if (festival.startPeriod === "") { return alert('행사시작 일자를 입력하세요') }
            if (festival.endPeriod === "") { return alert('행사마감 일자를 입력하세요') }
            if (festival.title === "") { return alert('제목을 입력하세요') }
            if (festival.content === "") { return alert('내용을 입력하세요') }
            // if (festival.postLink === "") { return alert('관련 링크를 입력하세요') }
            if (postAddress === "") { return alert('주소를 등록하세요') }

            //링크 검사
            const link = /(http|https):\/\//.test(festival.postLink)
            if (festival.postLink !== "") {
                if (link === false) {
                    return alert("'http://' 또는 'https://'가 포함된 링크를 입력해주세요.")
                }
            }

            if (files.length > 0) {
                files.forEach((file) => {
                    formData.append("multipartFile", file);
                })
            } else {
                formData.append("multipartFile", null);
            }

            formData.append("eventPostReqDto", new Blob([JSON.stringify(obj)], { type: "application/json" }));
            insertEventPost.mutate(formData);
        }
    }

    // 주소 API 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const popupPostCode = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    //날짜 제한
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear()

    const today2 = year + '-' + month + '-' + day;
    const today3 = festival.startPeriod

    //주소 앞에 두글자 따기
    const region = postAddress.split("")[0] + postAddress.split("")[1]

    const [isAdmin, setIsAdmin] = useState(false);
    const adminPostHandle = (e) => {
        if (e.target.checked) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }

    return (
        <>

            <Layout style={{ height: "100%" }} >
                <FestivalWrap>
                    <h4 style={{ textAlign: "center", marginTop: "8px", marginBottom: "18px" }}>행사글</h4>

                    <Form.Group className="mb-3" controlId="formGridAddress1" style={{ height: "auto" }}>
                        <Form.Control type="text" placeholder="제목" name="title" onChange={festivalHandle} style={{ width: "100%", height: "45px", border: "none", margin: "0 0 10px 0" }} />
                    </Form.Group>

                    {/*이미지 부분*/}
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
                                        <img src={img} style={{ width: '100%', height: "396px", objectFit: "contain" }} onClick={() => { imgRef.current.click() }} />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div >
                    <div style={{ marginBottom: "10px" }}>*이미지를 다시 업로드 하려면 사진을 클릭해주세요.</div>

                    <AllTextarea type="text" placeholder="행사글을 띄어쓰기 포함 2500자 이내로 입력해주세요" name="content" onChange={festivalHandle} maxLength={2500} />

                    <STSelect style={{ width: "100%", marginBottom: "10px", padding: "10px" }} name="category" onChange={festivalHandle}>
                        <option>카테고리</option>
                        <option value="마라톤">마라톤</option>
                        <option value="페스티벌">페스티벌</option>
                        <option value="전시회">전시회</option>
                        <option value="공연">공연</option>
                        <option value="기타">기타</option>
                    </STSelect>

                    <SelBottom>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>행사시작</Form.Label>
                                <Form.Control type="date" name="startPeriod" onChange={festivalHandle} min={today2} className="dateform"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>행사마감</Form.Label>
                                <Form.Control type="date" name="endPeriod" onChange={festivalHandle} min={today3} className="dateform" />
                            </Form.Group>
                        </Row>
                    </SelBottom>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>관련 링크</Form.Label>
                        <Form.Control type="text" placeholder="링크" name="postLink" onChange={festivalHandle} style={{ width: "100%", height: "45px", border: "none", margin: "0 0 10px 0" }} />
                    </Form.Group>

                    {/* 주소 부분 */}
                    <div>
                        <StSearchBox style={{ background: "#E1E3EC", height: "40px" }} onClick={popupPostCode}>
                            <button style={{ color: "#8B909F" }}><FiSearch style={{ width: '20px', height: '40px', color: '#424754', marginRight: "10px" }} />주소검색</button>
                        </StSearchBox>

                        <AddressBox >
                            {
                                postAddress !== "" && (
                                    <>
                                        <div style={{ display: "flex", marginBottom: "10px" }}>
                                            <STAddressButton style={{ marginRight: "10px", flex: "2" }}>{"#" + region}</STAddressButton>
                                            <STInput3 type="text" value={postAddress} style={{ flex: "8", padding: "5px", lineHeight: "20px", height: "auto", minHeight: "45px" }} readOnly>{postAddress}</STInput3>
                                        </div>
                                        <STInput type="text" name="detailAddress" placeholder='상세주소' onChange={festivalHandle} style={{ marginBottom: "10px", padding: "5px", lineHeight: "20px", height: "auto", minHeight: "45px" }} />


                                        <KakaoMap address={postAddress} width="100%" height="300px" />
                                    </>)
                            }
                        </AddressBox >

                        {isPopupOpen && (
                            <ModalWrap onClick={popupPostCode}>
                                <SearchAddress setPostAddres={setPostAddress} popupPostCode={popupPostCode} />
                            </ModalWrap>
                        )}
                    </div>
                    {
                        localStorage.getItem('role') === 'ADMIN' &&
                        <div><input type='checkbox' onChange={adminPostHandle} />관리자글</div>
                    }
                    <AllButton style={{ background: "#3556E1", color: "white", borderRadius: "10px" }} onClick={onSubmit}>작성</AllButton>
                </FestivalWrap>
            </Layout>
        </>

    )
}

export default FestivalPost;



