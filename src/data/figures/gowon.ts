import type { Figure } from '../types'

export const gowon: Figure = {
  slug: 'gowon',
  name: 'Yakubu Gowon',
  nameLines: ['Yakubu', 'Gowon'],
  epithet: 'Head of state at thirty-one',
  born: 1934,
  died: null,
  emblemCaption: 'Twelve states',
  stats: [
    { label: 'Position', value: 'Head of state' },
    { label: 'Lifetime', value: 'Born 1934' },
    { label: 'Home town', value: 'Wusasa, Zaria' },
    { label: 'Trained at', value: 'Sandhurst' },
    { label: 'In office', value: '1966-1975' },
    { label: 'Known for', value: 'Keeping Nigeria one' },
  ],
  statement:
    'Yakubu Gowon became head of state on 1 August 1966, at thirty-one. He led the federal side through the civil war and stayed in power for nine years.',
  character:
    'He is an Anglican from the Ngas, a small people of the Plateau, and his parents were evangelists. He grew up in Wusasa, a Christian settlement outside Zaria. Soldiers called him Jack. After he was overthrown he enrolled as an undergraduate at the University of Warwick and stayed until he had a doctorate.',
  map: {
    heading: 'He came from the Middle Belt',
    body: 'Gowon was a northerner but not a Muslim and not Hausa or Fulani. The northern officers who took power in July 1966 could accept him, and so could much of the South. He governed from Dodan Barracks in Lagos.',
    region: 'north',
    regionLabel: 'Northern Region, 1960',
    places: [
      { name: 'Lur', lon: 9.55, lat: 9.35, note: 'Born in this Plateau village on 19 October 1934.', label: 'right' },
      { name: 'Zaria', lon: 7.72, lat: 11.08, note: 'His parents moved to the mission at Wusasa when he was small. He went to Government College here, now Barewa College.', label: 'above' },
      { name: 'Lagos', lon: 3.39, lat: 6.455, note: 'He ran the country from Dodan Barracks on Lagos Island for nine years.', label: 'left' },
      { name: 'Enugu', lon: 7.51, lat: 6.44, note: 'Federal troops took the Biafran capital on 4 October 1967.', label: 'right' },
      { name: 'Port Harcourt', lon: 7.01, lat: 4.78, note: 'Its fall in May 1968 cut Biafra off from the sea.', label: 'right' },
      { name: 'Jos', lon: 8.89, lat: 9.92, note: 'He taught political science at the university here in the 1980s.', label: 'above' },
    ],
  },
  ideasTitle: ['What he', 'Decided'],
  ideasIntro: 'Gowon ruled by decree for nine years. These are four of the decisions that outlasted him.',
  ideas: [
    {
      glyph: 'weave',
      title: 'Twelve states',
      body: 'On 27 May 1967 he replaced the four regions with twelve states. The North became six and the East became three. Two of the eastern states were for minority peoples, and most of the oil was under them.',
    },
    {
      glyph: 'bridge',
      title: 'No victor, no vanquished',
      body: 'When Biafra surrendered in January 1970 he announced an amnesty. There were no war crimes trials. But Easterners who had held bank accounts were given twenty pounds each, whatever they had saved, and many lost houses they had left behind.',
    },
    {
      glyph: 'steps',
      title: 'National service',
      body: 'A decree of 22 May 1973 set up the National Youth Service Corps. Every graduate under thirty serves for a year in a state other than their own. The scheme is still running.',
    },
    {
      glyph: 'coins',
      title: 'Oil money',
      body: 'Nigeria joined OPEC in 1971, and the oil price quadrupled in 1973. In 1974 the government raised civil service pay sharply and prices jumped. In 1975 it ordered so much cement that hundreds of ships queued outside Lagos harbour.',
    },
  ],
  momentsIntro: 'Nine dates from a life that began in 1934.',
  moments: [
    {
      year: '1934',
      title: 'Born in Lur',
      body: 'Yakubu is the fifth of eleven children. His parents are evangelists for the Church Missionary Society. The family moves to Wusasa and he goes to school in Zaria.',
    },
    {
      year: '1955',
      title: 'Sandhurst',
      body: 'He joins the army in 1954 and is sent to the Royal Military Academy at Sandhurst. He serves twice with the United Nations force in the Congo, in 1960 and 1963.',
    },
    {
      year: '1966',
      title: 'Head of state',
      body: 'He gets back from a staff course in England two days before the January coup. The new ruler, Aguiyi-Ironsi, makes him army chief of staff. Northern soldiers kill Ironsi on 29 July. After three days of argument Gowon, the senior northern officer, takes over.',
      photo: {
        id: 'in-1966',
        alt: 'Gowon seated in dress uniform with braid, medals and a sword, smiling at the camera.',
        caption: 'Lieutenant Colonel Gowon in November 1966. His portrait on this page is cut from it.',
      },
    },
    {
      year: '1967',
      title: 'War',
      body: 'Talks with Ojukwu at Aburi in January fail. Gowon creates the twelve states on 27 May, Ojukwu declares Biafra on 30 May, and federal troops go in on 6 July. Gowon calls it a police action and expects it to be short.',
    },
    {
      year: '1970',
      title: 'The surrender',
      body: 'Biafran officers sign the surrender at Dodan Barracks on 15 January. Gowon says there is no victor and no vanquished, and promises reconciliation, reconstruction and rehabilitation.',
      photo: {
        id: 'newspaper-1970',
        alt: 'A yellowed front page of the New Nigerian with the headline Owerri is now captured and a picture of Gowon in a peaked cap.',
        caption: 'The New Nigerian of 12 January 1970: “Owerri is now captured. Ojukwu flees his enclave.”',
      },
    },
    {
      year: '1971',
      title: 'Abroad',
      body: 'The Organisation of African Unity sends him to Israel and Egypt with three other heads of state to try to restart peace talks. He chairs the organisation in 1973. In May 1975 fifteen countries sign the treaty in Lagos that sets up ECOWAS, which he had pushed for.',
      photo: {
        id: 'israel-1971',
        alt: 'A crowd of officials in dark suits on an airport apron behind a military band. A man in uniform salutes near the centre.',
        caption: 'Arriving in Israel with Léopold Senghor of Senegal on 2 November 1971.',
      },
    },
    {
      year: '1974',
      title: 'The broken promise',
      body: 'He had promised to hand over to civilians in 1976. On 1 October 1974 he says the date is unrealistic and names no other. His state governors are widely accused of corruption and he does not remove them.',
      photo: {
        id: 'nysc',
        alt: 'Five young people in khaki and white National Youth Service Corps uniforms standing behind a table.',
        caption: 'Members of the National Youth Service Corps in 2017.',
      },
    },
    {
      year: '1975',
      title: 'Overthrown',
      body: 'On 29 July, nine years to the day after the coup that brought him in, his own guard commander announces his removal. Gowon is at a summit in Kampala. He accepts it, goes to England and becomes a student.',
      photo: {
        id: 'portrait-1970',
        alt: 'A colour portrait of Gowon in a general’s peaked cap with a red band, smiling, with a thin moustache.',
        caption: 'An official portrait from his years in office.',
      },
    },
    {
      year: '1976',
      title: 'Accused, then pardoned',
      body: 'The officer who kills Murtala Muhammed in February says Gowon knew of the plot. Gowon denies it. He is stripped of his rank and Britain refuses to send him back. Shagari pardons him in 1981 and his rank is restored in 1987. He returns to Nigeria and teaches at Jos.',
      photo: {
        id: 'in-2007',
        alt: 'An older Gowon in a white robe and embroidered cap, smiling.',
        caption: 'Gowon in Kigali in 2007.',
      },
    },
  ],
  context: {
    heading: 'The oil years',
    body: [
      'When Gowon took power, Nigeria earned most of its foreign income from cocoa, groundnuts and palm produce. When he left, about nine tenths came from crude oil. The federal government collected that money and shared it out to the states, which left the centre far stronger than it had been under the regions.',
      'The army grew from about 10,000 men to about 250,000 during the war, and he did not cut it afterwards. His government built expressways, barracks and the National Theatre. It also set the pattern of soldiers promising to leave and then staying.',
    ],
    photo: {
      id: 'national-theatre',
      alt: 'An aerial view of a large round building with a ribbed, saddle-shaped roof, surrounded by car parks and the Lagos skyline.',
      caption: 'The National Theatre in Lagos, photographed in 2023. His government ordered it for a festival of African arts that was held in 1977.',
    },
    links: [
      { slug: 'ojukwu', note: 'His opponent in the war' },
      { slug: 'awolowo', note: 'His finance commissioner from 1967 to 1971' },
      { slug: 'murtala', note: 'Helped bring him to power and replaced him in 1975' },
      { slug: 'fela', note: 'First raided by police under his government' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'Gowon: The Biography of a Soldier-Statesman', by: 'J. Isawa Elaigwu, 1986', url: 'https://openlibrary.org/search?q=Gowon+Biography+of+a+Soldier-Statesman+Elaigwu' },
    { kind: 'Article', title: 'Yakubu Gowon', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Yakubu-Gowon' },
    { kind: 'Article', title: 'Aburi Accord', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Aburi_Accord' },
    { kind: 'Article', title: 'National Youth Service Corps', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/National_Youth_Service_Corps' },
    { kind: 'Place', title: 'National Arts Theatre, Lagos', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/National_Arts_Theatre' },
    { kind: 'Archive', title: 'Photographs of Gowon', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Yakubu_Gowon' },
  ],
  sources: [
    { title: 'Yakubu Gowon, Wikipedia', url: 'https://en.wikipedia.org/wiki/Yakubu_Gowon' },
    { title: 'Nigerian Civil War, Wikipedia', url: 'https://en.wikipedia.org/wiki/Nigerian_Civil_War' },
    { title: 'Yakubu Gowon, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Yakubu-Gowon' },
  ],
}
