import { useEffect, useState } from "react";

export default function TypeWriter({
  words,
  typeSpeed = 40,   // ms per letter while typing
  deleteSpeed = 30, // ms per letter while deleting
  pause = 1500,     // ms to wait after a word is fully typed
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const finishedTyping = !deleting && text === word;

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (finishedTyping) delay = pause;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <>
      {text}
      <span className="cursor" aria-hidden="true" />
    </>
  );
}