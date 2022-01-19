const mongoose = require('mongoose');
const db_url='mongodb+srv://cheick:3AXse281qibWcFVL@cluster0.f51yr.mongodb.net/vhome?retryWrites=true&w=majority';
mongoose.connect(db_url,{UseNewUrlParser: true, useUnifiedTopology: true});