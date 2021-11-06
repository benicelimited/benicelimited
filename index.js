const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


const startSingleTask = async (task) => {
    /*start singular task using using a unique id for each task*/
    return
}
const startAllTasks = async (tasks) => {
    /*start all task*/
}
const stopSingleTask = async (task) => {
    /*Stop single task based on id*/
}
const stopAllTasks = async (tasks) => {
    /*stop all tasks*/
}
const deleteTask = async (task) => {
    /*delete task*/
}
const deleteAllTasks = async (tasks) => {
    /*delete all tasks*/
}


//Test site
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    //Single task
    socket.on('startTask', async props => {
        switch (props) {
            case 'Consortium':
                io.emit('confirm', "Starting task")
                await startSingleTask(props)
                .then(response => io.emit('status', response))
                .catch(err => io.emit('error', err))

            case 'Kickz':
                io.emit('confirm', "Starting task")
                await startSingleTask(props)
                .then(response => io.emit('status', response))
                .catch(err => io.emit('error', err))

            case 'Nigramercato':
                io.emit('confirm', "Starting task")
                await startSingleTask(props)
                .then(response => io.emit('status', response))
                .catch(err => io.emit('error', err))
            case 'Shinzo':
                io.emit('confirm', "Starting task")
                await startSingleTask(props)
                .then(response => io.emit('status', response))
                .catch(err => io.emit('error', err))


        }
    })
    socket.on('startAllTasks', async props => {
        switch (props) {
            case 'Consortium':
                io.emit('confirm', "Starting all task")
                await startAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Kickz':
                io.emit('confirm', "Starting all task")
                await startAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))

            case 'Nigramercato':
                io.emit('confirm', "Starting all task")
                await startAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Shinzo':
                io.emit('confirm', "Starting all task")
                await startTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))


        }
    })
    socket.on('stopTask', async props => {
        switch (props) {
            case 'Consortium':
                io.emit('confirm', "Stopping task")
                await stopSingleTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Kickz':
                io.emit('confirm', "Stopping task")
                await stopSingleTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))

            case 'Nigramercato':
                io.emit('confirm', "Stopping task")
                await stopSingleTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Shinzo':
                io.emit('confirm', "Stopping task")
                await stopSingleTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))


        }
    })
    socket.on('stopAllTasks', async props => {
        switch (props) {
            case 'Consortium':
                io.emit('confirm', "Stopping All Tasks")
                await stopAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Kickz':
                io.emit('confirm', "Stopping All Tasks")
                await stopAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))

            case 'Nigramercato':
                io.emit('confirm', "Stopping All Tasks")
                await stopAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Shinzo':
                io.emit('confirm', "Stopping All Tasks")
                await stopAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))


        }
    })
    socket.on('deleteTask', async props => {
        switch (props) {
            case 'Consortium':
                io.emit('confirm', "Deleting Task")
                await deleteTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Kickz':
                io.emit('confirm', "Deleting Task")
                await deleteTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))

            case 'Nigramercato':
                io.emit('confirm', "Deleting Task")
                await deleteTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))

            case 'Shinzo':
                io.emit('confirm', "Deleting Task")
                await deleteTask(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))


        }
    })

    socket.on('deleteAllTask', async props => {
        switch (props) {
            case 'Consortium':
                io.emit('confirm', "Deleting All Task")
                await deleteAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
            case 'Kickz':
                io.emit('confirm', "Deleting All Task")
                await deleteAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))

            case 'Nigramercato':
                io.emit('confirm', "Deleting All Task")
                await deleteAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))
                    
            case 'Shinzo':
                io.emit('confirm', "Deleting All Task")
                await deleteAllTasks(props)
                    .then(response => io.emit('status', response))
                    .catch(err => io.emit('error', err))


        }
    })

});




server.listen(3001, () => {
    console.log('listening on *:3001');
});