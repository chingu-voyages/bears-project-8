import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Header, HeaderTitle, List, ListItem } from './Dropdown.styled';

const list = [
	{
		id: 0,
		title: 'Profile',
		selected: false,
		key: 'location',
	},
	{
		id: 1,
		title: 'Logout',
		selected: false,
		key: 'location',
	},
];

export class Dropdown extends Component {
	static propTypes = {};

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
		return (
			<Wrapper>
				<Header onClick={this.toggleList}>
					<HeaderTitle>Profile</HeaderTitle>
					{isOpen ? <span>&uarr;</span> : <span>&darr;</span>}
				</Header>
				{isOpen && (
					<List>
						{list.map(item => (
							<ListItem key={item.id}>{item.title}</ListItem>
						))}
					</List>
				)}
			</Wrapper>
		);
	}
}

export default Dropdown;
