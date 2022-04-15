import { USERS } from './users'

export const POSTS = [
    {
        imageurl: '',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        porifle_picture: USERS[0].image,
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
        imageurl: '',
        user: USERS[1].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        porifle_picture: USERS[1].image,
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