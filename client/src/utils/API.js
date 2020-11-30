import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// console.log("something");

export default {

  // Retrieve books from the Google Books api
  searchGoogle: function (query) {
    // console.log("API " + query);
    return axios.get(BASEURL + query);
  },

  // Gets all books; return all saved books as JSON
  getBooks: function () {
    return axios.get("/api/books");
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },

  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },



  // `*` (get) - Will load your single HTML page in `client/build/index.html`. 
  // Make sure you have this _after_ all other routes are defined.


};
