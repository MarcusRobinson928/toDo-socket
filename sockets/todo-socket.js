module.exports = function (io) {
    console.log('running')
    io.on('connection', function(socket) {

        socket.on('new-todo', function(data){
            console.log(data.todo);
            io.emit('emit-todo', data.todo)
        })
    })
}