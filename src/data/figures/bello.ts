import type { Figure } from '../types'

export const bello: Figure = {
  slug: 'bello',
  name: 'Ahmadu Bello',
  nameLines: ['Ahmadu', 'Bello'],
  epithet: 'Sardauna of Sokoto',
  born: 1910,
  died: 1966,
  emblemCaption: 'An eight-point knot',
  stats: [
    { label: 'Position', value: 'Premier of the North' },
    { label: 'Lifetime', value: '1910-1966' },
    { label: 'Home town', value: 'Rabah' },
    { label: 'Party', value: 'NPC' },
    { label: 'In office', value: '1954-1966' },
    { label: 'Known for', value: 'Northernisation' },
  ],
  statement:
    'Ahmadu Bello was the first and only Premier of the Northern Region. His party won the 1959 federal election, and he stayed in Kaduna and sent his deputy to Lagos as Prime Minister.',
  character:
    'He was a great-grandson of Sultan Muhammad Bello and a descendant of Usman dan Fodio, who founded the Sokoto Caliphate. He trained as a teacher at Katsina College and taught English before he became a district head at twenty-four. Sardauna is a Sokoto title the Sultan gave him in 1938.',
  map: {
    heading: 'He ran the largest region',
    body: 'The Northern Region covered about three quarters of Nigeria’s land and held more than half its people. It had far fewer schools than the South. Bello governed it from Kaduna for twelve years, and most of what he did was aimed at closing that gap before southerners filled the jobs.',
    region: 'north',
    regionLabel: 'Northern Region, 1960',
    places: [
      { name: 'Rabah', lon: 5.51, lat: 13.12, note: 'Born here on 12 June 1910. His father was the district head, and he took over the post in 1934.', label: 'right' },
      { name: 'Sokoto', lon: 5.24, lat: 13.06, note: 'Seat of the Sultan. He stood for the throne in 1938 and lost to Abubakar III.', label: 'left' },
      { name: 'Katsina', lon: 7.6, lat: 12.99, note: 'He studied at Katsina Training College from 1926 to 1931. Abubakar Tafawa Balewa was a student there too.', label: 'above' },
      { name: 'Gusau', lon: 6.66, lat: 12.17, note: 'The new Sultan posted him here in 1938 as divisional head.', label: 'below' },
      { name: 'Zaria', lon: 7.71, lat: 11.08, note: 'Ahmadu Bello University opened here in October 1962. He was its first Chancellor.', label: 'right' },
      { name: 'Kaduna', lon: 7.44, lat: 10.52, note: 'Capital of the Northern Region. He was killed at his house here on 15 January 1966.', label: 'below' },
    ],
  },
  ideasTitle: ['How he', 'Led'],
  ideasIntro: 'Bello worked through the emirs and the civil service more than through speeches. These are four things he set up or decided.',
  ideas: [
    {
      glyph: 'gate',
      title: 'Northernisation',
      body: 'In the 1950s most trained staff in the Northern civil service were British or southern Nigerian. Bello’s government hired northerners first, then expatriates on contract, and southerners last. It paid for scholarships and an Institute of Administration in Zaria to supply the candidates.',
    },
    {
      glyph: 'steps',
      title: 'A university',
      body: 'The North had no university at independence. Ahmadu Bello University opened in Zaria in 1962 by joining four existing colleges. It is now one of the largest universities in Nigeria.',
    },
    {
      glyph: 'coins',
      title: 'A bank and a development company',
      body: 'His government founded the Bank of the North in 1959 and the Northern Nigeria Development Corporation, which put marketing board money into textile mills and other factories. It also started the New Nigerian newspaper in 1966.',
    },
    {
      glyph: 'bridge',
      title: 'Staying in Kaduna',
      body: 'As leader of the largest party he could have been Prime Minister in 1959. He kept the premiership of the North and sent Abubakar Tafawa Balewa to Lagos. Federal decisions still went past him.',
    },
  ],
  momentsIntro: 'Eight dates from a life that ran from 1910 to 1966.',
  moments: [
    {
      year: '1910',
      title: 'Born in Rabah',
      body: 'Ahmadu is born into the ruling house of Sokoto, seven years after the British conquered the caliphate. He learns the Qur’an at home, then goes to the provincial school in Sokoto and to Katsina College.',
    },
    {
      year: '1938',
      title: 'Loses the sultanate',
      body: 'Sultan Hassan dies and Ahmadu, aged twenty-eight, is one of the candidates to succeed him. The kingmakers choose Abubakar III. The new Sultan makes him Sardauna and sends him to Gusau.',
    },
    {
      year: '1948',
      title: 'England',
      body: 'He goes to England on a government scholarship to study local government. In 1949 Sokoto sends him to the Northern House of Assembly.',
    },
    {
      year: '1954',
      title: 'Premier',
      body: 'He had been a regional minister since 1952. When the federal constitution comes into force he becomes Premier of the Northern Region, and he is elected president of the Northern People’s Congress the same year.',
      photo: {
        id: 'with-bello-1955',
        from: 'azikiwe',
        alt: 'Ahmadu Bello in a turban and robe talking with Nnamdi Azikiwe in a cap and agbada.',
        caption: 'With Nnamdi Azikiwe, Premier of the Eastern Region, in January 1955.',
      },
    },
    {
      year: '1956',
      title: 'The Queen in Kaduna',
      body: 'Elizabeth II tours Nigeria in January and February. Bello receives her in Kaduna, where the emirs stage a durbar of horsemen.',
      photo: {
        id: 'queen-kaduna-1956',
        alt: 'Queen Elizabeth II in a pale dress stands with men in turbans and robes, watching craftsmen at work on the ground beside a thatched hut.',
        caption: 'The Queen watching craftsmen at work in Kaduna, 1956.',
      },
    },
    {
      year: '1959',
      title: 'Self-government and an election',
      body: 'The Northern Region becomes self-governing on 15 March. In December the NPC wins the most seats in the federal election. Bello forms a coalition with the NCNC and stays in Kaduna.',
      photo: {
        id: 'elisofon-1959',
        alt: 'Bello smiling in a dark blue embroidered robe and dark turban, photographed from below against a cloudy sky.',
        caption: 'Bello in 1959, photographed by Eliot Elisofon.',
      },
    },
    {
      year: '1960',
      title: 'Independence',
      body: 'He attends the independence celebrations in Lagos on 1 October. That year he also visits the United States, including the atomic laboratory at Oak Ridge, Tennessee. In 1961 the northern part of the British Cameroons votes to join Nigeria and becomes Sardauna Province.',
      photo: {
        id: 'independence-1960',
        alt: 'Bello seated in white robes and a turban, hands raised to his face, between two men in patterned robes and caps.',
        caption: 'At the independence celebrations in Lagos, 1 October 1960, with Michael Okpara, Premier of the Eastern Region.',
      },
    },
    {
      year: '1966',
      title: 'Killed in the January coup',
      body: 'In the early hours of 15 January soldiers led by Major Chukwuma Kaduna Nzeogwu attack his house in Kaduna. Bello is shot dead. His senior wife, Hafsatu, is killed with him. The Prime Minister dies in Lagos the same night.',
      photo: {
        id: 'home-1965',
        alt: 'Bello in a plain white robe and cap walking through a gateway into a courtyard, with three men behind him.',
        caption: 'At home in July 1965, six months before the coup. Photograph for Drum magazine.',
      },
    },
  ],
  context: {
    heading: 'The weight of the North',
    body: [
      'Seats in the federal parliament were shared out by population, and the North had more than half of them. A party that held the North could govern Nigeria without winning a seat in the South. The NPC took its members only from the North.',
      'Southern parties saw this as permanent northern rule. Northern leaders saw southern clerks, teachers and traders already in their towns and feared the opposite. The census disputes of 1962 and 1963 and the election crisis of 1964 were fought over that arithmetic.',
    ],
    photo: {
      id: 'ibadan-1962',
      alt: 'Bello laughing in a white turban and an embroidered cream robe, beside a smiling man in a dark suit, outside a modern building.',
      caption: 'Opening Sultan Bello Hall at the University of Ibadan, February 1962.',
    },
    links: [
      { slug: 'balewa', note: 'His deputy, and the Prime Minister' },
      { slug: 'azikiwe', note: 'His coalition partner from 1959' },
      { slug: 'awolowo', note: 'Campaigned against the NPC in the North' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'My Life', by: 'Ahmadu Bello, 1962', url: 'https://openlibrary.org/search?q=Ahmadu+Bello+My+Life' },
    { kind: 'Book', title: 'Ahmadu Bello, Sardauna of Sokoto', by: 'John N. Paden, 1986', url: 'https://openlibrary.org/search?q=Paden+Ahmadu+Bello+Sardauna+of+Sokoto' },
    { kind: 'Article', title: 'Ahmadu Bello', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Ahmadu-Bello' },
    { kind: 'Article', title: 'Northern People’s Congress', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Northern_People%27s_Congress' },
    { kind: 'Place', title: 'Arewa House, Kaduna', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Arewa_House' },
    { kind: 'Place', title: 'Ahmadu Bello University, Zaria', by: 'abu.edu.ng', url: 'https://abu.edu.ng/' },
    { kind: 'Archive', title: 'Photographs of Bello', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Ahmadu_Bello' },
  ],
  sources: [
    { title: 'Ahmadu Bello, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Ahmadu-Bello' },
    { title: 'Ahmadu Bello, Wikipedia', url: 'https://en.wikipedia.org/wiki/Ahmadu_Bello' },
    { title: 'Ahmadu Bello University, Wikipedia', url: 'https://en.wikipedia.org/wiki/Ahmadu_Bello_University' },
  ],
}
