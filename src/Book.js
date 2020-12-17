import React from 'react'

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

export default Book
