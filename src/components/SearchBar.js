import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <>
            <div className='row justify-content-md-center'>
                <div className='nes-container with-title'>
                    <h2 class="title">Search</h2>
                    <div className='col-md-auto'>
                        <input className='nes-input' type="text" list="pokemonList" />
                        <datalist className='nes-container is-rounded' id="pokemonList">
                            {props.results.map((e, i) => {
                                return <option className='nes-container is-rounded' key={i}>{e}</option>
                            })}
                        </datalist>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar;