import fastify from 'fastify';
import fs from 'fs';
const server = fastify();
var deleteall = {
    todos: []
};
/*  Append string to file instead of overwriting it.
fs.readFile('todos.json', 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
  } else {
  obj = JSON.parse(data); //now it an object
  obj.table.push({id: 2, square:3}); //add some data
  json = JSON.stringify(obj); //convert it back to json
  fs.writeFile('todos.json', json, 'utf8', callback); // write it back
}});
*/
server.get('/', async (request, reply) => {
    return 'Hey, available endpoints: /getall, /deleteall, /edit, /add, /delete\n';
});
// Get all ToDos endpoint, this is the main endpoint, it'll get more requests than other endpoints.
server.get('/getall', async (request, reply) => {
    let allTodos = JSON.parse(fs.readFileSync('todos.json', 'utf8'));
    return allTodos.todos.join(", ");
});
server.get('/deleteall', async (request, reply) => {
    var json = JSON.stringify(deleteall);
    fs.writeFile('todos.json', json, 'utf8', (err) => console.log(err));
    return 'File overwritten.';
});
server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
function callback(arg0, json, arg2, callback) {
    throw new Error('Function not implemented.');
}
