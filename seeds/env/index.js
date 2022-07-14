require('dotenv').config();
const { hashSync } = require('bcrypt');

module.exports = {
    production: {
        posts: [
            {
                "id": 2,
                "title": "Utility of the Platform",
                "text": "I have never been good at keeping journals. Obviously. The last post I made on here was last year. More than 6 months ago. \n\nWhat I am good at, though, is writing creatively. I can draw only practical things, like letters and images that I can outline easily. Words, on the other hand, are what I am gifted with. I have talked to many people about this - and most people who are not gifted with one are gifted with the other.\n\nI have given thought to transforming this blog into a writing platform for myself. Utilizing this platform that I have created for a purpose, potentially marketing myself into the arena of having my work noticed.\n\nI am writing four very different stories currently, so one of them may end up being on this website. \n\nIf anybody stumbles across this, feel free to reach out to me using any of the buttons underneath \"Get in Touch\" below - and thank you to those who do. ",
                "date": "1646797818113",
                "name": "Will Umstead",
                "edited": null,
                "category": 'general',
            },
            {
                "id": 1,
                "title": "Language and Programming",
                "text": "There are times that I think creative writing and writing code exist on the same plane. You can get very detailed and lost in your work, but most people will only see it for its face value. They both take proper planning to truly be successful, but if you get too carried away, it seems to be a waste of time and effort. There are much worse things to be wasting time on, mind you, but why waste time at all? I know I waste time because I think I enjoy doing whatever it was that wasted the time in the first place.\n\nConclusion? Find something that you enjoy doing and waste your time on it. 😂 I'm kidding, but there may be some logic there. I'm currently on the journey of combining my skills and interests to create a form of income.\n\nMy current goal is to find a skill that I can replicate with minimal effort to collect an income on. I enjoy language and programming and I am skilled at both, so why not try to make some money off of them?\n\nUntil next time!",
                "date": "1628405713675",
                "name": "Will Umstead",
                "edited": "1646797920517",
                "category": 'general',
            }
        ],
        auth: [
            {
                id: 1,
                name: 'Will Umstead',
                proof: hashSync(process.env.PW, 10)
            }
        ],
        comments: [ {
            id: 1,
            name: '',
            content: '',
            date: Date.now().toString(),
            post_id: 1
        } ]
    },
    development: {
        posts: [
            {
                "id": 2,
                "title": "Utility of the Platform",
                "text": "I have never been good at keeping journals. Obviously. The last post I made on here was last year. More than 6 months ago. \n\nWhat I am good at, though, is writing creatively. I can draw only practical things, like letters and images that I can outline easily. Words, on the other hand, are what I am gifted with. I have talked to many people about this - and most people who are not gifted with one are gifted with the other.\n\nI have given thought to transforming this blog into a writing platform for myself. Utilizing this platform that I have created for a purpose, potentially marketing myself into the arena of having my work noticed.\n\nI am writing four very different stories currently, so one of them may end up being on this website. \n\nIf anybody stumbles across this, feel free to reach out to me using any of the buttons underneath \"Get in Touch\" below - and thank you to those who do. ",
                "date": "1646797818113",
                "name": "Will Umstead",
                "edited": null,
                "category": 'general',
            },
            {
                "id": 1,
                "title": "Language and Programming",
                "text": "There are times that I think creative writing and writing code exist on the same plane. You can get very detailed and lost in your work, but most people will only see it for its face value. They both take proper planning to truly be successful, but if you get too carried away, it seems to be a waste of time and effort. There are much worse things to be wasting time on, mind you, but why waste time at all? I know I waste time because I think I enjoy doing whatever it was that wasted the time in the first place.\n\nConclusion? Find something that you enjoy doing and waste your time on it. 😂 I'm kidding, but there may be some logic there. I'm currently on the journey of combining my skills and interests to create a form of income.\n\nMy current goal is to find a skill that I can replicate with minimal effort to collect an income on. I enjoy language and programming and I am skilled at both, so why not try to make some money off of them?\n\nUntil next time!",
                "date": "1628405713675",
                "name": "Will Umstead",
                "edited": "1646797920517",
                "category": 'general',
            }
        ],
        auth: [
            {
                id: 1,
                name: 'Will Umstead',
                proof: hashSync(process.env.PW, 10)
            }
        ],
        comments: [
            {
                id: 1,
                name: 'John Doe',
                content: `Great post, Will! I love it!
        
        
        Keep up the good work!`,
                date: Date.now().toString(),
                post_id: 1
            },
            {
                id: 2,
                name: 'John Doe',
                content: `This is a second comment.`,
                date: Date.now().toString(),
                post_id: 1
            },
            {
                id: 3,
                name: 'John Doer',
                content: `This is three comment.`,
                date: Date.now().toString(),
                post_id: 2
            }

        ]
    }
};