const messages = [
	{
		fromUserId: 1,
		toUserId: 1,
		listingId: 3,
		content: "J'aimerai m'inscrire à ce programme le plus rapidement possible",
		id: 1,
		dateTime: 1586044521956,
	},
	{
		fromUserId: 2,
		toUserId: 1,
		listingId: 2,
		content: "Pouvez-vous me donner plus d'information relatives aux frais de scolarité pour ce programmes?",
		id: 2,
		dateTime: 1586044521956,
	},
	{
		fromUserId: 3,
		toUserId: 1,
		listingId: 1,
		content: "J'aimerais savoir la date limite pour postuler à ce programme",
		id: 3,
		dateTime: 1586044521956,
	},
];

const getMessagesForUser = (toUserId) =>
	messages.filter((message) => message.toUserId === toUserId);

const add = (message) => {
	message.id = messages.length + 1;
	message.dateTime = Date.now();
	messages.push(message);
};

module.exports = { add, getMessagesForUser };
