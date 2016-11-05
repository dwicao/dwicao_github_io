import React from 'react';

const homeStyles = {
	center: {
		textAlign: 'center'
	},
	icon: {
		fontSize: 128,
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'block',
		textAlign: 'center'
	}
}

function Home(props) {  
    return (
      <div className="main-content home">
        
        <h2 style={homeStyles.center}>
        	Hi! I'm Lutfian Dwi Cahyono
        </h2>
        <i style={homeStyles.icon} className="material-icons">dvr</i>
        <h3 style={homeStyles.center}>
        	I create Web Apps with ReactJS and MeteorJS
       	</h3>
        
      </div>
    );
}

export default Home;