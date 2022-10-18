import { createBrowserRouter } from 'react-router-dom'

import KarlFranzComponent from './components/Lords/KarlFranz/KarlFranz'
import Home from './components/Home/containers/Home'
import CampaignList from './components/CampaingList/containers/CampaingList'

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
])
