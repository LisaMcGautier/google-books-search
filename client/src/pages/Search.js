import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import SearchArea from "../components/SearchArea";
import Results from "../components/Results";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";


function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(formObject.search);

    let query = formObject.search;
    API.searchGoogle(query)
      .then(response => {
        // console.log(response)
        setBooks(response.data.items)

      })

  };

  function saveThisBook(book) {

    console.log(book);

    console.log(book.id);
    console.log(book.volumeInfo.title);
    console.log(book.volumeInfo.subtitle);
    console.log(book.volumeInfo.authors);
    console.log(book.volumeInfo.description);
    console.log(book.volumeInfo.imageLinks.smallThumbnail);
    console.log(book.volumeInfo.infoLink);

    API.saveBook({
      googleID: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink
    })

      .then(console.log(book.volumeInfo.title + " saved"))
      .catch(err => console.log(err));

  }

  function viewBookPage(index) {
    window.open(books[index].volumeInfo.infoLink, "_blank");
  }


  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Hero>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Hero>

          <SearchArea> Book Search
            <form>
              <Input
                onChange={handleInputChange}
                name="search"
                placeholder="Type the title of a book to search"
              />

              <FormBtn
                disabled={!formObject.search}
                onClick={handleFormSubmit}              
              >
                Search
              </FormBtn>

            </form>
          </SearchArea>
        </Col>

        <Col size="md-12">
          <Results>
            <h1>Results</h1>

            <Row>
              <Col size="md-12">
                
                {books ? books.map((book, index) => {
                  return (
                    <div className="card m-3 p-3" key={book.id}>
                      {/* <div className="card m-3 p-3" key={book.volumeInfo.title}> */}
                      <Row>
                        <Col size="md-6">
                          
                          <h4 className="card-title">{book.volumeInfo.title}</h4>
                          <h6 className="card-title">{book.volumeInfo.subtitle ? book.volumeInfo.subtitle : ""}</h6>
                          <h5 className="card-title">{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""}</h5>
                        </Col>

                        <Col size="md-6">
                          <button onClick={() => viewBookPage(index)} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">View</button>
                          <button onClick={() => saveThisBook(book)} style={{ float: "right", marginBottom: 10 }} className="btn btn-success shadow m-3">Save</button>
                        </Col>
                      </Row>
                      
                      <div className="row no-gutters">
                        <div className="col-md-1 m-3">                          

                          {/* <img src={book.volumeInfo.imageLinks.smallThumbnail} */}
                            {/* <img src={book.volumeInfo.imageLinks.thumbnail} */}

                            <img src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUgR2D14HmBubZQcXXYJ8J3_wJ7qp-fIt7A&usqp=CAU"} 
                            className="card-img" alt="book cover" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">

                            <p className="card-text">{book.volumeInfo.description}</p>

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


export default Books;
