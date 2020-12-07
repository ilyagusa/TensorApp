const activeChannelItem = document.querySelector('.common__channel-item')

activeChannelItem.addEventListener('click', e => {
    e.target.nextElementSubling.classList.add('active')
})

// document.getElementById('menu-science').onclick = function() {
//     document.getElementById('menu-science').classList.add('active')
//     document.getElementById('menu-political').classList.remove('active')
//     document.getElementById('menu-art').classList.remove('active')
//     document.getElementById('menu-music').classList.remove('active')
// }

// document.getElementById('menu-political').onclick = function() {
//     document.getElementById('menu-science').classList.remove('active')
//     document.getElementById('menu-political').classList.add('active')
//     document.getElementById('menu-art').classList.remove('active')
//     document.getElementById('menu-music').classList.remove('active')
// }

// document.getElementById('menu-art').onclick = function() {
//     document.getElementById('menu-science').classList.remove('active')
//     document.getElementById('menu-political').classList.remove('active')
//     document.getElementById('menu-art').classList.add('active')
//     document.getElementById('menu-music').classList.remove('active')
// }

// document.getElementById('menu-music').onclick = function() {
//     document.getElementById('menu-science').classList.remove('active')
//     document.getElementById('menu-political').classList.remove('active')
//     document.getElementById('menu-art').classList.remove('active')
//     document.getElementById('menu-music').classList.add('active')
// }