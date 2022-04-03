const LIKE = 'like'
const UNLIKE = 'unlike'

export const likeCharacter = (character) => ({
    type: LIKE,
    character
})

export const unlikeCharacter = (character) => ({
    type: UNLIKE,
    character
})

const initialState = {
    likedCharacters: [],
}

export default (state = initialState, action) => {
    switch(action.type) {        
        case LIKE:
            console.log(action.character)
            if(state.likedCharacters.length && state.likedCharacters.some(character => character === action.character)){
                window.alert('Character already liked')
                return state                
            }
            return {...state, likedCharacters: [...state.likedCharacters, action.character]}
            //return state
        case UNLIKE:            
            console.log(action.character)
            if (state.likedCharacters.length < 1) {
                console.log('nothing to remove')
                return state
            }
            console.log('will remove liked characters')
            return {...state, likedCharacters: (state.likedCharacters.filter(character => character === action.character ? null : character))}
        default:
            console.log('undefined action')
            return state
    }
}