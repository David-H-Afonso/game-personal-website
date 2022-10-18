import image from './image.png'
import army from './army.png'
import map from './map.png'
import { races } from '../../elements/races/races'
import CampaignBase from '../../CampaingBase/containers/CampaignBase'

const WulfrikTheWandererComponent = () => {
	return <CampaignBase lord={WulfrikTheWanderer} />
}

export const WulfrikTheWanderer = {
	name: 'Wulfrik',
	surname: 'the Wanderer',
	race: races.norsca,
	faction: 'World Walkers',
	startingZone: 'Monoloth of Bjorkil Bloody-Hand',
	image: image,
	army: army,
	map: map,
}

export default WulfrikTheWandererComponent
