let adjective=prompt('Enter an Adjective:')
let noun=prompt ('Enter A Noun:')
let verb=prompt ('Enter A Verb:')
let adverb=prompt ('Enter A Adverb:')

let story=`On the stroke of midnight, in the world of ${noun},${number} friends gathered,feeling ${adjective} a ${verb} ${noun} ${adverb} ${verb}.`
let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML=`<p>${story}</p>`





On the stroke of midnight, in the world of ${noun},
${number} friends gathered, feeling ${adjective} and soon,
With glasses in hand, ready to ${verb} and cheer,
As fireworks lit up the sky, making the night so clear.

They reminisced about the ${adjective} moments gone by,
Facing challenges and celebrating victories with a sigh.
Resolutions were made for the coming year,
From learning new ${pluralNoun} to exploring ${place} with cheer.

At the twelfth stroke, the town erupted in glee,
A joyous celebration, full of laughter and esprit.
As the clock reset, the friends embraced the New Year,
Ready for ${adjective} adventures, full of hope and cheer.
`;