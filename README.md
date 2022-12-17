# [거기어때] 행사 공유 서비스

![KakaoTalk_20221208_185649538](https://user-images.githubusercontent.com/90454621/207082891-4dc7cee1-1542-4169-8f39-f95cb59c6a45.png)
<br/>

## 다른 지역의 행사가 궁금할 때?  [거기어때로 가기](https://godchoice.shop/login)
<hr/>

<a href="https://www.notion.so/euninote/55e04add1515418884f84b5377641c23" target="_blank">**Project 거기어때 Notion SA Home**</a>

[**Front End Github**](https://github.com/minhyeonhong/godchoice_FE)

[**Back End Github**](https://github.com/godchoice-project/godchoice_BE)

<br/>

<div style="text-align:center">

## 🌵 프로젝트 영상🌵

![ezgif com-gif-maker](https://user-images.githubusercontent.com/113873156/207862140-1e193d10-3eae-454c-b467-35134c757f45.gif)

## 💗 프로젝트 소개 💗
전국에 있는 다양한 행사를 소개하고 같이 갈 사람을 모집하는 서비스

<br/>

## 💞 프로젝트 기간 💞
### 2022.11.04 ~ 2022.12.16
<br/>
<br/>
</div>

## 🚩 주요 서비스
<br/>

![image](https://user-images.githubusercontent.com/90454621/207088933-8d19917d-2a1d-443d-9db2-54b5ed1636ea.png)

<br/>

### **✔ 지역 맞춤 설정**
<br/>
<div style="margin-left:20px">

**마이페이지**에서 지역 설정을 하면 **메인페이지**에서 선택한 지역의 행사들을 확인할 수 있습니다!

또한 홈 화면 지역 태그로 선택 지역의 행사들을 모아볼 수 있습니다.
</div>

### **✔ 다양한 행사 정보 확인과 소통**
<br/>
<div style="margin-left:20px">

**행사글, 모집글, 질문글**로 지역행사를 알리거나 함께 갈 사람을 모집할 수 있습니다. 

또한 궁금한 내용을 질문할 수 있고, 댓글과 대댓글로도 소통할 수 있습니다.
</div>

### **✔ 나의 관심 행사들만 모아보기**
<br/>
<div style="margin-left:20px">
마이페이지에서 내가 쓴 글과 댓글 단 글, 스크랩한 행사들을 확인할 수 있습니다.
</div>
<br/>
<br/>

<div style="text-align:center">

## 🪐 기술 정보 🪐
![react](https://user-images.githubusercontent.com/90454621/207085400-4fc1dbd6-a4ad-4e54-87a0-5ddf414f932a.svg)
![axios](https://user-images.githubusercontent.com/90454621/207085575-f3c559d2-1621-43a7-b78f-7a6de331784c.svg)
![versel](https://user-images.githubusercontent.com/90454621/207085784-bdad387e-57a4-4734-ac88-486d6ec48c59.svg)
![bootstrap](https://user-images.githubusercontent.com/90454621/207086086-96916e96-b628-4c41-98f9-871ce296cce5.svg)
<br/>

![stylecomp](https://user-images.githubusercontent.com/90454621/207086411-6aed9818-279e-4112-abea-60b779ad3487.svg)
![reactquery](https://user-images.githubusercontent.com/90454621/207086571-44c76c42-152f-406c-98f6-670df17e286b.svg)
</div>
<br/>
<hr/>

## 📚 프로젝트 아키텍처
<br/>

![image](https://user-images.githubusercontent.com/90454621/207092153-22bbdb8d-bdf2-4602-a5c7-0cb3f3091b5f.png)
<br/>
<br/>


<br/>


## 🥑 기술적 의사결정 

<br/>
<div markdown="1">

- **React**
<div style="margin-left:40px">
여러 컴포넌트로 나눠 작업을 하면 가독성이 높고, 캡슐화 또는 재사용과 같은 장점을 가지고 있어 선택하게 되었습니다.
</div>
<br/>

- **axios**
<div style="margin-left:40px">
 Promise 기반으로 만들어진 axios는 데이터를 다루기 편리하고 브라우저 호환성이 뛰어나 선택하게 되었습니다.
</div>
<br/>

- **vercel**

<div style="margin-left:40px">
vercel은 편리한 CI/CD와 간편한 도메인, env설정, 국내에 CDN region을 가지고 있는 이유로 선정하게 되었습니다.
</div>
<br/>

- **event-source-polyfill**

<div style="margin-left:40px">
실시간 알람을 구현하면서 sse연결할 때 header에 토큰을 담아 보내기 위해 사용했습니다.
</div>
<br/>

- **react-boot-strap**

<div style="margin-left:40px">
react-boot-strap의 carousel과 tab을 활용하여 개발속도를 향상시키기 위해 사용했습니다.
</div>
<br/>

- **styled-components**

<div style="margin-left:40px">
CSS를 컴포넌트 단위로 쪼갤 수 있어 사용 빈도가 높은 CSS를 재사용할 수 있고 다양한 스타일들을 분기처리를 할 수 있어 Styled-Component를 사용했습니다.
</div>
<br/>

- **browser-image-compression**

<div style="margin-left:40px">
사이트 초기 로딩 속도 개선 작업 중 업로드 하는 이미지의 리사이징이 필요하여 선정했습니다.
</div>
<br/>

- **react-query**

<div style="margin-left:40px">
client state와 server state를 구분할 수 있고, 코드의 복잡성이 줄어들고 server state관리가 용이하여 선정했습니다.
</div>
</div>
</details>
<br/>
<br/>

## 🥩 주요 기능 🥩
<br/>

        ✔ 게시글 CRUD 
        ✔ 이미지 다중 업로드 / 이미지 삭제 기능
        ✔ 무한 스크롤
        ✔ 카카오, 네이버, 구글 소셜로그인
        ✔ 실시간 알림 기능
        ✔ 댓글, 대댓글 CD
<br/>
<br/>

## 🥥 트러블 슈팅 🥥
<hr/><br/>

## 🌝 Front-End
<br/>

### 1. 무한 스크롤 관련 트러블 슈팅
<details>
<summary> 해결과정 </summary>

![Untitled (4)](https://user-images.githubusercontent.com/113873156/207241944-4f7349c1-5b29-42f7-b1df-c37457b39242.png)

### <div style="color:gray">✔ 문제 발생 </div>
<br/>
<div style="padding-left:20px">
메인 페이지의 리스트에서 무한 스크롤을 구현하던 중 "다른 페이지→ 메인 페이지"로 이동할 때 응답 데이터가 누적되어 같은 리스트가 추가되는 오류가 발생했습니다.
</div>
<br/>

### <div style="color:gray">✔ 문제 원인</div>
<br/>
<div style="padding-left:20px">
메인 페이지에 보여지는 리스트가 무한 스크롤 구현중 page증가에 따른 리스트호출이 뒤로가기할때 리렌더링되어 다시 호출하여 같은 리스트가 추가되었습니다.
</div>
<br/>

### <div style="color:gray">✔ 기존 코드</div>
<br/>
<div style="padding-left:20px">

        페이지 업데이트
        useEffect(() => {
                dispatch(putSearchStatePage(page));
        }, [page])
                
        리덕스 state처리 부분
        state.posts.push(...action.payload.data.content);
</div>
<br/>

### <div style="color:gray">✔ 해결방법</div>
<br/>
<div style="padding-left:20px">
useMemo의 의존성 배열에 page를 추가하여 page값이 변경될 때 리스트를 받아오도록 수정했습니다.
 
        변경된 코드 
        useMemo(() => {
                dispatch(putSearchStatePage(page));
        }, [page])
</div>
</details>
<br/>

### 2. redux toolkit의 복잡성
<details>
<summary> 해결과정 </summary><br/>

### <div style="color:gray">✔ 문제 발생</div>
<br/>
<div style="padding-left:20px">
client의 전역상태와 server에서 받아온 data를 redux toolkit만으로 상태관리를 하여 코드가 복잡해졌습니다.
</div>
<br/>

### <div style="color:gray">✔ 문제 원인</div>
<br/>
<div style="padding-left:20px">
slice부분에서 thunk로 server의 data를 extraReducers로 data를 넘겨 상태관리를 하기때문에 코드량이 많아져 유지보수하기 어려웠습니다.

client의 전역상태 변수에 덮어쓰여지는 문제도 발생했습니다.
</div>
<br/>

### <div style="color:gray">✔ 문제 해결</div>
<br/>
<div style="padding-left:20px">
react-query를 사용하여 server state를 따로 관리하여 코드의 복잡성을 줄였습니다.
</div>
<br/>

<details style="margin-left:40px">
<summary> 이전 redux toolkit의 slice </summary>

        import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
        import { postApis } from "../../api/api-functions/postApis"

        //관리자글 조회
        export const __getAdminPost = createAsyncThunk(
        "posts/__getAdminPost",
        async (payload, thunkAPI) => {
                try {
                const res = await postApis.getAdminPostAX();

                return thunkAPI.fulfillWithValue(res.data);
                } catch (error) {
                return thunkAPI.rejectWithValue(error);
                }
        });

        //관리자글 작성
        export const __addAdminPost = createAsyncThunk(
        "posts/__addAdminPost",
        async (payload, thunkAPI) => {
                try {
                postApis.addAdminPostAX(payload)
                        .then((response) => {
                        window.location.replace('/mypage');
                        });
                } catch (error) {
                console.log("error", error);
                }
        });

        //관리자글 삭제
        export const __delAdminPost = createAsyncThunk(
        "posts/__delAdminPost",
        async (payload, thunkAPI) => {
                try {
                postApis.deleteAdminPostAX(payload)
                        .then((response) => {
                        console.log("관리자글 삭제 response", response.data);
                        });
                } catch (error) {
                console.log("error", error);
                }
        });

        export const __getAllPostList = createAsyncThunk(
        "postSlice/__getAllPostList",
        async (payload, thunkAPI) => {
                try {
                const res = await postApis.searchPostAX(payload);

                return thunkAPI.fulfillWithValue(res.data);
                } catch (error) {
                return thunkAPI.rejectWithValue(error);
                }
        }
        )

        export const __getPost = createAsyncThunk(
        "postSlice/__getPost",
        async (payload, thunkAPI) => {
                try {
                const res = await postApis.getPostAX(payload);

                return thunkAPI.fulfillWithValue(res.data);
                } catch (error) {
                return thunkAPI.rejectWithValue(error);
                }
        }
        )

        // 스크랩
        export const __postScrap = createAsyncThunk(
        "postSlice/__postScrap",
        async (payload, thunkAPI) => {
                try {
                const res = await postApis.postScrapAx(payload);

                return thunkAPI.fulfillWithValue(res.data);
                } catch (error) {
                return thunkAPI.rejectWithValue(error);
                }
        }
        );



        export const __addPost = createAsyncThunk(
        "posts/__addPost",
        async (payload, thunkAPI) => {
                try {
                await postApis.addEventPostAx(payload)
                        .then((response) => {
                        if (response.data.status === 200) window.location.replace(`/eventposts/${response.data.data.postId}`);
                        });
                } catch (error) {
                console.log("error", error);
                return thunkAPI.rejectWithValue(error);
                }
        });



        export const __putPost = createAsyncThunk(
        "posts/__putPost",
        async (payload, thunkAPI) => {
                try {
                postApis.putEventPostAx(payload)
                        .then((res) => {
                        if (res.data.status === 200) {
                                window.location.reload();
                        } else {
                                console.log(res.data);
                        }
                        }).catch((error) => {

                        })

                } catch (error) {
                return thunkAPI.rejectWithValue(error);
                }
        }
        );

        export const __deletePost = createAsyncThunk(
        "posts/__deletePost",
        async (payload, thunkAPI) => {
                // console.log(payload)
                try {
                postApis.deleteEventPostAx(payload)
                        .then((res) => {
                        window.location.replace('/');
                        })

                } catch (error) {
                return thunkAPI.rejectWithValue(error);
                }
        }
        );


        export const postSlice = createSlice({
        name: "postSlice",
        initialState: {
                adminPosts: [],
                posts: [],
                post: {},
                scrapState: null,
                searchState: {},
                comments: [],
                isLoading: false,
                isResetSearch: true,
                istLastPage: false,
                testPostId: 0
        },
        reducers: {
                test(state, action) {
                state.testPostId = action.payload;
                },
                //검생 상태
                putSearchState(state, action) {
                state.isResetSearch = true;
                state.searchState = { ...state.searchState, ...action.payload };
                },
                //페이지 상태
                putSearchStatePage(state, action) {
                state.isResetSearch = false;
                state.searchState = { ...state.searchState, page: action.payload };
                },
                //스크랩 상태
                setScrapState(state, action) {
                state.scrapState = action.payload;
                },

        },
        extraReducers: {
                //__getAdminPost
                [__getAdminPost.pending]: (state, action) => {
                state.isLoading = true;
                },
                [__getAdminPost.fulfilled]: (state, action) => {
                state.isLoading = false;
                if (action.payload.status === 200) {
                        state.adminPosts = action.payload.data;
                }
                },
                [__getAdminPost.rejected]: (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
                },
                //__getAllPostList
                [__getAllPostList.pending]: (state, action) => {
                state.isLoading = true;
                },
                [__getAllPostList.fulfilled]: (state, action) => {
                state.isLoading = false;
                if (action.payload.status === 200) {
                        if (state.isResetSearch) {
                        state.posts = action.payload.data.content;
                        } else {
                        state.posts.push(...action.payload.data.content);
                        if (action.payload.data.content.length !== 10) {
                                state.istLastPage = true;
                        }
                        }
                }
                },
                [__getAllPostList.rejected]: (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
                },
                //__getPost
                [__getPost.pending]: (state, action) => {
                state.isLoading = true;
                },
                [__getPost.fulfilled]: (state, action) => {
                state.isLoading = false;
                if (action.payload.status === 200) {
                        state.post = action.payload.data;
                }
                },
                [__getPost.rejected]: (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
                },


                // __postScrap
                [__postScrap.fulfilled]: (state, action) => {
                state.isLoading = false;
                if (action.payload.status === 200) {
                        state.scrapState = !state.scrapState;
                }
                },
                [__postScrap.rejected]: (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
                },



                //__addPost
                [__addPost.pending]: (state) => {
                state.isLoading = true;
                },
                [__addPost.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
                },
                [__addPost.rejected]: (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                },


        }
        });

        export const { test, putSearchState, putSearchStatePage, setScrapState } = postSlice.actions;
        export default postSlice.reducer;
</details>

<details>
<summary style="margin-left:40px"> 변경하기 전 Home.jsx </summary>


        //검색 상태 업데이트
        const updateSearchInfo = (searchInfo) => {
                dispatch(putSearchState({ main: searchState.main === undefined ? 'event' : searchState.main, ...searchInfo }));
        }
        const [modalOn, setModalOn] = useState(false);
        //페이지 업데이트
        useMemo(() => {
                dispatch(putSearchStatePage(page));
        }, [page])

        //리스트 불러오기
        useMemo(() => {
                if (Object.keys(searchState).length > 0) {
                dispatch(__getAllPostList(searchState));
                }
        }, [searchState])

</details>

<details>
<summary style="margin-left:40px"> 변경하기 전 List.jsx </summary>
         
        const [ref, inView] = useInView();

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니고 마지막이 아니면 페이지+1
        if (inView && !isLoading && !istLastPage) {
            setPage(prevState => prevState + 1)
        }
    }, [inView, isLoading])
    
</details><br/>


### <div style="color:gray">✔ react-query로 바꾼 후 간략해진 코드</div>
<br/>
<div style="padding-left:20px">

        const [ref, inView] = useInView();

        //리스트 받아오기
        const getSearchPosts = async (searchState, pageParam) => {
                const res = await postApis.searchPostAX(searchState, pageParam);
                const content = res.data.data.content;

                return { postList: content, isLastPage: content.length !== 10, nextPage: pageParam + 1 };
        }

        //리스트 받아오기
        const result = useInfiniteQuery({
                queryKey: ['postList'],
                queryFn: ({ pageParam = 0 }) => getSearchPosts(searchState, pageParam),
                getNextPageParam: ({ isLastPage, nextPage }) => {
                if (!isLastPage) return nextPage;
                },
                refetchOnWindowFocus: false,
        })

        useEffect(() => {
                // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니고 다음페이지가 있다면
                if (inView && !result.isFetching && result.hasNextPage) {
                result.fetchNextPage();
                }
        }, [inView, result.isFetching])

        useEffect(() => {
                //검색상태가 바뀌면 server state refetch
                if (!result.isFetching) result.refetch(searchState, 0);
        }, [searchState])
</div>
</details>
<br/>

### 3. SSE 연결 요청 문제
<details>
<summary>해결 방법</summary>

![Untitled (5)](https://user-images.githubusercontent.com/113873156/207243850-48f76a1b-faa9-4c88-85ff-d1bf6dc811cf.png)

### <div style="color:gray">✔ 문제 발생</div>
<br/>
<div style="padding-left:20px">
다른 페이지로 여러번 이동하면 무한 로딩 상태가 발생하는 오류
</div>
<br/>

### <div style="color:gray">✔ 문제 파악</div>
<br/>
<div style="padding-left:20px">
실시간 알람기능을 구현하면서 SSE로 연결하면서 페이지를 이동할 때마다 header가 리렌더링되면서, 선언한 state가 초기화되어 연결되어 있는 상태에서 연결요청을 보내고 있었습니다.

또한 최대 동시 접속 수(6)를 넘으면 기존 연결이 끝날 때까지  pending상태가 되어 다른 요청들도 pending 상태가 되어 사이트가 무한 로딩중으로 빠지는 상황이었습니다.
</div>
<br/>

### <div style="color:gray">✔ 기존 코드</div>
<br/>
<div style="padding-left:20px">

        //sse연결 여부
        const [listening, setListening] = useState(false);
        //SSE 
        let eventSource = undefined;
        useEffect(() => {
                if (!listening && isLogin) {
                eventSource = new EventSourcePolyfill(`${process.env.REACT_APP_API_URL}/subscribe`, {
                        headers: {
                        "Access_Token": localStorage.getItem("token"),
                        'Content-Type': 'text/event-stream',
                        },
                        heartbeatTimeout: 3600000, //sse 연결 시간 (토큰 유지1시간)
                        withCredentials: true,
                });
                //sse 연결
                eventSource.onopen = (event) => {
                        if (event.status === 200) {
                        setListening(true);
                        }
                };
        ...
</div>
<br/>

### <div style="color:gray">✔ 문제 해결</div>
<br/>
<div style="padding-left:20px">
기존에 state로 관리하던 연결 여부 상태를 localStorage로 관리하도록 수정하였고, 연결되었을 때 연결 요청을 보내지 않도록 수정했습니다.
</div>
<br/>

### <div style="color:gray">✔ 수정한 코드</div>
<br/>
<div style="padding-left:20px">

        //sse연결 여부
        const isSSE = localStorage.getItem('sse') === "connect" ? true : false;
        //SSE 
        useEffect(() => {
                if (!isSSE && isLogin) {
                const eventSource = new EventSourcePolyfill(`${process.env.REACT_APP_API_URL}/subscribe`, {
                        headers: {
                        "Access_Token": localStorage.getItem("token"),
                        'Content-Type': 'text/event-stream',
                        },
                        heartbeatTimeout: 3600000, //sse 연결 시간 (토큰 유지1시간)
                        withCredentials: true,
                });
                //sse 연결
                eventSource.onopen = (event) => {
                        if (event.status === 200) {
                        localStorage.setItem('sse', "connect");
                        }
                };
        ...
</div>
<br/>
</details>
<br/>

## ⭐️ 팀원분들
<hr/>

| Position                 | Name   | Blog                                                     | MBTI |
| ------------------------ | ------ | -------------------------------------------------------- | ---- |
| 🔰 FE·React | 민현홍 | 🔗 [GitHub::Min Hyeonhong](https://github.com/minhyeonhong)       | ISFP |
| FE·React   | 박지윤 | 🔗 [GitHub::connie](https://github.com/verocony)     | ENFP |
| FE·React   | 이지나 | 🔗 [GitHub::C e l i n a](https://github.com/LEEJEENA)     | ISTJ |
| 🔰 BE·Spring             | 공은희 | 🔗 [GitHub::euni](https://github.com/euni1004) | INTP |
| BE·Spring                | 김병현 | 🔗 [GitHub::S a n d b a c k e n d](https://github.com/KimByeungHyun)   | ISFP |
| BE·Spring                | 정동훈 | 🔗 [GitHub::dhun0103](https://github.com/dhun0103)   | INTJ |
| UX/UI                    | 양은희 |                                                          | INTP |