const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went outside to enjoy the sun. When it got to :inserty:, it started sprinting away, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and there was something larger following it.';

const insertX = ['the bunny', 'the dog', 'the cat'];
const insertY = ['the neighbors house', 'the park', 'the pool'];
const insertZ = ['began flying', 'climbed up a tree', 'transformed into a gnat and flew away'];

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(':insertx:' ,xItem);
newStory = newStory.replaceAll(':inserty:' ,yItem);
newStory = newStory.replaceAll(':insertz:' ,zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.071428571428667)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

