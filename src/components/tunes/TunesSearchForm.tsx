import React, { useRef, ChangeEvent, FormEvent } from 'react'
import { debounce } from 'lodash-es'

//styles
import './TunesSearchForm.scss'

// props
interface Props {
    onSearch: (query: string) => void
}

//component
const TunesSeachForm = (props: Props) => {
    //ref
    const searchInput = useRef<HTMLInputElement>(null)

    //input element
    const handleInput = debounce((event: ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    }, 500)

    //submit form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchForMusic()
    }

    //search for music
    const searchForMusic = () => {
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)
    }

    //template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="search"
                    type="text"
                    onChange={handleInput}
                    ref={searchInput}
                    autoFocus
                />
            </form>
        </div>
    )
}

export default TunesSeachForm
