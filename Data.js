const HotelData=[ 
    { 
       "id":1,
      "hotelName": "Paradise Stay", 
      "city": "Bangalore", 
      "description": "A home to relax at the 'city' peek with all the facilities near you", 
      "amenities": "Different Cuisine Food, Swimming Pool, Self Cooking Station", 
      "phoneNo": 9090909090, 
      "address": "120/1C, Bangalore, Karnataka", 
      "imageUrl": "https://th.bing.com/th/id/OIP.moGqCPzVAd8hHuQojdGQYwHaEo?pid=ImgDet&rs=1", 
      "reviews": [ 
        "Good Accomodation", 
        "Best place to relax with friends and family", 
        "The best place to chill with friends. ", 
        "The best place I ever visited.", 
        "Really a great Experience", 
        "Wow great Experience"  
      ], 
      "UserName": "" 
    }, 
    { 
      "id":2,
      "hotelName": "Hill Palace", 
      "city": "Kochi", 
      "description": "A cool place to relax at Lake side", 
      "amenities": "Homely Food, Sea Food, Children's Park, Boating", 
      "phoneNo": 9191919191, 
      "address": "90/1A, Kochi, Kerala", 
      "imageUrl": "https://th.bing.com/th/id/R.634641743712153605ab4e80f49af772?rik=sHQKFN6nZrHKLA&riu=http%3a%2f%2fi.imgur.com%2f6vx6r9M.jpg&ehk=hMIewH0z8MlrX2%2fpVSXs0qs5%2b%2bCkb4uofOcMf9bCRrg%3d&risl=&pid=ImgRaw&r=0", 
      "reviews": [ 
        "Must visit place. The cuisine available here is so amazing.", 
        "My favorite place to relax on my vacations", 
        "Great Experience", 
        "Nice stay" 
      ], 
      "UserName": "" 
    }, 
    { 
      "id":3,
      "hotelName": "Monsoon Stay", 
      "city": "Chennai", 
      "description": "A luxurious but affordable stay as in your home", 
      "amenities": "24 hr Homely Food, Security, Children's Park", 
      "phoneNo": 9292929292, 
      "address": "100/1A, Chennai, Tamil Nadu", 
      "imageUrl": "https://springfieldoasis.com/wp-content/uploads/2018/03/Bed3-17-1-1024x683.jpeg", 
      "reviews": [ 
        "Must visit place. The cuisine available here is so amazing." 
      ] 
    }, 
    { 
      "id":4,
      "hotelName": "Galaxy Paradise", 
      "city": "Mumbai", 
      "description": "An affordable family stay spot at the 'City' heart", 
      "amenities": "24 hr Homely Food, Swimming Pool, Security", 
      "phoneNo": 9393939393, 
      "address": "190/1B, Mumbai, Maharastra", 
      "imageUrl": "https://image.urlaubspiraten.de/1280/image/upload/v1617883866/Impressions%20and%20Other%20Assets/1_xdpljo.jpg", 
      "reviews": [ 
        "Very Nice Hotel" 
      ] 
    } 
  ]

  const Bookings=[ 
    { 
       
      "startDate": "2023-10-22", 
      "endDate": "2023-10-27", 
      "noOfPersons": 1, 
      "noOfRooms": 1, 
      "typeOfRoom": "AC", 
      "hotelName": "Paradise Stay", 
      "hotelId": 1, 
      "userId": 1 ,
      "id":1,
    }, 
    { 
      "startDate": "2020-09-23", 
      "endDate": "2020-09-24", 
      "noOfPersons": 1, 
      "noOfRooms": 1, 
      "typeOfRoom": "AC", 
      "hotelId": 1, 
      "hotelName": "Paradise Stay", 
      "userId": 1, 
      "id":2,
    },
]
const users=[ 
    { 
       
      "name": "Maria", 
      "address": "Bangalore,Karnataka", 
      "email": "maria@gmail.com", 
      "phoneNo": 1234567890, 
      "password": "maria123456" , 
      "pic": "https://th.bing.com/th/id/R.95c74e73a0802296ef631dd71dfa09d2?rik=eIiF8VmPmhhzXw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Image.png&ehk=YvjAOG2T71oFU41G13CCoak98yJU3f0YK669MQiOROg%3d&risl=&pid=ImgRaw&r=0" , 
      "id":1
      
    }, 
    { 
      "name": "Setna", 
      "address": "Bangalore", 
      "phoneNo": "1234567890", 
      "email": "setna@gmail.com", 
      "password": "Setna@123", 
      "pic": "https://th.bing.com/th/id/R.95c74e73a0802296ef631dd71dfa09d2?rik=eIiF8VmPmhhzXw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Image.png&ehk=YvjAOG2T71oFU41G13CCoak98yJU3f0YK669MQiOROg%3d&risl=&pid=ImgRaw&r=0" ,
      "id":2
      },  
     
  ]

  module.exports={HotelData,Bookings,users}