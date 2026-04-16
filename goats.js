// Goat data and configuration.
// Each entry needs: name, lat, lng.
// Optional: address (shown in the popup as a Google Maps link),
//           notes   (short description shown in the popup),
//           url     (website link, opens in a new tab below the notes).

const GOATS = [
	{
		name: "Centennial Farm (OC Fair & Event Center)",
		latitude: 33.666047537815324,
		longitude: -117.90253351010584,
		address: "88 Fair Dr, Costa Mesa, CA 92626",
		notes: [
			"Created to educate youth about agriculture and its importance to daily life. Centennial Farm is home to fruit and vegetable gardens, livestock and the Millennium Barn. Two youth educational tour programs are offered – Discovery Days and Junior Farmer Tours – as well as year-round daily hours so the public can visit the farm.",
			"Goats have three main uses which are their meat, milk and fiber. At Centennial Farm we showcase different breeds of goats based on their uses.",
			"Make sure to come visit in the spring time when you can see the young goat kids frolicking around with their mothers.",
		],
		url: "https://ocfair.com/centennial-farm/animals/",
	},
	{
		name: "Farm Sanctuary - Los Angeles",
		latitude: 34.49560552119161,
		longitude: -118.22196189110943,
		address: "5200 Escondido Canyon Rd, Acton, CA 93510",
		notes: [
			"Our 39-acre Southern California Sanctuary — home to approximately 100 rescued farm animals — is located on a beautiful hacienda ranch in Acton, just 45 minutes from Hollywood.",
		],
		url: "https://www.farmsanctuary.org/goats/",
	},
	{
		name: "Farm Sanctuary - Watkins Glen",
		latitude: 42.38480001635627,
		longitude: -77.02906662481418,
		address: "3136 Aikens Rd, Watkins Glen, NY 14891",
		notes: [
			"Nestled in the beautiful Finger Lakes Region of upstate New York, the rolling green pastures of Farm Sanctuary’s 275-acre New York Sanctuary are home to more than 400 rescued farm animals.",
		],
		url: "https://www.farmsanctuary.org/goats/",
	},
	{
		name: "The Gentle Barn - Los Angeles",
		latitude: 34.464085219254656,
		longitude: -118.41231652187169,
		address: "15825 Sierra Hwy, Santa Clarita, CA 91390",
		notes: [
			"At The Gentle Barn, we save the lives of animals who are too old, sick, scared, or injured to be adopted, and who would otherwise be euthanized. We rehabilitate them with veterinary care, acupuncture, massage therapy, chiropractic, music therapy, energy healing, animal communication, nutritional supplements like Sun Chlorella and Puremedy, and lots of love.",
		],
		url: "https://www.gentlebarn.org/animals/?category=goat",
	},
	{
		name: "The Gentle Barn - Nashville",
		latitude: 35.685323728048125,
		longitude: -86.40497657152181,
		address: "9295 Christiana Fosterville Rd, Christiana, TN 37037",
		notes: [
			"At The Gentle Barn, we save the lives of animals who are too old, sick, scared, or injured to be adopted, and who would otherwise be euthanized. We rehabilitate them with veterinary care, acupuncture, massage therapy, chiropractic, music therapy, energy healing, animal communication, nutritional supplements like Sun Chlorella and Puremedy, and lots of love.",
		],
		url: "https://www.gentlebarn.org/animals/?category=goat",
	},
	{
		name: "Gilchrist Farm",
		latitude: 34.486133280478505,
		longitude: -118.463260018977,
		address: "30116 Bouquet Canyon Rd, Santa Clarita, CA 91390",
		notes: [
			"Visit goats, ducks, chickens, pigs, sheep, bunnies and more goats during your farm visit.   Meet the cows.  Also stop by to see our giant African Sulcatta Tortoise, guinea fowl, geese and peacocks.  Our very friendly animals are a pleasure to visit.  Many of our animals were born right on the farm and all of them live here full time.  We have different breeds of goats, pot bellied pigs and various breeds of hogs, and a great variety that your family can get to know and watch grow.   Purchase the Farm Visit for all visitors in your party over the age of 2 years old that want to enter the petting area (children ages 2 and under are free to enter with a paid adult. Goat milking at 10AM and Noon each Saturday and Sunday May-October.",
		],
		url: "https://www.gilchristfarm.com/pony-rides-wagon-rides-petting-zoo",
	},
	{
		name: "LA County Arboretum (Hello Critter Goat Yoga)",
		latitude: 34.14127763669682,
		longitude: -118.05392803171779,
		address: "107 S Baldwin Ave, Arcadia, CA 91007",
		notes: [
			"Start your day with Hello Critter Goat Yoga in the enchanting setting of the L.A. Arboretum. Enjoy communing with gentle goats while engaging in a fun, light-hearted practice taught by a certified yoga instructor. Connect with your “inner kid” while moving through a sequence suitable for all levels; from first timers who ”just came for the goats” to experienced yogis looking for a new challenge. Our Nigerian Dwarf kids will open your heart, widen your smile, deepen your stretch & strengthen your core while they weave thru class, interacting with each participant; nimbly jumping on, rebounding off, trotting under & crawling through various postures of the human playground created by attendees. Bring your love for animals and sense of humor!",
		],
		url: "https://arboretum.org/events/goat-yoga-with-hello-critter-2",
	},
	{
		name: "Laughing Frog Yoga",
		latitude: 34.04023168556166,
		longitude: -118.46507902473745,
		address: "12217 Santa Monica Blvd #205, Los Angeles, CA 90025",
		notes: [
			"Join us at Laughing Frog Yoga for the baaaah-dass craze that’s sweeping Los Angeles – Goat Yoga!  We are the only studio in Los Angeles offering public goat yoga classes and private goat yoga events.  Join us for your next birthday party, team building event, or film shoot!",
		],
		url: "https://laughingfrogyoga.com/goat-yoga/",
	},
	{
		name: "Live Oak Canyon Pumpkin Patch & Christmas Tree Farm",
		latitude: 34.01352995846937,
		longitude: -117.09774686071991,
		address: "32335 Live Oak Canyon Rd, Redlands, CA 92373",
		notes: [
			"<strong>NOTE: only open in Fall</strong>",
			"Experience the wonder of our pumpkin patch with fantastic rides, slides, ponies, petting zoos, games, food and more! Featuring over 50+ family-oriented Fall and Halloween themed attractions.",
		],
		url: "https://liveoakcanyon.com/activities/attractions/",
	},
	{
		name: "Los Angeles Zoo - Muriel's Ranch",
		latitude: 34.149213136784084,
		longitude: -118.28628624833767,
		address: "5333 Zoo Dr, Los Angeles, CA 90027",
		notes: [
			"Visit the Winnick Family Children’s Zoo to get up close with our goats in the animal contact area known as Muriel’s Ranch. The Ranch is home to Nigerian Dwarf goats, a small species that only reaches a height of around two feet, and the adults weigh in between 20 and 50 pounds. These colorful and curious goats are a kid-friendly size and a must-see for the young and young-at-heart. We have brushes available for you to groom these fun domestic animals!",
		],
		url: "https://lazoo.org/plan-your-visit/shows-activities/muriels-ranch-contact-yard/",
	},
	{
		name: "Orange County Zoo",
		latitude: 33.796028891807104,
		longitude: -117.75061005825728,
		address: "1 Irvine Park Rd, Orange, CA 92869",
		notes: [
			"The OC Zoo is located inside beautiful Irvine Regional Park in the city of Orange. The Zoo is nestled among the majestic 495-acre park.",
			"The Zoo's focus is on animals and plants native to the southwestern United States. Many of our animals are injured, orphaned, confiscated, or not releasable into the wild. Animals on exhibit include black bear, mountain lion, bald eagle, kit fox, ocelot, beaver, great horned owl, porcupine, coyote, turkey vulture and more. The zoo also features a barnyard with domestic goats and sheep.",
		],
		url: "https://www.ocparks.com/oc-zoo",
	},
	{
		name: "River Street Ranch",
		latitude: 33.500443954847576,
		longitude: -117.66531683584644,
		address: "31791 Los Rios St, San Juan Capistrano, CA 92675",
		notes: [
			"Explore all the exciting attractions River Street Ranch has to offer! From hands-on animal encounters to interactive activities and unique experiences, there’s something for everyone to enjoy. Dive into the details below and plan your perfect day of family fun!",
			"Pet, feed, and brush our friendly goats and sheep.",
		],
		url: "https://riverstreetranch.com/attractions",
	},
	{
		name: "Santa Ana Zoo",
		latitude: 33.74244530834693,
		longitude: -117.84340642664189,
		address: "1801 E Chestnut Ave, Santa Ana, CA 92701",
		notes: [
			"Through fun, adventure, and learning, the Santa Ana Zoo empowers its community to save wildlife and wild spaces.",
			"Part of the City of Santa Ana's Parks, Recreation, and Community Services team, and supported by nonprofit Friends of Santa Ana Zoo, Santa Ana Zoo has been a community touchstone since opening in 1952.",
		],
		url: "https://www.santaanazoo.org/",
	},
	{
		name: "Saving Grace Animal Sanctuary",
		latitude: 34.48743875361627,
		longitude: -118.14306474659287,
		address: "1575 Sierra Hwy, Acton, CA 93510",
		notes: [
			"<strong>NOTE: tours are available by request only</strong>",
			"Saving Grace Animal Sanctuary is home to nearly 50 rescued animals of all shapes, sizes, and species!",
			"If not saved, they would have ended up on someone's plate.",
			"Cows, donkeys, & horses (mini too!)",
			"Pigs, alpacas, & a tortoise!",
			"Goats, chickens, bunnies... & more!",
		],
		url: "https://www.savinggraceanimalsanctuary.org/goats",
	},
	{
		name: "Springton Manor Farm",
		latitude: 40.07402554693771,
		longitude: -75.77558227583465,
		address: "860 Springton Rd, Glenmoore, PA 19343",
		notes: [
			"Within Springton’s historic landscape of fenced fields, stone walls and misty morning vistas is a preserved patchwork of colonial plantation, Industrial Revolution era scientific farm, Victorian tenant farm, and gentleman’s country estate. The Manor House and Carriage House overlook 300 acres of centuries-old sugar maples, open pastures and stately Penn Oaks, which grace the lower pond. The Manor House is not open to the general public.",
			"Initially part of a William Penn Manor, Springton Manor has been in agricultural use since the early 1700’s. On this demonstration farm, you can meet the animals and learn about Chester County’s farming history. The barn complex consists of the Great Barn, sheep shed, goat shed, a roost and equipment shed. You may see horses, donkeys, rabbits, calves, pigs, sheep, goats, chickens and peacocks.  The Family Farm Museum, located within the Great Barn, contains seasonal tools and apparatus used on Chester County farms from the 1700’s to the 1900’s.",
		],
		url: "https://www.chesco.org/4627/Springton-Manor-Farm",
		submittedBy: "Jeff Brower",
	},
	{
		name: "Tanaka Farms",
		latitude: 33.657111447597956,
		longitude: -117.80125411399342,
		address: "5380 3/4 University Dr, Irvine, CA 92612",
		notes: [
			"Tanaka Farms grows over 60 different varieties of fruits and vegetables and gives educational farm tours to thousands of school children each and every year. The Tanakas hope to continue their family farm for many years!",
		],
		url: "https://www.tanakafarms.com/pages/barnyard-exhibit",
	},
	{
		name: "Underwood Family Farms - Moorpark",
		latitude: 34.25525153311784,
		longitude: -118.85263424750735,
		address: "3370 Sunset Valley Rd, Moorpark, CA 93021",
		notes: [
			"Our Animal Center is open! All of our animals are on display including our baby goats, chicks, baby poults, Pete the baby pig, Sassy the mini cow, ponies, alpacas, emus, chickens, ducks, baby turkeys, sheep, bunnies, birds, Chocolate the donkey, our Percherons and Scottish Highland cattle! Play structures & feeding/petting are now open as well as many activities listed below.",
		],
		url: "https://underwoodfamilyfarms.com/animal-center-moorpark/",
	},
	{
		name: "Underwood Family Farms - Somis",
		latitude: 34.26318695942873,
		longitude: -118.99173908784543,
		address: "5696 E Los Angeles Ave, Somis, CA 93066",
		notes: [
			"The Somis Animal Center is home to sheep, alpacas, chickens, and numerous pygmy goats. They live among a wide variety of citrus trees and are surrounded by fresh grass and picnic tables. Bring the family out for a picnic and to visit the animals. The kids will love the sandbox and wooden fire truck. We are certainly proud of our Animal Center and can’t wait for you to experience it first-hand! After shopping, be sure to visit our farm animals. They love to have the company.... okay, they really love the treats!",
		],
		url: "https://underwoodfamilyfarms.com/animal-center-somis/",
	},
];
