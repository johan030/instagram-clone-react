import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'cirilla',
                comment: 'this is amazing'
            },
            {
                user: 'spiderman',
                comment: ' super cool'
            },
        ],
    },

    {
        imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user: USERS[1].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Loki',
                comment: 'bof'
            },
            {
                user: 'Leiah',
                comment: ' before creation comes destruction'
            },
        ],
    },
]