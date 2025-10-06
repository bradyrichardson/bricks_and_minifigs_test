import DetailsBody from "./details/body";
import DetailsHeader from "./details/header";
import SearchBody from "./search/body";
import SearchHeader from "./search/header";

//TODO: this is where my project structuring kind of breaks down, no automated router, pages are hard-coded here and will have to be added as they are created

export { DetailsBody, DetailsHeader, SearchBody, SearchHeader };

// REQUIREMENTS FOR SEARCH:
// The results should display as a user types in their query (results should start being
// returned once they type in 3 or more characters -> this means I need to have all of the data already loaded, probably best to do that once on the layout page

// Up to 20 results should be shown at a time with ability for a user to page through or scroll
// through the results -> incorporate pagination

// Each result entry should be able to clicked on and load a detail page -> each entry will be clicked, find the correct detail entry, and pass those details in as params to details page
