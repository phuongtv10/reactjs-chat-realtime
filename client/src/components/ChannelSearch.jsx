import React, { useState, useEffect } from 'react';
import { useChatContext } from "stream-chat-react";
import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg'

export const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async (text) => {
        try {

        } catch (error) {
            setQuery('')
        }
    }

    const onSearch = (event) => {
        event.defaultPrevented();
        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }

    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>
                <input className='channel-search__input__text' placeholder='Search' type='text'
                    value={query} onChange={onSearch} />
            </div>
        </div>
    )
}
export default ChannelSearch
