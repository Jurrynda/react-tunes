import React, { useState } from 'react'
import axios from 'axios'

//children
import TunesList from '../components/tunes/TunesList'
import TunesSeachForm from '../components/tunes/TunesSearchForm'

//data types
interface itunesSong {
    trackId: number
    artistName: string
    previewUrl: string
    artworkUrl100: string
    trackName: string
    collectionName: string
    kind?: string
}

//component
const Tunes = () => {
    //state
    const [title] = useState('Tunes')
    const [songs, setSongs] = useState([])

    //callback
    const handleSearch = (query: string) => {
        axios
            .get(
                `
        https://itunes.apple.com/search?term=${query}&entity=musicTrack
        &limit=5. 
      `,
            )
            .then((response) => {
                let iTunesSongs = response.data.results
                    .filter((song: any) => song.kind === 'song')
                    .map((song: any) => extractData(song))

                setSongs(iTunesSongs)
            })
    }

    const extractData = ({
        trackId: id,
        artistName: artist,
        previewUrl: audioFile,
        artworkUrl100: artwork,
        trackName: title,
        collectionName: album,
    }: itunesSong) => {
        return {
            id,
            artist,
            audioFile,
            artwork,
            title,
            album,
        }
    }

    //template
    return (
        <div className="tunes">
            <h1>{title}</h1>
            <TunesSeachForm onSearch={handleSearch} />
            <TunesList songs={songs} />
        </div>
    )
}

export default Tunes
