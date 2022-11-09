import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postApis } from "../../api/api-functions/postApis"


export const __postList = createAsyncThunk(
    "postSlice/__postList",
    async (payload, thunkAPI) => {
        try {

            const res = await postApis.postListAX();

            const curPage = payload * 10;

            return thunkAPI.fulfillWithValue(res.data.slice((curPage - 10), curPage));
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

//글작성
export const __insertPost = createAsyncThunk(
    "postSlice/__insertPost",
    async (payload, thunkAPI) => {
        try {
            await postApis.insertPostAX(payload)
                .then((res) => {
                    console.log("res", res)
                }).catch((error) => {
                    console.log("error", error)
                })

            // const obj = {
            //     access_token: res.headers.access_token,
            //     data: res.data
            // }
            // return thunkAPI.fulfillWithValue(obj);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: [],
        isLoading: false
        //loginModal: false
    },
    reducers: {
        //모달 토글
        // modalTogle(state, action) {
        //     state.loginModal = !state.loginModal;
        // },
    },
    extraReducers: {
        //__insertPost
        [__insertPost.fulfilled]: (state, action) => {

        },
        [__insertPost.rejected]: (state, action) => {

        },
        //__postList
        [__postList.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__postList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts.push(...action.payload);
        },
        [__postList.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        },
    }
});

export const { } = postSlice.actions;
export default postSlice.reducer;