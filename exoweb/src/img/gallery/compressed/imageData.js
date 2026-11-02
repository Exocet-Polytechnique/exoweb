// src/img/gallery/imageData.js
const images = [
    { name: 'back_pic_2023', src: require('./back_pic_2023.jpg') },
    { name: 'beach_2022', src: require('./beach_2022.jpg') },
    { name: 'comp_2022', src: require('./comp_2022.jpg') },
    { name: 'comp_water_2022', src: require('./comp_water_2022.jpg') },
    { name: 'directors_speech_2024', src: require('./directors_speech_2024.jpg') },
    { name: 'fc_2023', src: require('./fc_2023.jpg') },
    { name: 'fc2_2023', src: require('./fc2_2023.jpg') },
    { name: 'fire_2022', src: require('./fire_2022.jpg') },
    { name: 'mathieu_2023', src: require('./mathieu_2023.jpg') },
    { name: 'racer_2022', src: require('./racer_2022.jpg') },
    { name: 'struct_2022', src: require('./struct_2022.jpg') },
    { name: 'team_2023', src: require('./team_2023.jpg') },
    { name: 'team_pic_inauguration_2024', src: require('./team_pic_inauguration_2024.jpg') },
    { name: 'team_pic_inauguration2_2024', src: require('./team_pic_inauguration2_2024.jpg') },
    { name: 'team_pic_lassonde_2024', src: require('./team_pic_lassonde_2024.jpg') },
    { name: 'team_spirit_2022', src: require('./team_spirit_2022.jpg') },
    { name: 'computer_work_atelier_2023', src: require('./computer_work_atelier_2023.jpg') },
    { name: 'close_up_2023', src: require('./close_up_2023.jpg') },
    { name: 'wide_angle_atelier_2022', src: require('./wide_angle_atelier_2022.jpg') },
    { name: 'mathilda_2025', src: require('./mathilda_2025.jpg') },
    { name: 'chalet_2025', src: require('./chalet_2025.jpg') },
    { name: 'hyports_2025', src: require('./hyports_2025.jpg') },
    { name: 'cockpit_2026', src: require('./cockpit_2026.jpg') },
    { name: 'boat_2026', src: require('./boat_2026.jpg') },
    { name: 'rawr_2026', src: require('./rawr_2026.jpg') },
    { name: 'bepbop_2026', src: require('./bepbop_2026.jpg') },
    { name: 'arnaud_2026', src: require('./arnaud_2026.jpg') },
    { name: 'rosalie_2026', src: require('./rosalie_2026.jpg') },
    { name: 'rosalie2_2026', src: require('./rosalie2_2026.jpg') },
    { name: 'lockin_2026', src: require('./lockin_2026.jpg') }
  ];
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const shuffledImages = shuffleArray(images);
  const getYear = (img) => parseInt(img.name.slice(-4), 10);
  const sortedImages = [...shuffledImages].sort((a, b) => getYear(b) - getYear(a));
  
  export default sortedImages;
  