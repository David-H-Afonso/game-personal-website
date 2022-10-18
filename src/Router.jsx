import { createBrowserRouter } from 'react-router-dom'

import Home from './components/Home/containers/Home'
import CampaignList from './components/CampaingList/containers/CampaingList'
import KarlFranzComponent from './components/Lords/KarlFranz/KarlFranz'
import WulfrikTheWandererComponent from './components/Lords/WulfrikTheWanderer/WulfrikTheWanderer'
import BorisUrsusComponent from './components/Lords/BorisUrsus/BorisUrsus'

export default createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/campaigns',
		element: <CampaignList />,
	},
	{
		path: '/lords/KarlFranz',
		element: <KarlFranzComponent />,
	},
	{
		path: '/lords/Wulfrikthe%20Wanderer',
		element: <WulfrikTheWandererComponent />,
	},
	{
		path: '/lords/BorisUrsus',
		element: <BorisUrsusComponent />,
	},
])
