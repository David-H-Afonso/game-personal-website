import React from 'react'

const CampaignBase = (props) => {
	const { lord } = props

	return (
		<div>
			<div>
				<p>
					{lord.name} {lord.surname}
				</p>
				<p>
					{lord.race} - {lord.faction} - {lord.startingZone}
				</p>
				<img src={lord.image} />
				<img src={lord.army} />
				<img src={lord.map} />
			</div>
		</div>
	)
}

export default CampaignBase
