import type { Figure } from '../types'

export const crowther: Figure = {
  slug: 'crowther',
  name: 'Samuel Ajayi Crowther',
  nameLines: ['Samuel Ajayi', 'Crowther'],
  epithet: 'Bishop of the Niger',
  born: 1809,
  died: 1891,
  emblemCaption: 'An open book',
  stats: [
    { label: 'Position', value: 'Anglican bishop' },
    { label: 'Lifetime', value: 'c.1809-1891' },
    { label: 'Home town', value: 'Osogun' },
    { label: 'Mission', value: 'Church Missionary Society' },
    { label: 'Consecrated', value: '1864' },
    { label: 'Known for', value: 'The Yoruba Bible' },
  ],
  statement:
    'Samuel Ajayi Crowther was sold as a slave at about twelve and freed by the Royal Navy. In 1864 he became the first African bishop in the Anglican Church.',
  character:
    'He was a linguist before he was a bishop. He wrote the first Yoruba grammar by a Yoruba speaker, then primers for Igbo and Nupe. He took his English name from a London vicar at his baptism and kept Ajayi, the name his parents gave him, in the middle. Herbert Macaulay was his grandson.',
  map: {
    heading: 'He worked along the Niger',
    body: 'Crowther was born in Osogun, in what is now Oyo State, and grew up in Freetown in Sierra Leone after he was freed. He came back as a missionary in the 1840s. His diocese followed the river from the delta to the confluence with the Benue. Most of it lay outside British rule.',
    region: 'west',
    regionLabel: 'Western Region, 1960',
    places: [
      { name: 'Osogun', lon: 3.45, lat: 7.9, note: 'Born here about 1809. Raiders took the town in March 1821 and sold its people.', label: 'left' },
      { name: 'Abeokuta', lon: 3.345, lat: 7.156, note: 'He opened the mission here with Henry Townsend in 1846 and found his mother after twenty-five years apart.', label: 'left' },
      { name: 'Lagos', lon: 3.39, lat: 6.455, note: 'He lived here as bishop and died here on 31 December 1891.', label: 'below' },
      { name: 'Onitsha', lon: 6.78, lat: 6.15, note: 'He founded the mission here in 1857 with John Christopher Taylor, an Igbo clergyman from Sierra Leone.', label: 'right' },
      { name: 'Lokoja', lon: 6.74, lat: 7.8, note: 'The Niger meets the Benue here. He set up stations around the confluence from 1857.', label: 'above' },
      { name: 'Bonny', lon: 7.17, lat: 4.45, note: 'He opened a mission in this trading port in the 1860s at the request of its king.', label: 'right' },
    ],
  },
  ideasTitle: ['What he', 'Built'],
  ideasIntro: 'Crowther spent fifty years writing down languages and setting up churches. These are four things he left.',
  ideas: [
    {
      glyph: 'press',
      title: 'A Yoruba grammar',
      body: 'He started a Yoruba grammar and word list on the 1841 expedition and published it in London in 1843. An enlarged edition in 1852 added a large collection of proverbs. Later writers of Yoruba followed his spelling.',
    },
    {
      glyph: 'rays',
      title: 'The Yoruba Bible',
      body: 'He translated the Book of Common Prayer, then led the group that put the whole Bible into Yoruba. They began in the 1840s and finished in the mid-1880s.',
    },
    {
      glyph: 'bridge',
      title: 'Igbo and Nupe',
      body: 'He learned Hausa for the 1841 expedition. After the expeditions of 1854 and 1857 he published a primer for Igbo, and in 1864 a grammar and vocabulary of Nupe.',
    },
    {
      glyph: 'steps',
      title: 'An African mission',
      body: 'The Niger Mission was staffed almost entirely by Africans. Most were freed slaves from Sierra Leone or their children. Crowther chose them, posted them and answered for them to the mission society in London.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from about 1809 to 1891.',
  moments: [
    {
      year: '1809',
      title: 'Born in Osogun',
      body: 'Ajayi is born in a Yoruba town in the old Oyo kingdom. The year is an estimate. His mother, Afala, is said to descend from a king of Oyo.',
    },
    {
      year: '1821',
      title: 'Captured',
      body: 'Raiders take Osogun in March. Ajayi is separated from his mother and sold several times over the next year. In 1822 he is put on a Portuguese ship bound for the Americas. A Royal Navy patrol under Captain Henry Leeke stops it and lands the captives at Freetown.',
    },
    {
      year: '1825',
      title: 'A new name',
      body: 'He learns to read within months of reaching Freetown. He is baptised on 11 December 1825 and takes the name of Samuel Crowther, a London vicar who helped start the Church Missionary Society.',
      photo: {
        id: 'namesake-1828',
        alt: 'An engraving of a white-haired English clergyman in a gown and preaching bands, signed Rev. Saml. Crowther.',
        caption: 'The man he was named after: Samuel Crowther, vicar of Christ Church, Newgate, in an engraving of 1828.',
      },
    },
    {
      year: '1827',
      title: 'Fourah Bay',
      body: 'After a year at a school in Islington, London, he is the first student enrolled at Fourah Bay College in Freetown. He studies Latin, Greek and Temne, and stays on as a teacher.',
      photo: {
        id: 'fourah-bay',
        alt: 'A four-storey stone building with a two-level verandah, seen at dusk across open ground.',
        caption: 'The old Fourah Bay College building in Freetown, photographed in 2007. It went up in the 1840s, after his years as a student.',
      },
    },
    {
      year: '1841',
      title: 'The Niger expedition',
      body: 'The British government sends three steamers up the Niger to sign treaties against the slave trade. Crowther goes as interpreter with the missionary James Schön. Fever kills about a third of the Europeans on board. His journal of the voyage gets him sent to London, where he is ordained in 1843.',
      photo: {
        id: 'niger-1841',
        alt: 'A coloured print of a paddle steamer with two masts in a rough sea, with sailing ships on either side.',
        caption: 'The expedition’s steamers off Holyhead on their way out, in a print of 1841.',
      },
    },
    {
      year: '1846',
      title: 'Abeokuta',
      body: 'He and Henry Townsend open the mission at Abeokuta. Weeks later he meets his mother and sisters again, twenty-five years after the raid. His mother is baptised in 1848 and takes the name Hannah. He begins translating the Bible.',
      photo: {
        id: 'yoruba-bible',
        alt: 'An old Bible lying open in a glass case, its pages printed in two columns.',
        caption: 'A copy of the first Yoruba Bible, photographed in 2023.',
      },
    },
    {
      year: '1857',
      title: 'Onitsha and the confluence',
      body: 'He travels up the Niger with a trading expedition and founds mission stations at Onitsha and near the confluence. The steamer Dayspring is wrecked on rocks near Jebba in October, and he is stranded upriver for most of a year.',
    },
    {
      year: '1864',
      title: 'Bishop',
      body: 'On 29 June the Archbishop of Canterbury consecrates him at Canterbury Cathedral. His title covers West Africa beyond the Queen’s dominions, which in practice means the Niger. Oxford gives him a doctorate in divinity.',
      photo: {
        id: 'seated',
        alt: 'Crowther seated in a dark clerical coat and white collar, one arm resting on a table.',
        caption: 'Crowther photographed in London by Ernest Edwards in the 1860s. His portrait on this page is cut from it.',
      },
    },
    {
      year: '1890',
      title: 'Pushed aside',
      body: 'A group of young English missionaries arrives on the Niger and accuses his African clergy of misconduct. In August 1890 the mission’s committee sides with them and overrules him. He dies in Lagos sixteen months later. The society replaces him with an Englishman, and his son Dandeson leads the Niger Delta churches out of its control.',
      photo: {
        id: 'with-dandeson-1870',
        alt: 'Crowther seated at a table in clerical dress with his son standing behind him, one hand on the chair.',
        caption: 'With his son Dandeson, later Archdeacon of the Niger Delta, about 1870.',
      },
    },
  ],
  context: {
    heading: 'Before there was a Nigeria',
    body: [
      'Crowther died twenty-three years before Britain joined its northern and southern territories into one colony. In his lifetime the country was a set of kingdoms, city states and emirates, with a British colony at Lagos from 1861.',
      'The mission schools opened by Crowther and his colleagues produced the first English-speaking clerks, teachers and clergy. Their children started the newspapers and parties of Lagos. His daughter Abigail married the founder of CMS Grammar School, and their son was Herbert Macaulay.',
    ],
    photo: {
      id: 'missionaries',
      alt: 'A group of men in dark Victorian clothes sitting and lying on the ground under a very large old oak. Crowther sits in the middle.',
      caption: 'Crowther, centre, with other missionaries under the oak at Holwood in Kent where William Wilberforce resolved to bring a bill against the slave trade.',
    },
    links: [
      { slug: 'macaulay', note: 'His grandson' },
      { slug: 'ransome-kuti', note: 'Grew up in the Abeokuta church he helped start' },
      { slug: 'achebe', note: 'Son of a teacher in the Igbo mission he founded' },
    ],
  },
  resources: [
    { kind: 'Article', title: 'Samuel Ajayi Crowther', by: 'Dictionary of African Christian Biography', url: 'https://dacb.org/stories/nigeria/crowther1-samuel/' },
    { kind: 'Book', title: 'Journals of the Rev. James Frederick Schön and Mr. Samuel Crowther', by: 'Church Missionary Society, 1842', url: 'https://archive.org/search?query=Journals+Sch%C3%B6n+Crowther+Niger+1841' },
    { kind: 'Book', title: 'A Vocabulary of the Yoruba Language', by: 'Samuel Crowther, 1852', url: 'https://archive.org/search?query=Crowther+Vocabulary+of+the+Yoruba+Language' },
    { kind: 'Article', title: 'Niger expedition of 1841', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Niger_expedition_of_1841' },
    { kind: 'Place', title: 'Fourah Bay College, Freetown', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Fourah_Bay_College' },
    { kind: 'Archive', title: 'Photographs of Crowther', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Samuel_Ajayi_Crowther' },
  ],
  sources: [
    { title: 'Samuel Ajayi Crowther, Wikipedia', url: 'https://en.wikipedia.org/wiki/Samuel_Ajayi_Crowther' },
    { title: 'Samuel Ajayi Crowther, Dictionary of African Christian Biography', url: 'https://dacb.org/stories/nigeria/crowther1-samuel/' },
    { title: 'Niger expedition of 1841, Wikipedia', url: 'https://en.wikipedia.org/wiki/Niger_expedition_of_1841' },
  ],
}
