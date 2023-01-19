import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Processes',
		Svg: require('../../static/img/processes.svg').default,
		description: (
			<>
			Overview of manufacturing processes (additive/subtractive/conservative); sensors for monitoring and control
			</>
		),
	},
	{
		title: 'Systems',
		Svg: require('../../static/img/systems.svg').default,
		description: (
			<>
			Production system basics; process control; lean manufacturing; digital twin
			</>
		),
	},
	{
		title: 'Enablers',
		Svg: require('../../static/img/enablers.svg').default,
	  
		description: (
			<>
			Connectivity, automation, ML/AI, digital twins/threads
			</>
		),
	},
	{
		title: 'Case Studies',
		Svg: require('../../static/img/case-studies.svg').default,
		description: (
			<>
			Standing on the shoulder of giants (and not make their mistakes)
			</>
		),
	},
];

function Feature({Svg, title, description}) {
	return (
		<div className={clsx('col col--3')}>
		<div className="text--center">
		<Svg className={styles.featureSvg} alt={title}/>
		</div>
		<div className="text--center padding-horiz--md">
		<h3>{title}</h3>
		<p>{description}</p>
		</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
		<div className="container">
		<div className="row">
		{FeatureList.map((props, idx) => (
			<Feature key={idx} {...props} />
		))}
		</div>
		</div>
		</section>
	);
}
