import { useState, useEffect } from "react";
import "../App.css";

function HelloWorld() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messages = ["console.log('Hello World!')", "print('Hello World!')"];

  useEffect(() => {
    let currentIndex = index;
    let timeout;
    const interval = setInterval(() => {
      setText((prevText) => {
        if (!isDeleting) {
          if (prevText.length < messages[currentIndex].length) {
            return messages[currentIndex].slice(0, prevText.length + 1);
          } else {
            timeout = setTimeout(() => {
              setIsDeleting(true);
            }, 1000); // 1 sekunda przerwy przed usunięciem tekstu
            return prevText;
          }
        } else {
          if (prevText.length > 0) {
            return prevText.slice(0, -1);
          } else {
            setIsDeleting(false);
            setIndex((currentIndex + 1) % messages.length);
            return "";
          }
        }
      });
    }, isDeleting ? 50 : 100); // Szybsze usuwanie tekstu

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index, isDeleting, messages]);

  return <pre>{text}</pre>;
}

export default HelloWorld;