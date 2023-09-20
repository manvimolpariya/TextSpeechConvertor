let speech =new SpeechSynthesisUtterance();
let listenBtn=document.getElementById("btn");
let textArea=document.querySelector("textarea");
let voices=[];
let voiceSelect= document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
voices= window.speechSynthesis.getVoices();
speech.voice=voices[0];
voices.forEach((voice,i)=>(voiceSelect.options[i]= new Option(voice.name , i)))
}
listenBtn.addEventListener("click",()=>{
    speech.text=textArea.value;
    window.speechSynthesis.speak(speech);
});
 voiceSelect.addEventListener("change",()=>{
     speech.voice=voices[voiceSelect.value];
 })