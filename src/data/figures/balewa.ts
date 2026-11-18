import type { Figure } from '../types'

export const balewa: Figure = {
  slug: 'balewa',
  name: 'Abubakar Tafawa Balewa',
  nameLines: ['Tafawa', 'Balewa'],
  epithet: 'Golden Voice of Africa',
  born: 1912,
  died: 1966,
  emblemCaption: 'A microphone',
  stats: [
    { label: 'Position', value: 'Prime Minister' },
    { label: 'Lifetime', value: '1912-1966' },
    { label: 'Home town', value: 'Tafawa Balewa' },
    { label: 'Party', value: 'NPC' },
    { label: 'In office', value: '1957-1966' },
    { label: 'Known for', value: 'Independence, 1960' },
  ],
  statement:
    'Abubakar Tafawa Balewa was the only Prime Minister Nigeria has had. He took office in 1957, led the country to independence on 1 October 1960 and was killed in the coup of January 1966.',
  character:
    'He was a schoolteacher from a village in Bauchi and came from none of the northern ruling families. He wrote a novella in Hausa, Shaihu Umar. He was known as the Golden Voice of Africa for the way he spoke. His surname is the name of his home town.',
  map: {
    heading: 'From Bauchi to Lagos',
    body: 'Balewa grew up in the east of the Northern Region, far from Sokoto and Kano. He studied in Katsina, taught in Bauchi and entered the regional assembly in Kaduna. From 1952 he lived in Lagos as a federal minister.',
    region: 'north',
    regionLabel: 'Northern Region, 1960',
    places: [
      { name: 'Tafawa Balewa', lon: 9.56, lat: 9.76, note: 'Born here in December 1912. He took the town’s name as his own.', label: 'below' },
      { name: 'Bauchi', lon: 9.84, lat: 10.31, note: 'He taught at the middle school and became its headmaster. He is buried here.', label: 'above' },
      { name: 'Katsina', lon: 7.6, lat: 12.99, note: 'He trained as a teacher at Katsina College from 1928.', label: 'above' },
      { name: 'Kaduna', lon: 7.44, lat: 10.52, note: 'Seat of the Northern House of Assembly, where he was first a member in 1947.', label: 'left' },
      { name: 'Lagos', lon: 3.38, lat: 6.455, note: 'The federal capital. He was Prime Minister here for eight years and was abducted from his house on 15 January 1966.', label: 'above' },
    ],
  },
  ideasTitle: ['Where he', 'Stood'],
  ideasIntro: 'Balewa had less power at home than his title suggested, because his party leader was in Kaduna. He had more room abroad. These are four positions he took.',
  ideas: [
    {
      glyph: 'weave',
      title: 'A government of all parties',
      body: 'When he became Prime Minister in 1957 he invited the NCNC and the Action Group into his cabinet as well as his own party. He wanted every region to share the last steps to independence. The all-party cabinet lasted until the 1959 election.',
    },
    {
      glyph: 'gate',
      title: 'South Africa out',
      body: 'After the Sharpeville shootings of March 1960 he pressed the other Commonwealth prime ministers to act against apartheid. South Africa withdrew its application to stay in the Commonwealth in March 1961.',
    },
    {
      glyph: 'bridge',
      title: 'African unity by stages',
      body: 'Kwame Nkrumah of Ghana wanted one African government at once. Balewa argued for cooperation between states that kept their own borders. The Organisation of African Unity, founded in Addis Ababa in May 1963, followed his side of the argument.',
    },
    {
      glyph: 'rays',
      title: 'The defence pact',
      body: 'His government signed a defence agreement with Britain in 1960. Students marched on parliament and the opposition called it a return to colonial rule. He cancelled it in January 1962.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1912 to 1966.',
  moments: [
    {
      year: '1912',
      title: 'Born in Tafawa Balewa',
      body: 'Abubakar is born in a village in Bauchi province. His father worked for the district head. He goes to Qur’anic school, then to the provincial school in Bauchi, and in 1928 to Katsina College.',
    },
    {
      year: '1932',
      title: 'Teacher',
      body: 'He finishes at Katsina and returns to Bauchi to teach at the middle school. In these years he writes Shaihu Umar, a short novel in Hausa about a boy sold into slavery. He becomes headmaster in 1944.',
    },
    {
      year: '1947',
      title: 'Into the legislature',
      body: 'After a year at the University of London’s Institute of Education he is chosen for the Northern House of Assembly and then for the Legislative Council in Lagos. He helps turn a northern cultural society into the Northern People’s Congress and becomes its deputy leader.',
    },
    {
      year: '1957',
      title: 'Prime Minister',
      body: 'He had been federal Minister of Works and then of Transport. In 1957 the Governor-General appoints him the first Prime Minister of the Federation.',
      photo: {
        id: 'office-1959',
        alt: 'Balewa in a white cap and white robes seated at a desk with his hands crossed, looking to one side.',
        caption: 'In his office in Lagos, 1959. Photograph by Eliot Elisofon.',
      },
    },
    {
      year: '1960',
      title: 'Independence',
      body: 'Harold Macmillan visits in January. At midnight on 30 September the Union flag comes down at the Lagos racecourse. The next morning Princess Alexandra hands Balewa the constitutional instruments. A week later he speaks at the United Nations as Nigeria becomes its 99th member.',
      photo: {
        id: 'independence-1960',
        alt: 'Princess Alexandra in a white gown and tiara on a covered platform, with a man in a dark suit on one side and Balewa in white robes and a turban on the other.',
        caption: 'The independence ceremony in Lagos, 1 October 1960.',
      },
    },
    {
      year: '1961',
      title: 'Washington',
      body: 'He spends eight days in the United States in July. He meets President Kennedy at the White House and addresses Congress.',
      photo: {
        id: 'kennedy-1961',
        alt: 'Balewa in white robes and cap standing beside John F. Kennedy in a dark suit.',
        caption: 'With President John F. Kennedy in Washington, 25 July 1961.',
      },
    },
    {
      year: '1962',
      title: 'Emergency in the West',
      body: 'The Action Group splits and its members fight in the Western House of Assembly. Balewa declares a state of emergency and suspends the regional government for six months. Obafemi Awolowo is arrested later that year.',
      photo: {
        id: 'nehru-1962',
        alt: 'Nehru, in a dark coat and white cap, standing beside Balewa, who wears a dark robe and an embroidered cap.',
        caption: 'With Jawaharlal Nehru, Prime Minister of India, in London, 1962.',
      },
    },
    {
      year: '1964',
      title: 'A disputed election',
      body: 'The opposition alliance boycotts the federal election in December, alleging fraud. President Azikiwe at first refuses to reappoint Balewa. After several days of talks he does, and Balewa forms a broader government.',
      photo: {
        id: 'morning-post-1964',
        alt: 'The top half of a newspaper front page with a photograph of a large crowd and the headline Zik and Balewa disagree!',
        caption: 'The Nigerian Morning Post of 29 December 1964, the day before the election.',
      },
    },
    {
      year: '1966',
      title: 'Killed in the January coup',
      body: 'He chairs a Commonwealth conference on Rhodesia in Lagos, the first held outside Britain. Three days after it ends, on 15 January, soldiers take him from his house. His body is found by a road outside Lagos six days later.',
      photo: {
        id: 'tomb',
        alt: 'A low mound of stones on a pale floor in front of a tall wall patterned with blue and tan vertical strips.',
        caption: 'His tomb in Bauchi, photographed in 2017.',
      },
    },
  ],
  context: {
    heading: 'The First Republic',
    body: [
      'Nigeria kept the British system at independence: a Prime Minister answerable to parliament and a ceremonial head of state. The three regional governments held most of the money and the patronage, and each was controlled by one party.',
      'Balewa’s government survived a general strike, two census disputes and the 1964 boycott. It did not survive the Western Region election of October 1965, which was rigged and followed by months of arson and killing. The army officers who struck in January 1966 said they were ending that disorder.',
    ],
    photo: {
      id: 'northwestern-1960',
      alt: 'A smiling man in a dark suit and glasses hands Balewa a tall stack of books. Balewa wears white robes and a turban, and men in caps look on.',
      caption: 'With Melville Herskovits at Northwestern University, Illinois, in 1960.',
    },
    links: [
      { slug: 'bello', note: 'His party leader, in Kaduna' },
      { slug: 'azikiwe', note: 'Governor-General and then President' },
      { slug: 'awolowo', note: 'Leader of the Opposition until 1962' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'Shaihu Umar', by: 'Abubakar Tafawa Balewa, 1955', url: 'https://openlibrary.org/search?q=Shaihu+Umar+Balewa' },
    { kind: 'Book', title: 'A Right Honourable Gentleman', by: 'Trevor Clark, 1991', url: 'https://openlibrary.org/search?q=A+Right+Honourable+Gentleman+Abubakar+from+the+Black+Rock' },
    { kind: 'Article', title: 'Sir Abubakar Tafawa Balewa', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Abubakar-Tafawa-Balewa' },
    { kind: 'Article', title: 'First Nigerian Republic', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/First_Nigerian_Republic' },
    { kind: 'Film', title: 'Shaihu Umar', by: 'Adamu Halilu, 1976', url: 'https://en.wikipedia.org/wiki/Shaihu_Umar' },
    { kind: 'Archive', title: 'Photographs of Balewa', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Abubakar_Tafawa_Balewa' },
  ],
  sources: [
    { title: 'Abubakar Tafawa Balewa, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Abubakar-Tafawa-Balewa' },
    { title: 'Abubakar Tafawa Balewa, Wikipedia', url: 'https://en.wikipedia.org/wiki/Abubakar_Tafawa_Balewa' },
    { title: '1966 Nigerian coup d’état, Wikipedia', url: 'https://en.wikipedia.org/wiki/1966_Nigerian_coup_d%27%C3%A9tat' },
  ],
}
