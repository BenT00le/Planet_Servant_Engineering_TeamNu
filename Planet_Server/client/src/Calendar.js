import React, { Component } from 'react';

class Calendar extends Component
{
	//this will need to be given a UID key
	//for getting the correct data from DB
	render()
	{
		return(
		<div>
			<h1>
			this is a Calendar
			<button onClick={console.log("Calendar button")}>buton</button>
			</h1>
		</div>	
		);
	}
}
export default Calendar;