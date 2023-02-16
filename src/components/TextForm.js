import React , {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=> {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  
    }


    const handlelowClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        
}




    // const handlespeak = ()=> {
      
    //     let { speak } = useSpeechSynthesis()
    //     let text = 'welcome its speech sunthesis'
      
    //     setText(text)
      
    //     }

    const handleClearClick = () => {
        let text = ""
        setText(text)
    }
   
// using split reverse join method 
//short cut
// const handleReserveClick = ()=> {
//     let sentence = text.split("").reverse("").join("");
//     setText(sentence);
// }


// or  long method


const handleReserveClick = ()=> {
    let sentence = text.split("");
    let hello = sentence.reverse("");
    let yello = hello.join("");
    setText(yello);
}

// using reduce method
    // const handleReserveClick = () =>{
    //     let word = [...text].reduce((prev ,next) => next + prev);
    //     setText(word);
    // }

 


const handleOnChange = (event)=>{
// console.log("On change");
setText(event.target.value);
}



    const [text, setText] = useState('');


    // text = "new text";    //wrong way

    // setText("new text");    // correct way to change the state
      
    
    
    return (
<>
<div className="container" style={{color:props.mode==='dark'? 'white':'black'}} >
    
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="mybox"  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}} value = {text} rows="9"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to Uppercase</button>
<button className='btn btn-primary' onClick={handlelowClick}> Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}> Clear Text</button>

<button className='btn btn-primary mx-2' onClick={handleReserveClick}> Reverse Text</button>


    </div>

    <div className="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>     
        {/* for characters and word count we use split and length */}

        <p>{0.008 * text.split(" ").length } Minutes for reading</p>
        <h2>Text Preview</h2>
        <p>{text.length>0? text:"Enter something to Preview here"}</p>
    </div>
    </>
  )
}



//  use of usestate  (hooks)  usestate hook help to create text
// set text is used to set text 


// on chnage is used for typing
// on click for clicking the button
