import {useState} from 'react'
import styles from './CreateForm.module.css'
import Navbar2 from '../component/Navbar2';
import Sidebar from '../component/Sidebar';
import { createform } from '../services/createform';
export default function CreateForm() {
     const [bgColor, setBgColor] = useState("black");
      const [color, setColor] = useState("white");
      const [formTitle, setFormTitle] = useState("");
      const [bubbles, setBubbles] = useState([]);
      const [inputs, setInputs] = useState([]);
      const [fields, setFields] = useState([]);
      const[formName,setFormName]=useState('')
      const [formId, setFormId] = useState(null);
      const [displayedItems, setDisplayedItems] = useState([]);
      const [items, setItems] = useState([]);
      const [formElements, setFormElements] = useState([]);
      const [interactionSequence, setInteractionSequence] = useState([]);
      const [elements, setElements] = useState([]);

      function handleModeChange(isDarkMode) {
        if (isDarkMode) {
          setBgColor("black");
          setColor("white");
        } else {
          setBgColor("white");
          setColor("black");
        }
      }

      const handleAddBubble = (type) => {
        setElements([...elements, { type, content: "", isBubble: true }]);
      };
      const handleAddInput = (type) => {
        setElements([...elements, { type, placeholder: "", isInput: true }]);
      };
    
      const handleElementChange = (index, key, value) => {
        const updatedElements = [...elements];
        updatedElements[index][key] = value;
        setElements(updatedElements);
      };
    
      // Handle Change in Bubble Content (Text or Image)
      
    
    
      const handleSaveForm = async () => {
       
    const formData = {
      title: formName,
      elements, // Save the exact combined structure
    };
    
        try {
          const response = await createform(formData); // API call
          alert("Form saved successfully!");
          const formId=response.data.formId;
          setFormId(formId)
          console.log(response.data);
        } catch (error) {
          console.error("Error saving form:", error);
          alert("Failed to save form.");
        }
      };

   

  return (
    <div className={styles.container} style={{backgroundColor:bgColor,color:color,height:"100vh"}}>
         <Navbar2 onModeChange={handleModeChange}   formName={formName}
         setFormName={setFormName} onSave={handleSaveForm} formId={formId}/>

<div className={styles.formContainer}>
<div>
  <Sidebar onAddBubble={handleAddBubble} onAddInput={handleAddInput}/>
</div>
<div>
          {elements.map((element, index) => (
            <div key={index}>
              {element.isBubble && (
                <div>
                  <h4>{element.type.charAt(0).toUpperCase() + element.type.slice(1)} Bubble</h4>
                  <input
                    type="text"
                    value={element.content}
                    onChange={(e) => handleElementChange(index, "content", e.target.value)}
                    placeholder={`Enter ${element.type === "text" ? "text" : "image URL"}`}
                  />
                </div>
              )}
              {element.isInput && (
                <div>
                  <h4>{element.type.charAt(0).toUpperCase() + element.type.slice(1)} Input</h4>
                  <input
                    type="text"
                    value={element.placeholder}
                    onChange={(e) => handleElementChange(index, "placeholder", e.target.value)}
                    placeholder={`Enter placeholder for ${element.type}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}