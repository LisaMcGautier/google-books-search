import React from "react";

export function Card({ children }) {
    // return <li className="list-group-item">{children}</li>;

    return (
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

                                    <img src={book.volumeInfo.imageLinks.smallThumbnail}

                                        // <img src={book.volumeInfo.imageLinks.thumbnail}
                                        // <img src={book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : "Book cover not available"} 

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

    );
}


export default Card;