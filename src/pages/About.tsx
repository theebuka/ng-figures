import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/Frame'
import '../styles/pages.css'

export function About() {
  useEffect(() => {
    document.title = 'About | Makers of Nigeria'
  }, [])

  return (
    <main>
      <Section as="header" tone="white" className="page" label="About" counter="Read me">
        <h1 className="page__title display">About</h1>
        <div className="page__prose">
          <p>
            Nigeria became independent on 1 October 1960. This site is about fourteen people who shaped it, before
            that date and after. Seven belong to the years up to independence: Samuel Ajayi Crowther, Herbert
            Macaulay, Funmilayo Ransome-Kuti, Nnamdi Azikiwe, Obafemi Awolowo, Ahmadu Bello and Abubakar Tafawa
            Balewa. Seven did most of their work after it: Ladi Kwali, Chinua Achebe, Odumegwu Ojukwu, Yakubu Gowon,
            Fela Kuti, Murtala Muhammed and Dora Akunyili.
          </p>
          <p>
            They did not work as a team. Azikiwe and Awolowo were rivals for most of their careers. Gowon and Ojukwu
            fought a war against each other. Fela spent twenty years attacking the kind of government Gowon and
            Muhammed ran. Crowther died before there was a country called Nigeria.
          </p>
          <p>
            Being on the list is not praise. Some of these people did great harm as well as good, and the pages try
            to say so plainly.
          </p>
          <p>
            Each page covers one person. It has a short biography, a map of the places they lived and worked, the
            main things they did, and a timeline with photographs from the period. Almost all the photographs come
            from Wikimedia Commons. Two do not: the portrait of Ladi Kwali, whose photographer is not known, and a
            2013 photograph of Dora Akunyili from the Center for Strategic and International Studies. Each portrait
            is a three-colour print cut from one of the photographs.
          </p>
          <p>
            The pages are short and leave a lot out. Each one ends with a reading list and the sources used to check
            its facts.
          </p>
          <p>
            <Link to="/credits">Photo and data credits</Link>
          </p>
        </div>
      </Section>
    </main>
  )
}
