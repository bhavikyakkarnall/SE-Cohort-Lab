import {useState} from 'react';

function Emoji() {

    const [mood, setMood] = useState(String.fromCodePoint('0x1f603'));

    const handleMoodChange = () => {
        if(mood == String.fromCodePoint('0x1f603')){
            setMood(String.fromCodePoint('0x1F641'));
        }
        else {
            setMood(String.fromCodePoint('0x1f603'));
        }
        
    }

    return (
        <>
            <div>
                Current Mood: {mood}
            </div>
            <button onClick={handleMoodChange}>Change Mood</button>
        </>
    )
}

export default Emoji;

