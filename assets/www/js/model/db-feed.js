function createDB()
{

}
createDB.prototype.addWords=function()
{
    var words = [{
                 word_id: 1,
                 word_type: 1,
                 word_text: "Nerd",
                 word_realdef: "A foolish or contemptible person who lacks social skills or is boringly studious."
                 }, {
                 word_id: 2,
                 word_type: 1,
                 word_text: "Geek",
                 word_realdef: "An unfashionable or socially inept person."
                 }, {
                 word_id: 3,
                 word_type: 1,
                 word_text: "Dork",
                 word_realdef: "A contemptible, socially inept person."
                 }, {
                 word_id: 4,
                 word_type: 1,
                 word_text: "Salamander",
                 word_realdef: "A newt-like amphibian that typically has bright markings, once thought able to endure fire."
                 }, {
                 word_id: 5,
                 word_type: 1,
                 word_text: "The Big Bang",
                 word_realdef: "The rapid expansion of matter from a state of extremely high density and temperature which according to current cosmological theories marked the origin of the universe."
                 }, {
                 word_id: 6,
                 word_type: 1,
                 word_text: "The Economy",
                 word_realdef: "The state of a country or region in terms of the production and consumption of goods and services and the supply of money."
                 }, {
                 word_id: 7,
                 word_type: 1,
                 word_text: "The Deficit",
                 word_realdef: "The amount by which something, especially a sum of money, is too small."
                 }, {
                 word_id: 8,
                 word_type: 1,
                 word_text: "Swallow",
                 word_realdef: "Cause or allow (something, especially food or drink) to pass down the throat."
                 }, {
                 word_id: 8,
                 word_type: 1,
                 word_text: "Vacuum",
                 word_realdef: "A space entirely devoid of matter."
                 }];
    localStorage.setItem("WORDS",JSON.stringify(words));
};

createDB.prototype.addDefinitions=function()
{
    var definitions= [{
                      def_id: 1,
                      def_type: 1,
                      def_text: "The softest, squishiest, warmest, most perfect thing imaginable"
                      }, {
                      def_id: 2,
                      def_type: 1,
                      def_text: "A redneck robot"
                      }, {
                      def_id: 3,
                      def_type: 1,
                      def_text: "The inverse of a muffin top"
                      }, {
                      def_id: 4,
                      def_type: 1,
                      def_text: "The act of stealing from a disabled person"
                      }, {
                      def_id: 5,
                      def_type: 1,
                      def_text: "A female hippopotamus"
                      }, {
                      def_id: 6,
                      def_type: 1,
                      def_text: "Justin Bieber\'s left testicle"
                      }, {
                      def_id: 7,
                      def_type: 1,
                      def_text: "The mold growing on the underside of a neglected sponge"
                      }, {
                      def_id: 8,
                      def_type: 1,
                      def_text: "Crying while having sex"
                      }, {
                      def_id: 9,
                      def_type: 1,
                      def_text: "The \'no\' feeling"
                      }, {
                      def_id: 10,
                      def_type: 1,
                      def_text: "A popular internet meme"
                      }, {
                      def_id: 11,
                      def_type: 1,
                      def_text: "The most popular animal on the farm"
                      }, {
                      def_id: 12,
                      def_type: 1,
                      def_text: "An annoying song that\'s stuck in your head, forever"
                      }, {
                      def_id: 13,
                      def_type: 1,
                      def_text: "The moment you realize your child is a doucebag"
                      }, {
                      def_id: 14,
                      def_type: 1,
                      def_text: "Female morning wood"
                      }, {
                      def_id: 15,
                      def_type: 1,
                      def_text: "A turtle\'s erect member"
                      }, {
                      def_id: 16,
                      def_type: 1,
                      def_text: "Better than winning the lottery"
                      }, {
                      def_id: 17,
                      def_type: 1,
                      def_text: "Teaching an aardvark how to do The Polka"
                      }, {
                      def_id: 18,
                      def_type: 1,
                      def_text: "Having your asshole licked by an anteater"
                      }, {
                      def_id: 19,
                      def_type: 1,
                      def_text: "aggressively humping a stranger\'s leg"
                      }, {
                      def_id: 20,
                      def_type: 1,
                      def_text: "cheese-cupping your grandma"
                      }, {
                      def_id: 21,
                      def_type: 1,
                      def_text: "spit taking into a midget\'s face"
                      }, {
                      def_id: 22,
                      def_type: 1,
                      def_text: "diarrhea motorboat"
                      }, {
                      def_id: 23,
                      def_type: 1,
                      def_text: "the sweat underneath a 93-year old woman\'s breasts"
                      }, {
                      def_id: 24,
                      def_type: 1,
                      def_text: "when your balls stick to your thighs"
                      }, {
                      def_id: 25,
                      def_type: 1,
                      def_text: "queefing back and forth, forever"
                      }, {
                      def_id: 26,
                      def_type: 1,
                      def_text: "the most hip hipster"
                      }]; 
    localStorage.setItem("DEFINITIONS",JSON.stringify(definitions));
};
createDB.prototype.addSetUPParam=function()
{
    var setupparam=[{setup_id:1, setup_text:"handsize", setup_value:"5"},{setup_id:2, setup_text:"numrounds", setup_value:"5"}];
    localStorage.setItem("SETUPPARAM",JSON.stringify(setupparam));

};
createDB.prototype.addPlayers=function()
{
    var players=[{p_id:1,name:"Kane"},{p_id:2,name:"Vijay"},{p_id:3,name:"Dave"}];
    localStorage.setItem("PLAYERS",JSON.stringify(players));
    
}
createDB.prototype.addAnswers=function()
{
    var answers= [];
    localStorage.setItem("ANSWERS",JSON.stringify(answers));
    
}




