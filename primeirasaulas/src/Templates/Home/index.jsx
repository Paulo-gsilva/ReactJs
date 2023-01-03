import { useEffect, useState } from "react";

//url = url/objeto request
//options = request init (sempre objeto)
const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const postsFetch = async () => {
      try {
        const postFetch = await fetch(url, options);
        const postJson = await postFetch.json();
        setResult(postJson);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    postsFetch();
  }, [url, options]);

  return [result, loading];
};

function Home() {
  const [result, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "get",
    }
  );

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <h1>Salve</h1>
    </div>
  );
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
