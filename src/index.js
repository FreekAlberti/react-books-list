import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Books vars
const firstBook = {
  link_img: "https://getsirv.com/wp-content/uploads/2020/11/book-of-black-cover-closed.png",
  title: "The Gray Book",
  author: "Dr Gray"
}

const secondBook = {
  link_img: "https://cdn.pixabay.com/photo/2014/04/03/10/50/book-311432_640.png",
  title: "The Red Book",
  author: "Dr Red"
}

const thirdBook = {
  link_img: "https://www.pngkit.com/png/full/204-2048179_big-blue-book-free-clipart-blue-book-clip.png",
  title: "The Blue Book",
  author: "Dr Blue"
}

const fourthBook = {
  link_img: "https://www.clker.com/cliparts/4/f/r/e/K/G/purple-book.svg",
  title: "The Purple Book",
  author: "Dr Purple"
}

function BookList() {
  return (
    <section>
      <h1>Books:</h1>
      <div className="booklist_flex">
        <Book 
        link_img = {firstBook.link_img}
        title = {firstBook.title}
        author = {firstBook.author}
        />
        <Book 
        link_img = {secondBook.link_img}
        title = {secondBook.title}
        author = {secondBook.author}
        />
        <Book 
        link_img = {thirdBook.link_img}
        title = {thirdBook.title}
        author = {thirdBook.author}
        />
        <Book 
        link_img = {fourthBook.link_img}
        title = {fourthBook.title}
        author = {fourthBook.author}
        />
      </div>
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="article_book">
      <img src={props.link_img} alt="Book image" className="img_book"/>
      <h1 className="title_book">{props.title.toUpperCase()}</h1>
      <h3 style={{ fontFamily: "Ubuntu, sans-serif"}}>{props.author}</h3>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));