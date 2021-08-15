
exports.seed = knex => knex('comments')
  .del()
  .then(_ => knex('comments')
    .insert([
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

    ])
  );
