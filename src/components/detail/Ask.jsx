import React, { useEffect, useRef, useState } from 'react';
import Comment from '../common/Comment';
import KakaoMap from '../common/KakaoMap';
import Carousel from 'react-bootstrap/Carousel';
import { STLinkTextarea, STUsername, StCarouselWrap, STUploadButton, STIng, STImg2, STAddressButton, STEditButton, StSearchBox, StWrap, STInput, STInput3, STAddressDiv, ModalWrap } from '../styles/DetailPost.styled.js'

import SearchAddress from '../post/SearchAddress';
import useImgUpload from "../../hooks/useImgUpload";
import styled from 'styled-components';
import Views from '../../assets/icon/Views.svg'
import { FiSearch } from 'react-icons/fi';
// 스크랩
import PostScrap from './PostScrap';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postApis } from '../../api/api-functions/postApis';
import useInput from '../../hooks/useInput';
import PageState from '../common/PageState';
import TextAreaAutoResize from "react-textarea-autosize";

const Ask = ({ postId, url }) => {

    //디테일 페이지 불러오기
    const getAskPost = async () => {
        const res = await postApis.getPostAX({ url, postId });
        return res;
    }
    const result = useQuery(
        ["getAskPost", url, postId],
        getAskPost,
    );
    //디테일 페이지 server state
    const post = result.data?.data.data;
    //업데이트 인풋
    const [modPost, setmodPost, modPostHandle] = useInput(result.data?.data.data);
    //수정하기
    const [edit, setEdit] = useState(false);
    const toggleEdit = () => { setEdit(!edit); };


    //이미지 업로드 훅
    const [files, fileUrls, uploadHandle, setImgFiles, setImgUrls] = useImgUpload(5, true, 0.5, 1000);
    //기존 프리뷰 지울 state
    const [delImg, setDelImg] = useState([]);

    //이미지 업로드 인풋돔 선택 훅
    const imgRef = useRef();

    //게시글 수정
    const putAskPost = useMutation({
        mutationFn: (obj) => {
            return postApis.putAskPostAx(obj);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                window.location.reload();
            }
        },
    })
    //submit
    const onSubmitAsk = () => {

        const formData = new FormData();

        if (files.length > 0) {
            files.forEach((file) => {
                formData.append("multipartFile", file);
            })
        } else {
            formData.append("multipartFile", null);
        }

        //링크 검사(행사장링크 필수 아님)
        const link = /(http|https):\/\//.test(modPost.postLink)
        if (modPost.postLink !== "") {
            if (link === false) {
                return alert("'http://' 또는 'https://'가 포함된 링크를 입력해주세요.")
            }
        }

        const detail = modPost.detailAddress === undefined ? "" : modPost.detailAddress

        const obj = {
            imgId: delImg.join(),
            title: modPost.title,
            content: modPost.content,
            postLink: modPost.postLink,
            postAddress: modPost.postAddress + detail
        }

        //폼 데이터에 글작성 데이터 넣기
        formData.append("askPostPutRequestDto", new Blob([JSON.stringify(obj)], { type: "application/json" }));

        //Api 날리기
        putAskPost.mutate({ postId, content: formData });
    }


    //기존글의 삭제할 이미지
    const delImgHandle = (imageId) => {
        setDelImg((e) => [...e, imageId]);
    }

    // 주소 API 팝업창 상태 관리& useState
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const popupPostCode = () => { setIsPopupOpen(!isPopupOpen) }
    const [postAddress, setPostAddress] = useState("")

    useEffect(() => {
        if (postAddress !== "") {
            setmodPost({ ...modPost, postAddress })
        }
    }, [postAddress])


    //게시글 삭제
    const deleteAskPost = useMutation({
        mutationFn: (obj) => {
            return postApis.deleteAskPostAx(obj);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                window.location.replace('/');
            }
        },
    })
    const onAskDelete = (postId) => {
        if (window.confirm("게시글을 삭제 하시겠습니까?")) {
            deleteAskPost.mutate(postId);
        }
    }

    //새로추가한 글 삭제할 이미지
    function deleteNewFile(e) {
        const imgurls = fileUrls.filter((imgUrl, index) => index !== e);
        setImgUrls(imgurls);

        const imgdelete = files.filter((file, index) => index !== e);
        setImgFiles(imgdelete);
    }
    if (result.isLoading) {
        return < PageState
            display={'flex'}
            state='loading' imgWidth='25%' height='100vh'
            text='잠시만 기다려 주세요.' />;
    }
    return (
        <StWrap>
            {edit ?
                modPost !== undefined &&
                (
                    <div style={{ marginTop: "14px" }}>
                        <h4 style={{ textAlign: "center", marginTop: "18px", marginBottom: "18px" }}>질문글</h4>
                        <STInput3 type="text" placeholder="제목" name="title" defaultValue={modPost.title || ""} onChange={modPostHandle} style={{ width: "100%" }} />

                        <div><br />

                            {/*이미지 올리기*/}
                            <StCarouselWrap>
                                <Carousel>
                                    {delImg === "" || modPost.askPostImgList.length - delImg.length > 0 && modPost.askPostImgList[0].postImgId !== null &&
                                        modPost.askPostImgList
                                            .filter((item, i) => delImg.indexOf(item.postImgId) === -1)
                                            .map((img, i) => {
                                                return (
                                                    <Carousel.Item key={img.id}>
                                                        <img style={{ width: "100%", height: "396px", borderRadius: "10px", objectFit: "contain" }}
                                                            className="d-block w-100"
                                                            src={img.postImgUrl}
                                                            alt={`slide${i + 1}`}
                                                        />
                                                    </Carousel.Item>
                                                )
                                            })}
                                    {fileUrls.map((imgUrl, i) => {
                                        return (
                                            <Carousel.Item key={i}>
                                                <img style={{ width: "100%", height: "396px", borderRadius: "10px", objectFit: "contain" }}
                                                    className="d-block w-100"
                                                    src={imgUrl}
                                                    alt={`slide${i + 1}`}
                                                />
                                            </Carousel.Item>
                                        )
                                    })}

                                </Carousel>
                                {modPost.askPostImgList.map((img, i) => {
                                    return (
                                        img.postImgId &&
                                        // <button style={{ width: '60px', height: '60px', backgroundImage: `url(${imgInfo.postImgUrl})` }} ></button>
                                        <button style={{ display: delImg.indexOf(img.postImgId) > -1 ? "none" : "inline-block" }}
                                            onClick={() => delImgHandle(img.postImgId)} key={img.postImgId}>
                                            <img style={{ width: '60px', height: '60px' }} src={img.postImgUrl} alt={'post image' + i} />
                                        </button>
                                    )
                                })}

                                <STUploadButton onClick={() => { imgRef.current.click() }}>+</STUploadButton>

                                <label htmlFor="imgFile">
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="imgFile"
                                        onChange={uploadHandle}
                                        accept="image/*"
                                        ref={imgRef}
                                        name="imgFile"
                                        multiple />
                                </label>


                                {
                                    fileUrls && fileUrls.map((imgUrl, i) => {
                                        return (
                                            <button key={imgUrl} onClick={() => deleteNewFile(i)}>
                                                <img style={{ width: '60px', height: '60px' }} src={imgUrl} alt={"pre view" + i} />
                                            </button>
                                        )
                                    })
                                }

                            </StCarouselWrap>
                            <div>* '+'버튼 옆에 있는 사진을 클릭하면 사진 선택이 취소됩니다.</div>
                        </div>

                        <TextAreaAutoResize
                            name='content' value={modPost.content || ""} onChange={modPostHandle}
                            defaultValue={post.content}
                            minRows={10}
                            maxLength={2500}
                            placeholder="행사글을 띄어쓰기 포함 2500자 이내로 입력해주세요"
                            style={{
                                width: "100%",
                                resize: "none",
                                outline: "none",
                                overflow: "hidden",
                                border: "none",
                                borderRadius: "5px",
                            }}
                        />

                        <label>관련 링크</label><br />
                        <STLinkTextarea type="text" name="postLink" defaultValue={modPost.postLink} onChange={modPostHandle} style={{ width: "100%", marginBottom: "14px" }} />

                        <div>

                            <StSearchBox style={{ background: "#E1E3EC" }} onClick={popupPostCode}>
                                <button style={{ color: "#8B909F" }}><FiSearch style={{ width: '20px', height: '20px', color: '#424754', marginLeft: "10px", marginRight: "10px" }} />주소를 검색하려면 클릭해주세요</button>
                            </StSearchBox>

                            {isPopupOpen && (
                                <ModalWrap onClick={popupPostCode}>
                                    <SearchAddress setPostAddres={setPostAddress} popupPostCode={popupPostCode} />
                                </ModalWrap>
                            )}

                            {
                                modPost.postAddress && (
                                    <>
                                        <div style={{ display: "flex", marginTop: "14px" }}>
                                            <STAddressDiv style={{ flex: "1" }}>#{modPost.postAddress.split(' ')[0].length < 2 ? modPost.postAddress.split(' ')[0] : modPost.postAddress.split(' ')[0].substr(0, 2)}</STAddressDiv>
                                            <STInput style={{ flex: "4", marginLeft: "10px" }}>{modPost.postAddress}</STInput>
                                        </div>
                                        <KakaoMap address={modPost.postAddress} width='100%' height='130px' />
                                    </>
                                )
                            }

                            {
                                modPost.postAddress !== post.postAddress && <STInput3 style={{ float: "right", width: "79%", height: "40px", marginTop: "10px" }} type="text" placeholder='상세주소' name="detailAddress" onChange={modPostHandle} />
                            }

                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <STEditButton style={{ background: "#515466", marginLeft: "5px" }} onClick={toggleEdit}>취소</STEditButton>
                            <STEditButton onClick={onSubmitAsk} >수정완료</STEditButton>
                        </div>
                    </div>
                )
                :
                post === undefined ?
                    <PageState display='flex'
                        flexDirection='column' state='notFound' imgWidth='25%' height='100vh'
                        text='삭제된 게시글 입니다.' />
                    :
                    (
                        <>
                            <STIng style={{ margin: "14px 0" }}>
                                <div>
                                    <STImg2>
                                        <div style={{ margin: "0 5px 0 18px", paddingTop: "10px" }}>
                                            <img src={Views} style={{ width: "20px", height: "20px", flex: "2", marginRight: "4px" }} alt="views icon" />
                                        </div>
                                        <div style={{ margin: "10px 20px 0 0 " }}> {post.viewCount}</div>

                                    </STImg2>
                                </div>
                                <div>
                                    <PostScrap style={{ position: "absolute", right: "10px" }} bookMarkStatus={post.bookMarkStatus} />
                                </div>

                            </STIng>
                            <div style={{ marginBottom: "14px" }}>
                                <img src={post.userImg} style={{ width: "36px", height: "36px", borderRadius: "30px" }} alt="user image" />
                                <STUsername>{post.userName}</STUsername>
                            </div>

                            <STInput style={{ height: "48px", marginBottom: "8px" }}>{post.title}</STInput>

                            <div>
                                <Carousel >
                                    {
                                        post.askPostImgList
                                        && post.askPostImgList.map((img, i) => {
                                            return (
                                                <Carousel.Item key={img.id + i}>
                                                    <Img style={{ width: "100%", height: "396px", borderRadius: "10px", objectFit: "contain" }}
                                                        src={img.postImgUrl} alt={"ask post" + i} />
                                                </Carousel.Item>)
                                        })
                                    }
                                </Carousel>
                            </div>

                            <TextAreaAutoResize
                                defaultValue={post.content}
                                minRows={10}
                                style={{
                                    resize: "none",
                                    outline: "none",
                                    overflow: "hidden",
                                    border: "none",
                                    borderRadius: "5px",
                                }}
                                readOnly
                            />


                            {post.postLink !== "" &&
                                <div>
                                    <div>관련 링크</div>
                                    <STInput style={{ marginBottom: "14px", minHeight: "40px", padding: "5px" }}>
                                        <a href={post.postLink} target="_blank">{post.postLink}</a>
                                    </STInput>
                                </div>}

                            {
                                modPost.postAddress && (
                                    <>
                                        <div>행사장소</div>
                                        <div style={{ display: "flex", marginBottom: "8px" }}>
                                            <STAddressButton style={{ flex: "2" }}>#{modPost.postAddress.split(' ')[0].length < 2 ? modPost.postAddress.split(' ')[0] : modPost.postAddress.split(' ')[0].substr(0, 2)}</STAddressButton>
                                            <STInput style={{ flex: "8", marginLeft: "5px" }}>{post.postAddress}</STInput  >
                                        </div>
                                        <KakaoMap address={post.postAddress} width='100%' height='144px' />
                                    </>
                                )
                            }

                            {localStorage.getItem('userId') === post.userId.toString() &&
                                (<div>
                                    <STEditButton style={{ background: "#515466", marginLeft: "5px" }} onClick={() => { onAskDelete(postId); }}>삭제</STEditButton>
                                    <STEditButton onClick={toggleEdit}>수정</STEditButton>
                                </div>)}
                        </>
                    )}
            <Comment postId={postId} kind='ask' />

        </StWrap >
    );
};

export default Ask;

const Img = styled.img`
    z-index : 1 !important;
`