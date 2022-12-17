import React, { useState, useRef, useEffect } from 'react';
import Comment from '../common/Comment';
import { FiSearch } from 'react-icons/fi';
import {
    STLinkTextarea, STInput3, ModalWrap, StWrap, StCarouselWrap, STUploadButton, StTypeBox, STIng, STIngDiv, STUsername, STInput, STButton, STBox2, STAddressButton, STEditButton, STImg, SelTop, SelBottom, STSelect, STDateInput, STTitleInput, StSearchBox, STAddressDiv
} from '../styles/DetailPost.styled.js'
import useImgUpload from "../../hooks/useImgUpload";
import Views from '../../assets/icon/Views.svg'
import Carousel from 'react-bootstrap/Carousel';
//kakao 주소 관련
import SearchAddress from '../post/SearchAddress';
import KakaoMap from '../common/KakaoMap';

// 스크랩
import PostScrap from './PostScrap';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postApis } from '../../api/api-functions/postApis';
import useInput from '../../hooks/useInput';
import PageState from '../common/PageState';
import styled from 'styled-components';
import TextAreaAutoResize from "react-textarea-autosize";

const Event = ({ postId, url }) => {

    //디테일 페이지 불러오기
    const getEventPost = async () => {
        const res = await postApis.getPostAX({ url, postId });
        return res;
    }
    const result = useQuery(
        ["getEventPost", url, postId],
        getEventPost,
    );
    //디테일 페이지 server state
    const post = result.data?.data.data;
    //업데이트 인풋
    const [modPost, setmodPost, modPostHandle] = useInput(result.data?.data.data);

    //상세글 수정하기 상태
    const [mod, setMod] = useState(false);

    // 주소 API 팝업창 상태 관리
    const [isAddressModal, setIsAddressModal] = useState(false);
    //주소 API useState
    const [postAddress, setPostAddress] = useState("");

    const popupPostCode = () => {
        setIsAddressModal(!isAddressModal)
    }

    useEffect(() => {
        if (postAddress !== "") {
            setmodPost({ ...modPost, postAddress })
        }
    }, [postAddress])

    //이미지 업로드 훅
    const [files, fileUrls, uploadHandle, setImgFiles, setImgUrls] = useImgUpload(5, true, 0.5, 1000);
    const imgRef = useRef();

    //기존 프리뷰 지울 state
    const [delImg, setDelImg] = useState([]);


    //게시글 수정
    const putEventPost = useMutation({
        mutationFn: (obj) => {
            return postApis.putEventPostAx(obj);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                window.location.reload();
            }
        },
    })

    //submit
    const putPostSubmit = () => {

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
            category: modPost.category,
            startPeriod: modPost.startPeriod,
            endPeriod: modPost.endPeriod,
            title: modPost.title,
            content: modPost.content,
            postLink: modPost.postLink,
            postAddress: modPost.postAddress + detail
        }

        //폼 데이터에 글작성 데이터 넣기
        formData.append("eventPostPutReqDto", new Blob([JSON.stringify(obj)], { type: "application/json" }));

        //Api 날리기
        putEventPost.mutate({ postId, content: formData });
    }

    const categoryOption = ['마라톤', '페스티벌', '전시회', '공연', '기타'];
    //날짜 제한
    const today = new Date();
    const today2 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    //기존글의 삭제할 이미지
    const delImgHandle = (postImgId) => {
        setDelImg((e) => [...e, postImgId]);
    }

    //새로추가한 글 삭제할 이미지
    function deleteNewFile(e) {
        const imgurls = fileUrls.filter((imgUrl, index) => index !== e);
        setImgUrls(imgurls);

        const imgdelete = files.filter((file, index) => index !== e);
        setImgFiles(imgdelete);
    }

    //게시글 삭제
    const deleteEventPost = useMutation({
        mutationFn: (obj) => {
            return postApis.deleteEventPostAx(obj);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                window.location.replace('/');
            }
        },
    })
    //게시글 삭제
    const onEventDelete = (postId) => {
        if (window.confirm("게시글을 삭제 하시겠습니까?")) {
            deleteEventPost.mutate(postId);
        }
    }

    if (result.isLoading) {
        return < PageState
            display={'flex'}
            state='loading' imgWidth='25%' height='100vh'
            text='잠시만 기다려 주세요.' />;
    }

    const today3 = modPost?.startPeriod

    return (
        <StWrap>

            {!mod ?
                post === undefined ?
                    <PageState display='flex'
                        flexDirection='column' state='notFound' imgWidth='25%' height='100vh'
                        text='삭제된 게시글 입니다.' />
                    :
                    <>
                        <STIng style={{ margin: "14px 0" }}>
                            <div style={{ display: "flex" }}>
                                <div>
                                    {post.postState === "진행중" ?
                                        (<STIngDiv><div>{post.postState}</div></STIngDiv>)
                                        :
                                        (<STIngDiv style={{ background: "#727785" }}>{post.postState}</STIngDiv>)
                                    }
                                </div>
                                <div>
                                    <STImg>
                                        <div style={{ background: "white", width: "70px", height: "45px" }}>
                                            <div style={{ margin: "0 5px 0 18px", paddingTop: "10px" }}>
                                                <img src={Views} style={{ width: "20px", height: "20px", flex: "2", marginRight: "4px" }} alt="views icon" />
                                                {post.viewCount}
                                            </div>
                                        </div>
                                    </STImg>
                                </div>

                            </div>
                            <div>
                                <PostScrap style={{ right: "0px" }} bookMarkStatus={post.bookMarkStatus} />
                            </div>

                        </STIng>

                        <STBox2 style={{ display: "flex" }}>
                            <STButton style={{ width: "65px", flex: "2", padding: "0 3px", fontSize: "15px" }}>행사글</STButton>
                            <STButton style={{ width: "70px", flex: "2", padding: "0 3px", fontSize: "15px" }}>{post.category}</STButton>
                            <STButton style={{ width: "110px", flex: "3", padding: "0 3px", fontSize: "15px" }}>{post.startPeriod}</STButton>
                            <span style={{ paddingTop: "8px" }}>~</span>
                            <STButton style={{ width: "110px", flex: "3", padding: "0 3px", fontSize: "15px" }}>{post.endPeriod}</STButton>
                        </STBox2>

                        <div style={{ margin: "10px 0" }}>
                            <img src={post.userImg} style={{ width: "36px", height: "36px", borderRadius: "30px" }} alt="user iamage" />
                            <STUsername>{post.username}</STUsername>
                        </div>

                        <STInput style={{ height: "48px" }}><p>{post.title}</p></STInput>

                        <StCarouselWrap>
                            <Carousel>
                                {
                                    post.postImgInfo !== undefined &&
                                    post.postImgInfo.map((imgInfo, i) => {
                                        return (
                                            <Carousel.Item key={i}>
                                                <img style={{ width: "100%", height: "396px", borderRadius: "10px", objectFit: "contain" }}
                                                    className="d-block w-100"
                                                    src={imgInfo.postImgUrl}
                                                    alt={`slide${i + 1}`}
                                                />
                                            </Carousel.Item>
                                        )
                                    })}
                            </Carousel>
                        </StCarouselWrap>

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
                        {
                            post.postLink !== "" && (
                                <>
                                    <div>관련 링크</div>
                                    <STInput style={{ marginBottom: "14px", minHeight: "40px" }}>
                                        <a href={post.postLink} target="_blank">{post.postLink}</a>
                                    </STInput>
                                </>
                            )
                        }
                        {
                            modPost.postAddress && (
                                <>
                                    <div>행사장소</div>
                                    <div style={{ display: "flex", marginBottom: "8px" }}>
                                        <STAddressButton style={{ flex: "2" }}>#{modPost.postAddress.split('')[0] + modPost.postAddress.split('')[1]}</STAddressButton>
                                        <STInput style={{ flex: "8", marginLeft: "5px" }}>{post.postAddress}</STInput>
                                    </div>
                                </>
                            )
                        }
                        <KakaoMap address={post.postAddress} width='100%' height='144px' />

                        {localStorage.getItem('userId') === post.userId.toString() &&
                            (<div>
                                <STEditButton style={{ background: "#515466", marginLeft: "5px" }} onClick={() => { onEventDelete(postId); }}>삭제</STEditButton>
                                <STEditButton onClick={() => { setMod(true) }}>수정</STEditButton>
                            </div>)}

                    </>
                :
                modPost !== undefined &&
                <>
                    <h4 style={{ textAlign: "center", marginTop: "18px", marginBottom: "18px" }}>행사글</h4>
                    <STTitleInput type='text' name='title' value={modPost.title || ""} onChange={modPostHandle} />

                    <StCarouselWrap>

                        <Carousel>
                            {delImg === "" || modPost.postImgInfo.length - delImg.length > 0 && modPost.postImgInfo[0].postImgId !== null &&
                                modPost.postImgInfo
                                    .filter((item, i) => delImg.indexOf(item.postImgId) === -1)
                                    .map((imgInfo, i) => {
                                        return (

                                            <Carousel.Item key={imgInfo.id}>
                                                <img style={{ width: "100%", height: "396px", borderRadius: "10px", objectFit: "contain" }}
                                                    className="d-block w-100"
                                                    src={imgInfo.postImgUrl}
                                                    alt={`slide${i + 1}`}
                                                />
                                            </Carousel.Item>
                                        )
                                    })}

                            {fileUrls.map((imgUrl, i) => {
                                return (
                                    <Carousel.Item key={imgUrl.id}>
                                        <img style={{ width: "100%", height: "396px", borderRadius: "10px", objectFit: "contain" }}
                                            className="d-block w-100"
                                            src={imgUrl}
                                            alt={`slide${i + 1}`}
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>

                        {modPost.postImgInfo.map((imgInfo, i) => {
                            return (
                                imgInfo.postImgId &&
                                <button style={{ display: delImg.indexOf(imgInfo.postImgId) > -1 ? "none" : "inline-block" }}
                                    onClick={() => delImgHandle(imgInfo.postImgId)} key={i}>
                                    <img style={{ width: '60px', height: '60px' }} src={imgInfo.postImgUrl} alt={"post image" + i} />
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
                            fileUrls && fileUrls.map((imgUrl, index) => {
                                return (
                                    <button key={imgUrl} onClick={() => deleteNewFile(index)}>
                                        <img style={{ width: '60px', height: '60px' }} src={imgUrl} alt={"pre view" + index} />
                                    </button>
                                )
                            })
                        }

                    </StCarouselWrap>
                    <div>* '+'버튼 옆에 있는 사진을 클릭하면 사진 선택이 취소됩니다.</div>
                    <div style={{ display: "flex" }}>
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
                    </div>

                    <StTypeBox>
                        <label style={{ marginLeft: "10px", marginTop: "14px" }}>카테고리</label>
                        <SelTop style={{ marginTop: "10px" }}>
                            <STSelect defaultValue={modPost.category} name="category" onChange={modPostHandle}>
                                {categoryOption.map((cate, i) => {
                                    return (
                                        <option value={cate} key={i}>{cate}</option>
                                    )
                                })}
                            </STSelect>
                        </SelTop>
                        <div style={{ display: "flex", marginLeft: "10px", marginBottom: "14px" }}>
                            <div style={{ flex: "1" }}>시작 날짜</div>
                            <div style={{ flex: "0.9" }}>마감 날짜</div>
                        </div>

                        <SelBottom style={{ marginBottom: "10px" }}>
                            <STDateInput type="date" name="startPeriod" value={modPost.startPeriod || ""} onChange={modPostHandle} min={today2} />
                            <STDateInput type="date" name="endPeriod" value={modPost.endPeriod || ""} onChange={modPostHandle} min={today3} />
                        </SelBottom>
                    </StTypeBox>

                    <label style={{ marginLeft: "5px" }}>관련 링크</label>
                    <STLinkTextarea type='text' name='postLink' value={modPost.postLink || ""} onChange={modPostHandle} />

                    <StSearchBox style={{ background: "#E1E3EC" }} onClick={popupPostCode}>
                        <button style={{ color: "#8B909F" }}><FiSearch style={{ width: '20px', height: '20px', color: '#424754', marginLeft: "10px", marginRight: "10px" }} />주소를 검색하려면 클릭해주세요</button>
                    </StSearchBox>

                    <div style={{ margin: "0px 20px" }}>
                        {isAddressModal && (
                            <ModalWrap onClick={popupPostCode}>
                                <SearchAddress setPostAddres={setPostAddress} popupPostCode={popupPostCode} />
                            </ModalWrap>
                        )}

                        {
                            modPost.postAddress && (
                                <>
                                    <div style={{ display: "flex", marginTop: "14px" }}>
                                        <STAddressDiv style={{ marginRight: "5px" }}>#{modPost.postAddress.split(' ')[0].length < 2 ? modPost.postAddress.split(' ')[0] : modPost.postAddress.split(' ')[0].substr(0, 2)}</STAddressDiv>
                                        <STInput >{modPost.postAddress}</STInput>
                                    </div>
                                </>
                            )
                        }
                        {
                            modPost.postAddress !== post.postAddress && <STInput3 style={{ marginBottom: "10px" }} type="text" placeholder='상세주소' name="detailAddress" onChange={modPostHandle} />
                        }

                        <KakaoMap address={modPost.postAddress} width='100%' height='130px' />
                    </div>


                    <div>
                        <STEditButton style={{ background: "#515466", marginLeft: "5px" }} onClick={() => setMod(false)}>취소</STEditButton>
                        <STEditButton onClick={putPostSubmit}>수정완료</STEditButton>
                    </div>


                </>
            }
            <Comment postId={postId} kind='event' style={{ marginTop: "20px" }} />
        </StWrap >
    );
};

export default Event;


const STContentTextarea = styled.textarea`
    border-radius: 5px;
    border: transparent;
    width :100%;
    background-color: white;
    padding: 6px 10px;
    margin-top: 10px;
    /* min-height: ${(props) => (props.minHeight)}px; */
`
