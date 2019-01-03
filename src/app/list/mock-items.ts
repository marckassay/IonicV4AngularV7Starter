import { Item } from './item';

export const ITEMS: Array<Item> = [
    {
        id: 1,
        title: 'Item 1',
        note: 'This is item #1',
        icon: 'flask'
    },
    {
        id: 2,
        title: 'Item 2',
        note: 'This is item #2',
        icon: 'wifi'
    },
    {
        id: 3,
        title: 'Item 3',
        note: 'This is item #3',
        icon: 'beer'
    }
];

/*     'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build' */
/* for (let i = 1; i < 11; i++) {
    const iconPointer = Math.floor(Math.random() * icons.length);
    this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: icons[iconPointer]
    }); */
