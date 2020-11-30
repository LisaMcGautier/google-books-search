import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Hero from "../components/Hero";
import Results from "../components/Results";
import Footer from "../components/Footer";
import API from "../utils/API";

// import { Link, useParams } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";

function Detail(props) {
  // const [book, setBook] = useState({})

  const [books, setBooks] = useState([])

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const { id } = useParams()
  // useEffect(() => {
  //   API.getBook(id)
  //     .then(res => setBook(res.data))
  //     .catch(err => console.log(err));
  // }, [])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
        //console.log(res.data)
      )
      .catch(err => console.log(err));
  };



  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    console.log(id)
    // API.deleteBook(id)
    //   .then(res => loadBooks())
    //   .catch(err => console.log(err));
  }

  function viewBookPage(index) {
    //console.log(index)
    window.open(books[index].link, "_blank");
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Hero>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Hero>
        </Col>

        <Col size="md-12">
          <Results>
            <h1>Saved Books</h1>
            <Row>
              <Col size="md-12">

                {books ? books.map((book, index) => {
                  return (
                    <div className="card m-3 p-3" key={book.googleID}>
                      {/* <div className="card m-3 p-3" key={book.volumeInfo.title}> */}

                      <Row>
                        <Col size="md-6">
                          <h4 className="card-title">{book.title}</h4>
                          <h6 className="card-title">{book.subtitle ? book.subtitle : ""}</h6>
                          <h5 className="card-title">{book.authors ? book.authors.join(", ") : ""}</h5>
                        </Col>

                        <Col size="md-6">
                          {/* <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success shadow m-3">Save</button> */}
                          <button onClick={() => deleteBook(book.googleID)} style={{ float: "right", marginBottom: 10 }} className="btn btn-danger shadow m-3">Delete</button>
                          <button onClick={() => viewBookPage(index)} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">View</button>
                        </Col>
                      </Row>

                      <div className="row no-gutters">

                        <div className="col-md-1 m-3">
                          <img src={book.image}
                            className="card-img" alt="book cover" />
                        </div>

                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">{book.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>)
                }) : <h3>No Results to Display</h3>}

              </Col>
            </Row>

          </Results>

        </Col>
      </Row>

      <Footer />
    </Container>
  );
}


export default Detail;
