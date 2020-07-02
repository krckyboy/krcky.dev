import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css.css'

class Box extends Component {
	render() {
		const { fill, dimensions, top, bottom, left, right, anim } = this.props

		return (
			<svg
				width={dimensions}
				height={dimensions}
				viewBox="0 0 59 59"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`box ${anim}`}
				style={{ top, bottom, left, right }}
			>

				<g opacity="0.3">
					<rect width="11.4722" height="11.4722" fill={fill} />
					<rect y="15.8428" width="11.4722" height="11.4722" fill={fill} />
					<rect y="31.6851" width="11.4722" height="11.4722" fill={fill} />
					<rect y="47.5278" width="11.4722" height="11.4722" fill={fill} />
					<rect x="15.8428" width="11.4722" height="11.4722" fill={fill} />
					<rect x="15.8428" y="15.8428" width="11.4722" height="11.4722" fill={fill} />
					<rect x="15.8428" y="31.6851" width="11.4722" height="11.4722" fill={fill} />
					<rect x="15.8428" y="47.5278" width="11.4722" height="11.4722" fill={fill} />
					<rect x="31.6851" width="11.4722" height="11.4722" fill={fill} />
					<rect x="31.6851" y="15.8428" width="11.4722" height="11.4722" fill={fill} />
					<rect x="31.6851" y="31.6851" width="11.4722" height="11.4722" fill={fill} />
					<rect x="31.6851" y="47.5278" width="11.4722" height="11.4722" fill={fill} />
					<rect x="47.5278" width="11.4722" height="11.4722" fill={fill} />
					<rect x="47.5278" y="15.8428" width="11.4722" height="11.4722" fill={fill} />
					<rect x="47.5278" y="31.6851" width="11.4722" height="11.4722" fill={fill} />
					<rect x="47.5278" y="47.5278" width="11.4722" height="11.4722" fill={fill} />
				</g>
			</svg>
		)
	}
}

Box.propTypes = {
	fill: PropTypes.string,
	dimensions: PropTypes.number,
	top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	anim: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Box