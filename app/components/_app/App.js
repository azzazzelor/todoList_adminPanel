import React,{Component} from 'react';
import axios from 'axios';
// import './App.css';
import AdminButton from '../adminButton/AdminButton'
import AddListForm from '../addListForm/AddListForm'
export default class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
        listItems: [],
    };
  }
 addNewList (list){
   const data = JSON.stringify(list);
   console.log(data)
  // https://uxcandy.com/~shapoval/test-task-backend/create
  axios({
    method: 'post',
    url: "https://uxcandy.com/~shapoval/test-task-backend",
    data: list,
    developer: 'aa',
    token: 'beejee',
    dataType: 'jsonp',
  }).then(res=>console.log(res)).catch(e=>console.log(e))


  }

render () {
  return (
    <div className="container">
      <AdminButton/>
      <AddListForm create={this.addNewList.bind(this)}/>
    </div>
  );
}}


// import axios from 'axios';

// import config from '../config';

// axios.defaults.baseURL = config.APIHost;
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

// const instance = axios.create({
//   params: {
//     developer: config.developer,
//   },
// });

// export default instance;
// export default {
//   APIHost: 'https://uxcandy.com/~shapoval/test-task-backend',
//   developer: 'hh',
//   token: 'beejee',
// };