import './HelloWorld.css'
import { useState, useEffect } from "react";

function HelloWorld() {
  const messages = ['console.log("Hello world!")', 'print("Hello world!")'];
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mID, setmID] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true); // Stan do kontrolowania kursora
  const [isTypingDone, setIsTypingDone] = useState(false); // Sprawdzanie, czy tekst jest już zapisany
  const [cursorFlashCount, setCursorFlashCount] = useState(0); // Licznik mignięć kursora

  useEffect(() => {
    const interval = setInterval(() => {
      let message = messages[mID];

      if (!isDeleting) {
        // Jeśli tekst nie jest jeszcze zapisany
        if (index < message.length) {
          setDisplayedMessage((prev) => prev + message[index]);
          setIndex(index + 1);
        } else {
          // Gdy cały tekst jest zapisany, zaczynamy miganie kursora
          setIsTypingDone(true);
        }
      } else {
        // Jeśli tekst jest usuwany
        if (index > 0) {
          setDisplayedMessage((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else {
          // Po usunięciu tekstu, przechodzimy do następnej wiadomości
          setIsDeleting(false);
          setmID((prevID) => (prevID + 1) % messages.length); // Przechodzimy do następnej wiadomości w pętli
          setIndex(0); // Resetujemy indeks, aby rozpocząć ponownie
          setDisplayedMessage(""); // Resetujemy tekst
          setIsTypingDone(false); // Resetujemy status pisania
          setCursorFlashCount(0); // Resetujemy licznik migania kursora
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [index, isDeleting]);

  useEffect(() => {
    if (isTypingDone && cursorFlashCount < 2) {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev); // Zmiana widoczności kursora
      }, 600); // Miganie kursora co 500 ms

      // Po 2 cyklach migania, zaczynamy usuwać tekst
      setTimeout(() => {
        clearInterval(cursorInterval);
        setCursorFlashCount((prevCount) => prevCount + 1);
        if (cursorFlashCount === 1) {
          setIsDeleting(true); // Zaczynamy usuwanie tekstu po miganiu
        }
      }, 2000); // Poczekaj 1 sekundę przed rozpoczęciem usuwania tekstu

      return () => clearInterval(cursorInterval);
    }
  }, [isTypingDone, cursorFlashCount]);

  return (
    <div>
      <p>
        {displayedMessage}
        {cursorVisible ? "|" : "\u00A0"}
      </p>
      <h1>Jestem Rafał</h1>
    </div>
  );
}

export default HelloWorld;
