const love = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(love.match(love));

let because = "You cannot end a sentence with because because because is a conjunction"
console.log(because.match(because))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace('%',''))
console.log(sentence.replace('$','s'))
console.log(sentence.replace('@','e'))