
let noun = prompt('Enter a noun:')
let number = prompt('Enter a number:')
let verb = prompt('Enter a verb:')
let adjective = prompt('Enter an adjective:')
let pluralNoun = prompt('Enter an plural noun:')
let place = prompt('Enter an place:')
let story= `On the stroke of midnight, in the world of ${noun},${number} friends gathered, feeling ${adjective} and soon, With glasses in hand, ready to ${verb} and cheer, As fireworks lit up the sky, making the night so clear.They reminisced about the ${adjective} moments gone by, Facing challenges and celebrating victories with a sigh.Resolutions were made for the coming year, From learning new ${pluralNoun} to exploring ${place} with cheer. At the twelfth stroke, the town erupted in glee, A joyous celebration, full of laughter and esprit. As the clock reset, the friends embraced the New Year, Ready for ${adjective} adventures, full of hope and cheer.;`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`

