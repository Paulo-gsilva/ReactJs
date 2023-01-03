import { useEffect, useRef, useState } from "react";

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

//url = url/objeto request
//options = request init (sempre objeto)
const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchEffect, setFetchEffect] = useState(false);
  const urlRef = useRef(url); //para solucionar o problema do objeto, pode ser usado useRef. Ele irá manter um estado fixo mesmo após rerenderizações
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = url;
      changed = true;
    }

    if (changed) setFetchEffect((fetchLoad) => !fetchLoad);
  }, [url, options]);

  useEffect(() => {
    setLoading(true);
    const postsFetch = async () => {
      try {
        const postFetch = await fetch(urlRef.current, optionsRef.current);
        const postJson = await postFetch.json();
        setResult(postJson);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    postsFetch();
  }, [fetchEffect]); //useRef retira a necessidade de dependência

  return [result, loading];
};

function Home() {
  const [postId, setPostId] = useState("");
  const [result, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
    {
      headers: {
        abc: "1000",
      },
    }
    //ao passar um objeto, ocorrerá várias renderizações devido a falta de "equalidade" entre o objeto antigo e o novo após a rerenderização
  );

  const handlePostId = (id) => {
    setPostId(id);
  };

  if (loading) return <h1>Carregando...</h1>;

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((post) => (
            <div key={post.id} onClick={() => handlePostId(post.id)}>
              <h3>{post.title}</h3>
            </div>
          ))
        ) : (
          <div onClick={() => handlePostId("")}>
            <h3>{result.title}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
// import './style.css';
// import { useState, useEffect, useCallback } from 'react';
// import LoadPosts from '../../Func/load.posts';
// import Posts from '../../Components/Posts';
// import Button from '../../Components/Button';
// import SearchInput from '../../Components/TextInput';

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const [allPosts, setAllPosts] = useState([]);
//   const [page, setPage] = useState(0);
//   const [postsPerPage] = useState(4);
//   const [searchValue, setSearchValue] = useState('');

//   const filteredPosts = !!searchValue ?
//     posts.filter(post => {
//       return post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
//     })
//     : posts;

//   const handleLoadPosts = useCallback(async (page, postsPerPage) => {

//     const postsAndPhotos = await LoadPosts();

//     setPosts(postsAndPhotos.slice(page, postsPerPage));
//     setAllPosts(postsAndPhotos);
//   }, []);

//   useEffect(() => {
//     handleLoadPosts(0, postsPerPage);
//   }, [handleLoadPosts, postsPerPage])

//   const handleChange = (event) => {
//     const { value } = event.target;

//     setSearchValue(value);
//   }

//   const loadMorePosts = () => {
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

//     posts.push(...nextPosts);

//     setPosts(posts);
//     setPage(nextPage);
//   }

//   return (
//     <>
//       <div className='search'>
//         {!!searchValue && ( //se searchvalue for true (não vazio) mostrará o h1
//           <h1>Search Value</h1>
//         )}
//         <SearchInput
//           handleChange={handleChange}
//           value={searchValue}
//         />
//       </div>

//       {filteredPosts.length > 0 && (
//         <Posts posts={filteredPosts} />
//       )}
//       {/*envia um array*/}
//       {filteredPosts.length === 0 && (
//         <p>Não Existem Posts :(</p>
//       )}

//       {!searchValue && ( //se searchvalue for false (vazio) ocultará o botão
//         <Button onClick={loadMorePosts} text={'Load More'} />
//       )}
//     </>
//   );
// }
