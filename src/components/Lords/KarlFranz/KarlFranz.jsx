import image from './image.png'
import army from './army.png'
import map from './map.png'
import { races } from '../../elements/races/races'
import CampaignBase from '../../CampaingBase/containers/CampaignBase'

const KarlFranzComponent = () => {
	return <CampaignBase lord={KarlFranz} />
}

export const KarlFranz = {
	name: 'Karl',
	surname: 'Franz',
	race: races.theEmpire,
	faction: 'Reikland',
	startingZone: 'Altdorf',
	image: image,
	army: army,
	map: map,
}

export default KarlFranzComponent
