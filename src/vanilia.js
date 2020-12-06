const content = [
    {   
        name: 'vdrug_bah', 
        type_news: 'memes', 
        format: 'img/Rectangle 1.png', 
        image: 'https://sun9-3.userapi.com/impg/nHQ5MflyRDlYqaxIRJgl1Qeo_avFISz9tEMYdQ/DoZik_9UJqo.jpg?size=724x633&quality=96&proxy=1&sign=6a063ed5359e52abe28bc2743439667c'
    },
    { 
        name: 'ne_verte_raspisaniam_avtobusov', 
        type_news: 'memes',
        format: 'img/Rectangle 2.png',
        image: 'https://sun9-56.userapi.com/impg/Q-tKypXEJenOwO_j_tZTtLHQ7JgoCmzd-fPqPw/Ux-yIsgnXyE.jpg?size=991x786&quality=96&proxy=1&sign=3f035377aeaaca794cec08de1f4dd556'
    },
    {
        name: 'new',
        type_news: 'memes',
        format: 'img/Rectangle 1.png',
        image: 'https://sun9-53.userapi.com/impg/fvPqUF3d8Wxkhis48ohLAHN-WONWPnOAOQ0cRQ/D9cOMBW9djI.jpg?size=1144x1647&quality=96&proxy=1&sign=f44b07d03b03e746d3cee8c9d2256469'
    }
    
]

function createMessage(message) {
    return `
        <span class="chat__dialog-message">
            <img class="user-image"
                src="${message.format}" 
                alt="${message.type_news}">
            <span class="chat__dialog-message-fill">                
                <img class="message-image"
                    src="${message.image}"
                    alt="${message.name}">                
            </span>              
        </span>
    `
}

const templates = content.map(message => createMessage(message))
const html = templates.join(' ')

document.querySelector('.chat__dialog-messages').innerHTML = html;