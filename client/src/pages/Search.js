import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Hero from "../components/Hero";
// import Jumbotron from "../components/Jumbotron";
import SearchArea from "../components/SearchArea";
import Results from "../components/Results";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

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

        // // console.log(response.data)
        // console.log(response.data.items)
        // //console.log(response.data.items[0])
        // // LOGS Google Books :ID
        // console.log(response.data.items[0].id)
        // //console.log(response.data.items[0].volumeInfo)
        // console.log(response.data.items[0].volumeInfo.title)
        // console.log(response.data.items[0].volumeInfo.subtitle)
        // console.log(response.data.items[0].volumeInfo.authors)
        // console.log(response.data.items[0].volumeInfo.description)
        // console.log(response.data.items[0].volumeInfo.imageLinks.smallThumbnail)
        // console.log(response.data.items[0].volumeInfo.infoLink)
      })


    // if (formObject.title) {
    //
    // if (response.data) {  ?????????????
    //
    //   API.saveBook({
    //     title: response.data.items[i].volumeInfo.title,
    //     subtitle: response.data.items[i].volumeInfo.subtitle,
    //     authors: response.data.items[i].volumeInfo.authors,
    //     description: response.data.items[i].volumeInfo.description,
    //     image: response.data.items[i].volumeInfo.imageLinks.smallThumbnail,
    //     link: response.data.items[i].volumeInfo.infoLink
    //   })
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }


    // if (formObject.title && formObject.author) {
    //   API.saveBook({
    //     title: formObject.title,
    //     author: formObject.author,
    //     synopsis: formObject.synopsis
    //   })
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }

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



    // console.log(books[index].id);
    // console.log(books[index].volumeInfo.title);
    // console.log(books[index].volumeInfo.subtitle);
    // console.log(books[index].volumeInfo.authors);
    // console.log(books[index].volumeInfo.description);
    // console.log(books[index].volumeInfo.imageLinks.smallThumbnail);
    // console.log(books[index].volumeInfo.infoLink);

    // console.log(bookData.id);
    // console.log(bookData.volumeInfo.title);
    // console.log(bookData.volumeInfo.subtitle);
    // console.log(bookData.volumeInfo.authors);
    // console.log(bookData.volumeInfo.description);
    // console.log(bookData.volumeInfo.imageLinks.smallThumbnail);
    // console.log(bookData.volumeInfo.infoLink);

    // console.log(books.id);
    // console.log(books.volumeInfo.title);
    // console.log(books.volumeInfo.subtitle);
    // console.log(books.volumeInfo.authors);
    // console.log(books.volumeInfo.description);
    // console.log(books.volumeInfo.imageLinks.smallThumbnail);
    // console.log(books.volumeInfo.infoLink);

    // API.saveBook({
    //   googleID: books[index].id,
    //   title: books[index].volumeInfo.title,
    //   subtitle: books[index].volumeInfo.subtitle,
    //   authors: books[index].volumeInfo.authors,
    //   description: books[index].volumeInfo.description,
    //   image: books[index].volumeInfo.imageLinks.smallThumbnail,
    //   link: books[index].volumeInfo.infoLink
    // })

    // API.saveBook({
    //   googleID : bookData.id,
    //   title: bookData.title,
    //   subtitle: bookData.subtitle,
    //   authors: bookData.authors,
    //   description: bookData.description,
    //   image: bookData.image,
    //   link: bookData.link
    // })

    API.saveBook({
      googleID : book.id,
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
      description: book.description,
      image: book.image,
      link: book.link
    })

    

    .then(console.log(book.title + " saved"))
    .catch(err => console.log(err));
    

  }

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])


  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };



  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
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

              {/* <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}

              <FormBtn
                disabled={!formObject.search}
                onClick={handleFormSubmit}
              //onSubmit={handleFormSubmit}
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
                {/* <Col size="md-10 md-offset-1"> */}

                {books ? books.map((book, index) => {
                  return (
                    <div className="card m-3 p-3" key={book.id}>
                      {/* <div className="card m-3 p-3" key={book.volumeInfo.title}> */}
                      <Row>
                        <Col size="md-6">
                          {/* <h5 className="card-title">Card title</h5> */}
                          <h4 className="card-title">{book.volumeInfo.title}</h4>
                          <h6 className="card-title">{book.volumeInfo.subtitle ? book.volumeInfo.subtitle : ""}</h6>
                          <h5 className="card-title">{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""}</h5>
                        </Col>

                        <Col size="md-6">
                          <button onClick={() => viewBookPage(index)} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">View</button>
                          <button onClick={() => saveThisBook(book)} style={{ float: "right", marginBottom: 10 }} className="btn btn-success shadow m-3">Save</button>
                        </Col>
                      </Row>

                      {/* <div className="card mb-3" style={{ maxWidth: "540px" }}> */}
                      <div className="row no-gutters">
                        <div className="col-md-1 m-3">
                          {/* <div className="col-md-1"> */}
                          
                          <img src={book.volumeInfo.imageLinks.smallThumbnail}

                          // <img src={book.volumeInfo.imageLinks.thumbnail}
                            // <img src={book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : "Book cover not available"} 

                            className="card-img" alt="book cover" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">

                            {/* <h5 className="card-title">Card title</h5> */}
                            {/* <button className="btn btn-warning shadow m-3">View</button>
                        <button className="btn btn-primary shadow m-3">Save</button> */}

                            {/* <button style={{ float: "right", marginBottom: 10 }} className="btn btn-warning shadow m-3">View</button>
                        <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">Save</button> */}

                            <p className="card-text">{book.volumeInfo.description}</p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                          </div>
                        </div>
                      </div>
                    </div>)
                }) : <h3>No Results to Display</h3>}



                {/* <article>
                  <h1>Synopsis</h1>
                  <p>
                    {book.synopsis}
                Contents here
              </p>
                </article> */}

              </Col>
            </Row>
          </Results>

          {/* {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )} */}
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}


export default Books;
