
exports.seed = knex => knex('posts')
  .del()
  .then(_ => knex('posts')
    .insert([
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
    ])
  );
