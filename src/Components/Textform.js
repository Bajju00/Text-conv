import React,{useState} from 'react'

export default function Textform(props) {
const[text, setText] = useState("");
const [outputText, setOutputText] = useState("");

     const handleUpClick = () => {
        let newText = text.toUpperCase();
        
        setOutputText(newText);
     }

     const handleOnChange = (e) => {
      setOutputText(e.target.value);
      setText(e.target.value);
    }

     const handleLoClick = () => {
      let newText = text.toLowerCase();   
         setOutputText(newText);
    }

    const handleToStringClick = () => {
      let newText = text.toString();   
         setOutputText(`"${newText}"`);
    }

    const handleClearClick = () => {   
        
        setOutputText(""); 
        setText("");
    }
  return (
    <>
    <section id='home' className='textform'>
     <div className="container mt-3">
      
      {/* Row for Textareas */}
      
      <div className="row">
        {/* Input Textarea */}
        
        <div className="col-md-6">
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="inputTextArea"
            rows="11"
            placeholder="Enter your text here..."
          ></textarea>
        </div>

        {/* Output Textarea */}
        
        <div className="col-md-6">
          <h3>Converted Text</h3>
          <textarea
            className="form-control"
            value={outputText}
            id="outputTextArea"
            rows="11"
            readOnly
            placeholder="Converted text will appear here..."
          ></textarea>
        </div>
      </div>
    </div>
    <div className='container my-3'>
    <button  className="btn btn-primary mx-2 my-2" onClick={handleUpClick} > Uppercase</button>
    <button  className="btn btn-primary mx-2 my-2" onClick={handleLoClick} > Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleToStringClick}>String</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}> Clear</button>
    {/* <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}> Clear</button> */}
    </div>

    <div className=" mx-1">
    <h3>Your text summary</h3>
    <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
<p>{text.trim().length === 0 ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} Minutes read</p>

    
    </div>
    </section>
    <section id='About' className='about'>
      <h2>About this Text Converter</h2>
      
<p>
This Text Converter is a simple yet powerful tool designed to transform text into various formats with ease.<br/> Whether you need to convert sentences into uppercase, lowercase, capitalize each word, or transform text into a string format, this tool has you covered.

<br/>Additionally, it provides useful text analytics such as word count, character count, and processing time, helping users analyze and modify their text efficiently.

<br/>With a user-friendly interface and quick performance, this text converter is perfect for students, writers, developers, and anyone who frequently works with text transformations.
</p>
    </section>
    </>
   
  )
}
