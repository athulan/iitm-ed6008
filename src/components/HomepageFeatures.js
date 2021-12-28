import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Machines',
		Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
			Precision machine design fundamentals; machine tool elements / structure; sources of error.
			</>
		),
	},
	{
		title: 'Processes',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
			Overview of manufacturing processes (additive/subtractive/conservative); sensors for process monitoring and control.
			</>
		),
	},
	{
		title: 'Systems',
		Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
			Production system basics; process control; lean manufacturing; digital twin.
			</>
		),
	},
	{
		title: 'Design',
		Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
	  
		description: (
			<>
			Process design; CAD/CAM; Digital thread.
			</>
		),
	},
	{
		title: 'Data and Analytics',
		Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
	  
		description: (
			<>
			IoT and data collection; data transformation; AI/ML.
			</>
		),
	},
	{
		title: 'Industry 4.0',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
			Fundamentals; key enablers; case studies.
			</>
		),
	},
];

function Feature({Svg, title, description}) {
	return (
		<div className={clsx('col col--4')}>
		<div className="text--center">
		<Svg className={styles.featureSvg} alt={title} />
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
