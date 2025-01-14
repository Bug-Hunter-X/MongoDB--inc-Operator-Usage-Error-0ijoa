```javascript
//Correct usage of $inc operator in MongoDB
db.collection.updateOne({"_id":ObjectId("653123456789")},{$inc:{quantity:1}});
```