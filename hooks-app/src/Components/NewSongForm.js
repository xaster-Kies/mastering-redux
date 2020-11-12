import React, { useState } from 'react'

export const NewSongForm = () => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Song name: </label>
                <input type="text" required onChange={e => setTitle(e.target.value)}/>
                <input type="submit" value="add song" />
            </form>
        </div>
    )
}
