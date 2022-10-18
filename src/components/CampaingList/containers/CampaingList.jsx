import React from 'react'
import './CampaignList.css'
import { Lords } from '../../Lords'

const CampaignList = (props) => {
	return (
		<div>
			{Lords.map((item) => (
				<div>
					<a href={`/lords/${item.name}${item.surname}`}>
						<img src={item.image} />
						<p>
							{item.name} {item.surname}
						</p>
					</a>
				</div>
			))}
		</div>
	)
}

export default CampaignList
