import { useState } from "react";

export default function AccessPage() {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");
  const [listOneUnlocked, setListOneUnlocked] = useState(false);
  const [listTwoUnlocked, setListTwoUnlocked] = useState(false);
  const [secretMessageVerified, setSecretMessageVerified] = useState(false);

  const validQuestion = ["Could I be your GF", "Could i be your GF","could i be your GF","Could i be your gf","could i be your gf","COULD I BE YOUR GF","Could I be your gf"];
  const validAnswer = ["SI", "si", "yes","Sí","YES","sí","Si","SÍ"];
  const validSecretMessage = ["Our first kiss date","OUR FIRST KISS DATE","Our First Kiss Date"];
  const validDateQuestion = "Escribe la respuesta amor (La fecha importante dd/mes/año)";
  const validDate = ["20/nov/22","20/11/22","20/noviembre/22","20/11/2022","20/noviembre/2022"];

  const listOne = [
    { id: 1, text: "Hermano de Pinky ($25) - Centro Comercial/App", link: "https://a.co/d/4XTfEa6" },
    { id: 2, text: "Cadena ($15) - App", link: "https://a.co/d/3d3ZlI5" },
    { id: 3, text: "Alexa ($60) - App", link: "https://a.co/d/3zdAagl" }
  ];

  const listTwo = [
    { id: 1, text: "Zapatos deportivos/tacos/botas/Carrito Shein ($100) - Centro Comercial o App", link: "https://es.shein.com/Women-Pants-c-1740.html" },
    { id: 2, text: "Cabello ($50)", link: "https://www.example.com" }
  ];

  const handleListOneUnlock = () => {
    if (validQuestion.includes(code)) {
      setListOneUnlocked(true);
    } else {
      alert("Código incorrecto");
    }
  };

  const handleAnswerSubmit = () => {
    if (validAnswer.includes(answer)) {
      setStep(3);
    } else {
      alert("Respuesta incorrecta");
    }
  };

  const handleSecretMessageSubmit = () => {
    if (validSecretMessage.includes(code)) {
      setSecretMessageVerified(true);
      setStep(5);
    } else {
      alert("Mensaje incorrecto");
    }
  };
  
  const handleDateSubmit = () => {
    if (validDate.includes(answer)) {
      setListTwoUnlocked(true);
      setStep(6);
    } else {
      alert("Fecha incorrecta");
    }
  };
  

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px", textAlign: "center", backgroundColor: "#fff0f5" }}>
      {step === 0 && (
        <>
          <h1 style={{ fontSize: "30px", fontWeight: "bold", color: "#e91e63", textShadow: "2px 2px 4px #ff4081" }}>💕 Buenos días cumpleañera y amor mío 💕</h1>
          <button onClick={() => setStep(1)} style={{ backgroundColor: "#ff4081", color: "white", padding: "10px", borderRadius: "10px" }}>Avanza a la otra página guapa</button>
        </>
      )}

      {step === 1 && (
        <>
          <h2 style={{ color: "#ff1493" }}>💖 Descubre cuál es la primera pregunta (que te hago yo) y escríbela amor 💖</h2>
          <p style={{ color: "#d63384" }}>Pista 1: Correos del 1 al 14 de marzo 💌</p>
          <p style={{ color: "#d63384" }}>Pista 2: Mensaje formado por la primera letra de cada correo 💭</p>
          <p style={{ color: "#d63384" }}>Pista 3: Pregunta hecha el día de tu cumpleaños anterior 🌹</p>
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Adivina adivinador 👀" />
          <button onClick={handleListOneUnlock}>Verifica si esa es la pregunta amor</button>
          <button onClick={() => setStep(0)}>Regresa a la anterior página cielo</button>
        </>
      )}

      {listOneUnlocked && step === 1 && (
        <>
          <h2 style={{ color: "#ff69b4" }}>💞 Para no perder la costumbre de volver a ser novias en tu cumpleaños 💞</h2>
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Su respuesta señorita 👀" />
          <button onClick={handleAnswerSubmit}>Desbloquear la lista 1 </button>
        </>
      )}

      {step === 3 && (
        <>
          <h1>Felicidades amor💞 Aquí tiene su primera Wishlist</h1>
          <h2>Puede dar clic en los enlaces para ver sugerencias</h2>
          {listOne.map((item) => (
            <div key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
            </div>
          ))}
          <button onClick={() => setStep(4)}>Ir a la lista 2 amor</button>
          <button onClick={() => setStep(1)}>Regresar a la anterior página guapa</button>
        </>
      )}

      {step === 4 && (
        <>
          <h2>💖 Descubre cuál es la segunda pregunta (que te hago yo) y escríbela guapa 💖</h2>
          <p style={{ color: "#d63384" }}>Pista 1: Correos del 15 al 28 💌</p>
          <p style={{ color: "#d63384" }}>Pista 2: Primera letra de cada correo 💭</p>
          <p style={{ color: "#d63384" }}>Pista 3: Referencia a una fecha importante nuestra 🌹</p>
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Adivina adivinador X2 👀" />
          <button onClick={handleSecretMessageSubmit}>Verifica si esa es la pregunta amor</button>
          <button onClick={() => setStep(3)}>Regresa a la anterior página cielo</button>
        </>
      )}

      {secretMessageVerified && step === 5 && (
        <>
          <h2 style={{ color: "#ff1493" }}>💗 Amé sentir tu amor por primera vez en ese beso 💗</h2>
          <h3>Escribe la fecha amor dd/mes/año</h3>
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="No puedes fallar🧐" />
          <button onClick={handleDateSubmit}>Verifica si esa es la respuesta guapa</button>
          <button onClick={() => setStep(4)}>Regresar</button>
        </>
      )}

      {listTwoUnlocked && step === 6 && (
        <>
          <h1>Felicidades amor💞 Aquí tiene su segunda Wishlist</h1>
          <h2>Puede dar clic en los enlaces para ver sugerencias</h2>
          {listTwo.map((item) => (
            <div key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
            </div>
          ))}
          <button onClick={() => setStep(5)}>Y eso es todo amor :)</button>
        </>
      )}
    </div>
  );
}
