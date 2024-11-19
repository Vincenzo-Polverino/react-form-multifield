import { useState } from 'react'

import './App.css'

const basePosts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: './images/1.jpg',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: './images/2.jpg',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: './images/3.jpg',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: './images/4.jpg',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: false,
  },
];

function App() {

  const [posts, setPosts] = useState(basePosts)
  const [newPost, setNewPost] = useState('')

  function addPost(e) {
    e.preventDefault()

    setPosts([...posts, newPost])
    setNewPost('')
  }

  function handleDelete(index) {
    const newPosts = posts.filter((post, i) => i !== index)
    setPosts(newPosts)
  }

  return (
    <>
      <div className="container">
        <div><h1>React Blog Form</h1>


          <div className="input-group mb-3">


            <div className='d-flex'>
              <button className="btn" type="button" popovertarget="off-canvas-form">
                Aggiungi
              </button>
            </div>

          </div>

          <div id="off-canvas-form" popover="true">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Aggiungi un nuovo post</h3>

              <button className="btn" type="button" popovertarget="off-canvas-form" popovertargetaction="hide">
                Chiudi
              </button>
            </div>

            <form className='m-3' onSubmit={addPost}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label"><strong>Titolo</strong></label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  id="title"
                  aria-describedby="titlehelper"
                  placeholder="Inserisci il titolo del nuovo post" />
              </div>
            </form>
          </div>



        </div>





        <ul className="list-group">
          {posts.map((post, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between postCard">
              <div>
                <img src={post.image} alt={post.title} />
                <h5>{post.title}</h5>
                <p>{post.content}</p>

              </div>
              <div><button className="btn" onClick={() => handleDelete(index)}>
                <i className="bi bi-trash"> </i>
              </button></div>
            </li>
          ))}
        </ul>



      </div >
    </>
  )
}

export default App
