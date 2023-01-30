import React, {useState} from 'react'                  //using rfc this time instead of rafce //using useState hook yayyy
export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case!!!", "success")
    }
    const handleLoClick = () =>{
        let ayo = text.toLowerCase();
        setText(ayo);
        props.showAlert("Converted to Lower Case!!!", "success")
    }
    const handleClearClick = () =>{
        setText("");
        props.showAlert("Text cleared!!!", "success")
    }
    const handleJoinClick = () =>{
        setText (text.split(" ").join("-"));
        props.showAlert("Text joined!!!", "success")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to Clipboard!!!", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);       //done using regex
        setText(newText.join(" "));
        props.showAlert("Spaces handled!!!", "success")
    }

    const handleOnChange = (event) =>{    
        setText(event.target.value);  //vv imp. Event handling for onChange event.  
    }

    const[text, setText] = useState("")   //stuff inside the useState bracket=initial value of text/default state. Can be written as useState("Enter text here") or smth like that
    
    // text= "welkjfhweiu" //wrong way to change the state
    //setText("New text"); //correct way to change the state
  
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" style={{backgroundColor: props.mode==='dark'?'#4c4378':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>  
        {/* the onChange event is added because we cannot change the value of a state directly. the value is taken as value = {text} where text is state. To be able to change that, we NEED onChange event  */}
        </div>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper-Case</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower-Case</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleJoinClick}>Join text</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>     
        {/* googled the time taken to read a word lmao */}
        <h2>PREVIEW</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview here"}</p>

    </div>

  </>
  )
}
