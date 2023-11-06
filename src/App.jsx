import React from "react";
import GoogleReviews from "./GoogleReviews";
import AdvancedGoogleReviews from "./AdvancedGoogleReviews";

function App() {
	let ComponentToShow;
	const componentChoice = import.meta.env.VITE_REACT_APP_COMPONENT_CHOICE; // RETRIEVE COMPONENT CHOICE FROM ENVIRONMENT VARIABLES

	// CHECK THE VALUE OF THE COMPONENT CHOICE AND ASSIGN THE CORRESPONDING COMPONENT TO 'COMPONENTTOSHOW'
	if (componentChoice === "GoogleReviews") {
		ComponentToShow = <GoogleReviews />;
	} else if (componentChoice === "AdvancedGoogleReviews") {
		ComponentToShow = <AdvancedGoogleReviews />;
	} else {
		ComponentToShow = <div>SELECT A VALID COMPONENT.</div>; // IF NO VALID COMPONENT IS SELECTED, DISPLAY A MESSAGE TO SELECT A VALID COMPONENT
	}

	return <div className="App">{ComponentToShow}</div>;
}

export default App;
