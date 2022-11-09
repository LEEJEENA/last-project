import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { __postList } from '../../redux/modules/postSlice'

import { useInView } from "react-intersection-observer"
import styled from 'styled-components';

const List = () => {
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state) => state.postSlice);

    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [ref, inView] = useInView();


    /**  서버에서 아이템을 가지고 오는 함수 */
    const getItems = useCallback(async () => {
        dispatch(__postList(page));
    }, [dispatch, page])

    // `getItems` 가 바뀔 때 마다 함수 실행
    useEffect(() => {
        getItems()
        setTotal(posts.length)
        console.log("total", total)
    }, [getItems])

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니고 마지막이 아니면 페이지+1
        if (inView && !isLoading && total !== posts.length) {
            setPage(prevState => prevState + 1)
        }

    }, [inView, isLoading, total])


    useEffect(() => {
        console.log("posts", posts)
    }, [posts])

    return (
        <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>
            {posts.map((val, i) => {
                return (
                    <StCardItem backC='orange' key={val.id.toString()}>
                        <div>title:{val.title}</div>
                        <div>content:{val.content}</div>
                    </StCardItem>
                    // <React.Fragment key={val.id}>
                    //     {/* {posts.length - 1 === i ? (
                    //         <StCardItem ref={ref} backC='red'>
                    //             <div>title:{val.title}</div>
                    //             <div>content:{val.content}</div>
                    //         </StCardItem>
                    //     ) : ( */}
                    //         <StCardItem backC='orange'>
                    //             <div>title:{val.title}</div>
                    //             <div>content:{val.content}</div>
                    //         </StCardItem>
                    //     {/* )} */}

                    // </React.Fragment>
                )
            })}
            <div ref={ref} ></div>


            {/*
                <input type='text' name='title' value={insertCon.title || ""} onChange={insertConHandle} />
                <input type='text' name='content' value={insertCon.content || ""} onChange={insertConHandle} />
                <button onClick={insertContent}>글작성</button>
            */}

        </div>
    );
};

export default List;

const StCardItem = styled.div`
    height : 100px;
    background-color : ${(prop) => prop.backC};
`