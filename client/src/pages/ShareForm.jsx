import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shareform } from "../services/createform";
import styles from "./ShareForm.module.css";

export default function ShareForm() {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await shareform(id);
        setForm(response.data);
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };

    fetchForm();
  }, [id]);

  if (!form) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2>{form.title}</h2>
      <div className={styles.formContainer}>
        {form.elements.map((element, index) => (
          <div key={index} className={styles.elementContainer}>
            {element.isBubble && (
              <div>
                <h4>{element.type.charAt(0).toUpperCase() + element.type.slice(1)} Bubble</h4>
                {element.type === "text" ? (
                  <p>{element.content}</p>
                ) : (
                  <img src={element.content} alt="Bubble" />
                )}
              </div>
            )}
            {element.isInput && (
              <div className={styles.inputGroup}>
                <button className={styles.actionButton}>Action</button>
                {element.type === "rating" ? (
                  <select>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                ) : element.type === "date" ? (
                  <input type="date" />
                ) : (
                  <input
                    type={element.type}
                    placeholder={element.placeholder}
                    readOnly
                  />
                )}
              </div>
            )}
            {element.type === "button" && (
              <div>
                <button type="button">Submit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
