import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Hero>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Hero>

          <Search> Book Search
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
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
                disabled={!formObject.title}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>

            </form>
          </Search>

        </Col>



        <Col size="md-12">
          <Results>
            <h1>Results</h1>

            <Row>
              <Col size="md-12">

                {/* <Col size="md-10 md-offset-1"> */}

                <div className="card m-3 p-3">
                  <Row>
                    <Col size="md-6">
                      {/* <h5 className="card-title">Card title</h5> */}
                      <h4 className="card-title">BOOK title</h4>
                      <h6 className="card-title">book subtitle</h6>
                      <h5 className="card-title">Author name(s)</h5>
                    </Col>
                    <Col size="md-6">
                      <button style={{ float: "right", marginBottom: 10 }} className="btn btn-warning shadow m-3">View</button>
                      <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">Save</button>
                    </Col>
                  </Row>

                  {/* <div className="card mb-3" style={{ maxWidth: "540px" }}> */}
                  <div className="row no-gutters">
                    <div className="col-md-1 m-3">
                      {/* <div className="col-md-1"> */}
                      <img src="http://books.google.com/books/content?id=6TyCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" className="card-img" alt="test" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">

                        {/* <h5 className="card-title">Card title</h5> */}
                        {/* <button className="btn btn-warning shadow m-3">View</button>
                        <button className="btn btn-primary shadow m-3">Save</button> */}

                        {/* <button style={{ float: "right", marginBottom: 10 }} className="btn btn-warning shadow m-3">View</button>
                        <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">Save</button> */}

                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>Lorem impsum It beggared all description.  more in sorrow than in anger.  He has eaten me out of house and home.  Let me love him for that; and do you love him because I do. Look, here comes the Duke. The sixth age shifts Into the lean and slipper'd pantaloon, With spectacles on nose and pouch on side, His youthful hose, well sav'd, a world too wide For his shrunk shank; and his big manly voice, Turning again toward childish treble, pipes And whistles in his sound.  But look to it: Find out thy brother wheresoe'er he is; Seek him with candle; bring him dead or living Within this twelvemonth, or turn thou no more To seek a living in our territory.   Sir, I am a true labourer: I earn that I eat, get that I wear; owe no man hate, envy no man's happiness; glad of other men's good, content with my harm; and the greatest of my pride is to see my ewes graze and my lambs suck.</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                      </div>
                    </div>
                  </div>
                </div>

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

          {books.length ? (
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
            )}
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}


export default Books;
