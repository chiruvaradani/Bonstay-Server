const http = require("http");
const express = require("express");
const cors = require("cors")
const app = express()
const DBdata = require('./Data')
const router = express.Router();
const bodyparser = require('body-parser');

app.use(cors())
app.use(express.json())
app.use('/', router)

const hotelData = DBdata.HotelData 
const userData = DBdata.users
let BookingData = DBdata.Bookings

//Get all DB
router.get('/', (req, res) => {
  res.send(DBdata);

});

//Getting all Hotels
router.get('/hotels', (req, res) => {
  res.send(hotelData);
});
router.get('/bookings', (req, res) => {
  res.send(BookingData);
});
router.get('/user', (req, res) => {
  res.send(userData);
});

//Getting Particular Hotel on id
router.get('/hotels/:id', (req, res) => {
  const data = hotelData.filter((res) => res.id === Number(req.params.id))
  res.send(data);
});


//Adding the Reviews
router.post('/hotels/:id', (req, res) => {
  const data = hotelData.filter((res) => res.id === Number(req.params.id))
  
  console.log(req.body);
  if (data) {
    const review = data[0].reviews
    const add = review.push(req.body.review)
    console.log(add);
  }
  res.send(data)
});

//Booking the Hotel
router.post('/NewBookings', (req, res) => {
  console.log(req.body);
  let body = ({ ...req.body, id: BookingData.length + 1 })
  console.log(body);
  const Bookings = BookingData.push(body)
  res.json(body)
  console.log(Bookings);
})

//Register a user
router.post('/Newuser', (req, res) => {
  console.log(req.body);
  console.log(userData.length);
  let body = ({ ...req.body, id: userData.length + 1 })
  console.log(body);
  const Bookings = userData.push(body)
  if (Bookings) {
    res.json(body)
  } 
})


//deleting Bookings
router.delete('/delete/booking',(req,res)=>{
  const data = BookingData.filter((user)=>user.id!==Number(req.query.id))
  console.log(data);
  res.send(data[0])
  console.log(BookingData=data);
})

//getting single Bookings
router.get('/View/booking',(req,res)=>{
  const data = BookingData.filter((user)=>user.id===Number(req.query.id))
  res.send(data[0])
})


//update Bookings
router.put('/update/booking',(req,res)=>{
  const email=req.query.id
  console.log(email);
  const data = BookingData.filter((user)=>user.id===Number(req.query.id))
  console.log(data[0]);
  data[0].startDate=req.body.startDate
  data[0].endDate=req.body.endDate
  console.log(data[0]);
  res.send(data[0])
})

//getting the booking of particular User
router.get('/bookings/user',(req,res)=>{
 
  console.log(req.query.id);
  let data =BookingData.filter((user)=>user.userId === Number(req.query.id))
  console.log(data);
  res.json(data)
})









app.listen(3000, () => {
  console.log("http://localhost:" + 3000);
})