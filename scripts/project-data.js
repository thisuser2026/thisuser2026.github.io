const PROJECTS = {
	chris: {
		title: "Chris",
		date: "January 2023",

		images: {
			base: "assets/media/renders/characters/chris/chris",
			total: 5
		},

		description: `
			Over the Christmas break, without various school assignments taking up my time, I put more effort into character modelling. I tried to maintain a more consistent level of detail across facial features this time around. The model went through a few different iterations, with me making a list of areas that looked a bit off each time.
			<br><br>
			I used Substance Painter for most of the texturing instead of Photoshop, which allowed me to get a realtime preview of how the model would look. The ears are much better, with the edge flow correctly following the structure, whereas with Dylan V2 they were very primitive and oddly-shaped.
			<br><br>
			See if you can guess which Chris this is meant to be!
			<br><br>
		`,

		downloads: []
	},

	dylan2: {
		title: "Dylan V2",
		date: "October 2022",

		images: {
			base: "assets/media/renders/characters/dylan2/dylan2",
			total: 6
		},

		description: `
			For the second semester's major project, I focused on improving my skills in character modelling. I brought front and side reference images of Dylan into Blender, then sculpted out a sphere to match his head and shoulders.
			<br><br>
			You can see the improvement in the facial features, with noticeably more detail in the eyes and nose. I still had trouble getting the lips looking right though. I learnt that textures can be deceiving, and that I had to reduce the contrast of the eyes considerably in Photoshop to get a satisfying result.
			<br><br>
			I experimented with XGen plugged into a PxrMarschnerHair shader to create the hair, and Maya's nHair system for the physics.
			<br><br>
		`,

		downloads: []
	},

	dylan1: {
		title: "Dylan V1",
		date: "June 2022",

		images: {
			base: "assets/media/renders/characters/dylan1/dylan1",
			total: 4
		},

		description: `
			This was an attempt at recreating a classmate in 3D, which featured in the Mount Victoria render. I used photogrammetry of his head to create a base mesh, which was then covered in clean geometry.
			<br><br>
		`,

		downloads: []
	},

	cyberthug: {
		title: "Cyberthug",
		date: "January 2022",

		images: {
			base: "assets/media/renders/characters/cyberthug/cyberthug",
			total: 6
		},

		description: `
			This was the first character I modelled, based on the Cyberthug from 2021. I tried to find a balance between making it visually identical to the model and increasing the level of detail. I only got as far as making a "vanilla" model, without all the cyborg modifications.
			<br><br>
		`,

		downloads: []
	},

	panera: {
		title: "Panera Bread",
		date: "WORK IN PROGRESS",

		images: {
			base: "assets/media/renders/environments/panera/panera",
			total: 8
		},

		description: `
			This environment is located way over in Colorado. Unlike with the other environments, I don't have the means to go there and collect reference imagery myself, but luckily there's plenty on Google Maps and in a certain infamous video...
			<br><br>
			Interior environments like this are always a pleasure to make, given that (apart from the carpark and some distant buildings) the boundaries are clearly defined, making it easy to know where to stop. It's like its own little isolated world.
			<br><br>
			Notice the improved lighting in the later iteration, which places more emphasis on the entrance, guiding the eye to that part of the frame. Some thought was given to the colour scheme, and I tried to bias objects towards either yellow or blue (as seen in the grass, blue car and blinds on the right side of the building).
			<br><br>
		`,

		downloads: [
			{
				icon: "maps",
				text: "View reference location",
				href: "https://www.google.com/maps/place/Panera+Bread/@39.8858737,-105.0759612,18.5z/data=!4m6!3m5!1s0x876b8a2a8529fedf:0xfbc068fe9adea372!8m2!3d39.8862788!4d-105.0769935!16s%2Fg%2F1tfcz998?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
			}
		]
	},

	bedroom: {
		title: "Bedroom",
		date: "WORK IN PROGRESS",

		images: {
			base: "assets/media/renders/environments/bedroom/bedroom",
			total: 3
		},

		description: `
			Description coming soon.
			<br><br>
		`,

		downloads: []
	},

	tepapa: {
		title: "Te Papa",
		date: "June 2026",

		images: {
			base: "assets/media/renders/environments/tepapa/tepapa",
			total: 4
		},

		description: `
			I used to come to the cafe at this place a lot, and decided it would be a convenient place to recreate. Shame I didn't get to finish it due to moving and not taking enough reference photos.
			<br><br>
			It would've been fun to replace the exhibits with my own ones, and experiment with mood lighting and surreal elements in ways that wouldn't be possible in real-life.
			<br><br>
			Maybe leaving parts up to interpretation is part of the appeal.
			<br><br>
		`,

		downloads: [
			{
				icon: "maps",
				text: "View reference location",
				href: "https://www.google.com/maps/place/Museum+of+New+Zealand+Te+Papa+Tongarewa/@-41.2904522,174.7795145,1648m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d38afd1ad98169d:0x9a409ffce82d9a30!8m2!3d-41.2904563!4d174.7820894!16zL20vMDRrMGtr?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
			}
		]
	},

	yosemite: {
		title: "Unused Jak Level",
		date: "December 2025",

		images: {
			base: "assets/media/renders/environments/yosemite/yosemite",
			total: 4
		},

		description: `
			Recreation of the unused "Yosemite" level from Jak and Daxter: The Precursor Legacy. This reportedly would have been located behind the miners' cave in Volcanic Crater and contained the switch for the red eco vents.
			<br><br>
			Due to the limited information on this level, I had to come up with different missions and objects and work out exactly how it fits into the world. For instance, I figured there would be a launcher at the top of one mountain, and decided an ice-cold stream descending from Snowy Mountain would look nice.
			<br><br>
		`,

		downloads: []
	},

	war: {
		title: "War Memorial",
		date: "January 2025",

		images: {
			base: "assets/media/renders/environments/war/war",
			total: 3
		},

		description: `
			The war memorial located in the Wellington CBD seemed like an interesting place to recreate. I tried to worry less about getting the measurements exactly right, and focus more on the bigger picture. The horse statue in the foreground was generated with photogrammetry, while everything else was modelled by hand.
			<br><br>
		`,

		downloads: [
			{
				icon: "maps",
				text: "View reference location",
				href: "https://www.google.com/maps/place/Pukeahu+National+War+Memorial+Park/@-41.2995094,174.7765884,1099m/data=!3m1!1e3!4m14!1m7!3m6!1s0x6d38afd1ad98169d:0x9a409ffce82d9a30!2sMuseum+of+New+Zealand+Te+Papa+Tongarewa!8m2!3d-41.2904563!4d174.7820894!16zL20vMDRrMGtr!3m5!1s0x6d38afdeb46e493d:0xd76943a16dfa8f56!8m2!3d-41.298909!4d174.7771493!16s%2Fg%2F11b6t85p8j?entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D"
			}
		]
	},

	steam: {
		title: "Steam Room",
		date: "October 2022",

		images: {
			base: "assets/media/renders/environments/steam/steam",
			total: 2
		},

		description: `
			This was part of a class project involving hexagonal rooms fitted together. This one was a bit rushed, but it makes use of volumetrics to simulate steam, and roughness maps for the foggy glass and wet floor. Given the small area, I focused on making it photorealistic.
			<br><br>
			The environment is based off a real location, and was created entirely from memory.
			<br><br>
		`,

		downloads: []
	},

	classroom: {
		title: "Classroom",
		date: "August 2022",

		images: {
			base: "assets/media/renders/environments/classroom/classroom",
			total: 5
		},

		description: `
			After seeing how well Mount Victoria turned out, I decided to recreate a more convenient location. I took a different approach this time, taking note of the dimensions of the scene with a tape measure. The scene extends outside, revealing a carpark and alley.
			<br><br>
			It was interesting (and rather disorienting) to see the project develop as most of the modelling was done in that same room, on that workbench in the corner. I had planned to use it for a short film or virtual reality experience, or maybe as a “meta” level in the Major Projects game where the player would encounter me working on the game.
			<br><br>
		`,

		downloads: []
	},

	victoria: {
		title: "Mount Victoria",
		date: "June 2022",

		images: {
			base: "assets/media/renders/environments/victoria/victoria",
			total: 5
		},

		description: `
			This remake of a real location was made using large-scale photogrammetry and involved taking over 600 photos. Using the generated model as reference, I then manually recreated everything with clean geometry.
			<br><br>
			The grass was made using XGen, while the bark was faked using a simple greyscale displacement map converted from the original texture.
			<br><br>
		`,

		downloads: []
	},

	samsung: {
		title: "Samsung SSD",
		date: "November 2026",

		images: {
			base: "assets/media/renders/props/samsung/samsung",
			total: 1
		},

		description: `
			Description coming soon.
			<br><br>
		`,

		downloads: []
	},

	eye: {
		title: "Eye",
		date: "February 2026",

		images: {
			base: "assets/media/renders/props/eye/eye",
			total: 1
		},

		description: `
			Description coming soon.
			<br><br>
		`,

		downloads: []
	},

	bedbug: {
		title: "Bed Bug Jug",
		date: "December 2025",

		images: {
			base: "assets/media/renders/props/bedbug/bedbug",
			total: 1
		},

		description: `
			Description coming soon.
			<br><br>
		`,

		downloads: []
	},

	milk: {
		title: "Chocolate Milk",
		date: "August 2023",

		images: {
			base: "assets/media/renders/props/milk/milk",
			total: 1
		},

		description: `
			This simple prop was made in just 2 hours. It was an experiment in fine-tuning specular and subsurface settings to match how it would look in the real world. If you look closely you can see the bottom of the lid is darker than the top, as it is covering the bottle and allowing less light to pass through.
			<br><br>
			One issue I discovered later was that the poor placement of edge loops to support the raised squares led to inconsistent shading, resulting in the cylindrical shape looking more like a rounded octagon.
			<br><br>
		`,

		downloads: []
	},

	hold: {
		title: "Moving Hold",
		date: "November 2026",

		images: {
			base: "assets/media/animations/hold/hold",
			total: 1
		},

		description: `
			Description coming soon.
			<br><br>
		`,

		downloads: []
	},

	sole: {
		title: "My Name is Sole Letafu",
		date: "April 2022",

		images: {
			base: "assets/media/animations/sole/sole",
			total: 3
		},

		description: `
			While learning photogrammetry, I took several photos of Dylan but didn't tell him what I planned to do with them.
			<br><br>
			I brought the images into RealityCapture, then unwrapped the texture and applied it to the Dylan V1 model. After some basic facial rigging involving blendshapes, I synced this animation to a voice clip and showed the result to the class.
			<br><br>
			The resemblance was incredible, but I don't think this model was blushing enough.
			<br><br>
		`,

		downloads: []
	},

	party: {
		title: "The Party Room",
		date: "December 2017",

		images: {
			base: "assets/media/animations/party/party",
			total: 1
		},

		description: `
			After traversing a seemingly endless field, the guardian stumbles upon a room set up for a party that never happened. What's in the box?
			<br><br>
		`,

		downloads: []
	},

	money: {
		title: "Pocketwatcher",
		date: "WORK IN PROGRESS",

		images: {
			base: "assets/media/software/money/money",
			total: 1
		},

		description: `
			Description coming soon.
			<br><br>
		`,

		downloads: []
	},

	whitireia: {
		title: "Whitireia Assistant",
		date: "May 2020",

		images: {
			base: "assets/media/software/whitireia/whitireia",
			total: 3
		},

		description: `
			Similar to the Yoobee Timetable app, this was an experiment in designing pleasant mobile user interfaces. The overall style of this one is cleaner, with more thought put into it.
			<br><br>
		`,

		downloads: [
			{
				icon: "android",
				text: "Download for Android",
				href: "files/whitireia-assistant.apk"
			}
		]
	},

	yoobee: {
		title: "Yoobee Timetable",
		date: "February 2017",

		images: {
			base: "assets/media/software/yoobee/yoobee",
			total: 3
		},

		description: `
			This app was designed as a fancy way to keep track of classes for the year. I didn't intend to share it publicly, but rather use it as a way to practise UI/UX design. It features a link to the class Facebook group, as well as school contact info and holiday dates.
			<br><br>
		`,

		downloads: [
			{
				icon: "android",
				text: "Download for Android",
				href: "files/yoobee-timetable.apk"
			}
		]
	},

	liminal: {
		title: "Liminal",
		date: "WORK IN PROGRESS",

		images: {
			base: "assets/media/software/liminal/liminal",
			total: 1
		},

		description: `
			Description coming soon.
			<br><br>
		`,

		downloads: []
	},

	game: {
		title: "Major Projects Game",
		date: "June 2022",

		images: {
			base: "assets/media/software/game/game",
			total: 8
		},

		description: `
			My major project for semester 1 was a video game and console reminiscent of the Nintendo DS. The game was designed as an exploration experience, featuring virtual exhibits of my work. For example, photography work would appear in a gallery, while the Cyberthug Core would be life-sized with ambient sound and lighting.
			<br><br>
			I aimed for a retro visual style, creating lighting and shadows manually with soft brushes and gradients rather than relying on modern pre-baked or real-time lighting systems.
			<br><br>
			I had planned to build the console using a Raspberry Pi, combining laser cutting and 3D printing for the casing. The operating system would be a stripped-down version of Ubuntu with a custom desktop environment, however poor planning and high ambitions meant the project was left half-finished.
			<br><br>
		`,

		downloads: [
			{
				icon: "windows",
				text: "Download for Windows",
				href: "files/majorprojects-windows.zip"
			}
		]
	},

	petscop: {
		title: "Petscop Classic",
		date: "January 2019",

		images: {
			base: "assets/media/software/petscop/petscop",
			total: 4
		},

		description: `
			This Unity game is a partial remake of the cryptic webseries Petscop, specifically the scenes involving the house and kidnapping. Refer to episode 11 if you're not sure how to progress.
			<br><br>
		`,

		downloads: [
			{
				icon: "android",
				text: "Download for Android",
				href: "files/petscop-classic.apk"
			}
		]
	}
};
