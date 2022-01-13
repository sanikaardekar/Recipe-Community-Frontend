import React, {useState} from "react";
import './Tags.css';
import ClearIcon from '@mui/icons-material/Clear';

const TagsInput = (props) => {
    const [tags, setTags] = React.useState(props.tagList);
    const removeTags = (indexToRemove) => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);//if index is not equal to indexToRemove then those elements stay, if index is equal to indexToRemove then that element is removed
        props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)])
	};
    const addTags = (e)=>{
        if(e.target.value !== ''){
            setTags([...tags, e.target.value]);
            props.selectedTags([...tags, e.target.value]);
            e.target.value = '';
        }
    };
    return(
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index)=>(
                    <li key={index} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							<ClearIcon fontSize="small"/>
						</span>
                    </li>
                ))}
            </ul>
            <input type="text" onKeyUp={(e)=>e.key === "Enter" ? addTags(e) : null}
            placeholder=" Add Tags"/>
        </div>
    )
}
export default function Tags(){
    const selectedTags = tags =>{
        console.log(tags);
    }
    return(<>
    <TagsInput selectedTags={selectedTags} tagList={['veg', 'vegan']}/>
</>);
}