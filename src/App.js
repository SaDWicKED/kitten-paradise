import {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitten: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({kitten: users}));
  }

  changeHandler = (e)=>{
    this.setState({searchField: e.target.value}, ()=>{});
  }

  render() {
    const {kitten, searchField} = this.state;
    const filteredkitten = kitten.filter(kitty =>
      kitty.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Kitty Paradise</h1>
        <SearchBox
          placeholder='search kitty'
          changeHandler={this.changeHandler}
        />
        <CardList kitten={filteredkitten}/>
      </div>
    );
  }
}


export default App;
