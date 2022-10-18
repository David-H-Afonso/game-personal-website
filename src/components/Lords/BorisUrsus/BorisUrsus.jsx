import image from './image.png'
import army from './army.png'
import map from './map.png'
import { races } from '../../elements/races/races'
import CampaignBase from '../../CampaingBase/containers/CampaignBase'

const BorisUrsusComponent = () => {
	return <CampaignBase lord={BorisUrsus} />
}

export const BorisUrsus = {
	name: 'Boris',
	surname: 'Ursus',
	race: races.kislev,
	faction: 'Ursun Revivalists',
	startingZone: 'Tower of Torment',
	image: image,
	army: army,
	map: map,
}

export default BorisUrsusComponent
