import './App.css';
import { useState } from 'react';
import { Item } from './itemModel';

function App() {
  const [item, setItem] = useState([]);
  const [currTitle, setTitleInput ] = useState('');
  const [currDesc, setDescInput ] = useState('');

  const titleChange = (e) => { setTitleInput(e.currentTarget.value); }
  const descChange = (e) => { setDescInput(e.currentTarget.value); }
  const itemsChange = (e) => { setItem(e); }

  const updateItems = (e) => {
    e.preventDefault();
    addItem(currTitle, currDesc);
    setTitleInput("");
    setDescInput("");
  }

  function removeItem(e) {
    let copy = [...item];
    copy.splice(e, 1);
    itemsChange(copy);
  } 

  function addItem(title, desc) {
    item.push(new Item(title, desc));
    itemsChange(item);
  }

  return (
    <>
      <div class="main-container">
        <div class="todo-list">
          <h2>My List</h2>
          {
            item.length === 0 &&
            <div class="item">
              <span class="no-item">Sorry, there is nothing to do!</span>
            </div>
          }
          {
            item.length >= 1 &&

            item.map((value, index) => {
              return (<div class="item" key={index}>
                <span class="item-title"><b>{value.item_title}</b></span>
                <span class="item-desc">{value.desc}</span>
                <span class="delete" onClick={() => removeItem(index)}><button>X</button></span>
              </div>)
            })
            
          }
        </div>
        <br />
        <div class="add-item">
          <h3>Add a new task</h3>
          <span class="input_label"><b>Title</b></span><input type="text" class="title_input" value={currTitle} onChange={titleChange}/>
          <br />
          <span class="input_label"><b>Description</b></span><input type="text" class="desc_input" value={currDesc} onChange={descChange}/>
          <br />
          <br />
          <span class="add_button" onClick={updateItems}><button>Add Item</button></span>
        </div>
      </div>
      </>
  );
}

export default App;
