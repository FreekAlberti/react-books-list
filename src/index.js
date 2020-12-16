import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Books vars
const books = [
  {
    id: 1,
    img: "https://getsirv.com/wp-content/uploads/2020/11/book-of-black-cover-closed.png",
    title: "The Gray Book",
    author: "Dr Gray",
    pages: 123456
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2014/04/03/10/50/book-311432_640.png",
    title: "The Red Book",
    author: "Dr Red",
    pages: 12345
  },
  {
    id: 3,
    img: "https://www.pngkit.com/png/full/204-2048179_big-blue-book-free-clipart-blue-book-clip.png",
    title: "The Blue Book",
    author: "Dr Blue",
    pages: 1234
  },
  {
    id: 4,
    img: "https://www.clker.com/cliparts/4/f/r/e/K/G/purple-book.svg",
    title: "The Purple Book",
    author: "Dr Purple",
    pages: 123
  },
];

function BookList() {
  return (
    <section className="booklist_flex">
        {books.map((book)=>{
          return (
            <Book key = {book.id} {...book}></Book>
          );
        })}
    </section>
  );
}

const Book = ({ img, title, author, pages }) => {
  const clickHandler = (print) => {
    alert("Number of pages: " + print);
  }
  return (
    <article className="article_book" onMouseOver={() => {console.log(author)}}>
      <img src={img} alt="Book image" className="img_book"/>
      <h1 className="title_book">{title.toUpperCase()}</h1>
      <h3 style={{ fontFamily: "Ubuntu, sans-serif"}}>{author}</h3>
      <button type="button" onClick={() => clickHandler(pages)}>Click me</button>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));