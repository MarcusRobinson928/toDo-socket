$(document).ready(function() {
    
const socket = io();

getTodos()

function getTodos() {
    $('#todoList').append('')
    $.get('/todo', function(data) {
        data.forEach( element => {
            $('#todoList').append(`<li>${element.todo}</li>
          <div id="icon"><button id="circle" class="far fa-circle"></button></div>`);
        })
      });
  }

$('#todo').keydown(function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        todo = $('#todo').val();
        if(todo === ''){
            alert('Must Enter A ToDo')
        } else {
        socket.emit('new-todo', {todo: todo})
        $('#todo').val('')
        }
    }
})


socket.on('emit-todo', function(todos){
                $.ajax({url:'/todo', method:'POST', data: todos})
                .then($('#todoList').empty());
                getTodos()
})

const complete = function(){
    $('button').remove('#circle')
    $('#icon').append(`<button id="remove" class="far fa-times-circle"></button>`)
    $('li').toggleClass('complete')
} 

$(document).on("click", "#circle", complete);
$(document).on("click", "#remove", message);
// $(document).on("click", ".delete", remove);

function remove() {
    $.ajax({
      method: "DELETE", url: "/todo/:id" 
    }).then($('.deleteMessage').slideUp(),
    $('#todoList').empty(),
    getTodos())
  }


$('i').ready(function() {
    $('#complete').click(function() {
        message();
    });
    $('.cancel').click(function(){
        hide();
      });
      $('.delete').click(function(){
        remove();
      });
});

function message() {
    $('.deleteMessage').slideDown();
}
function hide() {
    $('.deleteMessage').slideUp();
}
   
var d = new Date();
var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
document.getElementById('day').innerHTML = days[d.getDay()]
document.getElementById('date').innerHTML = months[d.getMonth()] + '  ' + d.getDate() + `<br>` + d.getFullYear();
});