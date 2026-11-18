import type { Figure } from '../types'

export const azikiwe: Figure = {
  slug: 'azikiwe',
  name: 'Nnamdi Azikiwe',
  nameLines: ['Nnamdi', 'Azikiwe'],
  epithet: 'Zik of Africa',
  born: 1904,
  died: 1996,
  emblemCaption: 'The Pilot’s lamp',
  stats: [
    { label: 'Position', value: 'First President' },
    { label: 'Lifetime', value: '1904-1996' },
    { label: 'Home town', value: 'Onitsha' },
    { label: 'Party', value: 'NCNC' },
    { label: 'In office', value: '1960-1966' },
    { label: 'Known for', value: 'West African Pilot' },
  ],
  statement:
    'Nnamdi Azikiwe published the West African Pilot, the Lagos daily that pushed for self-government from 1937. In 1963 he became Nigeria’s first President.',
  character:
    'His parents were Igbo, but he was born in the Hausa-speaking north and went to secondary school in Lagos. He spoke Hausa, Igbo and Yoruba by the time he sailed for America at twenty. People called him Zik.',
  map: {
    heading: 'He had roots in all three regions',
    body: 'Azikiwe was born in Zungeru in the North, where his father worked as an army clerk. The family came from Onitsha in the East, and he built his newspaper business in Lagos. In the 1950s the parties split along regional lines and he moved to Enugu to lead the Eastern government.',
    region: 'east',
    regionLabel: 'Eastern Region, 1960',
    places: [
      { name: 'Zungeru', lon: 6.155, lat: 9.807, note: 'Born here on 16 November 1904, where his father was a clerk with the Nigeria Regiment.', label: 'above' },
      { name: 'Lagos', lon: 3.38, lat: 6.455, note: 'Launched the West African Pilot here in 1937 and moved into State House as Governor-General in 1960.', label: 'above' },
      { name: 'Onitsha', lon: 6.785, lat: 6.15, note: 'His ancestral home. Sent here at eight to learn Igbo; buried here in 1996.', label: 'left' },
      { name: 'Nsukka', lon: 7.39, lat: 6.857, note: 'Site of the University of Nigeria, which he founded. It opened in October 1960.', label: 'above' },
      { name: 'Enugu', lon: 7.495, lat: 6.44, note: 'Capital of the Eastern Region, which he led as Premier from 1954 to 1959.', label: 'right' },
      { name: 'Calabar', lon: 8.32, lat: 4.95, note: 'Studied at Hope Waddell Training Institution, where he first read Marcus Garvey.', label: 'right' },
    ],
  },
  ideasTitle: ['What he', 'Built'],
  ideasIntro: 'Azikiwe kept setting up Nigerian-owned versions of things the British controlled. Here are four of them.',
  ideas: [
    {
      glyph: 'press',
      title: 'A newspaper chain',
      body: 'The West African Pilot cost a penny and argued for self-government every day. Its motto was “Show the light and the people will find the way.” By the mid-1940s his company also had papers in Port Harcourt, Onitsha and Warri.',
    },
    {
      glyph: 'weave',
      title: 'A national party',
      body: 'The NCNC started in 1944 as an alliance of trade unions, town unions, market associations and student clubs. Its rivals recruited mostly in one region. In the 1954 federal election the NCNC came first in both the East and the West.',
    },
    {
      glyph: 'coins',
      title: 'An African bank',
      body: 'British banks rarely lent to Africans. In 1944 Azikiwe bought a small Lagos bank, which he later renamed the African Continental Bank. It lent to Nigerian traders. In 1956 a tribunal criticised him for putting Eastern Region funds into it.',
    },
    {
      glyph: 'steps',
      title: 'A university',
      body: 'University College Ibadan gave out University of London degrees. Azikiwe wanted a university that awarded its own. The University of Nigeria opened at Nsukka in 1960, planned with Michigan State University on the American land-grant model.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1904 to 1996.',
  moments: [
    {
      year: '1904',
      title: 'Born in Zungeru',
      body: 'Benjamin Nnamdi Azikiwe is born in Zungeru, then the capital of Northern Nigeria. He speaks Hausa first. In 1912 his father sends him to Onitsha to learn Igbo.',
      photo: {
        id: 'zungeru',
        alt: 'A low, roofless ruin of weathered walls among trees in Zungeru.',
        caption: 'What remains at the site of his birthplace in Zungeru, photographed in 2010.',
      },
    },
    {
      year: '1925',
      title: 'Nine years in America',
      body: 'He sails for the United States and stays nine years. He studies at Storer College, Howard, Lincoln and the University of Pennsylvania, paying his way with jobs that included dishwashing and coal mining. He leaves with two master’s degrees.',
      photo: {
        id: 'storer-1926',
        alt: 'A young Azikiwe in a padded American football uniform, crouched in a playing stance.',
        caption: 'On the American football team at Storer College, West Virginia, March 1926.',
      },
    },
    {
      year: '1937',
      title: 'The West African Pilot',
      body: 'He spends three years editing the African Morning Post in Accra, where he is convicted of sedition and cleared on appeal. Back in Lagos, he prints the first West African Pilot on 22 November 1937.',
      photo: {
        id: 'pilot-1954',
        alt: 'A newspaper front page under the West African Pilot masthead, headed Dr Zik and Sardauna take offices as premiers, with a toothpaste advertisement below.',
        caption: 'His paper on 2 October 1954, the day after he became Premier of the East.',
      },
    },
    {
      year: '1944',
      title: 'The NCNC',
      body: 'He founds the National Council of Nigeria and the Cameroons with Herbert Macaulay. Macaulay is president and Azikiwe is secretary. Macaulay dies during a national tour in 1946. Azikiwe takes over and leads the party’s delegation to London the next year.',
      photo: {
        id: 'london-1949',
        alt: 'A newspaper clipping showing Azikiwe in a suit and hat walking beside Sa’adu Zungur in a robe and scarf.',
        caption: 'In London with Sa’adu Zungur, the NCNC’s federal secretary, October 1949.',
      },
    },
    {
      year: '1954',
      title: 'Premier of the East',
      body: 'He won a seat in the Western assembly in 1951, but the Action Group majority there kept him out of the federal legislature. He moves east and becomes Premier of the Eastern Region, a job he holds until 1959.',
      photo: {
        id: 'premiers-1958',
        alt: 'Five leaders in robes and suits standing in a row outside a white building.',
        caption: 'Lagos, December 1958. From left: Obafemi Awolowo, Azikiwe, Abubakar Tafawa Balewa, E. M. L. Endeley of the Southern Cameroons and Ahmadu Bello.',
      },
    },
    {
      year: '1960',
      title: 'Governor-General',
      body: 'After the 1959 election the NCNC joins a coalition led by the Northern People’s Congress. Nigeria becomes independent on 1 October. On 16 November, his fifty-sixth birthday, Azikiwe is sworn in as the first Nigerian Governor-General. His university at Nsukka had opened a month earlier.',
      photo: {
        id: 'nsukka-1960',
        alt: 'Azikiwe in a pale suit standing with two American academics on an unfinished campus.',
        caption: 'With John Hannah and George Johnson of Michigan State University on the Nsukka campus, 1960.',
      },
    },
    {
      year: '1963',
      title: 'First President of the Republic',
      body: 'Nigeria becomes a republic on 1 October and Azikiwe becomes its first President. The job is ceremonial. The Prime Minister, Abubakar Tafawa Balewa, runs the government.',
      photo: {
        id: 'nina-simone-1961',
        alt: 'Azikiwe in a white agbada and dark cap shaking hands with Nina Simone.',
        caption: 'Greeting the singer Nina Simone in Lagos, 1961.',
      },
    },
    {
      year: '1966',
      title: 'The January coup',
      body: 'On 15 January army officers kill the Prime Minister and two regional premiers. Azikiwe is abroad for medical treatment and never returns to office. When civil war breaks out in 1967 he supports Biafra, then changes sides in 1969.',
    },
    {
      year: '1979',
      title: 'The last campaigns',
      body: 'Civilian rule returns and Azikiwe, now seventy-four, runs for President for the Nigerian People’s Party. He loses to Shehu Shagari, and loses again in 1983. He dies in Enugu on 11 May 1996 and is buried in Onitsha.',
    },
  ],
  context: {
    heading: 'The three regions',
    body: [
      'Britain ran Nigeria as three regions. By the 1950s each one had its own leading party: the NPC in the North, the Action Group in the West and the NCNC in the East. None could govern the whole country alone.',
      'After the 1959 election Azikiwe could have allied with Awolowo’s Action Group. He chose the NPC and took the ceremonial post of Governor-General. The coalition lasted through independence, fell apart after the disputed 1964 election and ended with the coup of January 1966.',
    ],
    photo: {
      id: 'with-bello-1955',
      alt: 'Ahmadu Bello in a turban and robe talking with Azikiwe in a cap and agbada.',
      caption: 'With Ahmadu Bello, leader of the Northern People’s Congress, January 1955.',
    },
    links: [
      { slug: 'macaulay', note: 'First president of the NCNC' },
      { slug: 'awolowo', note: 'Led the Action Group, his main rival' },
      { slug: 'bello', note: 'Led the NPC, his coalition partner' },
      { slug: 'balewa', note: 'Prime Minister while he was President' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'My Odyssey: An Autobiography', by: 'Nnamdi Azikiwe, 1970', url: 'https://openlibrary.org/works/OL2785430W' },
    { kind: 'Book', title: 'Renascent Africa', by: 'Nnamdi Azikiwe, 1937', url: 'https://archive.org/details/renascentafrica0000azik' },
    { kind: 'Article', title: 'Nnamdi Azikiwe', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Nnamdi-Azikiwe' },
    { kind: 'Article', title: 'The West African Pilot', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/West_African_Pilot' },
    { kind: 'Place', title: 'Storer College, Harpers Ferry', by: 'US National Park Service', url: 'https://www.nps.gov/hafe/learn/historyculture/storer-college.htm' },
    { kind: 'Place', title: 'University of Nigeria, Nsukka', by: 'unn.edu.ng', url: 'https://www.unn.edu.ng/' },
    { kind: 'Archive', title: 'Photographs of Azikiwe', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Nnamdi_Azikiwe' },
  ],
  sources: [
    { title: 'Nnamdi Azikiwe, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Nnamdi-Azikiwe' },
    { title: 'Nnamdi Azikiwe, Wikipedia', url: 'https://en.wikipedia.org/wiki/Nnamdi_Azikiwe' },
    { title: 'National Council of Nigeria and the Cameroons, Wikipedia', url: 'https://en.wikipedia.org/wiki/National_Council_of_Nigeria_and_the_Cameroons' },
  ],
}
