/* GET home page */
const index = function(req, res){
    res.render('index', {
        title: 'Welcome to Lodger',
        logo: 'Lodger',
        motto: 'Lodger, stays in extraordinary destinations.',
        description: "By selecting locations where culture, comfort, and local character merge, we offer guests not " +
            "just a place to stay, but a gateway to discover and support vibrant communities around the world.",
        lodges: [
            {
                imageURL: "https://placehold.co/400/green/orange",
                name: 'The Emerald Retreat',
                city: 'Dublin',
                country: 'Ireland',
                rating: 92,
                description: "Nestled in the heart of Dublin, The Emerald Retreat offers a cozy stay with a mix of modern amenities and Irish charm. Perfect for travelers looking to explore the historic sites and vibrant nightlife of the city.",
                bedrooms: 3,
                bathrooms: 2,
            },
            {
                imageURL: "https://placehold.co/400/orange/red",
                name: 'Royal Palace Lodge',
                city: 'London',
                country: 'United Kingdom',
                rating: 78,
                description: "Located near Hyde Park, this elegant lodge offers spacious rooms, Victorian-style decor, and quick access to London’s iconic landmarks. Ideal for families and business travelers alike.",
                bedrooms: 4,
                bathrooms: 3,
            },
            {
                imageURL: "https://placehold.co/400/blue/white",
                name: 'Canal View Inn',
                city: 'Amsterdam',
                country: 'Netherlands',
                rating: 85,
                description: "Experience the charm of Amsterdam at Canal View Inn, with picturesque views of the canals and close proximity to the city's famous museums and cafes. A serene stay with modern comforts.",
                bedrooms: 2,
                bathrooms: 2,
            },
            {
                imageURL: "https://placehold.co/400/yellow/green",
                name: 'Parisian Loft',
                city: 'Paris',
                country: 'France',
                rating: 91,
                description: "A chic and romantic loft in the heart of Paris, just steps away from the Eiffel Tower and the Seine River. Perfect for couples and solo travelers seeking an authentic Parisian experience.",
                bedrooms: 1,
                bathrooms: 1,
            },
            {
                imageURL: "https://placehold.co/400/purple/yellow",
                name: 'Alpine Haven',
                city: 'Interlaken',
                country: 'Switzerland',
                rating: 96,
                description: "A scenic mountain retreat in the Swiss Alps, offering breathtaking views and a cozy, rustic feel. Ideal for nature lovers and adventurers looking to explore the great outdoors.",
                bedrooms: 3,
                bathrooms: 2,
            },
            {
                imageURL: "https://placehold.co/400/gray/black",
                name: 'Seaside Cottage',
                city: 'Santorini',
                country: "Greece",
                rating: 88,
                description: "A quaint, whitewashed cottage overlooking the Aegean Sea, this lodge is perfect for a relaxing getaway. Enjoy stunning sunsets, pristine beaches, and Greek hospitality.",
                bedrooms: 2,
                bathrooms: 2,
            },
        ]
    });
};
module.exports = {
    index
};