import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";
import { BookmarkFill, Views } from "../../assets";
import { useQuery } from "@tanstack/react-query";
import { myPageApis } from "../../api/api-functions/myPageApis";

const MyCmt = () => {
  const navigate = useNavigate();

  const [categoryTab, setCategoryTab] = useState("event");

  //댓글 단 글 불러오기
  const getMyCommentList = async () => {
    const res = await myPageApis.getMyCmtAX();
    return res
  }
  const result = useQuery(
    ['getMyCommentList'],
    getMyCommentList,
  )
  //댓글 단 글 server state
  const myCommentList = result.data?.data.data;
  const { eventPost, gatherPost, askPost } = myCommentList;

  const onClickCategory = (tab) => {
    setCategoryTab(tab);
  };
  if (result.isLoading) {
    return null;
  }
  return (
    <>
      <CateWrap>
        <Container>
          <CategoryBox>
            <Button
              btnType="tabMenu"
              onClick={() => {
                onClickCategory("event");
              }}
              active={categoryTab}
              name="event"
            >
              행사글
            </Button>
            <Button
              btnType="tabMenu"
              onClick={() => {
                onClickCategory("gather");
              }}
              active={categoryTab}
              name="gather"
            >
              모집글
            </Button>
            <Button
              btnType="tabMenu"
              onClick={() => {
                onClickCategory("ask");
              }}
              active={categoryTab}
              name="ask"
            >
              질문글
            </Button>

          </CategoryBox>

          <CategoryInfoList>

            <>

              {categoryTab === "event" ? (eventPost && eventPost.map((v) => (
                <ListBox
                  key={v.postId}
                  onClick={() =>
                    navigate(`/eventposts/${v.postId}`)
                  }
                >
                  <ItemImg bgImg={v.imgUrl}>
                    {v.bookMarkStatus &&
                      <BookmarkFill style={{ margin: '4px 0 0 4px' }} />
                    }
                    {/* <PostScrap bookMarkStatus={v.bookMarkStatus} /> */}
                  </ItemImg>
                  <ItemContainer>
                    <ItemTop>
                      <p style={{ fontWeight: 600, fontSize: "20px" }}>{v.title.length > 10 ? v.title.substring(0, 14) + '...' : v.title}</p>
                      <p>{v.category}</p>
                      <p>{v.content}</p>
                    </ItemTop>
                    <ItemBottom>
                      <p>~ {v.endPeriod}</p>
                      <p> <Views style={{ height: "19px" }} /> {v.viewCount}</p>
                    </ItemBottom>
                  </ItemContainer>
                </ListBox>
              )
              )) : categoryTab === "gather" ? (gatherPost &&
                gatherPost.map(
                  (v) => (
                    <ListBox
                      key={v.postId}
                      onClick={() =>
                        navigate(`/gatherposts/${v.postId}`)
                      }
                    >
                      <ItemImg bgImg={v.imgUrl}>
                        {v.bookMarkStatus &&
                          <BookmarkFill style={{ margin: '4px 0 0 4px' }} />
                        }
                        {/* <PostScrap bookMarkStatus={v.bookMarkStatus} /> */}
                      </ItemImg>
                      <ItemContainer>
                        <ItemTop>
                          <p style={{ fontWeight: 600, fontSize: "20px" }}>{v.title.length > 15 ? v.title.substring(0, 14) + '...' : v.title}</p>
                          <p>{v.category}</p>
                          <p>{v.content}</p>
                        </ItemTop>
                        <ItemBottom>
                          <p>{v.date}</p>
                          <p> <Views style={{ height: "19px" }} /> {v.viewCount}</p>
                        </ItemBottom>
                      </ItemContainer>
                    </ListBox>
                  )

                )
              )
                : (askPost && askPost.map(
                  (v) => (
                    <ListBox
                      key={v.postId}
                      onClick={() =>
                        navigate(`/askposts/${v.postId}`)
                      }
                    >
                      <ItemImg bgImg={v.imgUrl}>
                        {v.bookMarkStatus &&
                          <BookmarkFill style={{ margin: '4px 0 0 4px' }} />
                        }
                        {/* <PostScrap bookMarkStatus={v.bookMarkStatus} /> */}
                      </ItemImg>
                      <ItemContainer>
                        <ItemTop style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: 600, fontSize: "20px" }}>{v.title.length > 15 ? v.title.substring(0, 14) + '...' : v.title}</p>
                          <p>{v.category}</p>
                          <p>{v.content}</p>
                        </ItemTop>
                        <ItemBottom>
                          <p> {v.endPeriod}</p>
                          <p> <Views style={{ height: "19px" }} /> {v.viewCount}</p>
                        </ItemBottom>
                      </ItemContainer>
                    </ListBox>
                  )
                ))
              }
            </>
          </CategoryInfoList>
        </Container>
      </CateWrap>
    </>
  )
}

export default MyCmt;



const CateWrap = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
`;

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryInfoList = styled.div`
  width: 100%;
`;

const ItemImg = styled.div`
position: relative;
background: url(${(props) => props.bgImg}) no-repeat center center;
background-size: cover;
width: 130px;
height: 130px;
padding: 3px;
border-radius : 20px;
/* @media (max-width: 375px) {
  width: 125px;
  height: 150px;
}
@media (max-width: 299px) {
  width: 100px;
  height: 125px;
} */
`;
const ListBox = styled.div`
  height: 154px;
  margin : 5px;
  background-color : #fff;
  cursor: pointer;
  padding: 23px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  gap : 15px;
`;

const ItemContainer = styled.div`
  flex : 4;
  padding : 5px;
  box-sizing : border-box;
`

const ItemTop = styled.div`
  margin-bottom : 5px;
  p {
    font-size : 16px;
    line-height: 1.4;
    font-weight: 400;
  }
`
const ItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.7px solid #8B909F;
  color : #8B909F;
  p { font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top : 5px;}
 
`