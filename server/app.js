const { Int32 } = require('bson')

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

const dataSchema = mongoose.Schema(
    {"end_year":String,
    "intensity":Number,
    "sector":String,
    "topic":String,
    "insight":String,
    "url":String,
    "region":String,
    "start_year":String,
    "impact":String,
    "added":String,
    "published":String,
    "country":String,
    "relevance":Number,
    "pestle":String,
    "source":String,
    "title":String,
    "likelihood":Number}
)

const DataModel = mongoose.model("data",dataSchema)

app.route("/")
    .get(async (req,res)=>{
        console.log("Sending data to client....")
        const data = await DataModel.find();
        res.status(200).json(data);
    })



const uri="mongodb+srv://adityauday2002:CZu7fO4Spw1vykE6@cluster0.riz3euw.mongodb.net/VisualizeDb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri).then(()=>{
    console.log("Connected to mongodb successfully\nServer started at port 3000")
    app.listen(3000)
})

