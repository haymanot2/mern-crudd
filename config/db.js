// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

module.exports = {
  db: 'mongodb+srv://admin:admin12345@cluster0.9q9vqzo.mongodb.net/crud?retryWrites=true&w=majority'
};