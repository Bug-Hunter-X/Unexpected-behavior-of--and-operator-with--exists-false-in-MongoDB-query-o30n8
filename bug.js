```javascript
const query = { $and: [{ field1: { $exists: true } }, { field2: { $exists: false } }] }; 
const result = await collection.find(query).toArray();
```