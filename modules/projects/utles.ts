export const getInitials = (name: string) => {
	if (!name) return '??';

	const parts = name.trim().split(' ');
	if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();

	return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const getAvatarColor = (name: string) => {
	const colors = [
		'bg-red-500',
		'bg-blue-500',
		'bg-green-500',
		'bg-yellow-500',
		'bg-purple-500',
		'bg-pink-500',
		'bg-orange-500',
	];

	// generate a number based on the sum of the name characters
	const charCodeSum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return colors[charCodeSum % colors.length];
};
