import spotify from './../assets/music/spotify.png'
import resso from './../assets/music/resso.jpg'
import netflix from './../assets/video/netflix.png'
import weTV from './../assets/video/weTV.jpg'
import youtube from './../assets/video/youtube.png'

const data = [
  {
    id: 1,
    title: 'Netflix',
    category: 'video',
    img: netflix,
    prices: [
      {
        type: 'Sharing 2 (user)',
        lists: [
          {
            label: '1 hari',
            price: '2k',
          },
          {
            label: '2 hari',
            price: '4k',
          },
          {
            label: '3 hari',
            price: '5k',
          },
          {
            label: '7 hari',
            price: '9k',
          },
          {
            label: '1 bulan',
            price: '17k',
          },
          {
            label: '2 bulan',
            price: '30k',
          },
          {
            label: '3 bulan',
            price: '42k',
          },
        ],
      },
      {
        type: 'Sharing 1 (user)',
        lists: [
          {
            label: '1 bulan',
            price: '25k',
          },
          {
            label: '2 bulan',
            price: '44k',
          },
          {
            label: '3 bulan',
            price: '66k',
          },
        ],
      },
      {
        type: 'Private',
        lists: [
          {
            label: '1 bulan (non Vpn)',
            price: '117k',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Resso',
    category: 'music',
    img: resso,
    prices: [
      {
        type: undefined,
        lists: [
          {
            label: '1 bulan',
            price: '13k',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Spotify',
    category: 'music',
    img: spotify,
    prices: [
      {
        type: 'Famplan',
        lists: [
          {
            label: '1 bulan',
            price: '9k',
          },
          {
            label: '2 bulan',
            price: '14k',
          },
          {
            label: '3 bulan',
            price: '16k',
          },
          {
            label: '4 bulan',
            price: '18k',
          },
        ],
      },
      {
        type: 'Indplan',
        lists: [
          {
            label: '1 bulan',
            price: '11k',
          },
          {
            label: '2 bulan',
            price: '18k',
          },
          {
            label: '3 bulan',
            price: '22k',
          },
          {
            label: '4 bulan',
            price: '26k',
          },
        ],
      },
      {
        type: 'Admin',
        lists: [
          {
            label: '1 bulan',
            price: '22k',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'weTV',
    category: 'video',
    img: weTV,
    prices: [
      {
        type: 'Sharing',
        lists: [
          {
            label: '1 bulan',
            price: '8k',
          },
          {
            label: '1 tahun',
            price: '14k',
          },
        ],
      },
      {
        type: 'Private',
        lists: [
          {
            label: '1 bulan',
            price: '35k',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Youtube',
    category: 'video',
    img: youtube,
    prices: [
      {
        type: 'Indplan',
        lists: [
          {
            label: '1 bulan',
            price: '6k',
          },
          {
            label: '4 bulan',
            price: '10k',
          },
        ],
      },
      {
        type: 'Admin',
        lists: [
          {
            label: '1 bulan',
            price: '12k',
          },
          {
            label: '4 bulan',
            price: '36k',
          },
        ],
      },
    ],
  },
]

export default data
