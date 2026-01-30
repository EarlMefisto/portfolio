import { Icon } from '../../../../shared/components/Icon'
import { SectionTitle } from '../../../../shared/components/SectionTitile'
import { MAP_URL, SOCIAL_LINKS } from '../../../../shared/constants/contacts'
import { Item, Link, List, Map, Section } from './ContactsAndLocation.style'

export const ContactsAndLocation = () => {
  return (
    <Section>
      <SectionTitle>Works Contacts</SectionTitle>
      <List id={'contacts'}>
        {SOCIAL_LINKS.map(({ href, iconId }) => (
          <Item key={iconId}>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Icon iconId={iconId} viewBox={'0 0 70 60'} width={'60'} height={'70'} />
            </Link>
          </Item>
        ))}
      </List>

      <SectionTitle>My Location</SectionTitle>
      <Map id={'location'}>
        <iframe src={MAP_URL} width={'100%'} height={'300px'} loading="lazy"></iframe>
      </Map>
    </Section>
  )
}
