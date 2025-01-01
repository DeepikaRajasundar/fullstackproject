import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffect = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => {
                console.log(res.data);
                setPost(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section>
            <h1>Fetching Data from JSON Placeholder API</h1>
            <ol>
                {post.map((data) => (
                    <li key={data.userId}>{data.title}</li>
                ))}
            </ol>
        </section>
    );
};

export default UseEffect;

/*
import React, { useState, useEffect } from 'react';
const UseEffectExample = () => {
    const [text, setText] = useState("Kongu");
    useEffect(() => {
        setText("KEC");
    }, []);
    return (
        <section>
            <h1>UseEffect Example</h1>
            <input
                type="text"
                placeholder="Enter your text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h2>Text typed is {text}</h2>
        </section>
    );
};
export default UseEffectExample;
*/

