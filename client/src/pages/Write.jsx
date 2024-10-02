import React , { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// label represent the input

const Write = () => {
        const [value, setValue] = useState("");
        return (
                <div className="add">
                        <div className="content">
                                <input type="text" placeholder="Title"/>
                                <div className="editorContainer">
                                        <ReactQuill
                                                className="editor"
                                                theme="snow"
                                                value={value}
                                                onChange={setValue}
                                        />
                                </div>
                        </div>
                        <div className="menu">
                                <div className="item">
                                        <h1>Publish</h1>
                                        <span>
                                                <b>Status: </b> Draft
                                        </span>
                                        <span>
                                                <b>Visibility: </b> Public
                                        </span>
                                        <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="file"
                                                name=""
                                        />
                                        <label className="file" htmlFor="file"> 
                                                Upload Image
                                        </label>
                                        <div className="buttons">
                                                <button>Save as a draft</button>
                                                <button>Publish</button>
                                        </div>  
                                </div>
                                <div className="item">
                                        <h1> Category</h1>
                                        <div className="cat">
                                        <input type="radio" name="cat" value="art" id="art"></input>
                                        <label htmlFor="science">Art </label>
                                        </div>
                                        <div className="cat">
                                        <input type="radio" name="cat" value="science" id="science"></input>
                                        <label htmlFor="art">science</label>
                                        </div>
                                        <div className="cat">
                                        <input type="radio" name="cat" value="technology" id="technology"></input>
                                        <label htmlFor="art">technology</label>
                                        </div>
                                        <div className="cat">
                                        <input type="radio" name="cat" value="cinema" id="cinema"></input>
                                        <label htmlFor="art">cinema</label>
                                        </div>
                                        <div className="cat">
                                        <input type="radio" name="cat" value="design" id="design"></input>
                                        <label htmlFor="art">design</label>
                                        </div>
                                        <div className="cat">
                                        <input type="radio" name="cat" value="food" id="food"></input>
                                        <label htmlFor="art">food</label>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Write 
