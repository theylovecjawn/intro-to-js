let myForm = document.getElementById("myForm")

let synth = new Tone.Synth().toDestination()


function onSubmit(e){
    e.preventDefault()
    let duration = parseFloat(myForm.elements["duration"].value)
    synth.triggerAttack(myForm.elements["yourName"].value)
    synth.triggerRelease(Tone.now() + duration)
    

}

myForm.addEventListener('submit', onSubmit)