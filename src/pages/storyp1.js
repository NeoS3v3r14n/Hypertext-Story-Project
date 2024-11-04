import React, { useState } from "react";
import Navbar from "../components/navbar/navbarelements"

const storyData = require("../story.json")

const Story = () => {
    const [currentStory, setCurrentStory] = useState('intro');

    const handleChoice = (next) => {
        setCurrentStory(next);
    };
    console.log(storyData[currentStory])

    return (
        <div>
            <Navbar />
            <div className="story-container">
                <div className="story-box">
                    <div className="story-txt">
                        <h3>{storyData[currentStory].text}</h3>
                    </div>
                    
                    <div>
                        {storyData[currentStory]["choices"].length === 1 ?
                            <div className="Buttons">
                                <button className="button" onClick={() => handleChoice(storyData[currentStory]["choices"][0]["next"])}>{storyData[currentStory]["choices"][0]["text"]}</button>
                            </div> :
                            <div className="Buttons">
                                <button className="button" onClick={() => handleChoice(storyData[currentStory]["choices"][0]["next"])}>{storyData[currentStory]["choices"][0]["text"]}</button>
                                <button className="button" onClick={() => handleChoice(storyData[currentStory]["choices"][1]["next"])}>{storyData[currentStory]["choices"][1]["text"]}</button>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Story;