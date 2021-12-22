const config = require("config");

const mapper = (listing_univ) => {
	const baseUrl = config.get("assetsBaseUrl");
	const mapImage = (image) => ({
		url: `${baseUrl}${image.fileName}_full.jpg`,
		thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
	});
    const mapProfile = (profile) => ({
        url: `${baseUrl}${profile.fileName}.jpg`
    })

	return {
		...listing_univ,
		images: listing_univ.images.map(mapImage),
        profile: listing_univ.profile.map(mapProfile),
	};
};

module.exports = mapper;
