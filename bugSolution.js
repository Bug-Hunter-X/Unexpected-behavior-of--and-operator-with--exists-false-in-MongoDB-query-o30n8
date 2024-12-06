```javascript
const query = { $or: [{ field1: { $exists: true }, field2: { $exists: false } }, {field1:{$exists:true}, field2:{$exists:true}}]};
const result = await collection.find(query).toArray();
```