import type { Figure } from '../types'

export const ransomeKuti: Figure = {
  slug: 'ransome-kuti',
  name: 'Funmilayo Ransome-Kuti',
  nameLines: ['Funmilayo', 'Ransome-Kuti'],
  epithet: 'Lioness of Lisabi',
  born: 1900,
  died: 1978,
  emblemCaption: 'The women’s symbol with a raised fist',
  stats: [
    { label: 'Position', value: 'Union president' },
    { label: 'Lifetime', value: '1900-1978' },
    { label: 'Home town', value: 'Abeokuta' },
    { label: 'Party', value: 'NCNC' },
    { label: 'Union', value: '20,000 women' },
    { label: 'Known for', value: 'Abeokuta tax revolt' },
  ],
  statement:
    'Funmilayo Ransome-Kuti led the Abeokuta Women’s Union. Its tax protests forced the king of Abeokuta to abdicate in January 1949.',
  character:
    'She was a teacher, and the first girl enrolled at Abeokuta Grammar School. She went to school in England under the name Frances and came back using her Yoruba name. From the 1940s she wore Yoruba dress and gave her speeches in Yoruba. The musician Fela Kuti was her son.',
  map: {
    heading: 'Her base was Abeokuta',
    body: 'Abeokuta is the main town of the Egba people, about 80 kilometres north of Lagos. Under British indirect rule its king, the Alake, collected the taxes and ran the courts. The women who traded in its markets paid a tax that men did not, and had no seat on the council that set it.',
    region: 'west',
    regionLabel: 'Western Region, 1960',
    places: [
      { name: 'Abeokuta', lon: 3.345, lat: 7.156, note: 'Born here on 25 October 1900. The Women’s Union held its vigils outside the Alake’s palace at Ake.', label: 'left' },
      { name: 'Ijebu-Ode', lon: 3.92, lat: 6.82, note: 'She lived here after her marriage in 1925, while her husband was principal of the grammar school.', label: 'right' },
      { name: 'Lagos', lon: 3.38, lat: 6.455, note: 'Soldiers raided her son Fela’s compound here in February 1977 and threw her from an upstairs window.', label: 'below' },
      { name: 'Ibadan', lon: 3.9, lat: 7.39, note: 'She sat in the Western House of Chiefs here in the 1950s, the first woman appointed to it.', label: 'above' },
    ],
  },
  ideasTitle: ['How she', 'Organised'],
  ideasIntro: 'The Abeokuta Women’s Union grew from a ladies’ club into a body of about 20,000 members. These are four things it did.',
  ideas: [
    {
      glyph: 'steps',
      title: 'Reading classes',
      body: 'A market woman asked Ransome-Kuti to teach her to read. She started literacy classes through the Abeokuta Ladies Club, and the traders who came told her about the tax collectors and the rice seized from their stalls.',
    },
    {
      glyph: 'weave',
      title: 'One union',
      body: 'In 1946 the club became the Abeokuta Women’s Union and opened to every woman in the town. The educated members stopped wearing European dress to meetings and spoke Yoruba, so that the market women would not be made to feel like guests.',
    },
    {
      glyph: 'coins',
      title: 'The account books',
      body: 'The union arranged an audit of the Native Authority’s finances. It also sent petitions to the British and wrote to the newspapers. Dues paid for lawyers when members were arrested.',
    },
    {
      glyph: 'drums',
      title: 'Vigils and songs',
      body: 'When the authorities refused permits for marches, she called the gatherings picnics. Thousands of women camped outside the palace for days at a time in 1947 and 1948. They refused to pay the tax and sang songs that mocked the Alake.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1900 to 1978.',
  moments: [
    {
      year: '1914',
      title: 'First girl at the grammar school',
      body: 'Abeokuta Grammar School admits girls for the first time and Frances Thomas, as she is then, is the first of six on the register. From 1919 to 1922 she studies at a girls’ school in Cheshire, England.',
      photo: {
        id: 'grammar-school',
        alt: 'A long two-storey school hall in pale stone with yellow arches along the ground floor.',
        caption: 'The old hall of Abeokuta Grammar School, photographed in 2016.',
      },
    },
    {
      year: '1925',
      title: 'Marries Israel Ransome-Kuti',
      body: 'Her husband is a clergyman and school principal who later helps found the Nigeria Union of Teachers. They have four children: Dolupo, Olikoye, Fela and Beko. In the 1930s she becomes the first woman in Abeokuta to drive a car.',
      photo: {
        id: 'family-1940',
        alt: 'A family group outdoors: a man in a suit and a woman holding a baby are seated, with a young woman and two boys around them.',
        caption: 'The family around 1940. She holds Beko. Fela stands in front, with Dolupo behind and Olikoye on the right.',
      },
    },
    {
      year: '1946',
      title: 'The Abeokuta Women’s Union',
      body: 'The Ladies Club she helped start in 1932 takes a new name and a new purpose. She is president. Her husband’s niece Grace Eniola Soyinka, the mother of the writer Wole Soyinka, helps run it.',
    },
    {
      year: '1947',
      title: 'London with the NCNC',
      body: 'Nnamdi Azikiwe invites her to join the party’s delegation to London to protest against the Richards Constitution. She is the only woman of the seven. While there she writes in the Daily Worker that Yoruba women had more power before British rule.',
    },
    {
      year: '1948',
      title: 'The palace blockade',
      body: 'In February the Alake bans her from the palace. Union members block the entrance and will not let the visiting British district officer leave. She takes hold of the steering wheel of his car and keeps hold until he prises her hand off. In April the tax on women is suspended.',
    },
    {
      year: '1949',
      title: 'The Alake abdicates',
      body: 'The union keeps up its petitions. On 3 January 1949 the Alake, Ladapo Ademola II, gives up his throne and leaves the town. Four women take seats on the council that replaces his rule. He returns in 1950.',
      photo: {
        id: 'alake-1923',
        alt: 'A page from a photograph album. The largest picture shows a man in beaded robes and a crown seated on a throne.',
        caption: 'Ademola II, the Alake of Abeokuta, in 1923. The picture is on the right of this page from a Colonial Office album.',
      },
    },
    {
      year: '1956',
      title: 'China, and a lost passport',
      body: 'She travels to China, lectures on Nigerian women and meets Mao Zedong. The trip is paid for by a women’s federation that the British consider communist. The next year the colonial government refuses to renew her passport, and in 1958 the United States refuses her a visa.',
    },
    {
      year: '1959',
      title: 'Out of the party',
      body: 'The NCNC will not pick her as a candidate for the federal election. She stands as an independent, splits the vote and is expelled. Her passport is returned after independence in 1960.',
      photo: {
        id: 'with-balewa',
        alt: 'Ransome-Kuti in a head tie and striped wrapper shaking hands with Balewa, who wears a white cap and robe, while a smiling man looks on.',
        caption: 'Greeting the Prime Minister, Abubakar Tafawa Balewa, in the early 1960s.',
      },
    },
    {
      year: '1977',
      title: 'The raid on Kalakuta',
      body: 'On 18 February about a thousand soldiers storm the Lagos compound of her son Fela, a critic of the military government. She is seventy-six and is thrown from a second-floor window. She dies of her injuries on 13 April 1978.',
    },
  ],
  context: {
    heading: 'Women and the vote',
    body: [
      'The independence parties were run by men, and the constitutions they negotiated in London said little about women. Ransome-Kuti argued inside the NCNC and at the constitutional conferences that women should vote on the same terms as men.',
      'Women in the Eastern and Western regions voted in the federal election of 1959. Women in the Northern Region had to wait until the late 1970s.',
    ],
    photo: {
      id: 'portrait-nln',
      alt: 'An older Ransome-Kuti in glasses, a patterned headwrap and an embroidered blouse.',
      caption: 'A portrait from late in her life, held by the National Library of Nigeria. The date is not recorded.',
    },
    links: [
      { slug: 'fela', note: 'Her son' },
      { slug: 'azikiwe', note: 'Took her to London with the NCNC in 1947' },
      { slug: 'macaulay', note: 'Worked with the market women of Lagos' },
      { slug: 'balewa', note: 'Prime Minister when her passport was returned' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'For Women and the Nation', by: 'Cheryl Johnson-Odim and Nina Emma Mba, 1997', url: 'https://openlibrary.org/search?q=For+Women+and+the+Nation+Funmilayo+Ransome-Kuti' },
    { kind: 'Book', title: 'Aké: The Years of Childhood', by: 'Wole Soyinka, 1981', url: 'https://en.wikipedia.org/wiki/Ak%C3%A9:_The_Years_of_Childhood' },
    { kind: 'Article', title: 'Funmilayo Ransome-Kuti', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Funmilayo-Ransome-Kuti' },
    { kind: 'Article', title: 'Abeokuta Women’s Revolt', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Abeokuta_Women%27s_Revolt' },
    { kind: 'Film', title: 'Funmilayo Ransome-Kuti', by: 'Bolanle Austen-Peters, 2024', url: 'https://en.wikipedia.org/wiki/Funmilayo_Ransome-Kuti_(film)' },
    { kind: 'Archive', title: 'Photographs of Ransome-Kuti', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Funmilayo_Ransome-Kuti' },
  ],
  sources: [
    { title: 'Funmilayo Ransome-Kuti, Wikipedia', url: 'https://en.wikipedia.org/wiki/Funmilayo_Ransome-Kuti' },
    { title: 'Abeokuta Women’s Revolt, Wikipedia', url: 'https://en.wikipedia.org/wiki/Abeokuta_Women%27s_Revolt' },
    { title: 'Funmilayo Ransome-Kuti, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Funmilayo-Ransome-Kuti' },
  ],
}
