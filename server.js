const app = require ("./src/app");

const mongoose = require('mongoose');
require("dotenv").config()

const PORT = process.env.PORT || 8000
const URL = process.env.DB_URL || `mongodb+srv://Justice:Justice12345@cluster0.emb1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Connect to database
mongoose.connect(URL, { useNewUrlParser: true })
.then(() => console.log('Connected to database.....'))
.catch((err) => console.log('An error occured:', err.message))


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})