

//CRUD
//Creating----------> 
step1--> use Assignment 
step2--> db--> Assignment
step3--> db.createCollection("USER")
db.USER.insert({first_name: "Dwight", "last_name": "Merriman","email":"R@123","gender":"male","ip_address":"192.168","age":"33"}})
db.USER.insertMany([{first_name: "Dwight", "last_name": "Merriman","email":"R@123","gender":"male","ip_address":"192.168","age":"33"},{FirstName:"Kevin Ryan ", LastName:"Kevin Ryan "}])


db.USER.find().pretty()
db.USER.findOne().pretty()
db.USER.remove({"_id":ObjectId("622db05da330a9539e4c348c")})
db.USER.remove({first_name: "Dwight", "last_name": "Merriman","email":"R@123","gender":"male","ip_address":"192.168","age":"33"})
db.dropDatabase()

//reading
//