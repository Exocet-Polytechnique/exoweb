// src/img/gallery/imageData.js
const images = [
    { name: 'back_pic', src: require('./back_pic.jpg') },
    { name: 'beach_22', src: require('./beach_22.jpg') },
    { name: 'comp_22', src: require('./comp_22.jpg') },
    { name: 'comp_water_22', src: require('./comp_water_22.jpg') },
    { name: 'directors_speech', src: require('./directors_speech.jpg') },
    { name: 'fc', src: require('./fc.jpg') },
    { name: 'fc2', src: require('./fc2.jpg') },
    { name: 'fire', src: require('./fire.jpg') },
    { name: 'mathieu', src: require('./mathieu.jpg') },
    { name: 'racer_22', src: require('./racer_22.jpg') },
    { name: 'struct_22', src: require('./struct_22.jpg') },
    { name: 'team23', src: require('./team23.jpg') },
    { name: 'team_pic_inauguration', src: require('./team_pic_inauguration.jpg') },
    { name: 'team_pic_lassonde', src: require('./team_pic_lassonde.JPG') },
    { name: 'team_spirit_22', src: require('./team_spirit_22.jpg') },
    { name: 'computer_work_atelier', src: require('./computer_work_atelier.jpg') },
    { name: 'close_up', src: require('./close_up.jpg') },
    { name: 'empty_boat_22', src: require('./empty_boat_22.jpg') },
    { name: 'wide_angle_atelier_22', src: require('./wide_angle_atelier_22.jpg') },
  ];
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const shuffledImages = shuffleArray(images);
  const sortedImages = [
    ...shuffledImages.filter(img => !img.name.endsWith('_22')),
    ...shuffledImages.filter(img => img.name.endsWith('_22'))
  ];
  
  export default sortedImages;
  