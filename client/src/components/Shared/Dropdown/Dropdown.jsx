import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Header, HeaderTitle, List, ListItem } from './Dropdown.styled';

export class _Dropdown extends Component {
	static propTypes = {
		options: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				onClick: PropTypes.func.isRequired,
			})
		).isRequired,
	};

	state = {
		isOpen: false,
	};

	toggleList = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}));
	};

	render() {
		const { isOpen } = this.state;
		const { options } = this.props;
		return (
			<Wrapper>
				<Header onClick={this.toggleList}>
					<HeaderTitle>Profile</HeaderTitle>
					{/* We can change those to some sort of icons later */}
					{isOpen ? <span>&uarr;</span> : <span>&darr;</span>}
				</Header>
				{isOpen && (
					<List>
						{options.map(item => (
							<ListItem onClick={item.onClick} key={item.id}>
								{item.title}
							</ListItem>
						))}
					</List>
				)}
			</Wrapper>
		);
	}
}

export default _Dropdown;
