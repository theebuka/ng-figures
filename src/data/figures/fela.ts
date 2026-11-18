import type { Figure } from '../types'

export const fela: Figure = {
  slug: 'fela',
  name: 'Fela Kuti',
  nameLines: ['Fela', 'Anikulapo-Kuti'],
  epithet: 'Abami Eda',
  born: 1938,
  died: 1997,
  emblemCaption: 'A saxophone',
  stats: [
    { label: 'Position', value: 'Bandleader' },
    { label: 'Lifetime', value: '1938-1997' },
    { label: 'Home town', value: 'Abeokuta' },
    { label: 'Bands', value: 'Africa 70, Egypt 80' },
    { label: 'Arrests', value: 'About 200' },
    { label: 'Known for', value: 'Afrobeat' },
  ],
  statement:
    'Fela Kuti created Afrobeat with the drummer Tony Allen and used it against every Nigerian government from the 1970s until he died. He was arrested about two hundred times.',
  character:
    'He was Funmilayo Ransome-Kuti’s son and was sent to London in 1958 to become a doctor. He enrolled at Trinity College of Music instead. He sang in Pidgin so that listeners across West Africa could follow. On stage he played saxophone and keyboards and stopped between songs to lecture the crowd, a habit he called yabis.',
  map: {
    heading: 'His republic was a house in Lagos',
    body: 'Kalakuta was a two-storey house on Agege Motor Road in Mushin. Fela lived there with his band, their families, a recording studio and a free clinic. He put a fence round it and declared it independent of Nigeria. His club, the Shrine, was at the Empire Hotel across the road.',
    region: 'lagos',
    regionLabel: 'Lagos, federal territory in 1960',
    places: [
      { name: 'Abeokuta', lon: 3.345, lat: 7.156, note: 'Born here on 15 October 1938. His father was principal of the grammar school he attended.', label: 'above' },
      { name: 'Lagos', lon: 3.36, lat: 6.52, note: 'Soldiers burned Kalakuta on 18 February 1977. He is buried at his later house in Ikeja.', label: 'below' },
      { name: 'Benin City', lon: 5.62, lat: 6.34, note: 'He was released from prison here in April 1986.', label: 'right' },
      { name: 'Maiduguri', lon: 13.15, lat: 11.85, note: 'He spent part of his 1984 sentence in the prison here.', label: 'left' },
    ],
  },
  ideasTitle: ['What he', 'Sang'],
  ideasIntro: 'Fela recorded about fifty albums. These are four of the songs that got him into trouble.',
  ideas: [
    {
      glyph: 'weave',
      title: 'Gentleman, 1973',
      body: 'A man puts on a suit, tie, hat and socks in the Lagos heat and sweats all over. Fela says he is no gentleman of that kind. The song mocks Nigerians who copy colonial manners.',
    },
    {
      glyph: 'drums',
      title: 'Zombie, 1976',
      body: 'A soldier goes, stops, turns and kills when he is told to, with no mind of his own. Crowds sang it at soldiers in the street. The raid on Kalakuta came a few months after the record.',
    },
    {
      glyph: 'coins',
      title: 'I.T.T., 1980',
      body: 'The title stands for International Thief Thief. It names the telephone company ITT, its Nigerian chairman Moshood Abiola and the former head of state Olusegun Obasanjo, and accuses them of robbing the country.',
    },
    {
      glyph: 'gate',
      title: 'Coffin for Head of State, 1981',
      body: 'The song tells how he and his family carried a coffin to Dodan Barracks and left it at the gate for Obasanjo, whose soldiers had thrown his mother from a window.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1938 to 1997.',
  moments: [
    {
      year: '1938',
      title: 'Born in Abeokuta',
      body: 'Olufela Olusegun Oludotun Ransome-Kuti is the third of four children. His father is a clergyman and school principal who leads the teachers’ union. His mother is about to take on the king of Abeokuta.',
      photo: {
        id: 'family-1940',
        from: 'ransome-kuti',
        alt: 'A family group outdoors: a man in a suit and a woman holding a baby are seated, with a young woman and two boys around them.',
        caption: 'The family around 1940. Fela, about two, stands in front.',
      },
    },
    {
      year: '1958',
      title: 'London',
      body: 'He studies music at Trinity College, with the trumpet as his instrument, and forms a band, Koola Lobitos, that plays highlife and jazz. He comes home in 1963 and works for a time as a radio producer.',
    },
    {
      year: '1969',
      title: 'Los Angeles',
      body: 'The band spends ten months in the United States. A friend there, Sandra Smith, gives him the autobiography of Malcolm X and introduces him to the Black Panthers. He goes home with a new name for the band and a new sound.',
      photo: {
        id: 'in-1970',
        alt: 'A faded colour snapshot of Fela in a pale embroidered suit sitting on a red sofa beside another man, both holding glasses.',
        caption: 'Fela, on the left, in 1970.',
      },
    },
    {
      year: '1974',
      title: 'Kalakuta',
      body: 'Police raid his house in April looking for hemp. After a second raid he fences the compound and names it the Kalakuta Republic, after a cell he was held in. The next year he drops Ransome from his name and takes Anikulapo, “he who carries death in his pouch”.',
    },
    {
      year: '1977',
      title: 'The raid',
      body: 'On 18 February about a thousand soldiers surround Kalakuta, beat the people inside and burn the house. His mother, seventy-six, is thrown from an upstairs window and dies the following year. An inquiry blames an “unknown soldier”.',
      photo: {
        id: 'posters',
        alt: 'A wall of old printed concert posters with FELA in heavy black letters, advertising shows at the Shrine and the National Stadium.',
        caption: 'Posters for his shows in the 1970s, on display at the New Afrika Shrine.',
      },
    },
    {
      year: '1978',
      title: 'Twenty-seven wives',
      body: 'On the first anniversary of the raid he marries twenty-seven of the women in his band and household in one ceremony. In 1979 he founds a party, the Movement of the People, and tries to run for President. The electoral commission turns his party down.',
    },
    {
      year: '1984',
      title: 'Prison',
      body: 'He is arrested at Lagos airport in September on his way to an American tour and charged with exporting currency. A military tribunal gives him five years. Amnesty International adopts him as a prisoner of conscience. A new government frees him in April 1986.',
      photo: {
        id: 'portrait-1986',
        alt: 'Fela bare-chested on stage with both fists raised above his head and a chain round his neck.',
        caption: 'On stage in 1986, in a publicity photograph sent out by Celluloid Records. His portrait on this page is cut from it.',
      },
    },
    {
      year: '1997',
      title: 'Death',
      body: 'He dies in Lagos on 2 August. His brother Olikoye, a former health minister, tells the press the cause was AIDS, which Fela had refused to believe in. More than a million people are said to have come out for the funeral.',
      photo: {
        id: 'statue',
        alt: 'A tall gold-coloured figure with no head and both arms raised, standing on dark domes beside a road.',
        caption: 'The Liberation statue in Ikeja, put up in 2017 and photographed in 2018. It has his raised arms and no head.',
      },
    },
    {
      year: '2000',
      title: 'The New Afrika Shrine',
      body: 'His children Yeni and Femi open a new Shrine in Ikeja. A yearly festival, Felabration, has been held around his birthday since 1998.',
      photo: {
        id: 'shrine',
        alt: 'A wide orange and yellow hall with a pitched roof and a sign reading Afrika Shrine, with cars parked in front.',
        caption: 'The New Afrika Shrine in Ikeja, photographed in 2019.',
      },
    },
  ],
  context: {
    heading: 'Under the soldiers',
    body: [
      'Soldiers governed Nigeria for all but four of the years between 1966 and Fela’s death. There was no parliament to question them, and newspapers that went too far were shut. A record sold in the market was harder to stop.',
      'His politics were his own. He distrusted Christianity and Islam as imports and admired Kwame Nkrumah. His treatment of the women around him has been criticised since. Afrobeats, the pop style that came out of Lagos in the 2000s, borrows his word for its name.',
    ],
    photo: {
      id: 'observer-1975',
      alt: 'A newspaper front page with the headline Innih, other govs move in, above a photograph of an officer greeting a crowd.',
      caption: 'The Sunday Observer of 3 August 1975, after the coup that removed Gowon. New military governors take over the states.',
    },
    links: [
      { slug: 'ransome-kuti', note: 'His mother' },
      { slug: 'gowon', note: 'Head of state when Kalakuta was first raided' },
      { slug: 'awolowo', note: 'A candidate in the 1979 election Fela was kept out of' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'Fela: This Bitch of a Life', by: 'Carlos Moore, 1982', url: 'https://openlibrary.org/search?q=Fela+This+Bitch+of+a+Life+Carlos+Moore' },
    { kind: 'Film', title: 'Finding Fela', by: 'Alex Gibney, 2014', url: 'https://en.wikipedia.org/wiki/Finding_Fela' },
    { kind: 'Article', title: 'Fela Kuti', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Fela-Kuti' },
    { kind: 'Article', title: 'Kalakuta Republic', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Kalakuta_Republic' },
    { kind: 'Place', title: 'New Afrika Shrine, Ikeja', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/New_Afrika_Shrine' },
    { kind: 'Article', title: 'Felabration', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Felabration' },
    { kind: 'Archive', title: 'Photographs of Fela', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Fela_Kuti' },
  ],
  sources: [
    { title: 'Fela Kuti, Wikipedia', url: 'https://en.wikipedia.org/wiki/Fela_Kuti' },
    { title: 'Kalakuta Republic, Wikipedia', url: 'https://en.wikipedia.org/wiki/Kalakuta_Republic' },
    { title: 'Fela Kuti, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Fela-Kuti' },
  ],
}
