import type { Figure } from '../types'

export const macaulay: Figure = {
  slug: 'macaulay',
  name: 'Herbert Macaulay',
  nameLines: ['Herbert', 'Macaulay'],
  epithet: 'Father of Nigerian nationalism',
  born: 1864,
  died: 1946,
  emblemCaption: 'Surveyor’s dividers',
  stats: [
    { label: 'Position', value: 'Party founder' },
    { label: 'Lifetime', value: '1864-1946' },
    { label: 'Home town', value: 'Lagos' },
    { label: 'Parties', value: 'NNDP, NCNC' },
    { label: 'Trained as', value: 'Civil engineer' },
    { label: 'Known for', value: 'Lagos Daily News' },
  ],
  statement:
    'Herbert Macaulay founded the Nigerian National Democratic Party in 1923. It was the country’s first political party, and its candidates won every Lagos seat in the next three elections.',
  character:
    'He trained as a civil engineer in England and worked for the colonial government as a land surveyor until 1898. He played the violin, wore white suits and a bow tie, and kept a wide moustache. Lagos called him the Wizard of Kirsten Hall, after his house, because government papers kept reaching him.',
  map: {
    heading: 'He spent his life in Lagos',
    body: 'Lagos was a British colony from 1861, with its own courts, newspapers and, after 1922, three elected seats on the Legislative Council. Macaulay fought nearly all his battles there. He left it in 1946 to tour the country for the NCNC and fell ill on the way.',
    region: 'lagos',
    regionLabel: 'Lagos, federal territory in 1960',
    places: [
      { name: 'Lagos', lon: 3.39, lat: 6.455, note: 'Born on Broad Street on 14 November 1864. He ran his survey practice, his newspaper and his party from the island.', label: 'right' },
      { name: 'Oyo', lon: 3.93, lat: 7.85, note: 'The British deposed the Eleko of Lagos, Eshugbayi, in 1925 and sent him here. Macaulay campaigned for his return until 1931.', label: 'above' },
      { name: 'Calabar', lon: 8.32, lat: 4.95, note: 'The 1922 constitution gave elected seats to only two towns. Lagos had three and Calabar had one.', label: 'right' },
      { name: 'Kano', lon: 8.52, lat: 12.0, note: 'He fell ill here in 1946 during the NCNC tour of the country and was taken back to Lagos.', label: 'above' },
    ],
  },
  ideasTitle: ['How he', 'Fought'],
  ideasIntro: 'Macaulay had no office and no vote in the government. These are the four things he used against it.',
  ideas: [
    {
      glyph: 'gate',
      title: 'The courts',
      body: 'The government took land at Apapa from Chief Amodu Tijani Oluwa without paying for it. Macaulay went to London with the chief as his secretary. In 1921 the Privy Council ruled that the land belonged to the community and that compensation was owed.',
    },
    {
      glyph: 'press',
      title: 'A daily paper',
      body: 'He bought the Lagos Daily News in 1927 with Dr John Akinlade Caulcrick and wrote much of it himself. He used it to attack the governor, the water rate and his Lagos rivals, often by name.',
    },
    {
      glyph: 'steps',
      title: 'A party',
      body: 'The 1922 constitution let Lagos elect three members of the Legislative Council. Macaulay founded the NNDP on 24 June 1923 to win them. Two earlier convictions barred him from standing, so he picked the candidates. They won in 1923, 1928 and 1933.',
    },
    {
      glyph: 'drums',
      title: 'The palace and the market',
      body: 'His voters were not the Lagos elite. He worked with the House of Docemo, the royal family of Lagos, and with the market women led by Alimotu Pelewura. Their numbers gave the party its crowds.',
    },
  ],
  momentsIntro: 'Eight dates from a life that ran from 1864 to 1946.',
  moments: [
    {
      year: '1864',
      title: 'Born in Lagos',
      body: 'Olayinka Herbert Macaulay is born three years after Britain annexed Lagos. His father founded CMS Grammar School, the first secondary school in the country. His mother was the daughter of Samuel Ajayi Crowther, the first African bishop in the Anglican Church.',
      photo: {
        id: 'crowther-1867',
        alt: 'An elderly Samuel Ajayi Crowther standing in bishop’s robes with one hand on a book.',
        caption: 'His grandfather, Bishop Samuel Ajayi Crowther, in 1867.',
      },
    },
    {
      year: '1890',
      title: 'Plymouth',
      body: 'After some years as a clerk in the Public Works Department he leaves for England on a government scholarship. He studies civil engineering in Plymouth and comes home in 1893 as surveyor of Crown lands.',
      photo: {
        id: 'portrait-1900',
        alt: 'A studio portrait of Macaulay in a dark suit, wing collar and bow tie, with a pale moustache.',
        caption: 'Macaulay around 1900, soon after he left government service.',
      },
    },
    {
      year: '1898',
      title: 'Leaves the colonial service',
      body: 'He resigns and sets up as a private surveyor. His superiors accused him of using the job to help his friends get land. He said he had come to dislike working for the colonial government.',
    },
    {
      year: '1913',
      title: 'First conviction',
      body: 'A court finds that he misused money from an estate he was managing and sends him to prison. Historians still argue over whether the trial was fair. The conviction bars him from elected office for the rest of his life.',
    },
    {
      year: '1921',
      title: 'The Apapa land case',
      body: 'The Privy Council in London rules for Chief Oluwa. While he is there, Macaulay makes statements about the Eleko, the king of Lagos, that anger the colonial government. The Eleko refuses to disown them and the governor withdraws his recognition.',
      photo: {
        id: 'lagos-1929',
        alt: 'An album page holding an aerial photograph of Lagos island, the lagoon and the harbour.',
        caption: 'Lagos from the air, photographed by the Royal Air Force on 6 November 1929.',
      },
    },
    {
      year: '1923',
      title: 'The NNDP',
      body: 'He founds the Nigerian National Democratic Party in June. On 20 September it takes all three Lagos seats in the first Legislative Council election. It holds them for fifteen years.',
    },
    {
      year: '1928',
      title: 'Prison again',
      body: 'The Lagos Daily News prints a rumour that officials plan to blow up the exiled Eleko’s car. Macaulay gets six months with hard labour and no option of a fine. He comes out more popular than he went in. The Eleko is allowed home in 1931.',
    },
    {
      year: '1944',
      title: 'The NCNC',
      body: 'The Nigerian Youth Movement beat his party in Lagos in 1938. Six years later he joins a younger rival, Nnamdi Azikiwe, to found the National Council of Nigeria and the Cameroons at Glover Memorial Hall. Macaulay is its first president. He dies in Lagos on 7 May 1946.',
      photo: {
        id: 'in-1946',
        alt: 'An elderly Macaulay in a white shirt and large dark bow tie, with a wide white moustache.',
        caption: 'Macaulay in 1946, the year he died, photographed by E. H. Duckworth.',
      },
    },
  ],
  context: {
    heading: 'Lagos before the parties',
    body: [
      'Until the 1940s Nigerian politics meant Lagos politics. The colony was small, its voters had to be men with a set income, and the Legislative Council they elected to could only advise the governor.',
      'Macaulay showed that a party could still organise around that council and embarrass the government. Azikiwe, Awolowo and the others began their careers in the Lagos he had shaped, some of them as his opponents in the Nigerian Youth Movement.',
    ],
    photo: {
      id: 'glover-hall',
      alt: 'Two pictures of Glover Memorial Hall: an old postcard of a two-storey colonial building and a recent photograph of a blue-tiled modern one.',
      caption: 'Glover Memorial Hall in Lagos, where the NCNC was founded in August 1944. The old hall is above and its replacement is below.',
    },
    links: [
      { slug: 'crowther', note: 'His grandfather' },
      { slug: 'azikiwe', note: 'Co-founder of the NCNC and his successor' },
      { slug: 'ransome-kuti', note: 'Went to London for the NCNC in 1947' },
      { slug: 'awolowo', note: 'Came up through the rival Youth Movement' },
    ],
  },
  resources: [
    { kind: 'Article', title: 'Herbert Macaulay', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Herbert-Macaulay' },
    { kind: 'Article', title: 'Nigerian National Democratic Party', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Nigerian_National_Democratic_Party' },
    { kind: 'Article', title: 'Amodu Tijani v Secretary, Southern Nigeria', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Amodu_Tijani_v_Secretary,_Southern_Nigeria' },
    { kind: 'Article', title: 'Eshugbayi Eleko', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Eshugbayi_Eleko' },
    { kind: 'Film', title: 'The Herbert Macaulay Affair', by: 'Imoh Umoren, 2019', url: 'https://en.wikipedia.org/wiki/The_Herbert_Macaulay_Affair' },
    { kind: 'Archive', title: 'Photographs of Macaulay', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Herbert_Macaulay' },
  ],
  sources: [
    { title: 'Herbert Macaulay, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Herbert-Macaulay' },
    { title: 'Herbert Macaulay, Wikipedia', url: 'https://en.wikipedia.org/wiki/Herbert_Macaulay' },
    { title: 'Lagos Daily News, Wikipedia', url: 'https://en.wikipedia.org/wiki/Lagos_Daily_News' },
  ],
}
