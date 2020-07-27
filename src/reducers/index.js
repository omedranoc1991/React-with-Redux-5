import {combineReducers} from 'redux'

const songsReducers = ()=>{
    return[
        {title : 'this is america', duration : '4:05'},
        {title : 'bad to the bone', duration : '5:15'},
        {title : 'I dont wanna miss a thing' , duration : '4:35'},
        {title : 'angel', duration :'6:08'}
    ]
}

const selectedSongReducer = (selectedSong = null , action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs : songsReducers,
    selectedSong : selectedSongReducer

})