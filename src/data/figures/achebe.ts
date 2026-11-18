import type { Figure } from '../types'

export const achebe: Figure = {
  slug: 'achebe',
  name: 'Chinua Achebe',
  nameLines: ['Chinua', 'Achebe'],
  epithet: 'Author of Things Fall Apart',
  born: 1930,
  died: 2013,
  emblemCaption: 'A pen nib',
  stats: [
    { label: 'Position', value: 'Novelist' },
    { label: 'Lifetime', value: '1930-2013' },
    { label: 'Home town', value: 'Ogidi' },
    { label: 'Publisher', value: 'Heinemann' },
    { label: 'Novels', value: 'Five' },
    { label: 'Known for', value: 'Things Fall Apart' },
  ],
  statement:
    'Chinua Achebe published Things Fall Apart in 1958, when he was twenty-seven. It has sold more than twenty million copies and been translated into more than fifty languages.',
  character:
    'His father taught for the Church Missionary Society, and the family he grew up among still kept Igbo titles and festivals. He was baptised Albert, after Queen Victoria’s husband, and dropped the name at university. He wrote in English and said he meant to bend it until it could carry an Igbo story.',
  map: {
    heading: 'He wrote about the East',
    body: 'Ogidi is a few kilometres from Onitsha, the market town on the Niger. Achebe set his village novels in places like it. He left for Ibadan and Lagos, came home when the killings of 1966 began, and taught at Nsukka after the war.',
    region: 'east',
    regionLabel: 'Eastern Region, 1960',
    places: [
      { name: 'Ogidi', lon: 6.87, lat: 6.15, note: 'Born here on 16 November 1930 and buried here in May 2013.', label: 'left' },
      { name: 'Umuahia', lon: 7.49, lat: 5.53, note: 'He went to Government College here from 1944. He moved his family back to the town in 1968, when it was the Biafran capital.', label: 'right' },
      { name: 'Ibadan', lon: 3.9, lat: 7.44, note: 'He was in the first intake at University College in 1948 and graduated in 1953.', label: 'above' },
      { name: 'Lagos', lon: 3.39, lat: 6.455, note: 'He worked for the Nigerian Broadcasting Service here from 1954 and wrote Things Fall Apart in the evenings.', label: 'below' },
      { name: 'Enugu', lon: 7.51, lat: 6.44, note: 'He ran the broadcasting service’s eastern stations from here after 1958.', label: 'right' },
      { name: 'Nsukka', lon: 7.39, lat: 6.86, note: 'He taught at the University of Nigeria after the war and started the journal Okike here in 1971.', label: 'above' },
    ],
  },
  ideasTitle: ['What he', 'Wrote'],
  ideasIntro: 'Achebe wrote five novels and many essays, poems and children’s books. These are four of the pieces people still argue about.',
  ideas: [
    {
      glyph: 'drums',
      title: 'Things Fall Apart, 1958',
      body: 'Okonkwo is a wrestler and yam farmer in the village of Umuofia in the 1890s. He is exiled for seven years after his gun goes off at a funeral. He comes home to find a church and a colonial court. The title is a line from W. B. Yeats.',
    },
    {
      glyph: 'gate',
      title: 'Arrow of God, 1964',
      body: 'Ezeulu is the chief priest of six villages in the 1920s. A British officer wants to make him a warrant chief and he refuses. He is locked up, and when he gets home he will not announce the yam harvest.',
    },
    {
      glyph: 'coins',
      title: 'A Man of the People, 1966',
      body: 'A young teacher takes on a corrupt minister in an unnamed African country. The book ends with the army taking power. It was published in January 1966, the month of Nigeria’s first coup.',
    },
    {
      glyph: 'rays',
      title: 'An Image of Africa, 1975',
      body: 'In a lecture at the University of Massachusetts he said Joseph Conrad’s Heart of Darkness used Africa as a backdrop and Africans as props, and that Conrad was a racist. The essay is now taught beside the novel.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1930 to 2013.',
  moments: [
    {
      year: '1930',
      title: 'Born in Ogidi',
      body: 'Albert Chinualumogu Achebe is born to Isaiah, a church teacher, and Janet, who farms. He learns Bible stories at home and folk tales from his mother and older sister.',
    },
    {
      year: '1948',
      title: 'Ibadan',
      body: 'He wins a scholarship to study medicine at the new University College in Ibadan. After a year he switches to English, history and theology and loses the scholarship. A government bursary and money from his brother keep him there.',
      photo: {
        id: 'ibadan-1962',
        alt: 'A low round building with a folded roof among palm trees, seen from beside a pale tower block.',
        caption: 'University College, Ibadan, in February 1962, nine years after he graduated.',
      },
    },
    {
      year: '1954',
      title: 'Radio',
      body: 'He joins the Nigerian Broadcasting Service in Lagos and edits scripts for the talks department. At Ibadan he had read Joyce Cary’s Mister Johnson, a novel set in Nigeria, and disliked how it showed Nigerians. He starts his own.',
      photo: {
        id: 'students-1962',
        alt: 'Two young men in white agbada and caps standing in front of a university building.',
        caption: 'Students at University College, Ibadan, in February 1962.',
      },
    },
    {
      year: '1957',
      title: 'The only copy',
      body: 'He posts his handwritten manuscript to a typing agency in London with a fee of 22 pounds. Months pass with no reply. His boss, Angela Beattie, calls at the agency while on leave and finds it lying in a corner. The typed copy reaches him soon after.',
    },
    {
      year: '1958',
      title: 'Things Fall Apart',
      body: 'Heinemann prints 2,000 hardback copies on 17 June. The reviews in London are good. The broadcasting service promotes him to run its eastern stations from Enugu.',
      photo: {
        id: 'title-page-1959',
        alt: 'A plain title page reading Chinua Achebe, Things Fall Apart, with his signature in ink at the top.',
        caption: 'A signed title page of the first American edition, published in New York in 1959.',
      },
    },
    {
      year: '1962',
      title: 'The African Writers Series',
      body: 'Heinemann starts a paperback series for African authors, with Things Fall Apart as its first title. Achebe is the editor for its first hundred books. Ngũgĩ wa Thiong’o and Flora Nwapa are among the writers he brings in.',
    },
    {
      year: '1966',
      title: 'Leaves Lagos',
      body: 'A Man of the People comes out days after the January coup, and some officers wonder how he knew. After the second coup in July, soldiers come looking for him. He sends his wife and children east by boat and follows them.',
      photo: {
        id: 'portrait-1966',
        alt: 'Achebe sitting on grass in a checked short-sleeved shirt, holding a book and looking off to one side.',
        caption: 'Achebe in Lagos in 1966, photographed by Carlo Bavagnoli. His portrait on this page is cut from it.',
      },
    },
    {
      year: '1967',
      title: 'Biafra',
      body: 'He backs the secession and travels to Europe and America to speak for Biafra. His friend the poet Christopher Okigbo is killed fighting in the first months of the war. After the surrender he takes a post at Nsukka.',
      photo: {
        id: 'iowa-1968',
        alt: 'Achebe in a dark suit and tie at a table with a microphone, looking to one side.',
        caption: 'Interviewed on WOI-TV, the Iowa State University station, in 1968.',
      },
    },
    {
      year: '1990',
      title: 'The accident',
      body: 'In March a car crash on the road to Lagos leaves him paralysed from the waist down. He moves to the United States and teaches at Bard College, then at Brown. He twice turns down a Nigerian national honour, in 2004 and 2011, and wins the Man Booker International Prize in 2007. He dies in Boston on 21 March 2013.',
      photo: {
        id: 'buffalo-2008',
        alt: 'An elderly Achebe in a red cap and blue tunic speaking into a microphone on a stage.',
        caption: 'Speaking in Buffalo, New York, on 25 September 2008.',
      },
    },
  ],
  context: {
    heading: 'Who tells the story',
    body: [
      'Things Fall Apart came out two years before independence. Until then most of the novels about Nigeria that Nigerian students were given had been written by Europeans. Achebe’s was set in an Igbo village before the British came and was told from inside it.',
      'His later books followed the country. No Longer at Ease is about a young civil servant in Lagos who takes bribes. His last book, There Was a Country, is a memoir of Biafra. It blamed the federal blockade for the famine and started a long public argument in Nigeria.',
    ],
    links: [
      { slug: 'ojukwu', note: 'Led the Biafra he spoke for abroad' },
      { slug: 'gowon', note: 'Led the federal side in the war' },
      { slug: 'awolowo', note: 'Blamed in There Was a Country for the blockade' },
      { slug: 'crowther', note: 'Founded the mission his father taught for' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'Things Fall Apart', by: 'Chinua Achebe, 1958', url: 'https://openlibrary.org/search?q=Things+Fall+Apart+Achebe' },
    { kind: 'Book', title: 'There Was a Country', by: 'Chinua Achebe, 2012', url: 'https://openlibrary.org/search?q=There+Was+a+Country+Achebe' },
    { kind: 'Speech', title: 'An Image of Africa', by: 'Lecture at Amherst, 1975', url: 'https://en.wikipedia.org/wiki/An_Image_of_Africa' },
    { kind: 'Article', title: 'Chinua Achebe, The Art of Fiction No. 139', by: 'The Paris Review, 1994', url: 'https://www.theparisreview.org/interviews/1720/the-art-of-fiction-no-139-chinua-achebe' },
    { kind: 'Article', title: 'Chinua Achebe', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Chinua-Achebe' },
    { kind: 'Article', title: 'African Writers Series', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/African_Writers_Series' },
    { kind: 'Archive', title: 'Photographs of Achebe', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Chinua_Achebe' },
  ],
  sources: [
    { title: 'Chinua Achebe, Wikipedia', url: 'https://en.wikipedia.org/wiki/Chinua_Achebe' },
    { title: 'Things Fall Apart, Wikipedia', url: 'https://en.wikipedia.org/wiki/Things_Fall_Apart' },
    { title: 'Chinua Achebe, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Chinua-Achebe' },
  ],
}
