// build your `Resource` model here
const dbConfig = require("../../data/dbConfig");

function getResources(){
  return dbConfig('resources')
    .select('*')
}
function getResourceById(id){
  return dbConfig('resources')
    .where({resource_id: id})
}
function addResource(resource){
  return dbConfig('resources')
    .insert(resource)
    .then(ids => {
      return getResourceById(ids[0])
    });
}


module.exports = {
  getResources,
  getResourceById,
  addResource
}
