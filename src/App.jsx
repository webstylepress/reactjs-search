import { useState } from 'react';
import { employees } from './data/db.js';
import './App.css';

function App() {
	const [search, setSearch] = useState('');

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const filteredRecords = employees.filter((record) => {
		const searchTerm = search.toLowerCase();
		// Check if search term is empty, if so return all records
		if (searchTerm === '') {
			return true;
		}
		// Otherwise, check if any field contains the search term
		return (
			record.firstName.toLowerCase().includes(searchTerm) ||
			record.lastName.toLowerCase().includes(searchTerm) ||
			record.jobTitle.toLowerCase().includes(searchTerm) ||
			record.phone.includes(searchTerm)
		);
	});

	return (
		<>
			<input
				type='text'
				className='form-control'
				placeholder='Search...'
				value={search}
				onChange={handleSearchChange}
			/>
			<br />

			<h2>Employees</h2>

			{filteredRecords.length ? (
				<table className='table table-striped table-bordered'>
					<thead className='thead-dark'>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Role</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{filteredRecords.map((record, index) => (
							<tr key={index}>
								<td>{record.firstName}</td>
								<td>{record.lastName}</td>
								<td>{record.jobTitle}</td>
								<td>{record.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No records found...</p>
			)}
		</>
	);
}

export default App;
