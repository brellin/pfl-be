require('dotenv').config();
const { hashSync } = require('bcrypt');

module.exports = {
    production: {
        posts: [
            {
                id: 1,
                title: 'Language and Programming',
                text: `There are times that I think creative writing and writing code exist on the same plane. You can get very detailed and lost in your work, but most people will only see it for its face value. They both take proper planning to truly be successful, but if you get too carried away, it seems to be a waste of time and effort. There are much worse things to be wasting time on, mind you, but why waste time at all? I know I waste time because I think I enjoy doing whatever it was that wasted the time in the first place.
Conclusion? Find something that you enjoy doing and waste your time on it. 😂 I'm kidding, but there may be some logic there. I'm currently on the journey of combining my skills and interests to create a form of income.
My current goal is to find a skill that I can replicate with minimal effort to collect an income on. I enjoy language and programming and I am skilled at both, so why not try to make some money off of them?

Until next time`,
                date: '1628405713675',
                name: 'Will Umstead'
            }
        ],
        auth: [
            {
                id: 1,
                name: 'Will Umstead',
                proof: hashSync(process.env.PW, 10)
            }
        ],
        comments: []
    },
    development: {
        posts: [
            {
                id: 1,
                title: 'Language and Programming',
                text: `There are times that I think creative writing and writing code exist on the same plane. You can get very detailed and lost in your work, but most people will only see it for its face value. They both take proper planning to truly be successful, but if you get too carried away, it seems to be a waste of time and effort. There are much worse things to be wasting time on, mind you, but why waste time at all? I know I waste time because I think I enjoy doing whatever it was that wasted the time in the first place.
Conclusion? Find something that you enjoy doing and waste your time on it. 😂 I'm kidding, but there may be some logic there. I'm currently on the journey of combining my skills and interests to create a form of income.
My current goal is to find a skill that I can replicate with minimal effort to collect an income on. I enjoy language and programming and I am skilled at both, so why not try to make some money off of them?

Until next time`,
                date: '1628405713675',
                name: 'Will Umstead'
            },
            {
                id: 2,
                title: 'Test',
                text: `Mr. Test`,
                date: Date.now().toString(),
                name: 'Will Umstead'
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