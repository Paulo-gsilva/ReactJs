import './style.css';
import { Component } from 'react';
import LoadPosts from '../../Func/load.posts';
import Posts from '../../Components/Posts';
import Button from '../../Components/Button';
import SearchInput from '../../Components/TextInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await LoadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const { page, postsPerPage, posts, allPosts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  }

  render() { //quando ocorre alguma alteração na página ela é renderizada
    const { posts, searchValue } = this.state;
    const filteredPosts = !!searchValue ?
      posts.filter(post => {
        return post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      })
      : posts;

    return (
      <>
        <div className='search'>
          {!!searchValue && ( //se searchvalue for true (não vazio) mostrará o h1
            <h1>Search Value</h1>
          )}
          <SearchInput
            handleChange={this.handleChange}
            value={searchValue}
          />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Não Existem Posts :(</p>
        )}

        {!searchValue && ( //se searchvalue for false (vazio) ocultará o botão
          <Button onClick={this.loadMorePosts} />
        )}
      </>
    );
  }

}
export default Home;















/*
  state = {
    name: 'Paulo',
    age: 20
  };

  handleH1Click = () => {
    this.setState({ name: 'Guilherme', age: 18 }); //ocorre a alteração do estado
  }

  render() { //quando ocorre alguma alteração na página ela é renderizada
    const { name, age } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={this.handleH1Click}>Nome: {name}, Idade: {age}</h1>
        </header>
      </div>
    );
  }
  */

/*
componentDidMount() { //ATIVADO QUANDO UM COMPONENTE TERMINA DE SER MONTADO
  this.handleTimeOut();
  console.log('mount'); //CONSOLE MOSTRA QUE O DIDMOUNT JÁ FOI CHAMADO, PORÉM CONTINUA ESPERANDO REQUISIÇÕES
}

componentDidUpdate() {
  console.log('update');
}

handleTimeOut = () => {
  const { posts } = this.state;
  posts[0].title = 'Título Alterado';

  setTimeout(() => {
    this.setState({ posts });
  }, 3000)
}*/