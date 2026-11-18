import type { Figure } from '../types'

export const akunyili: Figure = {
  slug: 'akunyili',
  name: 'Dora Akunyili',
  nameLines: ['Dora', 'Akunyili'],
  epithet: 'Head of NAFDAC',
  born: 1954,
  died: 2014,
  emblemCaption: 'A capsule under a magnifying glass',
  stats: [
    { label: 'Position', value: 'Drug regulator' },
    { label: 'Lifetime', value: '1954-2014' },
    { label: 'Born in', value: 'Makurdi' },
    { label: 'Trained as', value: 'Pharmacist' },
    { label: 'At NAFDAC', value: '2001-2008' },
    { label: 'Known for', value: 'Fighting fake drugs' },
  ],
  statement:
    'Dora Akunyili ran NAFDAC, Nigeria’s food and drug agency, from 2001 to 2008. She closed markets that sold fake medicine, took counterfeiters to court and was shot at for it. She was then Minister of Information.',
  character:
    'She was a pharmacist and a university lecturer, not a politician, when President Obasanjo offered her the job. She said she took it because of her younger sister, a diabetic who died in 1988 after being given fake insulin. She spoke bluntly and often, on radio, on television and to the papers. Her daughter Njideka Akunyili Crosby is a painter.',
  map: {
    heading: 'She grew up in the East',
    body: 'Akunyili was born in the Middle Belt, where her father worked, but her family came from Anambra. She studied and taught at Nsukka for twenty years. At NAFDAC her inspectors worked across the country, from the ports of Lagos to the drug markets of the North.',
    region: 'east',
    regionLabel: 'Eastern Region, 1960',
    places: [
      { name: 'Makurdi', lon: 8.54, lat: 7.73, note: 'Born here on 14 July 1954, the fourth child of Paul Young Edemobi.', label: 'above' },
      { name: 'Isuofia', lon: 7.07, lat: 6.06, note: 'At ten she was sent to live with her grandmother and an uncle here, and fetched water from far outside the village.', label: 'left' },
      { name: 'Nsukka', lon: 7.4, lat: 6.86, note: 'She went to secondary school here, then studied pharmacy at the University of Nigeria and taught there until 2001.', label: 'right' },
      { name: 'Enugu', lon: 7.51, lat: 6.44, note: 'Her first job was as a pharmacist at the University of Nigeria Teaching Hospital.', label: 'right' },
      { name: 'Kano', lon: 8.52, lat: 12.0, note: 'NAFDAC shut the city’s open-air medicine market for three months and seized fake drugs worth £140,000.', label: 'above' },
      { name: 'Agulu', lon: 7.06, lat: 6.11, note: 'Her husband’s home town. She is buried here, and a statue of her stands in the town.', label: 'below' },
    ],
  },
  ideasTitle: ['How she', 'Fought'],
  ideasIntro: 'Fake medicine was sold openly when she took over NAFDAC. These are four of the ways she went after it.',
  ideas: [
    {
      glyph: 'weave',
      title: 'A new team',
      body: 'She found an agency where importers paid bribes to get products through. She brought in her own staff, mostly women pharmacists and inspectors, and said men were too easily tempted. She also rebuilt the agency’s laboratories.',
    },
    {
      glyph: 'coins',
      title: 'The markets',
      body: 'Her inspectors raided warehouses and the open-air markets where drugs were sold from stalls. The Kano market was closed for three months. Seized drugs were piled up and burned in public.',
    },
    {
      glyph: 'drums',
      title: 'Telling the public',
      body: 'NAFDAC ran jingles on radio and television and printed lists of fake products in the newspapers. She wanted buyers to check what they bought, and she urged other countries to be as open about the problem.',
    },
    {
      glyph: 'gate',
      title: 'The courts',
      body: 'She took dealers and importers to court. By June 2006, 45 counterfeiters had been convicted and 56 more cases were pending.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1954 to 2014.',
  moments: [
    {
      year: '1954',
      title: 'Born in Makurdi',
      body: 'Dora Nkem Edemobi is born on 14 July. Her father, Paul Young Edemobi, comes from Nanka in Anambra. She finishes primary school at Isuofia in 1966, the year before the civil war.',
    },
    {
      year: '1973',
      title: 'Pharmacy',
      body: 'The war interrupts her schooling, but she leaves Queen of the Rosary in Nsukka with a distinction and wins a federal scholarship. She chooses pharmacy over medicine and law, graduates in 1978 and meets Chike Akunyili, a doctor. They have six children.',
    },
    {
      year: '1988',
      title: 'Her sister',
      body: 'She has been teaching at Nsukka since 1981 and took her doctorate in 1985. This year she goes to London as a research fellow. Her sister, aged 21, dies after being given fake insulin.',
    },
    {
      year: '2001',
      title: 'NAFDAC',
      body: 'From 1996 to 2000 she ran oil-funded projects in the South East for the Petroleum Trust Fund. Weeks after she returns to the university, President Obasanjo makes her Director General of the National Agency for Food and Drug Administration and Control.',
    },
    {
      year: '2003',
      title: 'Shot at',
      body: 'On 26 December gunmen fire on her car as she drives home to Anambra. A bullet goes through her headscarf and grazes her scalp. In these years counterfeiters burn NAFDAC offices and threaten her family.',
    },
    {
      year: '2006',
      title: 'The figures',
      body: 'She says fake drugs have fallen from 41 percent of those on sale in 2001 to 16.7 percent. Other West African countries lift their bans on medicine made in Nigeria. Time magazine names her one of its heroes of our time.',
    },
    {
      year: '2009',
      title: 'Minister',
      body: 'President Yar’Adua made her Minister of Information and Communications in December 2008. She launches a campaign to change how Nigerians and foreigners see the country, under the slogan Good People, Great Nation.',
      photo: {
        id: 'portrait-nln',
        alt: 'Akunyili in a bright patterned headwrap and blouse with a necklace of pearls, smiling, in front of a green and white flag.',
        caption: 'An official portrait from her time as minister, held by the National Library of Nigeria. Her portrait on this page is cut from it.',
      },
    },
    {
      year: '2010',
      title: 'The memo',
      body: 'Yar’Adua has been in a Saudi hospital since November. In February she sends the cabinet a memo saying he should hand power to his deputy, Goodluck Jonathan. She is the only minister to say so openly. In December she resigns to run for the Senate.',
    },
    {
      year: '2014',
      title: 'Death',
      body: 'She loses the 2011 Senate race in Anambra Central to Chris Ngige. In 2014 she is a delegate at the National Conference in Abuja. She dies of cancer in a hospital in India on 7 June, aged 59, and is buried at Agulu.',
      photo: {
        id: 'monument',
        alt: 'A tall terracotta-coloured statue of a woman in a headwrap and long dress on a stone plinth with an inscribed plaque.',
        caption: 'Her statue at Ezinano, Agulu, photographed in 2021.',
      },
    },
  ],
  context: {
    heading: 'Fake medicine',
    body: [
      'When she took over, a World Health Organization survey had found that more than half the drugs on sale in Nigeria were fake or substandard. Patients were given drips that carried infection, fake adrenaline and muscle relaxants too weak to work during surgery. Neighbouring countries had stopped buying Nigerian medicine.',
      'Fake drugs did not go away, and estimates of how far they fell vary widely. But the problem was now public, and NAFDAC had stopped working as a toll gate. She wrote about it in The War Against Counterfeit Medicine, published in 2013.',
    ],
    photo: {
      id: 'csis-2013',
      alt: 'Akunyili in a red patterned headwrap and dress, wearing glasses and a gold necklace, looking to one side.',
      caption: 'Speaking at the Center for Strategic and International Studies in Washington on 29 April 2013.',
    },
    links: [
      { slug: 'azikiwe', note: 'Founded the university at Nsukka where she studied and taught' },
      { slug: 'achebe', note: 'Taught at Nsukka while she was a student there' },
      { slug: 'ojukwu', note: 'Led Biafra in the war that broke up her schooling' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'The War Against Counterfeit Medicine: My Story', by: 'Dora Akunyili, 2013', url: 'https://openlibrary.org/search?q=The+War+Against+Counterfeit+Medicine+Akunyili' },
    { kind: 'Article', title: 'Joining forces to combat counterfeiting', by: 'WIPO Magazine, 2006', url: 'https://www.wipo.int/en/web/wipo-magazine/articles/joining-forces-to-combat-counterfeiting-35082' },
    { kind: 'Article', title: 'Dora Akunyili', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dora_Akunyili' },
    { kind: 'Place', title: 'National Agency for Food and Drug Administration and Control', by: 'NAFDAC', url: 'https://www.nafdac.gov.ng/' },
    { kind: 'Archive', title: 'Photographs of Akunyili', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Dora_Akunyili' },
  ],
  sources: [
    { title: 'Dora Akunyili, Wikipedia', url: 'https://en.wikipedia.org/wiki/Dora_Akunyili' },
    { title: 'Honorary degree oration, University of Bristol, 2006', url: 'https://www.bristol.ac.uk/alumni/our-alumni/honorary-degrees/honorary-graduates/2006/akunyili.html' },
    { title: 'Incidence of fake drugs drops by 24.3 percent in Nigeria, Partnership for Safe Medicines', url: 'https://safemedicines.org/?p=2700' },
    { title: 'Drama at ministerial screening, Sahara Reporters, 28 March 2010', url: 'https://saharareporters.com/2010/03/28/drama-ministerial-screening-member-cabal-confronts-dora-akunyili' },
    { title: 'Professor Dora Akunyili dies at 59, Channels TV, 7 June 2014', url: 'https://www.channelstv.com/2014/06/07/professor-dora-akunyili-dies-at-59/' },
  ],
}
