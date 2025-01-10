const artists = [
    {
        name: "Band A",
        members: ["Alice", "Bob", "Charlie"],
        concertLocations: ["New York, USA", "Austin, Texas, USA"],
        creationDate: 2015,
        firstAlbumDate: 2016
    },
    {
        name: "Band B",
        members: ["David", "Eve", "Frank", "Grace"],
        concertLocations: ["Los Angeles, USA", "London, UK"],
        creationDate: 2012,
        firstAlbumDate: 2013
    },
    {
        name: "Band C",
        members: ["Henry", "Isla", "Jack", "Karen", "Leo"],
        concertLocations: ["Dallas, Texas, USA", "Manchester, UK"],
        creationDate: 2018,
        firstAlbumDate: 2019
    },
    {
        name: "Band D",
        members: ["Mia", "Nina", "Oscar", "Paul", "Quinn", "Rita"],
        concertLocations: ["London, UK", "Texas, USA"],
        creationDate: 2010,
        firstAlbumDate: 2012
    }
    // Add more artists/bands here
];

// Get elements for filter controls
const statesSelect = document.getElementById("states");
const citiesSelect = document.getElementById("cities");
const membersCheckboxes = document.querySelectorAll(".members-checkbox");
const creationRange = document.getElementById("creation-range");
const albumRange = document.getElementById("album-range");
const creationRangeValue = document.getElementById("creation-range-value");
const albumRangeValue = document.getElementById("album-range-value");

// State and City data
const locationsData = {
    USA: {
        cities: ["New York", "Los Angeles", "Texas", "Austin", "Dallas"]
    },
    UK: {
        cities: ["London", "Manchester"]
    }
};

// Event listeners for filters
statesSelect.addEventListener("change", updateCityFilter);
citiesSelect.addEventListener("change", filterResults);  // Add listener for city change
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", filterResults);
});
creationRange.addEventListener("input", updateCreationDateRange);
albumRange.addEventListener("input", updateAlbumDateRange);

// Update city filter based on the selected state
function updateCityFilter() {
    const selectedState = statesSelect.value;
    citiesSelect.innerHTML = "<option value=''>Select City</option>";  // Clear current cities

    if (selectedState && locationsData[selectedState]) {
        locationsData[selectedState].cities.forEach(city => {
            const cityOption = document.createElement("option");
            cityOption.value = `${city}, ${selectedState}`;
            cityOption.textContent = city;
            citiesSelect.appendChild(cityOption);
        });
    }
    filterResults();  // Apply filter immediately
}

// Update Creation Date Range values dynamically
function updateCreationDateRange() {
    creationRangeValue.textContent = `From: ${creationRange.value} to: 2025`;
    filterResults();
}

// Update First Album Date Range values dynamically
function updateAlbumDateRange() {
    albumRangeValue.textContent = `From: ${albumRange.value} to: 2025`;
    filterResults();
}

// Filter the results based on selected filters
function filterResults() {
    const selectedState = statesSelect.value;
    const selectedCity = citiesSelect.value;
    const selectedMembers = Array.from(membersCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => parseInt(checkbox.value, 10));
    const creationDateValue = parseInt(creationRange.value, 10);
    const albumDateValue = parseInt(albumRange.value, 10);

    const filteredArtists = artists.filter(artist => {
        // Check if the artist has at least one of the selected members count
        const hasSelectedMemberCount = selectedMembers.length === 0 || selectedMembers.includes(artist.members.length);

        // Check if the artist's location matches any selected location
        const hasSelectedLocation = (selectedState === "" || artist.concertLocations.some(location => location.includes(selectedState)))
            && (selectedCity === "" || artist.concertLocations.some(location => location.includes(selectedCity)));

        // Check if the artist's creation date is within the selected range
        const isWithinCreationDate = artist.creationDate >= creationDateValue && artist.creationDate <= 2025;

        // Check if the artist's first album date is within the selected range
        const isWithinAlbumDate = artist.firstAlbumDate >= albumDateValue && artist.firstAlbumDate <= 2025;

        return hasSelectedMemberCount && hasSelectedLocation && isWithinCreationDate && isWithinAlbumDate;
    });

    displayResults(filteredArtists);
}

// Display the filtered results
function displayResults(filteredArtists) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = filteredArtists.length === 0
        ? "No artists match the selected filters."
        : filteredArtists.map(artist => `<div>${artist.name} - ${artist.members.length} members - Creation: ${artist.creationDate} - First Album: ${artist.firstAlbumDate}</div>`).join("");
}

// Initialize filters
updateCityFilter();  // Populate cities based on default selected state
filterResults();  // Apply initial filter
