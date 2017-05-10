var projects = { 
	types : [
		"interactive", "design", "animation", "fun"
	],
	about : {
		text : [ "Hello!", "I'm a creative technologist currently based in Harlem, NYC. I hold an MFA in Design and Technology and a BFA in Digital Art and Graphic Design. I like to build playful and interactive experiences that make you smile. My toolbox consists of full-stack javascript development, creative coding, physical computing, and a maker/hacker ethos (among other things).", "I'm also an educator, I love teaching introductory creative technology classes and workshops. I believe strongly in interdisciplinary, inclusive, and project-based education.", "I would love to work with you! Please feel free to contact me for freelance or contract work."],
		resume : "images/resume.pdf"
	},
	main : [
		{
			title : "AMNH Earthquake",
			type : "design",
			summary : "redesign of permanent exhibit",
			description : ["In progress project as part of fellowship at American Museum of Natural History. To be completed in June 2017.", "The Discovery Room offers families, and especially children ages 5-12, an interactive gateway to the wonders of the Museum and a hands-on, behind-the scenes look at its science. Every major field of Museum science and research, from anthropology to zoology, is represented. Children, accompanied by adults, can explore an array of artifacts and specimens, puzzles, and scientific challenges. Activities for older visitors (aged 8+) are located on the upper level.", "The current earthquake exhibit lets visitors track real-time earthquakes on a three-drum seismograph as well as mapping earthquake locations on a digital map of the world.", "Unfortunately, the seismograph no longer works and interest in the exhibit has waned.",  "By redesigning the exhibit as my Helen Fellowship project, I hope to bring new interaction and reinvigorate excitement around earthquake education and awareness.", "For documentation about the design and development process, please see the case study."],
			haslink : true,
			links : [{text: "Case Study", link: "images/earthquake/earthquake.pdf"}, {text: "Discovery Room", link: "http://www.amnh.org/learn-teach/families/discovery-room/"}],
			images : ["images/earthquake/earthquake1.png", "images/earthquake/earthquake2.png"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Round",
			type : "design",
			summary : "a tool to help you be well-rounded",
			description : ["Round is a tool to help users cultivate a well-rounded point of view. A Chrome extension that tracks online news consumption habits and provides easy to read quantitative feedback as an impetus for self-change.", "Thesis Abstract: The propagation of content sharing on social media has drastically changed the way that we experience the news. Instead of going directly to complete and curated primary sources we are fed through secondary sharing and predictive content algorithms. While this is convenient for casual online browsing, the news that is delivered in this system tends to be highly trend-driven, extremely biased, and narrow in topical scope. To address this issue of unbalanced news consumption and general lack of erudite knowledge, I created a browser extension called Round.", "Round began as a project called 'Segue,' a browsing platform for news media, where a database of articles would be connected through hyperlink style keyword connections, allowing users to switch from one article through semantic connections.", "Through several rounds of user testing and research, Segue transitioned into Round, instead of providing a set browsing experience I allowed the user to browse the news as their existing habits dictated. The tool focused on providing feedback on these habits. At this point, the project had completely stepped away from the idea of alternative browsing and new content discovery and focused instead on helping users become well rounded news consumers through reflection on habits. It became more about tracking what and how the user reads and giving feedback through data visualization. This focus on the quantified self as a means for change stems from a desire to prompt change from within instead of forcing it. By letting users recognize their deficiencies on their own they can become their own means for change as desired.", "For more information about the development process of Round, please see the case study."],
			haslink : true,
			links : [{text: "Round Online", link: "http://roundout.me/"}, {text: "Case Study", link: "images/round/round.pdf"}],
			images : ["images/round/round01.jpg", "images/round/round02.png", "images/round/round05.png", "images/round/round06.png", "images/round/round07.png"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Do It",
			type : "animation",
			summary : "an animation about sexual education",
			description : ["Do It is a piece aimed at increasing the availability of comprehensive sexual education for teens by raising awareness about a significant lack of knowledge in the demographic.", "Sex education is stereotypically stodgy and limited. Do It aims to bring humor to education through sexual colloquialisms and adorable bean-shaped characters.", "In order to create this animation, I worked with sexual educators and researched high school sex-ed curriculum. These resources contributed the facts that I used in the animation.", "All art assets and sound design were self-made."],
			haslink : false,
			links : [""],
			images : ["images/doit/doit01.png", "images/doit/doit02.png", "images/doit/doit03.png"],
			vimeo : ["https://player.vimeo.com/video/128102510?byline=0&portrait=0"],
			youtube : []
		},
		{
			title : "Amazon Alicia",
			type : "design",
			summary : "slightly deaf search tool",
			description : ["Alicia, the off-brand search tool for Amazon Alexa.", "Created for the Stupid Shit That No One Needs and Terrible Ideas Hackathon in NYC on February 25, 2017", "Amazon Alicia began as the idea that it would be funny if Siri was a little deaf. After researching the developer tools for Siri we learned that they were way too opaque and locked down to make something like this, so we transitioned into developing an Alexa Skill.", "The goal of Amazon Alicia was to make a search skill that would return results that sounded similar but weren't quite what you asked for.", "Amazon Alicia was accomplished using the rhyming API Datamuse in combination with the Wikipedia API."],
			haslink : true,
			links : [{text: "Amazon Alicia", link: "https://github.com/jcontour/stupid_alecia/"}],
			images : [],
			vimeo : [],
			youtube : ["https://www.youtube.com/embed/kd1gjUt7gI0"]
		},
		{
			title : "Head Haiku",
			type : "design",
			summary : "poetry to recover from the internet",
			description : ["Created after a long day filled with trolls on the internet, Head Haiku is a tool for you release frustration and spend time meditating over poetry generated from your velocity at which your face hits the keyboard."],
			haslink : true,
			links : [{text:"Head Haiku", link: "http://jessiecontour.com/headhaiku/index.html"}],
			images : ["images/headhaiku/headhaiku.gif"],
			vimeo : [],
			youtube : []
		} 
	],
	etc : [
		{
			title : "Creatures",
			type : "interactive",
			summary : "inspired by undersea life",
			description : ["Creatures is an interactive installation that simulates the appearance of life and explores individual and emergent group behaviors in the context of an artists interpretation of a coral reef."],
			haslink : false,
			links : [""],
			images : [],
			vimeo : ["https://player.vimeo.com/video/128754679?title=0&byline=0&portrait=0"],
			youtube : []
		},
		{
			title : "Segue",
			type : "design",
			summary : "an experiment in alternative browsing",
			description : ["Segue is an experimental tool for alternative browsing and content discovery.", "Articles from the New York Times are discovered via user generated keywords, and connections between articles are found via a conceptual semantic network.", "For example, a search for “food” brings up an article on fajitas. This article has a keyword of “meat”, which is semantically connected to the idea of a “butcher shop”. Searching for this brings up an article that features an interview with a refugee who used to be a butcher."],
			haslink : false,
			links : [""],
			images : ["images/segue/segue1.png", "images/segue/segue2.png", "images/segue/segue3.png"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Sunglasses",
			type : "interactive",
			summary : "wearable tech",
			description : ["Taking a fresh look at the needs of brightly colored party-size sunglasses wearers. Don't those lenses get in the way at the most inconvenient moments? Well, these Sunglasses will make sure to open up and free your vision when you need them to."],
			haslink : false,
			links : [""],
			images : ["images/sunglasses/sunglasses.gif"],
			vimeo : [],
			youtube : ["https://www.youtube.com/embed/0c87tY9SYs4"]
		},
		{
			title : "Space",
			type : "animation",
			summary : "motion graphics about space",
			description : ["An animation about the depths of space."],
			haslink : false,
			links : [""],
			images : [],
			vimeo : ["https://player.vimeo.com/video/124753123?byline=0&portrait=0"],
			youtube : []
		},
		{
			title : "Tabby",
			type : "fun",
			summary : "i heard you like cats",
			description : ["A chrome extension to put more cats into your internet. Tabby replaces most favicons with cat icons."],
			haslink : false,
			links : [""],
			images : ["images/tabby/tabby.gif"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Red Baron Ink",
			type : "design",
			summary : "hand lettering",
			description : ["Hand lettered window display for NYC local shop", "Red Baron Ink is a tattoo shop in NYC's East Village, see their work on Instagram @rbitattoo."],
			haslink : false,
			links : [""],
			images : ["images/rbi/rbi.JPG"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Chickens",
			type : "animation",
			summary : "expression-driven chicken animation",
			description : ["An animation about chickens."],
			haslink : false,
			links : [""],
			images : [],
			vimeo : ["https://player.vimeo.com/video/125420846?byline=0&portrait=0"],
			youtube : []
		},
		{
			title : "Burgers",
			type : "animation",
			summary : "burgers!",
			description : ["An animation about burgers."],
			haslink : false,
			links : [""],
			images : [],
			vimeo : ["https://player.vimeo.com/video/120902639?byline=0&portrait=0"],
			youtube : []
		},
		{
			title : "Lamp",
			type : "interactive",
			summary : "an exercise in object permanence",
			description : ["Lamp (aka Lampthropomorphism) is an investigation in imbuing objects with life and personality. By bringing life to Lamp, the viewer/player is prompted to interact with a ordinary object in a magical way. In this case, the lamp is shy and will turn off when you make eye contact."],
			haslink : false,
			links : [""],
			images : [],
			vimeo : [],
			youtube : ["https://www.youtube.com/embed/2eUK2mJYHWA"]
		},
		{
			title : "Urban Gif",
			type : "design",
			summary : "gif mashup search engine",
			description : ["A search engine that matches results from urban dictionary and giphy to examine different facets of the how we form definitions."],
			haslink : true,
			links : [{text: "Urban Gif", link: "http://jessiecontour.com/urbangif/index.html"}],
			images : ["images/urbangif/urbangif1.png", "images/urbangif/urbangif2.png", "images/urbangif/urbangif3.png"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Jazz City",
			type : "fun",
			summary : "a mural done in Long Island City",
			description : ["An answer to the RFP from the NYC Department of Transportation for Barrier Beautification designs, Jazz City was the chosen design for Fall 2015. Painted in Long Island City with the help of volunteers from NY Cares."],
			haslink : false,
			links : [""],
			images : ["images/mural/mural.gif"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Autonomous Art",
			type : "interactive",
			summary : "robot art",
			description : ["Autonomous Art examines the split between physical and digital and attempts to blur the lines. Physically identical robots are outfitted with colored dots and different encoded personalities and let loose in an art arena where they are tracked by the computer which generates digital strokes and paths based on their movement. Where is the art coming from? Who is the artist? Is it the code? The robot? Me?"],
			haslink : false,
			links : [""],
			images : ["images/autoart/autoart.gif", "images/autoart/autoart1.png", "images/autoart/autoart2.png", "images/autoart/autoart3.png"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Needy Bot",
			type : "fun",
			summary : "alternative proposals to skynet",
			description : ["Created at Stupid Hackathon, an amalgam of horrible ideas, inconvenient technology and irreverent hackers. We gathered not to solve society problems with technology, but innovate new and creative ways to waste people’s time, money in creative and interesting new ways. My team created NeedyBot, an emotionally dependent tea-kettle anthropomorphized to stimulate your empathy, or annoy the shit out of you (probably both)."],
			haslink : false,
			links : [""],
			images : ["images/needybot/needybot1.jpg", "images/needybot/needybot3.jpg", "images/needybot/needybot7.jpg"],
			vimeo : [],
			youtube : ["https://www.youtube.com/embed/sRRaA7hQUJc", "https://www.youtube.com/embed/mjDvvM759-c", "https://www.youtube.com/embed/oexqjeduMuY"]
		},
		{
			title : "Micah Nathan",
			type : "design",
			summary : "authors website",
			description : ["A website designed, illustrated, and developed for author Micah Nathan"],
			haslink : true,
			links : [{text: "Micah Nathan", link: "http://www.micahnathan.com"}],
			images : ["images/micahnathan/micahnathan1.png", "images/micahnathan/micahnathan2.png"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Touch Twister",
			type : "fun",
			summary : "redesigning the classics",
			description : ["A remake of the classic game, Touch Twister moves the dots from the ground onto you and your fellow players. You can play as an individual or a team, competitively or casually, just so long as you’re cool with getting up close and personal with your friends. So twist and turn, reach and balance, get tangled up in some Touch Twister!", "--As shown at the Come Out and Play 2015 Field Day on Governors Island NYC"],
			haslink : false,
			links : [""],
			images : ["images/touchtwister/touchtwister1.jpg"],
			vimeo : [],
			youtube : ["https://www.youtube.com/embed/_bK9woMIPtQ"]
		},
		{
			title : "Just Cause 3",
			type : "animation",
			summary : "technical animation and explosions",
			description : ["I worked at Avalanche Studios on Just Cause 3 as a tech artist.", "My main roles included rigging, skinning, ragdoll, and pipeline research and development. More information available upon request."],
			haslink : false,
			links : [""],
			images : ["images/justcause/justcause1.png", "images/justcause/justcause2.png", "images/justcause/justcause3.png"],
			vimeo : [],
			youtube : []
		},
		{
			title : "Infinite Crisis",
			type : "animation",
			summary : "technical animation and superheroes",
			description : ["A MOBA by Turbine Inc in Boston that has been shut down. I worked on the character development pipeline as a technical content artist, contributing to character rigging, skinning, hair and cloth simulation, and ragdoll simulation."],
			haslink : false,
			links : [""],
			images : ["images/infinitecrisis/infinitecrisis.jpg"],
			vimeo : [],
			youtube : []
		},
		{
			title : "LOTRO",
			type : "animation",
			summary : "technical animation and hobbits",
			description : ["I worked as an intern on the Helms Deep expansion of Lord of the Rings Online MMO, contributing rigging and skinning to the large release of horse armor."],
			haslink : false,
			links : [""],
			images : ["images/lotro/lotro.jpg"],
			vimeo : [],
			youtube : []
		}
	]
}