import v1 from "uuid";

const img1 ='https://www.tele2.lv/image/131f05f22901072efc5776b01b78d186/apple-iphone-12-128gb.png'
const img2 ='https://www.tele2.lv/image/bcde5c56c82c59bee5e4bc5c6b15baf9/apple-iphone-12-128gb.png'
const img3 ='https://www.tele2.lv/image/0ae033e7b525db4174ee46219807148b/apple-iphone-12-pro-512gb.png'
const img4 ='https://www.tele2.lv/image/3c1f6895e70585e8559a3fc249f6cf5a/apple-iphone-12-pro-128gb.png'
const img5 ='https://www.tele2.lv/image/a7e8877fa33c19cfe0ad27b51c776076/apple-iphone-12-pro-max-128gb.png'
const img6 ='https://www.tele2.lv/image/c0210423a89e73181d9d9271b875dcb3/apple-iphone-12-pro-max-128gb.png'

export const parrentId1 = 1;
export const parrentId2 = 2;
export const parrentId3 = 3;
export const parrentId4 = 4;
const parrentId5 = 5;
const parrentId6 = 6;
const parrentId7 = 7;
const parrentId8 = 8;
const parrentId9 = 9;
const parrentId10 = 10;

const initialState = [
    {id: parrentId1, title: 'Iphone 12 green', price: 925, img: img1},
    {id: parrentId2, title: 'Iphone 12 black', price: 750, img: img2},
    {id: parrentId3, title: 'Iphone 12 grey', price: 920, img: img3},
    {id: parrentId4, title: 'Iphone 12 white', price: 730, img: img4},
    {id: parrentId5, title: 'Iphone 12 pro-max gold', price: 1500, img: img5},
    {id: parrentId6, title: 'Iphone 12 pro-max white', price: 1150, img: img6},
    {id: parrentId7, title: 'Iphone 12 green', price: 950, img: img1},
    {id: parrentId8, title: 'Iphone 12 black', price: 1200, img: img2},
    {id: parrentId9, title: 'Iphone 12 grey', price: 900, img: img3},
    {id: parrentId10, title: 'Iphone 12 white', price: 850, img: img4}
]


export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


