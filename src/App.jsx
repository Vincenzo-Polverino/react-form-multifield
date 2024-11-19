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
  const [newPost, setNewPost] = useState({
    title: '',
    image: '',
    content: '',
    tags: '',
    published: false,
  })

  function addPost(e) {
    e.preventDefault()

    setPosts([...posts, newPost])
    setNewPost({
      title: '',
      image: '',
      content: '',
      tags: '',
      published: false,
    })
  }

  function handleDelete(index) {
    const newPosts = posts.filter((post, i) => i !== index)
    setPosts(newPosts)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setNewPost(prevState => ({
      ...prevState, [name]: type === 'checkbox' ? checked : value
    }))
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
                  className="form-control"
                  name="title"
                  id="title"
                  aria-describedby="titlehelper"
                  placeholder="Inserisci il titolo del nuovo post"
                  value={newPost.title}
                  onChange={handleChange} />

              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label"><strong>Immagine</strong></label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  id="image"
                  aria-describedby="imagehelper"
                  placeholder="./images/image.jpg"
                  value={newPost.image}
                  onChange={handleChange} />
              </div>

              <div class="mb-3">
                <label htmlFor="" class="form-label">Tags</label>
                <select
                  class="form-select form-select-lg"
                  name="tags"
                  id="tags"
                  placeholder="Inserisci i tag del nuovo post"
                >
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="php">PHP</option>
                  <option value="js">JS</option>
                  value={newPost.tags}
                  onChange={handleChange}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="content" className="form-label"><strong>Contenuto</strong></label>
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows="5"
                  placeholder='Inserisci il contenuto del nuovo post'
                  value={newPost.content}
                  onChange={handleChange} />
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="published"><strong>Pubblicato</strong> </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="published"
                  id="published"
                  value={newPost.published}
                  onChange={handleChange} />
              </div>

              <button
                type="submit"
                className="btn"
              >
                Invia
              </button>


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