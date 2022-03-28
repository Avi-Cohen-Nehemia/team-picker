export const addPlayer = (data) => {
	return {
		type: "ADD_PLAYER",
		player: {
			name: data.playerName,
			skillLevel: data.playerSkillLevel,
		} 
	};
};

export const removePlayer = (index) => {
	return {
		type: "REMOVE_PLAYER",
		index: index,
	};
};

export const generateTeams = () => {
	return {
		type: "GENERATE_TEAMS",
	}
}

export const selectTeamAKit = (data) => {
	return {
		type: "SELECT_TEAM_A_KIT",
		teamA: {
			kit: data,
		} 
	}
}

export const selectTeamBKit = (data) => {
	return {
		type: "SELECT_TEAM_B_KIT",
		teamB: {
			kit: data,
		} 
	}
}

export const selectTeamAColor = (data) => {
	return {
		type: "SELECT_TEAM_A_COLOR",
		teamA: {
			color: data,
		} 
	}
}

export const selectTeamBColor = (data) => {
	return {
		type: "SELECT_TEAM_B_COLOR",
		teamB: {
			color: data,
		} 
	}
}

export const setTeamsNames = (data) => {
	return {
		type: "SET_TEAMS_NAMES",
		teamA: {
			name: data.teamAName
		},
		teamB: {
			name: data.teamBName
		} 
	}
}

export const incrementTeamAScore = () => {
	return {
		type: "INCREMENT_TEAM_A_SCORE",
	}
}

export const incrementTeamBScore = () => {
	return {
		type: "INCREMENT_TEAM_B_SCORE",
	}
}

export const resetScore = () => {
	return {
		type: "RESET_SCORE",
	}
}

export const resetGame = () => {
	return {
		type: "RESET_GAME",
	}
}