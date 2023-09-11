import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import PostList from "../../components/PostList/PostList";
import PostForm from "../../components/PostForm/PostForm";
import PostFilter from "../../components/PostFilter/PostFilter";
import ModalRegular from "../../components/UI/ModalRegular/ModalRegular";
import ButtonRegular from "../../components/UI/ButtonRegular/ButtonRegular";
import Spinner from "../../components/UI/Spinner/Spinner";
import Pagination from "../../components/UI/Pagination/Pagination";
import { usePosts } from "../../hooks/usePosts";
import { useFetch } from "../../hooks/useFetch";
import PostService from "../../API/PostService";
import { getPageCount, getPagesArray } from "../../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modal, setModal] = useState(false);

  const searhedSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetch(async () => {
    const response = await PostService.getData(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={styles.Posts}>
      {isPostLoading && postError ? (
        <Spinner />
      ) : (
        <>
          <ModalRegular visible={modal} setVisible={setModal}>
            <PostForm setNewPost={setPosts} posts={posts} setModal={setModal} />
          </ModalRegular>
          <div className={styles.Posts__wrapper_top}>
            <ButtonRegular type="create" onClick={() => setModal(true)}>
              Create a post
            </ButtonRegular>
            <PostFilter filter={filter} setFilter={setFilter} />
          </div>
          <PostList posts={searhedSortedPosts} removePost={removePost} />
          <Pagination
            pagesArray={pagesArray}
            setPage={setPage}
            page={page}
          ></Pagination>
        </>
      )}
      {postError && <h2 style={{ color: "red" }}>Error - ${postError}</h2>}
    </div>
  );
}

export default Posts;
