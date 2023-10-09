import React from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import List from './List';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?page=2&query=';

const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
}

const storiesReducer = (state, action) => {
    switch (action.type) {
        case 'STORIES_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'STORIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'STORIES_FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'REMOVE_STORY':
            return {
                ...state,
                data: state.data.filter(
                    story => action.payload.objectID !== story.objectID
                ),
            };
        default:
            throw new Error();
    }
}

const SearchHistories = () => {
    const [searchTerm, setSearchTerm] = useSemiPersistentState(
        'search',
        'React'
    );

    const [histories, setHistories] = React.useState([])

    const [stories, dispatchStories] = React.useReducer(
        storiesReducer,
        { data: [], isLoading: false, isError: false, sortField: 'title', sortOrder: 'asc' }
    );

    const handleFetchStories = React.useCallback(async () => {
        dispatchStories({ type: 'STORIES_FETCH_INIT' });

        try {
            let url = API_ENDPOINT + histories[histories.length - 1]
            const result = await axios.get(url)

            dispatchStories({
                type: 'STORIES_FETCH_SUCCESS',
                payload: result.data.hits,
            });
        } catch {
            dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
        }
    }, [histories]);

    React.useEffect(() => {
        handleFetchStories();
    }, [handleFetchStories]);

    const handleRemoveStory = item => {
        dispatchStories({
            type: 'REMOVE_STORY',
            payload: item,
        });
    };

    const handleSearchInput = event => {
        setSearchTerm(event.target.value);
    };

    const addNewSearchTerm = (searchTerm) => {
        if (histories.some(history => history === searchTerm)) return
        if (histories.length >= 5) {
            histories.shift()
        }
        setHistories(histories.concat(searchTerm))
    }

    const handleSearchSubmit = event => {
        addNewSearchTerm(searchTerm)
        event.preventDefault();
    };

    const handleLastSearch = (searchTerm) => {
        addNewSearchTerm(searchTerm)
    }

    return (
        <div>
            <h1>My Hacker Stories</h1>

            <SearchForm
                searchTerm={searchTerm}
                onSearchInput={handleSearchInput}
                onSearchSubmit={handleSearchSubmit}
            />

            {histories.map((item, index) => (
                <button
                    key={item + index}
                    type="button"
                    onClick={() => handleLastSearch(item)}
                >
                    {item}
                </button>))
            }

            <hr />

            {stories.isError && <p>Something went wrong ...</p>}

            {stories.isLoading ? (
                <p>Loading ...</p>
            ) : (
                <List list={stories.data} onRemoveItem={handleRemoveStory} />
            )}
        </div>
    );
};

export default SearchHistories