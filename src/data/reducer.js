//importing initialState to make it available to the reducer
import initialState from "./initialState";

// adding the new player to the playersPool
const addPlayer = (state, action) => {
	if (state.playersPool.length < 12) {
		return {
			...state,
			playersPool: [...state.playersPool, action.player]
		}
	} else {
		return {
			...state,
			playersPool: [...state.playersPool],
		}
	}
};

// remove a specific player
const removePlayer = (state, { index }) => {
	return {
		...state,
		playersPool: state.playersPool.filter((_, i) => i !== index)
	}
};

// shuffle the players pool
const shufflePlayers = (state) => {
	return {
		...state,
		playersPool: [...state.playersPool.sort(() => Math.random() - 0.5)]
	}
}

// generate the teams and store them in state
const generateTeams = (state) => {
	const { playersPool, teamA, teamB } = state;

	const half = Math.ceil(playersPool.length / 2);    
	const firstHalf = playersPool.slice(0, half)
	const secondHalf = playersPool.slice(-half)

	return {
		...state,
		teamA: {
			...teamA,
			players: firstHalf,
		},
		teamB: {
			...teamB,
			players: secondHalf,
		}
	}
}

// calculate the teams total skill level
const totalSkillLevel = (state) => {
	const { teamA, teamB } = state;
    
	let teamASkill = teamA.players.reduce((acc, player) => {
		return acc + player.skillLevel.length
	}, 0)

	let teamBSkill = teamB.players.reduce((acc, player) => {
		return acc + player.skillLevel.length
	}, 0)

	return {
		...state,
		teamA: {
			...teamA,
			totalSkillLevel: teamASkill,
		},
		teamB: {
			...teamB,
			totalSkillLevel: teamBSkill,
		}
	}
}

const selectTeamKit = (state, action) => {
	return {
		...state,
		[action.team]: {
			...state[action.team],
			kit: action.kit
		},
	}
}

const selectTeamColor = (state, action) => {
	return {
		...state,
		[action.team]: {
			...state[action.team],
			color: action.color
		},
	}
}

const setTeamsNames = (state, action) => {
	return {
		...state,
		teamA: {
			...state.teamA,
			name: action.teamA.name
		},
		teamB: {
			...state.teamB,
			name: action.teamB.name
		},
	}
}

const incrementTeamAScore = (state) => {
	return {
		...state,
		teamA: {
				...state.teamA,
				score: +state.teamA.score + 1
		},
	}
}

const incrementTeamBScore = (state) => {
	return {
		...state,
		teamB: {
			...state.teamB,
			score: +state.teamB.score + 1
		},
	}
}

const resetScore = (state) => {
	return {
		...state,
		teamA: {
			...state.teamA,
			score: 0
		},
		teamB: {
			...state.teamB,
			score: 0
		},
	}
}

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_PLAYER": return addPlayer(state, action);
		case "REMOVE_PLAYER": return removePlayer(state, action);
		case "GENERATE_TEAMS": return totalSkillLevel(generateTeams(shufflePlayers(state)));
		case "SELECT_TEAM_KIT": return selectTeamKit(state, action);
		case "SELECT_TEAM_COLOR": return selectTeamColor(state, action);
		case "SET_TEAMS_NAMES": return setTeamsNames(state, action);
		case "INCREMENT_TEAM_A_SCORE": return incrementTeamAScore(state);
		case "INCREMENT_TEAM_B_SCORE": return incrementTeamBScore(state);
		case "RESET_SCORE": return resetScore(state);
		case "RESET_GAME": return initialState;
		default: return state;
	}
};

export default reducer;