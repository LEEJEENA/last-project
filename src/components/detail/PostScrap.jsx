import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookmarkStroke, BookmarkFill } from "../../assets/index";
import { useMutation } from "@tanstack/react-query";
import { postApis } from "../../api/api-functions/postApis";

const PostScrap = ({ bookMarkStatus }) => {

  const { url, postId } = useParams();

  // bookMark server state
  const [scrapState, setScrapState] = useState(null);

  useEffect(() => {
    if (bookMarkStatus !== undefined) {
      setScrapState(bookMarkStatus);
    }
  }, [bookMarkStatus])

  const postScrap = useMutation({
    mutationFn: (obj) => {
      return postApis.postScrapAx(obj);
    },
    onSuccess: res => {
      if (res.data.status === 200) {
        setScrapState(!scrapState);
      }
    },
  })

  const scrapHandler = () => {
    postScrap.mutate({ kind: url.split('posts')[0].toString(), postId: Number(postId) });
  };

  return (
    <>
      <div onClick={() => scrapHandler()}>
        {scrapState !== null && scrapState ? <BookmarkFill /> : <BookmarkStroke />}
      </div>
    </>
  );
};

export default PostScrap;