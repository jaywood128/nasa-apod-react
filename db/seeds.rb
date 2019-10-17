# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')

astromony_pictures = [
  {
    copyright: "John GleasonRogelio\nBernal Andreo",
    date: "2019-08-21",
    explanation: "Do you recognize this constellation?  Although it is one of the most recognizable star groupings on the sky, this is a more full Orion than you can see -- an Orion only revealed with long exposure digital camera imaging and post-processing.  Here the cool red giant Betelgeuse takes on a strong orange tint as the brightest star at the lower left.  Orion's hot blue stars are numerous, with supergiant Rigel balancing Betelgeuse on the upper right, and Bellatrix at the upper left. Lined up in Orion's belt are three stars all about 1,500 light-years away, born from the constellation's well-studied interstellar clouds. To the right of Orion's belt is a bright but fuzzy patch that might also look familiar -- the stellar nursery known as Orion's Nebula.  Finally, just barely visible to the unaided eye but quite striking here is Barnard's Loop -- a huge gaseous emission nebula surrounding Orion's Belt and Nebula discovered over 100 years ago by the pioneering Orion photographer E. E. Barnard.   APOD Podcasts: Available on iTunes and YouTube.",
    hdurl: "https://apod.nasa.gov/apod/image/1908/OrionDeep_GleasonAndreo_2048.jpg",
    media_type: "image",
    title: "The Orion You Can Almost See",
    url: "https://apod.nasa.gov/apod/image/1908/OrionDeep_GleasonAndreo_1080.jpg"
  },
  {
    copyright: "Martin Pugh",
    date: "2019-08-22",
    explanation: "Large spiral galaxy NGC 4945 is seen edge-on near the center of this cosmic galaxy portrait. In fact, it's almost the size of our Milky Way Galaxy. NGC 4945's own dusty disk, young blue star clusters, and pink star forming regions standout in the sharp, colorful telescopic image. About 13 million light-years distant toward the expansive southern constellation Centaurus, NGC 4945 is only about six times farther away than Andromeda, the nearest large spiral galaxy to the Milky Way. Though this galaxy's central region is largely hidden from view for optical telescopes, X-ray and infrared observations indicate significant high energy emission and star formation in the core of NGC 4945. Its obscured but active nucleus qualifies the gorgeous island universe as a Seyfert galaxy and home to a central supermassive black hole.",
    hdurl: "https://apod.nasa.gov/apod/image/1908/NGC4945_HaLRGB.jpg",
    media_type: "image",
    title: "Nearby Spiral Galaxy NGC 4945",
    url: "https://apod.nasa.gov/apod/image/1908/NGC4945_HaLRGB.jpg"
  }

]

# @comment = Comment.create(content: "I can see the Orion!")
# astromony_pictures.each do |picture| 
#   AstronomyPicture.create(picture)
# end  


