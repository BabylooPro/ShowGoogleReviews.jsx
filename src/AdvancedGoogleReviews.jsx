import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"]; // IMPORTING 'PLACES' LIBRARY FROM GOOGLE MAPS

function AdvancedGoogleReviews() {
	const [placeName, setPlaceName] = useState("");
	const [reviews, setReviews] = useState([]);
	const { isLoaded, loadError } = useLoadScript({
		// TO GET API KEY VISIT: https://developers.google.com/maps/documentation/javascript/get-api-key
		googleMapsApiKey: "YOUR_API_KEY", // PUT YOUR API KEY OF PROJECT CREATED IN GOOGLE CLOUD CONSOLE
		libraries,
	});

	useEffect(() => {
		const handleError = (status, place) => {
			let errorMessage = "";
			let httpStatusCode = "";

			// SWITCH STATEMENT TO ASSIGN ERROR MESSAGES AND HTTP STATUS CODES BASED ON GOOGLE PLACES STATUS
			switch (status) {
				case google.maps.places.PlacesServiceStatus.OK:
					errorMessage = "ERROR: NO REVIEWS AVAILABLE FOR THIS PLACE";
					httpStatusCode = "200";
					break;
				case google.maps.places.PlacesServiceStatus.INVALID_REQUEST:
					errorMessage =
						"ERROR: INVALID QUERY, CHECK PLACEID PARAMETERS";
					httpStatusCode = "400";
					break;
				case google.maps.places.PlacesServiceStatus.REQUEST_DENIED:
					errorMessage =
						"ERROR: THE REQUEST WAS REFUSED, CHECK YOUR API KEY AND PERMISSIONS";
					httpStatusCode = "403";
					break;
				case google.maps.places.PlacesServiceStatus.NOT_FOUND:
					errorMessage = "ERROR: THE PLACEID WAS NOT FOUND";
					httpStatusCode = "404";
					break;
				default:
					errorMessage = `ERROR: LOADING REVIEWS: ${status}`;
					httpStatusCode = "500";
					break;
			}

			// WARN IN CONSOLE WITH STATUS, PLACEID INFORMATION AND ERROR MESSAGE
			console.warn(
				`STATUS: '${
					httpStatusCode ? `${httpStatusCode}.` : ""
				}${status}', PLACEID: '${place ? "FOUND" : "NOT FOUND"}'`
			);

			if (errorMessage) console.error(errorMessage);
		};

		if (isLoaded && !loadError) {
			const mapDiv = document.createElement("div"); // CREATING A DIV ELEMENT TO HOST SERVICE
			mapDiv.style.display = "none";
			document.body.appendChild(mapDiv);

			const service = new google.maps.places.PlacesService(mapDiv); // INITIALIZING PLACES SERVICE
			service.getDetails(
				{
					// TO GET PLACE ID VISIT: https://developers.google.com/maps/documentation/places/web-service/place-id
					placeId: "ChIJLU7jZClu5kcR4PcOOO6p3I0", // THIS IS PLACE ID OF 'TOUR EIFFEL' IN PARIS, FRANCE, PUT YOUR PLACE ID OF THE PLACE TO FETCH REVIEWS
					fields: ["reviews", "photos", "name"],
				},
				// IF STATUS IS OK AND THERE ARE REVIEWS, SET REVIEWS & HANDLE ERROR
				(place, status) => {
					// IF STATUS IS OK AND THERE ARE REVIEWS, SET REVIEWS & HANDLE ERROR
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						console.log(place);
						if (place?.reviews) {
							setReviews(place.reviews);
						}
						setPlaceName(place.name);
					} else {
						handleError(status, place);
					}
				}
			);

			return () => {
				document.body.removeChild(mapDiv); // CLEANUP BY REMOVING DIV ELEMENT
			};
		}
	}, [isLoaded, loadError]);

	// TEST SIMULATION OF AN REVIEW WITHOUT PLACEID
	useEffect(() => {
		const testReview = [
			{
				id: "testReview1",
				author_name: "Name Test",
				rating: 3,
				text: "This is a test Review for development without placeID.",
				profile_photo_url: "profile_photo_url",
			},
		];

		// CONDITION TO DEFINE SIMULATED REVIEWS ONLY IF THERE ARE NO REVIEWS LOADED
		if (reviews.length === 0) {
			setReviews(testReview);
		}
	}, []);

	return (
		<div>
			{/* DISPLAY NAME OF THE PLACE IF IT IS AVAILABLE */}
			{placeName && <h1>{placeName}</h1>}
			<hr />
			{/* MAPPING REVIEWS TO DISPLAY EACH REVIEW IN A DIV ELEMENT */}
			{reviews?.map((review) => (
				<div key={review.id || review.time}>
					<p>
						<strong>NAME : </strong>
						{review.author_name}
					</p>
					<p>
						<strong>RATING : </strong>
						{review.rating}
					</p>
					<p>
						<strong>TEXT : </strong>
						{review.text}
					</p>
					{/* USER PROFILE PHOTO */}
					{review.profile_photo_url && (
						<img
							src={review.profile_photo_url}
							alt={`${review.author_name}'s profile`}
						/>
					)}
					{/* PHOTOS ASSOCIATED WITH REVIEW */}
					{review.photos &&
						review.photos.map((photo, index) => (
							<img
								key={index}
								src={photo.getUrl()}
								alt={`Photo ${index + 1} for review by ${
									review.author_name
								}`}
							/>
						))}
					<hr />
				</div>
			))}
		</div>
	);
}

export default AdvancedGoogleReviews;
