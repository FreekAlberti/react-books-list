import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Books vars
const books = [
  {
    img: "https://getsirv.com/wp-content/uploads/2020/11/book-of-black-cover-closed.png",
    title: "The Gray Book",
    author: "Dr Gray"
  },
  {
    img: "https://cdn.pixabay.com/photo/2014/04/03/10/50/book-311432_640.png",
    title: "The Red Book",
    author: "Dr Red"
  },
  {
    img: "https://www.pngkit.com/png/full/204-2048179_big-blue-book-free-clipart-blue-book-clip.png",
    title: "The Blue Book",
    author: "Dr Blue"
  },
  {
    img: "https://www.clker.com/cliparts/4/f/r/e/K/G/purple-book.svg",
    title: "The Purple Book",
    author: "Dr Purple"
  },
];

function BookList() {
  return (
    <section className="booklist_flex">
        {books.map((book)=>{
          return (
            <Book book = {book}></Book>
          );
        })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="article_book">
      <img src={img} alt="Book image" className="img_book"/>
      <h1 className="title_book">{title.toUpperCase()}</h1>
      <h3 style={{ fontFamily: "Ubuntu, sans-serif"}}>{author}</h3>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));