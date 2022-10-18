import React from 'react'
import './CampaignList.css'
import { Lords } from '../../Lords'
import { races } from '../../elements/races/races'

const CampaignList = (props) => {
	const filterRace = (raceToFilter) => {
		return Lords?.filter((item) => item.race === `${raceToFilter}`) ?? null
	}

	const beastmen = filterRace(races.beastmen)
	const bretonnia = filterRace(races.bretonnia)
	const daemonsOfChaos = filterRace(races.daemonsOfChaos)
	const darkElves = filterRace(races.darkElves)
	const dwarfs = filterRace(races.dwarfs)
	const theEmpire = filterRace(races.theEmpire)
	const grandCathay = filterRace(races.grandCathay)
	const greenskins = filterRace(races.greenskins)
	const highElves = filterRace(races.highElves)
	const khorne = filterRace(races.khorne)
	const kislev = filterRace(races.kislev)
	const lizardmen = filterRace(races.lizardmen)
	const norsca = filterRace(races.norsca)
	const nurgle = filterRace(races.nurgle)
	const orgreKingdoms = filterRace(races.orgreKingdoms)
	const skaven = filterRace(races.skaven)
	const slaanesh = filterRace(races.slaanesh)
	const tombKings = filterRace(races.tombKings)
	const tzeentch = filterRace(races.tzeentch)
	const vampireCoast = filterRace(races.vampireCoast)
	const vampireCounts = filterRace(races.vampireCounts)
	const warriorsOfChaos = filterRace(races.warriorsOfChaos)
	const woodElves = filterRace(races.woodElves)

	const arrayOfRaces = [
		beastmen,
		bretonnia,
		daemonsOfChaos,
		darkElves,
		dwarfs,
		theEmpire,
		grandCathay,
		greenskins,
		highElves,
		khorne,
		kislev,
		lizardmen,
		norsca,
		nurgle,
		orgreKingdoms,
		skaven,
		slaanesh,
		tombKings,
		tzeentch,
		vampireCoast,
		vampireCounts,
		warriorsOfChaos,
		woodElves,
	]

	return (
		<div>
			{arrayOfRaces?.map((race) => (
				<>
					<h1 style={race[0]?.race ? { textAlign: 'center' } : { display: 'none' }}>
						{race[0]?.race ?? null}
					</h1>
					<div className='List'>
						{race?.map((item) => (
							<a href={`/lords/${item?.name}${item?.surname}`}>
								<div className='Lord'>
									<img src={item?.image} alt={(item?.name, item?.surname)} />
									<p>
										{item?.name} {item?.surname}
									</p>
								</div>
							</a>
						))}
					</div>
				</>
			))}
		</div>
	)
}

export default CampaignList
